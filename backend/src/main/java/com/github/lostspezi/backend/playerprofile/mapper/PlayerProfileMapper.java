package com.github.lostspezi.backend.playerprofile.mapper;

import com.github.lostspezi.backend.playerprofile.dto.InventoryDto;
import com.github.lostspezi.backend.playerprofile.dto.PlayerProfileDto;
import com.github.lostspezi.backend.playerprofile.embedded.Inventory;
import com.github.lostspezi.backend.playerprofile.embedded.PlayerLevel;
import com.github.lostspezi.backend.playerprofile.model.PlayerProfile;
import com.github.lostspezi.backend.playerprofile.service.PlayerLevelCalculator;

public class PlayerProfileMapper {

    private PlayerProfileMapper() {
    }

    public static PlayerProfileDto toDto(PlayerProfile playerProfile) {
        PlayerLevel level = playerProfile.getLevel();
        int currentLevel = level.current();
        long currentXp = level.currentXp();
        Inventory inventory = playerProfile.getInventory();

        return new PlayerProfileDto(
                currentLevel,
                currentXp,
                PlayerLevelCalculator.xpForNextLevel(currentLevel),
                PlayerLevelCalculator.missingXp(level),
                PlayerLevelCalculator.progressPercent(level),
                new InventoryDto(inventory.getCapacity(), inventory.getItems())
        );
    }

}
