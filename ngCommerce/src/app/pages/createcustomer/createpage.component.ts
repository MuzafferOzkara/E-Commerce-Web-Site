import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customerservice/customer.service';

import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-createcustomer',
  templateUrl: './createpage.component.html',
  styleUrls: ['./createpage.component.css']
})
export class CreatepageComponent implements OnInit {

  customers: Customer[];
  showForm: Boolean = true;
  saveObj: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.getCustomer();
    this.saveObj = new Customer();
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe(customer => {
      this.customers = (customer);
      console.log(this.customers)
    });
  }

  saveCustomer(form) {
    console.log(form);
    
    this.saveObj.username = form.username || null;
    this.saveObj.email = form.email|| null;
    this.saveObj.password = form.password || null;
    this.customerService.saveCustomer(this.saveObj).subscribe(
      resp => {
        console.log(resp);
        this.getCustomer();
      }
    );
  }

}
