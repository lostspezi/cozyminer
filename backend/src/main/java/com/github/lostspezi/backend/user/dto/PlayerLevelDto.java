package com.github.lostspezi.backend.user.dto;

public record PlayerLevelDto(
        int current,
        long currentXp,
        long xpForNextLevel,
        long missingXp,
        int progressPercent
) {
}
