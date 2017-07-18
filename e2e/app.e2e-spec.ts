import { ProtoformPage } from './app.po';

describe('protoform App', () => {
  let page: ProtoformPage;

  beforeEach(() => {
    page = new ProtoformPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
