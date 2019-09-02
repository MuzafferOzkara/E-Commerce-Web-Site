package com.example.Commerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.Commerce.dao.CustomerDAO;
import com.example.Commerce.dao.ItemDAO;
import com.example.Commerce.model.Customer;
import com.example.Commerce.model.Item;


@Service
public class ItemServiceImpl implements ItemService {
	
	@Autowired
	ItemDAO itemDAO;	

	@Override
	public List<Item> getItem() {
		// TODO Auto-generated method stub
		return itemDAO.findAll();
		
	}

	@Override
	public Item save(@RequestBody Item item) {
		return itemDAO.save(item);
	}
	
//	 @Override
//	    public Iterable<Item> getItemsById(long itemId) {
//	        return itemDAO.findByItemsIds(itemId);
//	    }

	@Override
	public Iterable<Item> getItemsByCategory(int category) {
		return itemDAO.findByCategorysIds(category);
	}

	@Override
	public Iterable<Item> getItemsByItemId(int item_id) {
		return itemDAO.findByItemId(item_id);
	}






}
