package com.github.lostspezi.backend.miner.mapper;

import com.github.lostspezi.backend.miner.dto.MinerResponse;
import com.github.lostspezi.backend.miner.model.Miner;

public class MinerMapper {

    private MinerMapper() {
    }

    public static MinerResponse toMinerResponse(Miner miner) {
        return new MinerResponse(
                miner.getId(),
                miner.getOreType(),
                miner.getLevel(),
                miner.getCurrentXp(),
                miner.getXpToNextLevel()
        );
    }
}
