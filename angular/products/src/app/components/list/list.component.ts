import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: any[] = [];

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.productservice.products.subscribe(
      (products) => {this.products = products;
                    console.log(this.products)}
    );
  }

  onDelete(id){
    this.productservice.delete(id).subscribe(
      products => {
        console.log("Product deleted");
      }
    );
  }

}
