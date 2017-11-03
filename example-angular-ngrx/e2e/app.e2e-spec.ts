import { ExampleAngular2NgrxPage } from './app.po';

describe('example-angular2-ngrx App', function() {
  let page: ExampleAngular2NgrxPage;

  beforeEach(() => {
    page = new ExampleAngular2NgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
