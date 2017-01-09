import { GreenTubeTestPage } from './app.po';

describe('green-tube-test App', function() {
  let page: GreenTubeTestPage;

  beforeEach(() => {
    page = new GreenTubeTestPage();
    page.navigateTo();
  });

  it('should display message saying GreenTube test', () => {
    expect(page.getParagraphText()).toEqual('GreenTube test');
  });

  it('should test button disability TRUE', () => {
    expect(page.isButtonDisabled(true)).toBeTruthy();
  });

  it('should test button disability FALSE', () => {
    expect(page.isButtonDisabled(false)).toBeFalsy();
  });
});
