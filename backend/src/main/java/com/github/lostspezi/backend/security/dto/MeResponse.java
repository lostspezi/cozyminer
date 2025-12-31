package com.github.lostspezi.backend.security.dto;


public record MeResponse(
        String id,
        String username,
        String avatarUrl,
        String email,
        String playerProfileId
) {
}
