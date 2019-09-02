package com.example.Commerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.Commerce.model.Customer;
import com.example.Commerce.model.Item;
import com.example.Commerce.services.ItemService;

@CrossOrigin
@RestController
@Controller
public class ItemController {
	
	@Autowired
	ItemService itemService;
	
	@GetMapping("/item")
	public List<Item> getAll(){
		return itemService.getItem();
		
	}
	
	

	
	@PostMapping("/createItem")
	public Item save(@RequestBody Item item){
		
		
		return itemService.save(item);
	}
	
	
//	@RequestMapping("/item/{customerId}")
//	// http://localhost:8080/injavawetrust.springmvc/customer/pathVariable/100
//	public Iterable<Item> getItById(@PathVariable("customerId") Long itemId, Model model) {
//		model.addAttribute("message1", "CustomerController#getCustomerById is called.");
//		model.addAttribute("message2", "Customer Id : " + itemId);
//		return itemService.getItemsById(itemId);
//	}
	
	@RequestMapping("/item/cat/{category}")
	// http://localhost:8080/injavawetrust.springmvc/customer/pathVariable/100
	public Iterable<Item> getItByCategoryId(@PathVariable("category") int category, Model model) {
		model.addAttribute("message1", "CustomerController#getCustomerById is called.");
		model.addAttribute("message2", "Customer Id : " + category);
		return itemService.getItemsByCategory(category);
	}
	@RequestMapping("/item/cds/{item_id}")
	// http://localhost:8080/injavawetrust.springmvc/customer/pathVariable/100
	public Iterable<Item> getItByItemId(@PathVariable("item_id") int item_id, Model model) {
		model.addAttribute("message1", "CustomerController#getItemById is called.");
		model.addAttribute("message2", "Customer Id : " + item_id);
		return itemService.getItemsByItemId(item_id);
	}
	
	

}
