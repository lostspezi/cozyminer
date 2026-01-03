package com.github.lostspezi.backend.minerjob.repository;

import com.github.lostspezi.backend.minerjob.model.MinerJob;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MinerJobRepository extends MongoRepository<MinerJob,String> {
}
