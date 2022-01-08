import { Component, Input } from '@angular/core'

@Component({
  selector: 'met-card-content',
  template: `
    <div
      class="card-content"
      [ngClass]="{ 'card-scroll': scroll }"
      [ngStyle]="{
        'height': setScrollHeight()
      }"
    >
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .card-content {
        padding: 2rem 2.5rem;
      }

      .card-scroll {
        overflow: auto;
      }

      div::-webkit-scrollbar,
      main::-webkit-scrollbar,
      ol::-webkit-scrollbar,
      pre::-webkit-scrollbar,
      span::-webkit-scrollbar,
      ul::-webkit-scrollbar {
        width: 0.4rem;
        height: 0.4rem;
      }

      div::-webkit-scrollbar-thumb,
      main::-webkit-scrollbar-thumb,
      ol::-webkit-scrollbar-thumb,
      pre::-webkit-scrollbar-thumb,
      span::-webkit-scrollbar-thumb,
      ul::-webkit-scrollbar-thumb {
        background-color: #eff2f5;
      }
    `,
  ],
})
export class CardContentComponent {
  @Input() scroll = false
  @Input() contentScrollHeight = 'auto'

  setScrollHeight(): string {
    if (this.scroll && this.contentScrollHeight !== 'auto') {
      return this.contentScrollHeight
    }

    if (this.scroll) {
      return '200px'
    }

    return 'auto'
  }
}
