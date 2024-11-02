import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // inquiry submission
  postInquiries(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/postInquiries`, data);
  }

}