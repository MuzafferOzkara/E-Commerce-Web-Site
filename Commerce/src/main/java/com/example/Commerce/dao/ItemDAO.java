package com.example.Commerce.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.Commerce.model.Item;


@Repository
public interface ItemDAO extends JpaRepository<Item, Long> {
//	
//	  @Query("SELECT p FROM Item p WHERE p.itemId = :itemId")
//	    Iterable<Item> findByItemsIds(@Param("itemId") long itemId);

	@Query("SELECT p FROM Item p WHERE p.category = :category")
	Iterable<Item> findByCategorysIds(@Param("category") int category);
	
	@Query("SELECT l FROM Item l WHERE l.item_id = :item_id")
	Iterable<Item> findByItemId(@Param("item_id") int item_id);
	
}
