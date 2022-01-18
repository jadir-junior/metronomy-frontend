import { Component, Input } from '@angular/core'

@Component({
  selector: 'met-button',
  template: `
    <button
      class="btn"
      [ngClass]="{
        'btn-white': color === 'white',
        'btn-primary': color === 'primary',
        'btn-light': color === 'light',
        'btn-secondary': color === 'secondary',
        'btn-success': color === 'success',
        'btn-info': color === 'info',
        'btn-warning': color === 'warning'
      }"
    >
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() color:
    | 'white'
    | 'primary'
    | 'light'
    | 'secondary'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'dark' = 'primary'
}
