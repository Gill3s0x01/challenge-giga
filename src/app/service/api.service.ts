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

  public getAll(page: number): Observable<any> {
    return this.http.get(`${this.URL}/?results=20&?page=` + page);
  }

  public getWoman(page: number): Observable<any> {
    return this.http.get(`${this.URL}/?gender=female&results=20&?page=` + page);
  }
  public getMen(page: number): Observable<any> {
    return this.http.get(`${this.URL}/?gender=male&&results=20&?page=` + page);
  }
}
