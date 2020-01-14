import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(activatedRoute: ActivatedRoute, service: ProductService, route: Router) {
    activatedRoute.params.subscribe(data => {
      service.deleteProduct(data).subscribe(res => {
        route.navigateByUrl('search');
      });
    });
  }

  ngOnInit() {
  }

}
