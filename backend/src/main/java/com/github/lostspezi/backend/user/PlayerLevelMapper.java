package com.github.lostspezi.backend.user;

import com.github.lostspezi.backend.security.dto.PlayerLevelDto;

public final class PlayerLevelMapper {

    private PlayerLevelMapper() {
    }

    public static PlayerLevelDto toDto(PlayerLevel level) {
        return new PlayerLevelDto(
                level.current(),
                level.currentXp(),
                PlayerLevelCalculator.xpForNextLevel(level.current()),
                PlayerLevelCalculator.missingXp(level),
                PlayerLevelCalculator.progressPercent(level)
        );
    }
}
