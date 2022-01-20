import { Component, Input } from '@angular/core'

@Component({
  selector: 'met-label',
  template: ` <label class="input-label" [for]="for"><ng-content></ng-content></label> `,
  styles: [
    `
      .input-label {
        display: block;
        color: var(--text-black-dark);
        font-weight: 600;
        margin-bottom: 0.4rem;
      }
    `,
  ],
})
export class LabelComponent {
  @Input() for = ''
}
