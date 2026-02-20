import EventsPage from "./components/Homepage/EventPage";
import Hero from "./components/Homepage/Hero";
import FeaturedPackages from "./components/Homepage/Packages";
import Partners from "./components/Homepage/Partners";
import PopularDestination from "./components/Homepage/PopularDestination";
import Testimonial from "./components/Homepage/Testimonial";
import WhyChooseUs from "./components/Homepage/Why-choose-us";

export default function Homepage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />
      {/* Popular Destinations */}
      <PopularDestination />
      {/* Featured Packages */}
      <FeaturedPackages />
      {/* Why Choose Us */}
      <WhyChooseUs />
      {/* Event Pages */}
      <EventsPage />
      {/* Testimonial Section */}
      <Testimonial />
      {/* Partners Section */}
      <Partners />
    </div>
  );
}
