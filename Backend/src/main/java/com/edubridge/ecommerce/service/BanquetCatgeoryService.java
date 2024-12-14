package com.edubridge.ecommerce.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.ecommerce.entity.BanquetCategory;
import com.edubridge.ecommerce.entity.BanquetHall;

import com.edubridge.ecommerce.repo.BanquetCategoryRepository;
import com.edubridge.ecommerce.repo.BanquetHallRepository;

@Service
public class BanquetCatgeoryService {

	@Autowired
	private BanquetCategoryRepository banquetCategoryRepository;

	@Autowired
	private BanquetHallRepository banquetRepository;
	

	public BanquetHall addBanquetToCategory(Integer Id,BanquetHall banquethall) {
		
		Optional<BanquetCategory>optional=banquetCategoryRepository.findById(Id);  
		
		if(optional.isPresent()) {
			BanquetCategory category=optional.get();
			banquethall.setCategory(category);
			return banquetRepository.save(banquethall);
		}else {
			throw new RuntimeException("category not found");
		}
	}
}
