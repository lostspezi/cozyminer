package com.github.lostspezi.backend.miner.dto;

import com.github.lostspezi.backend.miner.model.OreType;

public record MinerResponse(
        String id,
        OreType oreType,
        int level,
        long currentXp,
        long xpToNextLevel
) {
}
