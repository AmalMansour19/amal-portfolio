function TechMarquee() {
    const technologies = [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Git",
        "REST APIs",
    ];

    return (
        <section className="border-y border-white/[0.06] bg-[#080B12] py-6 overflow-hidden">
            <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-10">
                {[...technologies, ...technologies].map((tech, index) => (
                    <div
                        key={`${tech}-${index}`}
                        className="flex items-center gap-10 whitespace-nowrap"
                    >
                        <span className="text-sm font-medium text-slate-500">
                            {tech}
                        </span>

                        <span className="h-1.5 w-1.5 rounded-full bg-[#22D3EE]" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TechMarquee;