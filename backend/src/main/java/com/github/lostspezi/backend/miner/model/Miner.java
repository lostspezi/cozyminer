package com.github.lostspezi.backend.miner.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document(collection = "miners")
public class Miner {

    @MongoId(FieldType.OBJECT_ID)
    private String id;

    @Indexed
    private String userId;

    private OreType oreType;
    private int level;
    private long currentXp;
    private long xpToNextLevel;

    @CreatedDate
    private Instant createdAt;

    @LastModifiedDate
    private Instant lastModified;

}
