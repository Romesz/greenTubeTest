import { GreenTubeTestPage } from './app.po';

describe('green-tube-test App', function() {
  let page: GreenTubeTestPage;

  beforeEach(() => {
    page = new GreenTubeTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
