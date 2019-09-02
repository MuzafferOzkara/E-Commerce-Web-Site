package com.example.Commerce.services;

import java.util.List;
import java.util.Optional;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.Commerce.dao.CustomerDAO;
import com.example.Commerce.model.Customer;

@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	CustomerDAO customerDAO;

	@Override
	public List<Customer> getCustomer() {
		
		return customerDAO.findAll();
	}

	@Override
	public ResponseEntity<Customer> login(@RequestBody Customer customer) {
		
		Optional<Customer> newCustomer = customerDAO.findByEmail(customer.getEmail());
		if(newCustomer.isPresent()) {
			if(StringUtils.equals(newCustomer.get().getPassword(), customer.getPassword())) {
				return new ResponseEntity<Customer>(newCustomer.get(),HttpStatus.OK);
			}
		}
		return null;
	}

	@Override
	public Customer save(@RequestBody Customer customer){
		return customerDAO.save(customer);
	}
	

}
