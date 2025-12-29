package com.github.lostspezi.backend.security.dto;

public record PlayerLevelDto(
        int current,
        long currentXp,
        long xpForNextLevel,
        long missingXp,
        int progressPercent
) {
}
