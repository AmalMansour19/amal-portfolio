
import SectionHeading from "../Components/SectionHeading";

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "React Router",
            "Tailwind CSS",
            "Bootstrap",
        ],
    },
    {
        title: "Backend & APIs",
        skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "REST APIs",
        ],
    },
    {
        title: "Tools",
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Figma",
            "Canva",
        ],
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-[#0A0F18] px-6 py-24 lg:px-10 lg:py-32"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute right-[-180px] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#2563EB]/10 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl">

                <SectionHeading
                    eyebrow="My toolkit"
                    title="The tools behind my work."
                    description="A focused set of technologies I use to build modern web experiences."
                />

                <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {skillGroups.map((group, groupIndex) => (
                        <div
                            key={group.title}
                            className={`rounded-3xl border p-7 ${
    groupIndex === 0
        ? "border-[#22D3EE]/20 bg-[#22D3EE]/[0.035]"
        : "border-white/[0.07] bg-white/[0.025]"
} `}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-white">
                                    {group.title}
                                </h3>

                                <span className="font-mono text-[10px] tracking-widest text-slate-600">
                                    {String(groupIndex + 1).padStart(2, "0")}
                                </span>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2.5">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3.5 py-2 text-xs text-slate-400 transition-all duration-300 hover:border-[#22D3EE]/30 hover:bg-[#22D3EE]/5 hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Skills;

