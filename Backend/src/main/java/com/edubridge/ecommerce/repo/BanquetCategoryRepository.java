 package com.edubridge.ecommerce.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.edubridge.ecommerce.entity.BanquetCategory;
import com.edubridge.ecommerce.entity.BanquetHall;

@RepositoryRestResource(
		collectionResourceRel="banquetCategory",path="banquet-category")
public interface BanquetCategoryRepository extends JpaRepository<BanquetCategory, Integer>{

}
