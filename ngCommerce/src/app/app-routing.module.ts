import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerpageComponent } from './pages/customerpage/customerpage/customerpage.component';
import { ItempageComponent } from './pages/itempage/itempage/itempage.component';
import { LoginComponent } from './pages/login/login/login.component';
import { CreatepageComponent } from './pages/createcustomer/createpage.component';
import { CreatepageitemComponent } from './pages/createitem/createitem.component';
import { Customer } from './model/customer';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [{
  path: 'CustomerPage',
  component: CustomerpageComponent,
 } ,
 {
  path: '',
  component: LoginComponent,

},{
  path: 'CreateCustomer',
  component: CreatepageComponent,
 },
 {
  path: 'ItemPage',
  component: ItempageComponent,
 },
 {
  path: 'CreateItem',
  component: CreatepageitemComponent,
 } ,
 {
  path: 'items/category/:categoryId',
  component: ItempageComponent,
 } ,
 {
  path: 'items/:itemId',
  component: ItempageComponent,
 } ,
 {
  path: 'ItemPage/:email',
  component: ItempageComponent,
 } ,
 { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
