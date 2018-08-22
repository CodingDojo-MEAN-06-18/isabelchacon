import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import { ProductService } from '../../product.service';
import { Product } from '../../models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  productid: string = '';
  product = new Product();

  constructor(private route:ActivatedRoute, private productservice: ProductService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map(params => params.get('id')),
      tap(id => this.productid = id),
      switchMap(id => this.productservice.fetchProduct(id)))
    .subscribe(
        (Product) => {
          this.product = Product;
        }
    );
  }

  onDelete(id){
    this.productservice.delete(id).subscribe(
      products => {
        console.log("Product deleted");
        this.router.navigateByUrl('/products/list');
      }
    );
  }

  onUpdate(){
    this.productservice.update(this.product).subscribe(
      (product) => {this.router.navigateByUrl('/products/list');}
    );
  }

}
