import { HttpClient } from '@angular/common/http'
import { IResponsePagination } from '../interfaces/response.interface'
import { IUser } from '../interfaces/user.interface'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(page: number, limit: number): Observable<IResponsePagination<IUser[]>> {
    return this.http.get<IResponsePagination<IUser[]>>(
      `http://localhost:3000/users?page=${page}&limit=${limit}`
    )
  }
}
