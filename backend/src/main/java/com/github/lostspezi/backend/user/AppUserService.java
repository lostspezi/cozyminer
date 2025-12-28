package com.github.lostspezi.backend.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class AppUserService {

    private final AppUserRepository userRepository;

    public AppUser findByDiscordId(String discordId) {
        return userRepository.findByDiscordId(discordId).orElseThrow(() -> new NoSuchElementException("User not found"));
    }

}
