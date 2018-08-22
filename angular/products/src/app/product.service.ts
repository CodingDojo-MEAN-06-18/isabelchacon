import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'Rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  productList: Array<Product> = [{
    id: "1",
    title: "My Camera",
    price: 780.99,
    url: 'https://static.bhphoto.com/images/images500x500/canon_1263c005_eos_80d_dslr_camera_1455767513000_1225876.jpg'
  },
  {
    id: "2",
    title: "My Dog",
    price: 18000000000,
    url: 'https://static.boredpanda.com/blog/wp-content/uploads/2017/09/funny-dog-thoughts-tweets-1.jpg'
  }];

  products: BehaviorSubject <any[]> = new BehaviorSubject(this.productList);

  constructor() { }

  delete(newid) : Observable <Product[]> {
    this.productList = this.productList.filter(product => product.id != newid);
    this.products.next(this.productList);
    return this.products;
  }

  fetchProduct(id){
    const product = this.productList.filter(product => product.id == id);
    return product;
  }

  update(newproduct): Observable <Product[]>{
    const idx = this.productList.findIndex(product => product.id == newproduct.id);
    this.productList[idx]=newproduct;
    this.products.next(this.productList);
    return this.products;
  }

  newproduct(product): Observable <Product[]> {
    product.id = uuidv4();
    this.productList.push(product);
    this.products.next(this.productList);
    return this.products;
  }
}
