package com.github.lostspezi.backend.security.dto;

public record PlayerLevelDto(
        int level,
        long currentXp,
        long xpForNextLevel,
        long missingXp,
        int progressPercent
) {
}
