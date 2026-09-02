function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#080B12] px-6 pt-28 lg:px-10 lg:pt-24"
        >
            {/* ================= BACKGROUND ================= */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#2563EB]/10 blur-[150px] sm:h-[500px] sm:w-[500px]" />

                <div className="absolute right-[-180px] top-[15%] h-[450px] w-[450px] rounded-full bg-[#22D3EE]/10 blur-[150px] sm:h-[520px] sm:w-[520px]" />

                <div className="absolute bottom-[-180px] left-[40%] h-[380px] w-[380px] rounded-full bg-[#10B981]/5 blur-[140px]" />
            </div>

            {/* ================= GRID ================= */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.035]"
                style={{
                    backgroundImage:
                        "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">

                {/* ================= LEFT ================= */}
                <div className="max-w-2xl">

                    {/* Availability */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/20 bg-[#22D3EE]/5 px-4 py-2 backdrop-blur-md sm:mb-7">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22D3EE] opacity-50" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#22D3EE]" />
                        </span>

                        <span className="text-xs font-medium tracking-wide text-slate-300">
                            Available for freelance work
                        </span>
                    </div>

                    {/* Eyebrow */}
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#22D3EE] sm:mb-5 sm:text-sm sm:tracking-[0.35em]">
                        React Front-End Developer
                    </p>

                    {/* Heading */}
                    <h1 className="text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-7xl xl:text-[82px]">
                        Hi, I'm
                        <br />

                        <span className="mt-2 inline-block bg-gradient-to-r from-[#2563EB] via-[#22D3EE] to-[#10B981] bg-clip-text text-transparent">
                            Amal Mansour
                        </span>
                    </h1>

                    {/* Main Description */}
                    <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
                        I build modern, responsive React websites and turn ideas
                        and designs into clean, interactive digital experiences.
                    </p>

                    {/* Supporting Line */}
                    <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                        From landing pages and e-commerce interfaces to
                        API-powered web applications and custom React solutions.
                    </p>

                    {/* ================= BUTTONS ================= */}
                    <div className="mt-8 flex flex-wrap gap-4 sm:mt-9">

                        <a
                            href="#work"
                            className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#22D3EE] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#2563EB]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#22D3EE]/25"
                        >
                            View My Work

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/30 hover:bg-[#22D3EE]/5 hover:shadow-lg hover:shadow-[#22D3EE]/5"
                        >
                            Let's Talk

                            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                                ↗
                            </span>
                        </a>

                    </div>

                    {/* ================= SOCIAL ================= */}
                    <div className="mt-9 flex flex-wrap items-center gap-5 sm:mt-10">

                        <span className="text-[10px] uppercase tracking-[0.25em] text-slate-600">
                            Let's connect
                        </span>

                        <div className="h-px w-8 bg-white/10" />

                        <a
                            href="https://github.com/AmalMansour19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#22D3EE]"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/amalmansour20/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#22D3EE]"
                        >
                            LinkedIn
                        </a>

                    </div>
                </div>

                {/* ================= RIGHT VISUAL ================= */}
                <div className="relative flex min-h-[390px] items-center justify-center sm:min-h-[470px] lg:min-h-[600px]">

                    {/* Main Glow */}
                    <div className="absolute h-[280px] w-[280px] rounded-full bg-[#2563EB]/20 blur-[100px] sm:h-[430px] sm:w-[430px]" />

                    {/* Secondary Glow */}
                    <div className="absolute h-[180px] w-[180px] translate-x-16 rounded-full bg-[#22D3EE]/10 blur-[90px] sm:h-[260px] sm:w-[260px]" />

                    {/* Orbit */}
                    <div className="absolute h-[310px] w-[310px] rounded-full border border-[#22D3EE]/10 sm:h-[500px] sm:w-[500px]" />

                    <div className="absolute h-[240px] w-[240px] rounded-full border border-[#2563EB]/10 sm:h-[390px] sm:w-[390px]" />

                    {/* Orbit Dots */}
                    <div className="absolute right-[10%] top-[18%] h-3 w-3 rounded-full bg-[#22D3EE] shadow-[0_0_22px_#22D3EE]" />

                    <div className="absolute bottom-[17%] left-[12%] h-2.5 w-2.5 rounded-full bg-[#2563EB] shadow-[0_0_18px_#2563EB]" />

                    <div className="absolute left-[7%] top-[34%] h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_15px_#10B981]" />

                    {/* ================= MONITOR ================= */}
                    <div className="relative z-10 w-full max-w-[520px]">

                        {/* Floating React Badge */}
                        <div className="absolute -right-1 -top-9 z-20 flex h-14 w-14 rotate-6 items-center justify-center rounded-2xl border border-[#22D3EE]/25 bg-[#0D131D]/95 shadow-[0_15px_45px_rgba(34,211,238,0.15)] backdrop-blur-xl sm:-right-5 sm:-top-14 sm:h-20 sm:w-20">
                            <span className="text-2xl font-bold text-[#22D3EE] sm:text-3xl">
                                ⚛
                            </span>
                        </div>

                        {/* Floating Code Badge */}
                        <div className="absolute -bottom-4 -left-2 z-20 flex h-12 w-12 -rotate-6 items-center justify-center rounded-xl border border-[#2563EB]/25 bg-[#0D131D]/95 shadow-[0_15px_40px_rgba(37,99,235,0.15)] backdrop-blur-xl sm:-left-8 sm:h-16 sm:w-16">
                            <span className="font-mono text-lg font-bold text-[#2563EB] sm:text-xl">
                                {"</>"}
                            </span>
                        </div>

                        {/* Monitor */}
                        <div className="rounded-2xl border border-white/10 bg-[#0C111A]/95 p-2 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:rounded-3xl sm:p-3">

                            {/* Screen */}
                            <div className="overflow-hidden rounded-xl border border-white/5 bg-[#080B12] shadow-inner shadow-black/30 sm:rounded-2xl">

                                {/* Browser Top */}
                                <div className="flex h-9 items-center justify-between border-b border-white/5 px-4 sm:h-11">

                                    <div className="flex gap-1.5">
                                        <span className="h-2 w-2 rounded-full bg-red-400/60" />
                                        <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                                        <span className="h-2 w-2 rounded-full bg-green-400/60" />
                                    </div>

                                    <div className="rounded-md border border-white/5 bg-white/[0.02] px-5 py-1">
                                        <span className="text-[8px] text-slate-600 sm:text-[9px]">
                                            amal.dev
                                        </span>
                                    </div>

                                    <span className="text-[8px] text-slate-700">
                                        ⋮
                                    </span>

                                </div>

                                {/* Screen Content */}
                                <div className="grid min-h-[235px] grid-cols-[1fr_1.15fr] gap-3 p-4 sm:min-h-[330px] sm:gap-4 sm:p-7">

                                    {/* Code */}
                                    <div className="flex flex-col justify-center">

                                        <p className="font-mono text-[8px] text-slate-700 sm:text-[9px]">
                                            01
                                        </p>

                                        <p className="mt-3 font-mono text-[9px] sm:text-xs">
                                            <span className="text-[#22D3EE]">
                                                const
                                            </span>{" "}
                                            <span className="text-white">
                                                developer
                                            </span>{" "}
                                            <span className="text-slate-600">
                                                =
                                            </span>
                                        </p>

                                        <p className="mt-2 font-mono text-[9px] sm:text-xs">
                                            <span className="text-[#10B981]">
                                                {"{"}
                                            </span>
                                        </p>

                                        <div className="ml-2 mt-2 space-y-2 font-mono text-[7px] sm:ml-3 sm:text-[10px]">

                                            <p>
                                                <span className="text-slate-600">
                                                    name:
                                                </span>{" "}
                                                <span className="text-[#22D3EE]">
                                                    "Amal"
                                                </span>
                                            </p>

                                            <p>
                                                <span className="text-slate-600">
                                                    role:
                                                </span>{" "}
                                                <span className="text-[#22D3EE]">
                                                    "React Developer"
                                                </span>
                                            </p>

                                            <p>
                                                <span className="text-slate-600">
                                                    focus:
                                                </span>{" "}
                                                <span className="text-[#22D3EE]">
                                                    "Frontend"
                                                </span>
                                            </p>

                                        </div>

                                        <p className="mt-2 font-mono text-[9px] text-[#10B981]">
                                            {"}"}
                                        </p>

                                    </div>

                                    {/* UI Preview */}
                                    <div className="relative flex items-center justify-center">

                                        <div className="relative w-full max-w-[170px] rounded-xl border border-[#2563EB]/20 bg-[#0D1422] p-3 shadow-lg shadow-[#2563EB]/10 sm:max-w-[220px]">

                                            {/* Mini Navbar */}
                                            <div className="flex items-center justify-between">
                                                <div className="h-2 w-9 rounded bg-[#22D3EE]/40" />

                                                <div className="h-2 w-5 rounded bg-white/10" />
                                            </div>

                                            {/* Mini Hero */}
                                            <div className="mt-6 sm:mt-7">

                                                <div className="h-3 w-20 rounded bg-white/80 sm:w-24" />

                                                <div className="mt-2 h-2 w-28 rounded bg-[#22D3EE]/50 sm:w-32" />

                                                <div className="mt-4 h-6 w-16 rounded-md bg-gradient-to-r from-[#2563EB] to-[#22D3EE] sm:h-7 sm:w-20" />

                                            </div>

                                            {/* Cards */}
                                            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8">
                                                <div className="h-12 rounded-lg border border-white/5 bg-white/[0.03] sm:h-16" />
                                                <div className="h-12 rounded-lg border border-white/5 bg-white/[0.03] sm:h-16" />
                                            </div>

                                            {/* Inner Glow */}
                                            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#22D3EE]/10 blur-2xl" />

                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Monitor Stand */}
                            <div className="mx-auto h-7 w-20 bg-gradient-to-b from-[#171E29] to-[#0B1018] sm:h-10 sm:w-28" />

                            <div className="mx-auto h-2 w-28 rounded-full bg-[#1B2431] shadow-lg sm:w-40" />

                        </div>

                        {/* Floating Status */}
                        <div className="absolute -bottom-9 right-0 rounded-xl border border-white/10 bg-[#0D131D]/95 px-3 py-2.5 shadow-[0_15px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:-right-5 sm:px-4 sm:py-3">

                            <div className="flex items-center gap-3">

                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#22D3EE]/10 text-[#22D3EE]">
                                    ✦
                                </span>

                                <div>
                                    <p className="text-[9px] text-slate-600">
                                        Open to
                                    </p>

                                    <p className="text-xs font-semibold text-white">
                                        freelance projects
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* ================= SCROLL INDICATOR ================= */}
            <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex">

                <span className="text-[9px] uppercase tracking-[0.35em] text-slate-600">
                    Scroll to explore
                </span>

                <div className="mt-3 h-10 w-px bg-gradient-to-b from-[#22D3EE] to-transparent" />

            </div>
        </section>
    );
}

export default Hero;