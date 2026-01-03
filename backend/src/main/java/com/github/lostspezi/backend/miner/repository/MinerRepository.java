package com.github.lostspezi.backend.miner.repository;

import com.github.lostspezi.backend.miner.model.Miner;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MinerRepository extends MongoRepository<Miner,String> {

    List<Miner> getMinerByUserId(String userId);

}
