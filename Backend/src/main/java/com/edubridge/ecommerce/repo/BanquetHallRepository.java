package com.edubridge.ecommerce.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edubridge.ecommerce.entity.BanquetHall;

@Repository
public interface BanquetHallRepository extends JpaRepository<BanquetHall, Integer>{

}
