"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    pagesShowcaseCategories,
    pagesShowcaseData,
    type PageCategory,
} from "@/app/hooks/data-pages-showcase";

const PagesShowcase = () => {
    const [active, setActive] = useState<PageCategory>("All");

    const filtered =
        active === "All"
            ? pagesShowcaseData
            : pagesShowcaseData.filter((p) => p.category === active);

    return (
        <section className="pages-showcase">
            {/* Tabs */}
            <div className="pages-showcase__tabs">
                {pagesShowcaseCategories.map((cat) => (
                    <button
                        key={cat}
                        className={`pages-showcase__tab ${active === cat ? "pages-showcase__tab--active" : ""}`}
                        onClick={() => setActive(cat)}
                        type="button"
                    >
                        {cat}
                        {cat === "All" && (
                            <span className="pages-showcase__tab-count">
                                {pagesShowcaseData.length}
                            </span>
                        )}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="pages-showcase__container">
                <motion.div className="pages-showcase__grid" layout>
                    <AnimatePresence mode="popLayout">
                        {filtered.map((page) => (
                            <motion.div
                                key={page.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="pages-showcase__item"
                            >
                                <Link href={page.link}>
                                    {page.tag && (
                                        <span className="pages-showcase__tag">
                                            {page.tag}
                                        </span>
                                    )}
                                    <div className="pages-showcase__image">
                                        <Image
                                            src={page.image}
                                            alt={page.altText}
                                            width={1920}
                                            height={1080}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                        />
                                    </div>
                                    <h3 className="pages-showcase__caption">
                                        {page.caption}
                                    </h3>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default PagesShowcase;
