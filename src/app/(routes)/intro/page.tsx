import HeroIntroBlock from '@/app/blocks/hero/hero-intro/HeroIntroBlock';
import { heroBasicIntroData } from '@/app/hooks/data-hero';
import TechStackBlock from '@/app/blocks/tech-stack/TechStackBlock';
import PagesShowcase from '@/app/blocks/pages-showcase/PagesShowcase';
import StatsBlock from '@/app/blocks/stats/StatsBlock';
import WhyBeefBlock from '@/app/blocks/why-beef/WhyBeefBlock';
import Cta from '@/app/blocks/cta/variants/ctaOne/ctaOne';
import { ctaIntroData } from '@/app/hooks/data-cta';

const PageIntro = () => {
    return (
        <>
            {/* Hero Intro */}
            <HeroIntroBlock {...heroBasicIntroData} />
            {/* / Hero Intro */}

            {/* Tech Stack */}
            <TechStackBlock />
            {/* / Tech Stack */}

            {/* Pages Showcase */}
            <PagesShowcase />
            {/* / Pages Showcase */}

            {/* Stats */}
            <StatsBlock />
            {/* / Stats */}

            {/* Why Beef */}
            <WhyBeefBlock />
            {/* / Why Beef */}

            {/* CTA - Block */}
            <Cta {...ctaIntroData} />
            {/* / CTA - Block */}
        </>
    );
};

export default PageIntro;
