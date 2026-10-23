
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
    const { t, language, toggleLanguage } = useLanguage();

    const links = [
        { label: t.nav.home, href: "#home" },
        { label: t.nav.work, href: "#work" },
        { label: t.nav.about, href: "#about" },
        { label: t.nav.skills, href: "#skills" },
        { label: t.nav.education, href: "#education" },
        { label: t.nav.contact, href: "#contact" },
    ];

    return (
        <header className="fixed top-0 z-50 w-full border-b border-[#D5B895]/10 bg-[#171411]/90 text-[#F4EBDD] backdrop-blur-xl">
            <nav className="mx-auto flex min-h-[72px] max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
                <a
                    href="#home"
                    className="text-xl font-bold tracking-wide text-[#D5B895]"
                >
                    AMAL<span className="text-[#D96535]">.</span>
                </a>

                <div className="hidden items-center gap-6 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-[#B6A99A] transition hover:text-[#E47746]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        aria-label={
                            language === "en"
                                ? "Switch to Arabic"
                                : "Switch to English"
                        }
                        className="rounded-full border border-[#D5B895]/30 px-3 py-2 text-sm font-semibold transition hover:border-[#D96535] hover:text-[#E47746]"
                    >
                        {t.nav.language}
                    </button>

                    <a
                        href="#contact"
                        className="hidden rounded-full bg-[#D96535] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#E47746] sm:inline-flex"
                    >
                        {t.nav.talk}
                    </a>
                </div>
            </nav>
        </header>
    );
}
