import { JointangularPage } from './app.po';

describe('jointangular App', () => {
  let page: JointangularPage;

  beforeEach(() => {
    page = new JointangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
