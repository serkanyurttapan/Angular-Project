import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  title:string = 'Yurt';

  constructor() { }

  customers :Customer[] = []
  selectedCustomer:Customer;
  ngOnInit() {
debugger
    this.customers = [{id:1,firstName:"d",age:3,lastName:""},{id:2,firstName:"e",age:5,lastName:""},{id:3,firstName:"dsa",age:35,lastName:""}]
  }
selectCustomer(cust:Customer) {
alert(cust.age)
 this.selectedCustomer =cust  
}
}
