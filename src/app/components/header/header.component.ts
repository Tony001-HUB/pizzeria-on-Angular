import { Component, OnInit } from '@angular/core';
import {Product} from "../../models/product";
import {CartService} from "../../service/cart-service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
  }

}
