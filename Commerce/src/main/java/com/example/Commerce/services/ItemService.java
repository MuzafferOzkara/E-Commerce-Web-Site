package com.example.Commerce.services;

import java.util.List;

import com.example.Commerce.model.Customer;
import com.example.Commerce.model.Item;


public interface ItemService {
	
	List<Item> getItem();

	Item save(Item item);
	
	

//	Iterable<Item> getItemsById(long itemId);

	Iterable<Item> getItemsByCategory(int category);

	Iterable<Item> getItemsByItemId(int itemId);



	

}
