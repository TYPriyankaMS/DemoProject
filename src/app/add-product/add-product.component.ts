import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {
  flag: boolean;
  product: Product;
  productResponce: ProductResponce;
  uiClass: string;
  productForm = new FormGroup({
    name: new FormControl(),
    imageUrl: new FormControl(),
    details: new FormControl(),
    quantity: new FormControl(),
    price: new FormControl(),
  });
  constructor(private service: ProductService) { }

  ngOnDestroy(): void {
  }
  ngOnInit() {
  }
  setClass(classNames) {
    this.uiClass = classNames;
  }

  onSubmit() {
    this.product = this.productForm.value;
    console.log(this.product);
    this.service.addProduct(this.product).subscribe(data => {
      console.log(data);
      this.productResponce = data;
      this.productForm.reset();
      if (this.productResponce.statusCode === 201) {
        this.uiClass = 'alert alert-success';
      } else {
        this.uiClass = 'alert alert-denger';
      }
    });
  }
}
