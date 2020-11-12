import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  productResponce: ProductResponce;
  search: string;

  constructor(private service: ProductService, private router: Router) {
    service.getAllProducts().subscribe(response => {
      this.productResponce = response;
    });
  }

  ngOnInit() {
  }

  onDelete(id: number) {
    if (localStorage.getItem('userDetails')) {
      this.router.navigateByUrl(`delete/${id}`);
    } else {
      alert('Please Login First');
    }
  }

  onUpdate(id: number) {
    if (localStorage.getItem('userDetails')) {
      this.router.navigateByUrl(`edit/${id}`);
    } else {
      alert('Please Login First');
    }
  }
}
