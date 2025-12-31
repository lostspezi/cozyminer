package com.github.lostspezi.backend.playerprofile.embedded;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Map;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Inventory {

    private int capacity;

    private Map<ItemType, Long> items;

    public long usedSlots() {
        return items.values().stream().mapToLong(Long::longValue).sum();
    }

    public boolean canAdd(long amount) {
        return usedSlots() + amount <= capacity;
    }

    public void add(ItemType type, long amount) {
        if (!canAdd(amount)) {
            throw new IllegalStateException("Inventory full");
        }
        items.merge(type, amount, Long::sum);
    }
}
