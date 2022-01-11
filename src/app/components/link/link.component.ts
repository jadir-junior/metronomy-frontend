import { Component, Input } from '@angular/core'

@Component({
  selector: 'met-link',
  template: ` <a
    data-testid="link"
    [href]="href"
    [ngClass]="{ 'link-small': size === 'small', 'link-medium': size === 'medium' }"
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

      .link-small {
        font-size: 1.075rem;
      }

      .link-medium {
        font-size: 1.2rem;
      }
    `,
  ],
})
export class LinkComponent {
  @Input() href = ''
  @Input() size: 'medium' | 'small' = 'small'
}
