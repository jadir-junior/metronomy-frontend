import { ActivatedRoute, Router } from '@angular/router'
import { Component, OnInit } from '@angular/core'

import { BaseTable } from '../components/table/base-table'
import { IResponsePagination } from '../interfaces/response.interface'
import { IUser } from '../interfaces/user.interface'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent extends BaseTable implements OnInit {
  users: IUser[] = []

  constructor(
    private userSerivce: UserService,
    public override route: ActivatedRoute,
    public override router: Router
  ) {
    super(route, router)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params) {
        this.getUsers()
      }
    })
  }

  getUsers() {
    this.userSerivce
      .getUsers(this.params.page, this.params.limit)
      .subscribe((response: IResponsePagination<IUser[]>) => {
        this.users = response.items
        this.pagination = response.meta
      })
  }
}
