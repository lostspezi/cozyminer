package com.github.lostspezi.backend.user.controller;

import com.github.lostspezi.backend.security.dto.MeResponse;
import com.github.lostspezi.backend.security.dto.MeResponseMapper;
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
        return MeResponseMapper.from(updated);
    }
}
