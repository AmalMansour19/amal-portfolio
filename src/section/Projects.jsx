
import SectionHeading from "../Components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

import eventoraImage from "../assets/eventora.png";
import store from "../assets/store.png";
import dashboardImage from "../assets/dashboard.png";
import tastecraft from "../assets/tastecraft.png";
import househaven from "../assets/househaven.png";
import shop from "../assets/shop.png";

const projects = [
    {
        title: "Eventora",
        category: { en: "Event Discovery", ar: "اكتشاف الفعاليات" },
        description: {
            en: "Discover events through a responsive interface with interactive browsing and organized content.",
            ar: "منصة لاكتشاف الفعاليات بواجهة متجاوبة وتصفح تفاعلي ومحتوى منظم.",
        },
        tech: ["React", "React Router", "Axios", "Tailwind"],
        number: "01",
        image: eventoraImage,
        live: "https://eventora-event-platform-k5om.vercel.app/",
    },
    {
        title: "VELŌRA.",
        category: { en: "E-Commerce", ar: "متجر إلكتروني" },
        description: {
            en: "A modern storefront with product details, cart, wishlist and authentication features.",
            ar: "متجر عصري يعرض المنتجات وتفاصيلها مع السلة والمفضلة وتسجيل الدخول.",
        },
        tech: ["React", "Tailwind", "REST API", "Context API"],
        number: "02",
        image: store,
        live: "https://amalmansour19.github.io/EcommerceShop/",
    },
    {
        title: "Koda Store Dashboard",
        category: { en: "Admin Dashboard", ar: "لوحة تحكم إدارية" },
        description: {
            en: "A dashboard interface for organizing store information, products and orders.",
            ar: "لوحة تحكم لإدارة بيانات المتجر والمنتجات والطلبات من خلال واجهة منظمة.",
        },
        tech: ["React", "Tailwind CSS", "Charts"],
        number: "03",
        image: dashboardImage,
        live: "https://koda-store-dashboard.vercel.app/login",
    },
    {
        title: "TasteCraft",
        category: { en: "Recipe Web App", ar: "تطبيق وصفات" },
        description: {
            en: "A recipe-focused web experience with clean layouts and easy content discovery.",
            ar: "تطبيق للوصفات بتصميم منظم يساعد على استكشاف المحتوى والوصول إليه بسهولة.",
        },
        tech: ["JavaScript", "HTML5", "Tailwind"],
        number: "04",
        image: tastecraft,
        live: "https://amalmansour19.github.io/TasteCraft/",
    },
    {
        title: "House Heaven",
        category: { en: "Web Application", ar: "تطبيق ويب" },
        description: {
            en: "A responsive interface featuring structured layouts and smooth visual interactions.",
            ar: "واجهة متجاوبة بتنسيقات منظمة وتفاصيل بصرية سلسة.",
        },
        tech: ["React", "Bootstrap", "Framer Motion"],
        number: "05",
        image: househaven,
        live: "https://amalmansour19.github.io/project3/",
    },
    {
        title: "Store",
        category: { en: "E-Commerce Website", ar: "واجهة متجر إلكتروني" },
        description: {
            en: "A product-focused storefront built with HTML and CSS.",
            ar: "واجهة متجر باستخدام HTML وCSS مع التركيز على عرض المنتجات.",
        },
        tech: ["HTML5", "CSS3"],
        number: "06",
        image: shop,
        live: "https://amalmansour19.github.io/project2/",
    },
];

function Projects() {
    const { isArabic } = useLanguage();
    const language = isArabic ? "ar" : "en";

    return (
        <section
            id="work"
            dir={isArabic ? "rtl" : "ltr"}
            className="relative isolate overflow-hidden bg-[#171411] px-5 py-24 text-[#F4EBDD] sm:px-8 lg:px-10 lg:py-32"
        >
            {/* Ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#D96535]/10 blur-[130px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#D5B895]/[0.06] blur-[140px]"
            />

            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <SectionHeading
                        eyebrow={isArabic ? "أعمال مختارة" : "SELECTED WORK"}
                        title={isArabic ? "مشاريع نفذتها" : "Things I've built"}
                        description={
                            isArabic
                                ? "مجموعة من المشاريع التي تعكس مهاراتي في تطوير الواجهات وتصميم تجارب استخدام واضحة."
                                : "A selection of projects showcasing my approach to frontend development and thoughtful user experiences."
                        }
                        number="02"
                    />

                    <a
                        href="#contact"
                        className="mb-12 inline-flex w-fit items-center gap-2 rounded-full border border-[#D96535]/30 px-4 py-2.5 text-xs font-medium text-[#D5B895] transition duration-300 hover:border-[#D96535]/70 hover:bg-[#D96535]/10 hover:text-[#F4EBDD] md:mb-16"
                    >
                        {isArabic ? "لديك مشروع؟ تواصل معي" : "Let's work together"}
                        <span aria-hidden="true">{isArabic ? "←" : "→"}</span>
                    </a>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className="group relative min-w-0 rounded-2xl border border-[#D5B895]/10 bg-[#211D18]/80 p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#D96535]/45 hover:bg-[#29231C] hover:shadow-[0_12px_45px_rgba(217,101,53,0.10)]"
                        >
                            {/* Image */}
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${isArabic ? "عرض مشروع" : "View project"} ${project.title}`}
                                className="relative block overflow-hidden rounded-xl bg-[#171411]"
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`${project.title} ${isArabic ? "معاينة المشروع" : "project preview"}`}
                                        loading="lazy"
                                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>

                                {/* Image overlays */}
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171411]/60 via-transparent to-transparent opacity-80" />
                                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[inset_0_0_35px_rgba(217,101,53,0.16)]" />

                                <span className="absolute start-3 top-3 rounded-full border border-white/15 bg-[#171411]/75 px-2.5 py-1 font-mono text-[10px] text-[#F4EBDD] backdrop-blur-md">
                                    {project.number}
                                </span>

                                <span className="absolute bottom-3 end-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#F4EBDD]/20 bg-[#171411]/75 text-sm text-[#F4EBDD] backdrop-blur-md transition-all duration-300 group-hover:border-[#D96535] group-hover:bg-[#D96535] group-hover:text-[#171411]">
                                    {isArabic ? "↖" : "↗"}
                                </span>
                            </a>

                            {/* Content */}
                            <div className="px-3 pb-3 pt-4">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D96535]">
                                    {project.category[language]}
                                </p>

                                <h3 className="mt-2 break-words text-lg font-semibold tracking-tight text-[#F4EBDD] transition-colors duration-300 group-hover:text-[#D5B895]">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-xs leading-6 text-[#B6A99A]">
                                    {project.description[language]}
                                </p>

                                {/* Technologies */}
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-md border border-[#D5B895]/10 bg-[#F4EBDD]/[0.025] px-2 py-1 text-[10px] text-[#D5B895]/90 transition-colors group-hover:border-[#D96535]/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4 border-t border-[#D5B895]/10 pt-3">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-medium text-[#F4EBDD] transition-colors hover:text-[#D96535]"
                                    >
                                        {isArabic ? "عرض المشروع" : "View live project"}
                                        <span aria-hidden="true">{isArabic ? "←" : "→"}</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
