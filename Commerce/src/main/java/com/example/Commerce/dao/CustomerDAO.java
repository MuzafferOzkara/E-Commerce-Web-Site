package com.example.Commerce.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.Commerce.model.Customer;

@Repository
public interface CustomerDAO extends JpaRepository<Customer,Long>{
	
	@Query("select al from Customer al where email = ?1")
	Optional<Customer> findByEmail(String mail);
	
	
	@Query(value = "SELECT u FROM Customer u WHERE email = ?1")
	Customer login(String mail);
	


}
