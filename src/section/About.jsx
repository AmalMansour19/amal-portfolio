
import SectionHeading from "../Components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const highlightStyles = [
    "border-t-[#D96535]",
    "border-t-[#D5B895]",
    "border-t-[#D5B895]",
    "border-t-[#D96535]",
];

function About() {
    const { t, isArabic } = useLanguage();
    const about = t.about;

    const highlights = [
        {
            title: "React",
            description: about.highlights[0],
            number: "01",
        },
        {
            title: "JavaScript",
            description: about.highlights[1],
            number: "02",
        },
        {
            title: "API Integration",
            description: about.highlights[2],
            number: "03",
        },
        {
            title: "UI / UX",
            description: about.highlights[3],
            number: "04",
        },
    ];

    return (
        <section
            id="about"
            dir={isArabic ? "rtl" : "ltr"}
            className="relative isolate overflow-hidden bg-[#171411] px-6 py-24 text-[#F4EBDD] sm:px-8 lg:px-10 lg:py-32"
        >
            {/* Ambient background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 top-32 -z-10 h-96 w-96 rounded-full bg-[#D96535]/[0.07] blur-[130px]"
            />

            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow={about.label}
                    title={about.title}
                    description={about.description}
                    number="01"
                />

                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-16">
                    {/* Personal introduction */}
                    <div className="flex flex-col justify-between">
                        <div className="relative overflow-hidden rounded-[2rem] border border-[#D5B895]/15 bg-[#211D18] p-7 sm:p-10">
                            <span
                                aria-hidden="true"
                                className="absolute -top-8 text-[10rem] font-bold leading-none text-[#D5B895]/[0.06] ltr:right-4 rtl:left-4"
                            >
                                “
                            </span>

                            <div className="relative">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D96535]">
                                    {isArabic ? "فلسفتي في التطوير" : "MY APPROACH"}
                                </p>

                                <p className="mt-7 text-xl leading-9 text-[#F4EBDD] sm:text-2xl sm:leading-10">
                                    {about.paragraph}
                                </p>
                            </div>

                            <div className="mt-10 flex items-center gap-3 border-t border-[#D5B895]/15 pt-6">
                                <span className="h-2 w-2 rounded-full bg-[#D96535]" />
                                <p className="text-sm text-[#B6A99A]">
                                    {isArabic
                                        ? "أتعلم باستمرار وأطوّر طريقة عملي مع كل مشروع."
                                        : "Always learning. Always improving."}
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 flex items-center justify-between gap-4 px-2 py-3">
                            <span className="text-sm text-[#B6A99A]">
                                {isArabic ? "مجالي الأساسي" : "CURRENT FOCUS"}
                            </span>

                            <span className="rounded-full border border-[#D96535]/30 px-4 py-2 text-xs font-medium text-[#D5B895]">
                                React · Frontend
                            </span>
                        </div>
                    </div>

                    {/* Expertise grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {highlights.map((item, index) => (
                            <article
                                key={item.number}
                                className={`group relative flex min-h-48 flex-col overflow-hidden rounded-2xl border border-[#D5B895]/10 border-t-2 ${highlightStyles[index]} bg-[#F4EBDD]/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#F4EBDD]/[0.045] hover:border-x-[#D96535]/25 hover:border-b-[#D96535]/25 sm:p-7`}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <span className="text-xs tracking-[0.18em] text-[#B6A99A]/60">
                                        {item.number}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="text-lg text-[#D96535] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                    >
                                        ↗
                                    </span>
                                </div>

                                <div className="mt-auto pt-10">
                                    <h3 className="text-xl font-semibold tracking-tight text-[#F4EBDD] sm:text-2xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-[#B6A99A]">
                                        {item.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
