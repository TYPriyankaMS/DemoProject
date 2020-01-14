import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-search-one',
  templateUrl: './search-one.component.html',
  styleUrls: ['./search-one.component.css']
})
export class SearchOneComponent implements OnInit {
  productResponce: ProductResponce;

  constructor(private service: ProductService) { }

  ngOnInit() {
  }

  onSubmit(data) {
    this.service.getProducts(data.value.name).subscribe(responce => {
      this.productResponce = responce;
    });
  }
}
