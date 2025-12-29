package com.github.lostspezi.backend.security.dto;

import com.github.lostspezi.backend.user.AppUser;
import com.github.lostspezi.backend.user.PlayerLevelMapper;

public final class MeResponseMapper {

    private MeResponseMapper() {
    }

    public static MeResponse from(AppUser user) {
        return new MeResponse(
                user.getId(),
                user.getUsername(),
                user.getAvatarUrl(),
                PlayerLevelMapper.toDto(user.getLevel())
        );
    }
}
