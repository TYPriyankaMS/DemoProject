import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-from-json',
  templateUrl: './data-from-json.component.html',
  styleUrls: ['./data-from-json.component.css']
})
export class DataFromJsonComponent implements OnInit {
  search: string;
  data;
  constructor(private http: HttpClient) {
    this.readJson();
   }

  readJson() {
    this.http.get<Product>('../../assets/products.json').subscribe(response=>{
      this.data = response;
      console.log(this.data);
    });
  }
  ngOnInit() {
  }

}

interface Product {
  name: string;
  image: string;
  price: number;
}
