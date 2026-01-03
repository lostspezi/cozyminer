package com.github.lostspezi.backend.miner.controller;

import com.github.lostspezi.backend.miner.dto.MinerResponse;
import com.github.lostspezi.backend.miner.service.MinerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/miners")
public class MinerController {

    private final MinerService minerService;

    @GetMapping
    public ResponseEntity<List<MinerResponse>> findAllUserMiners() {
        return ResponseEntity
                .ok()
                .body(minerService.findAllUserMiners());
    }

}
