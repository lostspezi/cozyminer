package com.github.lostspezi.backend.user;

public record MeResponse(
        String id,
        String username,
        String avatarUrl
) {
}
