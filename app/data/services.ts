export interface ServiceNode {
    id: string;
    title: string;
    slug: string;
    // description?: string;
    // content?: string;
    // image?: string;

    children?: ServiceNode[]; // 👈 recursive (unlimited depth)
}

export const services: ServiceNode[] = [
    // Corporate Event
    {
        id: "1",
        title: "Corporate Event",
        slug: "corporate-event",
        children: [
            {
                id: "1",
                title: "Conferences",
                slug: "conferences",
                children: [
                    {
                        id: "1",
                        title: "Industry Conference",
                        slug: "industry-conference",
                    },
                    {
                        id: "2",
                        title: "Corporate Conferences",
                        slug: "corporate-conferences",
                    },
                    {
                        id: "3",
                        title: "Annual Conferences",
                        slug: "annual-conferences",
                    },
                    {
                        id: "4",
                        title: "Seminars & Forums",
                        slug: "seminars-forums",
                    },
                ],
            },
            {
                id: "2",
                title: "Seminars & Workshops",
                slug: "seminars-workshops",
                children: [
                    {
                        id: "1",
                        title: "Corporate Training Seminars",
                        slug: "corporate-training-seminars",
                    },
                    {
                        id: "2",
                        title: "Professional Development Workshops",
                        slug: "professional-development-workshops",
                    },
                    {
                        id: "3",
                        title: "Creative Workshops",
                        slug: "creative-workshops",
                    },
                    {
                        id: "4",
                        title: "Technical Workshops",
                        slug: "technical-workshops",
                    },
                ]
            },
            {
                id: "3",
                title: "Corporate Meetings",
                slug: "corporate-meetings",
                children: [
                    {
                        id: "1",
                        title: "Annual General Meetings (AGMs)",
                        slug: "annual-general-meetings",
                    },
                    {
                        id: "2",
                        title: "Board Meetings",
                        slug: "board-meetings",
                    },
                    {
                        id: "3",
                        title: "Team Meetings",
                        slug: "team-meetings",
                    },
                    {
                        id: "4",
                        title: "Stakeholder Meetings",
                        slug: "stakeholder-meetings",
                    },
                    {
                        id: "5",
                        title: "Sales Meetings",
                        slug: "sales-meetings",
                    },
                    {
                        id: "6",
                        title: "Client Meetings",
                        slug: "client-meetings",
                    },
                    {
                        id: "7",
                        title: "Project Meetings",
                        slug: "project-meetings",
                    },
                    {
                        id: "8",
                        title: "Staff/Employee Meetings",
                        slug: "staff-employee-meetings",
                    },
                    {
                        id: "9",
                        title: "Strategy Meetings",
                        slug: "strategy-meetings",
                    },
                    {
                        id: "10",
                        title: "Workshops",
                        slug: "workshops",
                    },
                    {
                        id: "11",
                        title: "Training Meetings",
                        slug: "training-meetings",
                    },
                    {
                        id: "12",
                        title: "Project Kickoff Meetings",
                        slug: "project-kickoff-meetings",
                    },
                    {
                        id: "13",
                        title: "Product Launch Meetings",
                        slug: "product-launch-meetings",
                    },
                    {
                        id: "14",
                        title: "Crisis Management Meetings",
                        slug: "crisis-management-meetings",
                    },
                    {
                        id: "15",
                        title: "Investor Meetings",
                        slug: "investor-meetings",
                    },
                    {
                        id: "16",
                        title: "Networking Meetings",
                        slug: "networking-meetings",
                    },
                    {
                        id: "17",
                        title: "Executive Committee Meetings",
                        slug: "executive-committee-meetings",
                    },
                    {
                        id: "18",
                        title: "Focus Groups",
                        slug: "focus-groups",
                    }
                ]
            },
            {
                id: "4",
                title: "Team-Building Events",
                slug: "team-building-events",
                children: [
                    {
                        id: "1",
                        title: "Outdoor Retreats",
                        slug: "outdoor-retreats",
                    },
                    {
                        id: "2",
                        title: "Escape Room Challenges",
                        slug: "escape-room-challenges",
                    },
                    {
                        id: "3",
                        title: "Group Challenges",
                        slug: "group-challenges",
                    },
                    {
                        id: "4",
                        title: "Workshops and Collaborative Tasks",
                        slug: "workshops-collaborative-tasks",
                    },
                ]
            },
            {
                id: "5",
                title: "Product Launches",
                slug: "product-launches",
                children: [
                    {
                        id: "1",
                        title: "Press Conferences",
                        slug: "press-conferences",
                    },
                    {
                        id: "2",
                        title: "Product Demos",
                        slug: "product-demos",
                    },
                    {
                        id: "3",
                        title: "Exclusive Launch Events",
                        slug: "exclusive-launch-events",
                    },
                    {
                        id: "4",
                        title: "Virtual Launch Events",
                        slug: "virtual-launch-events",
                    }
                ]
            },
            {
                id: "6",
                title: "CSR Events",
                slug: "corporate-social-responsibility-events",
                children: [
                    {
                        id: "1",
                        title: "Charity Fundraisers",
                        slug: "charity-fundraisers",
                        children: [
                            {
                                id: "1",
                                title: "Gala Dinners",
                                slug: "gala-dinners",
                            },
                            {
                                id: "2",
                                title: "Charity Walks, Runs, and Marathons",
                                slug: "charity-walks-runs-and-marathons",
                            },
                            {
                                id: "3",
                                title: "Charity Auctions",
                                slug: "charity-auctions",
                            },
                            {
                                id: "4",
                                title: "Benefit Concerts and Performances",
                                slug: "benefit-concerts-and-performances",
                            },
                            {
                                id: "5",
                                title: "Charity Raffles",
                                slug: "charity-raffles",
                            },
                            {
                                id: "6",
                                title: "Volunteer Fundraisers",
                                slug: "volunteer-fundraisers",
                            },
                            {
                                id: "7",
                                title: "Corporate Social Responsibility (CSR) Challenges",
                                slug: "corporate-social-responsibility-csr-challenges",
                            },
                            {
                                id: "8",
                                title: "Charity Dinners or Luncheons",
                                slug: "charity-dinners-or-luncheons",
                            },
                            {
                                id: "9",
                                title: "Online Charity Campaigns",
                                slug: "online-charity-campaigns",
                            },
                            {
                                id: "10",
                                title: "Corporate Sponsorship Fundraisers",
                                slug: "corporate-sponsorship-fundraisers",
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "Volunteering Days",
                        slug: "volunteering-days",
                        children: [
                            {
                                id: "1",
                                title: "Community Service Days",
                                slug: "community-service-days",
                            },
                            {
                                id: "2",
                                title: "Skills-Based Volunteering Days",
                                slug: "skills-based-volunteering-days",
                            },
                            {
                                id: "3",
                                title: "Charity Event Volunteering",
                                slug: "charity-event-volunteering",
                            },
                            {
                                id: "4",
                                title: "Team-Building Volunteering Days",
                                slug: "team-building-volunteering-days",
                            },
                            {
                                id: "5",
                                title: "Environmental Volunteering Days",
                                slug: "environmental-volunteering-days",
                            },
                            {
                                id: "6",
                                title: "Disaster Relief Volunteering Days",
                                slug: "disaster-relief-volunteering-days",
                            },
                            {
                                id: "7",
                                title: "Virtual Volunteering Days",
                                slug: "virtual-volunteering-days",
                            },
                            {
                                id: "8",
                                title: "Employee Volunteer Programs (EVPs)",
                                slug: "employee-volunteer-programs-evps",
                            },
                            {
                                id: "9",
                                title: "Fundraising Volunteering Days",
                                slug: "fundraising-volunteering-days",
                            },
                            {
                                id: "10",
                                title: "Health and Wellness Volunteering Days",
                                slug: "health-and-wellness-volunteering-days",
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "Sustainability Events",
                        slug: "sustainability-events",
                        children: [
                            {
                                id: "1",
                                title: "Eco-Friendly Product Launches",
                                slug: "eco-friendly-product-launches",
                            },
                            {
                                id: "2",
                                title: "Green Conferences and Seminars",
                                slug: "green-conferences-and-seminars",
                            },
                            {
                                id: "3",
                                title: "Eco-Friendly Trade Shows and Expos",
                                slug: "eco-friendly-trade-shows-and-expos",
                            },
                            {
                                id: "4",
                                title: "Sustainable Team-Building Events",
                                slug: "sustainable-team-building-events",
                            },
                            {
                                id: "5",
                                title: "Sustainable Corporate Retreats",
                                slug: "sustainable-corporate-retreats",
                            },
                            {
                                id: "6",
                                title: "Corporate Sustainability Awards",
                                slug: "corporate-sustainability-awards",
                            },
                            {
                                id: "7",
                                title: "Sustainability Workshops and Training",
                                slug: "sustainability-workshops-and-training",
                            },
                            {
                                id: "8",
                                title: "Sustainability Awareness Campaigns",
                                slug: "sustainability-awareness-campaigns",
                            },
                            {
                                id: "9",
                                title: "Sustainability Volunteer Days",
                                slug: "sustainability-volunteer-days",
                            },
                            {
                                id: "10",
                                title: "Sustainability Hackathons",
                                slug: "sustainability-hackathons",
                            },
                            {
                                id: "11",
                                title: "Sustainable Fashion Events",
                                slug: "sustainable-fashion-events",
                            },
                            {
                                id: "12",
                                title: "Sustainability Festivals",
                                slug: "sustainability-festivals",
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "Community Service Projects",
                        slug: "community-service-projects",
                        children: [
                            {
                                id: "1",
                                title: "Environmental Conservation Projects",
                                slug: "environmental-conservation-projects",
                            },
                            {
                                id: "2",
                                title: "Community Development Projects",
                                slug: "community-development-projects",
                            },
                            {
                                id: "3",
                                title: "Educational Support Projects",
                                slug: "educational-support-projects",
                            },
                            {
                                id: "4",
                                title: "Health and Wellness Projects",
                                slug: "health-and-wellness-projects",
                            },
                            {
                                id: "5",
                                title: "Food and Hunger Relief Projects",
                                slug: "food-and-hunger-relief-projects",
                            },
                            {
                                id: "6",
                                title: "Youth Empowerment Projects",
                                slug: "youth-empowerment-projects",
                            },
                            {
                                id: "7",
                                title: "Elderly and Senior Support Projects",
                                slug: "elderly-and-senior-support-projects",
                            },
                            {
                                id: "8",
                                title: "Disaster Relief and Emergency Response Projects",
                                slug: "disaster-relief-and-emergency-response-projects",
                            },
                            {
                                id: "9",
                                title: "Cultural and Arts Projects",
                                slug: "cultural-and-arts-projects",
                            },
                            {
                                id: "10",
                                title: "Disability Support Projects",
                                slug: "disability-support-projects",
                            },
                            {
                                id: "11",
                                title: "Animal Welfare Projects",
                                slug: "animal-welfare-projects",
                            }
                        ]
                    },
                ]
            },
            {
                id: "7",
                title: "Trade Shows Exhibitions",
                slug: "trade-shows-exhibitions",
                children: [
                    {
                        id: "1",
                        title: "Industry Expos",
                        slug: "industry-expos",
                        children: [
                            {
                                id: "1",
                                title: "Technology Expos",
                                slug: "technology-expos",
                            },
                            {
                                id: "2",
                                title: "Healthcare Expos",
                                slug: "healthcare-expos",
                            },
                            {
                                id: "3",
                                title: "Fashion Expos",
                                slug: "fashion-expos",
                            },
                            {
                                id: "4",
                                title: "Automotive Expos",
                                slug: "automotive-expos",
                            },
                            {
                                id: "5",
                                title: "Food and Beverage Expos",
                                slug: "food-and-beverage-expos",
                            },
                            {
                                id: "6",
                                title: "Construction and Real Estate Expos",
                                slug: "construction-and-real-estate-expos",
                            },
                            {
                                id: "7",
                                title: "Entertainment and Media Expos",
                                slug: "entertainment-and-media-expos",
                            },
                            {
                                id: "8",
                                title: "Renewable Energy and Sustainability Expos",
                                slug: "renewable-energy-and-sustainability-expos",
                            },
                            {
                                id: "9",
                                title: "Retail and E-Commerce Expos",
                                slug: "retail-and-e-commerce-expos",
                            },
                            {
                                id: "10",
                                title: "Hospitality and Tourism Expos",
                                slug: "hospitality-and-tourism-expos",
                            },
                            {
                                id: "11",
                                title: "Financial Services Expos",
                                slug: "financial-services-expos",
                            },
                            {
                                id: "12",
                                title: "Beauty and Cosmetics Expos",
                                slug: "beauty-and-cosmetics-expos",
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "Product Exhibitions",
                        slug: "product-exhibitions",
                        children: [
                            {
                                id: "1",
                                title: "Consumer Goods Exhibitions",
                                slug: "consumer-goods-exhibitions",
                            },
                            {
                                id: "2",
                                title: "Industrial Product Exhibitions",
                                slug: "industrial-product-exhibitions",
                            },
                            {
                                id: "3",
                                title: "Technology Product Exhibitions",
                                slug: "technology-product-exhibitions",
                            },
                            {
                                id: "4",
                                title: "Automotive Product Exhibitions",
                                slug: "automotive-product-exhibitions",
                            },
                            {
                                id: "5",
                                title: "Food and Beverage Product Exhibitions",
                                slug: "food-and-beverage-product-exhibitions",
                            },
                            {
                                id: "6",
                                title: "Healthcare and Medical Product Exhibitions",
                                slug: "healthcare-and-medical-product-exhibitions",
                            },
                            {
                                id: "7",
                                title: "Construction and Building Product Exhibitions",
                                slug: "construction-and-building-product-exhibitions",
                            },
                            {
                                id: "8",
                                title: "Fashion and Textile Product Exhibitions",
                                slug: "fashion-and-textile-product-exhibitions",
                            },
                            {
                                id: "9",
                                title: "Beauty and Personal Care Product Exhibitions",
                                slug: "beauty-and-personal-care-product-exhibitions",
                            },
                            {
                                id: "10",
                                title: "Sustainable Product Exhibitions",
                                slug: "sustainable-product-exhibitions",
                            },
                            {
                                id: "11",
                                title: "Sports and Fitness Product Exhibitions",
                                slug: "sports-and-fitness-product-exhibitions",
                            },
                            {
                                id: "12",
                                title: "Packaging Product Exhibitions",
                                slug: "packaging-product-exhibitions",
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "B2B Trade Shows",
                        slug: "b2b-trade-shows",
                        children: [
                            {
                                id: "1",
                                title: "Industry-Specific B2B Trade Shows",
                                slug: "industry-specific-b2b-trade-shows",
                                children: [
                                    {
                                        id: "1",
                                        title: "Technology Trade Shows",
                                        slug: "technology-trade-shows",
                                    },
                                    {
                                        id: "2",
                                        title: "Healthcare Trade Shows",
                                        slug: "healthcare-trade-shows",
                                    },
                                    {
                                        id: "3",
                                        title: "Automotive Trade Shows",
                                        slug: "automotive-trade-shows",
                                    },
                                    {
                                        id: "4",
                                        title: "Construction and Real Estate Trade Shows",
                                        slug: "construction-real-estate-trade-shows",
                                    },
                                    {
                                        id: "5",
                                        title: "Fashion and Apparel Trade Shows",
                                        slug: "fashion-apparel-trade-shows",
                                    },
                                    {
                                        id: "6",
                                        title: "Food and Beverage Trade Shows",
                                        slug: "food-beverage-trade-shows",
                                    }
                                ]
                            },
                            {
                                id: "2",
                                title: "Technology and Innovation B2B Trade Shows",
                                slug: "technology-innovation-b2b-trade-shows",
                                children: [
                                    {
                                        id: "1",
                                        title: "Tech Startup Expos",
                                        slug: "tech-startup-expos",
                                    },
                                    {
                                        id: "2",
                                        title: "Software and App Development Expos",
                                        slug: "software-app-development-expos",
                                    },
                                    {
                                        id: "3",
                                        title: "IoT (Internet of Things) Expos",
                                        slug: "iot-internet-of-things-expos",
                                    },
                                    {
                                        id: "4",
                                        title: "Artificial Intelligence and Machine Learning Expos",
                                        slug: "artificial-intelligence-machine-learning-expos",
                                    },
                                    {
                                        id: "5",
                                        title: "Cybersecurity Expos",
                                        slug: "cybersecurity-expos",
                                    }
                                ]
                            },
                            {
                                id: "3",
                                title: "Manufacturing and Industrial B2B Trade Shows",
                                slug: "manufacturing-industrial-b2b-trade-shows",
                                children: [
                                    {
                                        id: "1",
                                        title: "Automotive Manufacturing Expos",
                                        slug: "automotive-manufacturing-expos",
                                    },
                                    {
                                        id: "2",
                                        title: "Machinery and Equipment Expos",
                                        slug: "machinery-equipment-expos",
                                    },
                                    {
                                        id: "3",
                                        title: "Packaging and Logistics Expos",
                                        slug: "packaging-logistics-expos",
                                    },
                                    {
                                        id: "4",
                                        title: "Chemical and Material Trade Shows",
                                        slug: "chemical-material-trade-shows",
                                    },
                                    {
                                        id: "5",
                                        title: "Energy and Power Generation Expos",
                                        slug: "energy-power-generation-expos",
                                    }
                                ]
                            },
                            {
                                id: "4",
                                title: "Consumer Goods B2B Trade Shows",
                                slug: "consumer-goods-b2b-trade-shows",
                                children: [
                                    {
                                        id: "1",
                                        title: "Fashion and Apparel Expos",
                                        slug: "fashion-apparel-expos",
                                    },
                                    {
                                        id: "2",
                                        title: "Home and Lifestyle Goods Expos",
                                        slug: "home-lifestyle-goods-expos",
                                    },
                                    {
                                        id: "3",
                                        title: "Health and Beauty Expos",
                                        slug: "health-beauty-expos",
                                    },
                                    {
                                        id: "4",
                                        title: "Sports Equipment and Outdoor Goods",
                                        slug: "sports-equipment-outdoor-goods",
                                    },
                                    {
                                        id: "5",
                                        title: "Toys and Games Expos",
                                        slug: "toys-games-expos",
                                    }
                                ]
                            },
                            {
                                id: "5",
                                title: "Service-Oriented B2B Trade Shows",
                                slug: "service-oriented-b2b-trade-shows",
                                children: [
                                    {
                                        id: "1",
                                        title: "Financial Services Expos",
                                        slug: "financial-services-expos",
                                    },
                                    {
                                        id: "2",
                                        title: "Marketing and Advertising Expos",
                                        slug: "marketing-advertising-expos",
                                    },
                                    {
                                        id: "3",
                                        title: "HR and Recruitment Expos",
                                        slug: "hr-recruitment-expos",
                                    },
                                    {
                                        id: "4",
                                        title: "Consulting and Business Solutions Expos",
                                        slug: "consulting-business-solutions-expos",
                                    },
                                    {
                                        id: "5",
                                        title: "Legal Services Expos",
                                        slug: "legal-services-expos",
                                    }
                                ]
                            },
                            {
                                id: "6",
                                title: "Trade and Wholesale B2B Trade Shows",
                                slug: "trade-wholesale-b2b-trade-shows",
                                children: [
                                    {
                                        id: "1",
                                        title: "Wholesale Distribution Expos",
                                        slug: "wholesale-distribution-expos",
                                    },
                                    {
                                        id: "2",
                                        title: "Import and Export Expos",
                                        slug: "import-export-expos",
                                    },
                                    {
                                        id: "3",
                                        title: "Retail Supply Chain Expos",
                                        slug: "retail-supply-chain-expos",
                                    },
                                    {
                                        id: "4",
                                        title: "Trade Supply Expos",
                                        slug: "trade-supply-expos",
                                    },
                                    {
                                        id: "5",
                                        title: "E-commerce and Online Retail Expos",
                                        slug: "ecommerce-online-retail-expos",
                                    }
                                ]
                            },
                            {
                                id: "7",
                                title: "Sustainability and Green B2B Trade Shows",
                                slug: "sustainability-green-b2b-trade-shows",
                                children: [
                                    {
                                        id: "1",
                                        title: "Renewable Energy Expos",
                                        slug: "renewable-energy-expos",
                                    },
                                    {
                                        id: "2",
                                        title: "Green Technology Expos",
                                        slug: "green-technology-expos",
                                    },
                                    {
                                        id: "3",
                                        title: "Sustainable Packaging Expos",
                                        slug: "sustainable-packaging-expos",
                                    },
                                    {
                                        id: "4",
                                        title: "Eco-friendly Product Expos",
                                        slug: "eco-friendly-product-expos",
                                    },
                                    {
                                        id: "5",
                                        title: "Waste Management and Recycling Expos",
                                        slug: "waste-management-recycling-expos",
                                    }
                                ]
                            },
                            {
                                id: "8",
                                title: "Educational B2B Trade Shows",
                                slug: "educational-b2b-trade-shows",
                                children: [
                                    {
                                        id: "1",
                                        title: "EdTech Expos",
                                        slug: "edtech-expos",
                                    },
                                    {
                                        id: "2",
                                        title: "Corporate Training and Development Expos",
                                        slug: "corporate-training-development-expos",
                                    },
                                    {
                                        id: "3",
                                        title: "Textbooks and Learning Resources Expos",
                                        slug: "textbooks-learning-resources-expos",
                                    },
                                    {
                                        id: "4",
                                        title: "Learning Management Systems (LMS) Expos",
                                        slug: "learning-management-systems-lms-expos",
                                    },
                                    {
                                        id: "5",
                                        title: "Language Learning and Training Expos",
                                        slug: "language-learning-training-expos",
                                    }
                                ]
                            },
                            {
                                id: "9",
                                title: "Tourism and Hospitality B2B Trade Shows",
                                slug: "tourism-hospitality-b2b-trade-shows",
                                children: [
                                    {
                                        id: "1",
                                        title: "Travel and Tourism Expos",
                                        slug: "travel-tourism-expos",
                                    },
                                    {
                                        id: "2",
                                        title: "Hotel and Resort Expos",
                                        slug: "hotel-resort-expos",
                                    },
                                    {
                                        id: "3",
                                        title: "MICE (Meetings, Incentives, Conferences, and Exhibitions) Expos",
                                        slug: "mice-meetings-incentives-conferences-exhibitions-expos",
                                    },
                                    {
                                        id: "4",
                                        title: "Luxury Travel Expos",
                                        slug: "luxury-travel-expos",
                                    },
                                    {
                                        id: "5",
                                        title: "Cruise and Adventure Travel Expos",
                                        slug: "cruise-adventure-travel-expos",
                                    }
                                ]
                            },
                            {
                                id: "10",
                                title: "Logistics and Supply Chain B2B Trade Shows",
                                slug: "logistics-supply-chain-b2b-trade-shows",
                                children: [
                                    {
                                        id: "1",
                                        title: "Freight and Shipping Expos",
                                        slug: "freight-shipping-expos",
                                    },
                                    {
                                        id: "2",
                                        title: "Warehouse and Distribution Expos",
                                        slug: "warehouse-distribution-expos",
                                    },
                                    {
                                        id: "3",
                                        title: "Transportation and Logistics Technologies",
                                        slug: "transportation-logistics-technologies",
                                    },
                                    {
                                        id: "4",
                                        title: "Last-Mile Delivery Expos",
                                        slug: "last-mile-delivery-expos",
                                    },
                                    {
                                        id: "5",
                                        title: "Cold Chain and Perishable Goods Expos",
                                        slug: "cold-chain-perishable-goods-expos",
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "Virtual Trade Shows",
                        slug: "virtual-trade-shows",
                        children: [
                            {
                                id: "1",
                                title: "Industry-Specific Virtual Trade Shows",
                                slug: "industry-specific-virtual-trade-shows",
                            },
                            {
                                id: "2",
                                title: "Product-Specific Virtual Trade Shows",
                                slug: "product-specific-virtual-trade-shows",
                            },
                            {
                                id: "3",
                                title: "Technology and Innovation Virtual Trade Shows",
                                slug: "technology-and-innovation-virtual-trade-shows",
                            },
                            {
                                id: "4",
                                title: "Global and Regional Virtual Trade Shows",
                                slug: "global-and-regional-virtual-trade-shows",
                            },
                            {
                                id: "5",
                                title: "Networking-Centric Virtual Trade Shows",
                                slug: "networking-centric-virtual-trade-shows",
                            },
                            {
                                id: "6",
                                title: "Interactive Virtual Trade Shows",
                                slug: "interactive-virtual-trade-shows",
                            },
                            {
                                id: "7",
                                title: "Hybrid Virtual Trade Shows",
                                slug: "hybrid-virtual-trade-shows",
                            },
                            {
                                id: "8",
                                title: "Job Fair and Recruitment Virtual Trade Shows",
                                slug: "job-fair-and-recruitment-virtual-trade-shows",
                            },
                            {
                                id: "9",
                                title: "Sustainability and Green Virtual Trade Shows",
                                slug: "sustainability-and-green-virtual-trade-shows",
                            },
                            {
                                id: "10",
                                title: "Consumer-Focused Virtual Trade Shows (B2C)",
                                slug: "consumer-focused-virtual-trade-shows-b2c",
                            }
                        ]
                    },

                ]
            },
            {
                id: "8",
                title: "Networking Events",
                slug: "networking-events",
                children: [
                    {
                        id: "1",
                        title: "Industry Networking Mixers",
                        slug: "industry-networking-mixers",
                        children: [

                            {
                                id: "1",
                                title: "Sector-Specific Networking Mixers",
                                slug: "sector-specific-networking-mixers",
                            },
                            {
                                id: "2",
                                title: "Small Business and Startup Networking Mixers",
                                slug: "small-business-and-startup-networking-mixers",
                            },
                            {
                                id: "3",
                                title: "Professional Development Networking Mixers",
                                slug: "professional-development-networking-mixers",
                            },
                            {
                                id: "4",
                                title: "Virtual Networking Mixers",
                                slug: "virtual-networking-mixers",
                            },
                            {
                                id: "5",
                                title: "Industry Collaboration Networking Mixers",
                                slug: "industry-collaboration-networking-mixers",
                            },
                            {
                                id: "6",
                                title: "Trade Association and Industry Group Networking Mixers",
                                slug: "trade-association-and-industry-group-networking-mixers",
                            },
                            {
                                id: "7",
                                title: "Conference or Event-Centric Networking Mixers",
                                slug: "conference-or-event-centric-networking-mixers",
                            },
                            {
                                id: "8",
                                title: "Exclusive VIP Networking Mixers",
                                slug: "exclusive-vip-networking-mixers",
                            },
                            {
                                id: "9",
                                title: "Social and Informal Industry Networking Mixers",
                                slug: "social-and-informal-industry-networking-mixers",
                            },
                            {
                                id: "10",
                                title: "Charity and Community-Focused Networking Mixers",
                                slug: "charity-and-community-focused-networking-mixers",
                            },
                        ]
                    },
                    {
                        id: "2",
                        title: "Business Luncheons or Dinners",
                        slug: "business-luncheons-or-dinners",
                        children: [
                            {
                                id: "1",
                                title: "Industry-Specific Business Luncheons/Dinners",
                                slug: "industry-specific-business-luncheons-or-dinners",
                            },
                            {
                                id: "2",
                                title: "Executive and C-Suite Business Luncheons/Dinners",
                                slug: "executive-and-c-suite-business-luncheons-or-dinners",
                            },
                            {
                                id: "3",
                                title: "Client or Customer Business Luncheons/Dinners",
                                slug: "client-or-customer-business-luncheons-or-dinners",
                            },
                            {
                                id: "4",
                                title: "Networking Business Luncheons/Dinners",
                                slug: "networking-business-luncheons-or-dinners",
                            },
                            {
                                id: "5",
                                title: "Small Group Business Luncheons/Dinners",
                                slug: "small-group-business-luncheons-or-dinners",
                            },
                            {
                                id: "6",
                                title: "Charity or Cause-Oriented Business Luncheons/Dinners",
                                slug: "charity-or-cause-oriented-business-luncheons-or-dinners",
                            },
                            {
                                id: "7",
                                title: "Holiday or Seasonal Business Luncheons/Dinners",
                                slug: "holiday-or-seasonal-business-luncheons-or-dinners",
                            },
                            {
                                id: "8",
                                title: "International Business Luncheons/Dinners",
                                slug: "international-business-luncheons-or-dinners",
                            },
                            {
                                id: "9",
                                title: "Panel Discussion Business Luncheons/Dinners",
                                slug: "panel-discussion-business-luncheons-or-dinners",
                            },
                            {
                                id: "10",
                                title: "Alumni and Educational Business Luncheons/Dinners",
                                slug: "alumni-and-educational-business-luncheons-or-dinners",
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "Professional Conferences Networking Events",
                        slug: "professional-conferences-networking-events",
                        children: [
                            {
                                id: "1",
                                title: "Industry-Specific Networking at Conferences",
                                slug: "industry-specific-networking-at-conferences",
                            },
                            {
                                id: "2",
                                title: "Small Group Networking Sessions at Conferences",
                                slug: "small-group-networking-sessions-at-conferences",
                            },
                            {
                                id: "3",
                                title: "Panel Discussion Networking at Conferences",
                                slug: "panel-discussion-networking-at-conferences",
                            },
                            {
                                id: "4",
                                title: "Speed Networking at Conferences",
                                slug: "speed-networking-at-conferences",
                            },
                            {
                                id: "5",
                                title: "Networking Dinners/Luncheons at Conferences",
                                slug: "networking-dinners-luncheons-at-conferences",
                            },
                            {
                                id: "6",
                                title: "Workshops and Collaborative Networking Sessions at Conferences",
                                slug: "workshops-and-collaborative-networking-sessions-at-conferences",
                            },
                            {
                                id: "7",
                                title: "International Networking at Conferences",
                                slug: "international-networking-at-conferences",
                            },
                            {
                                id: "8",
                                title: "Technology-Driven Networking at Conferences",
                                slug: "technology-driven-networking-at-conferences",
                            },
                            {
                                id: "9",
                                title: "Post-Conference Networking Events",
                                slug: "post-conference-networking-events",
                            },
                            {
                                id: "10",
                                title: "Student and Young Professional Networking at Conferences",
                                slug: "student-and-young-professional-networking-at-conferences",
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "Speed Networking",
                        slug: "speed-networking",
                        children: [
                            {
                                id: "1",
                                title: "Industry-Specific Speed Networking",
                                slug: "industry-specific-speed-networking",
                            },
                            {
                                id: "2",
                                title: "Corporate Speed Networking",
                                slug: "corporate-speed-networking",
                            },
                            {
                                id: "3",
                                title: "Entrepreneur and Startup Speed Networking",
                                slug: "entrepreneur-and-startup-speed-networking",
                            },
                            {
                                id: "4",
                                title: "Young Professionals Speed Networking",
                                slug: "young-professionals-speed-networking",
                            },
                            {
                                id: "5",
                                title: "Cross-Industry Speed Networking",
                                slug: "cross-industry-speed-networking",
                            },
                            {
                                id: "6",
                                title: "Virtual Speed Networking",
                                slug: "virtual-speed-networking",
                            },
                            {
                                id: "7",
                                title: "Charity and Cause-Based Speed Networking",
                                slug: "charity-and-cause-based-speed-networking",
                            },
                            {
                                id: "8",
                                title: "Women in Business Speed Networking",
                                slug: "women-in-business-speed-networking",
                            },
                            {
                                id: "9",
                                title: "Academic and Research Speed Networking",
                                slug: "academic-and-research-speed-networking",
                            },
                            {
                                id: "10",
                                title: "Job-Focused Speed Networking",
                                slug: "job-focused-speed-networking",
                            }
                        ]
                    },
                ]
            },
            {
                id: "9",
                title: "Incentive Programs",
                slug: "incentive-programs",
                children: [
                    {
                        id: "1",
                        title: "Sales Incentive Trips",
                        slug: "sales-incentive-trips",
                        children: [
                            {
                                id: "1",
                                title: "Luxury Getaways",
                                slug: "luxury-getaways",
                            },
                            {
                                id: "2",
                                title: "Adventure and Exploration Trips",
                                slug: "adventure-and-exploration-trips",
                            },
                            {
                                id: "3",
                                title: "Cruise Incentives",
                                slug: "cruise-incentives",
                            },
                            {
                                id: "4",
                                title: "Global Travel Incentives",
                                slug: "global-travel-incentives",
                            },
                            {
                                id: "5",
                                title: "Team-Building Incentive Trips",
                                slug: "team-building-incentive-trips",
                            },
                            {
                                id: "6",
                                title: "Exclusive VIP Experiences",
                                slug: "exclusive-vip-experiences",
                            },
                            {
                                id: "7",
                                title: "Short-Haul Weekend Getaways",
                                slug: "short-haul-weekend-getaways",
                            },
                            {
                                id: "8",
                                title: "Cultural and Historical Exploration",
                                slug: "cultural-and-historical-exploration",
                            },
                            {
                                id: "9",
                                title: "Wellness and Health-Focused Incentive Trips",
                                slug: "wellness-and-health-focused-incentive-trips",
                            },
                            {
                                id: "10",
                                title: "Luxury Staycation Incentives",
                                slug: "luxury-staycation-incentives",
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "Recognition Dinners or Galas",
                        slug: "recognition-dinners-or-galas",
                        children: [
                            {
                                id: "1",
                                title: "Annual Awards Gala",
                                slug: "annual-awards-gala",
                            },
                            {
                                id: "2",
                                title: "Top Performer Recognition Dinner",
                                slug: "top-performer-recognition-dinner",
                            },
                            {
                                id: "3",
                                title: "VIP Recognition Event",
                                slug: "vip-recognition-event",
                            },
                            {
                                id: "4",
                                title: "Themed Recognition Gala",
                                slug: "themed-recognition-gala",
                            },
                            {
                                id: "5",
                                title: "Charity Gala or Recognition Dinner",
                                slug: "charity-gala-or-recognition-dinner",
                            },
                            {
                                id: "6",
                                title: "Employee Anniversary Celebration Gala",
                                slug: "employee-anniversary-celebration-gala",
                            },
                            {
                                id: "7",
                                title: "Executive Recognition Dinner",
                                slug: "executive-recognition-dinner",
                            },
                            {
                                id: "8",
                                title: "Team Recognition Gala",
                                slug: "team-recognition-gala",
                            },
                            {
                                id: "9",
                                title: "Employee Appreciation Gala",
                                slug: "employee-appreciation-gala",
                            },
                            {
                                id: "10",
                                title: "Holiday Recognition Gala",
                                slug: "holiday-recognition-gala",
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "Annual Awards Ceremonies",
                        slug: "annual-awards-ceremonies",
                        children: [
                            {
                                id: "1",
                                title: "Employee of the Year Awards",
                                slug: "employee-of-the-year-awards",
                            },
                            {
                                id: "2",
                                title: "Sales Achievement Awards",
                                slug: "sales-achievement-awards",
                            },
                            {
                                id: "3",
                                title: "Innovation and Creativity Awards",
                                slug: "innovation-and-creativity-awards",
                            },
                            {
                                id: "4",
                                title: "Customer Service Excellence Awards",
                                slug: "customer-service-excellence-awards",
                            },
                            {
                                id: "5",
                                title: "Employee Engagement and Culture Awards",
                                slug: "employee-engagement-and-culture-awards",
                            },
                            {
                                id: "6",
                                title: "Leadership and Management Excellence Awards",
                                slug: "leadership-and-management-excellence-awards",
                            },
                            {
                                id: "7",
                                title: "Employee Longevity and Service Awards",
                                slug: "employee-longevity-and-service-awards",
                            },
                            {
                                id: "8",
                                title: "Sustainability and CSR Awards",
                                slug: "sustainability-and-csr-awards",
                            },
                            {
                                id: "9",
                                title: "Health and Wellness Achievement Awards",
                                slug: "health-and-wellness-achievement-awards",
                            },
                            {
                                id: "10",
                                title: "Team Achievement Awards",
                                slug: "team-achievement-awards",
                            },
                            {
                                id: "11",
                                title: "Diversity and Inclusion Awards",
                                slug: "diversity-and-inclusion-awards",
                            },
                            {
                                id: "12",
                                title: "Safety and Risk Management Awards",
                                slug: "safety-and-risk-management-awards",
                            },
                            {
                                id: "13",
                                title: "Global Performance Recognition Awards",
                                slug: "global-performance-recognition-awards",
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "Client Appreciation Events",
                        slug: "client-appreciation-events",
                        children: [
                            {
                                id: "1",
                                title: "Exclusive Dinner Events",
                                slug: "exclusive-dinner-events",
                            },
                            {
                                id: "2",
                                title: "Client Appreciation Receptions",
                                slug: "client-appreciation-receptions",
                            },
                            {
                                id: "3",
                                title: "Corporate Sporting Events or VIP Tickets",
                                slug: "corporate-sporting-events-or-vip-tickets",
                            },
                            {
                                id: "4",
                                title: "Gift-Giving Events",
                                slug: "gift-giving-events",
                            },
                            {
                                id: "5",
                                title: "Client Appreciation Cruises or Retreats",
                                slug: "client-appreciation-cruises-or-retreats",
                            },
                            {
                                id: "6",
                                title: "Workshops or Training Sessions",
                                slug: "workshops-or-training-sessions",
                            },
                            {
                                id: "7",
                                title: "Client Appreciation Parties",
                                slug: "client-appreciation-parties",
                            },
                            {
                                id: "8",
                                title: "Charity or CSR Events",
                                slug: "charity-or-csr-events",
                            },
                            {
                                id: "9",
                                title: "Exclusive Product/Service Previews",
                                slug: "exclusive-product-service-previews",
                            },
                            {
                                id: "10",
                                title: "Golf Outings or Tournaments",
                                slug: "golf-outings-or-tournaments",
                            },
                            {
                                id: "11",
                                title: "Interactive Client Appreciation Events",
                                slug: "interactive-client-appreciation-events",
                            },
                            {
                                id: "12",
                                title: "Virtual Client Appreciation Events",
                                slug: "virtual-client-appreciation-events",
                            }
                        ]
                    },
                ]
            },
            {
                id: "10",
                title: "Corporate Parties",
                slug: "corporate-parties-and-celebrations",
                children: [
                    {
                        id: "1",
                        title: "Holiday Parties",
                        slug: "holiday-parties",
                        children: [
                            {
                                id: "1",
                                title: "Christmas or Holiday Parties",
                                slug: "christmas-or-holiday-parties",
                            },
                            {
                                id: "2",
                                title: "New Year’s Eve Party",
                                slug: "new-years-eve-party",
                            },
                            {
                                id: "3",
                                title: "Company Anniversary Party (Holiday-Themed)",
                                slug: "company-anniversary-party-holiday-themed",
                            },
                            {
                                id: "4",
                                title: "End-of-Year Celebration",
                                slug: "end-of-year-celebration",
                            },
                            {
                                id: "5",
                                title: "Winter Wonderland Party",
                                slug: "winter-wonderland-party",
                            },
                            {
                                id: "6",
                                title: "Themed Holiday Parties",
                                slug: "themed-holiday-parties",
                            },
                            {
                                id: "7",
                                title: "Office Potluck Holiday Party",
                                slug: "office-potluck-holiday-party",
                            },
                            {
                                id: "8",
                                title: "Charity or Volunteer Holiday Party",
                                slug: "charity-or-volunteer-holiday-party",
                            },
                            {
                                id: "9",
                                title: "Holiday Team Building Events",
                                slug: "holiday-team-building-events",
                            },
                            {
                                id: "10",
                                title: "Virtual Holiday Parties",
                                slug: "virtual-holiday-parties",
                            },
                            {
                                id: "11",
                                title: "Family-Friendly Holiday Parties",
                                slug: "family-friendly-holiday-parties",
                            },
                            {
                                id: "12",
                                title: "Luxury Holiday Parties",
                                slug: "luxury-holiday-parties",
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "Anniversary Celebrations",
                        slug: "anniversary-celebrations",
                        children: [
                            {
                                id: "1",
                                title: "Company Milestone Anniversary Party",
                                slug: "company-milestone-anniversary-party",
                            },
                            {
                                id: "2",
                                title: "Employee Anniversary Celebration",
                                slug: "employee-anniversary-celebration",
                            },
                            {
                                id: "3",
                                title: "Brand Anniversary Party",
                                slug: "brand-anniversary-party",
                            },
                            {
                                id: "4",
                                title: "Corporate Gala or Black-Tie Anniversary Celebration",
                                slug: "corporate-gala-or-black-tie-anniversary-celebration",
                            },
                            {
                                id: "5",
                                title: "Employee Appreciation Day for Anniversaries",
                                slug: "employee-appreciation-day-for-anniversaries",
                            },
                            {
                                id: "6",
                                title: "Client and Stakeholder Anniversary Event",
                                slug: "client-and-stakeholder-anniversary-event",
                            },
                            {
                                id: "7",
                                title: "Charity or CSR Anniversary Event",
                                slug: "charity-or-csr-anniversary-event",
                            },
                            {
                                id: "8",
                                title: "Product or Service Anniversary Launch Party",
                                slug: "product-or-service-anniversary-launch-party",
                            },
                            {
                                id: "9",
                                title: "Founders and Leadership Recognition Anniversary Event",
                                slug: "founders-and-leadership-recognition-anniversary-event",
                            },
                            {
                                id: "10",
                                title: "Casual Anniversary Celebration",
                                slug: "casual-anniversary-celebration",
                            },
                            {
                                id: "11",
                                title: "Interactive Anniversary Event",
                                slug: "interactive-anniversary-event",
                            },
                            {
                                id: "12",
                                title: "Virtual Anniversary Celebration",
                                slug: "virtual-anniversary-celebration",
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "Milestone Celebrations",
                        slug: "milestone-celebrations",
                        children: [
                            {
                                id: "1",
                                title: "Company Anniversary Milestone Celebrations",
                                slug: "company-anniversary-milestone-celebrations",
                            },
                            {
                                id: "2",
                                title: "Sales or Revenue Milestone Celebrations",
                                slug: "sales-or-revenue-milestone-celebrations",
                            },
                            {
                                id: "3",
                                title: "Product Launch or Innovation Milestones",
                                slug: "product-launch-or-innovation-milestones",
                            },
                            {
                                id: "4",
                                title: "Market Expansion or Geographic Milestones",
                                slug: "market-expansion-or-geographic-milestones",
                            },
                            {
                                id: "5",
                                title: "Employee or Team Achievement Milestones",
                                slug: "employee-or-team-achievement-milestones",
                            },
                            {
                                id: "6",
                                title: "Client or Partner Milestone Celebrations",
                                slug: "client-or-partner-milestone-celebrations",
                            },
                            {
                                id: "7",
                                title: "Product or Service Milestone Celebrations",
                                slug: "product-or-service-milestone-celebrations",
                            },
                            {
                                id: "8",
                                title: "Corporate Social Responsibility (CSR) Milestone Celebrations",
                                slug: "corporate-social-responsibility-csr-milestone-celebrations",
                            },
                            {
                                id: "9",
                                title: "Innovation and Technology Milestone Celebrations",
                                slug: "innovation-and-technology-milestone-celebrations",
                            },
                            {
                                id: "10",
                                title: "Revenue or Profitability Milestone Celebrations",
                                slug: "revenue-or-profitability-milestone-celebrations",
                            },
                            {
                                id: "11",
                                title: "Global Expansion or New Market Entry Milestones",
                                slug: "global-expansion-or-new-market-entry-milestones",
                            }
                        ]
                    },
                    {
                        id: "4",
                        title: "Themed Parties",
                        slug: "themed-parties",
                        children: [
                            {
                                id: "1",
                                title: "Holiday-Themed Parties",
                                slug: "holiday-themed-parties",
                            },
                            {
                                id: "2",
                                title: "Masquerade Ball",
                                slug: "masquerade-ball",
                            },
                            {
                                id: "3",
                                title: "Casino Night Party",
                                slug: "casino-night-party",
                            },
                            {
                                id: "4",
                                title: "Decade-Themed Parties",
                                slug: "decade-themed-parties",
                            },
                            {
                                id: "5",
                                title: "Tropical or Hawaiian Luau",
                                slug: "tropical-or-hawaiian-luau",
                            },
                            {
                                id: "6",
                                title: "Hollywood or Red Carpet Themed Party",
                                slug: "hollywood-or-red-carpet-themed-party",
                            },
                            {
                                id: "7",
                                title: "Around the World Party",
                                slug: "around-the-world-party",
                            },
                            {
                                id: "8",
                                title: "Superhero or Comic Book Theme",
                                slug: "superhero-or-comic-book-theme",
                            },
                            {
                                id: "9",
                                title: "Black and White Party",
                                slug: "black-and-white-party",
                            },
                            {
                                id: "10",
                                title: "Carnival or Circus Theme",
                                slug: "carnival-or-circus-theme",
                            },
                            {
                                id: "11",
                                title: "Futuristic or Sci-Fi Themed Party",
                                slug: "futuristic-or-sci-fi-themed-party",
                            },
                            {
                                id: "12",
                                title: "Farm or Country-Themed Party",
                                slug: "farm-or-country-themed-party",
                            },
                            {
                                id: "13",
                                title: "Pirate Theme Party",
                                slug: "pirate-theme-party",
                            }
                        ]
                    },
                ]
            },
            {
                id: "11",
                title: "Executive Retreats",
                slug: "executive-retreats",
                children: [
                    {
                        id: "1",
                        title: "Leadership Retreats",
                        slug: "leadership-retreats",
                        children: [
                            {
                                id: "1",
                                title: "Strategic Planning Retreats",
                                slug: "strategic-planning-retreats",
                            },
                            {
                                id: "2",
                                title: "Team Building and Bonding Retreats",
                                slug: "team-building-and-bonding-retreats",
                            },
                            {
                                id: "3",
                                title: "Leadership Development Retreats",
                                slug: "leadership-development-retreats",
                            },
                            {
                                id: "4",
                                title: "Innovation and Creativity Retreats",
                                slug: "innovation-and-creativity-retreats",
                            },
                            {
                                id: "5",
                                title: "Crisis Management and Risk Mitigation Retreats",
                                slug: "crisis-management-and-risk-mitigation-retreats",
                            },
                            {
                                id: "6",
                                title: "Visionary Leadership Retreats",
                                slug: "visionary-leadership-retreats",
                            },
                            {
                                id: "7",
                                title: "Change Management Retreats",
                                slug: "change-management-retreats",
                            },
                            {
                                id: "8",
                                title: "High-Performance Leadership Retreats",
                                slug: "high-performance-leadership-retreats",
                            },
                            {
                                id: "9",
                                title: "Executive Wellness Retreats",
                                slug: "executive-wellness-retreats",
                            },
                            {
                                id: "10",
                                title: "Philanthropy and CSR Leadership Retreats",
                                slug: "philanthropy-and-csr-leadership-retreats",
                            },
                            {
                                id: "11",
                                title: "Executive Collaboration Retreats",
                                slug: "executive-collaboration-retreats",
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "Board Retreats",
                        slug: "board-retreats",
                        children: [
                            {
                                id: "1",
                                title: "Strategic Planning Board Retreats",
                                slug: "strategic-planning-board-retreats",
                            },
                            {
                                id: "2",
                                title: "Governance and Compliance Retreats",
                                slug: "governance-and-compliance-retreats",
                            },
                            {
                                id: "3",
                                title: "Team Building and Collaboration Retreats",
                                slug: "team-building-and-collaboration-retreats",
                            },
                            {
                                id: "4",
                                title: "Performance Review and Evaluation Retreats",
                                slug: "performance-review-and-evaluation-retreats",
                            },
                            {
                                id: "5",
                                title: "Crisis Management and Contingency Planning Retreats",
                                slug: "crisis-management-and-contingency-planning-retreats",
                            },
                            {
                                id: "6",
                                title: "Financial Oversight and Management Retreats",
                                slug: "financial-oversight-and-management-retreats",
                            },
                            {
                                id: "7",
                                title: "Leadership Development and Succession Planning Retreats",
                                slug: "leadership-development-and-succession-planning-retreats",
                            },
                            {
                                id: "8",
                                title: "Innovation and Future Growth Retreats",
                                slug: "innovation-and-future-growth-retreats",
                            },
                            {
                                id: "9",
                                title: "Board Member Education Retreats",
                                slug: "board-member-education-retreats",
                            },
                            {
                                id: "10",
                                title: "Relationship Building with Stakeholders Retreats",
                                slug: "relationship-building-with-stakeholders-retreats",
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "Team Strategy Retreats",
                        slug: "team-strategy-retreats",
                        children: [
                            {
                                id: "1",
                                title: "Mindfulness and Meditation Retreats",
                                slug: "mindfulness-and-meditation-retreats",
                            },
                            {
                                id: "2",
                                title: "Stress Management and Relaxation Retreats",
                                slug: "stress-management-and-relaxation-retreats",
                            },
                            {
                                id: "3",
                                title: "Physical Wellness and Fitness Retreats",
                                slug: "physical-wellness-and-fitness-retreats",
                            },
                            {
                                id: "4",
                                title: "Personal Reflection and Goal Setting Retreats",
                                slug: "personal-reflection-and-goal-setting-retreats",
                            },
                            {
                                id: "5",
                                title: "Digital Detox and Disconnect Retreats",
                                slug: "digital-detox-and-disconnect-retreats",
                            },
                            {
                                id: "6",
                                title: "Holistic Healing and Restorative Retreats",
                                slug: "holistic-healing-and-restorative-retreats",
                            },
                            {
                                id: "7",
                                title: "Nature-Based Wellness Retreats",
                                slug: "nature-based-wellness-retreats",
                            },
                            {
                                id: "8",
                                title: "Sleep and Recovery Retreats",
                                slug: "sleep-and-recovery-retreats",
                            },
                            {
                                id: "9",
                                title: "Emotional Wellness and Resilience Retreats",
                                slug: "emotional-wellness-and-resilience-retreats",
                            },
                            {
                                id: "10",
                                title: "Creative Expression and Arts-Based Retreats",
                                slug: "creative-expression-and-arts-based-retreats",
                            }
                        ]
                    },
                ]
            },
            {
                id: "12",
                title: "Webinars Virtual Events",
                slug: "webinars-and-virtual-events",
                children: [
                    {
                        id: "1",
                        title: "Online Training Workshops",
                        slug: "online-training-workshops",
                        children: [
                            {
                                id: "1",
                                title: "Skill Development Workshops",
                                slug: "skill-development-workshops",
                            },
                            {
                                id: "2",
                                title: "Certifications and Professional Development Workshops",
                                slug: "certifications-and-professional-development-workshops",
                            },
                            {
                                id: "3",
                                title: "Product Training Workshops",
                                slug: "product-training-workshops",
                            },
                            {
                                id: "4",
                                title: "Employee Onboarding Workshops",
                                slug: "employee-onboarding-workshops",
                            },
                            {
                                id: "5",
                                title: "Leadership and Management Training Workshops",
                                slug: "leadership-and-management-training-workshops",
                            },
                            {
                                id: "6",
                                title: "Personal Development Workshops",
                                slug: "personal-development-workshops",
                            },
                            {
                                id: "7",
                                title: "Sales and Marketing Training Workshops",
                                slug: "sales-and-marketing-training-workshops",
                            },
                            {
                                id: "8",
                                title: "Tech and Software Training Workshops",
                                slug: "tech-and-software-training-workshops",
                            },
                            {
                                id: "9",
                                title: "Creative and Design Workshops",
                                slug: "creative-and-design-workshops",
                            },
                            {
                                id: "10",
                                title: "Customer Service and Support Workshops",
                                slug: "customer-service-and-support-workshops",
                            },
                            {
                                id: "11",
                                title: "Compliance and Legal Training Workshops",
                                slug: "compliance-and-legal-training-workshops",
                            },
                            {
                                id: "12",
                                title: "Innovation and Change Management Workshops",
                                slug: "innovation-and-change-management-workshops",
                            },
                            {
                                id: "13",
                                title: "Virtual Networking and Collaboration Workshops",
                                slug: "virtual-networking-and-collaboration-workshops",
                            }
                        ]
                    },
                    {
                        id: "2",
                        title: "Virtual Conferences",
                        slug: "virtual-conferences",
                        children: [
                            {
                                id: "1",
                                title: "Industry-Specific Conferences",
                                slug: "industry-specific-conferences",
                            },
                            {
                                id: "2",
                                title: "Educational and Academic Conferences",
                                slug: "educational-and-academic-conferences",
                            },
                            {
                                id: "3",
                                title: "Networking Conferences",
                                slug: "networking-conferences",
                            },
                            {
                                id: "4",
                                title: "Corporate Conferences",
                                slug: "corporate-conferences",
                            },
                            {
                                id: "5",
                                title: "Trade and Product Showcase Conferences",
                                slug: "trade-and-product-showcase-conferences",
                            },
                            {
                                id: "6",
                                title: "Keynote and Thought Leadership Conferences",
                                slug: "keynote-and-thought-leadership-conferences",
                            },
                            {
                                id: "7",
                                title: "Workshops and Hands-On Learning Conferences",
                                slug: "workshops-and-hands-on-learning-conferences",
                            },
                            {
                                id: "8",
                                title: "Annual or Bi-Annual Conferences",
                                slug: "annual-or-bi-annual-conferences",
                            },
                            {
                                id: "9",
                                title: "Product Development or Innovation Conferences",
                                slug: "product-development-or-innovation-conferences",
                            },
                            {
                                id: "10",
                                title: "Virtual Summits",
                                slug: "virtual-summits",
                            },
                            {
                                id: "11",
                                title: "Interactive Q&A and Panel Discussion Conferences",
                                slug: "interactive-q-and-a-and-panel-discussion-conferences",
                            },
                            {
                                id: "12",
                                title: "Global or International Conferences",
                                slug: "global-or-international-conferences",
                            }
                        ]
                    },
                    {
                        id: "3",
                        title: "Product Webinars",
                        slug: "product-webinars",
                        children: [
                            {
                                id: "1",
                                title: "Product Demonstrations (Demos)",
                                slug: "product-demonstrations-demos",
                            },
                            {
                                id: "2",
                                title: "Product Launch Webinars",
                                slug: "product-launch-webinars",
                            },
                            {
                                id: "3",
                                title: "Product Training Webinars",
                                slug: "product-training-webinars",
                            },
                            {
                                id: "4",
                                title: "Product Updates and New Features Webinars",
                                slug: "product-updates-and-new-features-webinars",
                            },
                            {
                                id: "5",
                                title: "Product Use Case Webinars",
                                slug: "product-use-case-webinars",
                            },
                            {
                                id: "6",
                                title: "Product Q&A Webinars",
                                slug: "product-q-and-a-webinars",
                            },
                            {
                                id: "7",
                                title: "Product Webinars for Sales Teams",
                                slug: "product-webinars-for-sales-teams",
                            },
                            {
                                id: "8",
                                title: "Product Webinars for Partners and Resellers",
                                slug: "product-webinars-for-partners-and-resellers",
                            },
                            {
                                id: "9",
                                title: "Customer Feedback and Advisory Webinars",
                                slug: "customer-feedback-and-advisory-webinars",
                            },
                            {
                                id: "10",
                                title: "Product Comparison Webinars",
                                slug: "product-comparison-webinars",
                            },
                            {
                                id: "11",
                                title: "Product Webinars for Media and Influencers",
                                slug: "product-webinars-for-media-and-influencers",
                            }
                        ]
                    },
                ]
            }
        ],
    },

];