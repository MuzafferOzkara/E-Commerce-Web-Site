package com.example.Commerce.controller;

import java.util.List;

import javax.persistence.Entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Commerce.model.Customer;
import com.example.Commerce.services.CustomerService;

@CrossOrigin
@RestController
@Controller
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	

	@GetMapping("/customer")
	public List<Customer> getAll(){
		return customerService.getCustomer();
		
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<Customer> login(@RequestBody Customer customer){
		return customerService.login(customer);
	}
	
	
	@PostMapping("/createCustomer")
	public Customer save(@RequestBody Customer customer){
		
		
		return customerService.save(customer);
	}

}
