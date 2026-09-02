import { useState } from "react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.04] bg-[#080B12]/80 backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={handleLinkClick}
                    className="flex items-center gap-1 text-lg font-bold tracking-tight text-white"
                >
                    <span className="text-[#22D3EE]">AMAL</span>
                    <span>Mansour.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <a
                    href="#contact"
                    className="group hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/10 md:flex"
                >
                    Let's Talk

                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                        ↗
                    </span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-[#22D3EE]/40 hover:bg-[#22D3EE]/10 md:hidden"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    <span className="text-lg">
                        {isOpen ? "✕" : "☰"}
                    </span>
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`overflow-hidden border-t border-white/[0.04] bg-[#080B12]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${isOpen
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
            >
                <div className="mx-auto max-w-7xl px-6 py-5">

                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="rounded-xl px-4 py-3 text-sm text-slate-400 transition-colors duration-300 hover:bg-white/[0.04] hover:text-white"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile CTA */}
                    <a
                        href="#contact"
                        onClick={handleLinkClick}
                        className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#22D3EE]/20 bg-[#22D3EE]/10 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-[#22D3EE]/20"
                    >
                        Let's Talk
                        <span>↗</span>
                    </a>

                </div>
            </div>
        </header>
    );
}

export default Navbar;