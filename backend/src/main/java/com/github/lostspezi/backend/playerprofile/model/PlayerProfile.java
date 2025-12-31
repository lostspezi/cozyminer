package com.github.lostspezi.backend.playerprofile.model;

import com.github.lostspezi.backend.playerprofile.embedded.Inventory;
import com.github.lostspezi.backend.playerprofile.embedded.PlayerLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document(collection = "player_profiles")
public class PlayerProfile {

    @MongoId(FieldType.OBJECT_ID)
    private String id;

    private String userId;

    private PlayerLevel level;

    private Inventory inventory;

    private long coins;

}
