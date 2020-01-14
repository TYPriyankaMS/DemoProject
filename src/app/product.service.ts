import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  getProducts(data) {
    return this.http.get<ProductResponce>(`${this.httpUrl}/get?name=${data}`);
  }

  addProduct(data) {
    return this.http.post<ProductResponce>(`${this.httpUrl}/add`, data);
  }

  modifyProduct(data) {
    return this.http.put<ProductResponce>(`${this.httpUrl}/update`, data);
  }

  getAllProducts() {
    return this.http.get<ProductResponce>(`${this.httpUrl}/get-all`);
  }

  deleteProduct(data) {
    return this.http.delete<ProductResponce>(`${this.httpUrl}/delete/${data}`);
  }
}
