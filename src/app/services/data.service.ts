import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://portfolio-inquiries.onrender.com/api';

  constructor(private http: HttpClient) { }

  // inquiry submission
  postInquiries(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/postInquiries`, data);
  }

}
