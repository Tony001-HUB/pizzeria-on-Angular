import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductCardListComponent } from './components/product/product-card-list/product-card-list.component';
import { ProductCardComponent } from './components/product/product-card/product-card.component';
import {Route, RouterModule} from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


const routes: Route[] = [
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ingredients', component: IngredientsComponent },
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'product/:id', component: ProductDetailComponent },

  {path: '**' , component: NotFoundPageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardListComponent,
    ProductCardComponent,
    AboutComponent,
    HomeComponent,
    IngredientsComponent,
    NotFoundPageComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
