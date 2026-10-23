
import { useState } from "react";
import SectionHeading from "../Components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const certificates = [
    {
        title: "Web Development using React",
        issuer: "Information Technology Institute (ITI)",
        date: "July 2026",
        image: "/iti.jpeg",
    },
    {
        title: "UI UX Design",
        issuer: "National Telecommunication Institute (NTI)",
        date: "July 2025",
        image: "/UIUX.jpeg",
    },
    {
        title: "Backend Development",
        issuer: "SEF Academy",
        date: "April 2026",
        image: "/BACKEND.jpeg",
    },
    {
        title: "Frontend Development",
        issuer: "SEF Academy",
        date: "July 2025",
        image: "/react.jpeg",
    },
];
export default function Certifications() {
    const { isArabic } = useLanguage();
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    return (
        <section
            id="certifications"
            className="bg-[#171411] px-5 py-20 text-[#F4EBDD] md:px-10"
        >
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    title={isArabic ? "الشهادات والتراخيص" : "Certifications"}
                    subtitle={
                        isArabic
                            ? "رحلتي في التعلم والتطوير المستمر"
                            : "My journey of continuous learning and growth"
                    }
                />

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((certificate) => (
                        <article
                            key={certificate.title}
                            className="group overflow-hidden rounded-2xl border border-[#D5B895]/20 bg-[#211C17] transition duration-300 hover:-translate-y-1 hover:border-[#D96535]/70"
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedCertificate(certificate)}
                                className="block w-full cursor-zoom-in bg-[#F4EBDD] p-3"
                                aria-label={`View ${certificate.title}`}
                            >
                                <img
                                    src={certificate.image}
                                    alt={certificate.title}
                                    loading="lazy"
                                    className="h-48 w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                                    onError={(event) => {
                                        event.currentTarget.style.visibility = "hidden";
                                    }}
                                />
                            </button>

                            <div className="p-5">
                                <p className="text-xs font-semibold uppercase tracking-wider text-[#D96535]">
                                    {certificate.issuer}
                                </p>

                                <h3 className="mt-3 text-lg font-semibold">
                                    {certificate.title}
                                </h3>

                                <p className="mt-2 text-sm text-[#B6A99A]">
                                    {certificate.date}
                                </p>

                                <a
                                    href={certificate.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#D5B895] hover:text-[#D96535]"
                                >
                                    {isArabic ? "عرض الشهادة على LinkedIn" : "View Certificate"}
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {selectedCertificate && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div
                        className="w-full max-w-4xl rounded-2xl bg-[#211C17] p-4"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-4 flex items-center justify-between gap-4">
                            <h3 className="font-semibold">
                                {selectedCertificate.title}
                            </h3>

                            <button
                                type="button"
                                onClick={() => setSelectedCertificate(null)}
                                className="rounded-lg px-3 py-2 text-xl text-[#F4EBDD] hover:bg-white/10"
                                aria-label="Close certificate"
                            >
                                ×
                            </button>
                        </div>

                        <img
                            src={selectedCertificate.image}
                            alt={selectedCertificate.title}
                            className="mx-auto max-h-[75vh] w-full object-contain"
                        />

                        <a
                            href={selectedCertificate.link}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-block text-sm text-[#D5B895] hover:text-[#D96535]"
                        >
                            {isArabic ? "فتح الشهادة على LinkedIn ↗" : "Open on LinkedIn ↗"}
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}
