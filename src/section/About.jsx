
import SectionHeading from "../Components/SectionHeading";

function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#080B12] px-6 py-24 lg:px-10 lg:py-32"
        >
            <div className="mx-auto max-w-7xl">

                <SectionHeading
                    eyebrow="About me"
                    title="I build interfaces people enjoy using."
                    description="I'm Amal, a React Front-End Developer focused on creating clean, responsive and engaging digital experiences."
                />

                <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">

                    {/* Main Card */}
                    <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-8 sm:p-10">

                        {/* Glow */}
                        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#2563EB]/10 blur-[90px]" />

                        <div className="relative">
                            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#22D3EE]">
                                A little about me
                            </span>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                                I enjoy turning ideas and designs into polished
                                web experiences that feel simple, intuitive and
                                purposeful.
                            </p>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                                I work mainly with React and JavaScript, with a
                                strong focus on responsive design, reusable
                                components and smooth user experiences.
                            </p>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-2 gap-4">

                        <div className="group rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/25">
                            <span className="text-2xl font-bold text-white">
                                React
                            </span>

                            <p className="mt-2 text-xs leading-6 text-slate-500">
                                Component-based development
                            </p>
                        </div>

                        <div className="group rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/25">
                            <span className="text-2xl font-bold text-white">
                                JavaScript
                            </span>

                            <p className="mt-2 text-xs leading-6 text-slate-500">
                                Interactive web experiences
                            </p>
                        </div>

                        <div className="group rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/25">
                            <span className="text-2xl font-bold text-white">
                                UI/UX
                            </span>

                            <p className="mt-2 text-xs leading-6 text-slate-500">
                                Clean & user-focused design
                            </p>
                        </div>

                        <div className="group rounded-3xl border border-[#22D3EE]/10 bg-[#22D3EE]/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/30">
                            <span className="text-2xl font-bold text-[#22D3EE]">
                                APIs
                            </span>

                            <p className="mt-2 text-xs leading-6 text-slate-500">
                                Connecting real-world data
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
