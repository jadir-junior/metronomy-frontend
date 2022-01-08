import { Component } from '@angular/core'

@Component({
  selector: 'met-card-footer',
  template: `<div class="card-footer"><ng-content></ng-content></div>`,
  styles: [
    `
      .card-footer {
        padding: 2rem 2.25rem;
        border-top: 1px solid #eff2f5;
      }
    `,
  ],
})
export class CardFooterComponent {}
