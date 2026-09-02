
import SectionHeading from "../Components/SectionHeading";

function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#080B12] px-6 py-28 lg:px-10 lg:py-36"
        >
            <div className="mx-auto max-w-7xl">

                <SectionHeading
                    eyebrow="About me"
                    title="Building with purpose, not just pixels."
                    description="I'm Amal, a React Front-End Developer focused on creating modern, responsive and engaging web experiences."
                />

                <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* Main Card */}
                    <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-8 sm:p-10">

                        {/* Glow */}
                        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-[90px]" />
                        <div className="absolute -bottom-32 -left-20 h-56 w-56 rounded-full bg-[#22D3EE]/5 blur-[80px]" />

                        <div className="relative">

                            <p className="max-w-2xl text-lg leading-9 text-slate-300">
                                I enjoy turning ideas and designs into polished,
                                functional interfaces that are easy to use and
                                built to work beautifully across devices.
                            </p>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
                                My work focuses on React, JavaScript and modern
                                front-end technologies. I care about clean
                                component structure, responsive layouts,
                                thoughtful interactions and details that make
                                a product feel complete.
                            </p>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500">
                                I also have a solid understanding of UI/UX and
                                backend fundamentals, which helps me build
                                front-end experiences that connect naturally
                                with real-world APIs and applications.
                            </p>

                            <a
                                href="#services"
                                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#22D3EE] transition-all duration-300 hover:gap-3"
                            >
                                Explore my services
                                <span className="transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </a>

                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-4">

                        {/* React */}
                        <div className="group rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/20 hover:bg-white/[0.04]">
                            <span className="text-3xl font-bold text-white">
                                React
                            </span>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Modern frontend development
                            </p>
                        </div>

                        {/* UI / UX */}
                        <div className="group rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/20 hover:bg-white/[0.04]">
                            <span className="text-3xl font-bold text-white">
                                UI/UX
                            </span>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Design-driven interfaces
                            </p>
                        </div>

                        {/* Responsive */}
                        <div className="group rounded-3xl border border-white/[0.07] bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/20 hover:bg-white/[0.04]">
                            <span className="text-3xl font-bold text-white">
                                100%
                            </span>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Responsive by default
                            </p>
                        </div>

                        {/* Learning */}
                        <div className="group rounded-3xl border border-[#22D3EE]/10 bg-[#22D3EE]/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/30">
                            <span className="text-3xl font-bold text-[#22D3EE]">
                                ∞
                            </span>

                            <p className="mt-2 text-sm leading-6 text-slate-500">
                                Always learning & improving
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;

