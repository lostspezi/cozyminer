package com.github.lostspezi.backend.playerprofile.dto;

public record PlayerProfileDto(
        int current,
        long currentXp,
        long xpForNextLevel,
        long missingXp,
        int progressPercent,
        InventoryDto inventory
) {
}
