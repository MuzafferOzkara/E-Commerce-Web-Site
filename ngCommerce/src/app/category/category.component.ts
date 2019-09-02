import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  title="Kategori Listesi"
  categories : Category[]=[
    {id:1, name:"Çevre Birimleri"},
    {id:2, name:"Laptop"},
    {id:3, name:"Masaüstü Bilgisayar"},
    
    
  ]

  ngOnInit() {
  }

}
