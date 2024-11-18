import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost/backend/submitOrder.php'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  submitOrder(order: any): Observable<any> {
    return this.http.post(this.apiUrl, order);
  }
}
