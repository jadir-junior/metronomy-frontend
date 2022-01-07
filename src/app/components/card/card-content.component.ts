import { Component } from '@angular/core'

@Component({
  selector: 'app-card-content',
  template: ` <div class="card-content">card-content works!</div> `,
  styles: [
    `
      .card-content {
        padding: 2rem 2.5rem;
      }
    `,
  ],
})
export class CardContentComponent {}
