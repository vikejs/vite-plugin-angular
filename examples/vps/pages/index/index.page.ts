import { Component, Input, OnChanges } from '@angular/core';
export { Page };

@Component({
  standalone: true,
  template: `<div>Index page works</div>`,
})
class Page implements OnChanges {
  @Input() pageProps: any;

  ngOnChanges() {
    console.log(`Running on ${import.meta.env.SSR ? 'server' : 'browser'} `);
    console.log('Page props', this.pageProps);
  }
}
