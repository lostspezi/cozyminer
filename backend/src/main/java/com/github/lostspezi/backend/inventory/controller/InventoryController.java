package com.github.lostspezi.backend.inventory.controller;

import com.github.lostspezi.backend.inventory.dto.InventoryResponse;
import com.github.lostspezi.backend.inventory.service.InventoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/inventories")
public class InventoryController {

    private final InventoryService inventoryService;

    @GetMapping
    public ResponseEntity<InventoryResponse> getUserInventory() {
        return ResponseEntity.ok(inventoryService.getUserInventory());
    }

}
