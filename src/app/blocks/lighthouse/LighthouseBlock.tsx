"use client";
import { motion } from "framer-motion";

const scores = [
    { label: "Performance", value: 95, color: "#0cce6b" },
    { label: "Accessibility", value: 92, color: "#0cce6b" },
    { label: "Best Practices", value: 95, color: "#0cce6b" },
    { label: "SEO", value: 100, color: "#0cce6b" },
];

const LighthouseBlock = () => {
    return (
        <section className="lighthouse">
            <div className="lighthouse__container">
                <motion.div
                    className="section-title section-title__center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-title__subtitle">Performance</p>
                    <h2 className="section-title__title">
                        lighthouse scores you can trust
                    </h2>
                </motion.div>

                <div className="lighthouse__grid">
                    {scores.map((score, index) => (
                        <motion.div
                            key={score.label}
                            className="lighthouse__item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.15 + index * 0.1,
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                        >
                            <div className="lighthouse__circle">
                                <svg
                                    viewBox="0 0 120 120"
                                    className="lighthouse__svg"
                                >
                                    {/* Background circle */}
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="54"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                        className="text-coarseWool-600"
                                    />
                                    {/* Score arc */}
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="54"
                                        fill="none"
                                        stroke={score.color}
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeDasharray={`${(score.value / 100) * 339.292} 339.292`}
                                        transform="rotate(-90 60 60)"
                                    />
                                </svg>
                                <span className="lighthouse__value">
                                    {score.value}
                                </span>
                            </div>
                            <span className="lighthouse__label">
                                {score.label}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <motion.p
                    className="lighthouse__note"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    Tested with Google Lighthouse on production build
                </motion.p>
            </div>
        </section>
    );
};

export default LighthouseBlock;
