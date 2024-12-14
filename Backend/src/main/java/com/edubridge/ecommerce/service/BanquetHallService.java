package com.edubridge.ecommerce.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edubridge.ecommerce.repo.BanquetHallRepository;

@Service
public class BanquetHallService {

	@Autowired
	private BanquetHallRepository repo;
}
