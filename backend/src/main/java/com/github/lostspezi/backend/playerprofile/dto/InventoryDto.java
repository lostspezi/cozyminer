package com.github.lostspezi.backend.playerprofile.dto;

import com.github.lostspezi.backend.playerprofile.embedded.ItemType;

import java.util.Map;

public record InventoryDto(
        int capacity,
        Map<ItemType, Long> items
) {
}
