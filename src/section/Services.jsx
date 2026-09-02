
import SectionHeading from "../components/SectionHeading";

const services = [
    {
        number: "01",
        title: "React Development",
        description:
            "Modern and scalable React interfaces built with reusable components, clean structure and smooth interactions.",
        icon: "</>",
    },
    {
        number: "02",
        title: "Figma to React",
        description:
            "Turning Figma designs into polished, responsive React interfaces while keeping the original visual details and user experience.",
        icon: "◈",
    },
    {
        number: "03",
        title: "Landing Pages",
        description:
            "Clean, engaging and conversion-focused landing pages designed to look great and perform beautifully across devices.",
        icon: "✦",
    },
    {
        number: "04",
        title: "E-Commerce Interfaces",
        description:
            "Responsive storefronts with product pages, search, filtering, pagination, cart and wishlist experiences.",
        icon: "◇",
    },
    {
        number: "05",
        title: "API Integration",
        description:
            "Connecting React applications with REST APIs to fetch, display and manage real-world application data.",
        icon: "⌘",
    },
    {
        number: "06",
        title: "React Improvements",
        description:
            "Fixing frontend bugs, adding new features, improving responsiveness and refining existing React interfaces.",
        icon: "↗",
    },
];

function Services() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#080B12] px-6 py-28 lg:px-10 lg:py-36"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#2563EB]/5 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl">

                <SectionHeading
                    eyebrow="Services"
                    title="From ideas to polished digital experiences."
                    description="Whether you have a design, an idea or an existing React project, I can help turn it into a clean, responsive and engaging web experience."
                />

                <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#22D3EE]/40 hover:bg-white/[0.055] hover:shadow-[0_20px_60px_rgba(34,211,238,0.14)] sm:p-8"
                        >

                            {/* Hover glow */}
                            {/* Hover glow */}
                            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#22D3EE]/0 blur-[70px] transition-all duration-700 group-hover:bg-[#22D3EE]/15" />

                            <div className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-[#2563EB]/0 blur-[70px] transition-all duration-700 group-hover:bg-[#2563EB]/10" />

                            {/* Header */}
                            <div className="relative flex items-start justify-between">

                                <span className="font-mono text-xs tracking-wider text-slate-600">
                                    {service.number}
                                </span>

                                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#22D3EE]/10 bg-[#22D3EE]/5 font-mono text-sm text-[#22D3EE] transition-all duration-300 group-hover:border-[#22D3EE]/30 group-hover:bg-[#22D3EE]/10 group-hover:shadow-xl group-hover:shadow-[#22D3EE]/20">
                                    {service.icon}
                                </span>

                            </div>

                            {/* Content */}
                            <div className="relative mt-auto">

                                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-500">
                                    {service.description}
                                </p>

                            </div>

                            {/* Bottom */}
                            <div className="relative mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">

                                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600">
                                    Available service
                                </span>

                                <span className="text-sm text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#22D3EE]">
                                    →
                                </span>

                            </div>

                        </article>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 sm:flex-row sm:items-center sm:p-8">

                    <div>
                        <p className="text-sm font-semibold text-white">
                            Have a project in mind?
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            Let's turn your idea into something people enjoy using.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-[#22D3EE]/20 bg-[#22D3EE]/5 px-5 py-3 text-sm font-semibold text-[#22D3EE] transition-all duration-300 hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/10"
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

export default Services;

