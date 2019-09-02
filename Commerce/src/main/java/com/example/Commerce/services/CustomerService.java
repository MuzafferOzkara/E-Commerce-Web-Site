package com.example.Commerce.services;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.Commerce.model.Customer;

public interface CustomerService {
	
	List<Customer> getCustomer();
	
	ResponseEntity<Customer> login(Customer customer);
	
	Customer save(Customer customer);
	
	

}
