"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
    target: number;
    suffix: string;
    label: string;
}

const stats: Stat[] = [
    { target: 28, suffix: "+", label: "Pages" },
    { target: 50, suffix: "+", label: "Components" },
    { target: 4, suffix: "", label: "Menu Layouts" },
    { target: 2, suffix: "", label: "Home Variants" },
];

const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        const duration = 1500;
        const steps = 40;
        const increment = target / steps;
        const stepTime = duration / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            // Ease-out: fast start, slow finish
            const progress = 1 - Math.pow(1 - step / steps, 3);
            current = Math.round(progress * target);
            setCount(current);

            if (step >= steps) {
                setCount(target);
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref} className="stats-block__value">
            {count}
            {suffix}
        </span>
    );
};

const StatsBlock = () => {
    return (
        <section className="stats-block bg-coarseWool-900">
            <div className="stats-block__container">
                <motion.div
                    className="pb-0 section-title section-title__center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="mb-0 text-calico-500 text-center">
                        Built for performance. Designed for conversion.
                    </h3>
                </motion.div>

                <div className="stats-block__grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            className="stats-block__item"
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.15 + index * 0.1,
                                duration: 0.4,
                                ease: "easeOut",
                            }}
                        >
                            <CountUp
                                target={stat.target}
                                suffix={stat.suffix}
                            />
                            <span className="stats-block__label">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsBlock;
