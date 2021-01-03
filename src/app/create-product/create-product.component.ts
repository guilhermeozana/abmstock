import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = new Product();

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit() {
  }

  newProduct(): void{
    this.product = new Product();
  }

  save(){
    this.productService.createProduct(this.product)
    .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.goToList();
  }

  onSubmit(){
    this.save();
  }

  goToList(){
    this.router.navigate(['/products']);
  }
}
