package com.github.lostspezi.backend.playerprofile.service;

import com.github.lostspezi.backend.playerprofile.dto.PlayerProfileDto;
import com.github.lostspezi.backend.playerprofile.embedded.PlayerLevel;
import com.github.lostspezi.backend.playerprofile.mapper.PlayerProfileMapper;
import com.github.lostspezi.backend.playerprofile.model.PlayerProfile;
import com.github.lostspezi.backend.playerprofile.repository.PlayerProfileRepository;
import com.github.lostspezi.backend.user.model.AppUser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class PlayerProfileService {

    private final PlayerProfileRepository repository;

    public PlayerProfile createForUser(AppUser user) {
        PlayerProfile playerProfile = PlayerProfile.builder()
                .userId(user.getId())
                .level(new PlayerLevel(1, 0L))
                .build();

        return repository.save(playerProfile);
    }

    public PlayerProfileDto getPlayerProfile(String userId) {
        PlayerProfile playerProfile = repository.findByUserId(userId).orElseThrow(() -> new NoSuchElementException("PlayerProfile not found for userId: " + userId));
        return PlayerProfileMapper.toDto(playerProfile);
    }

}
