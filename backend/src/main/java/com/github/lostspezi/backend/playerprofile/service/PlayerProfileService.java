package com.github.lostspezi.backend.playerprofile.service;

import com.github.lostspezi.backend.playerprofile.embedded.PlayerLevel;
import com.github.lostspezi.backend.playerprofile.model.PlayerProfile;
import com.github.lostspezi.backend.playerprofile.repository.PlayerProfileRepository;
import com.github.lostspezi.backend.user.model.AppUser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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

}
