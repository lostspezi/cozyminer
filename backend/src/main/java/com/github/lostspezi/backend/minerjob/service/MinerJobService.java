package com.github.lostspezi.backend.minerjob.service;

import com.github.lostspezi.backend.inventory.service.InventoryService;
import com.github.lostspezi.backend.miner.model.Miner;
import com.github.lostspezi.backend.miner.service.MinerService;
import com.github.lostspezi.backend.minerjob.model.MinerJob;
import com.github.lostspezi.backend.minerjob.repository.MinerJobRepository;
import com.github.lostspezi.backend.security.service.AuthContext;
import com.github.lostspezi.backend.user.model.AppUser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.concurrent.ThreadLocalRandom;

@Service
@RequiredArgsConstructor
@Slf4j
public class MinerJobService {

    private final MinerJobRepository minerJobRepository;
    private final InventoryService inventoryService;
    private final TaskScheduler taskScheduler;
    private final MinerService minerService;

    public void startMining(String minerId) {
        AppUser user = AuthContext.getCurrentUser();
        Miner miner = minerService.findById(minerId);
        Instant now = Instant.now();

        MinerJob job = MinerJob.builder()
                .userId(user.getId())
                .minerId(minerId)
                .startedAt(now)
                .finishesAt(now.plusSeconds(5))
                .completed(false)
                .build();

        minerJobRepository.save(job);

        taskScheduler.schedule(() -> finishMining(miner, job.getId(), user), job.getFinishesAt());
    }

    private void finishMining(Miner miner, String jobId, AppUser user) {
        MinerJob job = minerJobRepository.findById(jobId).orElseThrow();
        if (job.isCompleted()) return;

        int oreAmount = ThreadLocalRandom.current().nextInt(1, 11);
        inventoryService.addOreToInventory(miner.getOreType(), oreAmount, user);

        job.setCompleted(true);
        job.setCollected(oreAmount);
        minerJobRepository.save(job);
    }

}
