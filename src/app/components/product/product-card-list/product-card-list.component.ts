import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../models/product";

@Component({
  selector: 'app-product-card-list',
  templateUrl: './product-card-list.component.html',
  styleUrls: ['./product-card-list.component.css']
})
export class ProductCardListComponent implements OnInit {

  @Input()  product: Product[];
  constructor() { }

  ngOnInit(): void {
  }

}
