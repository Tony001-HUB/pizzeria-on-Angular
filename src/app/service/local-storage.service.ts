import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{

  clear(): void {
    localStorage.clear();
  }

   get(key: string): string {
     return localStorage.getItem(key);
   }

   remove(key: string): void {
     localStorage.removeItem(key);
   }

   set(key: string, value: string): void {
     localStorage.setItem(key, value);
   }
}
