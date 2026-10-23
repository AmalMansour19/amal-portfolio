
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
    const { t, language, toggleLanguage } = useLanguage();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { label: t.nav.home, href: "#home" },
        { label: t.nav.work, href: "#work" },
        { label: t.nav.about, href: "#about" },
        { label: t.nav.skills, href: "#skills" },
        { label: t.nav.education, href: "#education" },
        { label: t.nav.contact, href: "#contact" },
    ];

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D5B895]/10 bg-[#171411]/95 text-[#F4EBDD] shadow-lg shadow-black/10 backdrop-blur-xl">
            <nav
                className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <a
                    href="#home"
                    onClick={closeMenu}
                    className="shrink-0 text-xl font-bold tracking-wide text-[#D5B895] sm:text-2xl"
                >
                    AMAL<span className="text-[#D96535]">.</span>
                </a>

                {/* Desktop links */}
                <div className="hidden items-center gap-5 xl:gap-7 lg:flex">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap text-sm text-[#B6A99A] transition-colors duration-200 hover:text-[#E47746]"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Actions */}
                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <button
                        type="button"
                        onClick={() => {
                            toggleLanguage();
                            closeMenu();
                        }}
                        aria-label={
                            language === "en" ? "Switch to Arabic" : "Switch to English"
                        }
                        className="rounded-full border border-[#D5B895]/30 px-3 py-2 text-xs font-semibold transition hover:border-[#D96535] hover:text-[#E47746] sm:text-sm"
                    >
                        {t.nav.language}
                    </button>

                    <a
                        href="#contact"
                        className="hidden rounded-full bg-[#D96535] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#E47746] sm:inline-flex"
                    >
                        {t.nav.talk}
                    </a>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-navigation"
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D5B895]/20 text-[#F4EBDD] transition hover:border-[#D96535] lg:hidden"
                    >
                        {menuOpen ? (
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-5 w-5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
                            </svg>
                        ) : (
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-5 w-5"
                                stroke="currentColor"
                                strokeWidth="1.8"
                            >
                                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            {menuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-[#D5B895]/10 bg-[#171411] px-4 pb-5 pt-3 lg:hidden"
                >
                    <div className="mx-auto flex max-w-7xl flex-col gap-1">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="rounded-xl px-4 py-3 text-sm text-[#B6A99A] transition hover:bg-[#D5B895]/10 hover:text-[#E47746]"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-2 rounded-xl bg-[#D96535] px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#E47746]"
                        >
                            {t.nav.talk}
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
