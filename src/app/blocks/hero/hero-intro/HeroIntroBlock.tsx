"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroIntroBlockProps {
    image: string;
    altText: string;
    subtitle: string;
    title: string;
    description: string;
    buyLink: string;
    buyText: string;
    previewLink: string;
    previewText: string;
    badges: string[];
}

const HeroIntroBlock = ({
    image,
    altText,
    subtitle,
    title,
    description,
    buyLink,
    buyText,
    previewLink,
    previewText,
    badges,
}: HeroIntroBlockProps) => {
    return (
        <section className="hero-basic">
            <div className="hero-basic__background">
                <Image
                    src={image}
                    alt={altText}
                    width={1617}
                    height={880}
                    priority
                    quality={90}
                    sizes="100vw"
                />
            </div>
            <div className="overlayer-hero" />
            <motion.div
                className="hero-basic__container"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="hero-basic__content">
                    <div>
                        <p className="hero-basic__subtitle">{subtitle}</p>
                        <h1 className="hero-basic__title">{title}</h1>
                        <div className="hero-basic__description">
                            <p>{description}</p>

                            {/* Badges */}
                            <div className="hero-intro__badges">
                                {badges.map((badge) => (
                                    <span
                                        key={badge}
                                        className="hero-intro__badge"
                                    >
                                        {badge}
                                    </span>
                                ))}
                            </div>

                            {/* Dual CTA */}
                            <div className="hero-intro__ctas">
                                <a
                                    className="btn"
                                    href={buyLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {buyText}
                                </a>
                                <a
                                    className="btn hero-intro__btn-preview"
                                    href={previewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {previewText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

HeroIntroBlock.displayName = "HeroIntroBlock";
export default HeroIntroBlock;
