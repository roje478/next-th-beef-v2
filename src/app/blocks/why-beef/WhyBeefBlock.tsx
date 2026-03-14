"use client";
import { motion } from "framer-motion";

const features = [
    {
        category: "Architecture",
        items: [
            "Next.js 14 App Router",
            "Server Components by default",
            "TypeScript strict mode",
            "Automatic code splitting",
        ],
    },
    {
        category: "Design & UX",
        items: [
            "Framer Motion + GSAP animations",
            "Fully responsive on all devices",
            "4 menu layout variants",
            "2 homepage designs",
        ],
    },
    {
        category: "Content",
        items: [
            "Full blog with categories, tags & search",
            "28+ ready-to-use pages",
            "50+ reusable components",
            "SEO optimized with meta tags",
        ],
    },
    {
        category: "Developer Experience",
        items: [
            "Clean, well-structured codebase",
            "Tailwind CSS utility-first styling",
            "Path aliases for clean imports",
            "Comprehensive documentation",
        ],
    },
];

const WhyBeefBlock = () => {
    return (
        <section className="why-beef">
            <div className="why-beef__container">
                <motion.div
                    className="section-title section-title__center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-title__subtitle">Why choose Beef</p>
                    <h2 className="section-title__title">
                        everything you need in a restaurant template
                    </h2>
                </motion.div>

                <div className="why-beef__grid">
                    {features.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            className="why-beef__card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.1 + groupIndex * 0.1,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <h3 className="why-beef__card-title">
                                {group.category}
                            </h3>
                            <ul className="why-beef__list">
                                {group.items.map((item) => (
                                    <li key={item} className="why-beef__item">
                                        <svg
                                            className="why-beef__check"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyBeefBlock;
