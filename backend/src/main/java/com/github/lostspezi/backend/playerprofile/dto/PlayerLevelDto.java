package com.github.lostspezi.backend.playerprofile.dto;

public record PlayerLevelDto(
        int current,
        long currentXp,
        long xpForNextLevel,
        long missingXp,
        int progressPercent
) {
}
