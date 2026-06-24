import EventsPage from "@/components/Homepage/EventPage";
import Hero from "@/components/Homepage/Hero";
import ConnectPage from "@/components/Homepage/LetUsConnect";
import FeaturedEvents from "@/components/Homepage/Packages";
import Partners from "@/components/Homepage/Partners";
import Testimonial from "@/components/Homepage/Testimonial";
import WhyChooseUs from "@/components/Homepage/Why-choose-us";


export default function Homepage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />
      {/* Popular Destinations */}
      {/* <PopularDestination /> */}
      {/* Featured Packages */}
      <FeaturedEvents />
      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* Event Pages */}
      <EventsPage />
      {/* Testimonial Section */}
      <Testimonial />
      {/* Partners Section */}
      <Partners />
      {/* Let Us Connect */}
      <ConnectPage />
    </div>
  );
}
