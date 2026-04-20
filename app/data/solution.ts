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
    titleSuffix?: string
    children?: ServiceNode[];
}

export const solutions: ServiceNode[] = [
    // Event Setup
    {
        id: "event-setup",
        title: "Event Setup",
        slug: "eve-set",
        titleSuffix: "Solutions",
        icon: FaTools,
        children: [
            {
                id: "venue-setup",
                title: "Venue Setup",
                slug: "ven-set",
                titleSuffix: "Solutions",
                children: [
                    { id: "venue-layout", title: "Venue Layout", slug: "ven-lay", titleSuffix: "Solutions", },

                    { id: "room-dividers-partitions", title: "Room Dividers/Partitions", slug: "rdp", titleSuffix: "Solutions" },
                    { id: "signage-directional-signage", title: "Signage and Directional Signage", slug: "sds", titleSuffix: "Solutions" },
                    { id: "electrical-setup", title: "Electrical Setup", slug: "ele-set", titleSuffix: "Solutions" },
                    { id: "accessibility-setup", title: "Accessibility Setup", slug: "acc-set", titleSuffix: "Solutions" },
                ],
            },
            {
                id: "audio-visual-equipment",
                title: "Audio-Visual Equipment",
                slug: "aud-vis-equ",
                titleSuffix: "Solutions",
                children: [
                    { id: "sound-systems", title: "Sound Systems", slug: "snd-sys", titleSuffix: "Solutions" },
                    { id: "lighting", title: "Lighting", slug: "lgt", titleSuffix: "Solutions" },
                    { id: "projectors-screens", title: "Projectors and Screens", slug: "pro-scr", titleSuffix: "Solutions" },
                    { id: "cameras-recording-equipment", title: "Cameras and Recording Equipment", slug: "cre", titleSuffix: "Solutions" },
                    { id: "wifi-setup", title: "Wi-Fi Setup", slug: "wifi-set", titleSuffix: "Solutions" },
                ],
            },
            {
                id: "furniture-decor",
                title: "Furniture and Decor",
                slug: "fur-dec",
                titleSuffix: "Solutions",
                children: [
                    { id: "seating-arrangements", title: "Seating Arrangements", slug: "seat-argmts", titleSuffix: "Solutions" },
                    { id: "stage-setup", title: "Stage Setup", slug: "stg-set", titleSuffix: "Solutions" },
                    { id: "table-settings", title: "Table Settings", slug: "tbl-stg", titleSuffix: "Solutions" },
                    { id: "signage-banners", title: "Signage and Banners", slug: "sig-bnr", titleSuffix: "Solutions" },
                    { id: "floral-arrangements", title: "Floral Arrangements", slug: "flr-argmts", titleSuffix: "Solutions" },
                    { id: "flooring-carpeting", title: "Flooring and Carpeting", slug: "flr-crp", titleSuffix: "Solutions" },
                ],
            },
            // {
            //     id: "catering-setup",
            //     title: "Catering Setup",
            //     slug: "catering-setup",
            //     titleSuffix: "Solutions",
            //     children: [
            //         { id: "food-stations-buffets", title: "Food Stations or Buffets", slug: "food-stations-buffets", titleSuffix: "Solutions" },
            //         { id: "beverage-stations", title: "Beverage Stations", slug: "beverage-stations", titleSuffix: "Solutions" },
            //         { id: "cutlery-glassware-plates", title: "Cutlery, Glassware, and Plates", slug: "cutlery-glassware-plates", titleSuffix: "Solutions" },
            //         { id: "waitstaff-organization", title: "Waitstaff Organization", slug: "waitstaff-organization", titleSuffix: "Solutions" },
            //         { id: "food-beverage-display", title: "Food and Beverage Display", slug: "food-beverage-display", titleSuffix: "Solutions" },
            //     ],
            // },
            // {
            //     id: "registration-area-setup",
            //     title: "Registration Area Setup",
            //     slug: "registration-area-setup",
            //     titleSuffix: "Solutions",
            //     children: [
            //         { id: "check-in-tables", title: "Check-in Tables", slug: "check-in-tables", titleSuffix: "Solutions" },
            //         { id: "badge-printing", title: "Badge Printing", slug: "badge-printing", titleSuffix: "Solutions" },
            //         { id: "sign-in-sheets", title: "Sign-in Sheets", slug: "sign-in-sheets", titleSuffix: "Solutions" },
            //         { id: "welcome-kits-materials", title: "Welcome Kits or Materials", slug: "welcome-kits-materials", titleSuffix: "Solutions" },
            //         { id: "staff-for-registration", title: "Staff for Registration", slug: "staff-for-registration", titleSuffix: "Solutions" },
            //     ],
            // },
            // {
            //     id: "technology-connectivity",
            //     title: "Technology and Connectivity",
            //     slug: "technology-connectivity",
            //     titleSuffix: "Solutions",
            //     children: [
            //         { id: "event-apps", title: "Event Apps", slug: "event-apps", titleSuffix: "Solutions" },
            //         { id: "live-streaming-setup", title: "Live Streaming Setup", slug: "live-streaming-setup", titleSuffix: "Solutions" },
            //         { id: "charging-stations", title: "Charging Stations", slug: "charging-stations", titleSuffix: "Solutions" },
            //         { id: "on-site-tech-support", title: "On-Site Tech Support", slug: "on-site-tech-support", titleSuffix: "Solutions" },
            //     ],
            // },
            // {
            //     id: "security-safety-setup",
            //     title: "Security and Safety Setup",
            //     slug: "security-safety-setup",
            //     titleSuffix: "Solutions",
            //     children: [
            //         { id: "security-personnel", title: "Security Personnel", slug: "security-personnel", titleSuffix: "Solutions" },
            //         { id: "bag-checks", title: "Bag Checks", slug: "bag-checks", titleSuffix: "Solutions" },
            //         { id: "first-aid-stations", title: "First Aid Stations", slug: "first-aid-stations", titleSuffix: "Solutions" },
            //         { id: "emergency-exits-signage", title: "Emergency Exits and Signage", slug: "emergency-exits-signage", titleSuffix: "Solutions" },
            //         { id: "crowd-control-barriers", title: "Crowd Control Barriers", slug: "crowd-control-barriers", titleSuffix: "Solutions" },
            //     ],
            // },
            // {
            //     id: "entertainment-performances",
            //     title: "Entertainment and Performances",
            //     slug: "entertainment-performances",
            //     titleSuffix: "Solutions",
            //     children: [
            //         { id: "stage-setup-performers", title: "Stage Setup for Performers", slug: "stage-setup-performers", titleSuffix: "Solutions" },
            //         { id: "sound-lighting-performances", title: "Sound and Lighting Coordination for Performances", slug: "sound-lighting-performances", titleSuffix: "Solutions" },
            //         { id: "backstage-area", title: "Backstage Area", slug: "backstage-area", titleSuffix: "Solutions" },
            //         { id: "interactive-activities", title: "Interactive Activities", slug: "interactive-activities", titleSuffix: "Solutions" },
            //     ],
            // },
            // {
            //     id: "transportation-logistics",
            //     title: "Transportation and Logistics",
            //     slug: "transportation-logistics",
            //     titleSuffix: "Solutions",

            //     children: [
            //         { id: "transportation-coordination", title: "Transportation Coordination", slug: "transportation-coordination", titleSuffix: "Solutions" },
            //         { id: "loading-zones", title: "Loading Zones", slug: "loading-zones", titleSuffix: "Solutions" },
            //         { id: "parking-signage", title: "Signage for Parking", slug: "parking-signage", titleSuffix: "Solutions" },
            //         { id: "vendor-setup", title: "Vendor Setup", slug: "vendor-setup", titleSuffix: "Solutions" },
            //     ],
            // },
            // {
            //     id: "staffing-coordination",
            //     title: "Staffing and Coordination",
            //     slug: "staffing-coordination",
            //     titleSuffix: "Solutions",
            //     children: [
            //         { id: "event-coordinators", title: "Event Coordinators", slug: "event-coordinators", titleSuffix: "Solutions" },
            //         { id: "volunteers", title: "Volunteers", slug: "volunteers", titleSuffix: "Solutions" },
            //         { id: "staff-briefing", title: "Staff Briefing", slug: "staff-briefing", titleSuffix: "Solutions" },
            //         { id: "walkie-talkies-communication", title: "Walkie-Talkies and Communication Devices", slug: "walkie-talkies-communication", titleSuffix: "Solutions" },
            //     ],
            // },
            // {
            //     id: "branding-signage",
            //     title: "Branding and Signage",
            //     slug: "branding-signage",
            //     titleSuffix: "Solutions",
            //     children: [
            //         { id: "event-branding", title: "Event Branding", slug: "event-branding", titleSuffix: "Solutions" },
            //         { id: "sponsor-branding", title: "Sponsor Branding", slug: "sponsor-branding", titleSuffix: "Solutions" },
            //         { id: "directional-signage", title: "Directional Signage", slug: "directional-signage", titleSuffix: "Solutions" },
            //         { id: "promotional-materials", title: "Promotional Materials", slug: "promotional-materials", titleSuffix: "Solutions" },
            //     ],
            // },
            // {
            //     id: "guest-services-amenities",
            //     title: "Guest Services and Amenities",
            //     slug: "guest-services-amenities",
            //     titleSuffix: "Solutions",
            //     children: [
            //         { id: "restroom-facilities", title: "Restroom Facilities", slug: "restroom-facilities", titleSuffix: "Solutions" },
            //         { id: "coat-check-storage", title: "Coat Check/Storage", slug: "coat-check-storage", titleSuffix: "Solutions" },
            //         { id: "comfort-stations", title: "Comfort Stations", slug: "comfort-stations", titleSuffix: "Solutions" },
            //         { id: "signage-services", title: "Signage for Services", slug: "signage-services", titleSuffix: "Solutions" },

            //         {
            //             id: "welcome-reception",
            //             title: "Welcome & Reception",
            //             slug: "welcome-reception",
            //             titleSuffix: "Solutions",
            //             children: [
            //                 { id: "guest-registration", title: "Guest Registration", slug: "guest-registration", titleSuffix: "Solutions" },
            //                 { id: "welcome-desk", title: "Welcome Desk", slug: "welcome-desk", titleSuffix: "Solutions" },
            //                 { id: "concierge-services", title: "Concierge Services", slug: "concierge-services", titleSuffix: "Solutions" },
            //             ],
            //         },
            //         {
            //             id: "vip-services",
            //             title: "VIP Services",
            //             slug: "vip-services",
            //             titleSuffix: "Solutions",
            //             children: [
            //                 { id: "exclusive-access", title: "Exclusive Access", slug: "exclusive-access", titleSuffix: "Solutions" },
            //                 { id: "personalized-assistance", title: "Personalized Assistance", slug: "personalized-assistance", titleSuffix: "Solutions" },
            //                 { id: "private-lounges", title: "Private Lounges", slug: "private-lounges", titleSuffix: "Solutions" },
            //             ],
            //         },
            //         {
            //             id: "guest-communication",
            //             title: "Guest Communication",
            //             slug: "guest-communication",
            //             titleSuffix: "Solutions",
            //             children: [
            //                 { id: "information-booth", title: "Information Booth", slug: "information-booth", titleSuffix: "Solutions" },
            //                 { id: "event-signage", title: "Event Signage", slug: "event-signage", titleSuffix: "Solutions" },
            //                 { id: "guest-feedback", title: "Guest Feedback", slug: "guest-feedback", titleSuffix: "Solutions" },
            //             ],
            //         },
            //     ],
            // },
            // {
            //     id: "post-event-setup",
            //     title: "Post-Event Setup",
            //     slug: "post-event-setup",
            //     titleSuffix: "Solutions",
            //     children: [
            //         { id: "feedback-collection", title: "Feedback Collection", slug: "feedback-collection", titleSuffix: "Solutions" },
            //         { id: "cleaning-crew", title: "Cleaning Crew", slug: "cleaning-crew", titleSuffix: "Solutions" },
            //         { id: "lost-found", title: "Lost and Found", slug: "lost-found", titleSuffix: "Solutions" },
            //     ],
            // },
            // {
            //     id: "wedding-management",
            //     title: "Wedding Management",
            //     slug: "wedding-management",
            //     titleSuffix: "Solutions",
            //     children: [

            //         // 🎯 Ceremony Elements
            //         {
            //             id: "ceremony-elements",
            //             title: "Ceremony Elements",
            //             slug: "ceremony-elements",
            //             titleSuffix: "Solutions",
            //             children: [
            //                 {
            //                     id: "venue",
            //                     title: "Venue",
            //                     slug: "venue",
            //                     titleSuffix: "Solutions",
            //                     children: [
            //                         { id: "outdoor-venue", title: "Outdoor Venues", slug: "outdoor-venue", titleSuffix: "Solutions" },
            //                         { id: "indoor-venues", title: "Indoor Venues", slug: "indoor-venues", titleSuffix: "Solutions" },
            //                         { id: "destination-venues", title: "Destination Venues", slug: "destination-venues", titleSuffix: "Solutions" },
            //                         { id: "non-traditional-venues", title: "Non-traditional Venues", slug: "non-traditional-venues", titleSuffix: "Solutions" },
            //                         { id: "unique-venues", title: "Unique Venues", slug: "unique-venues", titleSuffix: "Solutions" },
            //                     ],
            //                 },
            //                 {
            //                     id: "officiant",
            //                     title: "Officiant",
            //                     slug: "officiant",
            //                     titleSuffix: "Solutions",
            //                     children: [
            //                         { id: "religious-officiants", title: "Religious Officiants", slug: "religious-officiants", titleSuffix: "Solutions" },
            //                         { id: "civil-officiants", title: "Civil Officiants", slug: "civil-officiants", titleSuffix: "Solutions" },
            //                         { id: "professional-officiants", title: "Professional Officiants", slug: "professional-officiants", titleSuffix: "Solutions" },
            //                         { id: "custom-officiants", title: "Custom or Non-Traditional Officiants", slug: "custom-officiants", titleSuffix: "Solutions" },
            //                         { id: "specialized-officiants", title: "Other Specialized Officiants", slug: "specialized-officiants", titleSuffix: "Solutions" },
            //                     ],
            //                 },
            //                 {
            //                     id: "vows",
            //                     title: "Vows",
            //                     slug: "vows",
            //                     titleSuffix: "Solutions",
            //                     children: [
            //                         { id: "traditional-vows", title: "Traditional Vows", slug: "traditional-vows", titleSuffix: "Solutions" },
            //                         { id: "personal-vows", title: "Personal Vows", slug: "personal-vows", titleSuffix: "Solutions" },
            //                         { id: "religious-vows", title: "Religious or Spiritual Vows", slug: "religious-vows", titleSuffix: "Solutions" },
            //                         { id: "cultural-vows", title: "Cultural or Ethnic Vows", slug: "cultural-vows", titleSuffix: "Solutions" },
            //                         { id: "renewal-vows", title: "Renewal Vows", slug: "renewal-vows", titleSuffix: "Solutions" },
            //                         { id: "secular-vows", title: "Non-traditional or Secular Vows", slug: "secular-vows", titleSuffix: "Solutions" },
            //                     ],
            //                 },
            //                 {
            //                     id: "rings",
            //                     title: "Rings",
            //                     slug: "rings",
            //                     titleSuffix: "Solutions",
            //                     children: [
            //                         { id: "wedding-rings", title: "Wedding Rings", slug: "wedding-rings", titleSuffix: "Solutions" },
            //                         { id: "engagement-rings", title: "Engagement Rings", slug: "engagement-rings", titleSuffix: "Solutions" },
            //                         { id: "promise-rings", title: "Promise Rings", slug: "promise-rings", titleSuffix: "Solutions" },
            //                         { id: "eternity-rings", title: "Eternity Rings", slug: "eternity-rings", titleSuffix: "Solutions" },
            //                         { id: "commitment-rings", title: "Commitment Rings", slug: "commitment-rings", titleSuffix: "Solutions" },
            //                     ],
            //                 },
            //                 {
            //                     id: "ceremony-decor",
            //                     title: "Decor",
            //                     slug: "ceremony-decor",
            //                     titleSuffix: "Solutions",
            //                     children: [
            //                         { id: "floral-decor", title: "Floral Decor", slug: "floral-decor", titleSuffix: "Solutions" },
            //                         { id: "lighting-decor", title: "Lighting Decor", slug: "lighting-decor", titleSuffix: "Solutions" },
            //                         { id: "aisle-decor", title: "Aisle Decor", slug: "aisle-decor", titleSuffix: "Solutions" },
            //                         { id: "backdrop-decor", title: "Backdrop/ Arch Decor", slug: "backdrop-decor", titleSuffix: "Solutions" },
            //                         { id: "table-decor", title: "Table Decor", slug: "table-decor", titleSuffix: "Solutions" },
            //                     ],
            //                 },
            //                 {
            //                     id: "ceremony-music",
            //                     title: "Music",
            //                     slug: "ceremony-music",
            //                     titleSuffix: "Solutions",
            //                     children: [
            //                         { id: "processional-music", title: "Processional Music", slug: "processional-music", titleSuffix: "Solutions" },
            //                         { id: "recessional-music", title: "Recessional Music", slug: "recessional-music", titleSuffix: "Solutions" },
            //                         { id: "first-dance-music", title: "First Dance Music", slug: "first-dance-music", titleSuffix: "Solutions" },
            //                     ],
            //                 }
            //             ],
            //         },

            //         // 🎉 Reception Elements
            //         {
            //             id: "reception-elements",
            //             title: "Reception Elements",
            //             slug: "reception-elements",
            //             children: [
            //                 {
            //                     id: "food-drink",
            //                     title: "Food & Drink",
            //                     slug: "food-drink",
            //                     children: [
            //                         { id: "plated-dinner", title: "Plated Dinner", slug: "plated-dinner" },
            //                         { id: "buffet-style", title: "Buffet Style", slug: "buffet-style" },
            //                         { id: "cocktail-hour", title: "Cocktail Hour", slug: "cocktail-hour" },
            //                         { id: "food-stations", title: "Food Stations", slug: "food-stations" },
            //                         { id: "open-bar", title: "Open Bar", slug: "open-bar" },
            //                     ],
            //                 },
            //                 {
            //                     id: "entertainment",
            //                     title: "Entertainment",
            //                     slug: "entertainment",
            //                     children: [
            //                         { id: "live-band", title: "Live Band", slug: "live-band" },
            //                         { id: "dj", title: "DJ (Disc Jockey)", slug: "dj" },
            //                         { id: "photo-booth", title: "Photo Booth", slug: "photo-booth" },
            //                         { id: "dance-performances", title: "Dance Performances", slug: "dance-performances" },
            //                     ],
            //                 }
            //             ],
            //         },

            //         // 📅 Planning
            //         {
            //             id: "planning-coordination",
            //             title: "Planning & Coordination",
            //             slug: "planning-coordination",
            //             children: [
            //                 { id: "budget", title: "Budget", slug: "budget" },
            //                 { id: "timeline", title: "Timeline", slug: "timeline" },
            //                 { id: "vendors", title: "Vendors", slug: "vendors" },
            //                 { id: "invitations", title: "Invitations", slug: "invitations" },
            //                 { id: "transportation", title: "Transportation", slug: "transportation" },
            //                 { id: "legal-requirements", title: "Legal Requirements", slug: "legal-requirements" },
            //             ],
            //         },

            //         // 💫 Symbolic
            //         {
            //             id: "symbolic-elements",
            //             title: "Symbolic Elements",
            //             slug: "symbolic-elements",
            //             children: [
            //                 { id: "traditions", title: "Traditions", slug: "traditions" },
            //                 { id: "blessings", title: "Blessings", slug: "blessings" },
            //                 { id: "gifts", title: "Gifts", slug: "gifts" },
            //             ],
            //         },

            //         // ✈️ Post Wedding
            //         {
            //             id: "post-wedding",
            //             title: "Post-Wedding Elements",
            //             slug: "post-wedding",
            //             children: [
            //                 { id: "honeymoon", title: "Honeymoon", slug: "honeymoon" },
            //                 { id: "thank-you-notes", title: "Thank-You Notes", slug: "thank-you-notes" },
            //                 { id: "photo-video-albums", title: "Photo/Video Albums", slug: "photo-video-albums" },
            //             ],
            //         }

            //     ]
            // },
            // {
            //     id: "exhibition-services",
            //     title: "Exhibition & Trade Show Services",
            //     slug: "exhibition-services",
            //     children: [

            //         {
            //             id: "theme-concept",
            //             title: "Theme & Concept",
            //             slug: "theme-concept",
            //             children: [
            //                 { id: "product-centered-theme", title: "Product-Centered Theme", slug: "product-centered-theme" },
            //                 { id: "industry-focused-theme", title: "Industry-Focused Theme", slug: "industry-focused-theme" },
            //                 { id: "art-culture-theme", title: "Art & Culture Theme", slug: "art-culture-theme" },
            //                 { id: "technology-innovation-theme", title: "Technology & Innovation Theme", slug: "technology-innovation-theme" },
            //                 { id: "sustainability-theme", title: "Sustainability & Environmental Theme", slug: "sustainability-theme" },
            //                 { id: "educational-theme", title: "Educational Theme", slug: "educational-theme" },
            //                 { id: "experiential-theme", title: "Experiential/Interactive Theme", slug: "experiential-theme" },
            //                 { id: "seasonal-theme", title: "Seasonal or Holiday Theme", slug: "seasonal-theme" },
            //                 { id: "corporate-branding-theme", title: "Corporate or Branding Theme", slug: "corporate-branding-theme" },
            //                 { id: "social-cause-theme", title: "Social or Cause-Oriented Theme", slug: "social-cause-theme" },
            //             ],
            //         },

            //         {
            //             id: "venue-selection",
            //             title: "Venue Selection",
            //             slug: "venue-selection",
            //             children: [
            //                 { id: "convention-centers", title: "Convention Centers", slug: "convention-centers" },
            //                 { id: "exhibition-halls", title: "Exhibition Halls", slug: "exhibition-halls" },
            //                 { id: "hotel-ballrooms", title: "Hotel Conference Rooms & Ballrooms", slug: "hotel-ballrooms" },
            //                 { id: "outdoor-open-air-venues", title: "Outdoor Venues & Open-Air Spaces", slug: "outdoor-open-air-venues" },
            //                 { id: "museums-cultural-venues", title: "Museums & Cultural Venues", slug: "museums-cultural-venues" },
            //                 { id: "university-venues", title: "University Campuses or Research Centers", slug: "university-venues" },
            //                 { id: "trade-show-facilities", title: "Trade Show Facilities", slug: "trade-show-facilities" },
            //                 { id: "pop-up-venues", title: "Pop-Up Venues", slug: "pop-up-venues" },
            //                 { id: "hotels-exhibition-spaces", title: "Hotels with Exhibition Spaces", slug: "hotels-exhibition-spaces" },
            //                 { id: "sports-arenas", title: "Sports Arenas and Stadiums", slug: "sports-arenas" },
            //                 { id: "shopping-malls", title: "Shopping Malls or Retail Venues", slug: "shopping-malls" },
            //                 { id: "historical-venues", title: "Historical Buildings or Landmark Sites", slug: "historical-venues" },
            //             ],
            //         },

            //         {
            //             id: "booths-stands",
            //             title: "Booths & Stands",
            //             slug: "booths-stands",
            //             children: [
            //                 { id: "standard-booths", title: "Standard/Basic Booths", slug: "standard-booths" },
            //                 { id: "custom-booths", title: "Custom Booths", slug: "custom-booths" },
            //                 { id: "modular-booths", title: "Modular Booths", slug: "modular-booths" },
            //                 { id: "island-booths", title: "Island Booths", slug: "island-booths" },
            //                 { id: "corner-booths", title: "Corner Booths", slug: "corner-booths" },
            //                 { id: "peninsula-booths", title: "Peninsula Booths", slug: "peninsula-booths" },
            //                 { id: "popup-stands", title: "Pop-up Stands", slug: "popup-stands" },
            //                 { id: "kiosk-stands", title: "Kiosk Stands", slug: "kiosk-stands" },
            //                 { id: "interactive-booths", title: "Interactive or Experience Booths", slug: "interactive-booths" },
            //                 { id: "tabletop-displays", title: "Tabletop Displays", slug: "tabletop-displays" },
            //                 { id: "outdoor-booths", title: "Outdoor Booths", slug: "outdoor-booths" },
            //                 { id: "virtual-booths", title: "Virtual Booths (Digital Booths)", slug: "virtual-booths" },
            //             ],
            //         },

            //         {
            //             id: "design-layout",
            //             title: "Design & Layout",
            //             slug: "design-layout",
            //             children: [
            //                 { id: "linear-layout", title: "Linear Layout", slug: "linear-layout" },
            //                 { id: "grid-layout", title: "Grid Layout", slug: "grid-layout" },
            //                 { id: "island-layout", title: "Island Layout", slug: "island-layout" },
            //                 { id: "peninsula-layout", title: "Peninsula Layout", slug: "peninsula-layout" },
            //                 { id: "corner-layout", title: "Corner Layout", slug: "corner-layout" },
            //                 { id: "circular-layout", title: "Circular or Oval Layout", slug: "circular-layout" },
            //                 { id: "open-layout", title: "Open Layout", slug: "open-layout" },
            //                 { id: "themed-layout", title: "Themed Layout", slug: "themed-layout" },
            //                 { id: "zoning-layout", title: "Zoning Layout", slug: "zoning-layout" },
            //                 { id: "flow-based-layout", title: "Flow-Based Layout", slug: "flow-based-layout" },
            //             ],
            //         },

            //         {
            //             id: "logistics-transportation",
            //             title: "Logistics & Transportation",
            //             slug: "logistics-transportation",
            //             children: [
            //                 { id: "freight-logistics", title: "Freight Logistics", slug: "freight-logistics" },
            //                 { id: "exhibitor-transport", title: "Transport for Exhibitor Materials", slug: "exhibitor-transport" },
            //                 { id: "container-shipping", title: "Containerized Shipping", slug: "container-shipping" },
            //                 { id: "dedicated-transport", title: "Dedicated Exhibition Transport", slug: "dedicated-transport" },
            //                 { id: "on-site-transport", title: "On-Site Transportation", slug: "on-site-transport" },
            //                 { id: "air-freight", title: "Air Freight", slug: "air-freight" },
            //                 { id: "road-freight", title: "Road Freight", slug: "road-freight" },
            //                 { id: "sea-freight", title: "Sea Freight", slug: "sea-freight" },
            //                 { id: "courier-services", title: "Courier Services", slug: "courier-services" },
            //                 { id: "customs-compliance", title: "Customs & Compliance Handling", slug: "customs-compliance" },
            //                 { id: "storage-warehousing", title: "Storage & Warehousing", slug: "storage-warehousing" },
            //             ],
            //         },

            //         {
            //             id: "marketing-promotion",
            //             title: "Marketing & Promotion",
            //             slug: "marketing-promotion",
            //             children: [
            //                 { id: "pre-event-marketing", title: "Pre-Event Marketing", slug: "pre-event-marketing" },
            //                 { id: "digital-marketing", title: "Digital Marketing & Social Media Promotion", slug: "digital-marketing" },
            //                 { id: "influencer-marketing", title: "Influencer and Blogger Partnerships", slug: "influencer-marketing" },
            //                 { id: "event-website", title: "Event Website and Landing Pages", slug: "event-website" },
            //                 { id: "email-marketing", title: "Email Marketing Campaigns", slug: "email-marketing" },
            //                 { id: "public-relations", title: "Public Relations & Media Coverage", slug: "public-relations" },
            //                 { id: "advertising", title: "Advertising", slug: "advertising" },
            //                 { id: "partnerships", title: "Partnerships and Sponsorships", slug: "partnerships" },
            //                 { id: "promotional-collateral", title: "Promotional Collateral and Swag", slug: "promotional-collateral" },
            //                 { id: "contests-giveaways", title: "Contests and Giveaways", slug: "contests-giveaways" },
            //             ],
            //         },

            //         {
            //             id: "additional-services",
            //             title: "Additional Services",
            //             slug: "additional-services",
            //             children: [
            //                 { id: "registration-ticketing", title: "Registration & Ticketing", slug: "registration-ticketing" },
            //                 { id: "catering-refreshments", title: "Catering & Refreshments", slug: "catering-refreshments" },
            //                 { id: "staff-security", title: "Staff & Security", slug: "staff-security" },
            //                 { id: "networking-opportunities", title: "Networking Opportunities", slug: "networking-opportunities" },
            //                 { id: "entertainment-activities", title: "Entertainment & Activities", slug: "entertainment-activities" },
            //                 { id: "sponsorship-partnerships", title: "Sponsorship & Partnerships", slug: "sponsorship-partnerships" },
            //                 { id: "post-event-engagement", title: "Post-Event Engagement", slug: "post-event-engagement" },
            //             ],
            //         }

            //     ]
            // },
            // {
            //     id: "conference-management",
            //     title: "Conference Management",
            //     slug: "conference-management",
            //     children: [

            //         {
            //             id: "conference-theme-concept",
            //             title: "Conference Theme & Concept",
            //             slug: "conference-theme-concept",
            //         },
            //         {
            //             id: "conference-services",
            //             title: "Conference Services",
            //             slug: "conference-services",
            //             children: [
            //                 { id: "agenda-schedule", title: "Conference Agenda & Schedule", slug: "agenda-schedule" },
            //                 { id: "speakers-presenters", title: "Speakers & Presenters", slug: "speakers-presenters" },
            //                 { id: "content-development", title: "Content Development", slug: "content-development" },
            //                 { id: "exhibitors-sponsors", title: "Exhibitors & Sponsors", slug: "exhibitors-sponsors" },
            //                 { id: "marketing-promotion", title: "Marketing & Promotion", slug: "marketing-promotion" },
            //                 { id: "registration-ticketing", title: "Registration & Ticketing", slug: "registration-ticketing" },
            //                 { id: "technology-av", title: "Technology & Audio-Visual Equipment", slug: "technology-av" },
            //                 { id: "event-app", title: "Event App or Website", slug: "event-app" },
            //                 { id: "networking", title: "Networking Opportunities", slug: "networking" },
            //                 { id: "catering", title: "Catering & Refreshments", slug: "catering" },
            //                 { id: "delegate-kits", title: "Delegate Kits & Materials", slug: "delegate-kits" },
            //                 { id: "event-staff", title: "Event Staff & Volunteers", slug: "event-staff" },
            //                 { id: "accommodation-travel", title: "Accommodation & Travel Arrangements", slug: "accommodation-travel" },
            //                 { id: "security-safety", title: "Security & Safety Measures", slug: "security-safety" },
            //                 { id: "signage-branding", title: "Signage & Branding", slug: "signage-branding" },
            //                 { id: "feedback-surveys", title: "Event Feedback & Surveys", slug: "feedback-surveys" },
            //                 { id: "entertainment-social", title: "Entertainment & Social Events", slug: "entertainment-social" },
            //                 { id: "post-engagement", title: "Post-Conference Engagement", slug: "post-engagement" },
            //                 { id: "media-coverage", title: "Media & Press Coverage", slug: "media-coverage" },
            //                 { id: "sustainability", title: "Sustainability & Eco-friendly Practices", slug: "sustainability" },
            //                 { id: "crisis-management", title: "Crisis Management Plan", slug: "crisis-management" },
            //                 { id: "csr", title: "Corporate Social Responsibility", slug: "csr" },
            //                 { id: "legal-compliance", title: "Legal & Compliance Considerations", slug: "legal-compliance" },
            //             ],
            //         }

            //     ]
            // }
        ]
    },
    // AV and Light Sound
    {
        id: "audio-visual-av-light-sound",
        title: "Audio-visual (AV) and Light-Sound",
        slug: "ava-lgt-snd",
        titleSuffix: "Rentals in Delhi",
        icon: FaVolumeUp,
        children: [
            {
                id: "sound-systems",
                title: "Sound Systems",
                slug: "snd-sys",
                titleSuffix: "Rentals in Delhi",
                children: [
                    { id: "pa-system", title: "PA (Public Address) System", slug: "pa-sys", titleSuffix: "Rentals in Delhi" },
                    { id: "line-array-system", title: "Line Array System", slug: "las", titleSuffix: "Rentals in Delhi" },
                    { id: "stereo-sound-system", title: "Stereo Sound System", slug: "sss", titleSuffix: "Rentals in Delhi" },
                    { id: "surround-sound-system", title: "Surround Sound System", slug: "srd-snd-sys", titleSuffix: "Rentals in Delhi" },
                    { id: "stage-monitors", title: "Monitors (Stage Monitors)", slug: "stg-mtr", titleSuffix: "Rentals in Delhi" },
                    { id: "subwoofer-system", title: "Subwoofer System", slug: "swr-sys", titleSuffix: "Rentals in Delhi" },
                    { id: "wireless-sound-system", title: "Wireless Sound System", slug: "wss", titleSuffix: "Rentals in Delhi" },
                    { id: "distributed-sound-system", title: "Distributed Sound System", slug: "dss", titleSuffix: "Rentals in Delhi" },
                    { id: "amplified-speaker-system", title: "Amplified Speaker System", slug: "ass", titleSuffix: "Rentals in Delhi" },
                    { id: "column-array-system", title: "Column Array System", slug: "cas", titleSuffix: "Rentals in Delhi" },
                    { id: "in-ear-monitors", title: "In-Ear Monitors (IEM)", slug: "in-ear-mtr", titleSuffix: "Rentals in Delhi" },
                    { id: "portable-sound-system", title: "Portable Sound System", slug: "pss", titleSuffix: "Rentals in Delhi" },
                    { id: "bluetooth-sound-system", title: "Bluetooth Sound System", slug: "bss", titleSuffix: "Rentals in Delhi" },
                    { id: "tannoy-system", title: "Tannoy System (Public Announcement System)", slug: "tny-sys", titleSuffix: "Rentals in Delhi" },
                    { id: "event-sound-reinforcement", title: "Event Sound Reinforcement System", slug: "esr", titleSuffix: "Rentals in Delhi" },
                    { id: "feedback-control-system", title: "Feedback Control System", slug: "fcs", titleSuffix: "Rentals in Delhi" }
                ]
            },
            // {
            //     id: "lighting-design",
            //     title: "Lighting Design",
            //     slug: "lighting-design",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "ambient-lighting", title: "Ambient Lighting", slug: "ambient-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "accent-lighting", title: "Accent Lighting", slug: "accent-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "task-lighting", title: "Task Lighting", slug: "task-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "stage-lighting", title: "Stage Lighting", slug: "stage-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "spotlighting", title: "Spotlighting", slug: "spotlighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "uplighting", title: "Uplighting", slug: "uplighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "downlighting", title: "Downlighting", slug: "downlighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "colored-lighting", title: "Colored Lighting", slug: "colored-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "intelligent-lighting", title: "Intelligent Lighting (Moving Lights)", slug: "intelligent-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "strobe-lighting", title: "Strobe Lighting", slug: "strobe-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "fairy-lights", title: "Fairy Lights (String Lights)", slug: "fairy-lights", titleSuffix: "Rentals in Delhi" },
            //         { id: "gobo-lighting", title: "Projection Lighting (Gobo Lighting)", slug: "gobo-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "led-lighting", title: "LED Lighting", slug: "led-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "chandeliers", title: "Chandeliers", slug: "chandeliers", titleSuffix: "Rentals in Delhi" },
            //         { id: "flood-lighting", title: "Flood Lighting", slug: "flood-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "natural-lighting", title: "Natural Lighting (Daylight or Skylights)", slug: "natural-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "laser-lights", title: "Laser Lights", slug: "laser-lights", titleSuffix: "Rentals in Delhi" },
            //         { id: "uv-lighting", title: "Blacklight (UV Lighting)", slug: "uv-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "cove-lighting", title: "Cove Lighting", slug: "cove-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "fluorescent-lighting", title: "Fluorescent Lighting", slug: "fluorescent-lighting", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "stage-lighting",
            //     title: "Stage Lighting",
            //     slug: "stage-lighting",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "front-lighting", title: "Front Lighting", slug: "front-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "backlighting", title: "Backlighting", slug: "backlighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "side-lighting", title: "Side Lighting", slug: "side-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "downlighting-stage", title: "Downlighting", slug: "downlighting-stage", titleSuffix: "Rentals in Delhi" },
            //         { id: "up-lighting", title: "Up Lighting", slug: "up-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "spotlighting-stage", title: "Spotlighting", slug: "spotlighting-stage", titleSuffix: "Rentals in Delhi" },
            //         { id: "flood-lighting-stage", title: "Flood Lighting", slug: "flood-lighting-stage", titleSuffix: "Rentals in Delhi" },
            //         { id: "follow-spot-lighting", title: "Follow Spot Lighting", slug: "follow-spot-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "strobe-lighting-stage", title: "Strobe Lighting", slug: "strobe-lighting-stage", titleSuffix: "Rentals in Delhi" },
            //         { id: "gobo-lighting-stage", title: "Gobo Lighting (Pattern Projection)", slug: "gobo-lighting-stage", titleSuffix: "Rentals in Delhi" },
            //         { id: "moving-head-lights", title: "Moving Head Lights", slug: "moving-head-lights", titleSuffix: "Rentals in Delhi" },
            //         { id: "wash-lighting", title: "Wash Lighting", slug: "wash-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "par-cans", title: "PAR Cans (Parabolic Aluminized Reflector Cans)", slug: "par-cans", titleSuffix: "Rentals in Delhi" },
            //         { id: "led-stage-lighting", title: "LED Stage Lighting", slug: "led-stage-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "cyclorama-lighting", title: "Cyclorama Lighting", slug: "cyclorama-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "practical-lighting", title: "Practical Lighting", slug: "practical-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "ambient-lighting-mood", title: "Ambient Lighting (Mood Lighting)", slug: "ambient-lighting-mood", titleSuffix: "Rentals in Delhi" },
            //         { id: "uv-lighting-stage", title: "Blacklight (UV Lighting)", slug: "uv-lighting-stage", titleSuffix: "Rentals in Delhi" },
            //         { id: "hazer-smoke-machines", title: "Hazer and Smoke Machines", slug: "hazer-smoke-machines", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "projection-visual-displays",
            //     title: "Projection and Visual Displays",
            //     slug: "projection-visual-displays",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "projector-displays", title: "Projector Displays (Standard Projection)", slug: "projector-displays", titleSuffix: "Rentals in Delhi" },
            //         { id: "led-wall-displays", title: "LED Wall Displays", slug: "led-wall-displays", titleSuffix: "Rentals in Delhi" },
            //         { id: "projection-mapping", title: "Projection Mapping (Video Mapping)", slug: "projection-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-displays", title: "Interactive Displays", slug: "interactive-displays", titleSuffix: "Rentals in Delhi" },
            //         { id: "digital-signage", title: "Digital Signage", slug: "digital-signage", titleSuffix: "Rentals in Delhi" },
            //         { id: "laser-projectors", title: "Laser Projectors", slug: "laser-projectors", titleSuffix: "Rentals in Delhi" },
            //         { id: "4k-hd-projectors", title: "4K and HD Projectors", slug: "4k-hd-projectors", titleSuffix: "Rentals in Delhi" },
            //         { id: "vr-displays", title: "Virtual Reality (VR) Displays", slug: "vr-displays", titleSuffix: "Rentals in Delhi" },
            //         { id: "ar-displays", title: "Augmented Reality (AR) Displays", slug: "ar-displays", titleSuffix: "Rentals in Delhi" },
            //         { id: "360-degree-projection", title: "360-Degree Projection", slug: "360-degree-projection", titleSuffix: "Rentals in Delhi" },
            //         { id: "holographic-displays", title: "Holographic Displays", slug: "holographic-displays", titleSuffix: "Rentals in Delhi" },
            //         { id: "flip-discs", title: "Flip Discs and Mechanical Displays", slug: "flip-discs", titleSuffix: "Rentals in Delhi" },
            //         { id: "projection-domes", title: "Immersive Projection Domes (Dome Projections)", slug: "projection-domes", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-projection", title: "Interactive Projection", slug: "interactive-projection", titleSuffix: "Rentals in Delhi" },
            //         { id: "oled-displays", title: "OLED Displays", slug: "oled-displays", titleSuffix: "Rentals in Delhi" },
            //         { id: "video-walls", title: "Video Walls", slug: "video-walls", titleSuffix: "Rentals in Delhi" },
            //         { id: "flat-panel-displays", title: "Flat Panel Displays", slug: "flat-panel-displays", titleSuffix: "Rentals in Delhi" },
            //         { id: "large-scale-projections", title: "Pano and Large-Scale Projections", slug: "large-scale-projections", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "led-screens-video-walls",
            //     title: "LED Screens and Video Walls",
            //     slug: "led-screens-video-walls",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "indoor-led-screens", title: "Indoor LED Screens", slug: "indoor-led-screens", titleSuffix: "Rentals in Delhi" },
            //         { id: "outdoor-led-screens", title: "Outdoor LED Screens", slug: "outdoor-led-screens", titleSuffix: "Rentals in Delhi" },
            //         { id: "curved-led-screens", title: "Curved LED Screens", slug: "curved-led-screens", titleSuffix: "Rentals in Delhi" },
            //         { id: "modular-led-walls", title: "Modular LED Walls", slug: "modular-led-walls", titleSuffix: "Rentals in Delhi" },
            //         { id: "flexible-led-screens", title: "Flexible LED Screens", slug: "flexible-led-screens", titleSuffix: "Rentals in Delhi" },
            //         { id: "transparent-led-screens", title: "Transparent LED Screens", slug: "transparent-led-screens", titleSuffix: "Rentals in Delhi" },
            //         { id: "rear-projection-led", title: "Rear-Projection LED Screens", slug: "rear-projection-led", titleSuffix: "Rentals in Delhi" },
            //         { id: "double-sided-led", title: "Double-Sided LED Screens", slug: "double-sided-led", titleSuffix: "Rentals in Delhi" },
            //         { id: "hd-led-screens", title: "High-Definition (HD) LED Screens", slug: "hd-led-screens", titleSuffix: "Rentals in Delhi" },
            //         { id: "4k-led-screens", title: "4K LED Screens", slug: "4k-led-screens", titleSuffix: "Rentals in Delhi" },
            //         { id: "oled-video-walls", title: "OLED Video Walls", slug: "oled-video-walls", titleSuffix: "Rentals in Delhi" },
            //         { id: "p3-p4-p5-panels", title: "P3, P4, P5 LED Panels (Pixel Pitch)", slug: "p3-p4-p5-panels", titleSuffix: "Rentals in Delhi" },
            //         { id: "flexible-pixel-led", title: "Flexible Pixel Pitch LED Walls", slug: "flexible-pixel-led", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-led-screens", title: "Interactive LED Screens", slug: "interactive-led-screens", titleSuffix: "Rentals in Delhi" },
            //         { id: "full-color-led-walls", title: "Full-Color LED Walls", slug: "full-color-led-walls", titleSuffix: "Rentals in Delhi" },
            //         { id: "digital-billboards", title: "Digital Billboards", slug: "digital-billboards", titleSuffix: "Rentals in Delhi" },
            //         { id: "mini-led-walls", title: "Mini LED Walls (Small-Scale)", slug: "mini-led-walls", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "live-streaming-broadcasting",
            //     title: "Live Streaming and Broadcasting",
            //     slug: "live-streaming-broadcasting",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "single-camera-live-streaming", title: "Single-Camera Live Streaming", slug: "single-camera-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "multi-camera-live-streaming", title: "Multi-Camera Live Streaming", slug: "multi-camera-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "webinar-live-streaming", title: "Webinar Live Streaming", slug: "webinar-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "event-live-streaming", title: "Event Live Streaming (Full Event Broadcast)", slug: "event-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "sports-live-streaming", title: "Sports Live Streaming", slug: "sports-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "social-media-live-streaming", title: "Social Media Live Streaming", slug: "social-media-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "virtual-event-streaming", title: "Virtual Event Streaming (Hybrid Events)", slug: "virtual-event-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "360-degree-live-streaming", title: "360-Degree Live Streaming", slug: "360-degree-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "drone-live-streaming", title: "Drone Live Streaming", slug: "drone-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-live-streaming", title: "Live Streaming with Interactive Features", slug: "interactive-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "on-demand-live-streaming", title: "Live Streaming with On-Demand Content", slug: "on-demand-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "multi-platform-streaming", title: "Live Streaming to Multiple Platforms (Multi-Stream)", slug: "multi-platform-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "tv-cable-broadcasting", title: "TV and Cable Broadcasting", slug: "tv-cable-broadcasting", titleSuffix: "Rentals in Delhi" },
            //         { id: "vr-live-streaming", title: "Virtual Reality (VR) Live Streaming", slug: "vr-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "mobile-live-streaming", title: "Mobile Live Streaming", slug: "mobile-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "esports-live-streaming", title: "Livestreaming for eSports", slug: "esports-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "satellite-broadcasting", title: "Satellite Broadcasting", slug: "satellite-broadcasting", titleSuffix: "Rentals in Delhi" },
            //         { id: "audio-only-live-streaming", title: "Audio-Only Live Streaming", slug: "audio-only-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "corporate-live-streaming", title: "Corporate Live Streaming", slug: "corporate-live-streaming", titleSuffix: "Rentals in Delhi" },
            //         { id: "closed-caption-live-streaming", title: "Live Streaming with Closed Captioning", slug: "closed-caption-live-streaming", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "sound-mixing-audio-control",
            //     title: "Sound Mixing and Audio Control",
            //     slug: "sound-mixing-audio-control",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "live-sound-mixing", title: "Live Sound Mixing", slug: "live-sound-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "studio-sound-mixing", title: "Studio Sound Mixing", slug: "studio-sound-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "broadcast-audio-mixing", title: "Broadcast Audio Mixing", slug: "broadcast-audio-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "multitrack-audio-mixing", title: "Multitrack Audio Mixing", slug: "multitrack-audio-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "surround-sound-mixing", title: "Surround Sound Mixing", slug: "surround-sound-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "dolby-atmos-mixing", title: "Dolby Atmos Sound Mixing", slug: "dolby-atmos-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "sound-design-mixing", title: "Sound Design and Mixing", slug: "sound-design-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "daw-mixing", title: "Digital Audio Workstation (DAW) Mixing", slug: "daw-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "ambient-sound-mixing", title: "Ambient Sound Mixing", slug: "ambient-sound-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "monitor-mixing", title: "Monitor Mixing", slug: "monitor-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "automated-mixing", title: "Automated Mixing", slug: "automated-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "feedback-control", title: "Feedback Control", slug: "feedback-control-audio", titleSuffix: "Rentals in Delhi" },
            //         { id: "live-event-audio-mixing", title: "Live Event Audio Mixing", slug: "live-event-audio-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "pa-system-mixing", title: "PA (Public Address) System Mixing", slug: "pa-system-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "wireless-audio-mixing", title: "Wireless Audio Mixing", slug: "wireless-audio-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "mobile-sound-mixing", title: "Mobile Sound Mixing", slug: "mobile-sound-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "noise-reduction-processing", title: "Noise Reduction and Signal Processing", slug: "noise-reduction-processing", titleSuffix: "Rentals in Delhi" },
            //         { id: "analog-sound-mixing", title: "Analog Sound Mixing", slug: "analog-sound-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "digital-sound-mixing", title: "Digital Sound Mixing", slug: "digital-sound-mixing", titleSuffix: "Rentals in Delhi" },
            //         { id: "equalization-frequency-management", title: "Equalization (EQ) and Frequency Management", slug: "equalization-frequency-management", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "theatrical-special-effects-lighting",
            //     title: "Theatrical and Special Effects Lighting",
            //     slug: "theatrical-special-effects-lighting",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "spotlights", title: "Spotlights", slug: "spotlights", titleSuffix: "Rentals in Delhi" },
            //         { id: "floodlights", title: "Floodlights", slug: "floodlights", titleSuffix: "Rentals in Delhi" },
            //         { id: "led-lighting-effects", title: "LED Lighting", slug: "led-lighting-effects", titleSuffix: "Rentals in Delhi" },
            //         { id: "gobo-projectors", title: "Gobo Projectors", slug: "gobo-projectors", titleSuffix: "Rentals in Delhi" },
            //         { id: "strobe-lighting-effects", title: "Strobe Lighting", slug: "strobe-lighting-effects", titleSuffix: "Rentals in Delhi" },
            //         { id: "follow-spots", title: "Follow Spots", slug: "follow-spots", titleSuffix: "Rentals in Delhi" },
            //         { id: "moving-head-lights-effects", title: "Moving Head Lights", slug: "moving-head-lights-effects", titleSuffix: "Rentals in Delhi" },
            //         { id: "uv-blacklights", title: "Blacklights (UV Lights)", slug: "uv-blacklights", titleSuffix: "Rentals in Delhi" },
            //         { id: "laser-lighting-effects", title: "Laser Lighting", slug: "laser-lighting-effects", titleSuffix: "Rentals in Delhi" },
            //         { id: "hazer-fog-machines", title: "Hazer and Fog Machines", slug: "hazer-fog-machines", titleSuffix: "Rentals in Delhi" },
            //         { id: "chase-lighting", title: "Chase Lighting", slug: "chase-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "color-changing-lights", title: "Color Changing Lights", slug: "color-changing-lights", titleSuffix: "Rentals in Delhi" },
            //         { id: "automated-lighting", title: "Automated Lighting", slug: "automated-lighting-effects", titleSuffix: "Rentals in Delhi" },
            //         { id: "cyclorama-lighting-effects", title: "Cyclorama Lighting", slug: "cyclorama-lighting-effects", titleSuffix: "Rentals in Delhi" },
            //         { id: "pin-spot-lighting", title: "Pin Spot Lighting", slug: "pin-spot-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "scene-change-lighting", title: "Scene Change Lighting", slug: "scene-change-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "starlight-effects", title: "Starlight Effects", slug: "starlight-effects", titleSuffix: "Rentals in Delhi" },
            //         { id: "glitter-sparkle-effects", title: "Glitter and Sparkle Effects", slug: "glitter-sparkle-effects", titleSuffix: "Rentals in Delhi" },
            //         { id: "wind-machines", title: "Wind Machines", slug: "wind-machines", titleSuffix: "Rentals in Delhi" },
            //         { id: "pyrotechnic-effects", title: "Pyrotechnic Effects (with Lighting)", slug: "pyrotechnic-effects", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "ambient-lighting",
            //     title: "Ambient Lighting",
            //     slug: "ambient-lighting",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "general-illumination", title: "General Illumination", slug: "general-illumination", titleSuffix: "Rentals in Delhi" },
            //         { id: "soft-lighting", title: "Soft Lighting", slug: "soft-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "ambient-led-lighting", title: "Ambient LED Lighting", slug: "ambient-led-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "natural-lighting-ambient", title: "Natural Lighting", slug: "natural-lighting-ambient", titleSuffix: "Rentals in Delhi" },
            //         { id: "indirect-lighting", title: "Indirect Lighting", slug: "indirect-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "ambient-ceiling-lights", title: "Ambient Ceiling Lights", slug: "ambient-ceiling-lights", titleSuffix: "Rentals in Delhi" },
            //         { id: "cove-lighting-ambient", title: "Cove Lighting", slug: "cove-lighting-ambient", titleSuffix: "Rentals in Delhi" },
            //         { id: "recessed-lighting", title: "Recessed Lighting", slug: "recessed-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "backlit-lighting", title: "Backlit Lighting", slug: "backlit-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "mood-lighting", title: "Mood Lighting", slug: "mood-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "track-lighting", title: "Track Lighting", slug: "track-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "floor-table-lamps", title: "Floor Lamps and Table Lamps", slug: "floor-table-lamps", titleSuffix: "Rentals in Delhi" },
            //         { id: "dimming-control-lighting", title: "Ambient Lighting with Dimming Control", slug: "dimming-control-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "lanterns-string-lights", title: "Lanterns and String Lights", slug: "lanterns-string-lights", titleSuffix: "Rentals in Delhi" },
            //         { id: "smart-lighting", title: "Smart Lighting", slug: "smart-lighting", titleSuffix: "Rentals in Delhi" },
            //         { id: "wall-sconces", title: "Wall Sconces", slug: "wall-sconces", titleSuffix: "Rentals in Delhi" },
            //         { id: "hanging-lights", title: "Hanging Lights", slug: "hanging-lights", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "interactive-audio-visual-experiences",
            //     title: "Interactive Audio-Visual Experiences",
            //     slug: "interactive-audio-visual-experiences",
            //     children: [
            //         { id: "immersive-av-installations", title: "Immersive Audio-Visual Installations", slug: "immersive-av-installations", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-video-mapping", title: "Interactive Video Mapping", slug: "interactive-video-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "gesture-controlled-av", title: "Gesture-Controlled AV Experiences", slug: "gesture-controlled-av", titleSuffix: "Rentals in Delhi" },
            //         { id: "ar-experiences", title: "Augmented Reality (AR) Experiences", slug: "ar-experiences", titleSuffix: "Rentals in Delhi" },
            //         { id: "vr-experiences", title: "Virtual Reality (VR) Experiences", slug: "vr-experiences", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-light-sound-sculptures", title: "Interactive Light and Sound Sculptures", slug: "interactive-light-sound-sculptures", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-concerts", title: "Interactive Concerts and Live Shows", slug: "interactive-concerts", titleSuffix: "Rentals in Delhi" },
            //         { id: "motion-activated-av", title: "Motion-Activated AV Systems", slug: "motion-activated-av", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-gaming-av", title: "Interactive Gaming and Audio-Visual Displays", slug: "interactive-gaming-av", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-theatrical-performances", title: "Interactive Theatrical Performances", slug: "interactive-theatrical-performances", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-3d-audio", title: "Interactive 3D Audio Experiences", slug: "interactive-3d-audio", titleSuffix: "Rentals in Delhi" },
            //         { id: "projection-based-games", title: "Interactive Projection-Based Games", slug: "projection-based-games", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-light-shows", title: "Interactive Light Shows", slug: "interactive-light-shows", titleSuffix: "Rentals in Delhi" },
            //         { id: "sensor-based-soundscapes", title: "Sensor-Based Interactive Soundscapes", slug: "sensor-based-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "haptic-feedback-av", title: "Haptic Feedback AV Experiences", slug: "haptic-feedback-av", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "sound-light-synchronization",
            //     title: "Sound and Light Synchronization (Choreographed Shows)",
            //     slug: "sound-light-synchronization",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "music-driven-light-shows", title: "Music-Driven Light Shows", slug: "music-driven-light-shows", titleSuffix: "Rentals in Delhi" },
            //         { id: "laser-light-shows", title: "Laser Light Shows", slug: "laser-light-shows", titleSuffix: "Rentals in Delhi" },
            //         { id: "theatrical-lighting-sound", title: "Theatrical Lighting with Sound Effects", slug: "theatrical-lighting-sound", titleSuffix: "Rentals in Delhi" },
            //         { id: "fireworks-music-sync", title: "Fireworks and Music Synchronization", slug: "fireworks-music-sync", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-light-sound-shows", title: "Interactive Light and Sound Shows", slug: "interactive-light-sound-shows", titleSuffix: "Rentals in Delhi" },
            //         { id: "stage-productions-moving-lights", title: "Stage Productions and Concerts with Moving Lights", slug: "stage-productions-moving-lights", titleSuffix: "Rentals in Delhi" },
            //         { id: "projection-mapping-audio-sync", title: "Projection Mapping with Audio Synchronization", slug: "projection-mapping-audio-sync", titleSuffix: "Rentals in Delhi" },
            //         { id: "dance-light-sound", title: "Dance Performances with Light and Sound Choreography", slug: "dance-light-sound", titleSuffix: "Rentals in Delhi" },
            //         { id: "laser-led-dance", title: "Laser and LED Dance Shows", slug: "laser-led-dance", titleSuffix: "Rentals in Delhi" },
            //         { id: "theme-park-shows", title: "Theme Park Shows (e.g., Disney or Universal Studios)", slug: "theme-park-shows", titleSuffix: "Rentals in Delhi" },
            //         { id: "multimedia-concerts", title: "Multimedia Concerts", slug: "multimedia-concerts", titleSuffix: "Rentals in Delhi" },
            //         { id: "corporate-synced-shows", title: "Synced Light and Sound Shows for Corporate Events", slug: "corporate-synced-shows", titleSuffix: "Rentals in Delhi" },
            //         { id: "automated-systems-exhibitions", title: "Automated Sound and Light Systems for Exhibitions", slug: "automated-systems-exhibitions", titleSuffix: "Rentals in Delhi" },
            //         { id: "festival-light-shows", title: "Festival Light Shows", slug: "festival-light-shows", titleSuffix: "Rentals in Delhi" },
            //         { id: "holiday-light-displays", title: "Holiday Light Displays", slug: "holiday-light-displays", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "wireless-audio-systems",
            //     title: "Wireless Audio Systems",
            //     slug: "wireless-audio-systems",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "wireless-microphones", title: "Wireless Microphone Systems", slug: "wireless-microphones", titleSuffix: "Rentals in Delhi" },
            //         { id: "wireless-speakers", title: "Wireless Speaker Systems", slug: "wireless-speakers", titleSuffix: "Rentals in Delhi" },
            //         { id: "audio-transmitters-receivers", title: "Wireless Audio Transmitters and Receivers", slug: "audio-transmitters-receivers", titleSuffix: "Rentals in Delhi" },
            //         { id: "wireless-iems", title: "Wireless In-Ear Monitors (IEMs)", slug: "wireless-iems", titleSuffix: "Rentals in Delhi" },
            //         { id: "conference-audio-wireless", title: "Wireless Audio for Conference Systems", slug: "conference-audio-wireless", titleSuffix: "Rentals in Delhi" },
            //         { id: "bluetooth-audio", title: "Bluetooth Audio Systems", slug: "bluetooth-audio", titleSuffix: "Rentals in Delhi" },
            //         { id: "wifi-audio", title: "Wi-Fi Audio Systems", slug: "wifi-audio", titleSuffix: "Rentals in Delhi" },
            //         { id: "wads", title: "Wireless Audio Distribution Systems (WADS)", slug: "wads", titleSuffix: "Rentals in Delhi" },
            //         { id: "wireless-audio-video", title: "Wireless Audio for Video", slug: "wireless-audio-video", titleSuffix: "Rentals in Delhi" },
            //         { id: "wireless-pa", title: "Wireless PA Systems", slug: "wireless-pa", titleSuffix: "Rentals in Delhi" },
            //         { id: "home-theater-wireless", title: "Wireless Audio for Home Theater Systems", slug: "home-theater-wireless", titleSuffix: "Rentals in Delhi" },
            //         { id: "large-scale-wireless-audio", title: "Wireless Audio for Large-Scale Events", slug: "large-scale-wireless-audio", titleSuffix: "Rentals in Delhi" },
            //         { id: "aoip", title: "Wireless Audio Over IP (AoIP)", slug: "aoip", titleSuffix: "Rentals in Delhi" },
            //         { id: "audio-streaming-systems", title: "Wireless Audio Streaming Systems", slug: "audio-streaming-systems", titleSuffix: "Rentals in Delhi" },
            //         { id: "rf-wireless-audio", title: "RF (Radio Frequency) Wireless Audio Systems", slug: "rf-wireless-audio", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "hearing-assistance-systems",
            //     title: "Hearing Assistance Systems",
            //     slug: "hearing-assistance-systems",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "induction-loop", title: "Induction Loop Systems (Hearing Loop)", slug: "induction-loop", titleSuffix: "Rentals in Delhi" },
            //         { id: "fm-systems", title: "FM Systems (Frequency Modulation Systems)", slug: "fm-systems", titleSuffix: "Rentals in Delhi" },
            //         { id: "infrared-systems", title: "Infrared (IR) Systems", slug: "infrared-systems", titleSuffix: "Rentals in Delhi" },
            //         { id: "bluetooth-hearing", title: "Bluetooth Hearing Assistance Systems", slug: "bluetooth-hearing", titleSuffix: "Rentals in Delhi" },
            //         { id: "personal-amplification", title: "Personal Amplification Systems", slug: "personal-amplification", titleSuffix: "Rentals in Delhi" },
            //         { id: "assistive-listening", title: "Assistive Listening Devices (ALDs)", slug: "assistive-listening", titleSuffix: "Rentals in Delhi" },
            //         { id: "captioning-systems", title: "Captioning Systems", slug: "captioning-systems", titleSuffix: "Rentals in Delhi" },
            //         { id: "t-coil", title: "Telecoil (T-Coil) Systems", slug: "t-coil", titleSuffix: "Rentals in Delhi" },
            //         { id: "visual-alert-systems", title: "Visual Alert Systems", slug: "visual-alert-systems", titleSuffix: "Rentals in Delhi" },
            //         { id: "directional-microphones", title: "Directional Microphone Systems", slug: "directional-microphones", titleSuffix: "Rentals in Delhi" },
            //         { id: "sound-field-systems", title: "Sound Field Systems", slug: "sound-field-systems", titleSuffix: "Rentals in Delhi" },
            //         { id: "hearing-aid-compatible", title: "Hearing Aid-Compatible AV Systems", slug: "hearing-aid-compatible", titleSuffix: "Rentals in Delhi" },
            //         { id: "wireless-microphone-hearing", title: "Wireless Microphone for Hearing Impaired (Direct Audio Input)", slug: "wireless-microphone-hearing", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "interactive-projection-mapping",
            //     title: "Interactive Projection Mapping",
            //     slug: "interactive-projection-mapping",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "touch-based-mapping", title: "Touch-Based Interactive Projection Mapping", slug: "touch-based-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "gesture-based-mapping", title: "Gesture-Based Interactive Projection Mapping", slug: "gesture-based-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "sound-responsive-mapping", title: "Sound-Responsive Interactive Projection Mapping", slug: "sound-responsive-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "body-tracking-mapping", title: "Body-Tracking Interactive Projection Mapping", slug: "body-tracking-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "location-based-mapping", title: "Location-Based Interactive Projection Mapping", slug: "location-based-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-floor-mapping", title: "Interactive Floor or Surface Mapping", slug: "interactive-floor-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "ar-projection-mapping", title: "Augmented Reality (AR) with Interactive Projection Mapping", slug: "ar-projection-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "3d-projection-mapping", title: "Interactive 3D Projection Mapping", slug: "3d-projection-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "architectural-projection", title: "Interactive Projection on Architectural Surfaces", slug: "architectural-projection", titleSuffix: "Rentals in Delhi" },
            //         { id: "data-driven-mapping", title: "Real-Time Data-Driven Interactive Projection Mapping", slug: "data-driven-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "product-visualization", title: "Interactive Product Visualization (Retail/Exhibition)", slug: "product-visualization", titleSuffix: "Rentals in Delhi" },
            //         { id: "storytelling-projection", title: "Interactive Storytelling with Projection Mapping", slug: "storytelling-projection", titleSuffix: "Rentals in Delhi" },
            //         { id: "moving-object-projection", title: "Interactive Projection on Moving Objects", slug: "moving-object-projection", titleSuffix: "Rentals in Delhi" },
            //         { id: "public-art-mapping", title: "Interactive Projection Mapping for Public Art Installations", slug: "public-art-mapping", titleSuffix: "Rentals in Delhi" },
            //         { id: "virtual-environment-projection", title: "Interactive Projection in Virtual Environments", slug: "virtual-environment-projection", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "soundproofing-acoustic-treatments",
            //     title: "Soundproofing and Acoustic Treatments",
            //     slug: "soundproofing-acoustic-treatments",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "acoustic-panels", title: "Acoustic Panels", slug: "acoustic-panels", titleSuffix: "Rentals in Delhi" },
            //         { id: "bass-traps", title: "Bass Traps", slug: "bass-traps", titleSuffix: "Rentals in Delhi" },
            //         { id: "soundproof-doors-windows", title: "Soundproof Doors and Windows", slug: "soundproof-doors-windows", titleSuffix: "Rentals in Delhi" },
            //         { id: "acoustic-ceilings", title: "Acoustic Ceilings (Acoustic Tiles or Panels)", slug: "acoustic-ceilings", titleSuffix: "Rentals in Delhi" },
            //         { id: "soundproof-insulation", title: "Soundproofing Insulation", slug: "soundproof-insulation", titleSuffix: "Rentals in Delhi" },
            //         { id: "acoustic-diffusers", title: "Acoustic Diffusers", slug: "acoustic-diffusers", titleSuffix: "Rentals in Delhi" },
            //         { id: "mlv", title: "Mass-Loaded Vinyl (MLV)", slug: "mlv", titleSuffix: "Rentals in Delhi" },
            //         { id: "floor-underlayment", title: "Soundproof Floor Underlayment", slug: "floor-underlayment", titleSuffix: "Rentals in Delhi" },
            //         { id: "acoustic-curtains", title: "Acoustic Curtains or Blinds", slug: "acoustic-curtains", titleSuffix: "Rentals in Delhi" },
            //         { id: "resilient-channels", title: "Resilient Channels", slug: "resilient-channels", titleSuffix: "Rentals in Delhi" },
            //         { id: "soundproof-paint", title: "Soundproof Paint", slug: "soundproof-paint", titleSuffix: "Rentals in Delhi" },
            //         { id: "acoustic-foam", title: "Acoustic Foam", slug: "acoustic-foam", titleSuffix: "Rentals in Delhi" },
            //         { id: "double-glazed-windows", title: "Double-Glazed or Laminated Glass Windows", slug: "double-glazed-windows", titleSuffix: "Rentals in Delhi" },
            //         { id: "sealing-gaps", title: "Sealing Gaps and Cracks", slug: "sealing-gaps", titleSuffix: "Rentals in Delhi" },
            //         { id: "acoustic-baffles", title: "Acoustic Baffles", slug: "acoustic-baffles", titleSuffix: "Rentals in Delhi" }
            //     ]
            // },
            // {
            //     id: "ambient-soundscapes",
            //     title: "Ambient Soundscapes",
            //     slug: "ambient-soundscapes",
            //     titleSuffix: "Rentals in Delhi",
            //     children: [
            //         { id: "natural-soundscapes", title: "Natural Soundscapes", slug: "natural-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "urban-soundscapes", title: "Urban Soundscapes", slug: "urban-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "industrial-soundscapes", title: "Industrial Soundscapes", slug: "industrial-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "futuristic-sci-fi-soundscapes", title: "Futuristic or Sci-Fi Soundscapes", slug: "futuristic-sci-fi-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "cultural-traditional-soundscapes", title: "Cultural or Traditional Soundscapes", slug: "cultural-traditional-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "environmental-soundscapes", title: "Environmental Soundscapes", slug: "environmental-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "cinematic-filmic-soundscapes", title: "Cinematic or Filmic Soundscapes", slug: "cinematic-filmic-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "ambient-music-soundscapes", title: "Ambient Music Soundscapes", slug: "ambient-music-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "interactive-soundscapes", title: "Interactive Soundscapes", slug: "interactive-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "psychological-soundscapes", title: "Psychological Soundscapes", slug: "psychological-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "thematic-soundscapes", title: "Thematic Soundscapes", slug: "thematic-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "underwater-soundscapes", title: "Underwater Soundscapes", slug: "underwater-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "space-cosmic-soundscapes", title: "Space and Cosmic Soundscapes", slug: "space-cosmic-soundscapes", titleSuffix: "Rentals in Delhi" },
            //         { id: "virtual-gaming-soundscapes", title: "Virtual or Gaming Soundscapes", slug: "virtual-gaming-soundscapes", titleSuffix: "Rentals in Delhi" }
            //     ]
            // }
        ]
    },
    // Venue Booking
    {
        id: "venue-booking",
        title: "Venue Booking",
        slug: "ven-bkg",
        titleSuffix: "Services in Delhi",
        icon: FaMapMarkerAlt,
        children: [
            {
                id: "conference-convention-centers",
                title: "Conference and Convention Centers",
                slug: "ccc",
                titleSuffix: "Services in Delhi",
                children: [
                    { id: "large-scale-convention-centers", title: "Large-Scale Convention Centers", slug: "lsc-ctr", titleSuffix: "Services in Delhi" },
                    { id: "corporate-conference-centers", title: "Corporate Conference Centers", slug: "corp-ctr", titleSuffix: "Services in Delhi" },
                    { id: "exhibition-centers", title: "Exhibition Centers", slug: "exh-ctr", titleSuffix: "Services in Delhi" },
                    { id: "convention-halls", title: "Convention Halls", slug: "cnt-hls", titleSuffix: "Services in Delhi" },
                    { id: "hybrid-conference-centers", title: "Hybrid Conference Centers", slug: "hcc", titleSuffix: "Services in Delhi" },
                    { id: "regional-local-conference-centers", title: "Regional or Local Conference Centers", slug: "rlc-ctr", titleSuffix: "Services in Delhi" },
                    { id: "specialized-conference-centers", title: "Specialized Conference Centers", slug: "spc-ctr", titleSuffix: "Services in Delhi" },
                    { id: "university-academic-conference-centers", title: "University or Academic Conference Centers", slug: "uac-ctr", titleSuffix: "Services in Delhi" },
                    { id: "hotel-conference-centers", title: "Hotel Conference Centers", slug: "htl-cfr-ctr", titleSuffix: "Services in Delhi" },
                    { id: "government-civic-conference-centers", title: "Government or Civic Conference Centers", slug: "gvt-ctr", titleSuffix: "Services in Delhi" }
                ]
            },
            // {
            //     id: "hotels-resorts",
            //     title: "Hotels and Resorts",
            //     slug: "hotels-resorts",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "business-hotels", title: "Business Hotels", slug: "business-hotels", titleSuffix: "Services in Delhi" },
            //         { id: "luxury-hotels", title: "Luxury Hotels", slug: "luxury-hotels", titleSuffix: "Services in Delhi" },
            //         { id: "resort-hotels", title: "Resort Hotels", slug: "resort-hotels", titleSuffix: "Services in Delhi" },
            //         { id: "conference-hotels", title: "Conference Hotels", slug: "conference-hotels", titleSuffix: "Services in Delhi" },
            //         { id: "boutique-hotels", title: "Boutique Hotels", slug: "boutique-hotels", titleSuffix: "Services in Delhi" },
            //         { id: "airport-hotels", title: "Airport Hotels", slug: "airport-hotels", titleSuffix: "Services in Delhi" },
            //         { id: "all-inclusive-resorts", title: "All-Inclusive Resorts", slug: "all-inclusive-resorts", titleSuffix: "Services in Delhi" },
            //         { id: "eco-friendly-hotels", title: "Eco-Friendly or Green Hotels", slug: "eco-friendly-hotels", titleSuffix: "Services in Delhi" },
            //         { id: "historical-hotels", title: "Historical Hotels", slug: "historical-hotels", titleSuffix: "Services in Delhi" },
            //         { id: "resort-conference-centers", title: "Resort Conference Centers", slug: "resort-conference-centers", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "outdoor-venues",
            //     title: "Outdoor Venues",
            //     slug: "outdoor-venues",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "parks-gardens", title: "Parks and Gardens", slug: "parks-gardens", titleSuffix: "Services in Delhi" },
            //         { id: "beaches", title: "Beaches", slug: "beaches", titleSuffix: "Services in Delhi" },
            //         { id: "outdoor-amphitheaters", title: "Outdoor Amphitheaters", slug: "outdoor-amphitheaters", titleSuffix: "Services in Delhi" },
            //         { id: "sports-stadiums-arenas", title: "Sports Stadiums and Arenas", slug: "sports-stadiums-arenas", titleSuffix: "Services in Delhi" },
            //         { id: "rooftop-venues", title: "Outdoor Rooftop Venues", slug: "rooftop-venues", titleSuffix: "Services in Delhi" },
            //         { id: "outdoor-courtyards", title: "Outdoor Courtyards", slug: "outdoor-courtyards", titleSuffix: "Services in Delhi" },
            //         { id: "vineyards-wineries", title: "Vineyards and Wineries", slug: "vineyards-wineries", titleSuffix: "Services in Delhi" },
            //         { id: "festival-grounds", title: "Outdoor Festival Grounds", slug: "festival-grounds", titleSuffix: "Services in Delhi" },
            //         { id: "botanical-gardens", title: "Botanical Gardens", slug: "botanical-gardens", titleSuffix: "Services in Delhi" },
            //         { id: "ranches-farms", title: "Ranches and Farms", slug: "ranches-farms", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "theaters-auditoriums",
            //     title: "Theaters and Auditoriums",
            //     slug: "theaters-auditoriums",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "proscenium-theaters", title: "Proscenium Theaters", slug: "proscenium-theaters", titleSuffix: "Services in Delhi" },
            //         { id: "thrust-stage-theaters", title: "Thrust Stage Theaters", slug: "thrust-stage-theaters", titleSuffix: "Services in Delhi" },
            //         { id: "in-the-round-theaters", title: "In-the-Round Theaters", slug: "in-the-round-theaters", titleSuffix: "Services in Delhi" },
            //         { id: "black-box-theaters", title: "Black Box Theaters", slug: "black-box-theaters", titleSuffix: "Services in Delhi" },
            //         { id: "open-air-theaters", title: "Open-Air Theaters", slug: "open-air-theaters", titleSuffix: "Services in Delhi" },
            //         { id: "opera-houses", title: "Opera Houses", slug: "opera-houses", titleSuffix: "Services in Delhi" },
            //         { id: "concert-halls", title: "Concert Halls", slug: "concert-halls", titleSuffix: "Services in Delhi" },
            //         { id: "lecture-halls", title: "Lecture Halls", slug: "lecture-halls", titleSuffix: "Services in Delhi" },
            //         { id: "multipurpose-auditoriums", title: "Multipurpose Auditoriums", slug: "multipurpose-auditoriums", titleSuffix: "Services in Delhi" },
            //         { id: "cinema-theaters", title: "Cinema Theaters", slug: "cinema-theaters", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "banquet-halls",
            //     title: "Banquet Halls",
            //     slug: "banquet-halls",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "traditional-banquet-halls", title: "Traditional Banquet Halls", slug: "traditional-banquet-halls", titleSuffix: "Services in Delhi" },
            //         { id: "hotel-banquet-halls", title: "Hotel Banquet Halls", slug: "hotel-banquet-halls", titleSuffix: "Services in Delhi" },
            //         { id: "conference-banquet-halls", title: "Conference Banquet Halls", slug: "conference-banquet-halls", titleSuffix: "Services in Delhi" },
            //         { id: "private-banquet-halls", title: "Private Banquet Halls", slug: "private-banquet-halls", titleSuffix: "Services in Delhi" },
            //         { id: "luxury-banquet-halls", title: "Luxury Banquet Halls", slug: "luxury-banquet-halls", titleSuffix: "Services in Delhi" },
            //         { id: "garden-banquet-halls", title: "Garden Banquet Halls", slug: "garden-banquet-halls", titleSuffix: "Services in Delhi" },
            //         { id: "community-center-banquet-halls", title: "Community Center Banquet Halls", slug: "community-center-banquet-halls", titleSuffix: "Services in Delhi" },
            //         { id: "banquet-halls-convention-centers", title: "Banquet Halls in Convention Centers", slug: "banquet-halls-convention-centers", titleSuffix: "Services in Delhi" },
            //         { id: "restaurant-banquet-halls", title: "Restaurant Banquet Halls", slug: "restaurant-banquet-halls", titleSuffix: "Services in Delhi" },
            //         { id: "multipurpose-banquet-halls", title: "Multi-Purpose Banquet Halls", slug: "multipurpose-banquet-halls", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "exhibition-trade-show-venues",
            //     title: "Exhibition and Trade Show Venues",
            //     slug: "exhibition-trade-show-venues",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "convention-centers", title: "Convention Centers", slug: "convention-centers", titleSuffix: "Services in Delhi" },
            //         { id: "exhibition-halls", title: "Exhibition Halls", slug: "exhibition-halls", titleSuffix: "Services in Delhi" },
            //         { id: "hotel-conference-centers-exhibition", title: "Hotel Conference Centers", slug: "hotel-conference-centers-exhibition", titleSuffix: "Services in Delhi" },
            //         { id: "multipurpose-event-spaces", title: "Multipurpose Event Spaces", slug: "multipurpose-event-spaces", titleSuffix: "Services in Delhi" },
            //         { id: "outdoor-exhibition-venues", title: "Outdoor Exhibition Venues", slug: "outdoor-exhibition-venues", titleSuffix: "Services in Delhi" },
            //         { id: "expo-centers", title: "Expo Centers", slug: "expo-centers", titleSuffix: "Services in Delhi" },
            //         { id: "university-campus-venues", title: "University and Campus Venues", slug: "university-campus-venues", titleSuffix: "Services in Delhi" },
            //         { id: "pavilions", title: "Pavilions", slug: "pavilions", titleSuffix: "Services in Delhi" },
            //         { id: "industrial-warehouse-venues", title: "Industrial and Warehouse Venues", slug: "industrial-warehouse-venues", titleSuffix: "Services in Delhi" },
            //         { id: "ballrooms-event-halls", title: "Ballrooms and Event Halls", slug: "ballrooms-event-halls", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "wedding-venues",
            //     title: "Wedding Venues",
            //     slug: "wedding-venues",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "banquet-halls-wedding", title: "Banquet Halls", slug: "banquet-halls-wedding", titleSuffix: "Services in Delhi" },
            //         { id: "hotels-resorts-wedding", title: "Hotels and Resorts", slug: "hotels-resorts-wedding", titleSuffix: "Services in Delhi" },
            //         { id: "outdoor-wedding-venues", title: "Outdoor Venues (Gardens, Parks, Beaches)", slug: "outdoor-wedding-venues", titleSuffix: "Services in Delhi" },
            //         { id: "vineyards-wineries-wedding", title: "Vineyards and Wineries", slug: "vineyards-wineries-wedding", titleSuffix: "Services in Delhi" },
            //         { id: "rustic-barns", title: "Rustic Barns", slug: "rustic-barns", titleSuffix: "Services in Delhi" },
            //         { id: "religious-wedding-venues", title: "Churches and Religious Venues", slug: "religious-wedding-venues", titleSuffix: "Services in Delhi" },
            //         { id: "historical-wedding-venues", title: "Historical Venues (Castles, Mansions, Museums)", slug: "historical-wedding-venues", titleSuffix: "Services in Delhi" },
            //         { id: "destination-wedding-venues", title: "Destination Wedding Venues", slug: "destination-wedding-venues", titleSuffix: "Services in Delhi" },
            //         { id: "private-estates", title: "Private Homes or Estates", slug: "private-estates", titleSuffix: "Services in Delhi" },
            //         { id: "cruise-ship-weddings", title: "Cruise Ships", slug: "cruise-ship-weddings", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "sports-arenas-stadiums",
            //     title: "Sports Arenas and Stadiums",
            //     slug: "sports-arenas-stadiums",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "stadiums", title: "Stadiums", slug: "stadiums", titleSuffix: "Services in Delhi" },
            //         { id: "arena-sports-venues", title: "Arena Sports Venues", slug: "arena-sports-venues", titleSuffix: "Services in Delhi" },
            //         { id: "sports-complexes", title: "Multi-purpose Sports Complexes", slug: "sports-complexes", titleSuffix: "Services in Delhi" },
            //         { id: "football-stadiums", title: "Football/Soccer Stadiums", slug: "football-stadiums", titleSuffix: "Services in Delhi" },
            //         { id: "baseball-parks", title: "Baseball Parks", slug: "baseball-parks", titleSuffix: "Services in Delhi" },
            //         { id: "ice-hockey-arenas", title: "Ice Hockey Arenas", slug: "ice-hockey-arenas", titleSuffix: "Services in Delhi" },
            //         { id: "tennis-stadiums", title: "Tennis Stadiums", slug: "tennis-stadiums", titleSuffix: "Services in Delhi" },
            //         { id: "track-field-stadiums", title: "Track and Field Stadiums", slug: "track-field-stadiums", titleSuffix: "Services in Delhi" },
            //         { id: "motorsports-venues", title: "Motorsports Tracks and Arenas", slug: "motorsports-venues", titleSuffix: "Services in Delhi" },
            //         { id: "cycling-velodromes", title: "Cycling Velodromes", slug: "cycling-velodromes", titleSuffix: "Services in Delhi" },
            //         { id: "boxing-wrestling-arenas", title: "Boxing and Wrestling Arenas", slug: "boxing-wrestling-arenas", titleSuffix: "Services in Delhi" },
            //         { id: "esports-arenas", title: "E-sports Arenas", slug: "esports-arenas", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "corporate-meeting-rooms",
            //     title: "Corporate Meeting Rooms",
            //     slug: "corporate-meeting-rooms",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "boardrooms", title: "Boardrooms", slug: "boardrooms", titleSuffix: "Services in Delhi" },
            //         { id: "conference-rooms", title: "Conference Rooms", slug: "conference-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "training-rooms", title: "Training Rooms", slug: "training-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "breakout-rooms", title: "Breakout Rooms", slug: "breakout-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "huddle-rooms", title: "Huddle Rooms", slug: "huddle-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "executive-suites", title: "Executive Suites", slug: "executive-suites", titleSuffix: "Services in Delhi" },
            //         { id: "virtual-meeting-rooms", title: "Virtual Meeting Rooms", slug: "virtual-meeting-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "webinar-rooms", title: "Webinar Rooms", slug: "webinar-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "event-spaces", title: "Event Spaces", slug: "event-spaces", titleSuffix: "Services in Delhi" },
            //         { id: "collaboration-rooms", title: "Collaboration Rooms", slug: "collaboration-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "auditoriums", title: "Auditoriums", slug: "auditoriums", titleSuffix: "Services in Delhi" },
            //         { id: "coworking-spaces", title: "Co-working Spaces", slug: "coworking-spaces", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "museums-galleries",
            //     title: "Museums and Galleries",
            //     slug: "museums-galleries",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "art-galleries", title: "Art Galleries", slug: "art-galleries", titleSuffix: "Services in Delhi" },
            //         { id: "museum-halls", title: "Museum Halls", slug: "museum-halls", titleSuffix: "Services in Delhi" },
            //         { id: "history-museums", title: "History Museums", slug: "history-museums", titleSuffix: "Services in Delhi" },
            //         { id: "science-museums", title: "Science and Technology Museums", slug: "science-museums", titleSuffix: "Services in Delhi" },
            //         { id: "childrens-museums", title: "Children's Museums", slug: "childrens-museums", titleSuffix: "Services in Delhi" },
            //         { id: "natural-history-museums", title: "Natural History Museums", slug: "natural-history-museums", titleSuffix: "Services in Delhi" },
            //         { id: "cultural-museums", title: "Cultural and Ethnographic Museums", slug: "cultural-museums", titleSuffix: "Services in Delhi" },
            //         { id: "contemporary-art-museums", title: "Contemporary Art Museums", slug: "contemporary-art-museums", titleSuffix: "Services in Delhi" },
            //         { id: "specialty-museums", title: "Specialty Museums", slug: "specialty-museums", titleSuffix: "Services in Delhi" },
            //         { id: "museum-gardens", title: "Museum Gardens and Outdoor Spaces", slug: "museum-gardens", titleSuffix: "Services in Delhi" },
            //         { id: "gallery-event-spaces", title: "Gallery Event Spaces", slug: "gallery-event-spaces", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "nightclubs-bars",
            //     title: "Nightclubs and Bars",
            //     slug: "nightclubs-bars",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "nightclubs", title: "Nightclubs", slug: "nightclubs", titleSuffix: "Services in Delhi" },
            //         { id: "lounge-bars", title: "Lounge Bars", slug: "lounge-bars", titleSuffix: "Services in Delhi" },
            //         { id: "cocktail-bars", title: "Cocktail Bars", slug: "cocktail-bars", titleSuffix: "Services in Delhi" },
            //         { id: "dive-bars", title: "Dive Bars", slug: "dive-bars", titleSuffix: "Services in Delhi" },
            //         { id: "sports-bars", title: "Sports Bars", slug: "sports-bars", titleSuffix: "Services in Delhi" },
            //         { id: "brewpubs", title: "Brewpubs", slug: "brewpubs", titleSuffix: "Services in Delhi" },
            //         { id: "wine-bars", title: "Wine Bars", slug: "wine-bars", titleSuffix: "Services in Delhi" },
            //         { id: "karaoke-bars", title: "Karaoke Bars", slug: "karaoke-bars", titleSuffix: "Services in Delhi" },
            //         { id: "jazz-bars", title: "Jazz Bars", slug: "jazz-bars", titleSuffix: "Services in Delhi" },
            //         { id: "themed-bars", title: "Themed Bars", slug: "themed-bars", titleSuffix: "Services in Delhi" },
            //         { id: "rooftop-bars", title: "Rooftop Bars", slug: "rooftop-bars", titleSuffix: "Services in Delhi" },
            //         { id: "club-lounges", title: "Club Lounges", slug: "club-lounges", titleSuffix: "Services in Delhi" },
            //         { id: "cigar-bars", title: "Cigar Bars", slug: "cigar-bars", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "university-venues",
            //     title: "University Campuses and Lecture Halls",
            //     slug: "university-venues",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "lecture-halls", title: "Lecture Halls", slug: "lecture-halls", titleSuffix: "Services in Delhi" },
            //         { id: "seminar-rooms", title: "Seminar Rooms", slug: "seminar-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "auditoriums-university", title: "Auditoriums", slug: "auditoriums-university", titleSuffix: "Services in Delhi" },
            //         { id: "classrooms", title: "Classrooms", slug: "classrooms", titleSuffix: "Services in Delhi" },
            //         { id: "meeting-rooms", title: "Meeting Rooms", slug: "meeting-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "conference-rooms-university", title: "Conference Rooms", slug: "conference-rooms-university", titleSuffix: "Services in Delhi" },
            //         { id: "study-halls", title: "Study Halls", slug: "study-halls", titleSuffix: "Services in Delhi" },
            //         { id: "campus-outdoor-spaces", title: "Campus Courtyards and Outdoor Spaces", slug: "campus-outdoor-spaces", titleSuffix: "Services in Delhi" },
            //         { id: "student-unions", title: "Student Unions and Common Areas", slug: "student-unions", titleSuffix: "Services in Delhi" },
            //         { id: "computer-labs", title: "Computer Labs", slug: "computer-labs", titleSuffix: "Services in Delhi" },
            //         { id: "faculty-offices", title: "Faculty Offices and Conference Rooms", slug: "faculty-offices", titleSuffix: "Services in Delhi" },
            //         { id: "event-banquet-halls-university", title: "Event Spaces and Banquet Halls", slug: "event-banquet-halls-university", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "religious-venues",
            //     title: "Religious and Spiritual Venues",
            //     slug: "religious-venues",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "churches", title: "Churches", slug: "churches", titleSuffix: "Services in Delhi" },
            //         { id: "temples", title: "Temples", slug: "temples", titleSuffix: "Services in Delhi" },
            //         { id: "mosques", title: "Mosques", slug: "mosques", titleSuffix: "Services in Delhi" },
            //         { id: "synagogues", title: "Synagogues", slug: "synagogues", titleSuffix: "Services in Delhi" },
            //         { id: "gurdwaras", title: "Gurdwaras", slug: "gurdwaras", titleSuffix: "Services in Delhi" },
            //         { id: "shrines", title: "Shrines", slug: "shrines", titleSuffix: "Services in Delhi" },
            //         { id: "ashrams", title: "Ashrams", slug: "ashrams", titleSuffix: "Services in Delhi" },
            //         { id: "pilgrimage-sites", title: "Pilgrimage Sites", slug: "pilgrimage-sites", titleSuffix: "Services in Delhi" },
            //         { id: "cathedrals", title: "Cathedrals", slug: "cathedrals", titleSuffix: "Services in Delhi" },
            //         { id: "meditation-centers", title: "Meditation Centers", slug: "meditation-centers", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "vineyards-wineries",
            //     title: "Vineyards and Wineries",
            //     slug: "vineyards-wineries",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "wine-tasting-rooms", title: "Wine Tasting Rooms", slug: "wine-tasting-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "barrel-rooms", title: "Barrel Rooms", slug: "barrel-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "vineyard-outdoor-spaces", title: "Vineyard Outdoor Spaces", slug: "vineyard-outdoor-spaces", titleSuffix: "Services in Delhi" },
            //         { id: "winery-event-halls", title: "Winery Event Halls", slug: "winery-event-halls", titleSuffix: "Services in Delhi" },
            //         { id: "estate-grounds", title: "Estate Grounds and Gardens", slug: "estate-grounds", titleSuffix: "Services in Delhi" },
            //         { id: "wine-cellars", title: "Wine Cellars", slug: "wine-cellars", titleSuffix: "Services in Delhi" },
            //         { id: "tasting-terraces", title: "Tasting Terraces or Patios", slug: "tasting-terraces", titleSuffix: "Services in Delhi" },
            //         { id: "winemakers-dinners", title: "Winemaker’s Dinners", slug: "winemakers-dinners", titleSuffix: "Services in Delhi" },
            //         { id: "winery-courtyards", title: "Winery Courtyards", slug: "winery-courtyards", titleSuffix: "Services in Delhi" },
            //         { id: "private-vineyards", title: "Private Vineyards", slug: "private-vineyards", titleSuffix: "Services in Delhi" },
            //         { id: "wine-production-tours", title: "Wine Production Areas or Winery Tours", slug: "wine-production-tours", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "coworking-spaces",
            //     title: "Coworking Spaces and Innovation Hubs",
            //     slug: "coworking-spaces",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "hot-desking", title: "Hot Desking Spaces", slug: "hot-desking", titleSuffix: "Services in Delhi" },
            //         { id: "dedicated-desks", title: "Dedicated Desks", slug: "dedicated-desks", titleSuffix: "Services in Delhi" },
            //         { id: "private-offices", title: "Private Offices", slug: "private-offices", titleSuffix: "Services in Delhi" },
            //         { id: "meeting-rooms-coworking", title: "Meeting Rooms", slug: "meeting-rooms-coworking", titleSuffix: "Services in Delhi" },
            //         { id: "event-spaces-coworking", title: "Event Spaces", slug: "event-spaces-coworking", titleSuffix: "Services in Delhi" },
            //         { id: "collaboration-areas", title: "Collaboration Areas", slug: "collaboration-areas", titleSuffix: "Services in Delhi" },
            //         { id: "innovation-hubs", title: "Innovation Hubs or Labs", slug: "innovation-hubs", titleSuffix: "Services in Delhi" },
            //         { id: "virtual-offices", title: "Virtual Offices", slug: "virtual-offices", titleSuffix: "Services in Delhi" },
            //         { id: "community-spaces", title: "Community Spaces", slug: "community-spaces", titleSuffix: "Services in Delhi" },
            //         { id: "shared-resources", title: "Shared Resources or Equipment Rooms", slug: "shared-resources", titleSuffix: "Services in Delhi" },
            //         { id: "break-rooms", title: "Break Rooms and Kitchens", slug: "break-rooms", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "popup-event-spaces",
            //     title: "Pop-Up Event Spaces",
            //     slug: "popup-event-spaces",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "retail-popup", title: "Retail Pop-Up Shops", slug: "retail-popup", titleSuffix: "Services in Delhi" },
            //         { id: "popup-galleries", title: "Pop-Up Galleries", slug: "popup-galleries", titleSuffix: "Services in Delhi" },
            //         { id: "popup-restaurants", title: "Pop-Up Restaurants or Cafes", slug: "popup-restaurants", titleSuffix: "Services in Delhi" },
            //         { id: "popup-theaters", title: "Pop-Up Theaters", slug: "popup-theaters", titleSuffix: "Services in Delhi" },
            //         { id: "popup-marketplaces", title: "Pop-Up Marketplaces", slug: "popup-marketplaces", titleSuffix: "Services in Delhi" },
            //         { id: "popup-hotels", title: "Pop-Up Hotels", slug: "popup-hotels", titleSuffix: "Services in Delhi" },
            //         { id: "popup-showrooms", title: "Pop-Up Showrooms", slug: "popup-showrooms", titleSuffix: "Services in Delhi" },
            //         { id: "popup-fashion", title: "Pop-Up Fashion Shows", slug: "popup-fashion", titleSuffix: "Services in Delhi" },
            //         { id: "popup-activations", title: "Pop-Up Experiences/Activations", slug: "popup-activations", titleSuffix: "Services in Delhi" },
            //         { id: "popup-weddings", title: "Pop-Up Wedding Venues", slug: "popup-weddings", titleSuffix: "Services in Delhi" },
            //         { id: "popup-bars", title: "Pop-Up Bars or Cocktail Lounges", slug: "popup-bars", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "golf-country-clubs",
            //     title: "Golf Courses and Country Clubs",
            //     slug: "golf-country-clubs",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "golf-clubhouses", title: "Golf Course Clubhouses", slug: "golf-clubhouses", titleSuffix: "Services in Delhi" },
            //         { id: "ballrooms", title: "Ballrooms", slug: "ballrooms", titleSuffix: "Services in Delhi" },
            //         { id: "outdoor-patios", title: "Outdoor Patios and Terraces", slug: "outdoor-patios", titleSuffix: "Services in Delhi" },
            //         { id: "golf-grounds", title: "Golf Course Grounds", slug: "golf-grounds", titleSuffix: "Services in Delhi" },
            //         { id: "meeting-rooms-golf", title: "Meeting Rooms", slug: "meeting-rooms-golf", titleSuffix: "Services in Delhi" },
            //         { id: "private-dining", title: "Private Dining Rooms", slug: "private-dining", titleSuffix: "Services in Delhi" },
            //         { id: "tennis-recreation", title: "Tennis Courts and Recreation Areas", slug: "tennis-recreation", titleSuffix: "Services in Delhi" },
            //         { id: "golf-pro-shops", title: "Golf Pro Shops", slug: "golf-pro-shops", titleSuffix: "Services in Delhi" },
            //         { id: "driving-ranges", title: "Golf Course Driving Ranges", slug: "driving-ranges", titleSuffix: "Services in Delhi" }
            //     ]
            // },
            // {
            //     id: "cultural-community-centers",
            //     title: "Cultural and Community Centers",
            //     slug: "cultural-community-centers",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "multipurpose-rooms", title: "Multipurpose Rooms", slug: "multipurpose-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "performance-halls", title: "Auditoriums or Performance Halls", slug: "performance-halls", titleSuffix: "Services in Delhi" },
            //         { id: "art-exhibition-spaces", title: "Art Galleries and Exhibition Spaces", slug: "art-exhibition-spaces", titleSuffix: "Services in Delhi" },
            //         { id: "heritage-spaces", title: "Cultural Heritage or Museum Spaces", slug: "heritage-spaces", titleSuffix: "Services in Delhi" },
            //         { id: "community-halls", title: "Community Halls", slug: "community-halls", titleSuffix: "Services in Delhi" },
            //         { id: "dance-studios", title: "Dance Studios or Rehearsal Rooms", slug: "dance-studios", titleSuffix: "Services in Delhi" },
            //         { id: "meeting-conference-rooms", title: "Meeting and Conference Rooms", slug: "meeting-conference-rooms", titleSuffix: "Services in Delhi" },
            //         { id: "culinary-spaces", title: "Cooking or Culinary Spaces", slug: "culinary-spaces", titleSuffix: "Services in Delhi" },
            //         { id: "outdoor-courtyards", title: "Outdoor Courtyards or Gardens", slug: "outdoor-courtyards", titleSuffix: "Services in Delhi" },
            //         { id: "libraries-learning", title: "Libraries or Learning Centers", slug: "libraries-learning", titleSuffix: "Services in Delhi" },
            //         { id: "wellness-studios", title: "Wellness Studios or Yoga Spaces", slug: "wellness-studios", titleSuffix: "Services in Delhi" },
            //     ]
            // },
            // {
            //     id: "farms-ranches",
            //     title: "Farms and Ranches",
            //     slug: "farms-ranches",
            //     titleSuffix: "Services in Delhi",
            //     children: [
            //         { id: "barns-event-halls", title: "Barns and Event Halls", slug: "barns-event-halls", titleSuffix: "Services in Delhi" },
            //         { id: "outdoor-fields", title: "Outdoor Fields or Pastures", slug: "outdoor-fields", titleSuffix: "Services in Delhi" },
            //         { id: "farmhouses-retreats", title: "Farmhouses and Cottage Retreats", slug: "farmhouses-retreats", titleSuffix: "Services in Delhi" },
            //         { id: "paddocks-stables", title: "Paddocks and Horse Stables", slug: "paddocks-stables", titleSuffix: "Services in Delhi" },
            //         { id: "vineyards-farms", title: "Vineyards and Wineries", slug: "vineyards-farms", titleSuffix: "Services in Delhi" },
            //         { id: "agriculture-event-spaces", title: "Agricultural Shows and Exhibition Spaces", slug: "agriculture-event-spaces", titleSuffix: "Services in Delhi" },
            //         { id: "orchards", title: "Orchards and Fruit Farms", slug: "orchards", titleSuffix: "Services in Delhi" },
            //         { id: "ranch-houses", title: "Ranch Houses and Lodges", slug: "ranch-houses", titleSuffix: "Services in Delhi" },
            //         { id: "farm-to-table", title: "Farm-to-Table Dining Venues", slug: "farm-to-table", titleSuffix: "Services in Delhi" },
            //         { id: "animal-farms", title: "Animal Farms and Petting Zoos", slug: "animal-farms", titleSuffix: "Services in Delhi" },
            //         { id: "farm-lakes", title: "Lakes and Ponds on Farms", slug: "farm-lakes", titleSuffix: "Services in Delhi" }
            //     ]
            // },

        ]
    },

    // Corporate Gifting
    {
        id: "corporate-gifting",
        title: "Corporate Gifting",
        slug: "corp-gft",
        titleSuffix: "Company in Delhi",
        icon: FaGift,
        children: [
            {
                id: "branded-corporate-gifts",
                title: "Branded Corporate Gifts",
                slug: "bcg",
                titleSuffix: "Suppliers in Delhi",
                children: [
                    { id: "branded-office-supplies", title: "Branded Office Supplies", slug: "bos", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-apparel", title: "Branded Apparel", slug: "brd-app", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-drinkware", title: "Branded Drinkware", slug: "brd-dwk", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-tech-gadgets", title: "Branded Tech Gadgets", slug: "brd-tech", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-bags-accessories", title: "Branded Bags and Accessories", slug: "brd-bag", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-home-living", title: "Branded Gifts for Home and Living", slug: "brd-home", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-event-items", title: "Branded Event Items", slug: "brd-event", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-eco-products", title: "Branded Eco-Friendly Products", slug: "brd-eco", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-food-drink", title: "Branded Food and Drink", slug: "brd-food", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-journals", title: "Branded Journals and Notebooks", slug: "brd-jrnl", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-fitness-items", title: "Branded Sports and Fitness Items", slug: "brd-ftns", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-travel-accessories", title: "Branded Travel Accessories", slug: "brd-trvl", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-personalized-gifts", title: "Branded Personalized Gifts", slug: "brd-personalized", titleSuffix: "Suppliers in Delhi" },
                    { id: "branded-wellness-products", title: "Branded Health and Wellness Products", slug: "brd-wlns", titleSuffix: "Suppliers in Delhi" }
                ]
            },
            // {
            //     id: "gift-bags-swag-bags",
            //     title: "Gift Bags and Swag Bags",
            //     slug: "gift-bags-swag-bags",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "standard-swag-bags", title: "Standard Branded Swag Bags", slug: "standard-swag-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "premium-swag-bags", title: "Premium Swag Bags", slug: "premium-swag-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "eco-swag-bags", title: "Eco-Friendly Swag Bags", slug: "eco-swag-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "tech-swag-bags", title: "Tech-Themed Swag Bags", slug: "tech-swag-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "event-swag-bags", title: "Event-Themed Swag Bags", slug: "event-swag-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "luxury-gift-bags", title: "Luxury Gift Bags", slug: "luxury-gift-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "wellness-swag-bags", title: "Health and Wellness Swag Bags", slug: "wellness-swag-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "food-swag-bags", title: "Food and Beverage Swag Bags", slug: "food-swag-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "custom-swag-bags", title: "Custom Swag Bags", slug: "custom-swag-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "seasonal-swag-bags", title: "Seasonal Swag Bags", slug: "seasonal-swag-bags", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "employee-appreciation-gifts",
            //     title: "Employee Appreciation Gifts",
            //     slug: "employee-appreciation-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "personalized-gifts", title: "Personalized Gifts", slug: "personalized-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "gift-cards", title: "Gift Cards and Vouchers", slug: "gift-cards", titleSuffix: "Suppliers in Delhi" },
            //         { id: "custom-apparel", title: "Custom Apparel", slug: "custom-apparel", titleSuffix: "Suppliers in Delhi" },
            //         { id: "tech-gifts", title: "Tech Gadgets and Accessories", slug: "tech-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "experience-gifts", title: "Experience Gifts", slug: "experience-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "wellness-gifts", title: "Wellness and Self-Care Gifts", slug: "wellness-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "gift-baskets", title: "Gift Baskets", slug: "gift-baskets", titleSuffix: "Suppliers in Delhi" },
            //         { id: "office-decor", title: "Office Decor and Supplies", slug: "office-decor", titleSuffix: "Suppliers in Delhi" },
            //         { id: "food-gifts", title: "Food and Beverage Gifts", slug: "food-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "subscriptions", title: "Subscriptions and Memberships", slug: "subscriptions", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },

            // {
            //     id: "luxury-corporate-gifts",
            //     title: "Luxury Corporate Gifts",
            //     slug: "luxury-corporate-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "executive-accessories", title: "Branded Executive Accessories", slug: "executive-accessories", titleSuffix: "Suppliers in Delhi" },
            //         { id: "luxury-watches", title: "Luxury Watches", slug: "luxury-watches", titleSuffix: "Suppliers in Delhi" },
            //         { id: "fine-jewelry", title: "Fine Jewelry", slug: "fine-jewelry", titleSuffix: "Suppliers in Delhi" },
            //         { id: "luxury-leather", title: "Custom Luxury Leather Goods", slug: "luxury-leather", titleSuffix: "Suppliers in Delhi" },
            //         { id: "gourmet-gifts", title: "Gourmet Food and Beverage Gifts", slug: "gourmet-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "luxury-tech", title: "Luxury Tech Gadgets", slug: "luxury-tech", titleSuffix: "Suppliers in Delhi" },
            //         { id: "exclusive-experiences", title: "Exclusive Experience Gifts", slug: "exclusive-experiences", titleSuffix: "Suppliers in Delhi" },
            //         { id: "art-collectibles", title: "Art and Collectibles", slug: "art-collectibles", titleSuffix: "Suppliers in Delhi" },
            //         { id: "high-end-travel", title: "High-End Travel Accessories", slug: "high-end-travel", titleSuffix: "Suppliers in Delhi" },
            //         { id: "luxury-office-decor", title: "Luxury Office Decor", slug: "luxury-office-decor", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "tech-gadget-gifts",
            //     title: "Tech and Gadget Gifts",
            //     slug: "tech-gadget-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "smartphones-tablets", title: "Smartphones and Tablets", slug: "smartphones-tablets", titleSuffix: "Suppliers in Delhi" },
            //         { id: "wireless-headphones", title: "Wireless Headphones and Earbuds", slug: "wireless-headphones", titleSuffix: "Suppliers in Delhi" },
            //         { id: "smartwatches-fitness", title: "Smartwatches and Fitness Trackers", slug: "smartwatches-fitness", titleSuffix: "Suppliers in Delhi" },
            //         { id: "power-banks", title: "Portable Chargers and Power Banks", slug: "power-banks", titleSuffix: "Suppliers in Delhi" },
            //         { id: "bluetooth-speakers", title: "Bluetooth Speakers", slug: "bluetooth-speakers", titleSuffix: "Suppliers in Delhi" },
            //         { id: "laptop-accessories", title: "Laptop and Tablet Accessories", slug: "laptop-accessories", titleSuffix: "Suppliers in Delhi" },
            //         { id: "smart-home-devices", title: "Smart Home Devices", slug: "smart-home-devices", titleSuffix: "Suppliers in Delhi" },
            //         { id: "vr-headsets", title: "Virtual Reality (VR) Headsets", slug: "vr-headsets", titleSuffix: "Suppliers in Delhi" },
            //         { id: "gaming-consoles", title: "Gaming Consoles and Accessories", slug: "gaming-consoles", titleSuffix: "Suppliers in Delhi" },
            //         { id: "drones", title: "Drones", slug: "drones", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "eco-friendly-gifts",
            //     title: "Eco-Friendly Gifts",
            //     slug: "eco-friendly-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "reusable-bottles", title: "Reusable Water Bottles", slug: "reusable-bottles", titleSuffix: "Suppliers in Delhi" },
            //         { id: "eco-stationery", title: "Eco-Friendly Stationery", slug: "eco-stationery", titleSuffix: "Suppliers in Delhi" },
            //         { id: "biodegradable-cases", title: "Biodegradable Phone Cases", slug: "biodegradable-cases", titleSuffix: "Suppliers in Delhi" },
            //         { id: "recycled-bags", title: "Recycled Tote Bags and Shopping Bags", slug: "recycled-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "sustainable-clothing", title: "Sustainable Clothing and Apparel", slug: "sustainable-clothing", titleSuffix: "Suppliers in Delhi" },
            //         { id: "solar-gadgets", title: "Solar-Powered Gadgets", slug: "solar-gadgets", titleSuffix: "Suppliers in Delhi" },
            //         { id: "plant-based-gifts", title: "Plant-Based Gifts", slug: "plant-based-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "upcycled-products", title: "Recycled or Upcycled Products", slug: "upcycled-products", titleSuffix: "Suppliers in Delhi" },
            //         { id: "eco-tech-accessories", title: "Eco-Friendly Tech Accessories", slug: "eco-tech-accessories", titleSuffix: "Suppliers in Delhi" },
            //         { id: "reusable-cups", title: "Reusable Coffee Cups and Mugs", slug: "reusable-cups", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "food-beverage-gifts",
            //     title: "Food and Beverage Gifts",
            //     slug: "food-beverage-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "gourmet-baskets", title: "Gourmet Gift Baskets", slug: "gourmet-baskets", titleSuffix: "Suppliers in Delhi" },
            //         { id: "custom-snacks", title: "Custom Branded Snacks", slug: "custom-snacks", titleSuffix: "Suppliers in Delhi" },
            //         { id: "wine-champagne", title: "Wine and Champagne Gifts", slug: "wine-champagne", titleSuffix: "Suppliers in Delhi" },
            //         { id: "artisanal-food", title: "Artisanal and Local Food Gifts", slug: "artisanal-food", titleSuffix: "Suppliers in Delhi" },
            //         { id: "gourmet-chocolates", title: "Gourmet Chocolates", slug: "gourmet-chocolates", titleSuffix: "Suppliers in Delhi" },
            //         { id: "coffee-tea", title: "Coffee and Tea Gifts", slug: "coffee-tea", titleSuffix: "Suppliers in Delhi" },
            //         { id: "healthy-snacks", title: "Healthy Snack Packs", slug: "healthy-snacks", titleSuffix: "Suppliers in Delhi" },
            //         { id: "baked-goods", title: "Baked Goods and Cookies", slug: "baked-goods", titleSuffix: "Suppliers in Delhi" },
            //         { id: "luxury-food", title: "Luxury Food Gifts", slug: "luxury-food", titleSuffix: "Suppliers in Delhi" },
            //         { id: "breakfast-sets", title: "Breakfast Gift Sets", slug: "breakfast-sets", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "experience-based-gifts",
            //     title: "Experience-Based Gifts",
            //     slug: "experience-based-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "travel-packages", title: "Travel and Vacation Packages", slug: "travel-packages", titleSuffix: "Suppliers in Delhi" },
            //         { id: "event-tickets", title: "Concert and Event Tickets", slug: "event-tickets", titleSuffix: "Suppliers in Delhi" },
            //         { id: "adventure-experiences", title: "Adventure and Outdoor Experiences", slug: "adventure-experiences", titleSuffix: "Suppliers in Delhi" },
            //         { id: "fine-dining", title: "Fine Dining and Gourmet Experiences", slug: "fine-dining", titleSuffix: "Suppliers in Delhi" },
            //         { id: "spa-retreats", title: "Spa and Wellness Retreats", slug: "spa-retreats", titleSuffix: "Suppliers in Delhi" },
            //         { id: "adventure-sports", title: "Adventure Sports and Recreation", slug: "adventure-sports", titleSuffix: "Suppliers in Delhi" },
            //         { id: "cultural-experiences", title: "Art and Cultural Experiences", slug: "cultural-experiences", titleSuffix: "Suppliers in Delhi" },
            //         { id: "cooking-experiences", title: "Cooking or Culinary Experiences", slug: "cooking-experiences", titleSuffix: "Suppliers in Delhi" },
            //         { id: "theme-park-tickets", title: "Tickets for Theme Parks or Attractions", slug: "theme-park-tickets", titleSuffix: "Suppliers in Delhi" },
            //         { id: "virtual-experiences", title: "Virtual Experiences and Online Classes", slug: "virtual-experiences", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "customized-gifts",
            //     title: "Customized Gifts",
            //     slug: "customized-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "custom-apparel-gifts", title: "Branded Apparel and Clothing", slug: "custom-apparel-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "personalized-office", title: "Personalized Office Supplies", slug: "personalized-office", titleSuffix: "Suppliers in Delhi" },
            //         { id: "custom-drinkware", title: "Customized Drinkware", slug: "custom-drinkware", titleSuffix: "Suppliers in Delhi" },
            //         { id: "engraved-gifts", title: "Engraved or Monogrammed Gifts", slug: "engraved-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "custom-tech", title: "Custom Tech Gadgets and Accessories", slug: "custom-tech", titleSuffix: "Suppliers in Delhi" },
            //         { id: "personalized-bags", title: "Personalized Bags and Luggage", slug: "personalized-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "corporate-awards", title: "Customized Corporate Awards and Trophies", slug: "corporate-awards", titleSuffix: "Suppliers in Delhi" },
            //         { id: "gift-boxes", title: "Personalized Gift Boxes or Hampers", slug: "gift-boxes", titleSuffix: "Suppliers in Delhi" },
            //         { id: "custom-stationery", title: "Customized Stationery Sets", slug: "custom-stationery", titleSuffix: "Suppliers in Delhi" },
            //         { id: "custom-food", title: "Customized Food and Beverage Gifts", slug: "custom-food", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "wellness-selfcare-gifts",
            //     title: "Wellness and Self-Care Gifts",
            //     slug: "wellness-selfcare-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "spa-kits", title: "Spa and Relaxation Kits", slug: "spa-kits", titleSuffix: "Suppliers in Delhi" },
            //         { id: "yoga-accessories", title: "Yoga and Meditation Accessories", slug: "yoga-accessories", titleSuffix: "Suppliers in Delhi" },
            //         { id: "fitness-gifts", title: "Fitness and Active Lifestyle Gifts", slug: "fitness-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "healthy-treats", title: "Healthy Snacks and Gourmet Treats", slug: "healthy-treats", titleSuffix: "Suppliers in Delhi" },
            //         { id: "stress-relief", title: "Stress Relief and Relaxation Tools", slug: "stress-relief", titleSuffix: "Suppliers in Delhi" },
            //         { id: "sleep-aids", title: "Sleep and Rest Aids", slug: "sleep-aids", titleSuffix: "Suppliers in Delhi" },
            //         { id: "mindfulness-gifts", title: "Mindfulness and Journaling Gifts", slug: "mindfulness-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "aromatherapy", title: "Aromatherapy and Scented Products", slug: "aromatherapy", titleSuffix: "Suppliers in Delhi" },
            //         { id: "hydration-accessories", title: "Hydration and Water Accessories", slug: "hydration-accessories", titleSuffix: "Suppliers in Delhi" },
            //         { id: "selfcare-subscriptions", title: "Self-Care Subscription Boxes", slug: "selfcare-subscriptions", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "event-specific-gifts",
            //     title: "Event-Specific Gifts",
            //     slug: "event-specific-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "conference-gifts", title: "Conference and Seminar Gifts", slug: "conference-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "expo-gifts", title: "Trade Show and Expo Gifts", slug: "expo-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "launch-gifts", title: "Product Launch Gifts", slug: "launch-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "award-gifts", title: "Award Ceremony Gifts", slug: "award-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "team-building-gifts", title: "Team-Building Event Gifts", slug: "team-building-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "holiday-gifts", title: "Holiday and Seasonal Event Gifts", slug: "holiday-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "client-gifts", title: "Client Appreciation Event Gifts", slug: "client-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "milestone-gifts", title: "Employee Milestone Gifts", slug: "milestone-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "charity-event-gifts", title: "Fundraiser or Charity Event Gifts", slug: "charity-event-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "kickoff-gifts", title: "Launch or Kickoff Event Gifts", slug: "kickoff-gifts", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "travel-leisure-gifts",
            //     title: "Travel and Leisure Gifts",
            //     slug: "travel-leisure-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "travel-accessories", title: "Travel Accessories", slug: "travel-accessories", titleSuffix: "Suppliers in Delhi" },
            //         { id: "travel-bags", title: "Travel Bags and Luggage", slug: "travel-bags", titleSuffix: "Suppliers in Delhi" },
            //         { id: "portable-tech", title: "Portable Tech Gadgets", slug: "portable-tech", titleSuffix: "Suppliers in Delhi" },
            //         { id: "travel-comfort", title: "Travel Comfort Gifts", slug: "travel-comfort", titleSuffix: "Suppliers in Delhi" },
            //         { id: "travel-gift-cards", title: "Gift Cards for Travel or Leisure Experiences", slug: "travel-gift-cards", titleSuffix: "Suppliers in Delhi" },
            //         { id: "travel-journals", title: "Travel Journals and Notebooks", slug: "travel-journals", titleSuffix: "Suppliers in Delhi" },
            //         { id: "travel-subscriptions", title: "Travel and Leisure Subscription Boxes", slug: "travel-subscriptions", titleSuffix: "Suppliers in Delhi" },
            //         { id: "travel-gift-sets", title: "Travel Gift Sets", slug: "travel-gift-sets", titleSuffix: "Suppliers in Delhi" },
            //         { id: "adventure-gifts", title: "Adventure and Outdoor Gifts", slug: "adventure-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "luxury-travel", title: "Luxury Travel Accessories", slug: "luxury-travel", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "charity-donation-gifts",
            //     title: "Charity Donations in Recipient’s Name",
            //     slug: "charity-donation-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "general-donations", title: "General Charity Donations", slug: "general-donations", titleSuffix: "Suppliers in Delhi" },
            //         { id: "cause-specific", title: "Cause-Specific Donations", slug: "cause-specific", titleSuffix: "Suppliers in Delhi" },
            //         { id: "local-donations", title: "Local or Community-Based Donations", slug: "local-donations", titleSuffix: "Suppliers in Delhi" },
            //         { id: "nonprofit-sponsorships", title: "Nonprofit Sponsorships in Name", slug: "nonprofit-sponsorships", titleSuffix: "Suppliers in Delhi" },
            //         { id: "matching-gifts", title: "Matching Gift Donations", slug: "matching-gifts", titleSuffix: "Suppliers in Delhi" },
            //         { id: "micro-donations", title: "Micro-Donations or Crowdfunding Contributions", slug: "micro-donations", titleSuffix: "Suppliers in Delhi" },
            //         { id: "eco-donations", title: "Sustainable or Eco-Friendly Donations", slug: "eco-donations", titleSuffix: "Suppliers in Delhi" },
            //         { id: "charity-vouchers", title: "Charity Gift Vouchers", slug: "charity-vouchers", titleSuffix: "Suppliers in Delhi" },
            //         { id: "disaster-relief", title: "Disaster Relief Donations", slug: "disaster-relief", titleSuffix: "Suppliers in Delhi" },
            //         { id: "charity-choice", title: "Charity of Choice", slug: "charity-choice", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // },
            // {
            //     id: "subscription-gifts",
            //     title: "Subscription-Based Gifts",
            //     slug: "subscription-gifts",
            //     titleSuffix: "Suppliers in Delhi",
            //     children: [
            //         { id: "subscription-boxes", title: "Subscription Boxes", slug: "subscription-boxes", titleSuffix: "Suppliers in Delhi" },
            //         { id: "magazine-subscriptions", title: "Magazine or Digital Subscriptions", slug: "magazine-subscriptions", titleSuffix: "Suppliers in Delhi" },
            //         { id: "streaming-subscriptions", title: "Streaming Services Subscriptions", slug: "streaming-subscriptions", titleSuffix: "Suppliers in Delhi" },
            //         { id: "coffee-subscriptions", title: "Coffee or Tea Subscriptions", slug: "coffee-subscriptions", titleSuffix: "Suppliers in Delhi" },
            //         { id: "wine-subscriptions", title: "Wine or Alcohol Subscriptions", slug: "wine-subscriptions", titleSuffix: "Suppliers in Delhi" },
            //         { id: "fitness-subscriptions", title: "Fitness & Health Subscriptions", slug: "fitness-subscriptions", titleSuffix: "Suppliers in Delhi" },
            //         { id: "book-clubs", title: "Book Club Subscriptions", slug: "book-clubs", titleSuffix: "Suppliers in Delhi" },
            //         { id: "pet-subscriptions", title: "Pet Subscription Boxes", slug: "pet-subscriptions", titleSuffix: "Suppliers in Delhi" },
            //         { id: "travel-subscriptions", title: "Travel & Adventure Subscriptions", slug: "travel-subscriptions", titleSuffix: "Suppliers in Delhi" },
            //         { id: "eco-subscriptions", title: "Sustainable & Eco-Friendly Subscriptions", slug: "eco-subscriptions", titleSuffix: "Suppliers in Delhi" }
            //     ]
            // }
        ]
    },

    // Transport Booging
    {
        id: "transport-booking",
        title: "Transport Booking",
        slug: "tra-bkg",
        titleSuffix: "Company in Delhi",
        icon: FaTruck,
        children: [
            {
                id: "guest-transportation-services",
                title: "Guest Transportation Services",
                slug: "gts",
                titleSuffix: "Company in Delhi",
                children: [
                    {
                        id: "airport-transfer-services",
                        title: "Airport Transfer Services",
                        slug: "ats",
                        titleSuffix: "Company in Delhi",
                        children: [
                            { id: "shared-shuttle", title: "Shared Shuttle Services", slug: "srd-stle", titleSuffix: "Company in Delhi" },
                            { id: "private-airport-transfer", title: "Private Airport Transfers", slug: "pat", titleSuffix: "Company in Delhi" },
                            { id: "executive-car", title: "Executive Car Services", slug: "exe-car", titleSuffix: "Company in Delhi" },
                            { id: "minivan-transfer", title: "Minivan or Minibus Transfers", slug: "mini-trns", titleSuffix: "Company in Delhi" },
                            { id: "limousine-services", title: "Luxury Limousine Services", slug: "limo-srv", titleSuffix: "Company in Delhi" },
                            { id: "taxi-services", title: "Taxi Services", slug: "taxi-srv", titleSuffix: "Company in Delhi" },
                            { id: "ride-hailing", title: "Ride-Hailing Services", slug: "ride-hai", titleSuffix: "Company in Delhi" },
                            { id: "shuttle-bus", title: "Shuttle Bus Services", slug: "shtl-bus", titleSuffix: "Company in Delhi" },
                            { id: "meet-greet", title: "Meet and Greet Airport Transfer", slug: "meet-grt", titleSuffix: "Company in Delhi" },
                            { id: "chauffeur-airport", title: "Chauffeur-Driven Airport Transfers", slug: "chau-arpt", titleSuffix: "Company in Delhi" },
                            { id: "group-airport-transfer", title: "Group Airport Transfers", slug: "grp-air-trn", titleSuffix: "Company in Delhi" },
                            { id: "luxury-bus-transfer", title: "Luxury Bus or Coach Transfers", slug: "lbt", titleSuffix: "Company in Delhi" },
                            { id: "non-stop-transfer", title: "Non-Stop Airport Transfer Services", slug: "non-stp-trn", titleSuffix: "Company in Delhi" }
                        ]
                    },
                    // {
                    //     id: "hotel-shuttle-services",
                    //     title: "Hotel Shuttle Services",
                    //     slug: "hotel-shuttle-services",
                    //     titleSuffix: "Company in Delhi",
                    //     children: [
                    //         { id: "airport-shuttle-hotel", title: "Airport Shuttle Services", slug: "airport-shuttle-hotel", titleSuffix: "Company in Delhi" },
                    //         { id: "private-hotel-shuttle", title: "Private Hotel Shuttle Services", slug: "private-hotel-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "city-shuttle", title: "City Center Shuttle Services", slug: "city-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "event-shuttle", title: "Event or Conference Shuttle Services", slug: "event-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "complimentary-shuttle", title: "Complimentary Hotel Shuttle Services", slug: "complimentary-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "scheduled-shuttle", title: "Scheduled Shuttle Services", slug: "scheduled-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "luxury-shuttle", title: "Luxury Hotel Shuttle Services", slug: "luxury-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "tourist-shuttle", title: "Tourist Shuttle Services", slug: "tourist-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "custom-hotel-shuttle", title: "Customizable Hotel Shuttle Services", slug: "custom-hotel-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "group-shuttle", title: "Shuttle Services for Large Groups", slug: "group-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "late-night-shuttle", title: "Late-Night Shuttle Services", slug: "late-night-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "eco-shuttle", title: "Eco-Friendly Shuttle Services", slug: "eco-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "seasonal-shuttle", title: "Seasonal Shuttle Services", slug: "seasonal-shuttle", titleSuffix: "Company in Delhi" },
                    //         { id: "hotel-to-hotel", title: "Hotel-to-Hotel Shuttle Services", slug: "hotel-to-hotel", titleSuffix: "Company in Delhi" }
                    //     ]
                    // },
                    // { id: "chauffeur-services", title: "Luxury Chauffeur Services", slug: "chauffeur-services", titleSuffix: "Company in Delhi" },
                    // { id: "private-car-rental", title: "Private Car Rental with Driver", slug: "private-car-rental", titleSuffix: "Company in Delhi" },
                    // { id: "group-transport", title: "Group Transportation Services", slug: "group-transport", titleSuffix: "Company in Delhi" },
                    // { id: "event-transport", title: "Event Transportation Services", slug: "event-transport", titleSuffix: "Company in Delhi" },
                    // { id: "corporate-transport", title: "Corporate Transportation Services", slug: "corporate-transport", titleSuffix: "Company in Delhi" },
                    // { id: "cruise-transfer", title: "Cruise Ship Transfer Services", slug: "cruise-transfer", titleSuffix: "Company in Delhi" },
                    // { id: "tour-bus", title: "Tour Bus and Sightseeing Services", slug: "tour-bus", titleSuffix: "Company in Delhi" },
                    // { id: "wedding-transport", title: "Wedding Transportation Services", slug: "wedding-transport", titleSuffix: "Company in Delhi" },
                    // { id: "shuttle-bus-services", title: "Shuttle Bus Services", slug: "shuttle-bus-services", titleSuffix: "Company in Delhi" },
                    // { id: "vip-transport", title: "VIP and Executive Transport Services", slug: "vip-transport", titleSuffix: "Company in Delhi" },
                    // { id: "rail-transfer", title: "Train and Rail Transfer Services", slug: "rail-transfer", titleSuffix: "Company in Delhi" },
                    // { id: "airport-concierge", title: "Airport Concierge and Fast Track Services", slug: "airport-concierge", titleSuffix: "Company in Delhi" },
                    // { id: "limo-party-bus", title: "Limo Bus and Party Bus Services", slug: "limo-party-bus", titleSuffix: "Company in Delhi" },
                    // { id: "eco-transport", title: "Sustainable or Eco-Friendly Transportation Services", slug: "eco-transport", titleSuffix: "Company in Delhi" }
                ]
            },
            // {
            //     id: "airport-transfers",
            //     title: "Airport Transfers",
            //     slug: "airport-transfers",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "private-airport", title: "Private Airport Transfers", slug: "private-airport", titleSuffix: "Company in Delhi" },
            //         { id: "shared-airport", title: "Shared Airport Transfers", slug: "shared-airport", titleSuffix: "Company in Delhi" },
            //         { id: "airport-shuttle", title: "Airport Shuttle Services", slug: "airport-shuttle" },
            //         { id: "luxury-airport", title: "Luxury Airport Transfers", slug: "luxury-airport" },
            //         { id: "minibus-airport", title: "Minivan or Minibus Airport Transfers", slug: "minibus-airport" },
            //         { id: "corporate-airport", title: "Executive Airport Transfers", slug: "corporate-airport" },
            //         { id: "vip-airport", title: "VIP Airport Transfers", slug: "vip-airport" },
            //         { id: "group-airport", title: "Group Airport Transfers", slug: "group-airport" },
            //         { id: "budget-airport", title: "Budget Airport Transfers", slug: "budget-airport" },
            //         { id: "express-airport", title: "Express Airport Transfers", slug: "express-airport" },
            //         { id: "accessible-airport", title: "Accessible Airport Transfers", slug: "accessible-airport" },
            //         { id: "helicopter-transfer", title: "Helicopter Transfers", slug: "helicopter-transfer" },
            //         { id: "private-jet-transfer", title: "Private Jet Transfers", slug: "private-jet-transfer" },
            //         { id: "tourist-airport", title: "Tourist Airport Transfers", slug: "tourist-airport" }
            //     ]
            // },
            // {
            //     id: "staff-crew-transport",
            //     title: "Staff and Crew Transport",
            //     slug: "staff-crew-transport",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "private-crew", title: "Private Crew Transport", slug: "private-crew", titleSuffix: "Company in Delhi" },
            //         { id: "staff-shuttle", title: "Shuttle Services for Staff", slug: "staff-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "group-crew", title: "Group Transport for Crew", slug: "group-crew", titleSuffix: "Company in Delhi" },
            //         { id: "crew-vans", title: "Crew Vans or Minibuses", slug: "crew-vans", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-crew", title: "Luxury Transport for Crew", slug: "luxury-crew", titleSuffix: "Company in Delhi" },
            //         { id: "production-crew", title: "Production Crew Transport", slug: "production-crew", titleSuffix: "Company in Delhi" },
            //         { id: "event-crew", title: "Event Crew Transport", slug: "event-crew", titleSuffix: "Company in Delhi" },
            //         { id: "crew-airport", title: "Airport Transfers for Crew", slug: "crew-airport", titleSuffix: "Company in Delhi" },
            //         { id: "long-distance-crew", title: "Long-Distance Crew Transport", slug: "long-distance-crew", titleSuffix: "Company in Delhi" },
            //         { id: "contract-staff", title: "Contracted Staff Transportation", slug: "contract-staff", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "cargo-transport",
            //     title: "Equipment and Cargo Transport",
            //     slug: "cargo-transport",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "road-freight", title: "Road Freight", slug: "road-freight", titleSuffix: "Company in Delhi" },
            //         { id: "heavy-equipment", title: "Heavy Equipment Transport", slug: "heavy-equipment", titleSuffix: "Company in Delhi" },
            //         { id: "flatbed-truck", title: "Flatbed Truck Transport", slug: "flatbed-truck", titleSuffix: "Company in Delhi" },
            //         { id: "refrigerated-cargo", title: "Refrigerated Cargo Transport", slug: "refrigerated-cargo", titleSuffix: "Company in Delhi" },
            //         { id: "container-transport", title: "Containerized Cargo Transport", slug: "container-transport", titleSuffix: "Company in Delhi" },
            //         { id: "air-freight", title: "Air Freight Transport", slug: "air-freight", titleSuffix: "Company in Delhi" },
            //         { id: "rail-freight", title: "Rail Freight Transport", slug: "rail-freight", titleSuffix: "Company in Delhi" },
            //         { id: "liquid-transport", title: "Liquid Bulk Transport", slug: "liquid-transport", titleSuffix: "Company in Delhi" },
            //         { id: "project-cargo", title: "Project Cargo Transport", slug: "project-cargo", titleSuffix: "Company in Delhi" },
            //         { id: "breakbulk", title: "Breakbulk Cargo Transport", slug: "breakbulk", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "vip-transport-services",
            //     title: "VIP Transport Services",
            //     slug: "vip-transport-services",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "private-chauffeur-vip", title: "Private Chauffeur Services", slug: "private-chauffeur-vip", titleSuffix: "Company in Delhi" },
            //         { id: "limousine-vip", title: "Luxury Limousine Services", slug: "limousine-vip", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-car-services", title: "Luxury Car Services", slug: "luxury-car-services", titleSuffix: "Company in Delhi" },
            //         { id: "helicopter-vip", title: "Helicopter Transfers", slug: "helicopter-vip", titleSuffix: "Company in Delhi" },
            //         { id: "private-jet-charter", title: "Private Jet Charter Services", slug: "private-jet-charter", titleSuffix: "Company in Delhi" },
            //         { id: "yacht-transfers", title: "Yacht or Boat Transfers", slug: "yacht-transfers", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-coach-hire", title: "Luxury Bus and Coach Hire", slug: "luxury-coach-hire", titleSuffix: "Company in Delhi" },
            //         { id: "airport-vip-transfer", title: "Airport VIP Transfers", slug: "airport-vip-transfer", titleSuffix: "Company in Delhi" },
            //         { id: "executive-travel", title: "Executive and Business Travel Services", slug: "executive-travel", titleSuffix: "Company in Delhi" },
            //         { id: "red-carpet-transport", title: "Red Carpet and Event VIP Transport", slug: "red-carpet-transport", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-suv", title: "Luxury SUV Services", slug: "luxury-suv", titleSuffix: "Company in Delhi" },
            //         { id: "custom-vip-tours", title: "Custom VIP Tours", slug: "custom-vip-tours", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "shuttle-bus-services",
            //     title: "Shuttle Bus Services",
            //     slug: "shuttle-bus-services",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "airport-shuttle-services", title: "Airport Shuttle Services", slug: "airport-shuttle-services", titleSuffix: "Company in Delhi" },
            //         { id: "hotel-shuttle-services", title: "Hotel Shuttle Services", slug: "hotel-shuttle-services", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-shuttle", title: "Corporate Shuttle Services", slug: "corporate-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "event-shuttle-services", title: "Event Shuttle Services", slug: "event-shuttle-services", titleSuffix: "Company in Delhi" },
            //         { id: "cruise-shuttle", title: "Cruise Terminal Shuttle Services", slug: "cruise-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "campus-shuttle", title: "Campus Shuttle Services", slug: "campus-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "park-ride", title: "Park-and-Ride Shuttle Services", slug: "park-ride", titleSuffix: "Company in Delhi" },
            //         { id: "tourist-shuttle-services", title: "Tourist Shuttle Services", slug: "tourist-shuttle-services", titleSuffix: "Company in Delhi" },
            //         { id: "hospital-shuttle", title: "Hospital Shuttle Services", slug: "hospital-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "employee-shuttle", title: "Employee Transportation Shuttle Services", slug: "employee-shuttle" }
            //     ]
            // },
            // {
            //     id: "on-demand-ride-services",
            //     title: "On-Demand Ride Services",
            //     slug: "on-demand-ride-services",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "ride-sharing", title: "Ride-Sharing Services", slug: "ride-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "private-car-hire", title: "Private Car Hire", slug: "private-car-hire", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-rides", title: "Luxury Ride Services", slug: "luxury-rides", titleSuffix: "Company in Delhi" },
            //         { id: "carpooling", title: "Carpooling Services", slug: "carpooling", titleSuffix: "Company in Delhi" },
            //         { id: "ev-rides", title: "Electric Vehicle Ride Services", slug: "ev-rides", titleSuffix: "Company in Delhi" },
            //         { id: "suv-rides", title: "Minivan or SUV Ride Services", slug: "suv-rides", titleSuffix: "Company in Delhi" },
            //         { id: "taxi-alternatives", title: "Taxi Alternative Services", slug: "taxi-alternatives", titleSuffix: "Company in Delhi" },
            //         { id: "pet-friendly-rides", title: "Pet-Friendly Ride Services", slug: "pet-friendly-rides", titleSuffix: "Company in Delhi" },
            //         { id: "airport-rides", title: "Airport Ride Services", slug: "airport-rides", titleSuffix: "Company in Delhi" },
            //         { id: "hourly-car-hire", title: "Hourly Car Hire Services", slug: "hourly-car-hire", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "eco-friendly-transport",
            //     title: "Bicycle or Eco-Friendly Transport",
            //     slug: "eco-friendly-transport",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "bike-sharing", title: "Bike Sharing Services", slug: "bike-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "electric-bike", title: "Electric Bike Sharing Services", slug: "electric-bike", titleSuffix: "Company in Delhi" },
            //         { id: "electric-scooter", title: "Electric Scooter Sharing Services", slug: "electric-scooter", titleSuffix: "Company in Delhi" },
            //         { id: "cargo-bike", title: "Cargo Bike Rentals", slug: "cargo-bike", titleSuffix: "Company in Delhi" },
            //         { id: "bike-tours", title: "Bike Tours", slug: "bike-tours", titleSuffix: "Company in Delhi" },
            //         { id: "bike-ride-programs", title: "Bike and Ride Programs", slug: "bike-ride-programs", titleSuffix: "Company in Delhi" },
            //         { id: "pedal-assist", title: "Pedal-Assist Bicycle Rentals", slug: "pedal-assist", titleSuffix: "Company in Delhi" },
            //         { id: "bike-delivery", title: "Bike Delivery Services", slug: "bike-delivery", titleSuffix: "Company in Delhi" },
            //         { id: "cargo-ebike", title: "Cargo E-Bike Services", slug: "cargo-ebike", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "luxury-coaches",
            //     title: "Luxury Coaches for Large-Scale Events",
            //     slug: "luxury-coaches",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "vip-coaches", title: "VIP Luxury Coaches", slug: "vip-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "executive-coaches", title: "Executive Coaches", slug: "executive-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "double-decker", title: "Luxury Double-Decker Coaches", slug: "double-decker", titleSuffix: "Company in Delhi" },
            //         { id: "touring-coaches", title: "Touring Coaches", slug: "touring-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "charter-coaches", title: "Charter Luxury Coaches", slug: "charter-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "wedding-coaches", title: "Wedding Luxury Coaches", slug: "wedding-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "shuttle-coaches", title: "Shuttle Luxury Coaches", slug: "shuttle-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "conference-coaches", title: "Conference Event Coaches", slug: "conference-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-coaches", title: "Corporate Event Coaches", slug: "corporate-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "sports-coaches", title: "Sports Event Coaches", slug: "sports-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "vip-catering-coach", title: "VIP Coach with Catering", slug: "vip-catering-coach", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "public-transport",
            //     title: "Public Transportation Arrangements",
            //     slug: "public-transport",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         {
            //             id: "bus-services",
            //             title: "Bus Services",
            //             slug: "bus-services",
            //             titleSuffix: "Company in Delhi",
            //             children: [
            //                 { id: "city-bus", title: "City Bus Services", slug: "city-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "intercity-bus", title: "Intercity Bus Services", slug: "intercity-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "express-bus", title: "Express Bus Services", slug: "express-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "shuttle-bus-public", title: "Shuttle Bus Services", slug: "shuttle-bus-public", titleSuffix: "Company in Delhi" },
            //                 { id: "tourist-bus", title: "Tourist Bus Services", slug: "tourist-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "school-bus", title: "School Bus Services", slug: "school-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "night-bus", title: "Night Bus Services", slug: "night-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "double-decker-bus", title: "Double-Decker Bus Services", slug: "double-decker-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "drt-bus", title: "Demand-Responsive Bus Services", slug: "drt-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "special-needs-bus", title: "Special Needs Bus Services", slug: "special-needs-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "expressway-bus", title: "Expressway Bus Services", slug: "expressway-bus", titleSuffix: "Company in Delhi" }
            //             ]
            //         },
            //         {
            //             id: "tram-services",
            //             title: "Tram and Trolleybus Services",
            //             slug: "tram-services",
            //             titleSuffix: "Company in Delhi",
            //             children: [
            //                 { id: "city-tram", title: "City Tram Services", slug: "city-tram", titleSuffix: "Company in Delhi" },
            //                 { id: "interurban-tram", title: "Interurban Tram Services", slug: "interurban-tram", titleSuffix: "Company in Delhi" },
            //                 { id: "heritage-tram", title: "Heritage Trams", slug: "heritage-tram", titleSuffix: "Company in Delhi" },
            //                 { id: "tourist-tram", title: "Tourist Trams", slug: "tourist-tram", titleSuffix: "Company in Delhi" },
            //                 { id: "high-speed-tram", title: "High-Speed Trams", slug: "high-speed-tram", titleSuffix: "Company in Delhi" },
            //                 { id: "trolleybus-city", title: "City Trolleybus Services", slug: "trolleybus-city", titleSuffix: "Company in Delhi" },
            //                 { id: "trolleybus-suburban", title: "Suburban Trolleybus Services", slug: "trolleybus-suburban", titleSuffix: "Company in Delhi" },
            //                 { id: "dedicated-trolleybus", title: "Dedicated Route Trolleybus Services", slug: "dedicated-trolleybus", titleSuffix: "Company in Delhi" },
            //                 { id: "airport-trolleybus", title: "Airport Trolleybus Services", slug: "airport-trolleybus", titleSuffix: "Company in Delhi" },
            //                 { id: "hybrid-trolleybus", title: "Hybrid Trolleybus Services", slug: "hybrid-trolleybus", titleSuffix: "Company in Delhi" },
            //                 { id: "tourist-trolleybus", title: "Tourist Trolleybus Services", slug: "tourist-trolleybus", titleSuffix: "Company in Delhi" }
            //             ]
            //         },
            //         {
            //             id: "metro-systems",
            //             title: "Metro/Subway Systems",
            //             slug: "metro-systems",
            //             titleSuffix: "Company in Delhi",
            //             children: [
            //                 { id: "heavy-rail", title: "Heavy Rail Metro Systems", slug: "heavy-rail", titleSuffix: "Company in Delhi" },
            //                 { id: "light-rail", title: "Light Rail Metro Systems", slug: "light-rail", titleSuffix: "Company in Delhi" },
            //                 { id: "apm-systems", title: "Automated People Mover Systems", slug: "apm-systems", titleSuffix: "Company in Delhi" },
            //                 { id: "commuter-rail", title: "Commuter Rail Systems", slug: "commuter-rail", titleSuffix: "Company in Delhi" },
            //                 { id: "maglev", title: "Maglev Systems", slug: "maglev", titleSuffix: "Company in Delhi" },
            //                 { id: "hybrid-metro", title: "Hybrid Metro Systems", slug: "hybrid-metro", titleSuffix: "Company in Delhi" },
            //                 { id: "underground-metro", title: "Underground Subway Systems", slug: "underground-metro", titleSuffix: "Company in Delhi" },
            //                 { id: "elevated-metro", title: "Elevated Metro Systems", slug: "elevated-metro", titleSuffix: "Company in Delhi" },
            //                 { id: "rapid-transit", title: "Rapid Transit Systems", slug: "rapid-transit" },
            //                 { id: "tram-metro", title: "Tram-Metro Hybrid Systems", slug: "tram-metro" }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "train-services",
            //     title: "Train Services",
            //     slug: "train-services",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "high-speed-trains", title: "High-Speed Trains", slug: "high-speed-trains", titleSuffix: "Company in Delhi" },
            //         { id: "intercity-trains", title: "Intercity Trains", slug: "intercity-trains", titleSuffix: "Company in Delhi" },
            //         { id: "regional-trains", title: "Regional Trains", slug: "regional-trains", titleSuffix: "Company in Delhi" },
            //         { id: "commuter-trains", title: "Commuter Trains", slug: "commuter-trains", titleSuffix: "Company in Delhi" },
            //         { id: "express-trains", title: "Express Trains", slug: "express-trains", titleSuffix: "Company in Delhi" },
            //         { id: "night-trains", title: "Night Trains", slug: "night-trains", titleSuffix: "Company in Delhi" },
            //         { id: "regional-express", title: "Regional Express Trains", slug: "regional-express", titleSuffix: "Company in Delhi" },
            //         { id: "light-rail", title: "Light Rail Trains", slug: "light-rail", titleSuffix: "Company in Delhi" },
            //         { id: "shuttle-trains", title: "Shuttle Trains", slug: "shuttle-trains", titleSuffix: "Company in Delhi" },
            //         { id: "tourist-trains", title: "Tourist Trains", slug: "tourist-trains", titleSuffix: "Company in Delhi" },
            //         { id: "freight-trains", title: "Freight Trains", slug: "freight-trains", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "ferry-services",
            //     title: "Ferry and Boat Services",
            //     slug: "ferry-services",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "passenger-ferries", title: "Passenger Ferries", slug: "passenger-ferries", titleSuffix: "Company in Delhi" },
            //         { id: "vehicle-ferries", title: "Vehicle Ferries", slug: "vehicle-ferries", titleSuffix: "Company in Delhi" },
            //         { id: "roro-ferries", title: "Ro-Ro Ferries", slug: "roro-ferries", titleSuffix: "Company in Delhi" },
            //         { id: "hydrofoils", title: "Hydrofoils", slug: "hydrofoils", titleSuffix: "Company in Delhi" },
            //         { id: "catamarans", title: "Catamarans", slug: "catamarans", titleSuffix: "Company in Delhi" },
            //         { id: "combo-ferries", title: "Car/Passenger Combo Ferries", slug: "combo-ferries", titleSuffix: "Company in Delhi" },
            //         { id: "passenger-boats", title: "Passenger-only Boats", slug: "passenger-boats", titleSuffix: "Company in Delhi" },
            //         { id: "floating-bridges", title: "Floating Bridges", slug: "floating-bridges", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-ferries", title: "Luxury Ferries", slug: "luxury-ferries", titleSuffix: "Company in Delhi" },
            //         { id: "tourist-ferries", title: "Tourist Ferries", slug: "tourist-ferries", titleSuffix: "Company in Delhi" },
            //         { id: "cargo-ferries", title: "Cargo Ferries", slug: "cargo-ferries", titleSuffix: "Company in Delhi" },
            //         { id: "island-ferries", title: "Island Hopping Ferries", slug: "island-ferries", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "public-ridesharing",
            //     title: "Ride-Sharing Programs",
            //     slug: "public-ridesharing",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "carpooling", title: "Carpooling", slug: "carpooling", titleSuffix: "Company in Delhi" },
            //         { id: "ride-hailing-public", title: "Ride-Hailing", slug: "ride-hailing-public", titleSuffix: "Company in Delhi" },
            //         { id: "vanpooling", title: "Vanpooling", slug: "vanpooling", titleSuffix: "Company in Delhi" },
            //         { id: "car-sharing", title: "Car-Sharing", slug: "car-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "shared-taxis", title: "Shared Taxis", slug: "shared-taxis", titleSuffix: "Company in Delhi" },
            //         { id: "public-rideshare-programs", title: "Public Ride-Sharing Programs", slug: "public-rideshare-programs", titleSuffix: "Company in Delhi" },
            //         { id: "bike-sharing", title: "Bike-Sharing", slug: "bike-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "specialized-rideshare", title: "Ride-Sharing for Specialized Groups", slug: "specialized-rideshare", titleSuffix: "Company in Delhi" },
            //         { id: "on-demand-shuttle", title: "On-Demand Shuttle Services", slug: "on-demand-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "escooter-ebike-sharing", title: "Electric Scooter & E-Bike Sharing", slug: "escooter-ebike-sharing", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "public-shuttle-services",
            //     title: "Shuttle Bus Services",
            //     slug: "public-shuttle-services",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "airport-shuttle-public", title: "Airport Shuttle Services", slug: "airport-shuttle-public", titleSuffix: "Company in Delhi" },
            //         { id: "hotel-shuttle-public", title: "Hotel Shuttle Services", slug: "hotel-shuttle-public", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-shuttle-public", title: "Corporate Shuttle Services", slug: "corporate-shuttle-public", titleSuffix: "Company in Delhi" },
            //         { id: "campus-shuttle-public", title: "Campus Shuttle Services", slug: "campus-shuttle-public", titleSuffix: "Company in Delhi" },
            //         { id: "public-shuttle", title: "Public Shuttle Bus Services", slug: "public-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "tourist-shuttle-public", title: "Tourist Shuttle Services", slug: "tourist-shuttle-public", titleSuffix: "Company in Delhi" },
            //         { id: "convention-shuttle", title: "Convention Center Shuttle Services", slug: "convention-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "park-ride-public", title: "Park-and-Ride Shuttle Services", slug: "park-ride-public", titleSuffix: "Company in Delhi" },
            //         { id: "seasonal-shuttle-public", title: "Seasonal Shuttle Services", slug: "seasonal-shuttle-public", titleSuffix: "Company in Delhi" },
            //         { id: "microtransit", title: "On-Demand Shuttle (Microtransit)", slug: "microtransit", titleSuffix: "Company in Delhi" },
            //         { id: "cruise-shuttle-public", title: "Cruise Ship Shuttle Services", slug: "cruise-shuttle-public", titleSuffix: "Company in Delhi" },
            //         { id: "festival-shuttle", title: "Event and Festival Shuttle Services", slug: "festival-shuttle", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "cable-car-funicular",
            //     title: "Cable Cars and Funiculars",
            //     slug: "cable-car-funicular",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "aerial-cable-cars", title: "Aerial Cable Cars", slug: "aerial-cable-cars", titleSuffix: "Company in Delhi" },
            //         { id: "funiculars", title: "Inclined Lifts (Funiculars)", slug: "funiculars", titleSuffix: "Company in Delhi" },
            //         { id: "chairlifts", title: "Chairlifts", slug: "chairlifts", titleSuffix: "Company in Delhi" },
            //         { id: "ropeways", title: "Ropeways", slug: "ropeways", titleSuffix: "Company in Delhi" },
            //         { id: "monocable", title: "Monocable Cable Cars", slug: "monocable", titleSuffix: "Company in Delhi" },
            //         { id: "dual-cable", title: "Dual-Cable Systems", slug: "dual-cable", titleSuffix: "Company in Delhi" },
            //         { id: "urban-cable", title: "Urban Cable Cars", slug: "urban-cable", titleSuffix: "Company in Delhi" },
            //         { id: "scenic-cable", title: "Scenic Cable Cars", slug: "scenic-cable", titleSuffix: "Company in Delhi" },
            //         { id: "cargo-cable", title: "Industrial Cable Cars", slug: "cargo-cable", titleSuffix: "Company in Delhi" },
            //         { id: "electric-funicular", title: "Electric Funiculars", slug: "electric-funicular", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "shared-electric-mobility",
            //     title: "Shared Electric Scooters and Bicycles",
            //     slug: "shared-electric-mobility",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "escooter-sharing", title: "Electric Scooter Sharing", slug: "escooter-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "ebike-sharing", title: "Electric Bicycle Sharing", slug: "ebike-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "dockless-sharing", title: "Dockless Scooter/Bike Sharing", slug: "dockless-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "station-based", title: "Station-Based Sharing", slug: "station-based", titleSuffix: "Company in Delhi" },
            //         { id: "moped-sharing", title: "Electric Moped Sharing", slug: "moped-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "smart-bikes", title: "Smart Bicycle Sharing", slug: "smart-bikes", titleSuffix: "Company in Delhi" },
            //         { id: "hybrid-sharing", title: "Hybrid Scooter/Bike Sharing", slug: "hybrid-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "specialized-sharing", title: "Sharing for Specialized Groups", slug: "specialized-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "subscription-sharing", title: "Subscription-Based Sharing", slug: "subscription-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "community-sharing", title: "Community-Managed Sharing", slug: "community-sharing", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "carpooling-programs",
            //     title: "Carpooling and Car-Sharing Programs",
            //     slug: "carpooling-programs",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "traditional-carpool", title: "Traditional Carpooling", slug: "traditional-carpool", titleSuffix: "Company in Delhi" },
            //         { id: "platform-rideshare", title: "Platform Ride-Sharing", slug: "platform-rideshare", titleSuffix: "Company in Delhi" },
            //         { id: "employer-carpool", title: "Employer Carpooling Programs", slug: "employer-carpool", titleSuffix: "Company in Delhi" },
            //         { id: "hov-lanes", title: "Carpool Lanes (HOV)", slug: "hov-lanes", titleSuffix: "Company in Delhi" },
            //         { id: "car-sharing-programs", title: "Car-Sharing Programs", slug: "car-sharing-programs", titleSuffix: "Company in Delhi" },
            //         { id: "peer-car-sharing", title: "Peer-to-Peer Car Sharing", slug: "peer-car-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "long-distance-rideshare", title: "Long-Distance Ride-Sharing", slug: "long-distance-rideshare", titleSuffix: "Company in Delhi" },
            //         { id: "electric-car-sharing", title: "Electric Car-Sharing", slug: "electric-car-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "hybrid-car-sharing", title: "Hybrid Car-Sharing", slug: "hybrid-car-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "community-carpool", title: "Community-Based Carpooling", slug: "community-carpool", titleSuffix: "Company in Delhi" },
            //         { id: "subscription-car-sharing", title: "Subscription Car-Sharing", slug: "subscription-car-sharing", titleSuffix: "Company in Delhi" },
            //         { id: "event-carpool", title: "Event Carpooling", slug: "event-carpool", titleSuffix: "Company in Delhi" },
            //         { id: "carpool-shuttle", title: "Carpooling with Shuttle Services", slug: "carpool-shuttle", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "taxi-ride-hailing",
            //     title: "Taxi and Ride-Hailing Services",
            //     slug: "taxi-ride-hailing",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "traditional-taxis", title: "Traditional Taxis", slug: "traditional-taxis", titleSuffix: "Company in Delhi" },
            //         { id: "app-ride-hailing", title: "App-Based Ride-Hailing", slug: "app-ride-hailing", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-ride-hailing", title: "Luxury Ride-Hailing", slug: "luxury-ride-hailing", titleSuffix: "Company in Delhi" },
            //         { id: "carpool-rides", title: "Carpool Ride Services", slug: "carpool-rides", titleSuffix: "Company in Delhi" },
            //         { id: "microtransit-rides", title: "Microtransit Ride Services", slug: "microtransit-rides", titleSuffix: "Company in Delhi" },
            //         { id: "taxi-like-services", title: "Taxi-Like Ride-Hailing", slug: "taxi-like-services", titleSuffix: "Company in Delhi" },
            //         { id: "two-wheeler-rides", title: "Motorcycle Ride-Hailing", slug: "two-wheeler-rides", titleSuffix: "Company in Delhi" },
            //         { id: "chauffeur-rides", title: "Luxury Chauffeur Services", slug: "chauffeur-rides", titleSuffix: "Company in Delhi" },
            //         { id: "accessible-rides", title: "Accessible Ride Services", slug: "accessible-rides", titleSuffix: "Company in Delhi" },
            //         { id: "delivery-rides", title: "Ride-Hailing for Delivery", slug: "delivery-rides", titleSuffix: "Company in Delhi" },
            //         { id: "peer-rides", title: "Peer-to-Peer Ride-Hailing", slug: "peer-rides", titleSuffix: "Company in Delhi" },
            //         { id: "airport-ride-hailing", title: "Airport Ride-Hailing", slug: "airport-ride-hailing", titleSuffix: "Company in Delhi" },
            //         { id: "event-ride-hailing", title: "Ride-Hailing for Events", slug: "event-ride-hailing", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "private-coach-bus-charter",
            //     title: "Private Coach and Bus Charter Services",
            //     slug: "private-coach-bus-charter",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "corporate-bus-charter", title: "Corporate Bus and Coach Charters", slug: "corporate-bus-charter", titleSuffix: "Company in Delhi" },
            //         { id: "group-tour-bus", title: "Group Travel and Tour Bus Charters", slug: "group-tour-bus", titleSuffix: "Company in Delhi" },
            //         { id: "wedding-bus-charter", title: "Wedding and Event Bus Charters", slug: "wedding-bus-charter", titleSuffix: "Company in Delhi" },
            //         { id: "airport-bus-charter", title: "Airport Shuttle Bus Charters", slug: "airport-bus-charter", titleSuffix: "Company in Delhi" },
            //         { id: "school-bus-charter", title: "School and Educational Bus Charters", slug: "school-bus-charter", titleSuffix: "Company in Delhi" },
            //         { id: "sports-bus-charter", title: "Sports Team Charter Buses", slug: "sports-bus-charter", titleSuffix: "Company in Delhi" },
            //         { id: "long-distance-bus", title: "Long-Distance Bus Charters", slug: "long-distance-bus", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-bus-charter", title: "Luxury Bus Charters", slug: "luxury-bus-charter", titleSuffix: "Company in Delhi" },
            //         { id: "religious-bus-charter", title: "Religious Group Bus Charters", slug: "religious-bus-charter", titleSuffix: "Company in Delhi" },
            //         { id: "festival-bus-charter", title: "Festival Shuttle Bus Charters", slug: "festival-bus-charter", titleSuffix: "Company in Delhi" },
            //         { id: "custom-bus-charter", title: "Custom Bus Charters", slug: "custom-bus-charter", titleSuffix: "Company in Delhi" },
            //         { id: "event-bus-charter", title: "Event-Specific Bus Charters", slug: "event-bus-charter", titleSuffix: "Company in Delhi" },
            //         { id: "eco-bus-charter", title: "Eco-Friendly Bus Charters", slug: "eco-bus-charter", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "chartered-flights-helicopter",
            //     title: "Chartered Flights or Helicopter Services",
            //     slug: "chartered-flights-helicopter",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "private-jet", title: "Private Jet Charters", slug: "private-jet", titleSuffix: "Company in Delhi" },
            //         { id: "helicopter-charter", title: "Helicopter Charters", slug: "helicopter-charter", titleSuffix: "Company in Delhi" },
            //         { id: "air-ambulance", title: "Air Ambulance Services", slug: "air-ambulance", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-jet", title: "Corporate Jet Charters", slug: "corporate-jet", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-flights", title: "Luxury Charter Flights", slug: "luxury-flights", titleSuffix: "Company in Delhi" },
            //         { id: "group-flight", title: "Group Charter Flights", slug: "group-flight", titleSuffix: "Company in Delhi" },
            //         { id: "on-demand-helicopter", title: "On-Demand Helicopter Services", slug: "on-demand-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "seaplane", title: "Seaplane Charters", slug: "seaplane", titleSuffix: "Company in Delhi" },
            //         { id: "helicopter-tours", title: "Helicopter Tours", slug: "helicopter-tours", titleSuffix: "Company in Delhi" },
            //         { id: "event-air-travel", title: "Private Air Travel for Events", slug: "event-air-travel", titleSuffix: "Company in Delhi" },
            //         { id: "cargo-charter-flight", title: "Cargo Charter Flights", slug: "cargo-charter-flight", titleSuffix: "Company in Delhi" },
            //         { id: "empty-leg", title: "Empty Leg Flights", slug: "empty-leg", titleSuffix: "Company in Delhi" },
            //         { id: "executive-helicopter", title: "Executive Helicopter Charters", slug: "executive-helicopter", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "group-team-travel",
            //     title: "Group and Team Travel",
            //     slug: "group-team-travel",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         {
            //             id: "group-bus-coach-charters",
            //             title: "Group Bus and Coach Charters",
            //             slug: "group-bus-coach-charters",
            //             titleSuffix: "Company in Delhi",
            //             children: [
            //                 { id: "corporate-group-bus", title: "Corporate Group Bus Charters", slug: "corporate-group-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "school-group-charters", title: "Educational and School Group Charters", slug: "school-group-charters", titleSuffix: "Company in Delhi" },
            //                 { id: "tourist-group-charters", title: "Tourist and Leisure Group Charters", slug: "tourist-group-charters", titleSuffix: "Company in Delhi" },
            //                 { id: "event-group-bus", title: "Event-Specific Group Bus Charters", slug: "event-group-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "sports-group-bus", title: "Sports Team and Athlete Group Charters", slug: "sports-group-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "wedding-group-bus", title: "Wedding and Special Occasion Group Charters", slug: "wedding-group-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "religious-group-bus", title: "Religious and Pilgrimage Group Charters", slug: "religious-group-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "airport-group-transfer", title: "Airport Shuttle and Transfer Group Charters", slug: "airport-group-transfer", titleSuffix: "Company in Delhi" },
            //                 { id: "luxury-group-charters", title: "Luxury and Executive Group Charters", slug: "luxury-group-charters", titleSuffix: "Company in Delhi" },
            //                 { id: "eco-group-bus", title: "Eco-Friendly Group Bus Charters", slug: "eco-group-bus", titleSuffix: "Company in Delhi" },
            //                 { id: "custom-group-charters", title: "Customizable Private Group Charters", slug: "custom-group-charters", titleSuffix: "Company in Delhi" },
            //                 { id: "long-distance-group", title: "Cross-Country and Long-Distance Group Charters", slug: "long-distance-group", titleSuffix: "Company in Delhi" },
            //                 { id: "convention-shuttle-bus", title: "Shuttle Bus Services for Conventions and Trade Shows", slug: "convention-shuttle-bus", titleSuffix: "Company in Delhi" }
            //             ]
            //         },
            //         {
            //             id: "private-group-flights",
            //             title: "Private Group Flights (Chartered Flights)",
            //             slug: "private-group-flights",
            //             titleSuffix: "Company in Delhi",
            //             children: [
            //                 { id: "corporate-chartered-flights", title: "Corporate Chartered Flights", slug: "corporate-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "leisure-chartered-flights", title: "Group Leisure and Tour Chartered Flights", slug: "leisure-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "sports-chartered-flights", title: "Sports Team and Athlete Chartered Flights", slug: "sports-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "wedding-chartered-flights", title: "Wedding and Special Event Chartered Flights", slug: "wedding-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "religious-chartered-flights", title: "Religious or Pilgrimage Chartered Flights", slug: "religious-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "government-chartered-flights", title: "Government and Diplomatic Chartered Flights", slug: "government-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "entertainment-chartered-flights", title: "Music and Entertainment Group Chartered Flights", slug: "entertainment-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "emergency-chartered-flights", title: "Emergency or Humanitarian Group Chartered Flights", slug: "emergency-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "vip-chartered-flights", title: "VIP and High Net-Worth Individual (HNWI) Chartered Flights", slug: "vip-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "international-chartered-flights", title: "Cross-Border and International Group Chartered Flights", slug: "international-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "cargo-chartered-flights", title: "Private Cargo and Freight Group Chartered Flights", slug: "cargo-chartered-flights", titleSuffix: "Company in Delhi" },
            //                 { id: "special-needs-charter", title: "Custom Charter Flights for Special Needs", slug: "special-needs-charter", titleSuffix: "Company in Delhi" }
            //             ]
            //         },
            //         {
            //             id: "group-shuttle-services",
            //             title: "Shuttle Services for Groups",
            //             slug: "group-shuttle-services",
            //             titleSuffix: "Company in Delhi",
            //             children: [
            //                 { id: "hotel-airport-shuttle", title: "Hotel to Airport Shuttle Services", slug: "hotel-airport-shuttle", titleSuffix: "Company in Delhi" },
            //                 { id: "event-conference-shuttle", title: "Event and Conference Shuttle Services", slug: "event-conference-shuttle", titleSuffix: "Company in Delhi" },
            //                 { id: "tour-shuttle", title: "Sightseeing and Tour Shuttle Services", slug: "tour-shuttle", titleSuffix: "Company in Delhi" },
            //                 { id: "hotel-convention-shuttle", title: "Hotel to Convention Center Shuttle Services", slug: "hotel-convention-shuttle", titleSuffix: "Company in Delhi" },
            //                 { id: "private-group-shuttle", title: "Private Group Shuttle Services", slug: "private-group-shuttle", titleSuffix: "Company in Delhi" },
            //                 { id: "airport-large-group", title: "Airport Shuttle Services for Large Groups", slug: "airport-large-group", titleSuffix: "Company in Delhi" },
            //                 { id: "resort-shuttle", title: "Resort and Vacation Shuttle Services", slug: "resort-shuttle", titleSuffix: "Company in Delhi" },
            //                 { id: "cruise-shuttle", title: "Cruise Port Shuttle Services", slug: "cruise-shuttle", titleSuffix: "Company in Delhi" },
            //                 { id: "sports-event-shuttle", title: "Sports Event Group Shuttle Services", slug: "sports-event-shuttle", titleSuffix: "Company in Delhi" },
            //                 { id: "wedding-shuttle", title: "Wedding and Special Event Shuttle Services", slug: "wedding-shuttle", titleSuffix: "Company in Delhi" },
            //                 { id: "campus-shuttle", title: "College or University Campus Shuttle Services", slug: "campus-shuttle", titleSuffix: "Company in Delhi" },
            //                 { id: "international-group-shuttle", title: "Airport Transfer Shuttle for International Groups", slug: "international-group-shuttle", titleSuffix: "Company in Delhi" }
            //             ]
            //         },
            //         {
            //             id: "group-train-travel",
            //             title: "Group Train Travel",
            //             slug: "group-train-travel",
            //             titleSuffix: "Company in Delhi",
            //             children: [
            //                 { id: "charter-train", title: "Charter Train Services", slug: "charter-train", titleSuffix: "Company in Delhi" },
            //                 { id: "discount-train", title: "Group Discount Train Tickets", slug: "discount-train", titleSuffix: "Company in Delhi" },
            //                 { id: "sleeper-train", title: "Sleeper Train Services for Groups", slug: "sleeper-train", titleSuffix: "Company in Delhi" },
            //                 { id: "high-speed-group", title: "High-Speed Rail for Group Travel", slug: "high-speed-group", titleSuffix: "Company in Delhi" },
            //                 { id: "luxury-train", title: "Scenic or Luxury Train Journeys for Groups", slug: "luxury-train", titleSuffix: "Company in Delhi" },
            //                 { id: "event-train", title: "Event Train Services", slug: "event-train", titleSuffix: "Company in Delhi" },
            //                 { id: "school-train", title: "Educational or School Group Train Travel", slug: "school-train", titleSuffix: "Company in Delhi" },
            //                 { id: "religious-train", title: "Pilgrimage and Religious Group Train Travel", slug: "religious-train", titleSuffix: "Company in Delhi" },
            //                 { id: "holiday-train", title: "Seasonal or Holiday Group Train Services", slug: "holiday-train", titleSuffix: "Company in Delhi" },
            //                 { id: "sports-train", title: "Sports Team Train Travel", slug: "sports-train", titleSuffix: "Company in Delhi" },
            //                 { id: "corporate-train", title: "Corporate Group Train Travel", slug: "corporate-train", titleSuffix: "Company in Delhi" },
            //                 { id: "international-train", title: "International Group Train Travel", slug: "international-train", titleSuffix: "Company in Delhi" }
            //             ]
            //         },
            //         {
            //             id: "group-car-rentals",
            //             title: "Car Rentals for Group Travel",
            //             slug: "group-car-rentals",
            //             titleSuffix: "Company in Delhi",
            //             children: [
            //                 { id: "minivan-group", title: "Minivan Rentals for Groups", slug: "minivan-group", titleSuffix: "Company in Delhi" },
            //                 { id: "suv-group", title: "SUV Rentals for Groups", slug: "suv-group", titleSuffix: "Company in Delhi" },
            //                 { id: "12-15-seater", title: "12-15 Seater Van Rentals", slug: "12-15-seater", titleSuffix: "Company in Delhi" },
            //                 { id: "16-25-seater", title: "16-25 Seater Coach or Mini Bus Rentals", slug: "16-25-seater", titleSuffix: "Company in Delhi" },
            //                 { id: "luxury-coach", title: "Luxury Coach Bus Rentals", slug: "luxury-coach", titleSuffix: "Company in Delhi" },
            //                 { id: "luxury-car-group", title: "Luxury Car Rentals for Groups", slug: "luxury-car-group", titleSuffix: "Company in Delhi" },
            //                 { id: "rv-group", title: "RV Rentals for Group Travel", slug: "rv-group", titleSuffix: "Company in Delhi" },
            //                 { id: "car-driver-group", title: "Car Rental with Driver for Group Travel", slug: "car-driver-group", titleSuffix: "Company in Delhi" },
            //                 { id: "7-8-seater-suv", title: "7-8 Seater SUVs with a Driver", slug: "7-8-seater-suv", titleSuffix: "Company in Delhi" },
            //                 { id: "4x4-group", title: "4x4 Rental for Group Travel", slug: "4x4-group", titleSuffix: "Company in Delhi" },
            //                 { id: "shuttle-van-group", title: "Shuttle Van Rentals for Group Travel", slug: "shuttle-van-group", titleSuffix: "Company in Delhi" },
            //                 { id: "luxury-minivan", title: "Luxury Minivan Rentals for Groups", slug: "luxury-minivan", titleSuffix: "Company in Delhi" }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "luxury-group-travel",
            //     title: "Luxury Group Travel",
            //     slug: "luxury-group-travel",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "luxury-coach-buses", title: "Luxury Coach Buses", slug: "luxury-coach-buses", titleSuffix: "Company in Delhi" },
            //         { id: "private-limousines", title: "Private Limousines", slug: "private-limousines", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-vans", title: "Luxury Vans (Luxury Minivans)", slug: "luxury-vans", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-mini-coach", title: "Luxury Mini Coach Buses", slug: "luxury-mini-coach", titleSuffix: "Company in Delhi" },
            //         { id: "chauffeur-sedans", title: "Chauffeur-Driven Luxury Sedans", slug: "chauffeur-sedans", titleSuffix: "Company in Delhi" },
            //         { id: "stretch-suvs", title: "Stretch SUVs", slug: "stretch-suvs", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-party-bus", title: "Luxury Party Buses", slug: "luxury-party-bus", titleSuffix: "Company in Delhi" },
            //         { id: "electric-coaches", title: "Luxury Hybrid or Electric Coaches", slug: "electric-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "executive-coaches", title: "Executive Coaches with Conference Facilities", slug: "executive-coaches", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-rv", title: "Luxury RVs for Group Travel", slug: "luxury-rv", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "cruise-group-travel",
            //     title: "Cruise Ship Group Travel",
            //     slug: "cruise-group-travel",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "charter-cruise", title: "Charter Cruise Ship Services", slug: "charter-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "discount-cruise", title: "Group Discounted Cruise Packages", slug: "discount-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "themed-cruise", title: "Themed or Special Interest Cruises", slug: "themed-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "family-cruise", title: "Family Group Cruises", slug: "family-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-cruise", title: "Luxury Group Cruises", slug: "luxury-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-cruise", title: "Conference and Corporate Cruises", slug: "corporate-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "wedding-cruise", title: "Wedding and Honeymoon Cruises", slug: "wedding-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "educational-cruise", title: "Educational Group Cruises", slug: "educational-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "adventure-cruise", title: "Adventure Group Cruises", slug: "adventure-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "expedition-cruise", title: "Luxury Expedition Cruises", slug: "expedition-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "senior-cruise", title: "Senior Group Cruises", slug: "senior-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "sports-cruise", title: "Sports Team Group Cruises", slug: "sports-cruise", titleSuffix: "Company in Delhi" },
            //         { id: "incentive-cruise", title: "Incentive and Reward Cruises", slug: "incentive-cruise", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "group-helicopter-charters",
            //     title: "Group Helicopter Charters",
            //     slug: "group-helicopter-charters",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "vip-helicopter", title: "VIP and Executive Helicopter Charters", slug: "vip-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "event-helicopter", title: "Event and Conference Helicopter Charters", slug: "event-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "sightseeing-helicopter", title: "Sightseeing Helicopter Charters", slug: "sightseeing-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-helicopter", title: "Luxury Travel Helicopter Charters", slug: "luxury-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-helicopter", title: "Corporate Retreat Helicopter Charters", slug: "corporate-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "emergency-helicopter", title: "Emergency Helicopter Charters", slug: "emergency-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "sports-helicopter", title: "Sports Event Helicopter Charters", slug: "sports-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "media-helicopter", title: "Film Production Helicopter Charters", slug: "media-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "custom-helicopter", title: "Customizable Helicopter Charters", slug: "custom-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "event-helicopter-special", title: "Helicopter Charters for Special Events", slug: "event-helicopter-special", titleSuffix: "Company in Delhi" },
            //     ]
            // },
            // {
            //     id: "sports-team-travel",
            //     title: "Team Travel for Sports",
            //     slug: "sports-team-travel",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "sports-bus", title: "Charter Bus Services for Sports Teams", slug: "sports-bus", titleSuffix: "Company in Delhi" },
            //         { id: "sports-coach", title: "Private Coach Services for Sports Teams", slug: "sports-coach", titleSuffix: "Company in Delhi" },
            //         { id: "sports-flight", title: "Team Travel by Chartered Flights", slug: "sports-flight", titleSuffix: "Company in Delhi" },
            //         { id: "sports-commercial-flight", title: "Commercial Flights for Sports Teams", slug: "sports-commercial-flight", titleSuffix: "Company in Delhi" },
            //         { id: "sports-train", title: "Team Travel by Train", slug: "sports-train", titleSuffix: "Company in Delhi" },
            //         { id: "sports-shuttle", title: "Shuttle Services for Sports Teams", slug: "sports-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "sports-luxury-coach", title: "Luxury Coaches for Teams", slug: "sports-luxury-coach", titleSuffix: "Company in Delhi" },
            //         { id: "mobile-team-bus", title: "Mobile Team Facilities", slug: "mobile-team-bus", titleSuffix: "Company in Delhi" },
            //         { id: "custom-team-bus", title: "Customizable Team Charter Buses", slug: "custom-team-bus", titleSuffix: "Company in Delhi" },
            //         { id: "sports-equipment-transport", title: "Transport for Sports Equipment", slug: "sports-equipment-transport", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "group-bicycle-tours",
            //     title: "Group Bicycle Tours",
            //     slug: "group-bicycle-tours",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "city-bike", title: "City Bike Tours", slug: "city-bike", titleSuffix: "Company in Delhi" },
            //         { id: "scenic-bike", title: "Nature and Scenic Bike Tours", slug: "scenic-bike", titleSuffix: "Company in Delhi" },
            //         { id: "mountain-bike", title: "Mountain Bike Tours", slug: "mountain-bike", titleSuffix: "Company in Delhi" },
            //         { id: "guided-bike", title: "Guided Bike Tours", slug: "guided-bike", titleSuffix: "Company in Delhi" },
            //         { id: "self-guided-bike", title: "Self-Guided Bike Tours", slug: "self-guided-bike", titleSuffix: "Company in Delhi" },
            //         { id: "multi-day-bike", title: "Multi-Day Bike Tours", slug: "multi-day-bike", titleSuffix: "Company in Delhi" },
            //         { id: "cycling-accommodation", title: "Cycling Tours with Stay", slug: "cycling-accommodation", titleSuffix: "Company in Delhi" },
            //         { id: "food-bike", title: "Wine or Food Bike Tours", slug: "food-bike", titleSuffix: "Company in Delhi" },
            //         { id: "bike-boat", title: "Bike and Boat Tours", slug: "bike-boat", titleSuffix: "Company in Delhi" },
            //         { id: "charity-bike", title: "Charity Bike Tours", slug: "charity-bike", titleSuffix: "Company in Delhi" },
            //         { id: "family-bike", title: "Family-Friendly Bike Tours", slug: "family-bike", titleSuffix: "Company in Delhi" },
            //         { id: "electric-bike", title: "Electric Bike Tours", slug: "electric-bike", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "festival-group-transport",
            //     title: "Group Transportation for Festivals",
            //     slug: "festival-group-transport",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "festival-shuttle", title: "Festival Shuttle Services", slug: "festival-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "festival-charter-bus", title: "Charter Bus Services", slug: "festival-charter-bus", titleSuffix: "Company in Delhi" },
            //         { id: "festival-coach", title: "Private Coach Rentals", slug: "festival-coach", titleSuffix: "Company in Delhi" },
            //         { id: "festival-public-transport", title: "Public Transport for Festivals", slug: "festival-public-transport", titleSuffix: "Company in Delhi" },
            //         { id: "festival-bike", title: "Bike Rentals for Festivals", slug: "festival-bike", titleSuffix: "Company in Delhi" },
            //         { id: "festival-water", title: "Festival Cruises", slug: "festival-water", titleSuffix: "Company in Delhi" },
            //         { id: "festival-suv", title: "Luxury Van or SUV Rentals", slug: "festival-suv", titleSuffix: "Company in Delhi" },
            //         { id: "festival-limo", title: "Limousine Rentals", slug: "festival-limo", titleSuffix: "Company in Delhi" },
            //         { id: "festival-carpool", title: "Carpooling for Festivals", slug: "festival-carpool", titleSuffix: "Company in Delhi" },
            //         { id: "festival-helicopter", title: "Helicopter Travel for VIP", slug: "festival-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "festival-tour-bus", title: "Festival Bus Tours", slug: "festival-tour-bus", titleSuffix: "Company in Delhi" },
            //         { id: "festival-train", title: "Train Travel for Festivals", slug: "festival-train", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "student-group-travel",
            //     title: "Student Group Travel",
            //     slug: "student-group-travel",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "school-bus", title: "School Bus Transportation", slug: "school-bus", titleSuffix: "Company in Delhi" },
            //         { id: "student-charter-bus", title: "Charter Bus Services", slug: "student-charter-bus", titleSuffix: "Company in Delhi" },
            //         { id: "student-public-transport", title: "Public Transport for Students", slug: "student-public-transport", titleSuffix: "Company in Delhi" },
            //         { id: "student-train", title: "Train Travel for Students", slug: "student-train", titleSuffix: "Company in Delhi" },
            //         { id: "student-coach", title: "Private Coach Rentals", slug: "student-coach", titleSuffix: "Company in Delhi" },
            //         { id: "student-flight", title: "Air Travel for Students", slug: "student-flight", titleSuffix: "Company in Delhi" },
            //         { id: "student-ferry", title: "Ferry Travel for Students", slug: "student-ferry", titleSuffix: "Company in Delhi" },
            //         { id: "student-rideshare", title: "Shared Ride Services", slug: "student-rideshare", titleSuffix: "Company in Delhi" },
            //         { id: "student-carpool", title: "Carpooling", slug: "student-carpool", titleSuffix: "Company in Delhi" },
            //         { id: "student-luxury", title: "Luxury Student Travel", slug: "student-luxury", titleSuffix: "Company in Delhi" },
            //         { id: "student-bike", title: "Bike Tours for Students", slug: "student-bike", titleSuffix: "Company in Delhi" },
            //         { id: "student-taxi", title: "Taxi/Ride-Hailing Travel", slug: "student-taxi", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "adventure-group-travel",
            //     title: "Adventure Group Travel",
            //     slug: "adventure-group-travel",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "offroad-vehicles", title: "Off-Road Vehicles", slug: "offroad-vehicles", titleSuffix: "Company in Delhi" },
            //         { id: "safari-vehicles", title: "Safari Vehicles", slug: "safari-vehicles", titleSuffix: "Company in Delhi" },
            //         { id: "trekking-expeditions", title: "Trekking Expeditions", slug: "trekking-expeditions", titleSuffix: "Company in Delhi" },
            //         { id: "overland-trucks", title: "Campers and Overland Trucks", slug: "overland-trucks", titleSuffix: "Company in Delhi" },
            //         { id: "air-charters-adventure", title: "Helicopter or Aircraft Charters", slug: "air-charters-adventure", titleSuffix: "Company in Delhi" },
            //         { id: "kayak-expeditions", title: "Canoes and Kayaks", slug: "kayak-expeditions", titleSuffix: "Company in Delhi" },
            //         { id: "camel-horse-rides", title: "Camel or Horseback Rides", slug: "camel-horse-rides", titleSuffix: "Company in Delhi" },
            //         { id: "expedition-bus", title: "Group Bus Tours for Expeditions", slug: "expedition-bus", titleSuffix: "Company in Delhi" },
            //         { id: "atv-tours", title: "Motorbikes and ATV Tours", slug: "atv-tours", titleSuffix: "Company in Delhi" },
            //         { id: "expedition-air", title: "Group Air Travel for Expeditions", slug: "expedition-air", titleSuffix: "Company in Delhi" },
            //         { id: "yacht-adventure", title: "Boat or Yacht Charters", slug: "yacht-adventure", titleSuffix: "Company in Delhi" },
            //         { id: "public-transport-adventure", title: "Public Transport for Expeditions", slug: "public-transport-adventure", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "group-airport-transfers",
            //     title: "Group Airport Transfers",
            //     slug: "group-airport-transfers",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "shared-shuttle-group", title: "Shared Shuttle Services", slug: "shared-shuttle-group", titleSuffix: "Company in Delhi" },
            //         { id: "private-bus-transfer", title: "Private Coach or Bus Transfers", slug: "private-bus-transfer", titleSuffix: "Company in Delhi" },
            //         { id: "minibus-transfer", title: "Minibus or Minivan Transfers", slug: "minibus-transfer", titleSuffix: "Company in Delhi" },
            //         { id: "executive-car-transfer", title: "Executive or Luxury Car Services", slug: "executive-car-transfer", titleSuffix: "Company in Delhi" },
            //         { id: "airport-limo", title: "Airport Limousine Services", slug: "airport-limo", titleSuffix: "Company in Delhi" },
            //         { id: "private-airport-transfer-group", title: "Private Airport Transfers (Cars, Vans, or Buses)", slug: "private-airport-transfer-group", titleSuffix: "Company in Delhi" },
            //         { id: "ride-hailing-group", title: "Ride-Hailing Services for Groups", slug: "ride-hailing-group", titleSuffix: "Company in Delhi" },
            //         { id: "luxury-shuttle-group", title: "Luxury Shuttle Services", slug: "luxury-shuttle-group", titleSuffix: "Company in Delhi" },
            //         { id: "airport-additional-services", title: "Airport Transfer with Additional Services", slug: "airport-additional-services", titleSuffix: "Company in Delhi" },
            //         { id: "van-pooling", title: "Large Van Pooling for Groups", slug: "van-pooling", titleSuffix: "Company in Delhi" },
            //         { id: "custom-group-transfers", title: "Customizable Group Transfers", slug: "custom-group-transfers", titleSuffix: "Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "corporate-group-travel",
            //     title: "Corporate Group Travel",
            //     slug: "corporate-group-travel",
            //     titleSuffix: "Company in Delhi",
            //     children: [
            //         { id: "corporate-bus-hire", title: "Private Coach or Bus Hire", slug: "corporate-bus-hire", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-executive-car", title: "Executive Car Services", slug: "corporate-executive-car", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-minibus", title: "Minibus or Minivan Transfers", slug: "corporate-minibus", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-air-travel", title: "Group Air Travel (Private or Commercial Flights)", slug: "corporate-air-travel", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-train", title: "Train Travel for Corporate Groups", slug: "corporate-train", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-shuttle", title: "Private Shuttle Services", slug: "corporate-shuttle", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-ride-hailing", title: "Ride-Hailing Services for Groups", slug: "corporate-ride-hailing", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-luxury-travel", title: "Luxury Group Travel", slug: "corporate-luxury-travel", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-bus-tours", title: "Corporate Group Bus Tours", slug: "corporate-bus-tours", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-helicopter", title: "Group Helicopter or Private Air Travel", slug: "corporate-helicopter", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-shared-bus", title: "Shared Group Bus or Coach Services", slug: "corporate-shared-bus", titleSuffix: "Company in Delhi" },
            //         { id: "corporate-packages", title: "Corporate Group Travel Packages", slug: "corporate-packages", titleSuffix: "Company in Delhi" }
            //     ]
            // }
        ]
    },

    // Corporate Video
    {
        id: "corporate-Video",
        title: "Corporate Video",
        slug: "corp-vdo",
        titleSuffix: "Maker in Delhi",
        icon: FaVideo,
        children: [
            {
                id: "promotional-corporate-Video",
                title: "Promotional Corporate Video",
                slug: "pro-vdo",
                titleSuffix: "Maker in Delhi",
                children: [
                    { id: "brand-overview", title: "Brand Overview Video", slug: "brd-ovr", titleSuffix: "Maker in Delhi" },
                    { id: "product-demo", title: "Product or Service Demonstration Video", slug: "prd-demo", titleSuffix: "Maker in Delhi" },
                    { id: "customer-testimonial", title: "Customer Testimonial Video", slug: "cst-test", titleSuffix: "Maker in Delhi" },
                    { id: "company-culture", title: "Company Culture Video", slug: "com-clr", titleSuffix: "Maker in Delhi" },
                    { id: "event-highlight", title: "Event Highlight Video", slug: "evn-hgt", titleSuffix: "Maker in Delhi" },
                    { id: "csr-Video", title: "Corporate Social Responsibility (CSR) Video", slug: "csr-vdo", titleSuffix: "Maker in Delhi" },
                    { id: "explainer-Video", title: "Explainer Video", slug: "exp-vdo", titleSuffix: "Maker in Delhi" },
                    { id: "testimonial-case-study", title: "Testimonial and Case Study Video", slug: "test-study", titleSuffix: "Maker in Delhi" },
                    { id: "behind-scenes", title: "Behind-the-Scenes Video", slug: "bhd-scns", titleSuffix: "Maker in Delhi" },
                    { id: "seasonal-Video", title: "Seasonal or Holiday Promotional Video", slug: "snl-vdo", titleSuffix: "Maker in Delhi" }
                ]
            },
            // {
            //     id: "event-highlight-Video",
            //     title: "Event Highlight Video",
            //     slug: "event-highlight-Video",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "event-recap", title: "Conference/Event Recap Video", slug: "event-recap", titleSuffix: "Maker in Delhi" },
            //         { id: "product-launch-highlight", title: "Product Launch Highlight Video", slug: "product-launch-highlight", titleSuffix: "Maker in Delhi" },
            //         { id: "anniversary-video", title: "Corporate Anniversary/Event Milestone Video", slug: "anniversary-video", titleSuffix: "Maker in Delhi" },
            //         { id: "award-video", title: "Award Ceremony Highlight Video", slug: "award-video", titleSuffix: "Maker in Delhi" },
            //         { id: "team-building-video", title: "Employee/Team Building Event Highlight Video", slug: "team-building-video", titleSuffix: "Maker in Delhi" },
            //         { id: "seminar-video", title: "Seminar/Workshop Highlight Video", slug: "seminar-video", titleSuffix: "Maker in Delhi" },
            //         { id: "customer-experience-video", title: "Customer Testimonial/Experience Video", slug: "customer-experience-video", titleSuffix: "Maker in Delhi" },
            //         { id: "virtual-event-video", title: "Virtual Event Highlight Video", slug: "virtual-event-video", titleSuffix: "Maker in Delhi" },
            //         { id: "sponsorship-video", title: "Sponsorship/Partnership Event Highlight Video", slug: "sponsorship-video", titleSuffix: "Maker in Delhi" },
            //         { id: "trade-show-video", title: "Trade Show/Exhibition Video", slug: "trade-show-video", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "training-instructional-Video",
            //     title: "Training and Instructional Video",
            //     slug: "training-instructional-Video",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "onboarding", title: "Employee Onboarding Video", slug: "onboarding", titleSuffix: "Maker in Delhi" },
            //         { id: "compliance-training", title: "Compliance Training Video", slug: "compliance-training", titleSuffix: "Maker in Delhi" },
            //         { id: "product-training", title: "Product Training Video", slug: "product-training", titleSuffix: "Maker in Delhi" },
            //         { id: "software-training", title: "Software Training Video", slug: "software-training", titleSuffix: "Maker in Delhi" },
            //         { id: "customer-service-training", title: "Customer Service Training Video", slug: "customer-service-training", titleSuffix: "Maker in Delhi" },
            //         { id: "health-safety-training", title: "Health and Safety Training Video", slug: "health-safety-training", titleSuffix: "Maker in Delhi" },
            //         { id: "leadership-training", title: "Leadership and Management Training Video", slug: "leadership-training", titleSuffix: "Maker in Delhi" },
            //         { id: "sales-training", title: "Sales Training Video", slug: "sales-training", titleSuffix: "Maker in Delhi" },
            //         { id: "soft-skills", title: "Soft Skills Training Video", slug: "soft-skills", titleSuffix: "Maker in Delhi" },
            //         { id: "technical-training", title: "Technical Skills Training Video", slug: "technical-training", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "testimonial-case-study-Video",
            //     title: "Testimonial and Case Study Video",
            //     slug: "testimonial-case-study-Video",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "customer-testimonial-2", title: "Customer Testimonial Video", slug: "customer-testimonial-2", titleSuffix: "Maker in Delhi" },
            //         { id: "employee-testimonial", title: "Employee Testimonial Video", slug: "employee-testimonial", titleSuffix: "Maker in Delhi" },
            //         { id: "client-success", title: "Client Success Stories (Case Studies)", slug: "client-success", titleSuffix: "Maker in Delhi" },
            //         { id: "video-case-study", title: "Video Case Study with Data", slug: "video-case-study", titleSuffix: "Maker in Delhi" },
            //         { id: "influencer-testimonial", title: "Influencer or Industry Expert Testimonial Video", slug: "influencer-testimonial", titleSuffix: "Maker in Delhi" },
            //         { id: "product-testimonial", title: "Video Testimonials for Specific Products or Services", slug: "product-testimonial", titleSuffix: "Maker in Delhi" },
            //         { id: "customer-journey", title: "Customer Journey Video", slug: "customer-journey", titleSuffix: "Maker in Delhi" },
            //         { id: "testimonial-compilation", title: "Testimonial Compilation Video", slug: "testimonial-compilation", titleSuffix: "Maker in Delhi" },
            //         { id: "animated-case-study", title: "Animated Case Study/Testimonial Video", slug: "animated-case-study", titleSuffix: "Maker in Delhi" },
            //         { id: "problem-solution", title: "Problem-Solution Testimonial Video", slug: "problem-solution", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "internal-communications-Video",
            //     title: "Internal Communications Video",
            //     slug: "internal-communications-Video",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "ceo-message", title: "Company Update/CEO Address Video", slug: "ceo-message", titleSuffix: "Maker in Delhi" },
            //         { id: "employee-onboarding-2", title: "Employee Onboarding Video", slug: "employee-onboarding-2", titleSuffix: "Maker in Delhi" },
            //         { id: "training-development", title: "Training and Development Video", slug: "training-development", titleSuffix: "Maker in Delhi" },
            //         { id: "newsletter", title: "Internal Newsletter Video", slug: "newsletter", titleSuffix: "Maker in Delhi" },
            //         { id: "culture-values", title: "Culture and Values Video", slug: "culture-values", titleSuffix: "Maker in Delhi" },
            //         { id: "event-recap-internal", title: "Event Recap Video", slug: "event-recap-internal", titleSuffix: "Maker in Delhi" },
            //         { id: "health-safety-comm", title: "Health and Safety Communication Video", slug: "health-safety-comm", titleSuffix: "Maker in Delhi" },
            //         { id: "policy-procedure", title: "Policy and Procedure Video", slug: "policy-procedure", titleSuffix: "Maker in Delhi" },
            //         { id: "employee-recognition", title: "Employee Recognition Video", slug: "employee-recognition", titleSuffix: "Maker in Delhi" },
            //         { id: "townhall", title: "Town Hall or Q&A Video", slug: "townhall", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "product-launch-Video",
            //     title: "Product Launch Video",
            //     slug: "product-launch-Video",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "teaser-launch", title: "Teaser Product Launch Video", slug: "teaser-launch", titleSuffix: "Maker in Delhi" },
            //         { id: "product-reveal", title: "Product Reveal Video", slug: "product-reveal", titleSuffix: "Maker in Delhi" },
            //         { id: "explainer-demo", title: "Explainer/Product Demo Video", slug: "explainer-demo", titleSuffix: "Maker in Delhi" },
            //         { id: "review-testimonial", title: "Customer Testimonial/Product Review Video", slug: "review-testimonial", titleSuffix: "Maker in Delhi" },
            //         { id: "behind-launch", title: "Behind-the-Scenes Launch Video", slug: "behind-launch", titleSuffix: "Maker in Delhi" },
            //         { id: "influencer-launch", title: "Influencer/Brand Ambassador Product Launch Video", slug: "influencer-launch", titleSuffix: "Maker in Delhi" },
            //         { id: "animated-launch", title: "Animated Product Launch Video", slug: "animated-launch", titleSuffix: "Maker in Delhi" },
            //         { id: "testimonial-launch", title: "Testimonial-Driven Product Launch Video", slug: "testimonial-launch", titleSuffix: "Maker in Delhi" },
            //         { id: "launch-event", title: "Product Launch Event Video", slug: "launch-event", titleSuffix: "Maker in Delhi" },
            //         { id: "explainer-testimonial-launch", title: "Explainer with Testimonials Launch Video", slug: "explainer-testimonial-launch", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "csr-Video-main",
            //     title: "Corporate Social Responsibility (CSR) Video",
            //     slug: "csr-Video-main",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "csr-storytelling", title: "Brand Storytelling CSR Video", slug: "csr-storytelling", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-impact", title: "Impact and Success Story CSR Video", slug: "csr-impact", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-employee", title: "Employee Involvement CSR Video", slug: "csr-employee", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-partnership", title: "Partnership/Collaboration CSR Video", slug: "csr-partnership", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-environment", title: "Environmental Impact CSR Video", slug: "csr-environment", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-diversity", title: "Diversity and Inclusion CSR Video", slug: "csr-diversity", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-sustainability", title: "Sustainability Reporting CSR Video", slug: "csr-sustainability", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-community", title: "Community Engagement CSR Video", slug: "csr-community", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-crisis", title: "Crisis Response and Relief CSR Video", slug: "csr-crisis", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "bts-corporate-Video",
            //     title: "Behind-the-Scenes (BTS) Corporate Video",
            //     slug: "bts-corporate-Video",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "office-bts", title: "Office Culture and Environment BTS Video", slug: "office-bts", titleSuffix: "Maker in Delhi" },
            //         { id: "product-dev-bts", title: "Product Development BTS Video", slug: "product-dev-bts", titleSuffix: "Maker in Delhi" },
            //         { id: "event-prep-bts", title: "Event Preparation BTS Video", slug: "event-prep-bts", titleSuffix: "Maker in Delhi" },
            //         { id: "creative-bts", title: "Creative Process BTS Video", slug: "creative-bts", titleSuffix: "Maker in Delhi" },
            //         { id: "team-bts", title: "Team Introduction and Employee Stories BTS Video", slug: "team-bts", titleSuffix: "Maker in Delhi" },
            //         { id: "manufacturing-bts", title: "Manufacturing/Production Process BTS Video", slug: "manufacturing-bts", titleSuffix: "Maker in Delhi" },
            //         { id: "leadership-bts", title: "CEO or Leadership BTS Video", slug: "leadership-bts", titleSuffix: "Maker in Delhi" },
            //         { id: "support-bts", title: "Customer Service and Support BTS Video", slug: "support-bts", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-bts", title: "CSR Activities BTS Video", slug: "csr-bts", titleSuffix: "Maker in Delhi" },
            //         { id: "tech-bts", title: "Technology and Innovation BTS Video", slug: "tech-bts", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "webinars-live-streaming",
            //     title: "Webinars and Live Streaming Corporate Video",
            //     slug: "webinars-live-streaming",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "educational-webinars", title: "Educational/Webinar Presentations", slug: "educational-webinars", titleSuffix: "Maker in Delhi" },
            //         { id: "launch-webinars", title: "Product Launch Webinars", slug: "launch-webinars", titleSuffix: "Maker in Delhi" },
            //         { id: "panel-webinars", title: "Panel Discussions and Expert Talks", slug: "panel-webinars", titleSuffix: "Maker in Delhi" },
            //         { id: "townhall-webinars", title: "Corporate Announcements and Town Hall Meetings", slug: "townhall-webinars", titleSuffix: "Maker in Delhi" },
            //         { id: "training-webinars", title: "Training and Development Webinars", slug: "training-webinars", titleSuffix: "Maker in Delhi" },
            //         { id: "ama-webinars", title: "Q&A and AMA Sessions", slug: "ama-webinars", titleSuffix: "Maker in Delhi" },
            //         { id: "testimonial-webinars", title: "Customer Testimonials and Case Study Webinars", slug: "testimonial-webinars", titleSuffix: "Maker in Delhi" },
            //         { id: "live-events-stream", title: "Live Streaming Events", slug: "live-events-stream", titleSuffix: "Maker in Delhi" },
            //         { id: "virtual-demos", title: "Virtual Product Demos and Tutorials", slug: "virtual-demos", titleSuffix: "Maker in Delhi" },
            //         { id: "crisis-webinars", title: "Crisis Management and Response Webinars", slug: "crisis-webinars", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "conference-seminar-Video",
            //     title: "Conference and Seminar Video",
            //     slug: "conference-seminar-Video",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "keynote", title: "Keynote Speeches", slug: "keynote", titleSuffix: "Maker in Delhi" },
            //         { id: "panel-discussion", title: "Panel Discussions", slug: "panel-discussion", titleSuffix: "Maker in Delhi" },
            //         { id: "breakout-session", title: "Breakout Session Video", slug: "breakout-session", titleSuffix: "Maker in Delhi" },
            //         { id: "workshops", title: "Workshops and Training Sessions", slug: "workshops", titleSuffix: "Maker in Delhi" },
            //         { id: "product-demo-conf", title: "Product or Service Demonstrations", slug: "product-demo-conf", titleSuffix: "Maker in Delhi" },
            //         { id: "fireside-chat", title: "Fireside Chats", slug: "fireside-chat", titleSuffix: "Maker in Delhi" },
            //         { id: "networking", title: "Networking Event Video", slug: "networking", titleSuffix: "Maker in Delhi" },
            //         { id: "launch-event-conf", title: "Product Launch Events", slug: "launch-event-conf", titleSuffix: "Maker in Delhi" },
            //         { id: "closing-remarks", title: "Closing Remarks and Summary Video", slug: "closing-remarks", titleSuffix: "Maker in Delhi" },
            //         { id: "qa-session", title: "Audience Interaction and Q&A Sessions", slug: "qa-session", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "sizzle-reel-Video",
            //     title: "Sizzle/Reel Video",
            //     slug: "sizzle-reel-Video",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "brand-sizzle", title: "Brand Sizzle Reel", slug: "brand-sizzle", titleSuffix: "Maker in Delhi" },
            //         { id: "product-sizzle", title: "Product/Service Sizzle Reel", slug: "product-sizzle", titleSuffix: "Maker in Delhi" },
            //         { id: "event-sizzle", title: "Event Sizzle Reel", slug: "event-sizzle", titleSuffix: "Maker in Delhi" },
            //         { id: "achievement-sizzle", title: "Company Achievement/Success Sizzle Reel", slug: "achievement-sizzle", titleSuffix: "Maker in Delhi" },
            //         { id: "testimonial-sizzle", title: "Testimonial Sizzle Reel", slug: "testimonial-sizzle", titleSuffix: "Maker in Delhi" },
            //         { id: "culture-sizzle", title: "Corporate Culture Sizzle Reel", slug: "culture-sizzle", titleSuffix: "Maker in Delhi" },
            //         { id: "fundraising-sizzle", title: "Fundraising/Philanthropy Sizzle Reel", slug: "fundraising-sizzle", titleSuffix: "Maker in Delhi" },
            //         { id: "recruitment-sizzle", title: "Recruitment Sizzle Reel", slug: "recruitment-sizzle", titleSuffix: "Maker in Delhi" },
            //         { id: "pitch-sizzle", title: "Pitch Sizzle Reel", slug: "pitch-sizzle", titleSuffix: "Maker in Delhi" },
            //         { id: "partnership-sizzle", title: "Partnership/Collaboration Sizzle Reel", slug: "partnership-sizzle", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "investor-stakeholder-Video",
            //     title: "Investor and Stakeholder Video",
            //     slug: "investor-stakeholder-Video",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "annual-report", title: "Annual Report Video", slug: "annual-report", titleSuffix: "Maker in Delhi" },
            //         { id: "earnings-call", title: "Earnings Call/Financial Update Video", slug: "earnings-call", titleSuffix: "Maker in Delhi" },
            //         { id: "ceo-message-investor", title: "CEO/Leadership Message Video", slug: "ceo-message-investor", titleSuffix: "Maker in Delhi" },
            //         { id: "ir-briefing", title: "Investor Relations Briefing Video", slug: "ir-briefing", titleSuffix: "Maker in Delhi" },
            //         { id: "shareholder-meeting", title: "Shareholder Meeting Video", slug: "shareholder-meeting", titleSuffix: "Maker in Delhi" },
            //         { id: "investment-pitch", title: "Investment Pitch Video", slug: "investment-pitch", titleSuffix: "Maker in Delhi" },
            //         { id: "ma-announcement", title: "M&A Announcement Video", slug: "ma-announcement", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-investor", title: "CSR Video for Investors", slug: "csr-investor", titleSuffix: "Maker in Delhi" },
            //         { id: "market-update", title: "Market or Strategic Update Video", slug: "market-update", titleSuffix: "Maker in Delhi" },
            //         { id: "esg-reporting", title: "ESG Reporting Video", slug: "esg-reporting", titleSuffix: "Maker in Delhi" }
            //     ]
            // },
            // {
            //     id: "corporate-ads",
            //     title: "Corporate Ads",
            //     slug: "corporate-ads",
            //     titleSuffix: "Maker in Delhi",
            //     children: [
            //         { id: "brand-awareness-ads", title: "Brand Awareness Corporate Ads", slug: "brand-awareness-ads", titleSuffix: "Maker in Delhi" },
            //         { id: "product-commercials", title: "Product or Service Commercials", slug: "product-commercials", titleSuffix: "Maker in Delhi" },
            //         { id: "sponsorship-ads", title: "Corporate Sponsorship Ads", slug: "sponsorship-ads", titleSuffix: "Maker in Delhi" },
            //         { id: "csr-ads", title: "CSR Ads", slug: "csr-ads", titleSuffix: "Maker in Delhi" },
            //         { id: "event-ads", title: "Event-Specific Corporate Ads", slug: "event-ads", titleSuffix: "Maker in Delhi" },
            //         { id: "thank-you-ads", title: "Thank You Ads", slug: "thank-you-ads", titleSuffix: "Maker in Delhi" },
            //         { id: "testimonial-ads", title: "Testimonial Ads", slug: "testimonial-ads", titleSuffix: "Maker in Delhi" }
            //     ]
            // }
        ]
    },
    // Manpower
    {
        id: "manpower",
        title: "Manpower",
        slug: "manpower",
        titleSuffix: "Management Company in Delhi",
        icon: FaUsers,
        children: [
            {
                id: "event-planner",
                title: "Event Planner andCoordinator",
                slug: "evt-plnr",
                titleSuffix: "Management Company in Delhi",
                children: [
                    { id: "wedding-planner", title: "Wedding Planner and Coordinator", slug: "wedd-plnr", titleSuffix: "Management Company in Delhi" },
                    { id: "corporate-planner", title: "Corporate Event Planner", slug: "corp-plnr", titleSuffix: "Management Company in Delhi" },
                    { id: "conference-planner", title: "Conference and Seminar Planner", slug: "conf-plnr", titleSuffix: "Management Company in Delhi" },
                    { id: "nonprofit-planner", title: "Nonprofit Event Planner", slug: "non-prft-plnr", titleSuffix: "Management Company in Delhi" },
                    { id: "social-planner", title: "Social Event Planner", slug: "social-plnr", titleSuffix: "Management Company in Delhi" },
                    { id: "trade-show-planner", title: "Trade Show and Exhibition Planner", slug: "trd-show-plnr", titleSuffix: "Management Company in Delhi" },
                    { id: "destination-planner", title: "Destination Event Planner", slug: "dstn-plnr", titleSuffix: "Management Company in Delhi" },
                    { id: "inhouse-planner", title: "In-House Event Planner", slug: "inhe-plnr", titleSuffix: "Management Company in Delhi" },
                    { id: "festival-organizer", title: "Festival/Event Organizer", slug: "fstl-orgr", titleSuffix: "Management Company in Delhi" },
                    { id: "event-designer", title: "Event Designer/Stylist", slug: "evt-dsnr", titleSuffix: "Management Company in Delhi" },
                    { id: "virtual-planner", title: "Virtual Event Planner", slug: "vrtl-plnr", titleSuffix: "Management Company in Delhi" },
                    { id: "event-marketing-manager", title: "Event Marketing Manager", slug: "evt-mktg-mgr", titleSuffix: "Management Company in Delhi" },
                    { id: "production-manager", title: "Event Production Manager", slug: "prod-mgr", titleSuffix: "Management Company in Delhi" },
                    { id: "luxury-planner", title: "Luxury/Event Concierge Planner", slug: "lxry-plnr", titleSuffix: "Management Company in Delhi" },
                    { id: "sports-planner", title: "Sports Event Planner", slug: "sprt-plnr", titleSuffix: "Management Company in Delhi" }
                ]
            },
            // {
            //     id: "project-manager",
            //     title: "Project Manager",
            //     slug: "project-manager",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "general-pm", title: "General Event Project Manager", slug: "general-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "corporate-pm", title: "Corporate Event Project Manager", slug: "corporate-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "conference-pm", title: "Conference and Convention Project Manager", slug: "conference-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "festival-pm", title: "Festival/Event Production Project Manager", slug: "festival-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "wedding-pm", title: "Wedding Project Manager", slug: "wedding-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "nonprofit-pm", title: "Nonprofit Event Project Manager", slug: "nonprofit-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "exhibition-pm", title: "Exhibition/Trade Show Project Manager", slug: "exhibition-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "sports-pm", title: "Sports Event Project Manager", slug: "sports-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "virtual-pm", title: "Virtual Event Project Manager", slug: "virtual-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "inhouse-pm", title: "In-House Event Project Manager", slug: "inhouse-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "sponsorship-pm", title: "Sponsorship and Partnership Event Project Manager", slug: "sponsorship-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "product-launch-pm", title: "Product Launch Event Project Manager", slug: "product-launch-pm", titleSuffix: "Management Company in Delhi" },
            //         { id: "luxury-pm", title: "Luxury or High-End Event Project Manager", slug: "luxury-pm", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "venue-manager",
            //     title: "Venue Manager",
            //     slug: "venue-manager",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "general-venue", title: "General Venue Manager", slug: "general-venue", titleSuffix: "Management Company in Delhi" },
            //         { id: "event-venue", title: "Event-Specific Venue Manager", slug: "event-venue", titleSuffix: "Management Company in Delhi" },
            //         { id: "wedding-venue", title: "Wedding Venue Manager", slug: "wedding-venue", titleSuffix: "Management Company in Delhi" },
            //         { id: "conference-venue", title: "Conference and Convention Center Venue Manager", slug: "conference-venue", titleSuffix: "Management Company in Delhi" },
            //         { id: "sports-venue", title: "Sports Venue Manager", slug: "sports-venue", titleSuffix: "Management Company in Delhi" },
            //         { id: "theater-venue", title: "Theater Venue Manager", slug: "theater-venue", titleSuffix: "Management Company in Delhi" },
            //         { id: "outdoor-venue", title: "Outdoor Event Venue Manager", slug: "outdoor-venue", titleSuffix: "Management Company in Delhi" },
            //         { id: "hotel-venue", title: "Hotel/Resort Venue Manager", slug: "hotel-venue", titleSuffix: "Management Company in Delhi" },
            //         { id: "exhibition-venue", title: "Exhibition/Trade Show Venue Manager", slug: "exhibition-venue", titleSuffix: "Management Company in Delhi" },
            //         { id: "festival-venue", title: "Music Festival Venue Manager", slug: "festival-venue", titleSuffix: "Management Company in Delhi" },
            //         { id: "community-venue", title: "Cultural or Community Event Venue Manager", slug: "community-venue", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "marketing-pr-team",
            //     title: "Marketing and Public Relations (PR) Team",
            //     slug: "marketing-pr-team",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "event-marketing-team", title: "Event Marketing Team", slug: "event-marketing-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "pr-team", title: "Public Relations (PR) Team", slug: "pr-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "social-media-team", title: "Social Media Marketing Team", slug: "social-media-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "influencer-team", title: "Influencer Marketing Team", slug: "influencer-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "content-team", title: "Content Marketing Team", slug: "content-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "community-team", title: "Community Engagement Team", slug: "community-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "sponsorship-marketing", title: "Sponsorship and Partnership Marketing Team", slug: "sponsorship-marketing", titleSuffix: "Management Company in Delhi" },
            //         { id: "advertising-team", title: "Advertising Team", slug: "advertising-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "ambassador-team", title: "Event Ambassador Team", slug: "ambassador-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "crisis-team", title: "Crisis Communication Team", slug: "crisis-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "photo-video-team", title: "Event Photography/Video Team", slug: "photo-video-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "email-marketing", title: "Email Marketing Team", slug: "email-marketing", titleSuffix: "Management Company in Delhi" },
            //         { id: "digital-marketing", title: "Digital Marketing Team", slug: "digital-marketing", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "operations-team",
            //     title: "Operations Team",
            //     slug: "operations-team",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "logistics", title: "Logistics Team", slug: "logistics", titleSuffix: "Management Company in Delhi" },
            //         { id: "venue-setup-layout", title: "Venue Setup and Layout Team", slug: "venue-setup-layout", titleSuffix: "Management Company in Delhi" },
            //         { id: "registration", title: "Registration and Check-in Team", slug: "registration", titleSuffix: "Management Company in Delhi" },
            //         { id: "security", title: "Security and Safety Team", slug: "security", titleSuffix: "Management Company in Delhi" },
            //         { id: "technical-support", title: "Technical Support Team", slug: "technical-support", titleSuffix: "Management Company in Delhi" },
            //         { id: "catering", title: "Catering and Food Services Team", slug: "catering", titleSuffix: "Management Company in Delhi" },
            //         { id: "troubleshooting", title: "On-site Troubleshooting Team", slug: "troubleshooting", titleSuffix: "Management Company in Delhi" },
            //         { id: "guest-services", title: "Guest Services Team", slug: "guest-services", titleSuffix: "Management Company in Delhi" },
            //         { id: "operations-manager", title: "Event Operations Manager", slug: "operations-manager", titleSuffix: "Management Company in Delhi" },
            //         { id: "transport-parking", title: "Transportation and Parking Management Team", slug: "transport-parking", titleSuffix: "Management Company in Delhi" },
            //         { id: "cleaning", title: "Cleaning and Maintenance Team", slug: "cleaning", titleSuffix: "Management Company in Delhi" },
            //         { id: "vendor-management", title: "Vendor Management Team", slug: "vendor-management", titleSuffix: "Management Company in Delhi" },
            //         { id: "staffing", title: "Staffing and Volunteer Coordination Team", slug: "staffing", titleSuffix: "Management Company in Delhi" },
            //         { id: "post-event", title: "Post-Event Evaluation Team", slug: "post-event", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "event-technicians",
            //     title: "Event Technicians (Audio-Visual Technicians)",
            //     slug: "event-technicians",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "audio-tech", title: "Audio Technicians (Sound Engineers)", slug: "audio-tech", titleSuffix: "Management Company in Delhi" },
            //         { id: "lighting-tech", title: "Lighting Technicians", slug: "lighting-tech", titleSuffix: "Management Company in Delhi" },
            //         { id: "video-tech", title: "Video Technicians (AV Technicians)", slug: "video-tech", titleSuffix: "Management Company in Delhi" },
            //         { id: "projection-tech", title: "Projection Technicians", slug: "projection-tech", titleSuffix: "Management Company in Delhi" },
            //         { id: "sound-light-designer", title: "Sound & Lighting Designers", slug: "sound-light-designer", titleSuffix: "Management Company in Delhi" },
            //         { id: "stage-tech", title: "Stage Technicians (Stage Hands)", slug: "stage-tech", titleSuffix: "Management Company in Delhi" },
            //         { id: "broadcast-tech", title: "Broadcast Technicians", slug: "broadcast-tech", titleSuffix: "Management Company in Delhi" },
            //         { id: "board-operator", title: "Lighting and Sound Board Operators", slug: "board-operator", titleSuffix: "Management Company in Delhi" },
            //         { id: "av-specialist", title: "Audio-Visual Technicians (AV Specialists)", slug: "av-specialist", titleSuffix: "Management Company in Delhi" },
            //         { id: "lighting-control", title: "Lighting Control Technicians", slug: "lighting-control", titleSuffix: "Management Company in Delhi" },
            //         { id: "technical-director", title: "Technical Directors", slug: "technical-director", titleSuffix: "Management Company in Delhi" },
            //         { id: "it-tech", title: "IT Technicians", slug: "it-tech", titleSuffix: "Management Company in Delhi" },
            //         { id: "camera-operator", title: "Camera Operators", slug: "camera-operator", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "creative-team",
            //     title: "Creative Team (Designers)",
            //     slug: "creative-team",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "event-concept-designer", title: "Event Concept Designer", slug: "event-concept-designer", titleSuffix: "Management Company in Delhi" },
            //         { id: "graphic-designers", title: "Graphic Designers", slug: "graphic-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "set-designers", title: "Set Designers", slug: "set-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "floral-designers", title: "Floral Designers", slug: "floral-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "interior-designers", title: "Interior Designers", slug: "interior-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "lighting-designers", title: "Lighting Designers", slug: "lighting-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "3d-designers", title: "3D Designers and Visualizers", slug: "3d-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "costume-designers", title: "Costume and Wardrobe Designers", slug: "costume-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "branding-designers", title: "Event Branding Designers", slug: "branding-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "digital-experience-designers", title: "Digital Experience Designers", slug: "digital-experience-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "interactive-media-designers", title: "Interactive Media Designers", slug: "interactive-media-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "social-media-designers", title: "Social Media and Digital Content Designers", slug: "social-media-designers", titleSuffix: "Management Company in Delhi" },
            //         { id: "videographers", title: "Event Videographers and Cinematographers", slug: "videographers", titleSuffix: "Management Company in Delhi" },
            //         { id: "exhibition-designers", title: "Exhibition Designers", slug: "exhibition-designers", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "catering-hospitality",
            //     title: "Catering and Hospitality Staff",
            //     slug: "catering-hospitality",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "catering-manager", title: "Catering Manager", slug: "catering-manager", titleSuffix: "Management Company in Delhi" },
            //         { id: "chef", title: "Chef (Head Chef or Executive Chef)", slug: "chef", titleSuffix: "Management Company in Delhi" },
            //         { id: "sous-chef", title: "Sous Chef", slug: "sous-chef", titleSuffix: "Management Company in Delhi" },
            //         { id: "line-cook", title: "Line Cook", slug: "line-cook", titleSuffix: "Management Company in Delhi" },
            //         { id: "waitstaff", title: "Waitstaff (Servers)", slug: "waitstaff", titleSuffix: "Management Company in Delhi" },
            //         { id: "bartenders", title: "Bartenders", slug: "bartenders", titleSuffix: "Management Company in Delhi" },
            //         { id: "host-hostess", title: "Host/Hostess", slug: "host-hostess", titleSuffix: "Management Company in Delhi" },
            //         { id: "food-runner", title: "Food Runner", slug: "food-runner", titleSuffix: "Management Company in Delhi" },
            //         { id: "busser", title: "Busser", slug: "busser", titleSuffix: "Management Company in Delhi" },
            //         { id: "catering-assistants", title: "Catering Assistants", slug: "catering-assistants", titleSuffix: "Management Company in Delhi" },
            //         { id: "kitchen-porters", title: "Kitchen Porters/Dishwashers", slug: "kitchen-porters", titleSuffix: "Management Company in Delhi" },
            //         { id: "event-concierge", title: "Event Concierge", slug: "event-concierge", titleSuffix: "Management Company in Delhi" },
            //         { id: "fnb-supervisors", title: "Food and Beverage Supervisors", slug: "fnb-supervisors", titleSuffix: "Management Company in Delhi" },
            //         { id: "catering-sales", title: "Catering Sales/Client Liaison", slug: "catering-sales", titleSuffix: "Management Company in Delhi" },
            //         { id: "pastry-chef", title: "Pastry Chef/Baker", slug: "pastry-chef", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "security-personnel",
            //     title: "Security Personnel",
            //     slug: "security-personnel",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "security-manager", title: "Event Security Manager", slug: "security-manager", titleSuffix: "Management Company in Delhi" },
            //         { id: "crowd-control", title: "Crowd Control Personnel", slug: "crowd-control", titleSuffix: "Management Company in Delhi" },
            //         { id: "entry-exit-security", title: "Entrance and Exit Security", slug: "entry-exit-security", titleSuffix: "Management Company in Delhi" },
            //         { id: "bouncers", title: "Bouncers (Event Security Guards)", slug: "bouncers", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-security", title: "VIP Security (Bodyguards)", slug: "vip-security", titleSuffix: "Management Company in Delhi" },
            //         { id: "patrol-officers", title: "Patrol Security Officers", slug: "patrol-officers", titleSuffix: "Management Company in Delhi" },
            //         { id: "parking-security", title: "Parking Lot Security", slug: "parking-security", titleSuffix: "Management Company in Delhi" },
            //         { id: "access-control", title: "Access Control Personnel", slug: "access-control", titleSuffix: "Management Company in Delhi" },
            //         { id: "ert", title: "Emergency Response Team (ERT)", slug: "ert", titleSuffix: "Management Company in Delhi" },
            //         { id: "cctv", title: "Surveillance Officers (CCTV Operators)", slug: "cctv", titleSuffix: "Management Company in Delhi" },
            //         { id: "logistics-security", title: "Event Logistics Security", slug: "logistics-security", titleSuffix: "Management Company in Delhi" },
            //         { id: "sniffer-dogs", title: "Sniffer Dogs (K9 Units)", slug: "sniffer-dogs", titleSuffix: "Management Company in Delhi" },
            //         { id: "ticketing-security", title: "Ticketing Security", slug: "ticketing-security", titleSuffix: "Management Company in Delhi" },
            //         { id: "credential-checkers", title: "Guest List and Credential Checkers", slug: "credential-checkers", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "volunteers",
            //     title: "Volunteers",
            //     slug: "volunteers",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "registration-volunteers", title: "Event Registration Volunteers", slug: "registration-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "usher-volunteers", title: "Usher/Guide Volunteers", slug: "usher-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "logistics-volunteers", title: "Logistics Support Volunteers", slug: "logistics-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "info-desk", title: "Information Desk Volunteers", slug: "info-desk", titleSuffix: "Management Company in Delhi" },
            //         { id: "social-media-volunteers", title: "Social Media/Marketing Volunteers", slug: "social-media-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-assistance", title: "VIP/Guest Assistance Volunteers", slug: "vip-assistance", titleSuffix: "Management Company in Delhi" },
            //         { id: "fnb-volunteers", title: "Food and Beverage Service Volunteers", slug: "fnb-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "photo-video-volunteers", title: "Event Photography/Video Volunteers", slug: "photo-video-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "health-safety-volunteers", title: "Health and Safety Volunteers", slug: "health-safety-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "ambassador-volunteers", title: "Event Ambassador Volunteers", slug: "ambassador-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "workshop-volunteers", title: "Workshop/Session Facilitator Volunteers", slug: "workshop-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "parking-volunteers", title: "Parking and Transportation Volunteers", slug: "parking-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "sales-volunteers", title: "Merchandise/Sales Volunteers", slug: "sales-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "green-volunteers", title: "Sustainability or Green Volunteers", slug: "green-volunteers", titleSuffix: "Management Company in Delhi" },
            //         { id: "transport-volunteers", title: "Transportation/Logistics Volunteers", slug: "transport-volunteers", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "guest-services",
            //     title: "Guest Services Team",
            //     slug: "guest-services",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "guest-relations", title: "Guest Relations Manager", slug: "guest-relations", titleSuffix: "Management Company in Delhi" },
            //         { id: "guest-representatives", title: "Guest Service Representatives", slug: "guest-representatives", titleSuffix: "Management Company in Delhi" },
            //         { id: "concierge-team", title: "Concierge Services Team", slug: "concierge-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "ticketing-checkin", title: "Ticketing and Check-in Staff", slug: "ticketing-checkin", titleSuffix: "Management Company in Delhi" },
            //         { id: "customer-service", title: "Customer Service Team", slug: "customer-service", titleSuffix: "Management Company in Delhi" },
            //         { id: "event-ambassadors", title: "Event Ambassadors", slug: "event-ambassadors", titleSuffix: "Management Company in Delhi" },
            //         { id: "accessibility", title: "Accessibility Services Team", slug: "accessibility", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-services", title: "VIP Services Team", slug: "vip-services", titleSuffix: "Management Company in Delhi" },
            //         { id: "lost-found", title: "Lost and Found Team", slug: "lost-found", titleSuffix: "Management Company in Delhi" },
            //         { id: "fnb-support", title: "Food and Beverage Service Support Team", slug: "fnb-support", titleSuffix: "Management Company in Delhi" },
            //         { id: "feedback-team", title: "Guest Survey/Feedback Team", slug: "feedback-team", titleSuffix: "Management Company in Delhi" },
            //         { id: "cloakroom", title: "Cloakroom/Bag Check Volunteers", slug: "cloakroom", titleSuffix: "Management Company in Delhi" },
            //         { id: "parking-assistants", title: "Transportation and Parking Assistants", slug: "parking-assistants", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "entertainment-performers",
            //     title: "Entertainment and Performers",
            //     slug: "entertainment-performers",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "live-bands", title: "Live Bands and Musicians", slug: "live-bands", titleSuffix: "Management Company in Delhi" },
            //         { id: "djs", title: "DJs (Disc Jockeys)", slug: "djs", titleSuffix: "Management Company in Delhi" },
            //         { id: "comedians", title: "Comedians", slug: "comedians", titleSuffix: "Management Company in Delhi" },
            //         { id: "dancers", title: "Dancers", slug: "dancers", titleSuffix: "Management Company in Delhi" },
            //         { id: "magicians", title: "Magicians and Illusionists", slug: "magicians", titleSuffix: "Management Company in Delhi" },
            //         { id: "circus-performers", title: "Circus Performers and Acrobats", slug: "circus-performers", titleSuffix: "Management Company in Delhi" },
            //         { id: "theatrical", title: "Theatrical Performers and Actors", slug: "theatrical", titleSuffix: "Management Company in Delhi" },
            //         { id: "impersonators", title: "Impersonators and Look-alikes", slug: "impersonators", titleSuffix: "Management Company in Delhi" },
            //         { id: "fire-performers", title: "Fire Performers", slug: "fire-performers", titleSuffix: "Management Company in Delhi" },
            //         { id: "live-artists", title: "Live Painters or Artists", slug: "live-artists", titleSuffix: "Management Company in Delhi" },
            //         { id: "hosts", title: "Hosts and Emcees", slug: "hosts", titleSuffix: "Management Company in Delhi" },
            //         { id: "interactive-performers", title: "Interactive Performers (Living Statues, Human Robots)", slug: "interactive-performers", titleSuffix: "Management Company in Delhi" },
            //         { id: "caricature-artists", title: "Caricature Artists", slug: "caricature-artists", titleSuffix: "Management Company in Delhi" },
            //         { id: "cultural-performers", title: "Cultural Performers", slug: "cultural-performers", titleSuffix: "Management Company in Delhi" },
            //         { id: "aerialists", title: "Aerialists and Stilt Walkers", slug: "aerialists", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "transportation-logistics-staff",
            //     title: "Transportation and Logistics Staff",
            //     slug: "transportation-logistics-staff",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "event-transport-manager", title: "Event Transport Manager", slug: "event-transport-manager", titleSuffix: "Management Company in Delhi" },
            //         { id: "shuttle-drivers", title: "Shuttle Drivers", slug: "shuttle-drivers", titleSuffix: "Management Company in Delhi" },
            //         { id: "guest-transport-assistants", title: "Guest Transport Assistants", slug: "guest-transport-assistants", titleSuffix: "Management Company in Delhi" },
            //         { id: "logistics-coordinators", title: "Logistics Coordinators", slug: "logistics-coordinators", titleSuffix: "Management Company in Delhi" },
            //         { id: "truck-drivers", title: "Truck Drivers and Transport Operators", slug: "truck-drivers", titleSuffix: "Management Company in Delhi" },
            //         { id: "parking-attendants", title: "Parking Attendants", slug: "parking-attendants", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-transport-coordinators", title: "VIP Transport Coordinators", slug: "vip-transport-coordinators", titleSuffix: "Management Company in Delhi" },
            //         { id: "baggage-handlers", title: "Baggage Handlers", slug: "baggage-handlers", titleSuffix: "Management Company in Delhi" },
            //         { id: "traffic-control", title: "Security and Traffic Control Staff", slug: "traffic-control", titleSuffix: "Management Company in Delhi" },
            //         { id: "loading-crew", title: "Loading and Unloading Crew", slug: "loading-crew", titleSuffix: "Management Company in Delhi" },
            //         { id: "escort-drivers", title: "Escort Drivers", slug: "escort-drivers", titleSuffix: "Management Company in Delhi" },
            //         { id: "onsite-transport", title: "On-Site Transportation Coordinators", slug: "onsite-transport", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "registration-ticketing-staff",
            //     title: "Registration and Ticketing Staff",
            //     slug: "registration-ticketing-staff",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "registration-desk", title: "Registration Desk Staff", slug: "registration-desk", titleSuffix: "Management Company in Delhi" },
            //         { id: "ticket-sales", title: "Ticket Sales Staff", slug: "ticket-sales", titleSuffix: "Management Company in Delhi" },
            //         { id: "box-office", title: "Box Office Staff", slug: "box-office", titleSuffix: "Management Company in Delhi" },
            //         { id: "ticket-scanning", title: "Ticket Scanning and Entry Staff", slug: "ticket-scanning", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-access", title: "VIP and Special Access Coordinators", slug: "vip-access", titleSuffix: "Management Company in Delhi" },
            //         { id: "pre-event-registration", title: "Pre-Event Registration Assistants", slug: "pre-event-registration", titleSuffix: "Management Company in Delhi" },
            //         { id: "credentialing", title: "Event Credentialing Staff", slug: "credentialing", titleSuffix: "Management Company in Delhi" },
            //         { id: "registration-customer-service", title: "Customer Service Representatives (Registration)", slug: "registration-customer-service", titleSuffix: "Management Company in Delhi" },
            //         { id: "group-registration", title: "Group Registration Coordinators", slug: "group-registration", titleSuffix: "Management Company in Delhi" },
            //         { id: "onsite-ticketing", title: "On-Site Ticketing Support Staff", slug: "onsite-ticketing", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "legal-compliance-team",
            //     title: "Legal and Compliance Team",
            //     slug: "legal-compliance-team",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "legal-counsel", title: "Event Legal Counsel", slug: "legal-counsel", titleSuffix: "Management Company in Delhi" },
            //         { id: "compliance-officer", title: "Compliance Officer", slug: "compliance-officer", titleSuffix: "Management Company in Delhi" },
            //         { id: "contract-manager", title: "Contract Manager", slug: "contract-manager", titleSuffix: "Management Company in Delhi" },
            //         { id: "risk-management", title: "Risk Management Specialist", slug: "risk-management", titleSuffix: "Management Company in Delhi" },
            //         { id: "insurance-coordinator", title: "Insurance Coordinator", slug: "insurance-coordinator", titleSuffix: "Management Company in Delhi" },
            //         { id: "data-protection", title: "Privacy and Data Protection Officer", slug: "data-protection", titleSuffix: "Management Company in Delhi" },
            //         { id: "licensing", title: "Licensing and Permitting Coordinator", slug: "licensing", titleSuffix: "Management Company in Delhi" },
            //         { id: "trademark", title: "Trademark and Copyright Specialist", slug: "trademark", titleSuffix: "Management Company in Delhi" },
            //         { id: "security-compliance", title: "Security and Crowd Control Compliance Officer", slug: "security-compliance", titleSuffix: "Management Company in Delhi" },
            //         { id: "compliance-auditor", title: "Legal Compliance Auditor", slug: "compliance-auditor", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "stagehands-setup-crew",
            //     title: "Stagehands/Set-Up Crew",
            //     slug: "stagehands-setup-crew",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         { id: "general-stagehands", title: "General Stagehands", slug: "general-stagehands", titleSuffix: "Management Company in Delhi" },
            //         { id: "lighting-crew", title: "Lighting Crew", slug: "lighting-crew", titleSuffix: "Management Company in Delhi" },
            //         { id: "audio-tech", title: "Audio Technicians", slug: "audio-tech", titleSuffix: "Management Company in Delhi" },
            //         { id: "rigging-crew", title: "Rigging Crew", slug: "rigging-crew", titleSuffix: "Management Company in Delhi" },
            //         { id: "set-construction", title: "Set Design and Construction Crew", slug: "set-construction", titleSuffix: "Management Company in Delhi" },
            //         { id: "props-crew", title: "Props Crew", slug: "props-crew", titleSuffix: "Management Company in Delhi" },
            //         { id: "projection-video", title: "Projection and Video Crew", slug: "projection-video", titleSuffix: "Management Company in Delhi" },
            //         { id: "special-effects", title: "Stagehands for Special Effects", slug: "special-effects", titleSuffix: "Management Company in Delhi" },
            //         { id: "backstage-crew", title: "Backstage Crew", slug: "backstage-crew", titleSuffix: "Management Company in Delhi" },
            //         { id: "power-electrical", title: "Power and Electrical Crew", slug: "power-electrical", titleSuffix: "Management Company in Delhi" },
            //         { id: "stage-manager-assistants", title: "Stage Manager Assistants", slug: "stage-manager-assistants", titleSuffix: "Management Company in Delhi" },
            //         { id: "floor-managers", title: "Crowd Control and Floor Managers", slug: "floor-managers", titleSuffix: "Management Company in Delhi" }
            //     ]
            // }
        ]
    }
];