package com.github.lostspezi.backend.minerjob.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.time.Instant;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document(collection = "minerjobs")
public class MinerJob {

    @MongoId(FieldType.OBJECT_ID)
    private String id;

    private String userId;
    private String minerId;
    private Instant startedAt;
    private Instant finishesAt;
    private int collected;
    private boolean completed;

}
