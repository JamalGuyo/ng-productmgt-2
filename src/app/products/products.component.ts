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
  imgStatus: boolean = true;
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  products: IProduct[];
  filteredProducts: IProduct[];
  constructor(private productsService: ProductService) {}

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = this.products;
    });
  }

  toggleImage(): void {
    this.imgStatus = !this.imgStatus;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLowerCase().indexOf(filterBy) !== -1
    );
  }
}
