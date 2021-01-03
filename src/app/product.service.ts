import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'https://crudcrud.com/api/3c1aef2bfa25421aa22f34db8ac5ddd0/stock';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any>{
    return this.http.get(`${this.url}`);
  }

  getProduct(id: any): Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }

  createProduct(product: any): Observable<any>{
    return this.http.post(`${this.url}`, product);
  }

  updateProduct(id: any, product: any): Observable<any>{
    return this.http.put(`${this.url}/${id}`,product);
  }

  deleteProduct(id: any): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
