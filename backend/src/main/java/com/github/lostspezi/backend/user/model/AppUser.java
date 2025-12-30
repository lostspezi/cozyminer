package com.github.lostspezi.backend.user.model;

import lombok.*;
import net.minidev.json.annotate.JsonIgnore;
import org.jspecify.annotations.NonNull;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Document(collection = "users")
public class AppUser implements OAuth2User {

    @MongoId(FieldType.OBJECT_ID)
    private String id;

    @Getter
    @Indexed(unique = true)
    private String discordId;

    @Getter
    @Indexed(unique = true)
    private String username;

    @Getter
    @Indexed(unique = true)
    private String email;

    @Getter
    private String avatarUrl;

    @Getter
    private PlayerLevel level;

    @Transient
    @JsonIgnore
    private Map<String, Object> attributes;

    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    @NonNull
    public String getName() {
        return username;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }
}