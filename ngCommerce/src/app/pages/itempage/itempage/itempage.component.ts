import { Component, OnInit, Injectable } from '@angular/core';
import { ItemService } from 'src/app/services/itemservice/item.service';
import { Item } from 'src/app/model/item';
import { AlertifyService } from 'src/app/services/alertservice/alertify.service'
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { CartService } from 'src/app/cart.service';



@Component({
  selector: 'app-itempage',
  templateUrl: './itempage.component.html',
  styleUrls: ['./itempage.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ItempageComponent implements OnInit {
  
  
  items: Item[];
  theCust=Customer;
  filterText=""
  constructor(private itemService: ItemService, 
    private alertifyService: AlertifyService,
    private activatedRoute:ActivatedRoute,
    private cartService: CartService
   
    ) { }
  ngOnInit() {

    var data = sessionStorage.getItem('email');
    console.log(data) 
    // this.getItem();
    this.activatedRoute.params.subscribe(params=>{
      this.itemService.getItem(params["categoryId"]).subscribe(item=>{
        this.items=item
      });
      
    })
    
  }

  

  addToCart(item){
    console.log(item)
    console.log(item.name)
    console.log(item.category)
    console.log(item.imagelink)
    console.log(item.price)
    console.log(this.theCust.name)
    console.log(item.itemId)

    
   
    this.alertifyService.success(item.name+ " sepete eklendi.")
    this.cartService.addToCart(item);

  }

//   find(itemId: number): Item {
//     return this.items[this.getSelectedIndex(itemId)];
// }




  // getItem(categoryId) {
  //   this.itemService.getItem(categoryId).subscribe(item => {
  //     this.items = (item);
  //     alert(categoryId)
  //     console.log(this.items);
  //     console.log("mrb");
     
  //   });
  // }



  
}

