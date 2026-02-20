import DestinationSlider from "../components/Destination/DestinationSlider";
// import NearbyPlaces from "../components/Destination/NearbyPlaces";
import RelatedSearch from "../components/Destination/RelatedSearch";
import TravelGuides from "../components/Destination/TravelGuide";
import TrendingPlaces from "../components/Destination/TrendingPlaces";


export default function DestinationsPage() {
    return (
        <main>
            <DestinationSlider />
            <RelatedSearch />
            <TrendingPlaces />
            {/* <NearbyPlaces /> */}
            <TravelGuides />
        </main>
    );
}
