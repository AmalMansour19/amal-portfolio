
import { useLanguage } from "../context/LanguageContext";

function Footer() {
    const { isArabic } = useLanguage();
    const year = new Date().getFullYear();

    return (
        <footer
            dir={isArabic ? "rtl" : "ltr"}
            className="relative isolate overflow-hidden border-t border-[#D5B895]/10 bg-[#171411] px-5 py-8 text-[#F4EBDD] sm:px-8 lg:px-10"
        >
            {/* Subtle glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-40 w-72 -translate-x-1/2 rounded-full bg-[#D96535]/[0.07] blur-[80px]"
            />

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
                {/* Brand */}
                <a
                    href="#home"
                    aria-label={isArabic ? "العودة إلى الرئيسية" : "Back to home"}
                    className="group text-xl font-bold tracking-tight text-[#F4EBDD] transition-colors hover:text-[#D5B895]"
                >
                    <span className="text-[#D96535] transition-colors group-hover:text-[#E77B4E]">
                        A
                    </span>
                    MAL<span className="text-[#D96535]">.</span>
                </a>

                {/* Copyright */}
                <p className="text-center text-xs leading-6 text-[#B6A99A]/70">
                    © {year} Amal Mansour.
                    {" "}
                    {isArabic
                        ? "جميع الحقوق محفوظة."
                        : "All rights reserved."}
                </p>

                {/* Back to top */}
                <a
                    href="#home"
                    className="group inline-flex items-center gap-2 rounded-full border border-[#D5B895]/15 px-4 py-2.5 text-xs text-[#D5B895] transition-all duration-300 hover:border-[#D96535]/50 hover:bg-[#D96535]/[0.06] hover:text-[#F4EBDD]"
                >
                    {isArabic ? "العودة للأعلى" : "Back to top"}

                    <span
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-y-0.5"
                    >
                        ↑
                    </span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
