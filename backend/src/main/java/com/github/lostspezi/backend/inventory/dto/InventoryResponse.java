package com.github.lostspezi.backend.inventory.dto;

import com.github.lostspezi.backend.miner.model.OreType;

import java.util.Map;

public record InventoryResponse(
        String id,
        Map<OreType, Integer> ores
) {
}
