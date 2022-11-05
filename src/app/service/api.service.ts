import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  URL = 'http://randomuser.me/api/';
  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(`${this.URL}/?page=1&results=20`);
  }

  public getWoman(): Observable<any> {
    return this.http.get(`${this.URL}/?gender=female&?page=1&results=20`);
  }
  public getMen(): Observable<any> {
    return this.http.get(`${this.URL}/?gender=male&?page=1&results=20`);
  }
}
