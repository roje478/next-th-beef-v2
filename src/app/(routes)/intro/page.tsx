import { HeroBasicBlock } from '@/app/blocks/hero';
import { heroBasicIntroData } from '@/app/hooks/data-hero';
import HomePagesBlock from '@/app/blocks/homepages/homepages';
import { homepagesListData } from '@/app/hooks/data-homepages';
import InnersPagesBlock from '@/app/blocks/innerspages/innerspages';
import { innerspagesListData } from '@/app/hooks/data-innerspages';
import ServicesList from '@/app/blocks/services/variants/servicesList/ServicesList';
import BannerInnerPages from '@/app/blocks/innerspages/BannerInnerPages';

import { FeaturesCardListData } from '@/app/hooks/data-features';
import Cta from '@/app/blocks/cta/variants/ctaOne/ctaOne';
import { ctaIntroData } from '@/app/hooks/data-cta';

const PageIntro = () => {
    return (
        <>
            {/* Hero Intro */}
            <HeroBasicBlock {...heroBasicIntroData} />
            {/* / Hero Intro */}

            <div className="landing-page__content">
                {/* Home Pages */}
                <HomePagesBlock {...homepagesListData} />
                {/* / Home Pages */}

                {/* Banner */}
                <BannerInnerPages />
                {/* / Banner */}

                {/* Inner Pages */}
                <InnersPagesBlock {...innerspagesListData} />
                {/* / Inner Pages */}
            </div>

            {/* Banner */}
            <section className="sections bg-coarseWool-900">
                <div className="sections__container">
                    <div className="pb-0 section-title section-title__center">
                        <h3 className="mb-0 text-calico-500 text-center">
                            You are in the right place now
                        </h3>
                    </div>
                </div>
            </section>
            {/* / Banner */}

            {/* Illustrations Card - List - Block */}
            <ServicesList {...FeaturesCardListData} />
            {/* / Illustrations Card - List - Block */}

            {/* CTA - Block */}
            <Cta {...ctaIntroData} />
            {/* / CTA - Block */}
        </>
    );
};

export default PageIntro;
