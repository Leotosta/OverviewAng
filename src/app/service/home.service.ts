import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import IPost from '../models/IPost';
import UserData from '../models/UserData';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public subjectt = new Subject<any>()

  public userData: UserData[] = [
    {name: 'Leo', patrimony: 100, age: 26},
    {name: 'Bruno', patrimony: 250, age: 26},
    {name: 'Alex', patrimony: 300, age: 26},
    {name: 'Arthur', patrimony: 140, age: 26}
  ] 

  public headers = new HttpHeaders({
    'Content-type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getUsersPosts(): Observable<IPost> {
    return this.http.get<IPost>('https://jsonplaceholder.typicode.com/posts');
  }

  sendUser(user: UserData) {
    return this.subjectt.next(user);
  }

  getUser(): Observable<UserData> {
    return this.subjectt.asObservable();
  }
}
