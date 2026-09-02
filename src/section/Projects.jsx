import SectionHeading from "../Components/SectionHeading";
import eventoraImage from "../assets/eventora.png";
import store from "../assets/store.png";
import dashboardImage from "../assets/dashboard.png";
import tastecraft from "../assets/tastecraft.png";
import househaven from "../assets/househaven.png";
import shop from "../assets/shop.png";

const projects = [
    {
        title: "Eventora",
        category: "Event Discovery Platform",
        description:
            "A modern event discovery platform that allows users to explore and discover events through a clean, responsive and interactive interface.",
        tech: ["React", "React Router", "Axios", "Tailwind CSS", "Context API"],
        number: "01",
        image: eventoraImage,
        live: "https://eventora-event-platform-k5om.vercel.app/",
    },

    {
        title: "VELŌRA.",
        category: "E-Commerce Store",
        description:
            "A modern and fully responsive e-commerce store built with React, featuring product discovery, product details, cart, wishlist and user authentication.",
        tech: ["React", "Tailwind CSS", "REST API", "Context API"],
        number: "02",
        image: store,
        live: "https://amalmansour19.github.io/EcommerceShop/",
    },

    {
        title: "Koda Store Admin Dashboard",
        category: "Admin Dashboard",
        description:
            "A responsive admin dashboard designed for managing store data, products and orders through a clean and intuitive interface.",
        tech: ["React", "Tailwind CSS", "Charts"],
        number: "03",
        image: dashboardImage,
        live: "https://koda-store-dashboard.vercel.app/login",
    },

    {
        title: "TasteCraft",
        category: "Web Application",
        description:
            "A modern and responsive web experience focused on clean interface design, structured content and an engaging user experience.",
        tech: ["JavaScript", "HTML5", "Tailwind CSS"],
        number: "04",
        image: tastecraft,
        live: "https://amalmansour19.github.io/TasteCraft/",
    },

    {
        title: "House Heaven",
        category: "Responsive Web Application",
        description:
            "A modern responsive web interface built with React, combining clean layouts, smooth animations and a polished user experience.",
        tech: ["React", "Bootstrap", "Framer Motion"],
        number: "05",
        image: househaven,
        live: "https://amalmansour19.github.io/project3/",
    },

    {
        title: "Store",
        category: "E-Commerce Website",
        description:
            "A responsive e-commerce interface built with HTML and CSS, focusing on clean layouts, product presentation and a user-friendly shopping experience.",
        tech: ["HTML5", "CSS3"],
        number: "06",
        image: shop,
        live: "https://amalmansour19.github.io/project2/",
    },
];

function Projects() {
    return (
        <section
            id="work"
            className="bg-[#080B12] px-6 py-28 lg:px-10 lg:py-36"
        >
            <div className="mx-auto max-w-7xl">

                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                    <SectionHeading
                        eyebrow="Selected work"
                        title="Things I've built."
                        description="A selection of projects where development, design and problem-solving come together."
                    />

                    <a
                        href="#contact"
                        className="w-fit text-sm font-medium text-[#22D3EE] transition hover:text-white"
                    >
                        View all projects →
                    </a>

                </div>

                <div className="mt-16 grid gap-6 md:grid-cols-2">

                    {projects.map((project) => (
                        <article
                            key={project.number}
                            className="group overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025]"
                        >

                            {/* Project Visual */}
                            <div className="relative h-64 overflow-hidden bg-[#0D1420]">

                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={`${project.title} project preview`}
                                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center">
                                        <span className="text-sm text-slate-600">
                                            Project Preview
                                        </span>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-[#080B12]/70 via-transparent to-transparent" />

                                <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-[#080B12]/70 px-3 py-1.5 text-xs text-[#22D3EE] backdrop-blur-md">
                                    {project.number}
                                </span>

                            </div>

                            {/* Content */}
                            <div className="p-7">

                                <p className="text-xs uppercase tracking-widest text-[#22D3EE]">
                                    {project.category}
                                </p>

                                <h3 className="mt-3 text-2xl font-semibold text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-slate-500">
                                    {project.description}
                                </p>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-white/[0.06] px-3 py-1.5 text-xs text-slate-500"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-7 inline-flex text-sm font-medium text-white transition hover:text-[#22D3EE]"
                                >
                                    View Project →
                                </a>

                            </div>

                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Projects;