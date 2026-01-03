package com.github.lostspezi.backend.inventory.repository;

import com.github.lostspezi.backend.inventory.model.Inventory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface InventoryRepository extends MongoRepository<Inventory, String> {

    Optional<Inventory> findByUserId(String userId);

}
