import { Component, Input } from '@angular/core'

@Component({
  selector: 'met-card',
  template: `
    <div
      data-testid="card"
      class="card"
      [ngClass]="{
        'border-shadow': border === 'shadow',
        'border-solid': border === 'solid',
        'border-dashed': border === 'dashed'
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .card {
        border-radius: 8px;
      }

      .border-shadow {
        box-shadow: rgba(0, 0, 0, 0.05) 0px 1.6px 16px 4px;
      }

      .border-solid {
        border: 1px solid #eff2f5;
      }

      .border-dashed {
        border: 1px dashed #eff2f5;
      }
    `,
  ],
})
export class CardComponent {
  @Input() border: 'shadow' | 'solid' | 'dashed' = 'shadow'
}
