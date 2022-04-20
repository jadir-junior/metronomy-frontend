import { CardModule } from '../components/card/card.module'
import { CommonModule } from '@angular/common'
import { TableModule as ComponentTableModule } from '../components/table/table.module'
import { NgModule } from '@angular/core'
import { TableComponent } from './table.component'
import { TableRoutingModule } from './table-routing.module'

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableRoutingModule, ComponentTableModule, CardModule],
})
export class TableModule {}
