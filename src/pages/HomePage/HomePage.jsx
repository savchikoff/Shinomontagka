import Hero from "../../components/Hero/Hero"
import PhotosSection from "../../components/PhotosSection/PhotosSection"
import RequestSection from "../../components/RequestSection/RequestSection"
import ServicesSection from "../../components/ServicesSection/ServicesSection"

function HomePage() {
    return (
        <>
            <Hero />
            <ServicesSection />
            <PhotosSection />
            <RequestSection />
        </>

    )
}

export default HomePage