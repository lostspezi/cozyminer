package com.github.lostspezi.backend.playerprofile.service;

import com.github.lostspezi.backend.playerprofile.dto.PlayerProfileDto;
import com.github.lostspezi.backend.playerprofile.embedded.Inventory;
import com.github.lostspezi.backend.playerprofile.embedded.ItemType;
import com.github.lostspezi.backend.playerprofile.embedded.PlayerLevel;
import com.github.lostspezi.backend.playerprofile.mapper.PlayerProfileMapper;
import com.github.lostspezi.backend.playerprofile.model.PlayerProfile;
import com.github.lostspezi.backend.playerprofile.repository.PlayerProfileRepository;
import com.github.lostspezi.backend.user.model.AppUser;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.EnumMap;
import java.util.Map;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class PlayerProfileService {

    private final PlayerProfileRepository repository;

    private static final long INITIAL_COINS = 10L;

    private static final int INITIAL_XP = 0;
    private static final int INITIAL_LEVEL = 1;
    private static final PlayerLevel INITIAL_LEVEL_OBJECT = new PlayerLevel(INITIAL_LEVEL, INITIAL_XP);

    private static final int INITIAL_INVENTORY_CAPACITY = 50;
    private static final Map<ItemType, Long> INITIAL_ITEMS = new EnumMap<>(ItemType.class);
    private static final Inventory INITIAL_INVENTORY = Inventory.builder().capacity(INITIAL_INVENTORY_CAPACITY).items(INITIAL_ITEMS).build();

    public PlayerProfile createForUser(AppUser user) {
        PlayerProfile playerProfile = PlayerProfile.builder()
                .userId(user.getId())
                .level(INITIAL_LEVEL_OBJECT)
                .inventory(INITIAL_INVENTORY)
                .coins(INITIAL_COINS)
                .build();

        return repository.save(playerProfile);
    }

    public PlayerProfileDto getPlayerProfile(String userId) {
        PlayerProfile playerProfile = repository.findByUserId(userId).orElseThrow(() -> new NoSuchElementException("PlayerProfile not found for userId: " + userId));
        return PlayerProfileMapper.toDto(playerProfile);
    }

    public void deletePlayerProfile(String playerProfileId) {
        repository.deleteById(playerProfileId);
    }

}
