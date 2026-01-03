package com.github.lostspezi.backend.inventory.service;

import com.github.lostspezi.backend.inventory.dto.InventoryResponse;
import com.github.lostspezi.backend.inventory.mapper.InventoryMapper;
import com.github.lostspezi.backend.inventory.model.Inventory;
import com.github.lostspezi.backend.inventory.repository.InventoryRepository;
import com.github.lostspezi.backend.miner.model.OreType;
import com.github.lostspezi.backend.security.service.AuthContext;
import com.github.lostspezi.backend.user.model.AppUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class InventoryService {

    private final InventoryRepository inventoryRepository;

    public InventoryResponse getUserInventory() {
        Inventory inventory = get();
        return InventoryMapper.toInventoryResponse(inventory);
    }

    public void addOreToInventory(OreType oreType, int amount, AppUser user) {
        Inventory inventory = get(user);
        Map<OreType, Integer> ores = inventory.getOres();
        ores.put(oreType, ores.getOrDefault(oreType, 0) + amount);
        inventoryRepository.save(inventory);
    }

    public void saveInventory(Inventory inventory) {
        inventoryRepository.save(inventory);
    }

    private Inventory get() {
        AppUser user = AuthContext.getCurrentUser();
        return inventoryRepository
                .findByUserId(user.getId())
                .orElse(null);
    }

    private Inventory get(AppUser user) {
        return inventoryRepository
                .findByUserId(user.getId())
                .orElse(null);
    }

}
