
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "../components/SectionHeading";

function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState("idle");

    const handleSubmit = async (e) => {
        e.preventDefault();
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

        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        }
    };

    return (
        <section
            id="contact"
            className="bg-[#080B12] px-6 py-28 lg:px-10 lg:py-36"
        >
            <div className="mx-auto max-w-7xl">

                <SectionHeading
                    eyebrow="Contact"
                    title="Let's build something together."
                    description="Have a project in mind, need a React developer, or want to improve an existing website? Tell me a little about it."
                />

                <div className="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

                    {/* Contact Info */}
                    <div className="space-y-4">

                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
                            <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                                Email
                            </p>

                            <a
                                href="mailto:amalmansourdev@gmail.com"
                                className="mt-2 block text-sm text-white transition hover:text-[#22D3EE]"
                            >
                                amalmansourdev@gmail.com
                            </a>
                        </div>

                        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6">
                            <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                                Let's connect
                            </p>

                            <div className="mt-3 flex gap-5">

                                <a
                                    href="https://github.com/AmalMansour19"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-slate-400 transition hover:text-[#22D3EE]"
                                >
                                    GitHub
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/amalmansour20/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-slate-400 transition hover:text-[#22D3EE]"
                                >
                                    LinkedIn
                                </a>

                            </div>
                        </div>

                        <div className="rounded-2xl border border-[#22D3EE]/10 bg-[#22D3EE]/[0.03] p-6">
                            <p className="text-xs uppercase tracking-[0.15em] text-[#22D3EE]">
                                Availability
                            </p>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Available for freelance projects and
                                frontend development opportunities.
                            </p>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <div className="grid gap-5 sm:grid-cols-2">

                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-[#22D3EE]/40"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                required
                                className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-[#22D3EE]/40"
                            />

                        </div>

                        <select
                            name="service"
                            defaultValue=""
                            required
                            className="w-full appearance-none rounded-xl border border-white/[0.07] bg-[#0B111B] px-5 py-4 text-sm text-slate-400 outline-none transition focus:border-[#22D3EE]/40"
                        >
                            <option value="" disabled>
                                What do you need help with?
                            </option>

                            <option value="React Development">
                                React Development
                            </option>

                            <option value="Figma to React">
                                Figma to React
                            </option>

                            <option value="Landing Page">
                                Landing Page
                            </option>

                            <option value="E-Commerce Website">
                                E-Commerce Website
                            </option>

                            <option value="API Integration">
                                API Integration
                            </option>

                            <option value="React Improvements / Bug Fixes">
                                React Improvements / Bug Fixes
                            </option>

                            <option value="Responsive Design">
                                Responsive Design
                            </option>

                            <option value="Other">
                                Something else
                            </option>
                        </select>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Project subject"
                            required
                            className="w-full rounded-xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-[#22D3EE]/40"
                        />

                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Tell me about your project..."
                            required
                            className="w-full resize-none rounded-xl border border-white/[0.07] bg-white/[0.025] px-5 py-4 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-[#22D3EE]/40"
                        />

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#22D3EE] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2563EB]/20 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {status === "sending"
                                ? "Sending..."
                                : status === "success"
                                    ? "Message Sent ✓"
                                    : "Send Message"}

                            {status === "idle" && (
                                <span className="transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            )}
                        </button>

                        {status === "success" && (
                            <p className="text-sm text-[#22D3EE]">
                                Thanks! Your message has been sent successfully.
                            </p>
                        )}

                        {status === "error" && (
                            <p className="text-sm text-red-400">
                                Something went wrong. Please try again.
                            </p>
                        )}

                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;

