import HeroCarousel from '../components/HeroCarousel/HeroCarousel.jsx';
import PromoBanner from '../components/PromoBanner/PromoBanner.jsx';
import PopularMenu from '../components/PopularMenu';
import CustomerReviews from '../components/CustomerReviews/CustomerReviews.jsx';
import FAQ from '../components/FAQ.jsx';
import ServicesBar from '../components/ServicesBar.jsx';

const Home = () => {
    return (
        <>
            <HeroCarousel />
            <ServicesBar />
            <PopularMenu />
            <CustomerReviews />
            <FAQ />
            <PromoBanner />
        </>
    );
};
export default Home;
