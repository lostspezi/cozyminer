package com.github.lostspezi.backend.security.dto;


import com.github.lostspezi.backend.playerprofile.dto.PlayerProfileDto;

public record MeResponse(
        String id,
        String username,
        String avatarUrl,
        String email,
        PlayerProfileDto playerProfile
) {
}
