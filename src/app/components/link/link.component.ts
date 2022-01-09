import { Component, Input } from '@angular/core'

@Component({
  selector: 'met-link',
  template: ` <a
    [href]="href"
    [ngClass]="{ 'small': size === 'small', 'medium': size === 'medium' }"
    ><ng-content></ng-content
  ></a>`,
  styles: [
    `
      a {
        font-weight: 500;
        color: #009ef7;
        text-decoration: none;
      }

      a:hover {
        color: #33b1f9;
      }

      .small {
        font-size: 1.075rem;
      }

      .medium {
        font-size: 1.2rem;
      }
    `,
  ],
})
export class LinkComponent {
  @Input() href = ''
  @Input() size: 'medium' | 'small' = 'small'
}
