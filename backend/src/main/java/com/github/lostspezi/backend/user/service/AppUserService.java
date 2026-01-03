package com.github.lostspezi.backend.user.service;

import com.github.lostspezi.backend.security.service.AuthContext;
import com.github.lostspezi.backend.user.dto.UpdateUserRequest;
import com.github.lostspezi.backend.user.model.AppUser;
import com.github.lostspezi.backend.user.repository.AppUserRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AppUserService {

    private final AppUserRepository userRepository;

    public void deleteCurrentUser() {
        AppUser currentUser = AuthContext.getCurrentUser();

        userRepository.deleteById(currentUser.getId());

        SecurityContextHolder.clearContext();

        log.debug("User deleted: {}", currentUser.getId());
    }

    public AppUser updateCurrentUser(@NonNull UpdateUserRequest request) {
        AppUser user = AuthContext.getCurrentUser();

        boolean changed = false;

        if (!request.username().equals(user.getUsername())) {
            user.setUsername(request.username());
            changed = true;
        }

        if (!request.email().equals(user.getEmail())) {
            user.setEmail(request.email());
            changed = true;
        }

        if (!changed) {
            log.debug("No changes for user {}", user.getId());
            return user;
        }

        AppUser saved = userRepository.save(user);
        log.debug("User updated: {}", saved.getId());

        return saved;
    }
}
