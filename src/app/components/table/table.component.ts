import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'met-table',
  encapsulation: ViewEncapsulation.None,
  template: `<table
    aria-label="table"
    class="table table-base"
    [ngClass]="{
      'table-responsive': responsive,
      'table-border': tableBorder,
      'table-rounded': tableRounded,
      'table-text-align-left': textAlign === 'left',
      'table-text-align-center': textAlign === 'center',
      'table-text-align-right': textAlign === 'right',
      'table-row-border-solid': rowBorder === 'solid',
      'table-row-border-dashed': rowBorder === 'dashed',
      'table-striped': striped
    }"
  >
    <ng-content></ng-content>
  </table>`,
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() responsive = false
  @Input() textAlign: 'left' | 'center' | 'right' = 'left'
  @Input() rowBorder: 'none' | 'solid' | 'dashed' = 'none'
  @Input() striped = false
  @Input() tableBorder = false
  @Input() tableRounded = false
}
