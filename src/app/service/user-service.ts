import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../models/product";
import {Data} from "../data/data";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: User =
    {
      id: 1,
      login: "test",
      password: "test123",
      roles: ["admin", "user"]
    }

  getCurrentUser(): User {
    return this.currentUser;
  }

  constructor() { }
}
