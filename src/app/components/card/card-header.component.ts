import { Component } from '@angular/core'

@Component({
  selector: 'app-card-header',
  template: `<div class="card-header"><ng-content></ng-content></div>`,
  styles: [
    `
      .card-header {
        padding: 2rem 2.5rem;
        border-bottom: 1px solid #eff2f5;
      }
    `,
  ],
})
export class CardHeaderComponent {}
