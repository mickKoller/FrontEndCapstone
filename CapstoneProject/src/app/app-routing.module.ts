import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { IndexComponent } from './index/index.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { CardPageComponent } from './card-page/card-page.component';



const routes: Routes = [
  //rubric 64
  { path: '#/about', component: AboutUsComponent },
  // rubric 62
  { path: '#/contact', component: ContactUsComponent },
  //rubric 13
  { path: '#', component: IndexComponent },
  //rubric 34
  { path: '#/shopping', component: ShoppingPageComponent },
  //rubric 46
  { path: 'product-page/:name', component: ProductpageComponent },
  //rubric 56
  { path: '#/cart', component: CardPageComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {



}
