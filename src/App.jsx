import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const App = () => {
    return (
        <ErrorBoundary>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Testimonials />
            <LogoSection />
            <Contact />
            <Footer />
        </ErrorBoundary>
    )
}

export default App;