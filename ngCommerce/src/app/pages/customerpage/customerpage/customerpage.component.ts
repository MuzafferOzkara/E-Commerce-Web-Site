import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customerservice/customer.service';
import { Customer } from 'src/app/model/customer';

@Component({
  selector: 'app-customerpage',
  templateUrl: './customerpage.component.html',
  styleUrls: ['./customerpage.component.css']
})
export class CustomerpageComponent implements OnInit {

  show: boolean = false

  customers:Customer[];
  constructor(private customerService:CustomerService) { }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(){
    this.customerService.getCustomer().subscribe(customer => {
      this.customers= (customer);
      console.log(this.customers);
      console.log("mrb");
    });
    
  }
}
