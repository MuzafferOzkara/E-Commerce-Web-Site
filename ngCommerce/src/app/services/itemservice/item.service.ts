import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../../model/item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  getItem(categoryId):Observable<Item[]>{
    

    let newPath='http://localhost:8080/item/cat/'+categoryId;
     if(categoryId){
      let newPath='http://localhost:8080/item/cat/';
      
     }else{
       newPath='http://localhost:8080/item/';
     }
    
    return this.http.get<Item[]>(newPath).pipe();
    
  }  

  saveItem(item) {
    return this.http.post('http://localhost:8080/createItem', item).pipe();
  }

  
  

  
}
