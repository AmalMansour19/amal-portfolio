
import SectionHeading from "../Components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const services = [
    {
        number: "01",
        title: { en: "React Development", ar: "تطوير واجهات React" },
        description: {
            en: "Reusable React components and organized interfaces tailored to your project.",
            ar: "مكونات React قابلة لإعادة الاستخدام وواجهات منظمة تناسب احتياجات مشروعك.",
        },
        icon: "</>",
    },
    {
        number: "02",
        title: { en: "Figma to React", ar: "تحويل Figma إلى React" },
        description: {
            en: "Turning design concepts into responsive interfaces with attention to detail.",
            ar: "تحويل التصميمات إلى واجهات متجاوبة مع الاهتمام بالتفاصيل.",
        },
        icon: "◈",
    },
    {
        number: "03",
        title: { en: "Landing Pages", ar: "صفحات الهبوط" },
        description: {
            en: "Modern landing pages with clear layouts and consistent experiences across devices.",
            ar: "صفحات هبوط عصرية بتصميم واضح وتجربة متناسقة على مختلف الأجهزة.",
        },
        icon: "✦",
    },
    {
        number: "04",
        title: { en: "E-Commerce Interfaces", ar: "واجهات المتاجر الإلكترونية" },
        description: {
            en: "Storefronts with product listings, details, cart and wishlist interfaces.",
            ar: "واجهات متاجر تشمل عرض المنتجات وتفاصيلها والسلة والمفضلة.",
        },
        icon: "◇",
    },
    {
        number: "05",
        title: { en: "API Integration", ar: "ربط واجهات API" },
        description: {
            en: "Integrating REST APIs to display dynamic data in React applications.",
            ar: "ربط REST APIs لعرض البيانات وتحديثها داخل تطبيقات React.",
        },
        icon: "{ }",
    },
    {
        number: "06",
        title: { en: "Frontend Improvements", ar: "تحسين الواجهات" },
        description: {
            en: "Fixing interface issues, improving responsiveness and refining existing pages.",
            ar: "إصلاح مشكلات الواجهات وتحسين التجاوب وتطوير الصفحات الحالية.",
        },
        icon: "↗",
    },
];

function Services() {
    const { isArabic } = useLanguage();

    return (
        <section
            id="services"
            dir={isArabic ? "rtl" : "ltr"}
            className="relative isolate overflow-hidden bg-[#1D1915] px-5 py-24 text-[#F4EBDD] sm:px-8 lg:px-10 lg:py-28"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#D96535]/10 blur-[130px]"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#D5B895]/[0.06] blur-[120px]"
            />

            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow={isArabic ? "الخدمات" : "WHAT I DO"}
                    title={
                        isArabic
                            ? "إزاي أقدر أساعدك؟"
                            : "What I can help you build"
                    }
                    description={
                        isArabic
                            ? "خدمات تطوير واجهات الويب لإنشاء تجارب رقمية عصرية ومتجاوبة."
                            : "Frontend services focused on creating modern, responsive and user-friendly web experiences."
                    }
                    number="04"
                />

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <article
                            key={service.number}
                            className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-2xl border border-[#D5B895]/10 bg-[#171411]/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D96535]/45 hover:shadow-[0_15px_45px_rgba(217,101,53,0.10)] sm:p-7"
                        >
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D96535]/0 blur-[70px] transition-colors duration-500 group-hover:bg-[#D96535]/15"
                            />

                            <div className="relative flex items-start justify-between">
                                <span className="font-mono text-xs tracking-widest text-[#B6A99A]/60">
                                    / {service.number}
                                </span>

                                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D96535]/20 bg-[#D96535]/[0.08] font-mono text-sm text-[#D96535] transition-all duration-300 group-hover:border-[#D96535]/50 group-hover:bg-[#D96535]/15 group-hover:shadow-[0_0_25px_rgba(217,101,53,0.12)]">
                                    {service.icon}
                                </span>
                            </div>

                            <div className="relative mt-auto pt-8">
                                <h3 className="text-lg font-semibold tracking-tight text-[#F4EBDD] transition-colors duration-300 group-hover:text-[#D5B895]">
                                    {service.title[isArabic ? "ar" : "en"]}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#B6A99A]">
                                    {service.description[isArabic ? "ar" : "en"]}
                                </p>
                            </div>

                            <div className="relative mt-6 flex items-center justify-between border-t border-[#D5B895]/10 pt-4">
                                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-[#B6A99A]/60">
                                    {isArabic ? "متاحة للمشاريع" : "Available for projects"}
                                </span>

                                <a
                                    href="#contact"
                                    aria-label={`${isArabic ? "اطلبي الخدمة" : "Discuss service"}: ${service.title[isArabic ? "ar" : "en"]}`}
                                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D5B895]/15 text-sm text-[#D5B895] transition-all duration-300 hover:border-[#D96535] hover:bg-[#D96535] hover:text-[#171411]"
                                >
                                    {isArabic ? "←" : "↗"}
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-[#D5B895]/10 bg-[#171411]/60 p-5 sm:flex-row sm:items-center sm:p-6">
                    <div>
                        <h3 className="font-semibold text-[#F4EBDD]">
                            {isArabic ? "عندك فكرة لمشروع؟" : "Have a project in mind?"}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-[#B6A99A]">
                            {isArabic
                                ? "خلينا نتكلم عن فكرتك واحتياجات مشروعك."
                                : "Let's discuss your idea and project requirements."}
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D96535] px-5 py-3 text-sm font-semibold text-[#171411] transition-all duration-300 hover:bg-[#E77B4E] hover:shadow-[0_0_25px_rgba(217,101,53,0.2)]"
                    >
                        {isArabic ? "تواصلي معي" : "Contact me"}
                        <span aria-hidden="true">{isArabic ? "←" : "↗"}</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Services;
