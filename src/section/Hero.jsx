
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Hero.css";

const roles = {
    en: [
        "React Frontend Developer",
        "Web Application Developer",
        "Frontend Developer with Backend Skills",
    ],
    ar: [
        "مطوّرة واجهات باستخدام React",
        "مطوّرة تطبيقات ويب",
        "مطوّرة واجهات مع معرفة بالـ Backend",
    ],
};

function Hero() {
    const { language, isArabic, t } = useLanguage();
    const hero = t.hero;

    const currentRoles = useMemo(
        () => roles[language] ?? roles.en,
        [language]
    );

    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        setRoleIndex(0);
        setDisplayText("");
        setIsDeleting(false);
    }, [language]);

    useEffect(() => {
        const currentRole = currentRoles[roleIndex] ?? currentRoles[0];

        const delay = isDeleting
            ? 35
            : displayText === currentRole
                ? 1800
                : 75;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentRole.length) {
                    setDisplayText(
                        currentRole.slice(0, displayText.length + 1)
                    );
                } else {
                    setIsDeleting(true);
                }
            } else if (displayText.length > 0) {
                setDisplayText(
                    currentRole.slice(0, displayText.length - 1)
                );
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % currentRoles.length);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, currentRoles]);

    return (
        <section
            id="home"
            dir={isArabic ? "rtl" : "ltr"}
            className="hero-section relative isolate flex items-center overflow-hidden bg-[#171411] px-5 pb-12 pt-28 text-[#F4EBDD] sm:px-8 sm:pb-16 sm:pt-32 lg:min-h-[calc(100svh-72px)] lg:px-12 lg:py-8"
        >
            {/* Animated background */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
                aria-hidden="true"
            >
                <div className="hero-glow hero-glow-one absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#A66F4E]/15 blur-[120px]" />

                <div className="hero-glow hero-glow-two absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#D96535]/10 blur-[130px]" />

                <div className="hero-grid absolute inset-0 opacity-[0.12]" />

                <div className="hero-orbit absolute right-[8%] top-[12%] h-56 w-56 rounded-full border border-[#D5B895]/10 sm:h-72 sm:w-72" />

                <div className="hero-orbit hero-orbit-delayed absolute right-[12%] top-[17%] h-44 w-44 rounded-full border border-[#D96535]/10 sm:h-60 sm:w-60" />
            </div>

            <div className="mx-auto grid w-full max-w-7xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 xl:gap-20">

                {/* Text — first on mobile */}
                <div className="hero-content relative z-10 order-1 max-w-2xl lg:order-1">
                    <p className="hero-reveal hero-delay-1 mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#D5B895] sm:mb-5 sm:text-sm">
                        <span className="h-px w-8 shrink-0 bg-[#D96535]" />
                        {hero.eyebrow}
                    </p>

                    <h1 className="hero-reveal hero-delay-2 text-[clamp(2.5rem,8vw,4rem)] font-semibold leading-[1.15] tracking-[-0.035em] sm:text-6xl xl:text-[76px]">
                        {hero.titleStart}
                        <br />

                        <span className="hero-highlight font-serif font-normal italic text-[#D5B895]">
                            {hero.titleHighlight}
                        </span>
                        <br />

                        {hero.titleEnd}
                        <span className="text-[#D96535]">.</span>
                    </h1>

                    {/* Typing animation */}
                    <div
                        className="hero-reveal hero-delay-3 mt-5 flex min-h-8 items-center gap-2 text-sm font-medium text-[#E2C8A8] sm:mt-7 sm:text-base"
                        aria-live="polite"
                    >
                        <span className="relative flex h-2 w-2 shrink-0">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D96535] opacity-50" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D96535]" />
                        </span>

                        <span className="break-words">
                            {displayText || currentRoles[roleIndex]}
                        </span>

                        <span
                            className="typing-cursor inline-block h-5 w-px shrink-0 bg-[#D96535]"
                            aria-hidden="true"
                        />
                    </div>

                    <p className="hero-reveal hero-delay-4 mt-4 max-w-lg text-sm leading-7 text-[#B6A99A] sm:mt-5 sm:text-base sm:leading-8">
                        {hero.description}
                    </p>

                    {/* CTA buttons */}
                    <div className="hero-reveal hero-delay-5 mt-6 flex flex-wrap gap-3 sm:mt-8">
                        <a
                            href="#work"
                            className="hero-primary-btn group inline-flex items-center gap-3 rounded-lg bg-[#D96535] px-5 py-3 text-sm font-semibold text-white sm:gap-4 sm:px-6 sm:py-3.5"
                        >
                            {hero.primary}
                            <span
                                className="hero-arrow text-lg transition-transform duration-300"
                                aria-hidden="true"
                            >
                                ↗
                            </span>
                        </a>

                        <a
                            href="#contact"
                            className="hero-secondary-btn group inline-flex items-center gap-3 rounded-lg border border-[#D5B895]/25 px-5 py-3 text-sm font-semibold text-[#F4EBDD] sm:px-6 sm:py-3.5"
                        >
                            {hero.secondary}
                            <span
                                className="transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            >
                                {isArabic ? "←" : "→"}
                            </span>
                        </a>
                    </div>

                    {/* Professional development */}
                    <div className="hero-reveal hero-delay-6 mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-5 sm:mt-9">
                        <span className="text-xs uppercase tracking-[0.12em] text-[#8F8172]">
                            {isArabic
                                ? "التطوير المهني"
                                : "Professional Development"}
                        </span>

                        {["ITI", "DEPI"].map((name) => (
                            <span
                                key={name}
                                className="flex items-center gap-2 text-sm text-[#D5B895]"
                            >
                                <span className="h-1 w-1 rounded-full bg-[#D96535]" />
                                {name}
                            </span>
                        ))}
                    </div>

                    {/* Social links */}
                    <div className="hero-reveal hero-delay-6 mt-5 flex items-center gap-5">
                        <a
                            href="https://github.com/AmalMansour19"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link text-sm text-[#B6A99A]"
                        >
                            GitHub <span aria-hidden="true">↗</span>
                        </a>

                        <span className="h-4 w-px bg-white/15" />

                        <a
                            href="https://www.linkedin.com/in/amalmansour20/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link text-sm text-[#B6A99A]"
                        >
                            LinkedIn <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>

                {/* Portrait — after text on mobile */}
                <div className="hero-portrait-wrap relative order-2 mx-auto w-full max-w-[280px] sm:max-w-[320px] lg:order-2 lg:max-w-[400px] xl:max-w-[430px]">
                    <div
                        className="hero-ring pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-tr-[2rem] border-r border-t border-[#D96535]/50 sm:-right-6 sm:-top-6 sm:h-36 sm:w-36"
                        aria-hidden="true"
                    />

                    <div
                        className="hero-ring hero-ring-bottom pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-bl-[2rem] border-b border-l border-[#D5B895]/40 sm:-bottom-6 sm:-left-6 sm:h-36 sm:w-36"
                        aria-hidden="true"
                    />

                    <div className="hero-photo relative overflow-hidden rounded-[1.5rem] border border-[#D5B895]/20 bg-[#29221C]">
                        <img
                            src="/aml.png"
                            alt={
                                isArabic
                                    ? "أمل منصور - مطوّرة واجهات أمامية"
                                    : "Amal Mansour — React Frontend Developer"
                            }
                            fetchPriority="high"
                            className="block aspect-[4/5] w-full object-cover object-center"
                        />

                        <div
                            className="hero-photo-shine pointer-events-none absolute inset-0"
                            aria-hidden="true"
                        />

                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#171411]/45 to-transparent" />
                    </div>

                    {/* Photo caption */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#D5B895]/20 pb-4 sm:mt-5">
                        <div>
                            <p className="text-sm font-medium tracking-wide text-[#E7D7C4]">
                                Amal Mansour
                            </p>

                            <p className="mt-1 text-xs text-[#A99A89]">
                                {isArabic
                                    ? "تطوير الواجهات الأمامية"
                                    : "Frontend Development"}
                            </p>
                        </div>

                        <span className="hero-availability flex items-center gap-2 rounded-full border border-[#D5B895]/15 bg-[#D5B895]/[0.06] px-3 py-2 text-[11px] text-[#D5B895]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#D96535]" />
                            {hero.availability}
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#work"
                className="hero-scroll-indicator absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8F8172] lg:flex"
                aria-label={hero.scroll}
            >
                <span>{hero.scroll}</span>
                <span className="hero-scroll-line h-7 w-px bg-gradient-to-b from-[#D96535] to-transparent" />
            </a>
        </section>
    );
}

export default Hero;
