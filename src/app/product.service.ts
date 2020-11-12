import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpUrl = 'http://localhost:8080/product';
  constructor(private http: HttpClient) { }

  getProducts(data) {
    return this.http.get<ProductResponce>(`${this.httpUrl}/${data}`);
  }

  addProduct(data) {
    return this.http.post<ProductResponce>(`${this.httpUrl}`, data);
  }

  modifyProduct(data) {
    return this.http.put<ProductResponce>(`${this.httpUrl}`, data);
  }

  getAllProducts() {
    return this.http.get<ProductResponce>(`${this.httpUrl}`);
  }

  deleteProduct(data) {
    return this.http.delete<ProductResponce>(`${this.httpUrl}`);
  }
}
