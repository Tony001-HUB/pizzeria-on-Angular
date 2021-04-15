import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import {Data} from "../../data/data";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  idString: number;
  searchDataAboutItem: Product;
  constructor(route: ActivatedRoute) {
    this.idString = route.snapshot.params.id;
  }

  searchByIdProduct(searchId): void {
    this.searchDataAboutItem = Data.product.find(item => item.id == searchId);
    console.log(this.searchDataAboutItem)
  }

  ngOnInit(): void {
    this.searchByIdProduct(this.idString);
  }

}
