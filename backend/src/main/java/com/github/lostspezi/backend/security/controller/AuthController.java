package com.github.lostspezi.backend.security.controller;

import com.github.lostspezi.backend.security.dto.MeResponse;
import com.github.lostspezi.backend.security.dto.MeResponseMapper;
import com.github.lostspezi.backend.user.AppUser;
import com.github.lostspezi.backend.user.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthController {

    private final AppUserRepository userRepository;

    @GetMapping("/me")
    public MeResponse me(@AuthenticationPrincipal AppUser authUser) {
        AppUser freshUser = userRepository
                .findById(authUser.getId())
                .orElseThrow();

        return MeResponseMapper.from(freshUser);
    }

}
