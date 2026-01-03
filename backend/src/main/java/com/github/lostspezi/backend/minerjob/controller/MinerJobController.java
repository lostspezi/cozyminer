package com.github.lostspezi.backend.minerjob.controller;

import com.github.lostspezi.backend.minerjob.service.MinerJobService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/mining")
public class MinerJobController {

    private final MinerJobService minerJobService;

    @PostMapping("/start")
    public ResponseEntity<Void> startMining(@RequestParam(name = "minerId") String minerId) {
        minerJobService.startMining(minerId);
        return ResponseEntity.accepted().build();
    }

}
