package com.github.lostspezi.backend.user.util;

import com.github.lostspezi.backend.user.model.PlayerLevel;

public final class PlayerLevelCalculator {

    private PlayerLevelCalculator() {
    }

    /**
     * XP needed to advance FROM this current TO the next one
     */
    public static long xpForNextLevel(int level) {
        return 100L * level * level;
    }

    public static long missingXp(PlayerLevel level) {
        return Math.max(
                0,
                xpForNextLevel(level.current()) - level.currentXp()
        );
    }

    public static int progressPercent(PlayerLevel level) {
        long needed = xpForNextLevel(level.current());

        if (needed <= 0) {
            return 100;
        }

        return (int) Math.min(
                100,
                (level.currentXp() * 100) / needed
        );
    }
}
