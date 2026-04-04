import { IconType } from "react-icons";

export interface ServiceNode {
    id: string;
    title: string;
    slug: string;
    icon?: IconType;
    image?: string;
    children?: ServiceNode[];
}

export const setupFabrication: ServiceNode[] = [

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
    // AV & Sound
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
    // Wedding Element
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
    // Exhibition Element
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
    // Conference Element
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
];