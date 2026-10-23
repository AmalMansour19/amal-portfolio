
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "../Components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle");
    const { isArabic } = useLanguage();

    const text = isArabic
        ? {
              eyebrow: "تواصل معي",
              title: "خلينا نبني حاجة مميزة.",
              description:
                  "عندك مشروع؟ محتاجة مطورة واجهات React؟ أو عايز تطور موقعك الحالي؟ احكيلي عن فكرتك.",
              email: "البريد الإلكتروني",
              connect: "تواصل معي على",
              availability: "متاحة للمشاريع",
              availabilityText:
                  "متاحة لمشاريع الفريلانس وفرص تطوير الواجهات الأمامية.",
              name: "اسمك",
              emailPlaceholder: "البريد الإلكتروني",
              servicePlaceholder: "محتاجة مساعدة في إيه؟",
              subject: "موضوع المشروع",
              message: "احكيلي عن مشروعك...",
              send: "إرسال الرسالة",
              sending: "جاري الإرسال...",
              sent: "تم إرسال الرسالة ✓",
              success: "شكرًا لك! تم إرسال رسالتك بنجاح.",
              error: "حصلت مشكلة أثناء الإرسال. حاولي مرة تانية.",
              services: [
                  ["React Development", "تطوير واجهات React"],
                  ["Figma to React", "تحويل تصميم Figma إلى React"],
                  ["Landing Page", "صفحة هبوط"],
                  ["E-Commerce Website", "متجر إلكتروني"],
                  ["API Integration", "ربط واجهات API"],
                  ["React Improvements / Bug Fixes", "تحسينات وإصلاح أخطاء"],
                  ["Responsive Design", "تصميم متجاوب"],
                  ["Other", "خدمة أخرى"],
              ],
          }
        : {
              eyebrow: "GET IN TOUCH",
              title: "Let's build something together.",
              description:
                  "Have a project in mind, need a React developer, or want to improve an existing website? Tell me about it.",
              email: "EMAIL",
              connect: "LET'S CONNECT",
              availability: "AVAILABILITY",
              availabilityText:
                  "Available for freelance projects and frontend development opportunities.",
              name: "Your name",
              emailPlaceholder: "Email address",
              servicePlaceholder: "What do you need help with?",
              subject: "Project subject",
              message: "Tell me about your project...",
              send: "Send Message",
              sending: "Sending...",
              sent: "Message Sent ✓",
              success: "Thanks! Your message has been sent successfully.",
              error: "Something went wrong. Please try again.",
              services: [
                  ["React Development", "React Development"],
                  ["Figma to React", "Figma to React"],
                  ["Landing Page", "Landing Page"],
                  ["E-Commerce Website", "E-Commerce Website"],
                  ["API Integration", "API Integration"],
                  ["React Improvements / Bug Fixes", "React Improvements / Bug Fixes"],
                  ["Responsive Design", "Responsive Design"],
                  ["Other", "Something else"],
              ],
          };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("EmailJS config:", {
            service: Boolean(import.meta.env.VITE_EMAILJS_SERVICE_ID),
            template: Boolean(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
            publicKey: Boolean(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
            form: Boolean(formRef.current),
        });
        setStatus("sending");

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setStatus("success");
            formRef.current.reset();
        }  catch (error) {
            console.error("EmailJS Error Details:", {
                status: error?.status,
                text: error?.text,
                message: error?.message,
            });

            setStatus("error");
        }
    };

    const inputClass =
        "w-full rounded-xl border border-[#D5B895]/15 bg-[#171411]/80 px-4 py-3.5 text-sm text-[#F4EBDD] outline-none transition placeholder:text-[#B6A99A]/50 focus:border-[#D96535]/60 focus:ring-2 focus:ring-[#D96535]/10";

    return (
        <section
            id="contact"
            dir={isArabic ? "rtl" : "ltr"}
            className="relative isolate overflow-hidden bg-[#171411] px-5 py-24 text-[#F4EBDD] sm:px-8 lg:px-10 lg:py-32"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-96 w-96 rounded-full bg-[#D96535]/10 blur-[130px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#D5B895]/[0.06] blur-[130px]"
            />

            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow={text.eyebrow}
                    title={text.title}
                    description={text.description}
                    number="06"
                />

                <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
                    {/* Contact information */}
                    <div className="flex flex-col gap-4">
                        <div className="group rounded-2xl border border-[#D5B895]/10 bg-[#211D18]/80 p-6 transition-all duration-300 hover:border-[#D96535]/35 hover:shadow-[0_10px_35px_rgba(217,101,53,0.06)]">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D96535]">
                                {text.email}
                            </p>

                            <a
                                href="mailto:amalmansourdev@gmail.com"
                                className="mt-3 block break-all text-sm text-[#F4EBDD] transition-colors hover:text-[#D5B895]"
                            >
                                amalmansourdev@gmail.com
                            </a>
                        </div>

                        <div className="rounded-2xl border border-[#D5B895]/10 bg-[#211D18]/80 p-6 transition-all duration-300 hover:border-[#D96535]/35">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D96535]">
                                {text.connect}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-3">
                                <a
                                    href="https://github.com/AmalMansour19"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-[#D5B895]/15 px-4 py-2 text-xs text-[#D5B895] transition-all hover:border-[#D96535]/50 hover:bg-[#D96535]/[0.08] hover:text-[#F4EBDD]"
                                >
                                    GitHub ↗
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/amalmansour20/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-full border border-[#D5B895]/15 px-4 py-2 text-xs text-[#D5B895] transition-all hover:border-[#D96535]/50 hover:bg-[#D96535]/[0.08] hover:text-[#F4EBDD]"
                                >
                                    LinkedIn ↗
                                </a>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl border border-[#D96535]/20 bg-[#D96535]/[0.05] p-6">
                            <div
                                aria-hidden="true"
                                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D96535]/10 blur-[50px]"
                            />

                            <div className="relative flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D96535]/50" />
                                    <span className="relative inline-flex h-3 w-3 rounded-full bg-[#D96535]" />
                                </span>

                                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#D5B895]">
                                    {text.availability}
                                </p>
                            </div>

                            <p className="relative mt-4 text-sm leading-7 text-[#B6A99A]">
                                {text.availabilityText}
                            </p>
                        </div>
                    </div>

                    {/* Contact form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="rounded-2xl border border-[#D5B895]/10 bg-[#211D18]/70 p-5 sm:p-7 lg:p-8"
                    >
                        <div className="mb-7">
                            <h3 className="text-xl font-semibold text-[#F4EBDD]">
                                {isArabic ? "احكيلي عن فكرتك" : "Tell me about your idea"}
                            </h3>

                            <p className="mt-2 text-xs leading-6 text-[#B6A99A]">
                                {isArabic
                                    ? "املأ البيانات دي وهرد عليك في أقرب وقت."
                                    : "Fill in the details below and I'll get back to you."}
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                name="name"
                                placeholder={text.name}
                                aria-label={text.name}
                                autoComplete="name"
                                required
                                className={inputClass}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder={text.emailPlaceholder}
                                aria-label={text.emailPlaceholder}
                                autoComplete="email"
                                required
                                className={inputClass}
                            />
                        </div>

                        <div className="mt-4">
                            <select
                                name="service"
                                defaultValue=""
                                aria-label={text.servicePlaceholder}
                                required
                                className={`${inputClass} appearance-none ${
                                    isArabic ? "text-right" : "text-left"
                                }`}
                            >
                                <option value="" disabled className="bg-[#211D18]">
                                    {text.servicePlaceholder}
                                </option>

                                {text.services.map(([value, label]) => (
                                    <option
                                        key={value}
                                        value={value}
                                        className="bg-[#211D18]"
                                    >
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mt-4">
                            <input
                                type="text"
                                name="subject"
                                placeholder={text.subject}
                                aria-label={text.subject}
                                required
                                className={inputClass}
                            />
                        </div>

                        <div className="mt-4">
                            <textarea
                                name="message"
                                rows={5}
                                placeholder={text.message}
                                aria-label={text.message}
                                required
                                className={`${inputClass} resize-y`}
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="group mt-5 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#D96535] px-6 py-4 text-sm font-semibold text-[#171411] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E77B4E] hover:shadow-[0_8px_30px_rgba(217,101,53,0.18)] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                        >
                            {status === "sending"
                                ? text.sending
                                : status === "success"
                                  ? text.sent
                                  : text.send}

                            {status === "idle" && (
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    {isArabic ? "←" : "↗"}
                                </span>
                            )}
                        </button>

                        {status === "success" && (
                            <p role="status" className="mt-4 text-sm text-[#D5B895]">
                                {text.success}
                            </p>
                        )}

                        {status === "error" && (
                            <p role="alert" className="mt-4 text-sm text-red-400">
                                {text.error}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
