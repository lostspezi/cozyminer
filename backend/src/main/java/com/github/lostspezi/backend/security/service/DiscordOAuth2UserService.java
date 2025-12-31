package com.github.lostspezi.backend.security.service;

import com.github.lostspezi.backend.playerprofile.model.PlayerProfile;
import com.github.lostspezi.backend.playerprofile.service.PlayerProfileService;
import com.github.lostspezi.backend.user.model.AppUser;
import com.github.lostspezi.backend.user.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
@RequiredArgsConstructor
public class DiscordOAuth2UserService extends DefaultOAuth2UserService {

    private final AppUserRepository userRepository;
    private final PlayerProfileService playerProfileService;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) {

        OAuth2User oauthUser = super.loadUser(userRequest);
        Map<String, Object> attr = oauthUser.getAttributes();

        String username = (String) attr.get("username");
        String email = (String) attr.get("email");
        String avatarHash = (String) attr.get("avatar");
        String discordId = (String) attr.get("id");

        String avatarUrl = String.format("https://cdn.discordapp.com/avatars/%s/%s.png?size=256", discordId, avatarHash);

        return userRepository.findByDiscordId(discordId)
                .orElseGet(() ->
                        {
                            AppUser saved = userRepository.save(
                                    AppUser.builder()
                                            .discordId(discordId)
                                            .avatarUrl(avatarUrl)
                                            .email(email)
                                            .username(username)
                                            .attributes(attr)
                                            .build()
                            );
                            PlayerProfile playerProfile = playerProfileService.createForUser(saved);
                            saved.setPlayerProfileId(playerProfile.getId());
                            userRepository.save(saved);
                            return saved;
                        }
                );
    }
}
