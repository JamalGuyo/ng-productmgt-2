import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  imgMargin: number = 10;
  imgWidth: number = 50;
  imgStatus: boolean = false;
  products: IProduct[];
  constructor(private productsService: ProductService) {}

  ngOnInit() {
    this.productsService
      .getProducts()
      .subscribe(products => (this.products = products));
  }

  toggleImage(): void {
    this.imgStatus = !this.imgStatus;
  }
}
