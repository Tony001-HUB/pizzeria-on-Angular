import {Category} from './category';
import {Ingredient} from './ingredient';

export interface Product {
  id: number;
  title: string;
  description: string;
  isEnabled: boolean;
  photo: string;
  price: number;
  weight: number;
  category: Category;
  ingredients: Ingredient[];
}
