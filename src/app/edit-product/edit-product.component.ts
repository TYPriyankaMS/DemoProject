import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productToUpdate: Product;
  productResponse: ProductResponce;
  productForm: FormGroup;
  constructor(
    private service: ProductService,
    private activatedRouter: ActivatedRoute,
    private router: Router) {
    this.activatedRouter.params.subscribe(idData => {
      this.service.getProducts(idData.id).subscribe(data => {
        console.log(data);
        this.productToUpdate = data.products[0];
        console.log(this.productToUpdate);
        this.productForm = new FormGroup({
          id: new FormControl(this.productToUpdate.id),
          name: new FormControl(this.productToUpdate.name),
          imageUrl: new FormControl(this.productToUpdate.imageUrl),
          details: new FormControl(this.productToUpdate.details),
          quantity: new FormControl(this.productToUpdate.quantity),
          price: new FormControl(this.productToUpdate.price)
        });
      });
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.service.modifyProduct(this.productForm.value).subscribe(data => {
      this.productResponse = data;
      this.router.navigateByUrl('/search');
    });
  }
}
