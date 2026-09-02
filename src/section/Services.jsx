
import SectionHeading from "../Components/SectionHeading";

const services = [
    {
        number: "01",
        title: "React Development",
        description:
            "Modern React interfaces built with reusable components and clean structure.",
        icon: "</>",
    },
    {
        number: "02",
        title: "Figma to React",
        description:
            "Pixel-focused, responsive React implementation from your Figma designs.",
        icon: "◈",
    },
    {
        number: "03",
        title: "Landing Pages",
        description:
            "Clean and engaging landing pages built for a smooth experience across devices.",
        icon: "✦",
    },
    {
        number: "04",
        title: "E-Commerce",
        description:
            "Responsive storefronts with products, cart, wishlist and essential shopping flows.",
        icon: "◇",
    },
    {
        number: "05",
        title: "API Integration",
        description:
            "Connecting React applications with REST APIs and real-world application data.",
        icon: "⌘",
    },
    {
        number: "06",
        title: "React Improvements",
        description:
            "Bug fixes, new features, responsive improvements and frontend refinements.",
        icon: "↗",
    },
];

function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#080B12] px-6 py-24 lg:px-10 lg:py-32"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl">

                <SectionHeading
                    eyebrow="Services"
                    title="What I can help you build."
                    description="Focused frontend services for modern, responsive and engaging web experiences."
                />

                <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="group relative flex min-h-[290px] flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#22D3EE]/40 hover:bg-white/[0.045] hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)] sm:p-8"
                        >

                            {/* Hover glows */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#22D3EE]/0 blur-[70px] transition-all duration-700 group-hover:bg-[#22D3EE]/15" />

                            <div className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-[#2563EB]/0 blur-[70px] transition-all duration-700 group-hover:bg-[#2563EB]/10" />

                            {/* Header */}
                            <div className="relative flex items-start justify-between">

                                <span className="font-mono text-xs tracking-wider text-slate-600">
                                    {service.number}
                                </span>

                                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#22D3EE]/10 bg-[#22D3EE]/5 font-mono text-sm text-[#22D3EE] transition-all duration-300 group-hover:border-[#22D3EE]/30 group-hover:bg-[#22D3EE]/10 group-hover:shadow-xl group-hover:shadow-[#22D3EE]/20">
                                    {service.icon}
                                </span>

                            </div>

                            {/* Content */}
                            <div className="relative mt-auto">

                                <h3 className="text-xl font-semibold tracking-tight text-white">
                                    {service.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    {service.description}
                                </p>

                            </div>

                            {/* Bottom */}
                            <div className="relative mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">

                                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                                    Available
                                </span>

                                <span className="text-sm text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#22D3EE]">
                                    →
                                </span>

                            </div>

                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Services;
