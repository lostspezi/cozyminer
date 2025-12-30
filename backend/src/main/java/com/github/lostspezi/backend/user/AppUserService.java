package com.github.lostspezi.backend.user;

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
        AppUser currentUser = getFromContext();

        userRepository.deleteById(currentUser.getId());

        log.debug("User deleted: {}", currentUser.getId());
    }

    private AppUser getFromContext() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            throw new IllegalStateException("No authenticated user");
        }

        Object principal = authentication.getPrincipal();

        if (!(principal instanceof AppUser user)) {
            throw new IllegalStateException("Principal is not AppUser");
        }

        return user;
    }
}
