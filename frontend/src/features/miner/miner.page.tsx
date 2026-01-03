import Title from "../../components/shared/title";
import MineCard from "../../features/miner/components/mine-card";
import {useEffect, useState} from "react";
import type {MinerResponse} from "./types/mine.type.ts";
import Loader from "../../components/loading/loader.tsx";
import axios from "axios";

export default function MinerPage() {
    const [mines, setMines] = useState<MinerResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        axios.get("/api/miners")
            .then(r => setMines(r.data))
            .catch(e => console.error("Failed to fetch mines:", e))
            .finally(() => setLoading(false));
    }, [])

    if (loading) return <Loader message="Loading your mines..."/>;

    return (
        <div className="space-y-6">
            <Title
                headliner="Your Mines"
                subtext="Manage your mines and extract valuable resources."
            />

            <div
                className="
          grid gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
            >
                {mines.map((mine) => (
                    <MineCard key={mine.id} mine={mine}/>
                ))}
            </div>
        </div>
    );
}
