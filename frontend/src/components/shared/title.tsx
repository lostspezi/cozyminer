type TitleProps = {
    headliner: string;
    subtext?: string;
};
export default function Title({headliner, subtext}: Readonly<TitleProps>) {
    return (
        <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-wide">
                {headliner}
            </h1>
            {subtext &&
                <p className="text-sm text-stone-500 dark:text-slate-400">
                    {subtext}
                </p>
            }
        </div>
    );
}