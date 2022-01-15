import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'met-table, table[met-table]',
  encapsulation: ViewEncapsulation.None,
  template: `<table
    aria-label="table"
    class="table table-base"
    [ngClass]="{
      'table-responsive': responsive,
      'table-position-left': position === 'left',
      'table-position-center': position === 'center',
      'table-position-right': position === 'right'
    }"
  >
    <ng-content></ng-content>
  </table>`,
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() responsive = false
  @Input() position: 'left' | 'center' | 'right' = 'left'
}
