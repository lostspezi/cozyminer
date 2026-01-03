package com.github.lostspezi.backend.security.service;

import com.github.lostspezi.backend.inventory.model.Inventory;
import com.github.lostspezi.backend.inventory.service.InventoryService;
import com.github.lostspezi.backend.miner.model.Miner;
import com.github.lostspezi.backend.miner.model.OreType;
import com.github.lostspezi.backend.miner.service.MinerService;
import com.github.lostspezi.backend.user.model.AppUser;
import com.github.lostspezi.backend.user.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class DiscordOAuth2UserService extends DefaultOAuth2UserService {

    private final AppUserRepository userRepository;
    private final MinerService minerService;
    private final InventoryService inventoryService;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) {

        OAuth2User oauthUser = super.loadUser(userRequest);
        Map<String, Object> attr = oauthUser.getAttributes();

        String username = (String) attr.get("username");
        String email = (String) attr.get("email");
        String avatarHash = (String) attr.get("avatar");
        String discordId = (String) attr.get("id");

        String avatarUrl = String.format("https://cdn.discordapp.com/avatars/%s/%s.png?size=256", discordId, avatarHash);
        Set<String> minerIds = new HashSet<>();

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
                            String minerId = initMiner(saved.getId());
                            String inventoryId = initInventory(saved.getId());
                            minerIds.add(minerId);
                            saved.setInventoryId(inventoryId);
                            saved.setMinerIds(minerIds);
                            return userRepository.save(saved);
                        }
                );
    }

    private String initMiner(String userId) {
        Miner toSave = Miner.builder()
                .userId(userId)
                .oreType(OreType.IRON)
                .level(1)
                .currentXp(0)
                .xpToNextLevel(100)
                .build();
        Miner savedMiner = minerService.saveMiner(toSave);
        return savedMiner.getId();
    }

    private String initInventory(String userId) {
        Inventory inventory = Inventory.builder()
                .userId(userId)
                .ores(new HashMap<>())
                .build();
        inventoryService.saveInventory(inventory);
        return inventory.getId();
    }
}
