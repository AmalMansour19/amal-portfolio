
import SectionHeading from "../Components/SectionHeading";

const journey = [
    {
        year: "Late 2024",
        title: "Started Web Development",
        description:
            "Started learning web development through structured courses and self-learning, building a strong foundation in HTML, CSS and JavaScript.",
    },
    {
        year: "2025",
        title: "Growing with React",
        description:
            "Moved into React and began building component-based applications while continuously improving through courses, personal practice and hands-on projects.",
    },
    {
        year: "2025–2026",
        title: "Learning Through Practice",
        description:
            "Built and experimented with different projects, working with responsive design, APIs, authentication, routing, state management and modern frontend tools.",
    },
    {
        year: "2026",
        title: "Collaboration & Teaching",
        description:
            "Gained practical experience through team-based work and volunteering, including helping others learn and solve frontend challenges.",
    },
    {
        year: "Now",
        title: "Building & Evolving",
        description:
            "Focused on creating polished React experiences, working on real-world projects and continuously developing my skills as a frontend developer.",
    },
];

function Journey() {
    return (
        <section
            id="journey"
            className="relative overflow-hidden bg-[#0A0F18] px-6 py-28 lg:px-10 lg:py-36"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-[-180px] top-1/3 h-[400px] w-[400px] rounded-full bg-[#2563EB]/5 blur-[130px]" />

            <div className="relative mx-auto max-w-7xl">

                <SectionHeading
                    eyebrow="My journey"
                    title="Learning, building, and evolving."
                    description="From learning the fundamentals to building real projects and collaborating with others, every step has shaped the way I build for the web."
                />

                <div className="relative mt-16 ml-3 border-l border-white/[0.08]">

                    {journey.map((item) => (
                        <div
                            key={item.year}
                            className="group relative pb-14 pl-10 last:pb-0"
                        >

                            {/* Timeline dot */}
                            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

                            {/* Period */}
                            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
                                {item.year}
                            </span>

                            {/* Title */}
                            <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                                {item.description}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Journey;

