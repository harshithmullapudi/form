import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {concatStatic} from "rxjs/operator/concat";
declare let firebase:any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myform:FormGroup;
  public waitcheck:boolean = false
  public submitc:boolean = false;
  public error:boolean = false
  public subdata:any = null
  public aftdata:any = null
  public success:boolean = false
 constructor()
 {

    this.myform = new FormGroup({
      "regno" : new FormControl('',[Validators.required]),
      "name" : new FormControl('',[Validators.required]),
      "email" : new FormControl('',[Validators.required,Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      "mobile" : new FormControl('',[Validators.required]),
      "mordata" : new FormControl('',[Validators.required]),
      "aftdata" : new FormControl('',[Validators.required])
    })

console.log(this.myform.valid)

   firebase.database( ).ref('details').on('value',(snapshot)=>{
    this.subdata = snapshot.val()
     this.aftdata = this.subdata.pop()
     let fg = this.subdata.pop();
     console.log(this.subdata)
    let sem = []
     sem.push(this.aftdata)
     sem.push(fg)
     this.aftdata = sem

   })

 }


 ////////////////////////////////////////////////////////////////////////////////////////
  selectaft(s:any)
  {
    if(!s)
    {
      this.myform.patchValue({"aftdata" : "None"})
    }
    else {
      this.myform.patchValue({"aftdata": s.name});
      console.log(this.myform.value)
    }
  }
  selectmor(s:any)
  {
    if(!s)
    {
      this.myform.patchValue({"mordata" : "None"})
    }
    else {
      this.myform.patchValue({"mordata": s.name})
      console.log(this.myform.value)
    }
  }











 ////////////////////////////////////////////////////////////////////////////////////////
 search()
 {
   this.waitcheck = true;
   console.log(this.myform.get("regno").value)
   firebase.database().ref().child('student').orderByChild("FIELD1").equalTo(this.myform.get('regno').value+"").once('value',(snapshot)=>{

     console.log(snapshot.val())
     if(snapshot.val()== null)
     {
       this.waitcheck = false
       this.error = true
       setTimeout(()=>{
         this.error = false
       },5000)
     }
     else {
       let ref = snapshot.val()
       ref = Object.keys(ref).map((k)=>{
         return ref[k]
       })
       ref = ref[0]
       this.myform.patchValue({"name": ref.FIELD2})
       this.waitcheck = false
     }
   })
 }
 ///////////////////////////////////////////////////////////////////////////////////////////

  submit() {
    if (!this.submitc) {
      this.submitc = true
      if (this.myform.get("mordata").value == 'None' && this.myform.get("aftdata").value == "None") {
        alert("Select any one");
        this.submitc = false
      }
      else {

        firebase.database().ref().child('submit').orderByChild("regno").equalTo(this.myform.get("regno").value).once('value', (snapshot) => {
          console.log(snapshot.val())
          if (snapshot.val() == null) {
            if (this.myform.get('mordata').value) {
              firebase.database().ref().child('details').orderByChild('name').equalTo(this.myform.get('mordata').value + "").once('value', (snapshot) => {
                firebase.database().ref().child("details/" + Object.keys(snapshot.val()).map((k) => {
                    return k
                  })[0] + "/number").transaction((search, err) => {
                  console.log(search)
                  if (search > 0) {
                    return search - 1
                  }
                })

              })
            }
            if (this.myform.get('aftdata').value) {
              firebase.database().ref().child('details').orderByChild('name').equalTo(this.myform.get('aftdata').value + "").once('value', (snapshot) => {
                firebase.database().ref().child("details/" + Object.keys(snapshot.val()).map((k) => {
                    return k
                  })[0] + "/number").transaction((search, err) => {
                  console.log(search)
                  if (search > 0) {
                    return search - 1
                  }
                })

              })
            }
            firebase.database().ref('submit').push(this.myform.value)
            this.success = true
          }
          else {
            alert("Already registered")

          }
        })

      }
    }
  }

}
