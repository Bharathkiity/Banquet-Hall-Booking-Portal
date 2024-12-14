package com.edubridge.ecommerce.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.edubridge.ecommerce.entity.BanquetHall;
import com.edubridge.ecommerce.entity.Customer;
import com.edubridge.ecommerce.service.BanquetCatgeoryService;
import com.edubridge.ecommerce.service.CustomerService;

@CrossOrigin("http://localhost:4200") // angular url acess by angular or any
@RestController
@RequestMapping("/api/v1")
public class BanquetCategoryController {

	@Autowired
	private BanquetCatgeoryService banquetCategoryService;
	
	private CustomerService customerservice;

	/*
	 * http://localhost:8181/api/v1/category/1/banquetHalls
	 */
	@PostMapping("/category/{categoryId}/banquetHalls")
	public ResponseEntity<BanquetHall> addBanquetToCategory(@PathVariable Integer categoryId,
			@RequestBody BanquetHall banquet) {
		banquetCategoryService.addBanquetToCategory(categoryId, banquet);

		return new ResponseEntity<>(HttpStatus.OK);
	}
	

	

}
