import Loader from "./loader.tsx";

export default function FullScreenLoader() {
    return (
        <div
            className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-gradient-to-b
        from-stone-100/90 to-stone-200/90
        dark:from-slate-900/90 dark:to-slate-950/90
        backdrop-blur-sm
      "
        >
            {/* Soft glow background */}
            <div
                className="
          absolute
          h-[320px] w-[320px]
          rounded-full
          bg-emerald-400/20 dark:bg-emerald-500/10
          blur-3xl
        "
            />

            {/* Loader Card */}
            <div
                className="
          relative z-10
          flex flex-col items-center gap-6
          rounded-2xl
          bg-white/80 dark:bg-slate-800/80
          px-10 py-8
          shadow-xl
          border border-stone-200 dark:border-slate-700
        "
            >
                <Loader/>

                {/* Cozy subtext */}
                <span className="text-xs tracking-wide text-stone-500 dark:text-slate-400">
          Please relax while your mine is prepared
        </span>
            </div>
        </div>
    );
}
