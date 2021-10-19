import React from "react";
import BlogSection from "./BlogSection/BlogSection";
import HeroSection from "./HeroSection/HeroSection";
import OCTMedicineSection from "./OCTMedicineSection/OCTMedicineSection";
import Services from "./Services/Services";


const Home = () => {
    return (
        <>
            <HeroSection />
            <Services />
            <OCTMedicineSection />
            <BlogSection />
        </>
    );
}
export default Home;