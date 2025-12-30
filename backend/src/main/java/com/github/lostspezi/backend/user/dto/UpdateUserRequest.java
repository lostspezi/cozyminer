package com.github.lostspezi.backend.user.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record UpdateUserRequest(

        @Size(min = 3, max = 32)
        @NotBlank
        String username,

        @Email
        @NotBlank
        String email

) {
}
