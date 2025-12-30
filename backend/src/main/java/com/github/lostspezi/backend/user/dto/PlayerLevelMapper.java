package com.github.lostspezi.backend.user.dto;

import com.github.lostspezi.backend.user.model.PlayerLevel;
import com.github.lostspezi.backend.user.util.PlayerLevelCalculator;

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
