import { Component } from '@angular/core'

@Component({
  selector: 'met-error',
  template: ` <div class="input-message-error"><ng-content></ng-content></div> `,
  styles: [
    `
      .input-message-error {
        margin-top: 0.5rem;
        font-size: 0.9rem;
        color: var(--danger);
      }
    `,
  ],
})
export class ErrorComponent {}
