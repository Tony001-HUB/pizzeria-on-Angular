import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { Data } from '../data/data';
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  productData = new BehaviorSubject<Product[]>(Data.product);

  listenProductCard(): void {
    this.productData.next(Data.product);
  }

  constructor() { }
}
