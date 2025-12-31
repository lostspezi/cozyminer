package com.github.lostspezi.backend.security.controller;

import com.github.lostspezi.backend.playerprofile.dto.PlayerProfileDto;
import com.github.lostspezi.backend.playerprofile.service.PlayerProfileService;
import com.github.lostspezi.backend.security.dto.MeResponse;
import com.github.lostspezi.backend.security.mapper.MeResponseMapper;
import com.github.lostspezi.backend.user.model.AppUser;
import com.github.lostspezi.backend.user.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AppUserRepository userRepository;
    private final PlayerProfileService playerProfileService;

    @GetMapping("/me")
    public MeResponse me(@AuthenticationPrincipal AppUser authUser) {
        AppUser freshUser = userRepository
                .findById(authUser.getId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatusCode.valueOf(404), "User not found"));

        PlayerProfileDto playerProfile = playerProfileService.getPlayerProfile(freshUser.getId());

        return MeResponseMapper.from(freshUser, playerProfile);
    }

}
