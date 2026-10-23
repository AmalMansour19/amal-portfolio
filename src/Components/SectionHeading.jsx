
import { useLanguage } from "../context/LanguageContext";

function SectionHeading({ eyebrow, title, description, number }) {
    const { isArabic } = useLanguage();

    return (
        <div
            dir={isArabic ? "rtl" : "ltr"}
            className="relative mb-12 max-w-3xl sm:mb-16"
        >
            {/* Section label */}
            <div className="mb-6 flex items-center gap-3">
                <span
                    aria-hidden="true"
                    className="h-px w-10 bg-[#D96535]"
                />

                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D96535]">
                    {eyebrow}
                </p>

                {number && (
                    <span className="text-xs tracking-widest text-[#B6A99A]/50">
                        / {number}
                    </span>
                )}
            </div>

            {/* Main heading */}
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.2] tracking-tight text-[#F4EBDD] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                {title}
                <span
                    aria-hidden="true"
                    className="text-[#D96535]"
                >
                    .
                </span>
            </h2>

            {/* Description */}
            {description && (
                <p className="mt-6 max-w-2xl text-sm leading-8 text-[#B6A99A] sm:text-base sm:leading-8">
                    {description}
                </p>
            )}

            {/* Subtle decorative line */}
            <div
                aria-hidden="true"
                className="mt-8 h-px w-full max-w-xs bg-gradient-to-r from-[#D96535]/50 via-[#D5B895]/15 to-transparent"
            />
        </div>
    );
}

export default SectionHeading;
