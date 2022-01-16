import { BasicTableData, IEmployee } from './components/table/mock/table.mock'
import { Component, OnInit } from '@angular/core'

import { SelectionModel } from './components/table/selection.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  employeers: IEmployee[] = []
  selection = new SelectionModel<IEmployee>(true, [])

  ngOnInit(): void {
    this.getEmplyeers()
  }

  getEmplyeers(): void {
    this.employeers = BasicTableData.data
    this.selection.setData(this.employeers)
  }
}
