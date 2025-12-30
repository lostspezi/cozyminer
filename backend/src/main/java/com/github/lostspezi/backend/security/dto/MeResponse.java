package com.github.lostspezi.backend.security.dto;

import com.github.lostspezi.backend.user.dto.PlayerLevelDto;

public record MeResponse(
        String id,
        String username,
        String avatarUrl,
        String email,
        PlayerLevelDto level
) {
}
