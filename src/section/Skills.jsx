
import SectionHeading from "../Components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const skillGroups = [
    {
        title: { en: "Frontend Development", ar: "تطوير الواجهات" },
        description: {
            en: "My core tools for building responsive user interfaces.",
            ar: "أهم التقنيات التي أستخدمها لبناء واجهات متجاوبة.",
        },
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "React Router",
            "Tailwind CSS",
            "Bootstrap",
            "Context API",
        ],
    },
    {
        title: { en: "Backend & APIs", ar: "الخلفية وواجهات API" },
        description: {
            en: "Technologies I use for backend learning and data integration.",
            ar: "تقنيات أستخدمها في تعلم تطوير الخلفية وربط البيانات.",
        },
        skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "REST APIs",
            "Axios",
        ],
    },
    {
        title: { en: "Tools & Workflow", ar: "الأدوات وسير العمل" },
        description: {
            en: "Tools for collaboration, development and interface planning.",
            ar: "أدوات التعاون وتطوير المشاريع والتخطيط للواجهات.",
        },
        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Figma",
            "Canva",
            "Vite",
        ],
    },
];

function Skills() {
    const { isArabic } = useLanguage();

    return (
        <section
            id="skills"
            dir={isArabic ? "rtl" : "ltr"}
            className="relative isolate overflow-hidden bg-[#171411] px-5 py-24 text-[#F4EBDD] sm:px-8 lg:px-10 lg:py-28"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#D96535]/10 blur-[130px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#D5B895]/[0.06] blur-[130px]"
            />

            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow={isArabic ? "التقنيات والمهارات" : "MY TOOLKIT"}
                    title={
                        isArabic
                            ? "التقنيات وراء شغلي"
                            : "The tools behind my work"
                    }
                    description={
                        isArabic
                            ? "مجموعة من التقنيات التي أستخدمها في بناء واجهات الويب وتطوير التطبيقات."
                            : "A collection of technologies I use to build modern interfaces and web applications."
                    }
                    number="03"
                />

                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group, index) => (
                        <article
                            key={group.title.en}
                            className="group relative overflow-hidden rounded-2xl border border-[#D5B895]/10 bg-[#211D18]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D96535]/40 hover:shadow-[0_12px_40px_rgba(217,101,53,0.09)] sm:p-7"
                        >
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D96535]/0 blur-[70px] transition-colors duration-500 group-hover:bg-[#D96535]/10"
                            />

                            <div className="relative flex items-center justify-between gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D96535]/20 bg-[#D96535]/[0.08] font-mono text-sm text-[#D96535]">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="h-px flex-1 bg-gradient-to-l from-[#D5B895]/20 to-transparent" />
                            </div>

                            <h3 className="relative mt-6 text-lg font-semibold text-[#F4EBDD]">
                                {group.title[isArabic ? "ar" : "en"]}
                            </h3>

                            <p className="relative mt-2 text-xs leading-6 text-[#B6A99A]">
                                {group.description[isArabic ? "ar" : "en"]}
                            </p>

                            <div className="relative mt-5 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-lg border border-[#D5B895]/10 bg-[#171411]/70 px-3 py-2 text-xs text-[#D5B895] transition-all duration-300 hover:border-[#D96535]/40 hover:bg-[#D96535]/[0.08] hover:text-[#F4EBDD]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="relative mt-6 h-px overflow-hidden bg-[#D5B895]/10">
                                <div className="h-full w-0 bg-[#D96535] transition-all duration-500 group-hover:w-full" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
