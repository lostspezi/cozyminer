package com.github.lostspezi.backend.inventory.model;

import com.github.lostspezi.backend.miner.model.OreType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.HashMap;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document(collection = "inventories")
public class Inventory {

    @MongoId(FieldType.OBJECT_ID)
    private String id;

    private String userId;

    @Builder.Default
    private Map<OreType, Integer> ores = new HashMap<>();

}
