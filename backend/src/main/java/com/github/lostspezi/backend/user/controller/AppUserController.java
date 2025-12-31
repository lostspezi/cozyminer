package com.github.lostspezi.backend.user.controller;

import com.github.lostspezi.backend.playerprofile.dto.PlayerProfileDto;
import com.github.lostspezi.backend.playerprofile.service.PlayerProfileService;
import com.github.lostspezi.backend.security.dto.MeResponse;
import com.github.lostspezi.backend.security.mapper.MeResponseMapper;
import com.github.lostspezi.backend.user.dto.UpdateUserRequest;
import com.github.lostspezi.backend.user.model.AppUser;
import com.github.lostspezi.backend.user.service.AppUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
public class AppUserController {

    private final AppUserService userService;
    private final PlayerProfileService playerProfileService;

    @DeleteMapping("/me")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMe() {
        userService.deleteCurrentUser();
    }

    @PutMapping
    public MeResponse updateAccount(
            @Valid @RequestBody UpdateUserRequest request
    ) {
        AppUser updated = userService.updateCurrentUser(request);
        PlayerProfileDto playerProfile = playerProfileService.getPlayerProfile(updated.getId());
        return MeResponseMapper.from(updated, playerProfile);
    }
}
