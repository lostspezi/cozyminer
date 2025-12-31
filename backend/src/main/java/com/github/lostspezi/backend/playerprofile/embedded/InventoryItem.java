package com.github.lostspezi.backend.playerprofile.embedded;

public record InventoryItem(
        ItemType type,
        long amount
) {
}
