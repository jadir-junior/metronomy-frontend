import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'met-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Output() iconClick = new EventEmitter()

  @Input() id = ''
  @Input() placeholder = ''
  @Input() color: 'default' | 'solid' | 'transparent' = 'default'
  @Input() flush = false
  @Input() icon = ''
  @Input() type: 'text' | 'password' | 'tel' = 'text'

  onClick() {
    this.iconClick.emit()
  }
}
