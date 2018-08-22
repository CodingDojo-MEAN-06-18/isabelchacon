import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  product = new Product();

  constructor(private productservice: ProductService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.productservice.newproduct(this.product).subscribe(
      (product) => {this.router.navigateByUrl('/products');}
    );
  }

}
