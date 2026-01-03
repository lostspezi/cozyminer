package com.github.lostspezi.backend.inventory.mapper;

import com.github.lostspezi.backend.inventory.dto.InventoryResponse;
import com.github.lostspezi.backend.inventory.model.Inventory;

public class InventoryMapper {

    private InventoryMapper() {
    }

    public static InventoryResponse toInventoryResponse(Inventory inventory) {
        return new InventoryResponse(inventory.getId(), inventory.getOres());
    }

}
