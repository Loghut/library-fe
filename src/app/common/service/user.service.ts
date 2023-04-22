import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {User} from "../model/user.model";
@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserService {
  private url =
    'http://labs.fpv.umb.sk:8081/api/customer';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${userId}`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>
    (`${this.url}/${user.id}`, user);
  }
  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>
    (`${this.url}/${userId}`);
  }

}
