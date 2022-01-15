import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TableComponent } from './table.component'

const components = [TableComponent]

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class TableModule {}
