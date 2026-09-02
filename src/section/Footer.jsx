function Footer() {
    return (
        <footer className="border-t border-white/[0.06] bg-[#080B12] px-6 py-8 lg:px-10">

            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">

                <a
                    href="#home"
                    className="text-lg font-bold text-white"
                >
                    <span className="text-[#22D3EE]">A</span>
                    MAL.
                </a>

                <p className="text-xs text-slate-600">
                    © {new Date().getFullYear()} Amal Mansour. All rights reserved.
                </p>

                <a
                    href="#home"
                    className="text-xs text-slate-500 transition hover:text-[#22D3EE]"
                >
                    Back to top ↑
                </a>

            </div>

        </footer>
    );
}

export default Footer;