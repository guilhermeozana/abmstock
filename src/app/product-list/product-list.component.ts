import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/product';
import { Client } from 'src/client';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 stock: Observable<Product[]>;

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(){
    this.getProducts();
  }

  getProducts(){
    this.stock = this.productService.getProducts();
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe(data => {
      console.log(data);
      this.getProducts();
    },error => console.log(error)); 
  }

  productDetails(id: number){
    this.router.navigate(['details', id])
  }

  updateProduct(id: number){
    this.router.navigate(['update', id])
  }



}
