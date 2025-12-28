import {FaDiscord} from "react-icons/fa";
import type {User} from "../types/user.ts";
import {Navigate} from "react-router-dom";

type LoginProps = {
    user: User | null | undefined;
};

const YOUTUBE_ID = "Rik8YhvH09M";

export default function Login({user}: Readonly<LoginProps>) {
    if (user) {
        return <Navigate to="/"/>;
    }

    const login = () => {
        globalThis.window.location.href =
            "http://localhost:8080/oauth2/authorization/discord";
    };

    return (
        <div className="relative h-screen w-screen overflow-hidden">

            {/* YouTube Background */}
            <iframe
                className="absolute top-1/2 left-1/2
             w-screen h-screen
             min-w-[177.78vh] min-h-[56.25vw]
             -translate-x-1/2 -translate-y-1/2
             pointer-events-none"
                src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&showinfo=0&modestbranding=1&playsinline=1`}
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Login Background"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"/>

            {/* Login Content */}
            <div className="relative z-20 h-full w-full flex justify-center items-center">
                <div className="h-auto w-3/4 rounded-2xl border-4 border-gray-400/30
                        bg-gray-800/80 backdrop-blur-md
                        flex flex-col justify-between p-6 space-y-4 text-white">
                    <h1 className="text-5xl text-center underline">Cozy Miner</h1>

                    <div className="flex flex-col space-y-2">
                        <p>
                            Cozy Miner combines idle gameplay with meaningful progression in a calm and welcoming
                            atmosphere.
                            Start small, gather resources, and continuously improve your mining setup over time.
                        </p>
                        <p>
                            Automate production, unlock upgrades, and make smart decisions to increase efficiency and
                            long term growth.
                            Whether you actively manage your setup or let it run in the background, progress is always
                            moving forward.
                        </p>
                        <p>
                            Designed for relaxed play sessions, Cozy Miner focuses on comfort, clarity, and steady
                            advancement rather than pressure or competition.
                            Log in with Discord and build your mining world at your own pace.
                        </p>
                    </div>

                    <button
                        onClick={login}
                        className="
        relative overflow-hidden
        bg-gray-900
        rounded-xl p-3
        flex justify-center items-center
        cursor-pointer
        group
    "
                    >
                        {/* Hover Fill */}
                        <span
                            className="
            absolute inset-0
            bg-gray-700
            transform scale-x-0
            origin-left
            transition-transform duration-800 ease-out
            group-hover:scale-x-100
        "
                        />

                        {/* Content */}
                        <span className="relative z-10 flex items-center">
        <FaDiscord size={28} className="mr-3"/>
        Login with Discord
    </span>
                    </button>

                </div>
            </div>
        </div>
    );
}
