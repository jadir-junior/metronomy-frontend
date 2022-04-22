import { ActivatedRoute, Router } from '@angular/router'

import { IMeta } from '../../interfaces/response.interface'

export abstract class BaseTable {
  router: Router
  route: ActivatedRoute

  params = {
    page: 1,
    limit: 5,
  }

  pagination: IMeta = {
    currentPage: 1,
    itemCount: 5,
    itemsPerPage: 0,
    totalItems: 0,
    totalPages: 0,
  }

  constructor(route: ActivatedRoute, router: Router) {
    this.route = route
    this.router = router

    route.queryParams.subscribe((params) => {
      if (params && Object.keys(params).length === 0) {
        this.updateUrl()
      } else {
        this.params = { ...this.params, ...params }
        this.updateUrl()
      }
    })
  }

  public onNext(page: number): void {
    this.params.page = page + 1
    this.updateUrl()
  }

  public onPrevious(page: number): void {
    this.params.page = page - 1
    this.updateUrl()
  }

  public onGoTo(page: number): void {
    this.params.page = page
    this.updateUrl()
  }

  private updateUrl() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: this.params,
      queryParamsHandling: 'merge',
    })
  }
}
