import { Component } from '@angular/core'

@Component({
  selector: 'app-card-header',
  template: `<div class="card-header">
    <div class="card-toolbar">
      <div><ng-content></ng-content></div>
    </div>
  </div>`,
  styles: [
    `
      .card-header {
        padding: 2rem 2.5rem;
        border-bottom: 1px solid #eff2f5;
      }

      .card-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `,
  ],
})
export class CardHeaderComponent {}
