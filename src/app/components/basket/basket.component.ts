import {Component, Input, OnInit} from '@angular/core';
import { CartService } from 'src/app/service/cart-service';
import {Product} from "../../models/product";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  public productsInCart: Product[];
  public product: Product;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProductCart();
  }

  onBuyBtnKeyUp(currentItem) {
    this.cartService.deleteProductCart(currentItem);
  }
}
