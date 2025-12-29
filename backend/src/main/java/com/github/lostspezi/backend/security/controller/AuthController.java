package com.github.lostspezi.backend.security.controller;

import com.github.lostspezi.backend.security.dto.MeResponse;
import com.github.lostspezi.backend.security.dto.PlayerLevelDto;
import com.github.lostspezi.backend.user.AppUser;
import com.github.lostspezi.backend.user.PlayerLevelCalculator;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/me")
    public MeResponse getMe(@AuthenticationPrincipal AppUser user) {
        PlayerLevelDto playerLevelDto = new PlayerLevelDto(
                user.getLevel().current(),
                user.getLevel().currentXp(),
                PlayerLevelCalculator.xpForNextLevel(user.getLevel().current()),
                PlayerLevelCalculator.missingXp(user.getLevel()),
                PlayerLevelCalculator.progressPercent(user.getLevel())
        );
        return new MeResponse(user.getId(), user.getUsername(), user.getAvatarUrl(), playerLevelDto);
    }

}
