package com.github.lostspezi.backend.playerprofile.repository;

import com.github.lostspezi.backend.playerprofile.model.PlayerProfile;
import lombok.NonNull;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlayerProfileRepository extends MongoRepository<@NonNull PlayerProfile, @NonNull String> {
    Optional<PlayerProfile> findByUserId(@NonNull String userId);
}
