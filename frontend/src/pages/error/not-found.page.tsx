import {useNavigate} from "react-router-dom";
import NotFoundImg from "../../assets/images/404.png";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div
            className="flex min-h-screen flex-col items-center justify-center bg-stone-50 dark:bg-slate-900 px-6 text-center text-stone-800 dark:text-slate-100">

            {/* IMAGE */}
            <img
                src={NotFoundImg}
                alt="Lost miner in a cozy cave"
                className="mb-8 max-w-xs rounded-xl shadow-lg"
            />

            {/* TITLE */}
            <h1 className="mb-2 text-3xl font-semibold tracking-wide">
                Oops… you seem to be lost
            </h1>

            {/* SUBTEXT */}
            <p className="mb-6 max-w-md text-sm text-stone-600 dark:text-slate-400">
                This tunnel doesn’t lead anywhere.
                The miner couldn’t find what you were looking for,
                but there’s plenty of warmth and light back home.
            </p>

            {/* ACTION */}
            <button
                onClick={() => navigate("/")}
                className="
          rounded-lg bg-emerald-500 px-6 py-2 text-sm font-medium text-white
          hover:bg-emerald-600
          focus:outline-none focus:ring-2 focus:ring-emerald-400
          transition-colors cursor-pointer
        "
            >
                Return to Camp
            </button>

            {/* FOOTER NOTE */}
            <span className="mt-6 text-xs text-stone-400 dark:text-slate-500">
        Error 404 · Cozy Miner
      </span>
        </div>
    );
}
