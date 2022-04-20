import { Component, OnInit } from '@angular/core'

import { IResponsePagination } from '../interfaces/response.interface'
import { IUser } from '../interfaces/user.interface'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  users: IUser[] = []

  constructor(private userSerivce: UserService) {}

  ngOnInit(): void {
    this.userSerivce.getUsers().subscribe((response: IResponsePagination<IUser[]>) => {
      this.users = response.items
    })
  }
}
