import { Component, Input } from '@angular/core'

@Component({
  selector: 'met-input',
  template: `<input
    class="form-control"
    [ngClass]="{
      'form-control-default': color === 'default',
      'form-control-solid': color === 'solid',
      'form-control-transparent': color === 'transparent',
      'form-control-flush': flush
    }"
    [placeholder]="placeholder"
    [id]="id"
  />`,
  styles: [
    `
      .form-control {
        width: 100%;
        padding: 0.7rem 1.2rem;
        font-size: 1rem;
        box-sizing: border-box;
        background-clip: padding-box;
        border-radius: 8px;
        color: #181c32;
        border: none;
      }

      .form-control:focus {
        outline: 0;
      }

      .form-control-default {
        background-color: #fff;
        border: 1px solid #e4e6ef;
      }

      .form-control-default:focus {
        border-color: #b5b5c3;
      }

      .form-control-solid {
        background-color: #f5f8fa;
        border-color: #f5f8fa;
        color: #5e6278;
      }

      .form-control-transparent {
        background-color: transparent;
        border: transparent;
      }

      .form-control-flush {
        background-color: transparent;
        border: transparent;
      }

      ::placeholder {
        color: #a1a5b7;
        opacity: 1;
      }
    `,
  ],
})
export class InputComponent {
  @Input() id = ''
  @Input() placeholder = ''
  @Input() color: 'default' | 'solid' | 'transparent' = 'default'
  @Input() flush = false
}
