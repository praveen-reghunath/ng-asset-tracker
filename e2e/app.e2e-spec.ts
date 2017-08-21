import { NgAssetTrackerPage } from './app.po';

describe('ng-asset-tracker App', () => {
  let page: NgAssetTrackerPage;

  beforeEach(() => {
    page = new NgAssetTrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
