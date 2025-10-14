import "./App.css"
import HeaderSection from "./components/features/landing-page/header-section"
import HeroSection from "./components/features/landing-page/hero-section"
import PartnershipSection from "./components/features/landing-page/partnership-section"
import ProductSection from "./components/features/landing-page/ProductsSection"
import AboutSection from "./components/features/landing-page/AboutSection"
import TeamSection from "./components/features/landing-page/teamSection"
import Footer from "./components/features/landing-page/FooterSection"
import Blogs from "./components/features/landing-page/Blogs"

function App() {
  return (
    <div className="bg-white min-h-screen min-w-screen">
        <HeaderSection/>
        <HeroSection />
        <PartnershipSection />
        <ProductSection />
        <AboutSection />
        {/* <TeamSection /> */}
        <Blogs />
        <Footer />
    </div>
  )
}

export default App