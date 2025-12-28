package com.github.lostspezi.backend.user;

import lombok.NonNull;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AppUserRepository extends MongoRepository<@NonNull AppUser, @NonNull String> {
    Optional<AppUser> findByDiscordId(@NonNull String discordId);
}
