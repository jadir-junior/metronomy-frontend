import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'met-input',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() id = ''
  @Input() placeholder = ''
  @Input() color: 'default' | 'solid' | 'transparent' = 'default'
  @Input() flush = false
  @Input() icon = false
  @Input() type: 'text' | 'password' | 'tel' = 'text'
}
