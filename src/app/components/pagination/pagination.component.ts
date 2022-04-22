import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'

@Component({
  selector: 'met-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['pagination.component.scss'],
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage = 0
  @Input() totalPages = 0

  @Output() goTo = new EventEmitter<number>()
  @Output() next = new EventEmitter<number>()
  @Output() previous = new EventEmitter<number>()

  public pages: number[] = []

  ngOnChanges(changes: SimpleChanges): void {
    if (
      (changes['currentPage'] && changes['currentPage'].currentValue) ||
      (changes['totalPages'] && changes['totalPages'].currentValue)
    ) {
      this.pages = this.getPages(this.currentPage, this.totalPages)
    }
  }

  public onGoTo(page: number): void {
    this.goTo.emit(page)
  }

  public onNext(): void {
    this.next.emit(this.currentPage)
  }

  public onPrevious(): void {
    this.previous.next(this.currentPage)
  }

  private getPages(currentPage: number, totalPages: number): number[] {
    if (totalPages <= 5) {
      return [...Array(totalPages).keys()].map((x) => ++x)
    }

    return [...Array(totalPages).keys()].map((t) => ++t)

    // if (current > 5) {
    //   if (current >= total - 4) {
    //     return [1, -1, total - 4, total - 3, total - 2, total - 1, total]
    //   } else {
    //     return [1, -1, current - 1, current, current + 1, -1, total]
    //   }
    // }

    // return [1, 2, 3, 4, 5, -1, total]
  }
}
