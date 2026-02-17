'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomePagesListProps } from '@/app/types/common.types';
import { innerspagesListData } from '@/app/hooks/data-innerspages';
import Divider from '@/app/components/common/divider/divider';

const MotionLink = motion.create(Link);

const InnersPagesBlock = ({
    items = innerspagesListData.items,
    emptyMessage = innerspagesListData.emptyMessage,
    defaultAltText = innerspagesListData.defaultAltText,
    subtitle = innerspagesListData.subtitle,
    title = innerspagesListData.title,
    divider = innerspagesListData.divider,
}: HomePagesListProps) => {
    if (!items || items.length === 0) {
        return (
            <div className="sections sections--empty">
                <p>{emptyMessage}</p>
            </div>
        );
    }

    return (
        <section className="sections bg-coarseWool-800">
            <div className="sections__container">
                {/* Section title */}
                <div className="section-title section-title__center">
                    <p className="section-title__subtitle">{subtitle}</p>
                    <h2 className="section-title__title">{title}</h2>
                    {divider && <Divider />}
                </div>
                {/* /Section title */}

                <div className="sections__content">
                    {items.map((item, index) => (
                        <MotionLink
                            key={item.id}
                            href={item.link}
                            className="sections__item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.2 + index * 0.1,
                                duration: 0.5,
                                ease: 'easeOut',
                            }}
                        >
                            {item.tag && <span className="sections__tag-new">{item.tag}</span>}
                            <div className="sections__image">
                                <Image
                                    src={item.image}
                                    alt={item.altText || defaultAltText}
                                    width={1920}
                                    height={1080}
                                />
                            </div>
                            <h3 className="sections__title">{item.caption}</h3>
                        </MotionLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InnersPagesBlock;
