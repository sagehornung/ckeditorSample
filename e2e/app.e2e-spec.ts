import { CkeditorSamplePage } from './app.po';

describe('ckeditor-sample App', () => {
  let page: CkeditorSamplePage;

  beforeEach(() => {
    page = new CkeditorSamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
