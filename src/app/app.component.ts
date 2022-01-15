import { BasicTableData, IEmployee } from './components/table/mock/table.mock'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  employeers: IEmployee[] = []

  ngOnInit(): void {
    this.getEmplyeers()
  }

  getEmplyeers(): void {
    this.employeers = BasicTableData.data
  }
}
