package com.github.lostspezi.backend.playerprofile.mapper;

import com.github.lostspezi.backend.playerprofile.dto.PlayerLevelDto;
import com.github.lostspezi.backend.playerprofile.embedded.PlayerLevel;
import com.github.lostspezi.backend.playerprofile.service.PlayerLevelCalculator;

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
