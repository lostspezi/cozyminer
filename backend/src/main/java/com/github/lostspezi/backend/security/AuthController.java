package com.github.lostspezi.backend.security;

import com.github.lostspezi.backend.user.AppUser;
import com.github.lostspezi.backend.user.MeResponse;
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
        return new MeResponse(user.getId(), user.getUsername(), user.getAvatarUrl());
    }

}
