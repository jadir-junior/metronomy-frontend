import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-card-content',
  template: `
    <div class="card-content" [ngClass]="{ 'card-scroll': scroll }">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .card-content {
        padding: 2rem 2.5rem;
      }

      .card-scroll {
        height: 200px;
        overflow: auto;
      }
    `,
  ],
})
export class CardContentComponent {
  @Input() scroll = false
}
