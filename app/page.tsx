import About from '@/components/about';
import InfoCenter from '@/components/infocenter';
import Masthead from '@/components/masthead';
import OurProduct from '@/components/our-product';
import OurProduction from '@/components/our-production';
import SolidArguments from '@/components/solid-arguments';
import SocialMedia from '@/components/side-bar/social-media';
import Pagination from '@/components/side-bar/pagination';

export default function Home() {
    return (
        <main>
            <Masthead />
            <About />
            <OurProduct />
            <SolidArguments />
            <OurProduction />
            <InfoCenter />
            <SocialMedia />
            <Pagination />
        </main>
    );
}
