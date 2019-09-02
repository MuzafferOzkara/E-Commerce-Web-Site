import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item';
import { ItemService } from 'src/app/services/itemservice/item.service';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreatepageitemComponent implements OnInit {

  items: Item[];
  showForm: Boolean = true;
  saveObj: Item;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    // this.getItem();
    this.saveObj = new Item();
  }

  // getItem() {
  //   this.itemService.getItem().subscribe(item => {
  //     this.items = (item);
  //     console.log(this.items)
  //   });
  // }

  saveItem(form) {
    console.log(form);
    
    this.saveObj.name = form.name || null;
    this.saveObj.price = form.price|| null;
    this.saveObj.imagelink = form.imagelink|| null;
    this.saveObj.category = form.category|| null;
    this.saveObj.description = form.description|| null;
    
    this.itemService.saveItem(this.saveObj).subscribe(
      resp => {
        console.log(resp);
        // this.getItem();
      }
    );
  }

}