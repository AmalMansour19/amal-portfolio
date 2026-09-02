import SectionHeading from "../Components/SectionHeading";

const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "React Router",
    "Tailwind CSS",
    "Bootstrap",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST APIs",
    "Git",
    "GitHub",
];

function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#0A0F18] px-6 py-28 lg:px-10 lg:py-36"
        >
            <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#2563EB]/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl">

                <SectionHeading
                    eyebrow="My toolkit"
                    title="Technologies I use to bring ideas to life."
                />

                <div className="mt-14 flex flex-wrap gap-3">

                    {skills.map((skill, index) => (
                        <div
                            key={skill}
                            className="group rounded-full border border-white/[0.08] bg-white/[0.025] px-5 py-3 transition-all duration-300 hover:border-[#22D3EE]/30 hover:bg-[#22D3EE]/5"
                        >
                            <span className="mr-2 font-mono text-[10px] text-slate-700">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="text-sm text-slate-400 transition group-hover:text-white">
                                {skill}
                            </span>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Skills;