import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'met-form-field',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div
      class="wrapper-input"
      [ngClass]="{
        'solid': appearance === 'solid',
        'default': appearance === 'default',
        'transparent': appearance === 'transparent'
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['form-field.component.scss'],
})
export class FormFieldComponent {
  @Input() appearance: 'solid' | 'default' | 'transparent' = 'default'
}
