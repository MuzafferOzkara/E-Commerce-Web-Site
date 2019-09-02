import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../model/customer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:8080/customer').pipe();
  }

 
  
  login(customer) {
    return this.http.post<any>('http://localhost:8080/login', customer).pipe(
      map(user => {
           return user;
    }));
  }

  loggedIn() {
    return localStorage.getItem('currentUser');
  }

  saveCustomer(customer) {
    return this.http.post('http://localhost:8080/createCustomer', customer).pipe();
  }
}
