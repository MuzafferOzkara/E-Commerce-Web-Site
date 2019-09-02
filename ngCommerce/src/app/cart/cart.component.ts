import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products;
  total:number=0;

  constructor(
    private cartService: CartService
  ) {
    // this.products = this.cartService.getItems();
    
    
    
    

   

  

   }
   calcTotal(){
    for(let i=0;i<this.products.length;i++){
      this.total+=this.products[i].price;
      
    }
    return this.total;
  }
   
  
  

  

  ngOnInit() {
    this.products=this.cartService.getItems();
    this.calcTotal();

  
    
  
    
    console.log(this.products);
    
 
    
    
  }

  clearCart(product){
    // this.cartService.clearCart(product);
    let rmPoduct=this.products.indexOf(product)
    if (rmPoduct !== -1) {
    this.total-=this.products[rmPoduct].price;
    this.products.splice(rmPoduct,1)
    localStorage.setItem('mycar', JSON.stringify(this.products));
    
   
    }
  
    
    return this.products;
  }
  
  

}
