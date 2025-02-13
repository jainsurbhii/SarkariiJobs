import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  apiUrl='http://localhost:8080/api/jobs'

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
 
  }
}

