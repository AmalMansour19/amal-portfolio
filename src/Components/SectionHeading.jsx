function SectionHeading({ eyebrow, title, description }) {
    return (
        <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#22D3EE]">
                {eyebrow}
            </p>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-5 text-base leading-7 text-slate-400">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionHeading;