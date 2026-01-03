package com.github.lostspezi.backend.security.service;

import com.github.lostspezi.backend.user.model.AppUser;
import org.springframework.security.core.context.SecurityContextHolder;

public class AuthContext {

    private AuthContext() {}

    public static AppUser getCurrentUser() {
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
