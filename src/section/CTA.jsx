
function CTA() {
    return (
        <section className="bg-[#080B12] px-6 py-10 lg:px-10">

            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#22D3EE]/10 bg-gradient-to-br from-[#0D1625] via-[#0B111B] to-[#080B12] px-7 py-14 sm:px-12 lg:px-16">

                {/* Glow */}
                <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-[#22D3EE]/10 blur-[100px]" />

                <div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-center">

                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#22D3EE]">
                            Let's work together
                        </p>

                        <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Have an idea?
                            <span className="text-[#22D3EE]">
                                {" "}Let's build it.
                            </span>
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                            Whether you need a new React website, a responsive
                            interface or improvements to an existing project,
                            let's create something meaningful together.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-[#22D3EE] px-6 py-3.5 text-sm font-bold text-[#080B12] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#22D3EE]/20"
                    >
                        Start a project

                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </a>

                </div>
            </div>
        </section>
    );
}

export default CTA;

