import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartitems = [];
  totalprice:number=0;

  constructor() { 
    
  }

  addToCart(item) {
    
      this.cartitems.push(item);
    //  sessionStorage.setItem('mycarts', JSON.stringify(this.cartitems));
     localStorage.setItem('mycar', JSON.stringify(this.cartitems));
    // localStorage.setItem('carts', JSON.stringify(item));
    
   

  }

  getItems() {
    //  return this.cartitems;
    // return sessionStorage.getItem('mycarts');
    // return JSON.parse(sessionStorage.getItem('mycarts'));
    return JSON.parse(localStorage.getItem('mycar'));
    
    // localStorage.getItem('carts');
    // console.log(localStorage.getItem('carts'));
  }

  clearCart(product) {
    console.log(product)
    let index: number = this.cartitems.indexOf(product);
    if (index !== -1) {
         this.cartitems.splice(index, 1);
         localStorage.setItem('mycar', JSON.stringify(this.cartitems));


         console.log(product)
         
        
    }   
    
    // this.cartitems=this.cartitems.splice(this.cartitems.indexOf(product), 1);
    // this.cartitems = [];
    
    return JSON.parse(localStorage.getItem('mycar'));
  }
  
}
