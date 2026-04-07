import { IconType } from "react-icons";
import {
    FaTools,
    FaMapMarkerAlt,
    FaTruck,
    FaVolumeUp,
    FaUsers,
    FaGift,
    FaVideo
} from "react-icons/fa";

export interface ServiceNode {
    id: string;
    title: string;
    slug: string;
    icon?: IconType;
    image?: string;
    children?: ServiceNode[];
}

export const solutions: ServiceNode[] = [
    // Event Setup
    {
        id: "event-setup",
        title: "Event Setup",
        slug: "event-setup",
        icon: FaTools,
        children: [
            {
                id: "venue-setup",
                title: "Venue Setup",
                slug: "venue-setup",
                children: [
                    { id: "venue-layout", title: "Venue Layout", slug: "venue-layout" },
                    { id: "room-dividers-partitions", title: "Room Dividers/Partitions", slug: "room-dividers-partitions" },
                    { id: "signage-directional-signage", title: "Signage and Directional Signage", slug: "signage-directional-signage" },
                    { id: "electrical-setup", title: "Electrical Setup", slug: "electrical-setup" },
                    { id: "accessibility-setup", title: "Accessibility Setup", slug: "accessibility-setup" },
                ],
            },
            {
                id: "audio-visual-equipment",
                title: "Audio-Visual Equipment",
                slug: "audio-visual-equipment",
                children: [
                    { id: "sound-systems", title: "Sound Systems", slug: "sound-systems" },
                    { id: "lighting", title: "Lighting", slug: "lighting" },
                    { id: "projectors-screens", title: "Projectors and Screens", slug: "projectors-screens" },
                    { id: "cameras-recording-equipment", title: "Cameras and Recording Equipment", slug: "cameras-recording-equipment" },
                    { id: "wifi-setup", title: "Wi-Fi Setup", slug: "wifi-setup" },
                ],
            },
            {
                id: "furniture-decor",
                title: "Furniture and Decor",
                slug: "furniture-decor",
                children: [
                    { id: "seating-arrangements", title: "Seating Arrangements", slug: "seating-arrangements" },
                    { id: "stage-setup", title: "Stage Setup", slug: "stage-setup" },
                    { id: "table-settings", title: "Table Settings", slug: "table-settings" },
                    { id: "signage-banners", title: "Signage and Banners", slug: "signage-banners" },
                    { id: "floral-arrangements", title: "Floral Arrangements", slug: "floral-arrangements" },
                    { id: "flooring-carpeting", title: "Flooring and Carpeting", slug: "flooring-carpeting" },
                ],
            },
            {
                id: "catering-setup",
                title: "Catering Setup",
                slug: "catering-setup",
                children: [
                    { id: "food-stations-buffets", title: "Food Stations or Buffets", slug: "food-stations-buffets" },
                    { id: "beverage-stations", title: "Beverage Stations", slug: "beverage-stations" },
                    { id: "cutlery-glassware-plates", title: "Cutlery, Glassware, and Plates", slug: "cutlery-glassware-plates" },
                    { id: "waitstaff-organization", title: "Waitstaff Organization", slug: "waitstaff-organization" },
                    { id: "food-beverage-display", title: "Food and Beverage Display", slug: "food-beverage-display" },
                ],
            },
            {
                id: "registration-area-setup",
                title: "Registration Area Setup",
                slug: "registration-area-setup",
                children: [
                    { id: "check-in-tables", title: "Check-in Tables", slug: "check-in-tables" },
                    { id: "badge-printing", title: "Badge Printing", slug: "badge-printing" },
                    { id: "sign-in-sheets", title: "Sign-in Sheets", slug: "sign-in-sheets" },
                    { id: "welcome-kits-materials", title: "Welcome Kits or Materials", slug: "welcome-kits-materials" },
                    { id: "staff-for-registration", title: "Staff for Registration", slug: "staff-for-registration" },
                ],
            },
            {
                id: "technology-connectivity",
                title: "Technology and Connectivity",
                slug: "technology-connectivity",
                children: [
                    { id: "event-apps", title: "Event Apps", slug: "event-apps" },
                    { id: "live-streaming-setup", title: "Live Streaming Setup", slug: "live-streaming-setup" },
                    { id: "charging-stations", title: "Charging Stations", slug: "charging-stations" },
                    { id: "on-site-tech-support", title: "On-Site Tech Support", slug: "on-site-tech-support" },
                ],
            },
            {
                id: "security-safety-setup",
                title: "Security and Safety Setup",
                slug: "security-safety-setup",
                children: [
                    { id: "security-personnel", title: "Security Personnel", slug: "security-personnel" },
                    { id: "bag-checks", title: "Bag Checks", slug: "bag-checks" },
                    { id: "first-aid-stations", title: "First Aid Stations", slug: "first-aid-stations" },
                    { id: "emergency-exits-signage", title: "Emergency Exits and Signage", slug: "emergency-exits-signage" },
                    { id: "crowd-control-barriers", title: "Crowd Control Barriers", slug: "crowd-control-barriers" },
                ],
            },
            {
                id: "entertainment-performances",
                title: "Entertainment and Performances",
                slug: "entertainment-performances",
                children: [
                    { id: "stage-setup-performers", title: "Stage Setup for Performers", slug: "stage-setup-performers" },
                    { id: "sound-lighting-performances", title: "Sound and Lighting Coordination for Performances", slug: "sound-lighting-performances" },
                    { id: "backstage-area", title: "Backstage Area", slug: "backstage-area" },
                    { id: "interactive-activities", title: "Interactive Activities", slug: "interactive-activities" },
                ],
            },
            {
                id: "transportation-logistics",
                title: "Transportation and Logistics",
                slug: "transportation-logistics",
                children: [
                    { id: "transportation-coordination", title: "Transportation Coordination", slug: "transportation-coordination" },
                    { id: "loading-zones", title: "Loading Zones", slug: "loading-zones" },
                    { id: "parking-signage", title: "Signage for Parking", slug: "parking-signage" },
                    { id: "vendor-setup", title: "Vendor Setup", slug: "vendor-setup" },
                ],
            },
            {
                id: "staffing-coordination",
                title: "Staffing and Coordination",
                slug: "staffing-coordination",
                children: [
                    { id: "event-coordinators", title: "Event Coordinators", slug: "event-coordinators" },
                    { id: "volunteers", title: "Volunteers", slug: "volunteers" },
                    { id: "staff-briefing", title: "Staff Briefing", slug: "staff-briefing" },
                    { id: "walkie-talkies-communication", title: "Walkie-Talkies and Communication Devices", slug: "walkie-talkies-communication" },
                ],
            },
            {
                id: "branding-signage",
                title: "Branding and Signage",
                slug: "branding-signage",
                children: [
                    { id: "event-branding", title: "Event Branding", slug: "event-branding" },
                    { id: "sponsor-branding", title: "Sponsor Branding", slug: "sponsor-branding" },
                    { id: "directional-signage", title: "Directional Signage", slug: "directional-signage" },
                    { id: "promotional-materials", title: "Promotional Materials", slug: "promotional-materials" },
                ],
            },

            {
                id: "guest-services-amenities",
                title: "Guest Services and Amenities",
                slug: "guest-services-amenities",
                children: [
                    { id: "restroom-facilities", title: "Restroom Facilities", slug: "restroom-facilities" },
                    { id: "coat-check-storage", title: "Coat Check/Storage", slug: "coat-check-storage" },
                    { id: "comfort-stations", title: "Comfort Stations", slug: "comfort-stations" },
                    { id: "signage-services", title: "Signage for Services", slug: "signage-services" },

                    {
                        id: "welcome-reception",
                        title: "Welcome & Reception",
                        slug: "welcome-reception",
                        children: [
                            { id: "guest-registration", title: "Guest Registration", slug: "guest-registration" },
                            { id: "welcome-desk", title: "Welcome Desk", slug: "welcome-desk" },
                            { id: "concierge-services", title: "Concierge Services", slug: "concierge-services" },
                        ],
                    },
                    {
                        id: "vip-services",
                        title: "VIP Services",
                        slug: "vip-services",
                        children: [
                            { id: "exclusive-access", title: "Exclusive Access", slug: "exclusive-access" },
                            { id: "personalized-assistance", title: "Personalized Assistance", slug: "personalized-assistance" },
                            { id: "private-lounges", title: "Private Lounges", slug: "private-lounges" },
                        ],
                    },
                    {
                        id: "guest-communication",
                        title: "Guest Communication",
                        slug: "guest-communication",
                        children: [
                            { id: "information-booth", title: "Information Booth", slug: "information-booth" },
                            { id: "event-signage", title: "Event Signage", slug: "event-signage" },
                            { id: "guest-feedback", title: "Guest Feedback", slug: "guest-feedback" },
                        ],
                    },
                ],
            },
            {
                id: "post-event-setup",
                title: "Post-Event Setup",
                slug: "post-event-setup",
                children: [
                    { id: "feedback-collection", title: "Feedback Collection", slug: "feedback-collection" },
                    { id: "cleaning-crew", title: "Cleaning Crew", slug: "cleaning-crew" },
                    { id: "lost-found", title: "Lost and Found", slug: "lost-found" },
                ],
            },
            {
                id: "audio-visual-services",
                title: "Audio-Visual Services",
                slug: "audio-visual-services",
                children: [

                    {
                        id: "sound-systems",
                        title: "Sound Systems",
                        slug: "sound-systems",
                        children: [
                            { id: "pa-system", title: "PA (Public Address) System", slug: "pa-system" },
                            { id: "line-array-system", title: "Line Array System", slug: "line-array-system" },
                            { id: "stereo-sound-system", title: "Stereo Sound System", slug: "stereo-sound-system" },
                            { id: "surround-sound-system", title: "Surround Sound System", slug: "surround-sound-system" },
                            { id: "stage-monitors", title: "Monitors (Stage Monitors)", slug: "stage-monitors" },
                            { id: "subwoofer-system", title: "Subwoofer System", slug: "subwoofer-system" },
                            { id: "wireless-sound-system", title: "Wireless Sound System", slug: "wireless-sound-system" },
                            { id: "distributed-sound-system", title: "Distributed Sound System", slug: "distributed-sound-system" },
                            { id: "amplified-speaker-system", title: "Amplified Speaker System", slug: "amplified-speaker-system" },
                            { id: "column-array-system", title: "Column Array System", slug: "column-array-system" },
                            { id: "in-ear-monitors", title: "In-Ear Monitors (IEM)", slug: "in-ear-monitors" },
                            { id: "portable-sound-system", title: "Portable Sound System", slug: "portable-sound-system" },
                            { id: "bluetooth-sound-system", title: "Bluetooth Sound System", slug: "bluetooth-sound-system" },
                            { id: "tannoy-system", title: "Tannoy System (Public Announcement System)", slug: "tannoy-system" },
                            { id: "event-sound-reinforcement", title: "Event Sound Reinforcement System", slug: "event-sound-reinforcement" },
                            { id: "feedback-control-system", title: "Feedback Control System", slug: "feedback-control-system" },
                        ],
                    },

                    {
                        id: "lighting-design",
                        title: "Lighting Design",
                        slug: "lighting-design",
                        children: [
                            { id: "ambient-lighting", title: "Ambient Lighting", slug: "ambient-lighting" },
                            { id: "accent-lighting", title: "Accent Lighting", slug: "accent-lighting" },
                            { id: "task-lighting", title: "Task Lighting", slug: "task-lighting" },
                            { id: "stage-lighting", title: "Stage Lighting", slug: "stage-lighting" },
                            { id: "spotlighting", title: "Spotlighting", slug: "spotlighting" },
                            { id: "uplighting", title: "Uplighting", slug: "uplighting" },
                            { id: "downlighting", title: "Downlighting", slug: "downlighting" },
                            { id: "colored-lighting", title: "Colored Lighting", slug: "colored-lighting" },
                            { id: "intelligent-lighting", title: "Intelligent Lighting (Moving Lights)", slug: "intelligent-lighting" },
                            { id: "strobe-lighting", title: "Strobe Lighting", slug: "strobe-lighting" },
                            { id: "fairy-lights", title: "Fairy Lights (String Lights)", slug: "fairy-lights" },
                            { id: "gobo-lighting", title: "Projection Lighting (Gobo Lighting)", slug: "gobo-lighting" },
                            { id: "led-lighting", title: "LED Lighting", slug: "led-lighting" },
                            { id: "chandeliers", title: "Chandeliers", slug: "chandeliers" },
                            { id: "flood-lighting", title: "Flood Lighting", slug: "flood-lighting" },
                            { id: "natural-lighting", title: "Natural Lighting", slug: "natural-lighting" },
                            { id: "laser-lights", title: "Laser Lights", slug: "laser-lights" },
                            { id: "blacklight", title: "Blacklight (UV Lighting)", slug: "blacklight" },
                            { id: "cove-lighting", title: "Cove Lighting", slug: "cove-lighting" },
                            { id: "fluorescent-lighting", title: "Fluorescent Lighting", slug: "fluorescent-lighting" },
                        ],
                    },

                    {
                        id: "projection-visual-displays",
                        title: "Projection and Visual Displays",
                        slug: "projection-visual-displays",
                        children: [
                            { id: "projector-displays", title: "Projector Displays", slug: "projector-displays" },
                            { id: "led-wall-displays", title: "LED Wall Displays", slug: "led-wall-displays" },
                            { id: "projection-mapping", title: "Projection Mapping", slug: "projection-mapping" },
                            { id: "interactive-displays", title: "Interactive Displays", slug: "interactive-displays" },
                            { id: "digital-signage", title: "Digital Signage", slug: "digital-signage" },
                            { id: "laser-projectors", title: "Laser Projectors", slug: "laser-projectors" },
                            { id: "4k-hd-projectors", title: "4K and HD Projectors", slug: "4k-hd-projectors" },
                            { id: "vr-displays", title: "Virtual Reality (VR) Displays", slug: "vr-displays" },
                            { id: "ar-displays", title: "Augmented Reality (AR) Displays", slug: "ar-displays" },
                            { id: "360-projection", title: "360-Degree Projection", slug: "360-projection" },
                            { id: "holographic-displays", title: "Holographic Displays", slug: "holographic-displays" },
                            { id: "video-walls", title: "Video Walls", slug: "video-walls" },
                        ],
                    },

                    {
                        id: "live-streaming",
                        title: "Live Streaming and Broadcasting",
                        slug: "live-streaming",
                        children: [
                            { id: "single-camera-streaming", title: "Single-Camera Live Streaming", slug: "single-camera-streaming" },
                            { id: "multi-camera-streaming", title: "Multi-Camera Live Streaming", slug: "multi-camera-streaming" },
                            { id: "webinar-streaming", title: "Webinar Live Streaming", slug: "webinar-streaming" },
                            { id: "event-live-streaming", title: "Event Live Streaming", slug: "event-live-streaming" },
                            { id: "social-media-streaming", title: "Social Media Live Streaming", slug: "social-media-streaming" },
                            { id: "hybrid-event-streaming", title: "Virtual Event Streaming (Hybrid Events)", slug: "hybrid-event-streaming" },
                            { id: "360-live-streaming", title: "360-Degree Live Streaming", slug: "360-live-streaming" },
                            { id: "drone-live-streaming", title: "Drone Live Streaming", slug: "drone-live-streaming" },
                            { id: "multi-platform-streaming", title: "Multi-Platform Streaming", slug: "multi-platform-streaming" },
                            { id: "corporate-live-streaming", title: "Corporate Live Streaming", slug: "corporate-live-streaming" },
                        ],
                    }

                ]
            },
            {
                id: "wedding-management",
                title: "Wedding Management",
                slug: "wedding-management",
                children: [

                    // 🎯 Ceremony Elements
                    {
                        id: "ceremony-elements",
                        title: "Ceremony Elements",
                        slug: "ceremony-elements",
                        children: [
                            {
                                id: "venue",
                                title: "Venue",
                                slug: "venue",
                                children: [
                                    { id: "outdoor-venues", title: "Outdoor Venues", slug: "outdoor-venues" },
                                    { id: "indoor-venues", title: "Indoor Venues", slug: "indoor-venues" },
                                    { id: "destination-venues", title: "Destination Venues", slug: "destination-venues" },
                                    { id: "non-traditional-venues", title: "Non-traditional Venues", slug: "non-traditional-venues" },
                                    { id: "unique-venues", title: "Unique Venues", slug: "unique-venues" },
                                ],
                            },
                            {
                                id: "officiant",
                                title: "Officiant",
                                slug: "officiant",
                                children: [
                                    { id: "religious-officiants", title: "Religious Officiants", slug: "religious-officiants" },
                                    { id: "civil-officiants", title: "Civil Officiants", slug: "civil-officiants" },
                                    { id: "professional-officiants", title: "Professional Officiants", slug: "professional-officiants" },
                                    { id: "custom-officiants", title: "Custom or Non-Traditional Officiants", slug: "custom-officiants" },
                                    { id: "specialized-officiants", title: "Other Specialized Officiants", slug: "specialized-officiants" },
                                ],
                            },
                            {
                                id: "vows",
                                title: "Vows",
                                slug: "vows",
                                children: [
                                    { id: "traditional-vows", title: "Traditional Vows", slug: "traditional-vows" },
                                    { id: "personal-vows", title: "Personal Vows", slug: "personal-vows" },
                                    { id: "religious-vows", title: "Religious or Spiritual Vows", slug: "religious-vows" },
                                    { id: "cultural-vows", title: "Cultural or Ethnic Vows", slug: "cultural-vows" },
                                    { id: "renewal-vows", title: "Renewal Vows", slug: "renewal-vows" },
                                    { id: "secular-vows", title: "Non-traditional or Secular Vows", slug: "secular-vows" },
                                ],
                            },
                            {
                                id: "rings",
                                title: "Rings",
                                slug: "rings",
                                children: [
                                    { id: "wedding-rings", title: "Wedding Rings", slug: "wedding-rings" },
                                    { id: "engagement-rings", title: "Engagement Rings", slug: "engagement-rings" },
                                    { id: "promise-rings", title: "Promise Rings", slug: "promise-rings" },
                                    { id: "eternity-rings", title: "Eternity Rings", slug: "eternity-rings" },
                                    { id: "commitment-rings", title: "Commitment Rings", slug: "commitment-rings" },
                                ],
                            },
                            {
                                id: "ceremony-decor",
                                title: "Decor",
                                slug: "ceremony-decor",
                                children: [
                                    { id: "floral-decor", title: "Floral Decor", slug: "floral-decor" },
                                    { id: "lighting-decor", title: "Lighting Decor", slug: "lighting-decor" },
                                    { id: "aisle-decor", title: "Aisle Decor", slug: "aisle-decor" },
                                    { id: "backdrop-decor", title: "Backdrop/ Arch Decor", slug: "backdrop-decor" },
                                    { id: "table-decor", title: "Table Decor", slug: "table-decor" },
                                ],
                            },
                            {
                                id: "ceremony-music",
                                title: "Music",
                                slug: "ceremony-music",
                                children: [
                                    { id: "processional-music", title: "Processional Music", slug: "processional-music" },
                                    { id: "recessional-music", title: "Recessional Music", slug: "recessional-music" },
                                    { id: "first-dance-music", title: "First Dance Music", slug: "first-dance-music" },
                                ],
                            }
                        ],
                    },

                    // 🎉 Reception Elements
                    {
                        id: "reception-elements",
                        title: "Reception Elements",
                        slug: "reception-elements",
                        children: [
                            {
                                id: "food-drink",
                                title: "Food & Drink",
                                slug: "food-drink",
                                children: [
                                    { id: "plated-dinner", title: "Plated Dinner", slug: "plated-dinner" },
                                    { id: "buffet-style", title: "Buffet Style", slug: "buffet-style" },
                                    { id: "cocktail-hour", title: "Cocktail Hour", slug: "cocktail-hour" },
                                    { id: "food-stations", title: "Food Stations", slug: "food-stations" },
                                    { id: "open-bar", title: "Open Bar", slug: "open-bar" },
                                ],
                            },
                            {
                                id: "entertainment",
                                title: "Entertainment",
                                slug: "entertainment",
                                children: [
                                    { id: "live-band", title: "Live Band", slug: "live-band" },
                                    { id: "dj", title: "DJ (Disc Jockey)", slug: "dj" },
                                    { id: "photo-booth", title: "Photo Booth", slug: "photo-booth" },
                                    { id: "dance-performances", title: "Dance Performances", slug: "dance-performances" },
                                ],
                            }
                        ],
                    },

                    // 📅 Planning
                    {
                        id: "planning-coordination",
                        title: "Planning & Coordination",
                        slug: "planning-coordination",
                        children: [
                            { id: "budget", title: "Budget", slug: "budget" },
                            { id: "timeline", title: "Timeline", slug: "timeline" },
                            { id: "vendors", title: "Vendors", slug: "vendors" },
                            { id: "invitations", title: "Invitations", slug: "invitations" },
                            { id: "transportation", title: "Transportation", slug: "transportation" },
                            { id: "legal-requirements", title: "Legal Requirements", slug: "legal-requirements" },
                        ],
                    },

                    // 💫 Symbolic
                    {
                        id: "symbolic-elements",
                        title: "Symbolic Elements",
                        slug: "symbolic-elements",
                        children: [
                            { id: "traditions", title: "Traditions", slug: "traditions" },
                            { id: "blessings", title: "Blessings", slug: "blessings" },
                            { id: "gifts", title: "Gifts", slug: "gifts" },
                        ],
                    },

                    // ✈️ Post Wedding
                    {
                        id: "post-wedding",
                        title: "Post-Wedding Elements",
                        slug: "post-wedding",
                        children: [
                            { id: "honeymoon", title: "Honeymoon", slug: "honeymoon" },
                            { id: "thank-you-notes", title: "Thank-You Notes", slug: "thank-you-notes" },
                            { id: "photo-video-albums", title: "Photo/Video Albums", slug: "photo-video-albums" },
                        ],
                    }

                ]
            },
            {
                id: "exhibition-services",
                title: "Exhibition & Trade Show Services",
                slug: "exhibition-services",
                children: [

                    {
                        id: "theme-concept",
                        title: "Theme & Concept",
                        slug: "theme-concept",
                        children: [
                            { id: "product-centered-theme", title: "Product-Centered Theme", slug: "product-centered-theme" },
                            { id: "industry-focused-theme", title: "Industry-Focused Theme", slug: "industry-focused-theme" },
                            { id: "art-culture-theme", title: "Art & Culture Theme", slug: "art-culture-theme" },
                            { id: "technology-innovation-theme", title: "Technology & Innovation Theme", slug: "technology-innovation-theme" },
                            { id: "sustainability-theme", title: "Sustainability & Environmental Theme", slug: "sustainability-theme" },
                            { id: "educational-theme", title: "Educational Theme", slug: "educational-theme" },
                            { id: "experiential-theme", title: "Experiential/Interactive Theme", slug: "experiential-theme" },
                            { id: "seasonal-theme", title: "Seasonal or Holiday Theme", slug: "seasonal-theme" },
                            { id: "corporate-branding-theme", title: "Corporate or Branding Theme", slug: "corporate-branding-theme" },
                            { id: "social-cause-theme", title: "Social or Cause-Oriented Theme", slug: "social-cause-theme" },
                        ],
                    },

                    {
                        id: "venue-selection",
                        title: "Venue Selection",
                        slug: "venue-selection",
                        children: [
                            { id: "convention-centers", title: "Convention Centers", slug: "convention-centers" },
                            { id: "exhibition-halls", title: "Exhibition Halls", slug: "exhibition-halls" },
                            { id: "hotel-ballrooms", title: "Hotel Conference Rooms & Ballrooms", slug: "hotel-ballrooms" },
                            { id: "outdoor-open-air-venues", title: "Outdoor Venues & Open-Air Spaces", slug: "outdoor-open-air-venues" },
                            { id: "museums-cultural-venues", title: "Museums & Cultural Venues", slug: "museums-cultural-venues" },
                            { id: "university-venues", title: "University Campuses or Research Centers", slug: "university-venues" },
                            { id: "trade-show-facilities", title: "Trade Show Facilities", slug: "trade-show-facilities" },
                            { id: "pop-up-venues", title: "Pop-Up Venues", slug: "pop-up-venues" },
                            { id: "hotels-exhibition-spaces", title: "Hotels with Exhibition Spaces", slug: "hotels-exhibition-spaces" },
                            { id: "sports-arenas", title: "Sports Arenas and Stadiums", slug: "sports-arenas" },
                            { id: "shopping-malls", title: "Shopping Malls or Retail Venues", slug: "shopping-malls" },
                            { id: "historical-venues", title: "Historical Buildings or Landmark Sites", slug: "historical-venues" },
                        ],
                    },

                    {
                        id: "booths-stands",
                        title: "Booths & Stands",
                        slug: "booths-stands",
                        children: [
                            { id: "standard-booths", title: "Standard/Basic Booths", slug: "standard-booths" },
                            { id: "custom-booths", title: "Custom Booths", slug: "custom-booths" },
                            { id: "modular-booths", title: "Modular Booths", slug: "modular-booths" },
                            { id: "island-booths", title: "Island Booths", slug: "island-booths" },
                            { id: "corner-booths", title: "Corner Booths", slug: "corner-booths" },
                            { id: "peninsula-booths", title: "Peninsula Booths", slug: "peninsula-booths" },
                            { id: "popup-stands", title: "Pop-up Stands", slug: "popup-stands" },
                            { id: "kiosk-stands", title: "Kiosk Stands", slug: "kiosk-stands" },
                            { id: "interactive-booths", title: "Interactive or Experience Booths", slug: "interactive-booths" },
                            { id: "tabletop-displays", title: "Tabletop Displays", slug: "tabletop-displays" },
                            { id: "outdoor-booths", title: "Outdoor Booths", slug: "outdoor-booths" },
                            { id: "virtual-booths", title: "Virtual Booths (Digital Booths)", slug: "virtual-booths" },
                        ],
                    },

                    {
                        id: "design-layout",
                        title: "Design & Layout",
                        slug: "design-layout",
                        children: [
                            { id: "linear-layout", title: "Linear Layout", slug: "linear-layout" },
                            { id: "grid-layout", title: "Grid Layout", slug: "grid-layout" },
                            { id: "island-layout", title: "Island Layout", slug: "island-layout" },
                            { id: "peninsula-layout", title: "Peninsula Layout", slug: "peninsula-layout" },
                            { id: "corner-layout", title: "Corner Layout", slug: "corner-layout" },
                            { id: "circular-layout", title: "Circular or Oval Layout", slug: "circular-layout" },
                            { id: "open-layout", title: "Open Layout", slug: "open-layout" },
                            { id: "themed-layout", title: "Themed Layout", slug: "themed-layout" },
                            { id: "zoning-layout", title: "Zoning Layout", slug: "zoning-layout" },
                            { id: "flow-based-layout", title: "Flow-Based Layout", slug: "flow-based-layout" },
                        ],
                    },

                    {
                        id: "logistics-transportation",
                        title: "Logistics & Transportation",
                        slug: "logistics-transportation",
                        children: [
                            { id: "freight-logistics", title: "Freight Logistics", slug: "freight-logistics" },
                            { id: "exhibitor-transport", title: "Transport for Exhibitor Materials", slug: "exhibitor-transport" },
                            { id: "container-shipping", title: "Containerized Shipping", slug: "container-shipping" },
                            { id: "dedicated-transport", title: "Dedicated Exhibition Transport", slug: "dedicated-transport" },
                            { id: "on-site-transport", title: "On-Site Transportation", slug: "on-site-transport" },
                            { id: "air-freight", title: "Air Freight", slug: "air-freight" },
                            { id: "road-freight", title: "Road Freight", slug: "road-freight" },
                            { id: "sea-freight", title: "Sea Freight", slug: "sea-freight" },
                            { id: "courier-services", title: "Courier Services", slug: "courier-services" },
                            { id: "customs-compliance", title: "Customs & Compliance Handling", slug: "customs-compliance" },
                            { id: "storage-warehousing", title: "Storage & Warehousing", slug: "storage-warehousing" },
                        ],
                    },

                    {
                        id: "marketing-promotion",
                        title: "Marketing & Promotion",
                        slug: "marketing-promotion",
                        children: [
                            { id: "pre-event-marketing", title: "Pre-Event Marketing", slug: "pre-event-marketing" },
                            { id: "digital-marketing", title: "Digital Marketing & Social Media Promotion", slug: "digital-marketing" },
                            { id: "influencer-marketing", title: "Influencer and Blogger Partnerships", slug: "influencer-marketing" },
                            { id: "event-website", title: "Event Website and Landing Pages", slug: "event-website" },
                            { id: "email-marketing", title: "Email Marketing Campaigns", slug: "email-marketing" },
                            { id: "public-relations", title: "Public Relations & Media Coverage", slug: "public-relations" },
                            { id: "advertising", title: "Advertising", slug: "advertising" },
                            { id: "partnerships", title: "Partnerships and Sponsorships", slug: "partnerships" },
                            { id: "promotional-collateral", title: "Promotional Collateral and Swag", slug: "promotional-collateral" },
                            { id: "contests-giveaways", title: "Contests and Giveaways", slug: "contests-giveaways" },
                        ],
                    },

                    {
                        id: "additional-services",
                        title: "Additional Services",
                        slug: "additional-services",
                        children: [
                            { id: "registration-ticketing", title: "Registration & Ticketing", slug: "registration-ticketing" },
                            { id: "catering-refreshments", title: "Catering & Refreshments", slug: "catering-refreshments" },
                            { id: "staff-security", title: "Staff & Security", slug: "staff-security" },
                            { id: "networking-opportunities", title: "Networking Opportunities", slug: "networking-opportunities" },
                            { id: "entertainment-activities", title: "Entertainment & Activities", slug: "entertainment-activities" },
                            { id: "sponsorship-partnerships", title: "Sponsorship & Partnerships", slug: "sponsorship-partnerships" },
                            { id: "post-event-engagement", title: "Post-Event Engagement", slug: "post-event-engagement" },
                        ],
                    }

                ]
            },
            {
                id: "conference-management",
                title: "Conference Management",
                slug: "conference-management",
                children: [

                    {
                        id: "conference-theme-concept",
                        title: "Conference Theme & Concept",
                        slug: "conference-theme-concept",
                    },

                    {
                        id: "venue-selection",
                        title: "Venue Selection",
                        slug: "venue-selection",
                        children: [
                            {
                                id: "convention-centers",
                                title: "Convention Centers",
                                slug: "convention-centers",
                                children: [
                                    { id: "pragati-maidan", title: "Pragati Maidan (New Delhi)", slug: "pragati-maidan" },
                                    { id: "india-habitat-centre", title: "India Habitat Centre (IHC)", slug: "india-habitat-centre" },
                                    { id: "bombay-convention-centre", title: "Bombay Convention & Exhibition Centre (BCEC)", slug: "bombay-convention-centre" },
                                    { id: "hyderabad-convention-centre", title: "Hyderabad International Convention Centre (HICC)", slug: "hyderabad-convention-centre" },
                                    { id: "mahatma-mandir", title: "Mahatma Mandir Convention Centre", slug: "mahatma-mandir" },
                                    { id: "leela-ambience", title: "The Leela Ambience Convention Hotel", slug: "leela-ambience" },
                                    { id: "itc-gardenia", title: "ITC Gardenia Convention Centre", slug: "itc-gardenia" },
                                    { id: "jw-marriott-convention", title: "JW Marriott Hotel Convention Centre", slug: "jw-marriott-convention" },
                                    { id: "bangalore-palace", title: "Bangalore Palace Convention Centre", slug: "bangalore-palace" },
                                    { id: "taj-palace-convention", title: "Taj Palace Hotel Convention Centre", slug: "taj-palace-convention" },
                                    { id: "eco-park-convention", title: "Convention Centre at Eco Park", slug: "eco-park-convention" },
                                    { id: "igcc", title: "Indira Gandhi Convention Centre (IGCC)", slug: "igcc" },
                                    { id: "renaissance-convention", title: "Renaissance Convention Centre Hotel", slug: "renaissance-convention" },
                                    { id: "svp-hall", title: "Sardar Vallabhbhai Patel Conference Hall", slug: "svp-hall" },
                                    { id: "biec", title: "BIEC (Bangalore International Exhibition Centre)", slug: "biec" },
                                    { id: "ashok-hotel", title: "The Ashok Hotel Convention Centre", slug: "ashok-hotel" },
                                    { id: "grand-hyderabad", title: "The Grand Hyderabad Convention Centre", slug: "grand-hyderabad" },
                                    { id: "deltin-convention", title: "The Deltin Convention Centre", slug: "deltin-convention" },
                                    { id: "kalpana-convention", title: "Kalpana Convention Centre", slug: "kalpana-convention" },
                                    { id: "radisson-blu-convention", title: "Radisson Blu Convention Centre", slug: "radisson-blu-convention" },
                                    { id: "pune-international-convention", title: "Pune International Convention Centre", slug: "pune-international-convention" },
                                ],
                            },

                            { id: "conference-hotels", title: "Hotels with Conference Facilities", slug: "conference-hotels" },
                            { id: "university-campuses", title: "University Campuses", slug: "university-campuses" },
                            { id: "exhibition-halls", title: "Exhibition Halls", slug: "exhibition-halls" },
                            { id: "ballrooms-banquet-halls", title: "Ballrooms and Banquet Halls", slug: "ballrooms-banquet-halls" },
                            { id: "conference-hotels-type", title: "Conference Hotels", slug: "conference-hotels-type" },
                            { id: "unique-venues", title: "Unique Venues", slug: "unique-venues" },
                            { id: "outdoor-venues", title: "Outdoor Venues", slug: "outdoor-venues" },
                            { id: "corporate-campuses", title: "Corporate Campuses and Business Centers", slug: "corporate-campuses" },
                            { id: "cruise-venues", title: "Cruise Ships or Floating Venues", slug: "cruise-venues" },
                        ],
                    },

                    {
                        id: "conference-services",
                        title: "Conference Services",
                        slug: "conference-services",
                        children: [
                            { id: "agenda-schedule", title: "Conference Agenda & Schedule", slug: "agenda-schedule" },
                            { id: "speakers-presenters", title: "Speakers & Presenters", slug: "speakers-presenters" },
                            { id: "content-development", title: "Content Development", slug: "content-development" },
                            { id: "exhibitors-sponsors", title: "Exhibitors & Sponsors", slug: "exhibitors-sponsors" },
                            { id: "marketing-promotion", title: "Marketing & Promotion", slug: "marketing-promotion" },
                            { id: "registration-ticketing", title: "Registration & Ticketing", slug: "registration-ticketing" },
                            { id: "technology-av", title: "Technology & Audio-Visual Equipment", slug: "technology-av" },
                            { id: "event-app", title: "Event App or Website", slug: "event-app" },
                            { id: "networking", title: "Networking Opportunities", slug: "networking" },
                            { id: "catering", title: "Catering & Refreshments", slug: "catering" },
                            { id: "delegate-kits", title: "Delegate Kits & Materials", slug: "delegate-kits" },
                            { id: "event-staff", title: "Event Staff & Volunteers", slug: "event-staff" },
                            { id: "accommodation-travel", title: "Accommodation & Travel Arrangements", slug: "accommodation-travel" },
                            { id: "security-safety", title: "Security & Safety Measures", slug: "security-safety" },
                            { id: "signage-branding", title: "Signage & Branding", slug: "signage-branding" },
                            { id: "feedback-surveys", title: "Event Feedback & Surveys", slug: "feedback-surveys" },
                            { id: "entertainment-social", title: "Entertainment & Social Events", slug: "entertainment-social" },
                            { id: "post-engagement", title: "Post-Conference Engagement", slug: "post-engagement" },
                            { id: "media-coverage", title: "Media & Press Coverage", slug: "media-coverage" },
                            { id: "sustainability", title: "Sustainability & Eco-friendly Practices", slug: "sustainability" },
                            { id: "crisis-management", title: "Crisis Management Plan", slug: "crisis-management" },
                            { id: "csr", title: "Corporate Social Responsibility", slug: "csr" },
                            { id: "legal-compliance", title: "Legal & Compliance Considerations", slug: "legal-compliance" },
                        ],
                    }

                ]
            }
        ]
    },
    // AV and Light Sound
    {
        "id": "audio-visual-av-light-sound",
        "title": "Audio-visual (AV) and Light-Sound",
        "slug": "audio-visual-av-light-sound",
        icon: FaVolumeUp,
        "children": [
            {
                "id": "sound-systems",
                "title": "Sound Systems",
                "slug": "sound-systems",
                "children": [
                    { "id": "pa-system", "title": "PA (Public Address) System", "slug": "pa-system" },
                    { "id": "line-array-system", "title": "Line Array System", "slug": "line-array-system" },
                    { "id": "stereo-sound-system", "title": "Stereo Sound System", "slug": "stereo-sound-system" },
                    { "id": "surround-sound-system", "title": "Surround Sound System", "slug": "surround-sound-system" },
                    { "id": "stage-monitors", "title": "Monitors (Stage Monitors)", "slug": "stage-monitors" },
                    { "id": "subwoofer-system", "title": "Subwoofer System", "slug": "subwoofer-system" },
                    { "id": "wireless-sound-system", "title": "Wireless Sound System", "slug": "wireless-sound-system" },
                    { "id": "distributed-sound-system", "title": "Distributed Sound System", "slug": "distributed-sound-system" },
                    { "id": "amplified-speaker-system", "title": "Amplified Speaker System", "slug": "amplified-speaker-system" },
                    { "id": "column-array-system", "title": "Column Array System", "slug": "column-array-system" },
                    { "id": "in-ear-monitors", "title": "In-Ear Monitors (IEM)", "slug": "in-ear-monitors" },
                    { "id": "portable-sound-system", "title": "Portable Sound System", "slug": "portable-sound-system" },
                    { "id": "bluetooth-sound-system", "title": "Bluetooth Sound System", "slug": "bluetooth-sound-system" },
                    { "id": "tannoy-system", "title": "Tannoy System (Public Announcement System)", "slug": "tannoy-system" },
                    { "id": "event-sound-reinforcement", "title": "Event Sound Reinforcement System", "slug": "event-sound-reinforcement" },
                    { "id": "feedback-control-system", "title": "Feedback Control System", "slug": "feedback-control-system" }
                ]
            },
            {
                "id": "lighting-design",
                "title": "Lighting Design",
                "slug": "lighting-design",
                "children": [
                    { "id": "ambient-lighting", "title": "Ambient Lighting", "slug": "ambient-lighting" },
                    { "id": "accent-lighting", "title": "Accent Lighting", "slug": "accent-lighting" },
                    { "id": "task-lighting", "title": "Task Lighting", "slug": "task-lighting" },
                    { "id": "stage-lighting", "title": "Stage Lighting", "slug": "stage-lighting" },
                    { "id": "spotlighting", "title": "Spotlighting", "slug": "spotlighting" },
                    { "id": "uplighting", "title": "Uplighting", "slug": "uplighting" },
                    { "id": "downlighting", "title": "Downlighting", "slug": "downlighting" },
                    { "id": "colored-lighting", "title": "Colored Lighting", "slug": "colored-lighting" },
                    { "id": "intelligent-lighting", "title": "Intelligent Lighting (Moving Lights)", "slug": "intelligent-lighting" },
                    { "id": "strobe-lighting", "title": "Strobe Lighting", "slug": "strobe-lighting" },
                    { "id": "fairy-lights", "title": "Fairy Lights (String Lights)", "slug": "fairy-lights" },
                    { "id": "gobo-lighting", "title": "Projection Lighting (Gobo Lighting)", "slug": "gobo-lighting" },
                    { "id": "led-lighting", "title": "LED Lighting", "slug": "led-lighting" },
                    { "id": "chandeliers", "title": "Chandeliers", "slug": "chandeliers" },
                    { "id": "flood-lighting", "title": "Flood Lighting", "slug": "flood-lighting" },
                    { "id": "natural-lighting", "title": "Natural Lighting (Daylight or Skylights)", "slug": "natural-lighting" },
                    { "id": "laser-lights", "title": "Laser Lights", "slug": "laser-lights" },
                    { "id": "uv-lighting", "title": "Blacklight (UV Lighting)", "slug": "uv-lighting" },
                    { "id": "cove-lighting", "title": "Cove Lighting", "slug": "cove-lighting" },
                    { "id": "fluorescent-lighting", "title": "Fluorescent Lighting", "slug": "fluorescent-lighting" }
                ]
            },
            {
                "id": "stage-lighting",
                "title": "Stage Lighting",
                "slug": "stage-lighting",
                "children": [
                    { "id": "front-lighting", "title": "Front Lighting", "slug": "front-lighting" },
                    { "id": "backlighting", "title": "Backlighting", "slug": "backlighting" },
                    { "id": "side-lighting", "title": "Side Lighting", "slug": "side-lighting" },
                    { "id": "downlighting-stage", "title": "Downlighting", "slug": "downlighting-stage" },
                    { "id": "up-lighting", "title": "Up Lighting", "slug": "up-lighting" },
                    { "id": "spotlighting-stage", "title": "Spotlighting", "slug": "spotlighting-stage" },
                    { "id": "flood-lighting-stage", "title": "Flood Lighting", "slug": "flood-lighting-stage" },
                    { "id": "follow-spot-lighting", "title": "Follow Spot Lighting", "slug": "follow-spot-lighting" },
                    { "id": "strobe-lighting-stage", "title": "Strobe Lighting", "slug": "strobe-lighting-stage" },
                    { "id": "gobo-lighting-stage", "title": "Gobo Lighting (Pattern Projection)", "slug": "gobo-lighting-stage" },
                    { "id": "moving-head-lights", "title": "Moving Head Lights", "slug": "moving-head-lights" },
                    { "id": "wash-lighting", "title": "Wash Lighting", "slug": "wash-lighting" },
                    { "id": "par-cans", "title": "PAR Cans (Parabolic Aluminized Reflector Cans)", "slug": "par-cans" },
                    { "id": "led-stage-lighting", "title": "LED Stage Lighting", "slug": "led-stage-lighting" },
                    { "id": "cyclorama-lighting", "title": "Cyclorama Lighting", "slug": "cyclorama-lighting" },
                    { "id": "practical-lighting", "title": "Practical Lighting", "slug": "practical-lighting" },
                    { "id": "ambient-lighting-mood", "title": "Ambient Lighting (Mood Lighting)", "slug": "ambient-lighting-mood" },
                    { "id": "uv-lighting-stage", "title": "Blacklight (UV Lighting)", "slug": "uv-lighting-stage" },
                    { "id": "hazer-smoke-machines", "title": "Hazer and Smoke Machines", "slug": "hazer-smoke-machines" }
                ]
            },
            {
                "id": "projection-visual-displays",
                "title": "Projection and Visual Displays",
                "slug": "projection-visual-displays",
                "children": [
                    { "id": "projector-displays", "title": "Projector Displays (Standard Projection)", "slug": "projector-displays" },
                    { "id": "led-wall-displays", "title": "LED Wall Displays", "slug": "led-wall-displays" },
                    { "id": "projection-mapping", "title": "Projection Mapping (Video Mapping)", "slug": "projection-mapping" },
                    { "id": "interactive-displays", "title": "Interactive Displays", "slug": "interactive-displays" },
                    { "id": "digital-signage", "title": "Digital Signage", "slug": "digital-signage" },
                    { "id": "laser-projectors", "title": "Laser Projectors", "slug": "laser-projectors" },
                    { "id": "4k-hd-projectors", "title": "4K and HD Projectors", "slug": "4k-hd-projectors" },
                    { "id": "vr-displays", "title": "Virtual Reality (VR) Displays", "slug": "vr-displays" },
                    { "id": "ar-displays", "title": "Augmented Reality (AR) Displays", "slug": "ar-displays" },
                    { "id": "360-degree-projection", "title": "360-Degree Projection", "slug": "360-degree-projection" },
                    { "id": "holographic-displays", "title": "Holographic Displays", "slug": "holographic-displays" },
                    { "id": "flip-discs", "title": "Flip Discs and Mechanical Displays", "slug": "flip-discs" },
                    { "id": "projection-domes", "title": "Immersive Projection Domes (Dome Projections)", "slug": "projection-domes" },
                    { "id": "interactive-projection", "title": "Interactive Projection", "slug": "interactive-projection" },
                    { "id": "oled-displays", "title": "OLED Displays", "slug": "oled-displays" },
                    { "id": "video-walls", "title": "Video Walls", "slug": "video-walls" },
                    { "id": "flat-panel-displays", "title": "Flat Panel Displays", "slug": "flat-panel-displays" },
                    { "id": "large-scale-projections", "title": "Pano and Large-Scale Projections", "slug": "large-scale-projections" }
                ]
            },
            {
                "id": "led-screens-video-walls",
                "title": "LED Screens and Video Walls",
                "slug": "led-screens-video-walls",
                "children": [
                    { "id": "indoor-led-screens", "title": "Indoor LED Screens", "slug": "indoor-led-screens" },
                    { "id": "outdoor-led-screens", "title": "Outdoor LED Screens", "slug": "outdoor-led-screens" },
                    { "id": "curved-led-screens", "title": "Curved LED Screens", "slug": "curved-led-screens" },
                    { "id": "modular-led-walls", "title": "Modular LED Walls", "slug": "modular-led-walls" },
                    { "id": "flexible-led-screens", "title": "Flexible LED Screens", "slug": "flexible-led-screens" },
                    { "id": "transparent-led-screens", "title": "Transparent LED Screens", "slug": "transparent-led-screens" },
                    { "id": "rear-projection-led", "title": "Rear-Projection LED Screens", "slug": "rear-projection-led" },
                    { "id": "double-sided-led", "title": "Double-Sided LED Screens", "slug": "double-sided-led" },
                    { "id": "hd-led-screens", "title": "High-Definition (HD) LED Screens", "slug": "hd-led-screens" },
                    { "id": "4k-led-screens", "title": "4K LED Screens", "slug": "4k-led-screens" },
                    { "id": "oled-video-walls", "title": "OLED Video Walls", "slug": "oled-video-walls" },
                    { "id": "p3-p4-p5-panels", "title": "P3, P4, P5 LED Panels (Pixel Pitch)", "slug": "p3-p4-p5-panels" },
                    { "id": "flexible-pixel-led", "title": "Flexible Pixel Pitch LED Walls", "slug": "flexible-pixel-led" },
                    { "id": "interactive-led-screens", "title": "Interactive LED Screens", "slug": "interactive-led-screens" },
                    { "id": "full-color-led-walls", "title": "Full-Color LED Walls", "slug": "full-color-led-walls" },
                    { "id": "digital-billboards", "title": "Digital Billboards", "slug": "digital-billboards" },
                    { "id": "mini-led-walls", "title": "Mini LED Walls (Small-Scale)", "slug": "mini-led-walls" }
                ]
            },
            {
                "id": "live-streaming-broadcasting",
                "title": "Live Streaming and Broadcasting",
                "slug": "live-streaming-broadcasting",
                "children": [
                    { "id": "single-camera-live-streaming", "title": "Single-Camera Live Streaming", "slug": "single-camera-live-streaming" },
                    { "id": "multi-camera-live-streaming", "title": "Multi-Camera Live Streaming", "slug": "multi-camera-live-streaming" },
                    { "id": "webinar-live-streaming", "title": "Webinar Live Streaming", "slug": "webinar-live-streaming" },
                    { "id": "event-live-streaming", "title": "Event Live Streaming (Full Event Broadcast)", "slug": "event-live-streaming" },
                    { "id": "sports-live-streaming", "title": "Sports Live Streaming", "slug": "sports-live-streaming" },
                    { "id": "social-media-live-streaming", "title": "Social Media Live Streaming", "slug": "social-media-live-streaming" },
                    { "id": "virtual-event-streaming", "title": "Virtual Event Streaming (Hybrid Events)", "slug": "virtual-event-streaming" },
                    { "id": "360-degree-live-streaming", "title": "360-Degree Live Streaming", "slug": "360-degree-live-streaming" },
                    { "id": "drone-live-streaming", "title": "Drone Live Streaming", "slug": "drone-live-streaming" },
                    { "id": "interactive-live-streaming", "title": "Live Streaming with Interactive Features", "slug": "interactive-live-streaming" },
                    { "id": "on-demand-live-streaming", "title": "Live Streaming with On-Demand Content", "slug": "on-demand-live-streaming" },
                    { "id": "multi-platform-streaming", "title": "Live Streaming to Multiple Platforms (Multi-Stream)", "slug": "multi-platform-streaming" },
                    { "id": "tv-cable-broadcasting", "title": "TV and Cable Broadcasting", "slug": "tv-cable-broadcasting" },
                    { "id": "vr-live-streaming", "title": "Virtual Reality (VR) Live Streaming", "slug": "vr-live-streaming" },
                    { "id": "mobile-live-streaming", "title": "Mobile Live Streaming", "slug": "mobile-live-streaming" },
                    { "id": "esports-live-streaming", "title": "Livestreaming for eSports", "slug": "esports-live-streaming" },
                    { "id": "satellite-broadcasting", "title": "Satellite Broadcasting", "slug": "satellite-broadcasting" },
                    { "id": "audio-only-live-streaming", "title": "Audio-Only Live Streaming", "slug": "audio-only-live-streaming" },
                    { "id": "corporate-live-streaming", "title": "Corporate Live Streaming", "slug": "corporate-live-streaming" },
                    { "id": "closed-caption-live-streaming", "title": "Live Streaming with Closed Captioning", "slug": "closed-caption-live-streaming" }
                ]
            },
            {
                "id": "sound-mixing-audio-control",
                "title": "Sound Mixing and Audio Control",
                "slug": "sound-mixing-audio-control",
                "children": [
                    { "id": "live-sound-mixing", "title": "Live Sound Mixing", "slug": "live-sound-mixing" },
                    { "id": "studio-sound-mixing", "title": "Studio Sound Mixing", "slug": "studio-sound-mixing" },
                    { "id": "broadcast-audio-mixing", "title": "Broadcast Audio Mixing", "slug": "broadcast-audio-mixing" },
                    { "id": "multitrack-audio-mixing", "title": "Multitrack Audio Mixing", "slug": "multitrack-audio-mixing" },
                    { "id": "surround-sound-mixing", "title": "Surround Sound Mixing", "slug": "surround-sound-mixing" },
                    { "id": "dolby-atmos-mixing", "title": "Dolby Atmos Sound Mixing", "slug": "dolby-atmos-mixing" },
                    { "id": "sound-design-mixing", "title": "Sound Design and Mixing", "slug": "sound-design-mixing" },
                    { "id": "daw-mixing", "title": "Digital Audio Workstation (DAW) Mixing", "slug": "daw-mixing" },
                    { "id": "ambient-sound-mixing", "title": "Ambient Sound Mixing", "slug": "ambient-sound-mixing" },
                    { "id": "monitor-mixing", "title": "Monitor Mixing", "slug": "monitor-mixing" },
                    { "id": "automated-mixing", "title": "Automated Mixing", "slug": "automated-mixing" },
                    { "id": "feedback-control", "title": "Feedback Control", "slug": "feedback-control-audio" },
                    { "id": "live-event-audio-mixing", "title": "Live Event Audio Mixing", "slug": "live-event-audio-mixing" },
                    { "id": "pa-system-mixing", "title": "PA (Public Address) System Mixing", "slug": "pa-system-mixing" },
                    { "id": "wireless-audio-mixing", "title": "Wireless Audio Mixing", "slug": "wireless-audio-mixing" },
                    { "id": "mobile-sound-mixing", "title": "Mobile Sound Mixing", "slug": "mobile-sound-mixing" },
                    { "id": "noise-reduction-processing", "title": "Noise Reduction and Signal Processing", "slug": "noise-reduction-processing" },
                    { "id": "analog-sound-mixing", "title": "Analog Sound Mixing", "slug": "analog-sound-mixing" },
                    { "id": "digital-sound-mixing", "title": "Digital Sound Mixing", "slug": "digital-sound-mixing" },
                    { "id": "equalization-frequency-management", "title": "Equalization (EQ) and Frequency Management", "slug": "equalization-frequency-management" }
                ]
            },
            {
                "id": "theatrical-special-effects-lighting",
                "title": "Theatrical and Special Effects Lighting",
                "slug": "theatrical-special-effects-lighting",
                "children": [
                    { "id": "spotlights", "title": "Spotlights", "slug": "spotlights" },
                    { "id": "floodlights", "title": "Floodlights", "slug": "floodlights" },
                    { "id": "led-lighting-effects", "title": "LED Lighting", "slug": "led-lighting-effects" },
                    { "id": "gobo-projectors", "title": "Gobo Projectors", "slug": "gobo-projectors" },
                    { "id": "strobe-lighting-effects", "title": "Strobe Lighting", "slug": "strobe-lighting-effects" },
                    { "id": "follow-spots", "title": "Follow Spots", "slug": "follow-spots" },
                    { "id": "moving-head-lights-effects", "title": "Moving Head Lights", "slug": "moving-head-lights-effects" },
                    { "id": "uv-blacklights", "title": "Blacklights (UV Lights)", "slug": "uv-blacklights" },
                    { "id": "laser-lighting-effects", "title": "Laser Lighting", "slug": "laser-lighting-effects" },
                    { "id": "hazer-fog-machines", "title": "Hazer and Fog Machines", "slug": "hazer-fog-machines" },
                    { "id": "chase-lighting", "title": "Chase Lighting", "slug": "chase-lighting" },
                    { "id": "color-changing-lights", "title": "Color Changing Lights", "slug": "color-changing-lights" },
                    { "id": "automated-lighting", "title": "Automated Lighting", "slug": "automated-lighting-effects" },
                    { "id": "cyclorama-lighting-effects", "title": "Cyclorama Lighting", "slug": "cyclorama-lighting-effects" },
                    { "id": "pin-spot-lighting", "title": "Pin Spot Lighting", "slug": "pin-spot-lighting" },
                    { "id": "scene-change-lighting", "title": "Scene Change Lighting", "slug": "scene-change-lighting" },
                    { "id": "starlight-effects", "title": "Starlight Effects", "slug": "starlight-effects" },
                    { "id": "glitter-sparkle-effects", "title": "Glitter and Sparkle Effects", "slug": "glitter-sparkle-effects" },
                    { "id": "wind-machines", "title": "Wind Machines", "slug": "wind-machines" },
                    { "id": "pyrotechnic-effects", "title": "Pyrotechnic Effects (with Lighting)", "slug": "pyrotechnic-effects" }
                ]
            },
            {
                "id": "ambient-lighting",
                "title": "Ambient Lighting",
                "slug": "ambient-lighting",
                "children": [
                    { "id": "general-illumination", "title": "General Illumination", "slug": "general-illumination" },
                    { "id": "soft-lighting", "title": "Soft Lighting", "slug": "soft-lighting" },
                    { "id": "ambient-led-lighting", "title": "Ambient LED Lighting", "slug": "ambient-led-lighting" },
                    { "id": "natural-lighting-ambient", "title": "Natural Lighting", "slug": "natural-lighting-ambient" },
                    { "id": "indirect-lighting", "title": "Indirect Lighting", "slug": "indirect-lighting" },
                    { "id": "ambient-ceiling-lights", "title": "Ambient Ceiling Lights", "slug": "ambient-ceiling-lights" },
                    { "id": "cove-lighting-ambient", "title": "Cove Lighting", "slug": "cove-lighting-ambient" },
                    { "id": "recessed-lighting", "title": "Recessed Lighting", "slug": "recessed-lighting" },
                    { "id": "backlit-lighting", "title": "Backlit Lighting", "slug": "backlit-lighting" },
                    { "id": "mood-lighting", "title": "Mood Lighting", "slug": "mood-lighting" },
                    { "id": "track-lighting", "title": "Track Lighting", "slug": "track-lighting" },
                    { "id": "floor-table-lamps", "title": "Floor Lamps and Table Lamps", "slug": "floor-table-lamps" },
                    { "id": "dimming-control-lighting", "title": "Ambient Lighting with Dimming Control", "slug": "dimming-control-lighting" },
                    { "id": "lanterns-string-lights", "title": "Lanterns and String Lights", "slug": "lanterns-string-lights" },
                    { "id": "smart-lighting", "title": "Smart Lighting", "slug": "smart-lighting" },
                    { "id": "wall-sconces", "title": "Wall Sconces", "slug": "wall-sconces" },
                    { "id": "hanging-lights", "title": "Hanging Lights", "slug": "hanging-lights" }
                ]
            },
            {
                "id": "interactive-audio-visual-experiences",
                "title": "Interactive Audio-Visual Experiences",
                "slug": "interactive-audio-visual-experiences",
                "children": [
                    { "id": "immersive-av-installations", "title": "Immersive Audio-Visual Installations", "slug": "immersive-av-installations" },
                    { "id": "interactive-video-mapping", "title": "Interactive Video Mapping", "slug": "interactive-video-mapping" },
                    { "id": "gesture-controlled-av", "title": "Gesture-Controlled AV Experiences", "slug": "gesture-controlled-av" },
                    { "id": "ar-experiences", "title": "Augmented Reality (AR) Experiences", "slug": "ar-experiences" },
                    { "id": "vr-experiences", "title": "Virtual Reality (VR) Experiences", "slug": "vr-experiences" },
                    { "id": "interactive-light-sound-sculptures", "title": "Interactive Light and Sound Sculptures", "slug": "interactive-light-sound-sculptures" },
                    { "id": "interactive-concerts", "title": "Interactive Concerts and Live Shows", "slug": "interactive-concerts" },
                    { "id": "motion-activated-av", "title": "Motion-Activated AV Systems", "slug": "motion-activated-av" },
                    { "id": "interactive-gaming-av", "title": "Interactive Gaming and Audio-Visual Displays", "slug": "interactive-gaming-av" },
                    { "id": "interactive-theatrical-performances", "title": "Interactive Theatrical Performances", "slug": "interactive-theatrical-performances" },
                    { "id": "interactive-3d-audio", "title": "Interactive 3D Audio Experiences", "slug": "interactive-3d-audio" },
                    { "id": "projection-based-games", "title": "Interactive Projection-Based Games", "slug": "projection-based-games" },
                    { "id": "interactive-light-shows", "title": "Interactive Light Shows", "slug": "interactive-light-shows" },
                    { "id": "sensor-based-soundscapes", "title": "Sensor-Based Interactive Soundscapes", "slug": "sensor-based-soundscapes" },
                    { "id": "haptic-feedback-av", "title": "Haptic Feedback AV Experiences", "slug": "haptic-feedback-av" }
                ]
            },
            {
                "id": "sound-light-synchronization",
                "title": "Sound and Light Synchronization (Choreographed Shows)",
                "slug": "sound-light-synchronization",
                "children": [
                    { "id": "music-driven-light-shows", "title": "Music-Driven Light Shows", "slug": "music-driven-light-shows" },
                    { "id": "laser-light-shows", "title": "Laser Light Shows", "slug": "laser-light-shows" },
                    { "id": "theatrical-lighting-sound", "title": "Theatrical Lighting with Sound Effects", "slug": "theatrical-lighting-sound" },
                    { "id": "fireworks-music-sync", "title": "Fireworks and Music Synchronization", "slug": "fireworks-music-sync" },
                    { "id": "interactive-light-sound-shows", "title": "Interactive Light and Sound Shows", "slug": "interactive-light-sound-shows" },
                    { "id": "stage-productions-moving-lights", "title": "Stage Productions and Concerts with Moving Lights", "slug": "stage-productions-moving-lights" },
                    { "id": "projection-mapping-audio-sync", "title": "Projection Mapping with Audio Synchronization", "slug": "projection-mapping-audio-sync" },
                    { "id": "dance-light-sound", "title": "Dance Performances with Light and Sound Choreography", "slug": "dance-light-sound" },
                    { "id": "laser-led-dance", "title": "Laser and LED Dance Shows", "slug": "laser-led-dance" },
                    { "id": "theme-park-shows", "title": "Theme Park Shows (e.g., Disney or Universal Studios)", "slug": "theme-park-shows" },
                    { "id": "multimedia-concerts", "title": "Multimedia Concerts", "slug": "multimedia-concerts" },
                    { "id": "corporate-synced-shows", "title": "Synced Light and Sound Shows for Corporate Events", "slug": "corporate-synced-shows" },
                    { "id": "automated-systems-exhibitions", "title": "Automated Sound and Light Systems for Exhibitions", "slug": "automated-systems-exhibitions" },
                    { "id": "festival-light-shows", "title": "Festival Light Shows", "slug": "festival-light-shows" },
                    { "id": "holiday-light-displays", "title": "Holiday Light Displays", "slug": "holiday-light-displays" }
                ]
            },
            {
                "id": "wireless-audio-systems",
                "title": "Wireless Audio Systems",
                "slug": "wireless-audio-systems",
                "children": [
                    { "id": "wireless-microphones", "title": "Wireless Microphone Systems", "slug": "wireless-microphones" },
                    { "id": "wireless-speakers", "title": "Wireless Speaker Systems", "slug": "wireless-speakers" },
                    { "id": "audio-transmitters-receivers", "title": "Wireless Audio Transmitters and Receivers", "slug": "audio-transmitters-receivers" },
                    { "id": "wireless-iems", "title": "Wireless In-Ear Monitors (IEMs)", "slug": "wireless-iems" },
                    { "id": "conference-audio-wireless", "title": "Wireless Audio for Conference Systems", "slug": "conference-audio-wireless" },
                    { "id": "bluetooth-audio", "title": "Bluetooth Audio Systems", "slug": "bluetooth-audio" },
                    { "id": "wifi-audio", "title": "Wi-Fi Audio Systems", "slug": "wifi-audio" },
                    { "id": "wads", "title": "Wireless Audio Distribution Systems (WADS)", "slug": "wads" },
                    { "id": "wireless-audio-video", "title": "Wireless Audio for Video", "slug": "wireless-audio-video" },
                    { "id": "wireless-pa", "title": "Wireless PA Systems", "slug": "wireless-pa" },
                    { "id": "home-theater-wireless", "title": "Wireless Audio for Home Theater Systems", "slug": "home-theater-wireless" },
                    { "id": "large-scale-wireless-audio", "title": "Wireless Audio for Large-Scale Events", "slug": "large-scale-wireless-audio" },
                    { "id": "aoip", "title": "Wireless Audio Over IP (AoIP)", "slug": "aoip" },
                    { "id": "audio-streaming-systems", "title": "Wireless Audio Streaming Systems", "slug": "audio-streaming-systems" },
                    { "id": "rf-wireless-audio", "title": "RF (Radio Frequency) Wireless Audio Systems", "slug": "rf-wireless-audio" }
                ]
            },
            {
                "id": "hearing-assistance-systems",
                "title": "Hearing Assistance Systems",
                "slug": "hearing-assistance-systems",
                "children": [
                    { "id": "induction-loop", "title": "Induction Loop Systems (Hearing Loop)", "slug": "induction-loop" },
                    { "id": "fm-systems", "title": "FM Systems (Frequency Modulation Systems)", "slug": "fm-systems" },
                    { "id": "infrared-systems", "title": "Infrared (IR) Systems", "slug": "infrared-systems" },
                    { "id": "bluetooth-hearing", "title": "Bluetooth Hearing Assistance Systems", "slug": "bluetooth-hearing" },
                    { "id": "personal-amplification", "title": "Personal Amplification Systems", "slug": "personal-amplification" },
                    { "id": "assistive-listening", "title": "Assistive Listening Devices (ALDs)", "slug": "assistive-listening" },
                    { "id": "captioning-systems", "title": "Captioning Systems", "slug": "captioning-systems" },
                    { "id": "t-coil", "title": "Telecoil (T-Coil) Systems", "slug": "t-coil" },
                    { "id": "visual-alert-systems", "title": "Visual Alert Systems", "slug": "visual-alert-systems" },
                    { "id": "directional-microphones", "title": "Directional Microphone Systems", "slug": "directional-microphones" },
                    { "id": "sound-field-systems", "title": "Sound Field Systems", "slug": "sound-field-systems" },
                    { "id": "hearing-aid-compatible", "title": "Hearing Aid-Compatible AV Systems", "slug": "hearing-aid-compatible" },
                    { "id": "wireless-microphone-hearing", "title": "Wireless Microphone for Hearing Impaired (Direct Audio Input)", "slug": "wireless-microphone-hearing" }
                ]
            },
            {
                "id": "interactive-projection-mapping",
                "title": "Interactive Projection Mapping",
                "slug": "interactive-projection-mapping",
                "children": [
                    { "id": "touch-based-mapping", "title": "Touch-Based Interactive Projection Mapping", "slug": "touch-based-mapping" },
                    { "id": "gesture-based-mapping", "title": "Gesture-Based Interactive Projection Mapping", "slug": "gesture-based-mapping" },
                    { "id": "sound-responsive-mapping", "title": "Sound-Responsive Interactive Projection Mapping", "slug": "sound-responsive-mapping" },
                    { "id": "body-tracking-mapping", "title": "Body-Tracking Interactive Projection Mapping", "slug": "body-tracking-mapping" },
                    { "id": "location-based-mapping", "title": "Location-Based Interactive Projection Mapping", "slug": "location-based-mapping" },
                    { "id": "interactive-floor-mapping", "title": "Interactive Floor or Surface Mapping", "slug": "interactive-floor-mapping" },
                    { "id": "ar-projection-mapping", "title": "Augmented Reality (AR) with Interactive Projection Mapping", "slug": "ar-projection-mapping" },
                    { "id": "3d-projection-mapping", "title": "Interactive 3D Projection Mapping", "slug": "3d-projection-mapping" },
                    { "id": "architectural-projection", "title": "Interactive Projection on Architectural Surfaces", "slug": "architectural-projection" },
                    { "id": "data-driven-mapping", "title": "Real-Time Data-Driven Interactive Projection Mapping", "slug": "data-driven-mapping" },
                    { "id": "product-visualization", "title": "Interactive Product Visualization (Retail/Exhibition)", "slug": "product-visualization" },
                    { "id": "storytelling-projection", "title": "Interactive Storytelling with Projection Mapping", "slug": "storytelling-projection" },
                    { "id": "moving-object-projection", "title": "Interactive Projection on Moving Objects", "slug": "moving-object-projection" },
                    { "id": "public-art-mapping", "title": "Interactive Projection Mapping for Public Art Installations", "slug": "public-art-mapping" },
                    { "id": "virtual-environment-projection", "title": "Interactive Projection in Virtual Environments", "slug": "virtual-environment-projection" }
                ]
            },
            {
                "id": "soundproofing-acoustic-treatments",
                "title": "Soundproofing and Acoustic Treatments",
                "slug": "soundproofing-acoustic-treatments",
                "children": [
                    { "id": "acoustic-panels", "title": "Acoustic Panels", "slug": "acoustic-panels" },
                    { "id": "bass-traps", "title": "Bass Traps", "slug": "bass-traps" },
                    { "id": "soundproof-doors-windows", "title": "Soundproof Doors and Windows", "slug": "soundproof-doors-windows" },
                    { "id": "acoustic-ceilings", "title": "Acoustic Ceilings (Acoustic Tiles or Panels)", "slug": "acoustic-ceilings" },
                    { "id": "soundproof-insulation", "title": "Soundproofing Insulation", "slug": "soundproof-insulation" },
                    { "id": "acoustic-diffusers", "title": "Acoustic Diffusers", "slug": "acoustic-diffusers" },
                    { "id": "mlv", "title": "Mass-Loaded Vinyl (MLV)", "slug": "mlv" },
                    { "id": "floor-underlayment", "title": "Soundproof Floor Underlayment", "slug": "floor-underlayment" },
                    { "id": "acoustic-curtains", "title": "Acoustic Curtains or Blinds", "slug": "acoustic-curtains" },
                    { "id": "resilient-channels", "title": "Resilient Channels", "slug": "resilient-channels" },
                    { "id": "soundproof-paint", "title": "Soundproof Paint", "slug": "soundproof-paint" },
                    { "id": "acoustic-foam", "title": "Acoustic Foam", "slug": "acoustic-foam" },
                    { "id": "double-glazed-windows", "title": "Double-Glazed or Laminated Glass Windows", "slug": "double-glazed-windows" },
                    { "id": "sealing-gaps", "title": "Sealing Gaps and Cracks", "slug": "sealing-gaps" },
                    { "id": "acoustic-baffles", "title": "Acoustic Baffles", "slug": "acoustic-baffles" }
                ]
            },
            {
                "id": "ambient-soundscapes",
                "title": "Ambient Soundscapes",
                "slug": "ambient-soundscapes",
                "children": [
                    { "id": "natural-soundscapes", "title": "Natural Soundscapes", "slug": "natural-soundscapes" },
                    { "id": "urban-soundscapes", "title": "Urban Soundscapes", "slug": "urban-soundscapes" },
                    { "id": "industrial-soundscapes", "title": "Industrial Soundscapes", "slug": "industrial-soundscapes" },
                    { "id": "futuristic-sci-fi-soundscapes", "title": "Futuristic or Sci-Fi Soundscapes", "slug": "futuristic-sci-fi-soundscapes" },
                    { "id": "cultural-traditional-soundscapes", "title": "Cultural or Traditional Soundscapes", "slug": "cultural-traditional-soundscapes" },
                    { "id": "environmental-soundscapes", "title": "Environmental Soundscapes", "slug": "environmental-soundscapes" },
                    { "id": "cinematic-filmic-soundscapes", "title": "Cinematic or Filmic Soundscapes", "slug": "cinematic-filmic-soundscapes" },
                    { "id": "ambient-music-soundscapes", "title": "Ambient Music Soundscapes", "slug": "ambient-music-soundscapes" },
                    { "id": "interactive-soundscapes", "title": "Interactive Soundscapes", "slug": "interactive-soundscapes" },
                    { "id": "psychological-soundscapes", "title": "Psychological Soundscapes", "slug": "psychological-soundscapes" },
                    { "id": "thematic-soundscapes", "title": "Thematic Soundscapes", "slug": "thematic-soundscapes" },
                    { "id": "underwater-soundscapes", "title": "Underwater Soundscapes", "slug": "underwater-soundscapes" },
                    { "id": "space-cosmic-soundscapes", "title": "Space and Cosmic Soundscapes", "slug": "space-cosmic-soundscapes" },
                    { "id": "virtual-gaming-soundscapes", "title": "Virtual or Gaming Soundscapes", "slug": "virtual-gaming-soundscapes" }
                ]
            }
        ]
    },
    // Venue Booking
    {
        "id": "venue-booking",
        "title": "Venue Booking",
        "slug": "venue-booking",
        icon: FaMapMarkerAlt,
        "children": [
            {
                "id": "conference-convention-centers",
                "title": "Conference and Convention Centers",
                "slug": "conference-convention-centers",
                "children": [
                    { "id": "large-scale-convention-centers", "title": "Large-Scale Convention Centers", "slug": "large-scale-convention-centers" },
                    { "id": "corporate-conference-centers", "title": "Corporate Conference Centers", "slug": "corporate-conference-centers" },
                    { "id": "exhibition-centers", "title": "Exhibition Centers", "slug": "exhibition-centers" },
                    { "id": "convention-halls", "title": "Convention Halls", "slug": "convention-halls" },
                    { "id": "hybrid-conference-centers", "title": "Hybrid Conference Centers", "slug": "hybrid-conference-centers" },
                    { "id": "regional-local-conference-centers", "title": "Regional or Local Conference Centers", "slug": "regional-local-conference-centers" },
                    { "id": "specialized-conference-centers", "title": "Specialized Conference Centers", "slug": "specialized-conference-centers" },
                    { "id": "university-academic-conference-centers", "title": "University or Academic Conference Centers", "slug": "university-academic-conference-centers" },
                    { "id": "hotel-conference-centers", "title": "Hotel Conference Centers", "slug": "hotel-conference-centers" },
                    { "id": "government-civic-conference-centers", "title": "Government or Civic Conference Centers", "slug": "government-civic-conference-centers" }
                ]
            },
            {
                "id": "hotels-resorts",
                "title": "Hotels and Resorts",
                "slug": "hotels-resorts",
                "children": [
                    { "id": "business-hotels", "title": "Business Hotels", "slug": "business-hotels" },
                    { "id": "luxury-hotels", "title": "Luxury Hotels", "slug": "luxury-hotels" },
                    { "id": "resort-hotels", "title": "Resort Hotels", "slug": "resort-hotels" },
                    { "id": "conference-hotels", "title": "Conference Hotels", "slug": "conference-hotels" },
                    { "id": "boutique-hotels", "title": "Boutique Hotels", "slug": "boutique-hotels" },
                    { "id": "airport-hotels", "title": "Airport Hotels", "slug": "airport-hotels" },
                    { "id": "all-inclusive-resorts", "title": "All-Inclusive Resorts", "slug": "all-inclusive-resorts" },
                    { "id": "eco-friendly-hotels", "title": "Eco-Friendly or Green Hotels", "slug": "eco-friendly-hotels" },
                    { "id": "historical-hotels", "title": "Historical Hotels", "slug": "historical-hotels" },
                    { "id": "resort-conference-centers", "title": "Resort Conference Centers", "slug": "resort-conference-centers" }
                ]
            },
            {
                "id": "outdoor-venues",
                "title": "Outdoor Venues",
                "slug": "outdoor-venues",
                "children": [
                    { "id": "parks-gardens", "title": "Parks and Gardens", "slug": "parks-gardens" },
                    { "id": "beaches", "title": "Beaches", "slug": "beaches" },
                    { "id": "outdoor-amphitheaters", "title": "Outdoor Amphitheaters", "slug": "outdoor-amphitheaters" },
                    { "id": "sports-stadiums-arenas", "title": "Sports Stadiums and Arenas", "slug": "sports-stadiums-arenas" },
                    { "id": "rooftop-venues", "title": "Outdoor Rooftop Venues", "slug": "rooftop-venues" },
                    { "id": "outdoor-courtyards", "title": "Outdoor Courtyards", "slug": "outdoor-courtyards" },
                    { "id": "vineyards-wineries", "title": "Vineyards and Wineries", "slug": "vineyards-wineries" },
                    { "id": "festival-grounds", "title": "Outdoor Festival Grounds", "slug": "festival-grounds" },
                    { "id": "botanical-gardens", "title": "Botanical Gardens", "slug": "botanical-gardens" },
                    { "id": "ranches-farms", "title": "Ranches and Farms", "slug": "ranches-farms" }
                ]
            },
            {
                "id": "theaters-auditoriums",
                "title": "Theaters and Auditoriums",
                "slug": "theaters-auditoriums",
                "children": [
                    { "id": "proscenium-theaters", "title": "Proscenium Theaters", "slug": "proscenium-theaters" },
                    { "id": "thrust-stage-theaters", "title": "Thrust Stage Theaters", "slug": "thrust-stage-theaters" },
                    { "id": "in-the-round-theaters", "title": "In-the-Round Theaters", "slug": "in-the-round-theaters" },
                    { "id": "black-box-theaters", "title": "Black Box Theaters", "slug": "black-box-theaters" },
                    { "id": "open-air-theaters", "title": "Open-Air Theaters", "slug": "open-air-theaters" },
                    { "id": "opera-houses", "title": "Opera Houses", "slug": "opera-houses" },
                    { "id": "concert-halls", "title": "Concert Halls", "slug": "concert-halls" },
                    { "id": "lecture-halls", "title": "Lecture Halls", "slug": "lecture-halls" },
                    { "id": "multipurpose-auditoriums", "title": "Multipurpose Auditoriums", "slug": "multipurpose-auditoriums" },
                    { "id": "cinema-theaters", "title": "Cinema Theaters", "slug": "cinema-theaters" }
                ]
            },
            {
                "id": "banquet-halls",
                "title": "Banquet Halls",
                "slug": "banquet-halls",
                "children": [
                    { "id": "traditional-banquet-halls", "title": "Traditional Banquet Halls", "slug": "traditional-banquet-halls" },
                    { "id": "hotel-banquet-halls", "title": "Hotel Banquet Halls", "slug": "hotel-banquet-halls" },
                    { "id": "conference-banquet-halls", "title": "Conference Banquet Halls", "slug": "conference-banquet-halls" },
                    { "id": "private-banquet-halls", "title": "Private Banquet Halls", "slug": "private-banquet-halls" },
                    { "id": "luxury-banquet-halls", "title": "Luxury Banquet Halls", "slug": "luxury-banquet-halls" },
                    { "id": "garden-banquet-halls", "title": "Garden Banquet Halls", "slug": "garden-banquet-halls" },
                    { "id": "community-center-banquet-halls", "title": "Community Center Banquet Halls", "slug": "community-center-banquet-halls" },
                    { "id": "banquet-halls-convention-centers", "title": "Banquet Halls in Convention Centers", "slug": "banquet-halls-convention-centers" },
                    { "id": "restaurant-banquet-halls", "title": "Restaurant Banquet Halls", "slug": "restaurant-banquet-halls" },
                    { "id": "multipurpose-banquet-halls", "title": "Multi-Purpose Banquet Halls", "slug": "multipurpose-banquet-halls" }
                ]
            },
            {
                "id": "exhibition-trade-show-venues",
                "title": "Exhibition and Trade Show Venues",
                "slug": "exhibition-trade-show-venues",
                "children": [
                    { "id": "convention-centers", "title": "Convention Centers", "slug": "convention-centers" },
                    { "id": "exhibition-halls", "title": "Exhibition Halls", "slug": "exhibition-halls" },
                    { "id": "hotel-conference-centers-exhibition", "title": "Hotel Conference Centers", "slug": "hotel-conference-centers-exhibition" },
                    { "id": "multipurpose-event-spaces", "title": "Multipurpose Event Spaces", "slug": "multipurpose-event-spaces" },
                    { "id": "outdoor-exhibition-venues", "title": "Outdoor Exhibition Venues", "slug": "outdoor-exhibition-venues" },
                    { "id": "expo-centers", "title": "Expo Centers", "slug": "expo-centers" },
                    { "id": "university-campus-venues", "title": "University and Campus Venues", "slug": "university-campus-venues" },
                    { "id": "pavilions", "title": "Pavilions", "slug": "pavilions" },
                    { "id": "industrial-warehouse-venues", "title": "Industrial and Warehouse Venues", "slug": "industrial-warehouse-venues" },
                    { "id": "ballrooms-event-halls", "title": "Ballrooms and Event Halls", "slug": "ballrooms-event-halls" }
                ]
            },
            {
                "id": "wedding-venues",
                "title": "Wedding Venues",
                "slug": "wedding-venues",
                "children": [
                    { "id": "banquet-halls-wedding", "title": "Banquet Halls", "slug": "banquet-halls-wedding" },
                    { "id": "hotels-resorts-wedding", "title": "Hotels and Resorts", "slug": "hotels-resorts-wedding" },
                    { "id": "outdoor-wedding-venues", "title": "Outdoor Venues (Gardens, Parks, Beaches)", "slug": "outdoor-wedding-venues" },
                    { "id": "vineyards-wineries-wedding", "title": "Vineyards and Wineries", "slug": "vineyards-wineries-wedding" },
                    { "id": "rustic-barns", "title": "Rustic Barns", "slug": "rustic-barns" },
                    { "id": "religious-wedding-venues", "title": "Churches and Religious Venues", "slug": "religious-wedding-venues" },
                    { "id": "historical-wedding-venues", "title": "Historical Venues (Castles, Mansions, Museums)", "slug": "historical-wedding-venues" },
                    { "id": "destination-wedding-venues", "title": "Destination Wedding Venues", "slug": "destination-wedding-venues" },
                    { "id": "private-estates", "title": "Private Homes or Estates", "slug": "private-estates" },
                    { "id": "cruise-ship-weddings", "title": "Cruise Ships", "slug": "cruise-ship-weddings" }
                ]
            },
            {
                "id": "sports-arenas-stadiums",
                "title": "Sports Arenas and Stadiums",
                "slug": "sports-arenas-stadiums",
                "children": [
                    { "id": "stadiums", "title": "Stadiums", "slug": "stadiums" },
                    { "id": "arena-sports-venues", "title": "Arena Sports Venues", "slug": "arena-sports-venues" },
                    { "id": "sports-complexes", "title": "Multi-purpose Sports Complexes", "slug": "sports-complexes" },
                    { "id": "football-stadiums", "title": "Football/Soccer Stadiums", "slug": "football-stadiums" },
                    { "id": "baseball-parks", "title": "Baseball Parks", "slug": "baseball-parks" },
                    { "id": "ice-hockey-arenas", "title": "Ice Hockey Arenas", "slug": "ice-hockey-arenas" },
                    { "id": "tennis-stadiums", "title": "Tennis Stadiums", "slug": "tennis-stadiums" },
                    { "id": "track-field-stadiums", "title": "Track and Field Stadiums", "slug": "track-field-stadiums" },
                    { "id": "motorsports-venues", "title": "Motorsports Tracks and Arenas", "slug": "motorsports-venues" },
                    { "id": "cycling-velodromes", "title": "Cycling Velodromes", "slug": "cycling-velodromes" },
                    { "id": "boxing-wrestling-arenas", "title": "Boxing and Wrestling Arenas", "slug": "boxing-wrestling-arenas" },
                    { "id": "esports-arenas", "title": "E-sports Arenas", "slug": "esports-arenas" }
                ]
            },
            {
                "id": "corporate-meeting-rooms",
                "title": "Corporate Meeting Rooms",
                "slug": "corporate-meeting-rooms",
                "children": [
                    { "id": "boardrooms", "title": "Boardrooms", "slug": "boardrooms" },
                    { "id": "conference-rooms", "title": "Conference Rooms", "slug": "conference-rooms" },
                    { "id": "training-rooms", "title": "Training Rooms", "slug": "training-rooms" },
                    { "id": "breakout-rooms", "title": "Breakout Rooms", "slug": "breakout-rooms" },
                    { "id": "huddle-rooms", "title": "Huddle Rooms", "slug": "huddle-rooms" },
                    { "id": "executive-suites", "title": "Executive Suites", "slug": "executive-suites" },
                    { "id": "virtual-meeting-rooms", "title": "Virtual Meeting Rooms", "slug": "virtual-meeting-rooms" },
                    { "id": "webinar-rooms", "title": "Webinar Rooms", "slug": "webinar-rooms" },
                    { "id": "event-spaces", "title": "Event Spaces", "slug": "event-spaces" },
                    { "id": "collaboration-rooms", "title": "Collaboration Rooms", "slug": "collaboration-rooms" },
                    { "id": "auditoriums", "title": "Auditoriums", "slug": "auditoriums" },
                    { "id": "coworking-spaces", "title": "Co-working Spaces", "slug": "coworking-spaces" }
                ]
            },
            {
                "id": "museums-galleries",
                "title": "Museums and Galleries",
                "slug": "museums-galleries",
                "children": [
                    { "id": "art-galleries", "title": "Art Galleries", "slug": "art-galleries" },
                    { "id": "museum-halls", "title": "Museum Halls", "slug": "museum-halls" },
                    { "id": "history-museums", "title": "History Museums", "slug": "history-museums" },
                    { "id": "science-museums", "title": "Science and Technology Museums", "slug": "science-museums" },
                    { "id": "childrens-museums", "title": "Children's Museums", "slug": "childrens-museums" },
                    { "id": "natural-history-museums", "title": "Natural History Museums", "slug": "natural-history-museums" },
                    { "id": "cultural-museums", "title": "Cultural and Ethnographic Museums", "slug": "cultural-museums" },
                    { "id": "contemporary-art-museums", "title": "Contemporary Art Museums", "slug": "contemporary-art-museums" },
                    { "id": "specialty-museums", "title": "Specialty Museums", "slug": "specialty-museums" },
                    { "id": "museum-gardens", "title": "Museum Gardens and Outdoor Spaces", "slug": "museum-gardens" }
                ]
            },
            {
                "id": "nightclubs-bars",
                "title": "Nightclubs and Bars",
                "slug": "nightclubs-bars",
                "children": [
                    { "id": "nightclubs", "title": "Nightclubs", "slug": "nightclubs" },
                    { "id": "lounge-bars", "title": "Lounge Bars", "slug": "lounge-bars" },
                    { "id": "cocktail-bars", "title": "Cocktail Bars", "slug": "cocktail-bars" },
                    { "id": "dive-bars", "title": "Dive Bars", "slug": "dive-bars" },
                    { "id": "sports-bars", "title": "Sports Bars", "slug": "sports-bars" },
                    { "id": "brewpubs", "title": "Brewpubs", "slug": "brewpubs" },
                    { "id": "wine-bars", "title": "Wine Bars", "slug": "wine-bars" },
                    { "id": "karaoke-bars", "title": "Karaoke Bars", "slug": "karaoke-bars" },
                    { "id": "jazz-bars", "title": "Jazz Bars", "slug": "jazz-bars" },
                    { "id": "themed-bars", "title": "Themed Bars", "slug": "themed-bars" },
                    { "id": "rooftop-bars", "title": "Rooftop Bars", "slug": "rooftop-bars" },
                    { "id": "club-lounges", "title": "Club Lounges", "slug": "club-lounges" },
                    { "id": "cigar-bars", "title": "Cigar Bars", "slug": "cigar-bars" }
                ]
            },
            {
                "id": "university-venues",
                "title": "University Campuses and Lecture Halls",
                "slug": "university-venues",
                "children": [
                    { "id": "lecture-halls", "title": "Lecture Halls", "slug": "lecture-halls" },
                    { "id": "seminar-rooms", "title": "Seminar Rooms", "slug": "seminar-rooms" },
                    { "id": "auditoriums-university", "title": "Auditoriums", "slug": "auditoriums-university" },
                    { "id": "classrooms", "title": "Classrooms", "slug": "classrooms" },
                    { "id": "meeting-rooms", "title": "Meeting Rooms", "slug": "meeting-rooms" },
                    { "id": "conference-rooms-university", "title": "Conference Rooms", "slug": "conference-rooms-university" },
                    { "id": "study-halls", "title": "Study Halls", "slug": "study-halls" },
                    { "id": "campus-outdoor-spaces", "title": "Campus Courtyards and Outdoor Spaces", "slug": "campus-outdoor-spaces" },
                    { "id": "student-unions", "title": "Student Unions and Common Areas", "slug": "student-unions" },
                    { "id": "computer-labs", "title": "Computer Labs", "slug": "computer-labs" },
                    { "id": "faculty-offices", "title": "Faculty Offices and Conference Rooms", "slug": "faculty-offices" },
                    { "id": "event-banquet-halls-university", "title": "Event Spaces and Banquet Halls", "slug": "event-banquet-halls-university" }
                ]
            },
            {
                "id": "religious-venues",
                "title": "Religious and Spiritual Venues",
                "slug": "religious-venues",
                "children": [
                    { "id": "churches", "title": "Churches", "slug": "churches" },
                    { "id": "temples", "title": "Temples", "slug": "temples" },
                    { "id": "mosques", "title": "Mosques", "slug": "mosques" },
                    { "id": "synagogues", "title": "Synagogues", "slug": "synagogues" },
                    { "id": "gurdwaras", "title": "Gurdwaras", "slug": "gurdwaras" },
                    { "id": "shrines", "title": "Shrines", "slug": "shrines" },
                    { "id": "ashrams", "title": "Ashrams", "slug": "ashrams" },
                    { "id": "pilgrimage-sites", "title": "Pilgrimage Sites", "slug": "pilgrimage-sites" },
                    { "id": "cathedrals", "title": "Cathedrals", "slug": "cathedrals" },
                    { "id": "meditation-centers", "title": "Meditation Centers", "slug": "meditation-centers" }
                ]
            },
            {
                "id": "vineyards-wineries",
                "title": "Vineyards and Wineries",
                "slug": "vineyards-wineries",
                "children": [
                    { "id": "wine-tasting-rooms", "title": "Wine Tasting Rooms", "slug": "wine-tasting-rooms" },
                    { "id": "barrel-rooms", "title": "Barrel Rooms", "slug": "barrel-rooms" },
                    { "id": "vineyard-outdoor-spaces", "title": "Vineyard Outdoor Spaces", "slug": "vineyard-outdoor-spaces" },
                    { "id": "winery-event-halls", "title": "Winery Event Halls", "slug": "winery-event-halls" },
                    { "id": "estate-grounds", "title": "Estate Grounds and Gardens", "slug": "estate-grounds" },
                    { "id": "wine-cellars", "title": "Wine Cellars", "slug": "wine-cellars" },
                    { "id": "tasting-terraces", "title": "Tasting Terraces or Patios", "slug": "tasting-terraces" },
                    { "id": "winemakers-dinners", "title": "Winemaker’s Dinners", "slug": "winemakers-dinners" },
                    { "id": "winery-courtyards", "title": "Winery Courtyards", "slug": "winery-courtyards" },
                    { "id": "private-vineyards", "title": "Private Vineyards", "slug": "private-vineyards" },
                    { "id": "wine-production-tours", "title": "Wine Production Areas or Winery Tours", "slug": "wine-production-tours" }
                ]
            },
            {
                "id": "coworking-spaces",
                "title": "Coworking Spaces and Innovation Hubs",
                "slug": "coworking-spaces",
                "children": [
                    { "id": "hot-desking", "title": "Hot Desking Spaces", "slug": "hot-desking" },
                    { "id": "dedicated-desks", "title": "Dedicated Desks", "slug": "dedicated-desks" },
                    { "id": "private-offices", "title": "Private Offices", "slug": "private-offices" },
                    { "id": "meeting-rooms-coworking", "title": "Meeting Rooms", "slug": "meeting-rooms-coworking" },
                    { "id": "event-spaces-coworking", "title": "Event Spaces", "slug": "event-spaces-coworking" },
                    { "id": "collaboration-areas", "title": "Collaboration Areas", "slug": "collaboration-areas" },
                    { "id": "innovation-hubs", "title": "Innovation Hubs or Labs", "slug": "innovation-hubs" },
                    { "id": "virtual-offices", "title": "Virtual Offices", "slug": "virtual-offices" },
                    { "id": "community-spaces", "title": "Community Spaces", "slug": "community-spaces" },
                    { "id": "shared-resources", "title": "Shared Resources or Equipment Rooms", "slug": "shared-resources" },
                    { "id": "break-rooms", "title": "Break Rooms and Kitchens", "slug": "break-rooms" }
                ]
            },
            {
                "id": "popup-event-spaces",
                "title": "Pop-Up Event Spaces",
                "slug": "popup-event-spaces",
                "children": [
                    { "id": "retail-popup", "title": "Retail Pop-Up Shops", "slug": "retail-popup" },
                    { "id": "popup-galleries", "title": "Pop-Up Galleries", "slug": "popup-galleries" },
                    { "id": "popup-restaurants", "title": "Pop-Up Restaurants or Cafes", "slug": "popup-restaurants" },
                    { "id": "popup-theaters", "title": "Pop-Up Theaters", "slug": "popup-theaters" },
                    { "id": "popup-marketplaces", "title": "Pop-Up Marketplaces", "slug": "popup-marketplaces" },
                    { "id": "popup-hotels", "title": "Pop-Up Hotels", "slug": "popup-hotels" },
                    { "id": "popup-showrooms", "title": "Pop-Up Showrooms", "slug": "popup-showrooms" },
                    { "id": "popup-fashion", "title": "Pop-Up Fashion Shows", "slug": "popup-fashion" },
                    { "id": "popup-activations", "title": "Pop-Up Experiences/Activations", "slug": "popup-activations" },
                    { "id": "popup-weddings", "title": "Pop-Up Wedding Venues", "slug": "popup-weddings" },
                    { "id": "popup-bars", "title": "Pop-Up Bars or Cocktail Lounges", "slug": "popup-bars" }
                ]
            },
            {
                "id": "golf-country-clubs",
                "title": "Golf Courses and Country Clubs",
                "slug": "golf-country-clubs",
                "children": [
                    { "id": "golf-clubhouses", "title": "Golf Course Clubhouses", "slug": "golf-clubhouses" },
                    { "id": "ballrooms", "title": "Ballrooms", "slug": "ballrooms" },
                    { "id": "outdoor-patios", "title": "Outdoor Patios and Terraces", "slug": "outdoor-patios" },
                    { "id": "golf-grounds", "title": "Golf Course Grounds", "slug": "golf-grounds" },
                    { "id": "meeting-rooms-golf", "title": "Meeting Rooms", "slug": "meeting-rooms-golf" },
                    { "id": "private-dining", "title": "Private Dining Rooms", "slug": "private-dining" },
                    { "id": "tennis-recreation", "title": "Tennis Courts and Recreation Areas", "slug": "tennis-recreation" },
                    { "id": "golf-pro-shops", "title": "Golf Pro Shops", "slug": "golf-pro-shops" },
                    { "id": "driving-ranges", "title": "Golf Course Driving Ranges", "slug": "driving-ranges" }
                ]
            },
            {
                "id": "cultural-community-centers",
                "title": "Cultural and Community Centers",
                "slug": "cultural-community-centers",
                "children": [
                    { "id": "multipurpose-rooms", "title": "Multipurpose Rooms", "slug": "multipurpose-rooms" },
                    { "id": "performance-halls", "title": "Auditoriums or Performance Halls", "slug": "performance-halls" },
                    { "id": "art-exhibition-spaces", "title": "Art Galleries and Exhibition Spaces", "slug": "art-exhibition-spaces" },
                    { "id": "heritage-spaces", "title": "Cultural Heritage or Museum Spaces", "slug": "heritage-spaces" },
                    { "id": "community-halls", "title": "Community Halls", "slug": "community-halls" },
                    { "id": "dance-studios", "title": "Dance Studios or Rehearsal Rooms", "slug": "dance-studios" },
                    { "id": "meeting-conference-rooms", "title": "Meeting and Conference Rooms", "slug": "meeting-conference-rooms" },
                    { "id": "culinary-spaces", "title": "Cooking or Culinary Spaces", "slug": "culinary-spaces" },
                    { "id": "outdoor-courtyards", "title": "Outdoor Courtyards or Gardens", "slug": "outdoor-courtyards" },
                    { "id": "libraries-learning", "title": "Libraries or Learning Centers", "slug": "libraries-learning" },
                    { "id": "wellness-studios", "title": "Yoga and Wellness Studios", "slug": "wellness-studios" }
                ]
            },
            {
                "id": "farms-ranches",
                "title": "Farms and Ranches",
                "slug": "farms-ranches",
                "children": [
                    { "id": "barns-event-halls", "title": "Barns and Event Halls", "slug": "barns-event-halls" },
                    { "id": "outdoor-fields", "title": "Outdoor Fields or Pastures", "slug": "outdoor-fields" },
                    { "id": "farmhouses-retreats", "title": "Farmhouses and Cottage Retreats", "slug": "farmhouses-retreats" },
                    { "id": "paddocks-stables", "title": "Paddocks and Horse Stables", "slug": "paddocks-stables" },
                    { "id": "vineyards-farms", "title": "Vineyards and Wineries", "slug": "vineyards-farms" },
                    { "id": "agriculture-event-spaces", "title": "Agricultural Shows and Exhibition Spaces", "slug": "agriculture-event-spaces" },
                    { "id": "orchards", "title": "Orchards and Fruit Farms", "slug": "orchards" },
                    { "id": "ranch-houses", "title": "Ranch Houses and Lodges", "slug": "ranch-houses" },
                    { "id": "farm-to-table", "title": "Farm-to-Table Dining Venues", "slug": "farm-to-table" },
                    { "id": "animal-farms", "title": "Animal Farms and Petting Zoos", "slug": "animal-farms" },
                    { "id": "farm-lakes", "title": "Lakes and Ponds on Farms", "slug": "farm-lakes" }
                ]
            },

        ]
    },

    // Corporate Gifting
    {
        "id": "corporate-gifting",
        "title": "Corporate Gifting",
        "slug": "corporate-gifting",
        icon: FaGift,
        "children": [
            {
                "id": "branded-corporate-gifts",
                "title": "Branded Corporate Gifts",
                "slug": "branded-corporate-gifts",
                "children": [
                    { "id": "branded-office-supplies", "title": "Branded Office Supplies", "slug": "branded-office-supplies" },
                    { "id": "branded-apparel", "title": "Branded Apparel", "slug": "branded-apparel" },
                    { "id": "branded-drinkware", "title": "Branded Drinkware", "slug": "branded-drinkware" },
                    { "id": "branded-tech-gadgets", "title": "Branded Tech Gadgets", "slug": "branded-tech-gadgets" },
                    { "id": "branded-bags-accessories", "title": "Branded Bags and Accessories", "slug": "branded-bags-accessories" },
                    { "id": "branded-home-living", "title": "Branded Gifts for Home and Living", "slug": "branded-home-living" },
                    { "id": "branded-event-items", "title": "Branded Event Items", "slug": "branded-event-items" },
                    { "id": "branded-eco-products", "title": "Branded Eco-Friendly Products", "slug": "branded-eco-products" },
                    { "id": "branded-food-drink", "title": "Branded Food and Drink", "slug": "branded-food-drink" },
                    { "id": "branded-journals", "title": "Branded Journals and Notebooks", "slug": "branded-journals" },
                    { "id": "branded-fitness-items", "title": "Branded Sports and Fitness Items", "slug": "branded-fitness-items" },
                    { "id": "branded-travel-accessories", "title": "Branded Travel Accessories", "slug": "branded-travel-accessories" },
                    { "id": "branded-personalized-gifts", "title": "Branded Personalized Gifts", "slug": "branded-personalized-gifts" },
                    { "id": "branded-wellness-products", "title": "Branded Health and Wellness Products", "slug": "branded-wellness-products" }
                ]
            },
            {
                "id": "gift-bags-swag-bags",
                "title": "Gift Bags and Swag Bags",
                "slug": "gift-bags-swag-bags",
                "children": [
                    { "id": "standard-swag-bags", "title": "Standard Branded Swag Bags", "slug": "standard-swag-bags" },
                    { "id": "premium-swag-bags", "title": "Premium Swag Bags", "slug": "premium-swag-bags" },
                    { "id": "eco-swag-bags", "title": "Eco-Friendly Swag Bags", "slug": "eco-swag-bags" },
                    { "id": "tech-swag-bags", "title": "Tech-Themed Swag Bags", "slug": "tech-swag-bags" },
                    { "id": "event-swag-bags", "title": "Event-Themed Swag Bags", "slug": "event-swag-bags" },
                    { "id": "luxury-gift-bags", "title": "Luxury Gift Bags", "slug": "luxury-gift-bags" },
                    { "id": "wellness-swag-bags", "title": "Health and Wellness Swag Bags", "slug": "wellness-swag-bags" },
                    { "id": "food-swag-bags", "title": "Food and Beverage Swag Bags", "slug": "food-swag-bags" },
                    { "id": "custom-swag-bags", "title": "Custom Swag Bags", "slug": "custom-swag-bags" },
                    { "id": "seasonal-swag-bags", "title": "Seasonal Swag Bags", "slug": "seasonal-swag-bags" }
                ]
            },
            {
                "id": "employee-appreciation-gifts",
                "title": "Employee Appreciation Gifts",
                "slug": "employee-appreciation-gifts",
                "children": [
                    { "id": "personalized-gifts", "title": "Personalized Gifts", "slug": "personalized-gifts" },
                    { "id": "gift-cards", "title": "Gift Cards and Vouchers", "slug": "gift-cards" },
                    { "id": "custom-apparel", "title": "Custom Apparel", "slug": "custom-apparel" },
                    { "id": "tech-gifts", "title": "Tech Gadgets and Accessories", "slug": "tech-gifts" },
                    { "id": "experience-gifts", "title": "Experience Gifts", "slug": "experience-gifts" },
                    { "id": "wellness-gifts", "title": "Wellness and Self-Care Gifts", "slug": "wellness-gifts" },
                    { "id": "gift-baskets", "title": "Gift Baskets", "slug": "gift-baskets" },
                    { "id": "office-decor", "title": "Office Decor and Supplies", "slug": "office-decor" },
                    { "id": "food-gifts", "title": "Food and Beverage Gifts", "slug": "food-gifts" },
                    { "id": "subscriptions", "title": "Subscriptions and Memberships", "slug": "subscriptions" }
                ]
            },

            {
                "id": "luxury-corporate-gifts",
                "title": "Luxury Corporate Gifts",
                "slug": "luxury-corporate-gifts",
                "children": [
                    { "id": "executive-accessories", "title": "Branded Executive Accessories", "slug": "executive-accessories" },
                    { "id": "luxury-watches", "title": "Luxury Watches", "slug": "luxury-watches" },
                    { "id": "fine-jewelry", "title": "Fine Jewelry", "slug": "fine-jewelry" },
                    { "id": "luxury-leather", "title": "Custom Luxury Leather Goods", "slug": "luxury-leather" },
                    { "id": "gourmet-gifts", "title": "Gourmet Food and Beverage Gifts", "slug": "gourmet-gifts" },
                    { "id": "luxury-tech", "title": "Luxury Tech Gadgets", "slug": "luxury-tech" },
                    { "id": "exclusive-experiences", "title": "Exclusive Experience Gifts", "slug": "exclusive-experiences" },
                    { "id": "art-collectibles", "title": "Art and Collectibles", "slug": "art-collectibles" },
                    { "id": "high-end-travel", "title": "High-End Travel Accessories", "slug": "high-end-travel" },
                    { "id": "luxury-office-decor", "title": "Luxury Office Decor", "slug": "luxury-office-decor" }
                ]
            },
            {
                "id": "tech-gadget-gifts",
                "title": "Tech and Gadget Gifts",
                "slug": "tech-gadget-gifts",
                "children": [
                    { "id": "smartphones-tablets", "title": "Smartphones and Tablets", "slug": "smartphones-tablets" },
                    { "id": "wireless-headphones", "title": "Wireless Headphones and Earbuds", "slug": "wireless-headphones" },
                    { "id": "smartwatches-fitness", "title": "Smartwatches and Fitness Trackers", "slug": "smartwatches-fitness" },
                    { "id": "power-banks", "title": "Portable Chargers and Power Banks", "slug": "power-banks" },
                    { "id": "bluetooth-speakers", "title": "Bluetooth Speakers", "slug": "bluetooth-speakers" },
                    { "id": "laptop-accessories", "title": "Laptop and Tablet Accessories", "slug": "laptop-accessories" },
                    { "id": "smart-home-devices", "title": "Smart Home Devices", "slug": "smart-home-devices" },
                    { "id": "vr-headsets", "title": "Virtual Reality (VR) Headsets", "slug": "vr-headsets" },
                    { "id": "gaming-consoles", "title": "Gaming Consoles and Accessories", "slug": "gaming-consoles" },
                    { "id": "drones", "title": "Drones", "slug": "drones" }
                ]
            },
            {
                "id": "eco-friendly-gifts",
                "title": "Eco-Friendly Gifts",
                "slug": "eco-friendly-gifts",
                "children": [
                    { "id": "reusable-bottles", "title": "Reusable Water Bottles", "slug": "reusable-bottles" },
                    { "id": "eco-stationery", "title": "Eco-Friendly Stationery", "slug": "eco-stationery" },
                    { "id": "biodegradable-cases", "title": "Biodegradable Phone Cases", "slug": "biodegradable-cases" },
                    { "id": "recycled-bags", "title": "Recycled Tote Bags and Shopping Bags", "slug": "recycled-bags" },
                    { "id": "sustainable-clothing", "title": "Sustainable Clothing and Apparel", "slug": "sustainable-clothing" },
                    { "id": "solar-gadgets", "title": "Solar-Powered Gadgets", "slug": "solar-gadgets" },
                    { "id": "plant-based-gifts", "title": "Plant-Based Gifts", "slug": "plant-based-gifts" },
                    { "id": "upcycled-products", "title": "Recycled or Upcycled Products", "slug": "upcycled-products" },
                    { "id": "eco-tech-accessories", "title": "Eco-Friendly Tech Accessories", "slug": "eco-tech-accessories" },
                    { "id": "reusable-cups", "title": "Reusable Coffee Cups and Mugs", "slug": "reusable-cups" }
                ]
            },
            {
                "id": "food-beverage-gifts",
                "title": "Food and Beverage Gifts",
                "slug": "food-beverage-gifts",
                "children": [
                    { "id": "gourmet-baskets", "title": "Gourmet Gift Baskets", "slug": "gourmet-baskets" },
                    { "id": "custom-snacks", "title": "Custom Branded Snacks", "slug": "custom-snacks" },
                    { "id": "wine-champagne", "title": "Wine and Champagne Gifts", "slug": "wine-champagne" },
                    { "id": "artisanal-food", "title": "Artisanal and Local Food Gifts", "slug": "artisanal-food" },
                    { "id": "gourmet-chocolates", "title": "Gourmet Chocolates", "slug": "gourmet-chocolates" },
                    { "id": "coffee-tea", "title": "Coffee and Tea Gifts", "slug": "coffee-tea" },
                    { "id": "healthy-snacks", "title": "Healthy Snack Packs", "slug": "healthy-snacks" },
                    { "id": "baked-goods", "title": "Baked Goods and Cookies", "slug": "baked-goods" },
                    { "id": "luxury-food", "title": "Luxury Food Gifts", "slug": "luxury-food" },
                    { "id": "breakfast-sets", "title": "Breakfast Gift Sets", "slug": "breakfast-sets" }
                ]
            },
            {
                "id": "experience-based-gifts",
                "title": "Experience-Based Gifts",
                "slug": "experience-based-gifts",
                "children": [
                    { "id": "travel-packages", "title": "Travel and Vacation Packages", "slug": "travel-packages" },
                    { "id": "event-tickets", "title": "Concert and Event Tickets", "slug": "event-tickets" },
                    { "id": "adventure-experiences", "title": "Adventure and Outdoor Experiences", "slug": "adventure-experiences" },
                    { "id": "fine-dining", "title": "Fine Dining and Gourmet Experiences", "slug": "fine-dining" },
                    { "id": "spa-retreats", "title": "Spa and Wellness Retreats", "slug": "spa-retreats" },
                    { "id": "adventure-sports", "title": "Adventure Sports and Recreation", "slug": "adventure-sports" },
                    { "id": "cultural-experiences", "title": "Art and Cultural Experiences", "slug": "cultural-experiences" },
                    { "id": "cooking-experiences", "title": "Cooking or Culinary Experiences", "slug": "cooking-experiences" },
                    { "id": "theme-park-tickets", "title": "Tickets for Theme Parks or Attractions", "slug": "theme-park-tickets" },
                    { "id": "virtual-experiences", "title": "Virtual Experiences and Online Classes", "slug": "virtual-experiences" }
                ]
            },
            {
                "id": "customized-gifts",
                "title": "Customized Gifts",
                "slug": "customized-gifts",
                "children": [
                    { "id": "custom-apparel-gifts", "title": "Branded Apparel and Clothing", "slug": "custom-apparel-gifts" },
                    { "id": "personalized-office", "title": "Personalized Office Supplies", "slug": "personalized-office" },
                    { "id": "custom-drinkware", "title": "Customized Drinkware", "slug": "custom-drinkware" },
                    { "id": "engraved-gifts", "title": "Engraved or Monogrammed Gifts", "slug": "engraved-gifts" },
                    { "id": "custom-tech", "title": "Custom Tech Gadgets and Accessories", "slug": "custom-tech" },
                    { "id": "personalized-bags", "title": "Personalized Bags and Luggage", "slug": "personalized-bags" },
                    { "id": "corporate-awards", "title": "Customized Corporate Awards and Trophies", "slug": "corporate-awards" },
                    { "id": "gift-boxes", "title": "Personalized Gift Boxes or Hampers", "slug": "gift-boxes" },
                    { "id": "custom-stationery", "title": "Customized Stationery Sets", "slug": "custom-stationery" },
                    { "id": "custom-food", "title": "Customized Food and Beverage Gifts", "slug": "custom-food" }
                ]
            },
            {
                "id": "wellness-selfcare-gifts",
                "title": "Wellness and Self-Care Gifts",
                "slug": "wellness-selfcare-gifts",
                "children": [
                    { "id": "spa-kits", "title": "Spa and Relaxation Kits", "slug": "spa-kits" },
                    { "id": "yoga-accessories", "title": "Yoga and Meditation Accessories", "slug": "yoga-accessories" },
                    { "id": "fitness-gifts", "title": "Fitness and Active Lifestyle Gifts", "slug": "fitness-gifts" },
                    { "id": "healthy-treats", "title": "Healthy Snacks and Gourmet Treats", "slug": "healthy-treats" },
                    { "id": "stress-relief", "title": "Stress Relief and Relaxation Tools", "slug": "stress-relief" },
                    { "id": "sleep-aids", "title": "Sleep and Rest Aids", "slug": "sleep-aids" },
                    { "id": "mindfulness-gifts", "title": "Mindfulness and Journaling Gifts", "slug": "mindfulness-gifts" },
                    { "id": "aromatherapy", "title": "Aromatherapy and Scented Products", "slug": "aromatherapy" },
                    { "id": "hydration-accessories", "title": "Hydration and Water Accessories", "slug": "hydration-accessories" },
                    { "id": "selfcare-subscriptions", "title": "Self-Care Subscription Boxes", "slug": "selfcare-subscriptions" }
                ]
            },
            {
                "id": "event-specific-gifts",
                "title": "Event-Specific Gifts",
                "slug": "event-specific-gifts",
                "children": [
                    { "id": "conference-gifts", "title": "Conference and Seminar Gifts", "slug": "conference-gifts" },
                    { "id": "expo-gifts", "title": "Trade Show and Expo Gifts", "slug": "expo-gifts" },
                    { "id": "launch-gifts", "title": "Product Launch Gifts", "slug": "launch-gifts" },
                    { "id": "award-gifts", "title": "Award Ceremony Gifts", "slug": "award-gifts" },
                    { "id": "team-building-gifts", "title": "Team-Building Event Gifts", "slug": "team-building-gifts" },
                    { "id": "holiday-gifts", "title": "Holiday and Seasonal Event Gifts", "slug": "holiday-gifts" },
                    { "id": "client-gifts", "title": "Client Appreciation Event Gifts", "slug": "client-gifts" },
                    { "id": "milestone-gifts", "title": "Employee Milestone Gifts", "slug": "milestone-gifts" },
                    { "id": "charity-event-gifts", "title": "Fundraiser or Charity Event Gifts", "slug": "charity-event-gifts" },
                    { "id": "kickoff-gifts", "title": "Launch or Kickoff Event Gifts", "slug": "kickoff-gifts" }
                ]
            },
            {
                "id": "travel-leisure-gifts",
                "title": "Travel and Leisure Gifts",
                "slug": "travel-leisure-gifts",
                "children": [
                    { "id": "travel-accessories", "title": "Travel Accessories", "slug": "travel-accessories" },
                    { "id": "travel-bags", "title": "Travel Bags and Luggage", "slug": "travel-bags" },
                    { "id": "portable-tech", "title": "Portable Tech Gadgets", "slug": "portable-tech" },
                    { "id": "travel-comfort", "title": "Travel Comfort Gifts", "slug": "travel-comfort" },
                    { "id": "travel-gift-cards", "title": "Gift Cards for Travel or Leisure Experiences", "slug": "travel-gift-cards" },
                    { "id": "travel-journals", "title": "Travel Journals and Notebooks", "slug": "travel-journals" },
                    { "id": "travel-subscriptions", "title": "Travel and Leisure Subscription Boxes", "slug": "travel-subscriptions" },
                    { "id": "travel-gift-sets", "title": "Travel Gift Sets", "slug": "travel-gift-sets" },
                    { "id": "adventure-gifts", "title": "Adventure and Outdoor Gifts", "slug": "adventure-gifts" },
                    { "id": "luxury-travel", "title": "Luxury Travel Accessories", "slug": "luxury-travel" }
                ]
            },
            {
                "id": "charity-donation-gifts",
                "title": "Charity Donations in Recipient’s Name",
                "slug": "charity-donation-gifts",
                "children": [
                    { "id": "general-donations", "title": "General Charity Donations", "slug": "general-donations" },
                    { "id": "cause-specific", "title": "Cause-Specific Donations", "slug": "cause-specific" },
                    { "id": "local-donations", "title": "Local or Community-Based Donations", "slug": "local-donations" },
                    { "id": "nonprofit-sponsorships", "title": "Nonprofit Sponsorships in Name", "slug": "nonprofit-sponsorships" },
                    { "id": "matching-gifts", "title": "Matching Gift Donations", "slug": "matching-gifts" },
                    { "id": "micro-donations", "title": "Micro-Donations or Crowdfunding Contributions", "slug": "micro-donations" },
                    { "id": "eco-donations", "title": "Sustainable or Eco-Friendly Donations", "slug": "eco-donations" },
                    { "id": "charity-vouchers", "title": "Charity Gift Vouchers", "slug": "charity-vouchers" },
                    { "id": "disaster-relief", "title": "Disaster Relief Donations", "slug": "disaster-relief" },
                    { "id": "charity-choice", "title": "Charity of Choice", "slug": "charity-choice" }
                ]
            },
            {
                "id": "subscription-gifts",
                "title": "Subscription-Based Gifts",
                "slug": "subscription-gifts",
                "children": [
                    { "id": "subscription-boxes", "title": "Subscription Boxes", "slug": "subscription-boxes" },
                    { "id": "magazine-subscriptions", "title": "Magazine or Digital Subscriptions", "slug": "magazine-subscriptions" },
                    { "id": "streaming-subscriptions", "title": "Streaming Services Subscriptions", "slug": "streaming-subscriptions" },
                    { "id": "coffee-subscriptions", "title": "Coffee or Tea Subscriptions", "slug": "coffee-subscriptions" },
                    { "id": "wine-subscriptions", "title": "Wine or Alcohol Subscriptions", "slug": "wine-subscriptions" },
                    { "id": "fitness-subscriptions", "title": "Fitness & Health Subscriptions", "slug": "fitness-subscriptions" },
                    { "id": "book-clubs", "title": "Book Club Subscriptions", "slug": "book-clubs" },
                    { "id": "pet-subscriptions", "title": "Pet Subscription Boxes", "slug": "pet-subscriptions" },
                    { "id": "travel-subscriptions", "title": "Travel & Adventure Subscriptions", "slug": "travel-subscriptions" },
                    { "id": "eco-subscriptions", "title": "Sustainable & Eco-Friendly Subscriptions", "slug": "eco-subscriptions" }
                ]
            }
        ]
    },

    // Transport Booging
    {
        "id": "transport-booking",
        "title": "Transport Booking",
        "slug": "transport-booking",
        icon: FaTruck,
        "children": [
            {
                "id": "guest-transportation-services",
                "title": "Guest Transportation Services",
                "slug": "guest-transportation-services",
                "children": [
                    {
                        "id": "airport-transfer-services",
                        "title": "Airport Transfer Services",
                        "slug": "airport-transfer-services",
                        "children": [
                            { "id": "shared-shuttle", "title": "Shared Shuttle Services", "slug": "shared-shuttle" },
                            { "id": "private-airport-transfer", "title": "Private Airport Transfers", "slug": "private-airport-transfer" },
                            { "id": "executive-car", "title": "Executive Car Services", "slug": "executive-car" },
                            { "id": "minivan-transfer", "title": "Minivan or Minibus Transfers", "slug": "minivan-transfer" },
                            { "id": "limousine-services", "title": "Luxury Limousine Services", "slug": "limousine-services" },
                            { "id": "taxi-services", "title": "Taxi Services", "slug": "taxi-services" },
                            { "id": "ride-hailing", "title": "Ride-Hailing Services", "slug": "ride-hailing" },
                            { "id": "shuttle-bus", "title": "Shuttle Bus Services", "slug": "shuttle-bus" },
                            { "id": "meet-greet", "title": "Meet and Greet Airport Transfer", "slug": "meet-greet" },
                            { "id": "chauffeur-airport", "title": "Chauffeur-Driven Airport Transfers", "slug": "chauffeur-airport" },
                            { "id": "group-airport-transfer", "title": "Group Airport Transfers", "slug": "group-airport-transfer" },
                            { "id": "luxury-bus-transfer", "title": "Luxury Bus or Coach Transfers", "slug": "luxury-bus-transfer" },
                            { "id": "non-stop-transfer", "title": "Non-Stop Airport Transfer Services", "slug": "non-stop-transfer" }
                        ]
                    },
                    {
                        "id": "hotel-shuttle-services",
                        "title": "Hotel Shuttle Services",
                        "slug": "hotel-shuttle-services",
                        "children": [
                            { "id": "airport-shuttle-hotel", "title": "Airport Shuttle Services", "slug": "airport-shuttle-hotel" },
                            { "id": "private-hotel-shuttle", "title": "Private Hotel Shuttle Services", "slug": "private-hotel-shuttle" },
                            { "id": "city-shuttle", "title": "City Center Shuttle Services", "slug": "city-shuttle" },
                            { "id": "event-shuttle", "title": "Event or Conference Shuttle Services", "slug": "event-shuttle" },
                            { "id": "complimentary-shuttle", "title": "Complimentary Hotel Shuttle Services", "slug": "complimentary-shuttle" },
                            { "id": "scheduled-shuttle", "title": "Scheduled Shuttle Services", "slug": "scheduled-shuttle" },
                            { "id": "luxury-shuttle", "title": "Luxury Hotel Shuttle Services", "slug": "luxury-shuttle" },
                            { "id": "tourist-shuttle", "title": "Tourist Shuttle Services", "slug": "tourist-shuttle" },
                            { "id": "custom-hotel-shuttle", "title": "Customizable Hotel Shuttle Services", "slug": "custom-hotel-shuttle" },
                            { "id": "group-shuttle", "title": "Shuttle Services for Large Groups", "slug": "group-shuttle" },
                            { "id": "late-night-shuttle", "title": "Late-Night Shuttle Services", "slug": "late-night-shuttle" },
                            { "id": "eco-shuttle", "title": "Eco-Friendly Shuttle Services", "slug": "eco-shuttle" },
                            { "id": "seasonal-shuttle", "title": "Seasonal Shuttle Services", "slug": "seasonal-shuttle" },
                            { "id": "hotel-to-hotel", "title": "Hotel-to-Hotel Shuttle Services", "slug": "hotel-to-hotel" }
                        ]
                    },
                    { "id": "chauffeur-services", "title": "Luxury Chauffeur Services", "slug": "chauffeur-services" },
                    { "id": "private-car-rental", "title": "Private Car Rental with Driver", "slug": "private-car-rental" },
                    { "id": "group-transport", "title": "Group Transportation Services", "slug": "group-transport" },
                    { "id": "event-transport", "title": "Event Transportation Services", "slug": "event-transport" },
                    { "id": "corporate-transport", "title": "Corporate Transportation Services", "slug": "corporate-transport" },
                    { "id": "cruise-transfer", "title": "Cruise Ship Transfer Services", "slug": "cruise-transfer" },
                    { "id": "tour-bus", "title": "Tour Bus and Sightseeing Services", "slug": "tour-bus" },
                    { "id": "wedding-transport", "title": "Wedding Transportation Services", "slug": "wedding-transport" },
                    { "id": "shuttle-bus-services", "title": "Shuttle Bus Services", "slug": "shuttle-bus-services" },
                    { "id": "vip-transport", "title": "VIP and Executive Transport Services", "slug": "vip-transport" },
                    { "id": "rail-transfer", "title": "Train and Rail Transfer Services", "slug": "rail-transfer" },
                    { "id": "airport-concierge", "title": "Airport Concierge and Fast Track Services", "slug": "airport-concierge" },
                    { "id": "limo-party-bus", "title": "Limo Bus and Party Bus Services", "slug": "limo-party-bus" },
                    { "id": "eco-transport", "title": "Sustainable or Eco-Friendly Transportation Services", "slug": "eco-transport" }
                ]
            },
            {
                "id": "airport-transfers",
                "title": "Airport Transfers",
                "slug": "airport-transfers",
                "children": [
                    { "id": "private-airport", "title": "Private Airport Transfers", "slug": "private-airport" },
                    { "id": "shared-airport", "title": "Shared Airport Transfers", "slug": "shared-airport" },
                    { "id": "airport-shuttle", "title": "Airport Shuttle Services", "slug": "airport-shuttle" },
                    { "id": "luxury-airport", "title": "Luxury Airport Transfers", "slug": "luxury-airport" },
                    { "id": "minibus-airport", "title": "Minivan or Minibus Airport Transfers", "slug": "minibus-airport" },
                    { "id": "corporate-airport", "title": "Executive Airport Transfers", "slug": "corporate-airport" },
                    { "id": "vip-airport", "title": "VIP Airport Transfers", "slug": "vip-airport" },
                    { "id": "group-airport", "title": "Group Airport Transfers", "slug": "group-airport" },
                    { "id": "budget-airport", "title": "Budget Airport Transfers", "slug": "budget-airport" },
                    { "id": "express-airport", "title": "Express Airport Transfers", "slug": "express-airport" },
                    { "id": "accessible-airport", "title": "Accessible Airport Transfers", "slug": "accessible-airport" },
                    { "id": "helicopter-transfer", "title": "Helicopter Transfers", "slug": "helicopter-transfer" },
                    { "id": "private-jet-transfer", "title": "Private Jet Transfers", "slug": "private-jet-transfer" },
                    { "id": "tourist-airport", "title": "Tourist Airport Transfers", "slug": "tourist-airport" }
                ]
            },
            {
                "id": "staff-crew-transport",
                "title": "Staff and Crew Transport",
                "slug": "staff-crew-transport",
                "children": [
                    { "id": "private-crew", "title": "Private Crew Transport", "slug": "private-crew" },
                    { "id": "staff-shuttle", "title": "Shuttle Services for Staff", "slug": "staff-shuttle" },
                    { "id": "group-crew", "title": "Group Transport for Crew", "slug": "group-crew" },
                    { "id": "crew-vans", "title": "Crew Vans or Minibuses", "slug": "crew-vans" },
                    { "id": "luxury-crew", "title": "Luxury Transport for Crew", "slug": "luxury-crew" },
                    { "id": "production-crew", "title": "Production Crew Transport", "slug": "production-crew" },
                    { "id": "event-crew", "title": "Event Crew Transport", "slug": "event-crew" },
                    { "id": "crew-airport", "title": "Airport Transfers for Crew", "slug": "crew-airport" },
                    { "id": "long-distance-crew", "title": "Long-Distance Crew Transport", "slug": "long-distance-crew" },
                    { "id": "contract-staff", "title": "Contracted Staff Transportation", "slug": "contract-staff" }
                ]
            },
            {
                "id": "cargo-transport",
                "title": "Equipment and Cargo Transport",
                "slug": "cargo-transport",
                "children": [
                    { "id": "road-freight", "title": "Road Freight", "slug": "road-freight" },
                    { "id": "heavy-equipment", "title": "Heavy Equipment Transport", "slug": "heavy-equipment" },
                    { "id": "flatbed-truck", "title": "Flatbed Truck Transport", "slug": "flatbed-truck" },
                    { "id": "refrigerated-cargo", "title": "Refrigerated Cargo Transport", "slug": "refrigerated-cargo" },
                    { "id": "container-transport", "title": "Containerized Cargo Transport", "slug": "container-transport" },
                    { "id": "air-freight", "title": "Air Freight Transport", "slug": "air-freight" },
                    { "id": "rail-freight", "title": "Rail Freight Transport", "slug": "rail-freight" },
                    { "id": "liquid-transport", "title": "Liquid Bulk Transport", "slug": "liquid-transport" },
                    { "id": "project-cargo", "title": "Project Cargo Transport", "slug": "project-cargo" },
                    { "id": "breakbulk", "title": "Breakbulk Cargo Transport", "slug": "breakbulk" }
                ]
            },
            {
                "id": "vip-transport-services",
                "title": "VIP Transport Services",
                "slug": "vip-transport-services",
                "children": [
                    { "id": "private-chauffeur-vip", "title": "Private Chauffeur Services", "slug": "private-chauffeur-vip" },
                    { "id": "limousine-vip", "title": "Luxury Limousine Services", "slug": "limousine-vip" },
                    { "id": "luxury-car-services", "title": "Luxury Car Services", "slug": "luxury-car-services" },
                    { "id": "helicopter-vip", "title": "Helicopter Transfers", "slug": "helicopter-vip" },
                    { "id": "private-jet-charter", "title": "Private Jet Charter Services", "slug": "private-jet-charter" },
                    { "id": "yacht-transfers", "title": "Yacht or Boat Transfers", "slug": "yacht-transfers" },
                    { "id": "luxury-coach-hire", "title": "Luxury Bus and Coach Hire", "slug": "luxury-coach-hire" },
                    { "id": "airport-vip-transfer", "title": "Airport VIP Transfers", "slug": "airport-vip-transfer" },
                    { "id": "executive-travel", "title": "Executive and Business Travel Services", "slug": "executive-travel" },
                    { "id": "red-carpet-transport", "title": "Red Carpet and Event VIP Transport", "slug": "red-carpet-transport" },
                    { "id": "luxury-suv", "title": "Luxury SUV Services", "slug": "luxury-suv" },
                    { "id": "custom-vip-tours", "title": "Custom VIP Tours", "slug": "custom-vip-tours" }
                ]
            },
            {
                "id": "shuttle-bus-services",
                "title": "Shuttle Bus Services",
                "slug": "shuttle-bus-services",
                "children": [
                    { "id": "airport-shuttle-services", "title": "Airport Shuttle Services", "slug": "airport-shuttle-services" },
                    { "id": "hotel-shuttle-services", "title": "Hotel Shuttle Services", "slug": "hotel-shuttle-services" },
                    { "id": "corporate-shuttle", "title": "Corporate Shuttle Services", "slug": "corporate-shuttle" },
                    { "id": "event-shuttle-services", "title": "Event Shuttle Services", "slug": "event-shuttle-services" },
                    { "id": "cruise-shuttle", "title": "Cruise Terminal Shuttle Services", "slug": "cruise-shuttle" },
                    { "id": "campus-shuttle", "title": "Campus Shuttle Services", "slug": "campus-shuttle" },
                    { "id": "park-ride", "title": "Park-and-Ride Shuttle Services", "slug": "park-ride" },
                    { "id": "tourist-shuttle-services", "title": "Tourist Shuttle Services", "slug": "tourist-shuttle-services" },
                    { "id": "hospital-shuttle", "title": "Hospital Shuttle Services", "slug": "hospital-shuttle" },
                    { "id": "employee-shuttle", "title": "Employee Transportation Shuttle Services", "slug": "employee-shuttle" }
                ]
            },
            {
                "id": "on-demand-ride-services",
                "title": "On-Demand Ride Services",
                "slug": "on-demand-ride-services",
                "children": [
                    { "id": "ride-sharing", "title": "Ride-Sharing Services", "slug": "ride-sharing" },
                    { "id": "private-car-hire", "title": "Private Car Hire", "slug": "private-car-hire" },
                    { "id": "luxury-rides", "title": "Luxury Ride Services", "slug": "luxury-rides" },
                    { "id": "carpooling", "title": "Carpooling Services", "slug": "carpooling" },
                    { "id": "ev-rides", "title": "Electric Vehicle Ride Services", "slug": "ev-rides" },
                    { "id": "suv-rides", "title": "Minivan or SUV Ride Services", "slug": "suv-rides" },
                    { "id": "taxi-alternatives", "title": "Taxi Alternative Services", "slug": "taxi-alternatives" },
                    { "id": "pet-friendly-rides", "title": "Pet-Friendly Ride Services", "slug": "pet-friendly-rides" },
                    { "id": "airport-rides", "title": "Airport Ride Services", "slug": "airport-rides" },
                    { "id": "hourly-car-hire", "title": "Hourly Car Hire Services", "slug": "hourly-car-hire" }
                ]
            },
            {
                "id": "eco-friendly-transport",
                "title": "Bicycle or Eco-Friendly Transport",
                "slug": "eco-friendly-transport",
                "children": [
                    { "id": "bike-sharing", "title": "Bike Sharing Services", "slug": "bike-sharing" },
                    { "id": "electric-bike", "title": "Electric Bike Sharing Services", "slug": "electric-bike" },
                    { "id": "electric-scooter", "title": "Electric Scooter Sharing Services", "slug": "electric-scooter" },
                    { "id": "cargo-bike", "title": "Cargo Bike Rentals", "slug": "cargo-bike" },
                    { "id": "bike-tours", "title": "Bike Tours", "slug": "bike-tours" },
                    { "id": "bike-ride-programs", "title": "Bike and Ride Programs", "slug": "bike-ride-programs" },
                    { "id": "pedal-assist", "title": "Pedal-Assist Bicycle Rentals", "slug": "pedal-assist" },
                    { "id": "bike-delivery", "title": "Bike Delivery Services", "slug": "bike-delivery" },
                    { "id": "cargo-ebike", "title": "Cargo E-Bike Services", "slug": "cargo-ebike" }
                ]
            },
            {
                "id": "luxury-coaches",
                "title": "Luxury Coaches for Large-Scale Events",
                "slug": "luxury-coaches",
                "children": [
                    { "id": "vip-coaches", "title": "VIP Luxury Coaches", "slug": "vip-coaches" },
                    { "id": "executive-coaches", "title": "Executive Coaches", "slug": "executive-coaches" },
                    { "id": "double-decker", "title": "Luxury Double-Decker Coaches", "slug": "double-decker" },
                    { "id": "touring-coaches", "title": "Touring Coaches", "slug": "touring-coaches" },
                    { "id": "charter-coaches", "title": "Charter Luxury Coaches", "slug": "charter-coaches" },
                    { "id": "wedding-coaches", "title": "Wedding Luxury Coaches", "slug": "wedding-coaches" },
                    { "id": "shuttle-coaches", "title": "Shuttle Luxury Coaches", "slug": "shuttle-coaches" },
                    { "id": "conference-coaches", "title": "Conference Event Coaches", "slug": "conference-coaches" },
                    { "id": "corporate-coaches", "title": "Corporate Event Coaches", "slug": "corporate-coaches" },
                    { "id": "sports-coaches", "title": "Sports Event Coaches", "slug": "sports-coaches" },
                    { "id": "vip-catering-coach", "title": "VIP Coach with Catering", "slug": "vip-catering-coach" }
                ]
            },
            {
                "id": "public-transport",
                "title": "Public Transportation Arrangements",
                "slug": "public-transport",
                "children": [
                    {
                        "id": "bus-services",
                        "title": "Bus Services",
                        "slug": "bus-services",
                        "children": [
                            { "id": "city-bus", "title": "City Bus Services", "slug": "city-bus" },
                            { "id": "intercity-bus", "title": "Intercity Bus Services", "slug": "intercity-bus" },
                            { "id": "express-bus", "title": "Express Bus Services", "slug": "express-bus" },
                            { "id": "shuttle-bus-public", "title": "Shuttle Bus Services", "slug": "shuttle-bus-public" },
                            { "id": "tourist-bus", "title": "Tourist Bus Services", "slug": "tourist-bus" },
                            { "id": "school-bus", "title": "School Bus Services", "slug": "school-bus" },
                            { "id": "night-bus", "title": "Night Bus Services", "slug": "night-bus" },
                            { "id": "double-decker-bus", "title": "Double-Decker Bus Services", "slug": "double-decker-bus" },
                            { "id": "drt-bus", "title": "Demand-Responsive Bus Services", "slug": "drt-bus" },
                            { "id": "special-needs-bus", "title": "Special Needs Bus Services", "slug": "special-needs-bus" },
                            { "id": "expressway-bus", "title": "Expressway Bus Services", "slug": "expressway-bus" }
                        ]
                    },
                    {
                        "id": "tram-services",
                        "title": "Tram and Trolleybus Services",
                        "slug": "tram-services",
                        "children": [
                            { "id": "city-tram", "title": "City Tram Services", "slug": "city-tram" },
                            { "id": "interurban-tram", "title": "Interurban Tram Services", "slug": "interurban-tram" },
                            { "id": "heritage-tram", "title": "Heritage Trams", "slug": "heritage-tram" },
                            { "id": "tourist-tram", "title": "Tourist Trams", "slug": "tourist-tram" },
                            { "id": "high-speed-tram", "title": "High-Speed Trams", "slug": "high-speed-tram" },
                            { "id": "trolleybus-city", "title": "City Trolleybus Services", "slug": "trolleybus-city" },
                            { "id": "trolleybus-suburban", "title": "Suburban Trolleybus Services", "slug": "trolleybus-suburban" },
                            { "id": "dedicated-trolleybus", "title": "Dedicated Route Trolleybus Services", "slug": "dedicated-trolleybus" },
                            { "id": "airport-trolleybus", "title": "Airport Trolleybus Services", "slug": "airport-trolleybus" },
                            { "id": "hybrid-trolleybus", "title": "Hybrid Trolleybus Services", "slug": "hybrid-trolleybus" },
                            { "id": "tourist-trolleybus", "title": "Tourist Trolleybus Services", "slug": "tourist-trolleybus" }
                        ]
                    },
                    {
                        "id": "metro-systems",
                        "title": "Metro/Subway Systems",
                        "slug": "metro-systems",
                        "children": [
                            { "id": "heavy-rail", "title": "Heavy Rail Metro Systems", "slug": "heavy-rail" },
                            { "id": "light-rail", "title": "Light Rail Metro Systems", "slug": "light-rail" },
                            { "id": "apm-systems", "title": "Automated People Mover Systems", "slug": "apm-systems" },
                            { "id": "commuter-rail", "title": "Commuter Rail Systems", "slug": "commuter-rail" },
                            { "id": "maglev", "title": "Maglev Systems", "slug": "maglev" },
                            { "id": "hybrid-metro", "title": "Hybrid Metro Systems", "slug": "hybrid-metro" },
                            { "id": "underground-metro", "title": "Underground Subway Systems", "slug": "underground-metro" },
                            { "id": "elevated-metro", "title": "Elevated Metro Systems", "slug": "elevated-metro" },
                            { "id": "rapid-transit", "title": "Rapid Transit Systems", "slug": "rapid-transit" },
                            { "id": "tram-metro", "title": "Tram-Metro Hybrid Systems", "slug": "tram-metro" }
                        ]
                    }
                ]
            },
            {
                "id": "train-services",
                "title": "Train Services",
                "slug": "train-services",
                "children": [
                    { "id": "high-speed-trains", "title": "High-Speed Trains", "slug": "high-speed-trains" },
                    { "id": "intercity-trains", "title": "Intercity Trains", "slug": "intercity-trains" },
                    { "id": "regional-trains", "title": "Regional Trains", "slug": "regional-trains" },
                    { "id": "commuter-trains", "title": "Commuter Trains", "slug": "commuter-trains" },
                    { "id": "express-trains", "title": "Express Trains", "slug": "express-trains" },
                    { "id": "night-trains", "title": "Night Trains", "slug": "night-trains" },
                    { "id": "regional-express", "title": "Regional Express Trains", "slug": "regional-express" },
                    { "id": "light-rail", "title": "Light Rail Trains", "slug": "light-rail" },
                    { "id": "shuttle-trains", "title": "Shuttle Trains", "slug": "shuttle-trains" },
                    { "id": "tourist-trains", "title": "Tourist Trains", "slug": "tourist-trains" },
                    { "id": "freight-trains", "title": "Freight Trains", "slug": "freight-trains" }
                ]
            },
            {
                "id": "ferry-services",
                "title": "Ferry and Boat Services",
                "slug": "ferry-services",
                "children": [
                    { "id": "passenger-ferries", "title": "Passenger Ferries", "slug": "passenger-ferries" },
                    { "id": "vehicle-ferries", "title": "Vehicle Ferries", "slug": "vehicle-ferries" },
                    { "id": "roro-ferries", "title": "Ro-Ro Ferries", "slug": "roro-ferries" },
                    { "id": "hydrofoils", "title": "Hydrofoils", "slug": "hydrofoils" },
                    { "id": "catamarans", "title": "Catamarans", "slug": "catamarans" },
                    { "id": "combo-ferries", "title": "Car/Passenger Combo Ferries", "slug": "combo-ferries" },
                    { "id": "passenger-boats", "title": "Passenger-only Boats", "slug": "passenger-boats" },
                    { "id": "floating-bridges", "title": "Floating Bridges", "slug": "floating-bridges" },
                    { "id": "luxury-ferries", "title": "Luxury Ferries", "slug": "luxury-ferries" },
                    { "id": "tourist-ferries", "title": "Tourist Ferries", "slug": "tourist-ferries" },
                    { "id": "cargo-ferries", "title": "Cargo Ferries", "slug": "cargo-ferries" },
                    { "id": "island-ferries", "title": "Island Hopping Ferries", "slug": "island-ferries" }
                ]
            },
            {
                "id": "public-ridesharing",
                "title": "Ride-Sharing Programs",
                "slug": "public-ridesharing",
                "children": [
                    { "id": "carpooling", "title": "Carpooling", "slug": "carpooling" },
                    { "id": "ride-hailing-public", "title": "Ride-Hailing", "slug": "ride-hailing-public" },
                    { "id": "vanpooling", "title": "Vanpooling", "slug": "vanpooling" },
                    { "id": "car-sharing", "title": "Car-Sharing", "slug": "car-sharing" },
                    { "id": "shared-taxis", "title": "Shared Taxis", "slug": "shared-taxis" },
                    { "id": "public-rideshare-programs", "title": "Public Ride-Sharing Programs", "slug": "public-rideshare-programs" },
                    { "id": "bike-sharing", "title": "Bike-Sharing", "slug": "bike-sharing" },
                    { "id": "specialized-rideshare", "title": "Ride-Sharing for Specialized Groups", "slug": "specialized-rideshare" },
                    { "id": "on-demand-shuttle", "title": "On-Demand Shuttle Services", "slug": "on-demand-shuttle" },
                    { "id": "escooter-ebike-sharing", "title": "Electric Scooter & E-Bike Sharing", "slug": "escooter-ebike-sharing" }
                ]
            },
            {
                "id": "public-shuttle-services",
                "title": "Shuttle Bus Services",
                "slug": "public-shuttle-services",
                "children": [
                    { "id": "airport-shuttle-public", "title": "Airport Shuttle Services", "slug": "airport-shuttle-public" },
                    { "id": "hotel-shuttle-public", "title": "Hotel Shuttle Services", "slug": "hotel-shuttle-public" },
                    { "id": "corporate-shuttle-public", "title": "Corporate Shuttle Services", "slug": "corporate-shuttle-public" },
                    { "id": "campus-shuttle-public", "title": "Campus Shuttle Services", "slug": "campus-shuttle-public" },
                    { "id": "public-shuttle", "title": "Public Shuttle Bus Services", "slug": "public-shuttle" },
                    { "id": "tourist-shuttle-public", "title": "Tourist Shuttle Services", "slug": "tourist-shuttle-public" },
                    { "id": "convention-shuttle", "title": "Convention Center Shuttle Services", "slug": "convention-shuttle" },
                    { "id": "park-ride-public", "title": "Park-and-Ride Shuttle Services", "slug": "park-ride-public" },
                    { "id": "seasonal-shuttle-public", "title": "Seasonal Shuttle Services", "slug": "seasonal-shuttle-public" },
                    { "id": "microtransit", "title": "On-Demand Shuttle (Microtransit)", "slug": "microtransit" },
                    { "id": "cruise-shuttle-public", "title": "Cruise Ship Shuttle Services", "slug": "cruise-shuttle-public" },
                    { "id": "festival-shuttle", "title": "Event and Festival Shuttle Services", "slug": "festival-shuttle" }
                ]
            },
            {
                "id": "cable-car-funicular",
                "title": "Cable Cars and Funiculars",
                "slug": "cable-car-funicular",
                "children": [
                    { "id": "aerial-cable-cars", "title": "Aerial Cable Cars", "slug": "aerial-cable-cars" },
                    { "id": "funiculars", "title": "Inclined Lifts (Funiculars)", "slug": "funiculars" },
                    { "id": "chairlifts", "title": "Chairlifts", "slug": "chairlifts" },
                    { "id": "ropeways", "title": "Ropeways", "slug": "ropeways" },
                    { "id": "monocable", "title": "Monocable Cable Cars", "slug": "monocable" },
                    { "id": "dual-cable", "title": "Dual-Cable Systems", "slug": "dual-cable" },
                    { "id": "urban-cable", "title": "Urban Cable Cars", "slug": "urban-cable" },
                    { "id": "scenic-cable", "title": "Scenic Cable Cars", "slug": "scenic-cable" },
                    { "id": "cargo-cable", "title": "Industrial Cable Cars", "slug": "cargo-cable" },
                    { "id": "electric-funicular", "title": "Electric Funiculars", "slug": "electric-funicular" }
                ]
            },
            {
                "id": "shared-electric-mobility",
                "title": "Shared Electric Scooters and Bicycles",
                "slug": "shared-electric-mobility",
                "children": [
                    { "id": "escooter-sharing", "title": "Electric Scooter Sharing", "slug": "escooter-sharing" },
                    { "id": "ebike-sharing", "title": "Electric Bicycle Sharing", "slug": "ebike-sharing" },
                    { "id": "dockless-sharing", "title": "Dockless Scooter/Bike Sharing", "slug": "dockless-sharing" },
                    { "id": "station-based", "title": "Station-Based Sharing", "slug": "station-based" },
                    { "id": "moped-sharing", "title": "Electric Moped Sharing", "slug": "moped-sharing" },
                    { "id": "smart-bikes", "title": "Smart Bicycle Sharing", "slug": "smart-bikes" },
                    { "id": "hybrid-sharing", "title": "Hybrid Scooter/Bike Sharing", "slug": "hybrid-sharing" },
                    { "id": "specialized-sharing", "title": "Sharing for Specialized Groups", "slug": "specialized-sharing" },
                    { "id": "subscription-sharing", "title": "Subscription-Based Sharing", "slug": "subscription-sharing" },
                    { "id": "community-sharing", "title": "Community-Managed Sharing", "slug": "community-sharing" }
                ]
            },
            {
                "id": "carpooling-programs",
                "title": "Carpooling and Car-Sharing Programs",
                "slug": "carpooling-programs",
                "children": [
                    { "id": "traditional-carpool", "title": "Traditional Carpooling", "slug": "traditional-carpool" },
                    { "id": "platform-rideshare", "title": "Platform Ride-Sharing", "slug": "platform-rideshare" },
                    { "id": "employer-carpool", "title": "Employer Carpooling Programs", "slug": "employer-carpool" },
                    { "id": "hov-lanes", "title": "Carpool Lanes (HOV)", "slug": "hov-lanes" },
                    { "id": "car-sharing-programs", "title": "Car-Sharing Programs", "slug": "car-sharing-programs" },
                    { "id": "peer-car-sharing", "title": "Peer-to-Peer Car Sharing", "slug": "peer-car-sharing" },
                    { "id": "long-distance-rideshare", "title": "Long-Distance Ride-Sharing", "slug": "long-distance-rideshare" },
                    { "id": "electric-car-sharing", "title": "Electric Car-Sharing", "slug": "electric-car-sharing" },
                    { "id": "hybrid-car-sharing", "title": "Hybrid Car-Sharing", "slug": "hybrid-car-sharing" },
                    { "id": "community-carpool", "title": "Community-Based Carpooling", "slug": "community-carpool" },
                    { "id": "subscription-car-sharing", "title": "Subscription Car-Sharing", "slug": "subscription-car-sharing" },
                    { "id": "event-carpool", "title": "Event Carpooling", "slug": "event-carpool" },
                    { "id": "carpool-shuttle", "title": "Carpooling with Shuttle Services", "slug": "carpool-shuttle" }
                ]
            },
            {
                "id": "taxi-ride-hailing",
                "title": "Taxi and Ride-Hailing Services",
                "slug": "taxi-ride-hailing",
                "children": [
                    { "id": "traditional-taxis", "title": "Traditional Taxis", "slug": "traditional-taxis" },
                    { "id": "app-ride-hailing", "title": "App-Based Ride-Hailing", "slug": "app-ride-hailing" },
                    { "id": "luxury-ride-hailing", "title": "Luxury Ride-Hailing", "slug": "luxury-ride-hailing" },
                    { "id": "carpool-rides", "title": "Carpool Ride Services", "slug": "carpool-rides" },
                    { "id": "microtransit-rides", "title": "Microtransit Ride Services", "slug": "microtransit-rides" },
                    { "id": "taxi-like-services", "title": "Taxi-Like Ride-Hailing", "slug": "taxi-like-services" },
                    { "id": "two-wheeler-rides", "title": "Motorcycle Ride-Hailing", "slug": "two-wheeler-rides" },
                    { "id": "chauffeur-rides", "title": "Luxury Chauffeur Services", "slug": "chauffeur-rides" },
                    { "id": "accessible-rides", "title": "Accessible Ride Services", "slug": "accessible-rides" },
                    { "id": "delivery-rides", "title": "Ride-Hailing for Delivery", "slug": "delivery-rides" },
                    { "id": "peer-rides", "title": "Peer-to-Peer Ride-Hailing", "slug": "peer-rides" },
                    { "id": "airport-ride-hailing", "title": "Airport Ride-Hailing", "slug": "airport-ride-hailing" },
                    { "id": "event-ride-hailing", "title": "Ride-Hailing for Events", "slug": "event-ride-hailing" }
                ]
            },
            {
                "id": "private-coach-bus-charter",
                "title": "Private Coach and Bus Charter Services",
                "slug": "private-coach-bus-charter",
                "children": [
                    { "id": "corporate-bus-charter", "title": "Corporate Bus and Coach Charters", "slug": "corporate-bus-charter" },
                    { "id": "group-tour-bus", "title": "Group Travel and Tour Bus Charters", "slug": "group-tour-bus" },
                    { "id": "wedding-bus-charter", "title": "Wedding and Event Bus Charters", "slug": "wedding-bus-charter" },
                    { "id": "airport-bus-charter", "title": "Airport Shuttle Bus Charters", "slug": "airport-bus-charter" },
                    { "id": "school-bus-charter", "title": "School and Educational Bus Charters", "slug": "school-bus-charter" },
                    { "id": "sports-bus-charter", "title": "Sports Team Charter Buses", "slug": "sports-bus-charter" },
                    { "id": "long-distance-bus", "title": "Long-Distance Bus Charters", "slug": "long-distance-bus" },
                    { "id": "luxury-bus-charter", "title": "Luxury Bus Charters", "slug": "luxury-bus-charter" },
                    { "id": "religious-bus-charter", "title": "Religious Group Bus Charters", "slug": "religious-bus-charter" },
                    { "id": "festival-bus-charter", "title": "Festival Shuttle Bus Charters", "slug": "festival-bus-charter" },
                    { "id": "custom-bus-charter", "title": "Custom Bus Charters", "slug": "custom-bus-charter" },
                    { "id": "event-bus-charter", "title": "Event-Specific Bus Charters", "slug": "event-bus-charter" },
                    { "id": "eco-bus-charter", "title": "Eco-Friendly Bus Charters", "slug": "eco-bus-charter" }
                ]
            },
            {
                "id": "chartered-flights-helicopter",
                "title": "Chartered Flights or Helicopter Services",
                "slug": "chartered-flights-helicopter",
                "children": [
                    { "id": "private-jet", "title": "Private Jet Charters", "slug": "private-jet" },
                    { "id": "helicopter-charter", "title": "Helicopter Charters", "slug": "helicopter-charter" },
                    { "id": "air-ambulance", "title": "Air Ambulance Services", "slug": "air-ambulance" },
                    { "id": "corporate-jet", "title": "Corporate Jet Charters", "slug": "corporate-jet" },
                    { "id": "luxury-flights", "title": "Luxury Charter Flights", "slug": "luxury-flights" },
                    { "id": "group-flight", "title": "Group Charter Flights", "slug": "group-flight" },
                    { "id": "on-demand-helicopter", "title": "On-Demand Helicopter Services", "slug": "on-demand-helicopter" },
                    { "id": "seaplane", "title": "Seaplane Charters", "slug": "seaplane" },
                    { "id": "helicopter-tours", "title": "Helicopter Tours", "slug": "helicopter-tours" },
                    { "id": "event-air-travel", "title": "Private Air Travel for Events", "slug": "event-air-travel" },
                    { "id": "cargo-charter-flight", "title": "Cargo Charter Flights", "slug": "cargo-charter-flight" },
                    { "id": "empty-leg", "title": "Empty Leg Flights", "slug": "empty-leg" },
                    { "id": "executive-helicopter", "title": "Executive Helicopter Charters", "slug": "executive-helicopter" }
                ]
            },
            {
                "id": "group-team-travel",
                "title": "Group and Team Travel",
                "slug": "group-team-travel",
                "children": [
                    {
                        "id": "group-bus-coach-charters",
                        "title": "Group Bus and Coach Charters",
                        "slug": "group-bus-coach-charters",
                        "children": [
                            { "id": "corporate-group-bus", "title": "Corporate Group Bus Charters", "slug": "corporate-group-bus" },
                            { "id": "school-group-charters", "title": "Educational and School Group Charters", "slug": "school-group-charters" },
                            { "id": "tourist-group-charters", "title": "Tourist and Leisure Group Charters", "slug": "tourist-group-charters" },
                            { "id": "event-group-bus", "title": "Event-Specific Group Bus Charters", "slug": "event-group-bus" },
                            { "id": "sports-group-bus", "title": "Sports Team and Athlete Group Charters", "slug": "sports-group-bus" },
                            { "id": "wedding-group-bus", "title": "Wedding and Special Occasion Group Charters", "slug": "wedding-group-bus" },
                            { "id": "religious-group-bus", "title": "Religious and Pilgrimage Group Charters", "slug": "religious-group-bus" },
                            { "id": "airport-group-transfer", "title": "Airport Shuttle and Transfer Group Charters", "slug": "airport-group-transfer" },
                            { "id": "luxury-group-charters", "title": "Luxury and Executive Group Charters", "slug": "luxury-group-charters" },
                            { "id": "eco-group-bus", "title": "Eco-Friendly Group Bus Charters", "slug": "eco-group-bus" },
                            { "id": "custom-group-charters", "title": "Customizable Private Group Charters", "slug": "custom-group-charters" },
                            { "id": "long-distance-group", "title": "Cross-Country and Long-Distance Group Charters", "slug": "long-distance-group" },
                            { "id": "convention-shuttle-bus", "title": "Shuttle Bus Services for Conventions and Trade Shows", "slug": "convention-shuttle-bus" }
                        ]
                    },
                    {
                        "id": "private-group-flights",
                        "title": "Private Group Flights (Chartered Flights)",
                        "slug": "private-group-flights",
                        "children": [
                            { "id": "corporate-chartered-flights", "title": "Corporate Chartered Flights", "slug": "corporate-chartered-flights" },
                            { "id": "leisure-chartered-flights", "title": "Group Leisure and Tour Chartered Flights", "slug": "leisure-chartered-flights" },
                            { "id": "sports-chartered-flights", "title": "Sports Team and Athlete Chartered Flights", "slug": "sports-chartered-flights" },
                            { "id": "wedding-chartered-flights", "title": "Wedding and Special Event Chartered Flights", "slug": "wedding-chartered-flights" },
                            { "id": "religious-chartered-flights", "title": "Religious or Pilgrimage Chartered Flights", "slug": "religious-chartered-flights" },
                            { "id": "government-chartered-flights", "title": "Government and Diplomatic Chartered Flights", "slug": "government-chartered-flights" },
                            { "id": "entertainment-chartered-flights", "title": "Music and Entertainment Group Chartered Flights", "slug": "entertainment-chartered-flights" },
                            { "id": "emergency-chartered-flights", "title": "Emergency or Humanitarian Group Chartered Flights", "slug": "emergency-chartered-flights" },
                            { "id": "vip-chartered-flights", "title": "VIP and High Net-Worth Individual (HNWI) Chartered Flights", "slug": "vip-chartered-flights" },
                            { "id": "international-chartered-flights", "title": "Cross-Border and International Group Chartered Flights", "slug": "international-chartered-flights" },
                            { "id": "cargo-chartered-flights", "title": "Private Cargo and Freight Group Chartered Flights", "slug": "cargo-chartered-flights" },
                            { "id": "special-needs-charter", "title": "Custom Charter Flights for Special Needs", "slug": "special-needs-charter" }
                        ]
                    },
                    {
                        "id": "group-shuttle-services",
                        "title": "Shuttle Services for Groups",
                        "slug": "group-shuttle-services",
                        "children": [
                            { "id": "hotel-airport-shuttle", "title": "Hotel to Airport Shuttle Services", "slug": "hotel-airport-shuttle" },
                            { "id": "event-conference-shuttle", "title": "Event and Conference Shuttle Services", "slug": "event-conference-shuttle" },
                            { "id": "tour-shuttle", "title": "Sightseeing and Tour Shuttle Services", "slug": "tour-shuttle" },
                            { "id": "hotel-convention-shuttle", "title": "Hotel to Convention Center Shuttle Services", "slug": "hotel-convention-shuttle" },
                            { "id": "private-group-shuttle", "title": "Private Group Shuttle Services", "slug": "private-group-shuttle" },
                            { "id": "airport-large-group", "title": "Airport Shuttle Services for Large Groups", "slug": "airport-large-group" },
                            { "id": "resort-shuttle", "title": "Resort and Vacation Shuttle Services", "slug": "resort-shuttle" },
                            { "id": "cruise-shuttle", "title": "Cruise Port Shuttle Services", "slug": "cruise-shuttle" },
                            { "id": "sports-event-shuttle", "title": "Sports Event Group Shuttle Services", "slug": "sports-event-shuttle" },
                            { "id": "wedding-shuttle", "title": "Wedding and Special Event Shuttle Services", "slug": "wedding-shuttle" },
                            { "id": "campus-shuttle", "title": "College or University Campus Shuttle Services", "slug": "campus-shuttle" },
                            { "id": "international-group-shuttle", "title": "Airport Transfer Shuttle for International Groups", "slug": "international-group-shuttle" }
                        ]
                    },
                    {
                        "id": "group-train-travel",
                        "title": "Group Train Travel",
                        "slug": "group-train-travel",
                        "children": [
                            { "id": "charter-train", "title": "Charter Train Services", "slug": "charter-train" },
                            { "id": "discount-train", "title": "Group Discount Train Tickets", "slug": "discount-train" },
                            { "id": "sleeper-train", "title": "Sleeper Train Services for Groups", "slug": "sleeper-train" },
                            { "id": "high-speed-group", "title": "High-Speed Rail for Group Travel", "slug": "high-speed-group" },
                            { "id": "luxury-train", "title": "Scenic or Luxury Train Journeys for Groups", "slug": "luxury-train" },
                            { "id": "event-train", "title": "Event Train Services", "slug": "event-train" },
                            { "id": "school-train", "title": "Educational or School Group Train Travel", "slug": "school-train" },
                            { "id": "religious-train", "title": "Pilgrimage and Religious Group Train Travel", "slug": "religious-train" },
                            { "id": "holiday-train", "title": "Seasonal or Holiday Group Train Services", "slug": "holiday-train" },
                            { "id": "sports-train", "title": "Sports Team Train Travel", "slug": "sports-train" },
                            { "id": "corporate-train", "title": "Corporate Group Train Travel", "slug": "corporate-train" },
                            { "id": "international-train", "title": "International Group Train Travel", "slug": "international-train" }
                        ]
                    },
                    {
                        "id": "group-car-rentals",
                        "title": "Car Rentals for Group Travel",
                        "slug": "group-car-rentals",
                        "children": [
                            { "id": "minivan-group", "title": "Minivan Rentals for Groups", "slug": "minivan-group" },
                            { "id": "suv-group", "title": "SUV Rentals for Groups", "slug": "suv-group" },
                            { "id": "12-15-seater", "title": "12-15 Seater Van Rentals", "slug": "12-15-seater" },
                            { "id": "16-25-seater", "title": "16-25 Seater Coach or Mini Bus Rentals", "slug": "16-25-seater" },
                            { "id": "luxury-coach", "title": "Luxury Coach Bus Rentals", "slug": "luxury-coach" },
                            { "id": "luxury-car-group", "title": "Luxury Car Rentals for Groups", "slug": "luxury-car-group" },
                            { "id": "rv-group", "title": "RV Rentals for Group Travel", "slug": "rv-group" },
                            { "id": "car-driver-group", "title": "Car Rental with Driver for Group Travel", "slug": "car-driver-group" },
                            { "id": "7-8-seater-suv", "title": "7-8 Seater SUVs with a Driver", "slug": "7-8-seater-suv" },
                            { "id": "4x4-group", "title": "4x4 Rental for Group Travel", "slug": "4x4-group" },
                            { "id": "shuttle-van-group", "title": "Shuttle Van Rentals for Group Travel", "slug": "shuttle-van-group" },
                            { "id": "luxury-minivan", "title": "Luxury Minivan Rentals for Groups", "slug": "luxury-minivan" }
                        ]
                    }
                ]
            },
            {
                "id": "luxury-group-travel",
                "title": "Luxury Group Travel",
                "slug": "luxury-group-travel",
                "children": [
                    { "id": "luxury-coach-buses", "title": "Luxury Coach Buses", "slug": "luxury-coach-buses" },
                    { "id": "private-limousines", "title": "Private Limousines", "slug": "private-limousines" },
                    { "id": "luxury-vans", "title": "Luxury Vans (Luxury Minivans)", "slug": "luxury-vans" },
                    { "id": "luxury-mini-coach", "title": "Luxury Mini Coach Buses", "slug": "luxury-mini-coach" },
                    { "id": "chauffeur-sedans", "title": "Chauffeur-Driven Luxury Sedans", "slug": "chauffeur-sedans" },
                    { "id": "stretch-suvs", "title": "Stretch SUVs", "slug": "stretch-suvs" },
                    { "id": "luxury-party-bus", "title": "Luxury Party Buses", "slug": "luxury-party-bus" },
                    { "id": "electric-coaches", "title": "Luxury Hybrid or Electric Coaches", "slug": "electric-coaches" },
                    { "id": "executive-coaches", "title": "Executive Coaches with Conference Facilities", "slug": "executive-coaches" },
                    { "id": "luxury-rv", "title": "Luxury RVs for Group Travel", "slug": "luxury-rv" }
                ]
            },
            {
                "id": "cruise-group-travel",
                "title": "Cruise Ship Group Travel",
                "slug": "cruise-group-travel",
                "children": [
                    { "id": "charter-cruise", "title": "Charter Cruise Ship Services", "slug": "charter-cruise" },
                    { "id": "discount-cruise", "title": "Group Discounted Cruise Packages", "slug": "discount-cruise" },
                    { "id": "themed-cruise", "title": "Themed or Special Interest Cruises", "slug": "themed-cruise" },
                    { "id": "family-cruise", "title": "Family Group Cruises", "slug": "family-cruise" },
                    { "id": "luxury-cruise", "title": "Luxury Group Cruises", "slug": "luxury-cruise" },
                    { "id": "corporate-cruise", "title": "Conference and Corporate Cruises", "slug": "corporate-cruise" },
                    { "id": "wedding-cruise", "title": "Wedding and Honeymoon Cruises", "slug": "wedding-cruise" },
                    { "id": "educational-cruise", "title": "Educational Group Cruises", "slug": "educational-cruise" },
                    { "id": "adventure-cruise", "title": "Adventure Group Cruises", "slug": "adventure-cruise" },
                    { "id": "expedition-cruise", "title": "Luxury Expedition Cruises", "slug": "expedition-cruise" },
                    { "id": "senior-cruise", "title": "Senior Group Cruises", "slug": "senior-cruise" },
                    { "id": "sports-cruise", "title": "Sports Team Group Cruises", "slug": "sports-cruise" },
                    { "id": "incentive-cruise", "title": "Incentive and Reward Cruises", "slug": "incentive-cruise" }
                ]
            },
            {
                "id": "group-helicopter-charters",
                "title": "Group Helicopter Charters",
                "slug": "group-helicopter-charters",
                "children": [
                    { "id": "vip-helicopter", "title": "VIP and Executive Helicopter Charters", "slug": "vip-helicopter" },
                    { "id": "event-helicopter", "title": "Event and Conference Helicopter Charters", "slug": "event-helicopter" },
                    { "id": "sightseeing-helicopter", "title": "Sightseeing Helicopter Charters", "slug": "sightseeing-helicopter" },
                    { "id": "luxury-helicopter", "title": "Luxury Travel Helicopter Charters", "slug": "luxury-helicopter" },
                    { "id": "corporate-helicopter", "title": "Corporate Retreat Helicopter Charters", "slug": "corporate-helicopter" },
                    { "id": "emergency-helicopter", "title": "Emergency Helicopter Charters", "slug": "emergency-helicopter" },
                    { "id": "sports-helicopter", "title": "Sports Event Helicopter Charters", "slug": "sports-helicopter" },
                    { "id": "media-helicopter", "title": "Film Production Helicopter Charters", "slug": "media-helicopter" },
                    { "id": "custom-helicopter", "title": "Customizable Helicopter Charters", "slug": "custom-helicopter" },
                    { "id": "event-helicopter-special", "title": "Helicopter Charters for Special Events", "slug": "event-helicopter-special" }
                ]
            },
            {
                "id": "sports-team-travel",
                "title": "Team Travel for Sports",
                "slug": "sports-team-travel",
                "children": [
                    { "id": "sports-bus", "title": "Charter Bus Services for Sports Teams", "slug": "sports-bus" },
                    { "id": "sports-coach", "title": "Private Coach Services for Sports Teams", "slug": "sports-coach" },
                    { "id": "sports-flight", "title": "Team Travel by Chartered Flights", "slug": "sports-flight" },
                    { "id": "sports-commercial-flight", "title": "Commercial Flights for Sports Teams", "slug": "sports-commercial-flight" },
                    { "id": "sports-train", "title": "Team Travel by Train", "slug": "sports-train" },
                    { "id": "sports-shuttle", "title": "Shuttle Services for Sports Teams", "slug": "sports-shuttle" },
                    { "id": "sports-luxury-coach", "title": "Luxury Coaches for Teams", "slug": "sports-luxury-coach" },
                    { "id": "mobile-team-bus", "title": "Mobile Team Facilities", "slug": "mobile-team-bus" },
                    { "id": "custom-team-bus", "title": "Customizable Team Charter Buses", "slug": "custom-team-bus" },
                    { "id": "sports-equipment-transport", "title": "Transport for Sports Equipment", "slug": "sports-equipment-transport" }
                ]
            },
            {
                "id": "group-bicycle-tours",
                "title": "Group Bicycle Tours",
                "slug": "group-bicycle-tours",
                "children": [
                    { "id": "city-bike", "title": "City Bike Tours", "slug": "city-bike" },
                    { "id": "scenic-bike", "title": "Nature and Scenic Bike Tours", "slug": "scenic-bike" },
                    { "id": "mountain-bike", "title": "Mountain Bike Tours", "slug": "mountain-bike" },
                    { "id": "guided-bike", "title": "Guided Bike Tours", "slug": "guided-bike" },
                    { "id": "self-guided-bike", "title": "Self-Guided Bike Tours", "slug": "self-guided-bike" },
                    { "id": "multi-day-bike", "title": "Multi-Day Bike Tours", "slug": "multi-day-bike" },
                    { "id": "cycling-accommodation", "title": "Cycling Tours with Stay", "slug": "cycling-accommodation" },
                    { "id": "food-bike", "title": "Wine or Food Bike Tours", "slug": "food-bike" },
                    { "id": "bike-boat", "title": "Bike and Boat Tours", "slug": "bike-boat" },
                    { "id": "charity-bike", "title": "Charity Bike Tours", "slug": "charity-bike" },
                    { "id": "family-bike", "title": "Family-Friendly Bike Tours", "slug": "family-bike" },
                    { "id": "electric-bike", "title": "Electric Bike Tours", "slug": "electric-bike" }
                ]
            },
            {
                "id": "festival-group-transport",
                "title": "Group Transportation for Festivals",
                "slug": "festival-group-transport",
                "children": [
                    { "id": "festival-shuttle", "title": "Festival Shuttle Services", "slug": "festival-shuttle" },
                    { "id": "festival-charter-bus", "title": "Charter Bus Services", "slug": "festival-charter-bus" },
                    { "id": "festival-coach", "title": "Private Coach Rentals", "slug": "festival-coach" },
                    { "id": "festival-public-transport", "title": "Public Transport for Festivals", "slug": "festival-public-transport" },
                    { "id": "festival-bike", "title": "Bike Rentals for Festivals", "slug": "festival-bike" },
                    { "id": "festival-water", "title": "Festival Cruises", "slug": "festival-water" },
                    { "id": "festival-suv", "title": "Luxury Van or SUV Rentals", "slug": "festival-suv" },
                    { "id": "festival-limo", "title": "Limousine Rentals", "slug": "festival-limo" },
                    { "id": "festival-carpool", "title": "Carpooling for Festivals", "slug": "festival-carpool" },
                    { "id": "festival-helicopter", "title": "Helicopter Travel for VIP", "slug": "festival-helicopter" },
                    { "id": "festival-tour-bus", "title": "Festival Bus Tours", "slug": "festival-tour-bus" },
                    { "id": "festival-train", "title": "Train Travel for Festivals", "slug": "festival-train" }
                ]
            },
            {
                "id": "student-group-travel",
                "title": "Student Group Travel",
                "slug": "student-group-travel",
                "children": [
                    { "id": "school-bus", "title": "School Bus Transportation", "slug": "school-bus" },
                    { "id": "student-charter-bus", "title": "Charter Bus Services", "slug": "student-charter-bus" },
                    { "id": "student-public-transport", "title": "Public Transport for Students", "slug": "student-public-transport" },
                    { "id": "student-train", "title": "Train Travel for Students", "slug": "student-train" },
                    { "id": "student-coach", "title": "Private Coach Rentals", "slug": "student-coach" },
                    { "id": "student-flight", "title": "Air Travel for Students", "slug": "student-flight" },
                    { "id": "student-ferry", "title": "Ferry Travel for Students", "slug": "student-ferry" },
                    { "id": "student-rideshare", "title": "Shared Ride Services", "slug": "student-rideshare" },
                    { "id": "student-carpool", "title": "Carpooling", "slug": "student-carpool" },
                    { "id": "student-luxury", "title": "Luxury Student Travel", "slug": "student-luxury" },
                    { "id": "student-bike", "title": "Bike Tours for Students", "slug": "student-bike" },
                    { "id": "student-taxi", "title": "Taxi/Ride-Hailing Travel", "slug": "student-taxi" }
                ]
            },
            {
                "id": "adventure-group-travel",
                "title": "Adventure Group Travel",
                "slug": "adventure-group-travel",
                "children": [
                    { "id": "offroad-vehicles", "title": "Off-Road Vehicles", "slug": "offroad-vehicles" },
                    { "id": "safari-vehicles", "title": "Safari Vehicles", "slug": "safari-vehicles" },
                    { "id": "trekking-expeditions", "title": "Trekking Expeditions", "slug": "trekking-expeditions" },
                    { "id": "overland-trucks", "title": "Campers and Overland Trucks", "slug": "overland-trucks" },
                    { "id": "air-charters-adventure", "title": "Helicopter or Aircraft Charters", "slug": "air-charters-adventure" },
                    { "id": "kayak-expeditions", "title": "Canoes and Kayaks", "slug": "kayak-expeditions" },
                    { "id": "camel-horse-rides", "title": "Camel or Horseback Rides", "slug": "camel-horse-rides" },
                    { "id": "expedition-bus", "title": "Group Bus Tours for Expeditions", "slug": "expedition-bus" },
                    { "id": "atv-tours", "title": "Motorbikes and ATV Tours", "slug": "atv-tours" },
                    { "id": "expedition-air", "title": "Group Air Travel for Expeditions", "slug": "expedition-air" },
                    { "id": "yacht-adventure", "title": "Boat or Yacht Charters", "slug": "yacht-adventure" },
                    { "id": "public-transport-adventure", "title": "Public Transport for Expeditions", "slug": "public-transport-adventure" }
                ]
            },
            {
                "id": "group-airport-transfers",
                "title": "Group Airport Transfers",
                "slug": "group-airport-transfers",
                "children": [
                    { "id": "shared-shuttle-group", "title": "Shared Shuttle Services", "slug": "shared-shuttle-group" },
                    { "id": "private-bus-transfer", "title": "Private Coach or Bus Transfers", "slug": "private-bus-transfer" },
                    { "id": "minibus-transfer", "title": "Minibus or Minivan Transfers", "slug": "minibus-transfer" },
                    { "id": "executive-car-transfer", "title": "Executive or Luxury Car Services", "slug": "executive-car-transfer" },
                    { "id": "airport-limo", "title": "Airport Limousine Services", "slug": "airport-limo" },
                    { "id": "private-airport-transfer-group", "title": "Private Airport Transfers (Cars, Vans, or Buses)", "slug": "private-airport-transfer-group" },
                    { "id": "ride-hailing-group", "title": "Ride-Hailing Services for Groups", "slug": "ride-hailing-group" },
                    { "id": "luxury-shuttle-group", "title": "Luxury Shuttle Services", "slug": "luxury-shuttle-group" },
                    { "id": "airport-additional-services", "title": "Airport Transfer with Additional Services", "slug": "airport-additional-services" },
                    { "id": "van-pooling", "title": "Large Van Pooling for Groups", "slug": "van-pooling" },
                    { "id": "custom-group-transfers", "title": "Customizable Group Transfers", "slug": "custom-group-transfers" }
                ]
            },
            {
                "id": "corporate-group-travel",
                "title": "Corporate Group Travel",
                "slug": "corporate-group-travel",
                "children": [
                    { "id": "corporate-bus-hire", "title": "Private Coach or Bus Hire", "slug": "corporate-bus-hire" },
                    { "id": "corporate-executive-car", "title": "Executive Car Services", "slug": "corporate-executive-car" },
                    { "id": "corporate-minibus", "title": "Minibus or Minivan Transfers", "slug": "corporate-minibus" },
                    { "id": "corporate-air-travel", "title": "Group Air Travel (Private or Commercial Flights)", "slug": "corporate-air-travel" },
                    { "id": "corporate-train", "title": "Train Travel for Corporate Groups", "slug": "corporate-train" },
                    { "id": "corporate-shuttle", "title": "Private Shuttle Services", "slug": "corporate-shuttle" },
                    { "id": "corporate-ride-hailing", "title": "Ride-Hailing Services for Groups", "slug": "corporate-ride-hailing" },
                    { "id": "corporate-luxury-travel", "title": "Luxury Group Travel", "slug": "corporate-luxury-travel" },
                    { "id": "corporate-bus-tours", "title": "Corporate Group Bus Tours", "slug": "corporate-bus-tours" },
                    { "id": "corporate-helicopter", "title": "Group Helicopter or Private Air Travel", "slug": "corporate-helicopter" },
                    { "id": "corporate-shared-bus", "title": "Shared Group Bus or Coach Services", "slug": "corporate-shared-bus" },
                    { "id": "corporate-packages", "title": "Corporate Group Travel Packages", "slug": "corporate-packages" }
                ]
            }
        ]
    },

    // Corporate Videos
    {
        "id": "corporate-videos",
        "title": "Corporate Videos",
        "slug": "corporate-videos",
        icon: FaVideo,
        "children": [
            {
                "id": "promotional-corporate-videos",
                "title": "Promotional Corporate Videos",
                "slug": "promotional-corporate-videos",
                "children": [
                    { "id": "brand-overview", "title": "Brand Overview Videos", "slug": "brand-overview" },
                    { "id": "product-demo", "title": "Product or Service Demonstration Videos", "slug": "product-demo" },
                    { "id": "customer-testimonial", "title": "Customer Testimonial Videos", "slug": "customer-testimonial" },
                    { "id": "company-culture", "title": "Company Culture Videos", "slug": "company-culture" },
                    { "id": "event-highlight", "title": "Event Highlight Videos", "slug": "event-highlight" },
                    { "id": "csr-videos", "title": "Corporate Social Responsibility (CSR) Videos", "slug": "csr-videos" },
                    { "id": "explainer-videos", "title": "Explainer Videos", "slug": "explainer-videos" },
                    { "id": "testimonial-case-study", "title": "Testimonial and Case Study Videos", "slug": "testimonial-case-study" },
                    { "id": "behind-scenes", "title": "Behind-the-Scenes Videos", "slug": "behind-scenes" },
                    { "id": "seasonal-videos", "title": "Seasonal or Holiday Promotional Videos", "slug": "seasonal-videos" }
                ]
            },
            {
                "id": "event-highlight-videos",
                "title": "Event Highlight Videos",
                "slug": "event-highlight-videos",
                "children": [
                    { "id": "event-recap", "title": "Conference/Event Recap Video", "slug": "event-recap" },
                    { "id": "product-launch-highlight", "title": "Product Launch Highlight Video", "slug": "product-launch-highlight" },
                    { "id": "anniversary-video", "title": "Corporate Anniversary/Event Milestone Video", "slug": "anniversary-video" },
                    { "id": "award-video", "title": "Award Ceremony Highlight Video", "slug": "award-video" },
                    { "id": "team-building-video", "title": "Employee/Team Building Event Highlight Video", "slug": "team-building-video" },
                    { "id": "seminar-video", "title": "Seminar/Workshop Highlight Video", "slug": "seminar-video" },
                    { "id": "customer-experience-video", "title": "Customer Testimonial/Experience Video", "slug": "customer-experience-video" },
                    { "id": "virtual-event-video", "title": "Virtual Event Highlight Video", "slug": "virtual-event-video" },
                    { "id": "sponsorship-video", "title": "Sponsorship/Partnership Event Highlight Video", "slug": "sponsorship-video" },
                    { "id": "trade-show-video", "title": "Trade Show/Exhibition Video", "slug": "trade-show-video" }
                ]
            },
            {
                "id": "training-instructional-videos",
                "title": "Training and Instructional Videos",
                "slug": "training-instructional-videos",
                "children": [
                    { "id": "onboarding", "title": "Employee Onboarding Videos", "slug": "onboarding" },
                    { "id": "compliance-training", "title": "Compliance Training Videos", "slug": "compliance-training" },
                    { "id": "product-training", "title": "Product Training Videos", "slug": "product-training" },
                    { "id": "software-training", "title": "Software Training Videos", "slug": "software-training" },
                    { "id": "customer-service-training", "title": "Customer Service Training Videos", "slug": "customer-service-training" },
                    { "id": "health-safety-training", "title": "Health and Safety Training Videos", "slug": "health-safety-training" },
                    { "id": "leadership-training", "title": "Leadership and Management Training Videos", "slug": "leadership-training" },
                    { "id": "sales-training", "title": "Sales Training Videos", "slug": "sales-training" },
                    { "id": "soft-skills", "title": "Soft Skills Training Videos", "slug": "soft-skills" },
                    { "id": "technical-training", "title": "Technical Skills Training Videos", "slug": "technical-training" }
                ]
            },
            {
                "id": "testimonial-case-study-videos",
                "title": "Testimonial and Case Study Videos",
                "slug": "testimonial-case-study-videos",
                "children": [
                    { "id": "customer-testimonial-2", "title": "Customer Testimonial Videos", "slug": "customer-testimonial-2" },
                    { "id": "employee-testimonial", "title": "Employee Testimonial Videos", "slug": "employee-testimonial" },
                    { "id": "client-success", "title": "Client Success Stories (Case Studies)", "slug": "client-success" },
                    { "id": "video-case-study", "title": "Video Case Study with Data", "slug": "video-case-study" },
                    { "id": "influencer-testimonial", "title": "Influencer or Industry Expert Testimonial Videos", "slug": "influencer-testimonial" },
                    { "id": "product-testimonial", "title": "Video Testimonials for Specific Products or Services", "slug": "product-testimonial" },
                    { "id": "customer-journey", "title": "Customer Journey Videos", "slug": "customer-journey" },
                    { "id": "testimonial-compilation", "title": "Testimonial Compilation Videos", "slug": "testimonial-compilation" },
                    { "id": "animated-case-study", "title": "Animated Case Study/Testimonial Videos", "slug": "animated-case-study" },
                    { "id": "problem-solution", "title": "Problem-Solution Testimonial Videos", "slug": "problem-solution" }
                ]
            },
            {
                "id": "internal-communications-videos",
                "title": "Internal Communications Videos",
                "slug": "internal-communications-videos",
                "children": [
                    { "id": "ceo-message", "title": "Company Update/CEO Address Videos", "slug": "ceo-message" },
                    { "id": "employee-onboarding-2", "title": "Employee Onboarding Videos", "slug": "employee-onboarding-2" },
                    { "id": "training-development", "title": "Training and Development Videos", "slug": "training-development" },
                    { "id": "newsletter", "title": "Internal Newsletter Videos", "slug": "newsletter" },
                    { "id": "culture-values", "title": "Culture and Values Videos", "slug": "culture-values" },
                    { "id": "event-recap-internal", "title": "Event Recap Videos", "slug": "event-recap-internal" },
                    { "id": "health-safety-comm", "title": "Health and Safety Communication Videos", "slug": "health-safety-comm" },
                    { "id": "policy-procedure", "title": "Policy and Procedure Videos", "slug": "policy-procedure" },
                    { "id": "employee-recognition", "title": "Employee Recognition Videos", "slug": "employee-recognition" },
                    { "id": "townhall", "title": "Town Hall or Q&A Videos", "slug": "townhall" }
                ]
            },
            {
                "id": "product-launch-videos",
                "title": "Product Launch Videos",
                "slug": "product-launch-videos",
                "children": [
                    { "id": "teaser-launch", "title": "Teaser Product Launch Videos", "slug": "teaser-launch" },
                    { "id": "product-reveal", "title": "Product Reveal Videos", "slug": "product-reveal" },
                    { "id": "explainer-demo", "title": "Explainer/Product Demo Videos", "slug": "explainer-demo" },
                    { "id": "review-testimonial", "title": "Customer Testimonial/Product Review Videos", "slug": "review-testimonial" },
                    { "id": "behind-launch", "title": "Behind-the-Scenes Launch Videos", "slug": "behind-launch" },
                    { "id": "influencer-launch", "title": "Influencer/Brand Ambassador Product Launch Videos", "slug": "influencer-launch" },
                    { "id": "animated-launch", "title": "Animated Product Launch Videos", "slug": "animated-launch" },
                    { "id": "testimonial-launch", "title": "Testimonial-Driven Product Launch Videos", "slug": "testimonial-launch" },
                    { "id": "launch-event", "title": "Product Launch Event Videos", "slug": "launch-event" },
                    { "id": "explainer-testimonial-launch", "title": "Explainer with Testimonials Launch Video", "slug": "explainer-testimonial-launch" }
                ]
            },
            {
                "id": "csr-videos-main",
                "title": "Corporate Social Responsibility (CSR) Videos",
                "slug": "csr-videos-main",
                "children": [
                    { "id": "csr-storytelling", "title": "Brand Storytelling CSR Videos", "slug": "csr-storytelling" },
                    { "id": "csr-impact", "title": "Impact and Success Story CSR Videos", "slug": "csr-impact" },
                    { "id": "csr-employee", "title": "Employee Involvement CSR Videos", "slug": "csr-employee" },
                    { "id": "csr-partnership", "title": "Partnership/Collaboration CSR Videos", "slug": "csr-partnership" },
                    { "id": "csr-environment", "title": "Environmental Impact CSR Videos", "slug": "csr-environment" },
                    { "id": "csr-diversity", "title": "Diversity and Inclusion CSR Videos", "slug": "csr-diversity" },
                    { "id": "csr-sustainability", "title": "Sustainability Reporting CSR Videos", "slug": "csr-sustainability" },
                    { "id": "csr-community", "title": "Community Engagement CSR Videos", "slug": "csr-community" },
                    { "id": "csr-crisis", "title": "Crisis Response and Relief CSR Videos", "slug": "csr-crisis" }
                ]
            },
            {
                "id": "bts-corporate-videos",
                "title": "Behind-the-Scenes (BTS) Corporate Videos",
                "slug": "bts-corporate-videos",
                "children": [
                    { "id": "office-bts", "title": "Office Culture and Environment BTS Videos", "slug": "office-bts" },
                    { "id": "product-dev-bts", "title": "Product Development BTS Videos", "slug": "product-dev-bts" },
                    { "id": "event-prep-bts", "title": "Event Preparation BTS Videos", "slug": "event-prep-bts" },
                    { "id": "creative-bts", "title": "Creative Process BTS Videos", "slug": "creative-bts" },
                    { "id": "team-bts", "title": "Team Introduction and Employee Stories BTS Videos", "slug": "team-bts" },
                    { "id": "manufacturing-bts", "title": "Manufacturing/Production Process BTS Videos", "slug": "manufacturing-bts" },
                    { "id": "leadership-bts", "title": "CEO or Leadership BTS Videos", "slug": "leadership-bts" },
                    { "id": "support-bts", "title": "Customer Service and Support BTS Videos", "slug": "support-bts" },
                    { "id": "csr-bts", "title": "CSR Activities BTS Videos", "slug": "csr-bts" },
                    { "id": "tech-bts", "title": "Technology and Innovation BTS Videos", "slug": "tech-bts" }
                ]
            },
            {
                "id": "webinars-live-streaming",
                "title": "Webinars and Live Streaming Corporate Videos",
                "slug": "webinars-live-streaming",
                "children": [
                    { "id": "educational-webinars", "title": "Educational/Webinar Presentations", "slug": "educational-webinars" },
                    { "id": "launch-webinars", "title": "Product Launch Webinars", "slug": "launch-webinars" },
                    { "id": "panel-webinars", "title": "Panel Discussions and Expert Talks", "slug": "panel-webinars" },
                    { "id": "townhall-webinars", "title": "Corporate Announcements and Town Hall Meetings", "slug": "townhall-webinars" },
                    { "id": "training-webinars", "title": "Training and Development Webinars", "slug": "training-webinars" },
                    { "id": "ama-webinars", "title": "Q&A and AMA Sessions", "slug": "ama-webinars" },
                    { "id": "testimonial-webinars", "title": "Customer Testimonials and Case Study Webinars", "slug": "testimonial-webinars" },
                    { "id": "live-events-stream", "title": "Live Streaming Events", "slug": "live-events-stream" },
                    { "id": "virtual-demos", "title": "Virtual Product Demos and Tutorials", "slug": "virtual-demos" },
                    { "id": "crisis-webinars", "title": "Crisis Management and Response Webinars", "slug": "crisis-webinars" }
                ]
            },
            {
                "id": "conference-seminar-videos",
                "title": "Conference and Seminar Videos",
                "slug": "conference-seminar-videos",
                "children": [
                    { "id": "keynote", "title": "Keynote Speeches", "slug": "keynote" },
                    { "id": "panel-discussion", "title": "Panel Discussions", "slug": "panel-discussion" },
                    { "id": "breakout-session", "title": "Breakout Session Videos", "slug": "breakout-session" },
                    { "id": "workshops", "title": "Workshops and Training Sessions", "slug": "workshops" },
                    { "id": "product-demo-conf", "title": "Product or Service Demonstrations", "slug": "product-demo-conf" },
                    { "id": "fireside-chat", "title": "Fireside Chats", "slug": "fireside-chat" },
                    { "id": "networking", "title": "Networking Event Videos", "slug": "networking" },
                    { "id": "launch-event-conf", "title": "Product Launch Events", "slug": "launch-event-conf" },
                    { "id": "closing-remarks", "title": "Closing Remarks and Summary Videos", "slug": "closing-remarks" },
                    { "id": "qa-session", "title": "Audience Interaction and Q&A Sessions", "slug": "qa-session" }
                ]
            },
            {
                "id": "sizzle-reel-videos",
                "title": "Sizzle/Reel Videos",
                "slug": "sizzle-reel-videos",
                "children": [
                    { "id": "brand-sizzle", "title": "Brand Sizzle Reel", "slug": "brand-sizzle" },
                    { "id": "product-sizzle", "title": "Product/Service Sizzle Reel", "slug": "product-sizzle" },
                    { "id": "event-sizzle", "title": "Event Sizzle Reel", "slug": "event-sizzle" },
                    { "id": "achievement-sizzle", "title": "Company Achievement/Success Sizzle Reel", "slug": "achievement-sizzle" },
                    { "id": "testimonial-sizzle", "title": "Testimonial Sizzle Reel", "slug": "testimonial-sizzle" },
                    { "id": "culture-sizzle", "title": "Corporate Culture Sizzle Reel", "slug": "culture-sizzle" },
                    { "id": "fundraising-sizzle", "title": "Fundraising/Philanthropy Sizzle Reel", "slug": "fundraising-sizzle" },
                    { "id": "recruitment-sizzle", "title": "Recruitment Sizzle Reel", "slug": "recruitment-sizzle" },
                    { "id": "pitch-sizzle", "title": "Pitch Sizzle Reel", "slug": "pitch-sizzle" },
                    { "id": "partnership-sizzle", "title": "Partnership/Collaboration Sizzle Reel", "slug": "partnership-sizzle" }
                ]
            },
            {
                "id": "investor-stakeholder-videos",
                "title": "Investor and Stakeholder Videos",
                "slug": "investor-stakeholder-videos",
                "children": [
                    { "id": "annual-report", "title": "Annual Report Videos", "slug": "annual-report" },
                    { "id": "earnings-call", "title": "Earnings Call/Financial Update Videos", "slug": "earnings-call" },
                    { "id": "ceo-message-investor", "title": "CEO/Leadership Message Videos", "slug": "ceo-message-investor" },
                    { "id": "ir-briefing", "title": "Investor Relations Briefing Videos", "slug": "ir-briefing" },
                    { "id": "shareholder-meeting", "title": "Shareholder Meeting Videos", "slug": "shareholder-meeting" },
                    { "id": "investment-pitch", "title": "Investment Pitch Videos", "slug": "investment-pitch" },
                    { "id": "ma-announcement", "title": "M&A Announcement Videos", "slug": "ma-announcement" },
                    { "id": "csr-investor", "title": "CSR Videos for Investors", "slug": "csr-investor" },
                    { "id": "market-update", "title": "Market or Strategic Update Videos", "slug": "market-update" },
                    { "id": "esg-reporting", "title": "ESG Reporting Videos", "slug": "esg-reporting" }
                ]
            },
            {
                "id": "corporate-ads",
                "title": "Corporate Ads",
                "slug": "corporate-ads",
                "children": [
                    { "id": "brand-awareness-ads", "title": "Brand Awareness Corporate Ads", "slug": "brand-awareness-ads" },
                    { "id": "product-commercials", "title": "Product or Service Commercials", "slug": "product-commercials" },
                    { "id": "sponsorship-ads", "title": "Corporate Sponsorship Ads", "slug": "sponsorship-ads" },
                    { "id": "csr-ads", "title": "CSR Ads", "slug": "csr-ads" },
                    { "id": "event-ads", "title": "Event-Specific Corporate Ads", "slug": "event-ads" },
                    { "id": "thank-you-ads", "title": "Thank You Ads", "slug": "thank-you-ads" },
                    { "id": "testimonial-ads", "title": "Testimonial Ads", "slug": "testimonial-ads" }
                ]
            }
        ]
    },
    // Manpower
    {
        "id": "manpower",
        "title": "Manpower",
        "slug": "manpower",
        icon: FaUsers,
        "children": [
            {
                "id": "event-planner",
                "title": "Event Planner/Coordinator",
                "slug": "event-planner",
                "children": [
                    { "id": "wedding-planner", "title": "Wedding Planner/Coordinator", "slug": "wedding-planner" },
                    { "id": "corporate-planner", "title": "Corporate Event Planner", "slug": "corporate-planner" },
                    { "id": "conference-planner", "title": "Conference and Seminar Planner", "slug": "conference-planner" },
                    { "id": "nonprofit-planner", "title": "Nonprofit Event Planner", "slug": "nonprofit-planner" },
                    { "id": "social-planner", "title": "Social Event Planner", "slug": "social-planner" },
                    { "id": "trade-show-planner", "title": "Trade Show and Exhibition Planner", "slug": "trade-show-planner" },
                    { "id": "destination-planner", "title": "Destination Event Planner", "slug": "destination-planner" },
                    { "id": "inhouse-planner", "title": "In-House Event Planner", "slug": "inhouse-planner" },
                    { "id": "festival-organizer", "title": "Festival/Event Organizer", "slug": "festival-organizer" },
                    { "id": "event-designer", "title": "Event Designer/Stylist", "slug": "event-designer" },
                    { "id": "virtual-planner", "title": "Virtual Event Planner", "slug": "virtual-planner" },
                    { "id": "event-marketing-manager", "title": "Event Marketing Manager", "slug": "event-marketing-manager" },
                    { "id": "production-manager", "title": "Event Production Manager", "slug": "production-manager" },
                    { "id": "luxury-planner", "title": "Luxury/Event Concierge Planner", "slug": "luxury-planner" },
                    { "id": "sports-planner", "title": "Sports Event Planner", "slug": "sports-planner" }
                ]
            },
            {
                "id": "project-manager",
                "title": "Project Manager",
                "slug": "project-manager",
                "children": [
                    { "id": "general-pm", "title": "General Event Project Manager", "slug": "general-pm" },
                    { "id": "corporate-pm", "title": "Corporate Event Project Manager", "slug": "corporate-pm" },
                    { "id": "conference-pm", "title": "Conference and Convention Project Manager", "slug": "conference-pm" },
                    { "id": "festival-pm", "title": "Festival/Event Production Project Manager", "slug": "festival-pm" },
                    { "id": "wedding-pm", "title": "Wedding Project Manager", "slug": "wedding-pm" },
                    { "id": "nonprofit-pm", "title": "Nonprofit Event Project Manager", "slug": "nonprofit-pm" },
                    { "id": "exhibition-pm", "title": "Exhibition/Trade Show Project Manager", "slug": "exhibition-pm" },
                    { "id": "sports-pm", "title": "Sports Event Project Manager", "slug": "sports-pm" },
                    { "id": "virtual-pm", "title": "Virtual Event Project Manager", "slug": "virtual-pm" },
                    { "id": "inhouse-pm", "title": "In-House Event Project Manager", "slug": "inhouse-pm" },
                    { "id": "sponsorship-pm", "title": "Sponsorship and Partnership Event Project Manager", "slug": "sponsorship-pm" },
                    { "id": "product-launch-pm", "title": "Product Launch Event Project Manager", "slug": "product-launch-pm" },
                    { "id": "luxury-pm", "title": "Luxury or High-End Event Project Manager", "slug": "luxury-pm" }
                ]
            },
            {
                "id": "venue-manager",
                "title": "Venue Manager",
                "slug": "venue-manager",
                "children": [
                    { "id": "general-venue", "title": "General Venue Manager", "slug": "general-venue" },
                    { "id": "event-venue", "title": "Event-Specific Venue Manager", "slug": "event-venue" },
                    { "id": "wedding-venue", "title": "Wedding Venue Manager", "slug": "wedding-venue" },
                    { "id": "conference-venue", "title": "Conference and Convention Center Venue Manager", "slug": "conference-venue" },
                    { "id": "sports-venue", "title": "Sports Venue Manager", "slug": "sports-venue" },
                    { "id": "theater-venue", "title": "Theater Venue Manager", "slug": "theater-venue" },
                    { "id": "outdoor-venue", "title": "Outdoor Event Venue Manager", "slug": "outdoor-venue" },
                    { "id": "hotel-venue", "title": "Hotel/Resort Venue Manager", "slug": "hotel-venue" },
                    { "id": "exhibition-venue", "title": "Exhibition/Trade Show Venue Manager", "slug": "exhibition-venue" },
                    { "id": "festival-venue", "title": "Music Festival Venue Manager", "slug": "festival-venue" },
                    { "id": "community-venue", "title": "Cultural or Community Event Venue Manager", "slug": "community-venue" }
                ]
            },
            {
                "id": "marketing-pr-team",
                "title": "Marketing and Public Relations (PR) Team",
                "slug": "marketing-pr-team",
                "children": [
                    { "id": "event-marketing-team", "title": "Event Marketing Team", "slug": "event-marketing-team" },
                    { "id": "pr-team", "title": "Public Relations (PR) Team", "slug": "pr-team" },
                    { "id": "social-media-team", "title": "Social Media Marketing Team", "slug": "social-media-team" },
                    { "id": "influencer-team", "title": "Influencer Marketing Team", "slug": "influencer-team" },
                    { "id": "content-team", "title": "Content Marketing Team", "slug": "content-team" },
                    { "id": "community-team", "title": "Community Engagement Team", "slug": "community-team" },
                    { "id": "sponsorship-marketing", "title": "Sponsorship and Partnership Marketing Team", "slug": "sponsorship-marketing" },
                    { "id": "advertising-team", "title": "Advertising Team", "slug": "advertising-team" },
                    { "id": "ambassador-team", "title": "Event Ambassador Team", "slug": "ambassador-team" },
                    { "id": "crisis-team", "title": "Crisis Communication Team", "slug": "crisis-team" },
                    { "id": "photo-video-team", "title": "Event Photography/Video Team", "slug": "photo-video-team" },
                    { "id": "email-marketing", "title": "Email Marketing Team", "slug": "email-marketing" },
                    { "id": "digital-marketing", "title": "Digital Marketing Team", "slug": "digital-marketing" }
                ]
            },
            {
                "id": "operations-team",
                "title": "Operations Team",
                "slug": "operations-team",
                "children": [
                    { "id": "logistics", "title": "Logistics Team", "slug": "logistics" },
                    { "id": "venue-setup", "title": "Venue Setup and Layout Team", "slug": "venue-setup" },
                    { "id": "registration", "title": "Registration and Check-in Team", "slug": "registration" },
                    { "id": "security", "title": "Security and Safety Team", "slug": "security" },
                    { "id": "technical-support", "title": "Technical Support Team", "slug": "technical-support" },
                    { "id": "catering", "title": "Catering and Food Services Team", "slug": "catering" },
                    { "id": "troubleshooting", "title": "On-site Troubleshooting Team", "slug": "troubleshooting" },
                    { "id": "guest-services", "title": "Guest Services Team", "slug": "guest-services" },
                    { "id": "operations-manager", "title": "Event Operations Manager", "slug": "operations-manager" },
                    { "id": "transport-parking", "title": "Transportation and Parking Management Team", "slug": "transport-parking" },
                    { "id": "cleaning", "title": "Cleaning and Maintenance Team", "slug": "cleaning" },
                    { "id": "vendor-management", "title": "Vendor Management Team", "slug": "vendor-management" },
                    { "id": "staffing", "title": "Staffing and Volunteer Coordination Team", "slug": "staffing" },
                    { "id": "post-event", "title": "Post-Event Evaluation Team", "slug": "post-event" }
                ]
            },
            {
                "id": "event-technicians",
                "title": "Event Technicians (Audio-Visual Technicians)",
                "slug": "event-technicians",
                "children": [
                    { "id": "audio-tech", "title": "Audio Technicians (Sound Engineers)", "slug": "audio-tech" },
                    { "id": "lighting-tech", "title": "Lighting Technicians", "slug": "lighting-tech" },
                    { "id": "video-tech", "title": "Video Technicians (AV Technicians)", "slug": "video-tech" },
                    { "id": "projection-tech", "title": "Projection Technicians", "slug": "projection-tech" },
                    { "id": "sound-light-designer", "title": "Sound & Lighting Designers", "slug": "sound-light-designer" },
                    { "id": "stage-tech", "title": "Stage Technicians (Stage Hands)", "slug": "stage-tech" },
                    { "id": "broadcast-tech", "title": "Broadcast Technicians", "slug": "broadcast-tech" },
                    { "id": "board-operator", "title": "Lighting and Sound Board Operators", "slug": "board-operator" },
                    { "id": "av-specialist", "title": "Audio-Visual Technicians (AV Specialists)", "slug": "av-specialist" },
                    { "id": "lighting-control", "title": "Lighting Control Technicians", "slug": "lighting-control" },
                    { "id": "technical-director", "title": "Technical Directors", "slug": "technical-director" },
                    { "id": "it-tech", "title": "IT Technicians", "slug": "it-tech" },
                    { "id": "camera-operator", "title": "Camera Operators", "slug": "camera-operator" }
                ]
            },
            {
                "id": "creative-team",
                "title": "Creative Team (Designers)",
                "slug": "creative-team",
                "children": [
                    { "id": "event-concept-designer", "title": "Event Concept Designer", "slug": "event-concept-designer" },
                    { "id": "graphic-designers", "title": "Graphic Designers", "slug": "graphic-designers" },
                    { "id": "set-designers", "title": "Set Designers", "slug": "set-designers" },
                    { "id": "floral-designers", "title": "Floral Designers", "slug": "floral-designers" },
                    { "id": "interior-designers", "title": "Interior Designers", "slug": "interior-designers" },
                    { "id": "lighting-designers", "title": "Lighting Designers", "slug": "lighting-designers" },
                    { "id": "3d-designers", "title": "3D Designers and Visualizers", "slug": "3d-designers" },
                    { "id": "costume-designers", "title": "Costume and Wardrobe Designers", "slug": "costume-designers" },
                    { "id": "branding-designers", "title": "Event Branding Designers", "slug": "branding-designers" },
                    { "id": "digital-experience-designers", "title": "Digital Experience Designers", "slug": "digital-experience-designers" },
                    { "id": "interactive-media-designers", "title": "Interactive Media Designers", "slug": "interactive-media-designers" },
                    { "id": "social-media-designers", "title": "Social Media and Digital Content Designers", "slug": "social-media-designers" },
                    { "id": "videographers", "title": "Event Videographers and Cinematographers", "slug": "videographers" },
                    { "id": "exhibition-designers", "title": "Exhibition Designers", "slug": "exhibition-designers" }
                ]
            },
            {
                "id": "catering-hospitality",
                "title": "Catering and Hospitality Staff",
                "slug": "catering-hospitality",
                "children": [
                    { "id": "catering-manager", "title": "Catering Manager", "slug": "catering-manager" },
                    { "id": "chef", "title": "Chef (Head Chef or Executive Chef)", "slug": "chef" },
                    { "id": "sous-chef", "title": "Sous Chef", "slug": "sous-chef" },
                    { "id": "line-cook", "title": "Line Cook", "slug": "line-cook" },
                    { "id": "waitstaff", "title": "Waitstaff (Servers)", "slug": "waitstaff" },
                    { "id": "bartenders", "title": "Bartenders", "slug": "bartenders" },
                    { "id": "host-hostess", "title": "Host/Hostess", "slug": "host-hostess" },
                    { "id": "food-runner", "title": "Food Runner", "slug": "food-runner" },
                    { "id": "busser", "title": "Busser", "slug": "busser" },
                    { "id": "catering-assistants", "title": "Catering Assistants", "slug": "catering-assistants" },
                    { "id": "kitchen-porters", "title": "Kitchen Porters/Dishwashers", "slug": "kitchen-porters" },
                    { "id": "event-concierge", "title": "Event Concierge", "slug": "event-concierge" },
                    { "id": "fnb-supervisors", "title": "Food and Beverage Supervisors", "slug": "fnb-supervisors" },
                    { "id": "catering-sales", "title": "Catering Sales/Client Liaison", "slug": "catering-sales" },
                    { "id": "pastry-chef", "title": "Pastry Chef/Baker", "slug": "pastry-chef" }
                ]
            },
            {
                "id": "security-personnel",
                "title": "Security Personnel",
                "slug": "security-personnel",
                "children": [
                    { "id": "security-manager", "title": "Event Security Manager", "slug": "security-manager" },
                    { "id": "crowd-control", "title": "Crowd Control Personnel", "slug": "crowd-control" },
                    { "id": "entry-exit-security", "title": "Entrance and Exit Security", "slug": "entry-exit-security" },
                    { "id": "bouncers", "title": "Bouncers (Event Security Guards)", "slug": "bouncers" },
                    { "id": "vip-security", "title": "VIP Security (Bodyguards)", "slug": "vip-security" },
                    { "id": "patrol-officers", "title": "Patrol Security Officers", "slug": "patrol-officers" },
                    { "id": "parking-security", "title": "Parking Lot Security", "slug": "parking-security" },
                    { "id": "access-control", "title": "Access Control Personnel", "slug": "access-control" },
                    { "id": "ert", "title": "Emergency Response Team (ERT)", "slug": "ert" },
                    { "id": "cctv", "title": "Surveillance Officers (CCTV Operators)", "slug": "cctv" },
                    { "id": "logistics-security", "title": "Event Logistics Security", "slug": "logistics-security" },
                    { "id": "sniffer-dogs", "title": "Sniffer Dogs (K9 Units)", "slug": "sniffer-dogs" },
                    { "id": "ticketing-security", "title": "Ticketing Security", "slug": "ticketing-security" },
                    { "id": "credential-checkers", "title": "Guest List and Credential Checkers", "slug": "credential-checkers" }
                ]
            },
            {
                "id": "volunteers",
                "title": "Volunteers",
                "slug": "volunteers",
                "children": [
                    { "id": "registration-volunteers", "title": "Event Registration Volunteers", "slug": "registration-volunteers" },
                    { "id": "usher-volunteers", "title": "Usher/Guide Volunteers", "slug": "usher-volunteers" },
                    { "id": "logistics-volunteers", "title": "Logistics Support Volunteers", "slug": "logistics-volunteers" },
                    { "id": "info-desk", "title": "Information Desk Volunteers", "slug": "info-desk" },
                    { "id": "social-media-volunteers", "title": "Social Media/Marketing Volunteers", "slug": "social-media-volunteers" },
                    { "id": "vip-assistance", "title": "VIP/Guest Assistance Volunteers", "slug": "vip-assistance" },
                    { "id": "fnb-volunteers", "title": "Food and Beverage Service Volunteers", "slug": "fnb-volunteers" },
                    { "id": "photo-video-volunteers", "title": "Event Photography/Video Volunteers", "slug": "photo-video-volunteers" },
                    { "id": "health-safety-volunteers", "title": "Health and Safety Volunteers", "slug": "health-safety-volunteers" },
                    { "id": "ambassador-volunteers", "title": "Event Ambassador Volunteers", "slug": "ambassador-volunteers" },
                    { "id": "workshop-volunteers", "title": "Workshop/Session Facilitator Volunteers", "slug": "workshop-volunteers" },
                    { "id": "parking-volunteers", "title": "Parking and Transportation Volunteers", "slug": "parking-volunteers" },
                    { "id": "sales-volunteers", "title": "Merchandise/Sales Volunteers", "slug": "sales-volunteers" },
                    { "id": "green-volunteers", "title": "Sustainability or Green Volunteers", "slug": "green-volunteers" },
                    { "id": "transport-volunteers", "title": "Transportation/Logistics Volunteers", "slug": "transport-volunteers" }
                ]
            },
            {
                "id": "guest-services",
                "title": "Guest Services Team",
                "slug": "guest-services",
                "children": [
                    { "id": "guest-relations", "title": "Guest Relations Manager", "slug": "guest-relations" },
                    { "id": "guest-representatives", "title": "Guest Service Representatives", "slug": "guest-representatives" },
                    { "id": "concierge-team", "title": "Concierge Services Team", "slug": "concierge-team" },
                    { "id": "ticketing-checkin", "title": "Ticketing and Check-in Staff", "slug": "ticketing-checkin" },
                    { "id": "customer-service", "title": "Customer Service Team", "slug": "customer-service" },
                    { "id": "event-ambassadors", "title": "Event Ambassadors", "slug": "event-ambassadors" },
                    { "id": "accessibility", "title": "Accessibility Services Team", "slug": "accessibility" },
                    { "id": "vip-services", "title": "VIP Services Team", "slug": "vip-services" },
                    { "id": "lost-found", "title": "Lost and Found Team", "slug": "lost-found" },
                    { "id": "fnb-support", "title": "Food and Beverage Service Support Team", "slug": "fnb-support" },
                    { "id": "feedback-team", "title": "Guest Survey/Feedback Team", "slug": "feedback-team" },
                    { "id": "cloakroom", "title": "Cloakroom/Bag Check Volunteers", "slug": "cloakroom" },
                    { "id": "parking-assistants", "title": "Transportation and Parking Assistants", "slug": "parking-assistants" }
                ]
            },
            {
                "id": "entertainment-performers",
                "title": "Entertainment and Performers",
                "slug": "entertainment-performers",
                "children": [
                    { "id": "live-bands", "title": "Live Bands and Musicians", "slug": "live-bands" },
                    { "id": "djs", "title": "DJs (Disc Jockeys)", "slug": "djs" },
                    { "id": "comedians", "title": "Comedians", "slug": "comedians" },
                    { "id": "dancers", "title": "Dancers", "slug": "dancers" },
                    { "id": "magicians", "title": "Magicians and Illusionists", "slug": "magicians" },
                    { "id": "circus-performers", "title": "Circus Performers and Acrobats", "slug": "circus-performers" },
                    { "id": "theatrical", "title": "Theatrical Performers and Actors", "slug": "theatrical" },
                    { "id": "impersonators", "title": "Impersonators and Look-alikes", "slug": "impersonators" },
                    { "id": "fire-performers", "title": "Fire Performers", "slug": "fire-performers" },
                    { "id": "live-artists", "title": "Live Painters or Artists", "slug": "live-artists" },
                    { "id": "hosts", "title": "Hosts and Emcees", "slug": "hosts" },
                    { "id": "interactive-performers", "title": "Interactive Performers (Living Statues, Human Robots)", "slug": "interactive-performers" },
                    { "id": "caricature-artists", "title": "Caricature Artists", "slug": "caricature-artists" },
                    { "id": "cultural-performers", "title": "Cultural Performers", "slug": "cultural-performers" },
                    { "id": "aerialists", "title": "Aerialists and Stilt Walkers", "slug": "aerialists" }
                ]
            },
            {
                "id": "transportation-logistics-staff",
                "title": "Transportation and Logistics Staff",
                "slug": "transportation-logistics-staff",
                "children": [
                    { "id": "event-transport-manager", "title": "Event Transport Manager", "slug": "event-transport-manager" },
                    { "id": "shuttle-drivers", "title": "Shuttle Drivers", "slug": "shuttle-drivers" },
                    { "id": "guest-transport-assistants", "title": "Guest Transport Assistants", "slug": "guest-transport-assistants" },
                    { "id": "logistics-coordinators", "title": "Logistics Coordinators", "slug": "logistics-coordinators" },
                    { "id": "truck-drivers", "title": "Truck Drivers and Transport Operators", "slug": "truck-drivers" },
                    { "id": "parking-attendants", "title": "Parking Attendants", "slug": "parking-attendants" },
                    { "id": "vip-transport-coordinators", "title": "VIP Transport Coordinators", "slug": "vip-transport-coordinators" },
                    { "id": "baggage-handlers", "title": "Baggage Handlers", "slug": "baggage-handlers" },
                    { "id": "traffic-control", "title": "Security and Traffic Control Staff", "slug": "traffic-control" },
                    { "id": "loading-crew", "title": "Loading and Unloading Crew", "slug": "loading-crew" },
                    { "id": "escort-drivers", "title": "Escort Drivers", "slug": "escort-drivers" },
                    { "id": "onsite-transport", "title": "On-Site Transportation Coordinators", "slug": "onsite-transport" }
                ]
            },
            {
                "id": "registration-ticketing-staff",
                "title": "Registration and Ticketing Staff",
                "slug": "registration-ticketing-staff",
                "children": [
                    { "id": "registration-desk", "title": "Registration Desk Staff", "slug": "registration-desk" },
                    { "id": "ticket-sales", "title": "Ticket Sales Staff", "slug": "ticket-sales" },
                    { "id": "box-office", "title": "Box Office Staff", "slug": "box-office" },
                    { "id": "ticket-scanning", "title": "Ticket Scanning and Entry Staff", "slug": "ticket-scanning" },
                    { "id": "vip-access", "title": "VIP and Special Access Coordinators", "slug": "vip-access" },
                    { "id": "pre-event-registration", "title": "Pre-Event Registration Assistants", "slug": "pre-event-registration" },
                    { "id": "credentialing", "title": "Event Credentialing Staff", "slug": "credentialing" },
                    { "id": "registration-customer-service", "title": "Customer Service Representatives (Registration)", "slug": "registration-customer-service" },
                    { "id": "group-registration", "title": "Group Registration Coordinators", "slug": "group-registration" },
                    { "id": "onsite-ticketing", "title": "On-Site Ticketing Support Staff", "slug": "onsite-ticketing" }
                ]
            },
            {
                "id": "legal-compliance-team",
                "title": "Legal and Compliance Team",
                "slug": "legal-compliance-team",
                "children": [
                    { "id": "legal-counsel", "title": "Event Legal Counsel", "slug": "legal-counsel" },
                    { "id": "compliance-officer", "title": "Compliance Officer", "slug": "compliance-officer" },
                    { "id": "contract-manager", "title": "Contract Manager", "slug": "contract-manager" },
                    { "id": "risk-management", "title": "Risk Management Specialist", "slug": "risk-management" },
                    { "id": "insurance-coordinator", "title": "Insurance Coordinator", "slug": "insurance-coordinator" },
                    { "id": "data-protection", "title": "Privacy and Data Protection Officer", "slug": "data-protection" },
                    { "id": "licensing", "title": "Licensing and Permitting Coordinator", "slug": "licensing" },
                    { "id": "trademark", "title": "Trademark and Copyright Specialist", "slug": "trademark" },
                    { "id": "security-compliance", "title": "Security and Crowd Control Compliance Officer", "slug": "security-compliance" },
                    { "id": "compliance-auditor", "title": "Legal Compliance Auditor", "slug": "compliance-auditor" }
                ]
            },
            {
                "id": "stagehands-setup-crew",
                "title": "Stagehands/Set-Up Crew",
                "slug": "stagehands-setup-crew",
                "children": [
                    { "id": "general-stagehands", "title": "General Stagehands", "slug": "general-stagehands" },
                    { "id": "lighting-crew", "title": "Lighting Crew", "slug": "lighting-crew" },
                    { "id": "audio-tech", "title": "Audio Technicians", "slug": "audio-tech" },
                    { "id": "rigging-crew", "title": "Rigging Crew", "slug": "rigging-crew" },
                    { "id": "set-construction", "title": "Set Design and Construction Crew", "slug": "set-construction" },
                    { "id": "props-crew", "title": "Props Crew", "slug": "props-crew" },
                    { "id": "projection-video", "title": "Projection and Video Crew", "slug": "projection-video" },
                    { "id": "special-effects", "title": "Stagehands for Special Effects", "slug": "special-effects" },
                    { "id": "backstage-crew", "title": "Backstage Crew", "slug": "backstage-crew" },
                    { "id": "power-electrical", "title": "Power and Electrical Crew", "slug": "power-electrical" },
                    { "id": "stage-manager-assistants", "title": "Stage Manager Assistants", "slug": "stage-manager-assistants" },
                    { "id": "floor-managers", "title": "Crowd Control and Floor Managers", "slug": "floor-managers" }
                ]
            }
        ]
    }
];