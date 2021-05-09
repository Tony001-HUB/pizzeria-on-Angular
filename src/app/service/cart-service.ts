import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];

  constructor(private localStorageService: LocalStorageService) { }

  addToCart(product: Product): void {
    let productsArrayJson = this.localStorageService.get("DATA");
    let productsArray: Product[];

    if(productsArrayJson !== null) {
      productsArray = JSON.parse(productsArrayJson);
    }
    else {
      productsArray = [];
    }

    productsArray.push(product);
    this.localStorageService.set("DATA", JSON.stringify(productsArray));

  }

  getProductCart(): Product[] {
    return JSON.parse(this.localStorageService.get("DATA"));
  }

  getCountProductInCart(): number{
    return JSON.parse(this.localStorageService.get("DATA")).length;
  }

  deleteProductCart(product: Product): void {
    let productsArrayJson = this.localStorageService.get("DATA");
    let productsArray: Product[];

    productsArray = JSON.parse(productsArrayJson);

    productsArray.push(productsArray.find(
      currentProduct => currentProduct.id === product.id
    ));
    console.log(productsArray);

  }
}












