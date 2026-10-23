
import SectionHeading from "../Components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

function Education() {
    const { isArabic } = useLanguage();

    return (
        <section
            id="education"
            dir={isArabic ? "rtl" : "ltr"}
            className="relative isolate overflow-hidden bg-[#1D1915] px-5 py-24 text-[#F4EBDD] sm:px-8 lg:px-10 lg:py-28"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#D96535]/10 blur-[130px]"
            />

            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow={isArabic ? "رحلتي الأكاديمية" : "ACADEMIC BACKGROUND"}
                    title={
                        isArabic
                            ? "التعليم والخلفية الأكاديمية"
                            : "Education & Background"
                    }
                    description={
                        isArabic
                            ? "رحلتي في الهندسة وبناء أساس قوي في التفكير المنطقي وحل المشكلات."
                            : "My engineering journey and the foundation I'm building in analytical thinking and problem-solving."
                    }
                    number="05"
                />

                <div className="mt-12 max-w-4xl">
                    <article className="group relative overflow-hidden rounded-2xl border border-[#D5B895]/15 bg-[#171411]/80 p-6 transition-all duration-300 hover:border-[#D96535]/40 hover:shadow-[0_15px_45px_rgba(217,101,53,0.08)] sm:p-8 md:p-10">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D96535]/0 blur-[80px] transition-colors duration-500 group-hover:bg-[#D96535]/10"
                        />

                        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D96535]/20 bg-[#D96535]/[0.08] text-2xl text-[#D96535]">
                                <span aria-hidden="true">✦</span>
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="rounded-full border border-[#D96535]/25 bg-[#D96535]/[0.07] px-3 py-1 text-[10px] font-medium text-[#D5B895]">
                                        {isArabic ? "قيد الدراسة" : "IN PROGRESS"}
                                    </span>

                                    <span className="text-xs text-[#B6A99A]">
                                        {isArabic ? "السنة الرابعة" : "Fourth Year"}
                                    </span>
                                </div>

                                <h3 className="mt-4 text-xl font-semibold leading-relaxed text-[#F4EBDD] sm:text-2xl">
                                    {isArabic
                                        ? "كلية الهندسة — جامعة الأزهر"
                                        : "Faculty of Engineering — Al-Azhar University"}
                                </h3>

                                <p className="mt-2 text-sm font-medium leading-7 text-[#D96535]">
                                    {isArabic
                                        ? "هندسة النظم والحاسبات"
                                        : "Systems & Computer Engineering"}
                                </p>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#B6A99A]">
                                    {isArabic
                                        ? "أدرس هندسة النظم والحاسبات، وبالتوازي أطور مهاراتي العملية في تطوير الويب وبناء تطبيقات تفاعلية باستخدام React وتقنيات الويب الحديثة."
                                        : "Studying Systems & Computer Engineering while developing practical web development skills and building interactive applications with React and modern web technologies."}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {(isArabic
                                        ? ["هندسة البرمجيات", "حل المشكلات", "تطوير الويب"]
                                        : ["Engineering", "Problem Solving", "Web Development"]
                                    ).map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-lg border border-[#D5B895]/10 px-3 py-2 text-xs text-[#D5B895]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-8 h-px bg-gradient-to-l from-[#D96535]/40 via-[#D5B895]/10 to-transparent" />
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Education;
