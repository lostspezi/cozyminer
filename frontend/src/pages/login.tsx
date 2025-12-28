import {FaDiscord} from "react-icons/fa";
import type {User} from "../types/user.ts";
import {Navigate} from "react-router-dom";

type LoginProps = {
    user: User | null | undefined
}

export default function Login({user}: Readonly<LoginProps>) {
    if (user) {
        return <Navigate to="/"/>
    }

    const login = () => {
        globalThis.window.location.href = "http://localhost:8080/oauth2/authorization/discord";
    }

    return (
        <div className="h-screen w-screen bg-gray-700 flex justify-center items-center">
            <div
                className="h-3/4 w-3/4 rounded-2xl border-5 border-gray-900 flex flex-col justify-around p-4 space-y-3.5">
                <h1 className="text-5xl text-center underline">Cozy Miner</h1>
                <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                    duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                    sit amet.</p>
                <button onClick={login}
                        className="bg-gray-900 rounded-xl p-2 text-white flex flex-row justify-center items-center cursor-pointer">
                    <FaDiscord size={28} className="mr-3"/>
                    Login with Discord
                </button>
            </div>
        </div>
    );
}