"use client";
import { motion } from "framer-motion";

const techItems = [
    "Next.js 14",
    "React 18",
    "TypeScript 5",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
];

const TechStackBlock = () => {
    return (
        <section className="tech-strip">
            <motion.div
                className="tech-strip__container"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="tech-strip__label">Built with</span>
                <div className="tech-strip__divider" />
                <ul className="tech-strip__list">
                    {techItems.map((item) => (
                        <li key={item} className="tech-strip__item">
                            {item}
                        </li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
};

export default TechStackBlock;
