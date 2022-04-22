export interface IMeta {
  totalItems: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
}

interface ILinks {
  first: string
  previous: string | null
  next: string
  last: string
}

export interface IResponsePagination<T> {
  items: T
  meta: IMeta
  links: ILinks
}
