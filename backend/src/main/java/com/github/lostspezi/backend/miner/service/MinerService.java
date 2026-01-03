package com.github.lostspezi.backend.miner.service;

import com.github.lostspezi.backend.miner.dto.MinerResponse;
import com.github.lostspezi.backend.miner.mapper.MinerMapper;
import com.github.lostspezi.backend.miner.model.Miner;
import com.github.lostspezi.backend.miner.repository.MinerRepository;
import com.github.lostspezi.backend.security.service.AuthContext;
import com.github.lostspezi.backend.user.model.AppUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class MinerService {

    private final MinerRepository minerRepository;

    public List<MinerResponse> findAllUserMiners() {
        AppUser currentUser = AuthContext.getCurrentUser();
        return minerRepository.getMinerByUserId(currentUser.getId())
                .stream()
                .map(MinerMapper::toMinerResponse)
                .toList();
    }

    public Miner saveMiner(Miner miner) {
        return minerRepository.save(miner);
    }

    public Miner findById(String minerId) {
        return minerRepository.findById(minerId)
                .orElseThrow(() -> new IllegalArgumentException("Miner not found with id: " + minerId));
    }
}
