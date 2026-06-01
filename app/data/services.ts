import { IconType } from "react-icons";
import {
    FaHandshake, FaUsers, FaBriefcase, FaChalkboardTeacher,
    FaBullhorn, FaHeart, FaTrophy, FaHandsHelping,
    FaLaptop, FaGlassCheers, FaLeaf, FaPlane,
    FaStar, FaCalendarAlt, FaTheaterMasks, FaUtensils,
    FaChess
} from "react-icons/fa";

export interface ServiceNode {
    id: string;
    title: string;
    slug: string;
    titleSuffix: string,
    icon?: IconType;
    image?: string;
    children?: ServiceNode[];
}

export const services: ServiceNode[] = [

    // Corporate Event 
    {
        id: "corporate-event",
        title: "Corporate Event",
        slug: "corp",
        icon: FaBriefcase,
        titleSuffix: "Management Company in Delhi",
        // image: "/evenets/corporate-event.jpg",
        children: [
            {
                id: "conferences",
                title: "Conferences",
                slug: "conf",
                icon: FaUsers,
                titleSuffix: "Management Company in Delhi",

                children: [
                    {
                        id: "ic", title: "Industry Conference",
                        slug: "ind-conf",
                        image: "/events/industry-conference.png",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            { id: "trade-conference", title: "Trade Conferences", slug: "trad-conf", titleSuffix: "Management Company in Delhi", },
                            { id: "professional-development-conference", title: "Professional Development Conferences", slug: "pdc", titleSuffix: "Management Company in Delhi", },
                            { id: "academic-research-conference", title: "Academic/Research Conferences", slug: "arc", titleSuffix: "Management Company in Delhi" },
                            { id: "networking-conferences", title: "Networking Conferences", slug: "netw-conf", titleSuffix: "Management Company in Delhi" },
                            { id: "technology-conference", title: "Technology Conferences", slug: "tech-conf", titleSuffix: "Management Company in Delhi" },
                            { id: "leadership-conference", title: "Leadership Conferences", slug: "lead-conf", titleSuffix: "Management Company in Delhi" },
                            { id: "customer-focused-conference", title: "Customer-Focused Conferences", slug: "cust-conf", titleSuffix: "Management Company in Delhi" },
                            { id: "product-specific-conference", title: "Product-Specific Conferences", slug: "prod-conf", titleSuffix: "Management Company in Delhi" },
                            { id: "investor-conference", title: "Investor Conferences", slug: "inv-conf", titleSuffix: "Management Company in Delhi" },
                            { id: "government-policy-conference", title: "Government & Policy Conferences", slug: "gpc", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "corporate-conferences",
                        title: "Corporate Conferences",
                        slug: "corp-conf",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "internal-corporate-conferences",
                                title: "Internal Corporate Conferences",
                                titleSuffix: "Management Company in Delhi",
                                slug: "icc",
                                children: [
                                    { id: "employee-engagement-conferences", title: "Employee Engagement Conferences", slug: "eec", titleSuffix: "Management Company in Delhi" },
                                    { id: "departmental-conferences", title: "Departmental Conferences", slug: "dpt-conf", titleSuffix: "Management Company in Delhi" },
                                ]
                            },
                            {
                                id: "external-corporate-conferences",
                                title: "External Corporate Conferences",
                                slug: "ecc",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    { id: "client-conferences", title: "Client Conferences", slug: "clc", titleSuffix: "Management Company in Delhi" },
                                    { id: "partner-conferences", title: "Partner Conferences", slug: "part-conf", titleSuffix: "Management Company in Delhi" },
                                ]
                            },
                            {
                                id: "product-and-innovation-conferences",
                                title: "Product & Innovation Conferences",
                                slug: "pnc",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    { id: "product-launch-conferences", title: "Product Launch Conferences", slug: "plc", titleSuffix: "Management Company in Delhi" },
                                    { id: "innovation-summits", title: "Innovation Summits", slug: "inno-summ", titleSuffix: "Management Company in Delhi" },
                                ]
                            },
                            {
                                id: "leadership-and-executive-conferences",
                                title: "Leadership & Executive Conferences",
                                slug: "lec",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    { id: "executive-retreats", title: "Executive Retreats", slug: "exec-ret", titleSuffix: "Management Company in Delhi" },
                                    { id: "leadership-development-conferences", title: "Leadership Development Conferences", slug: "lead-dev-conf", titleSuffix: "Management Company in Delhi" },
                                ]
                            },
                            {
                                id: "industry-specific-corporate-conferences",
                                title: "Industry-Specific Corporate Conferences",
                                slug: "iscc",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    { id: "industry-forums", title: "Industry Forums", slug: "indf", titleSuffix: "Management Company in Delhi" },
                                    { id: "sector-round-tables", title: "Sector-Specific Conferences", slug: "srt", titleSuffix: "Management Company in Delhi" },
                                ]
                            },
                            {
                                id: "training-and-education-conferences",
                                title: "Training & Education Conferences",
                                slug: "tecc",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    { id: "corporate-training-conferences", title: "Corporate Training Conferences", slug: "ctc", titleSuffix: "Management Company in Delhi" },
                                ]
                            },
                            {
                                id: "corporate-retreats",
                                title: "Corporate Retreats",
                                slug: "corp-ret",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    { id: "team-building-retreats", title: "Team-Building Retreats", slug: "tbr", titleSuffix: "Management Company in Delhi" },
                                    { id: "strategic-retreats", title: "Strategic Retreats", slug: "stra-ret", titleSuffix: "Management Company in Delhi" },
                                ]
                            },
                            {
                                id: "annual-corporate-conferences",
                                title: "Annual Corporate Conferences",
                                slug: "acc",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    { id: "year-end-review-conferences", title: "Year-End Review Conferences", slug: "yerc", titleSuffix: "Management Company in Delhi" },
                                ]
                            },
                            {
                                id: "virtual-and-hybrid-corporate-conferences",
                                title: "Virtual & Hybrid Corporate Conferences",
                                slug: "vhcc",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    { id: "virtual-conferences", title: "Virtual Conferences", slug: "virt-conf", titleSuffix: "Management Company in Delhi" },
                                    { id: "hybrid-conferences", title: "Hybrid Conferences", slug: "hybr-conf", titleSuffix: "Management Company in Delhi" },
                                ]
                            },
                            {
                                id: "corporate-social-responsibility-conferences",
                                title: "Corporate Social Responsibility Conferences",
                                slug: "csrc",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    { id: "sustainability-conferences", title: "Sustainability Conferences", slug: "sust-conf", titleSuffix: "Management Company in Delhi" },
                                    { id: "charity-fundraising-conferences", title: "Charity Fundraising Conferences", slug: "chfc", titleSuffix: "Management Company in Delhi" },
                                ]
                            },
                        ]
                    },
                    {
                        id: "annual-conference",
                        title: "Annual Conferences",
                        slug: "annual-conf",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            { id: "annual-sales-conferences", title: "Annual Sales Conferences", slug: "ansc", titleSuffix: "Management Company in Delhi" },
                            { id: "annual-strategy-conferences", title: "Annual Strategy Conferences", slug: "asc", titleSuffix: "Management Company in Delhi" },
                            { id: "annual-product-innovation-conferences", title: "Annual Product Innovation Conferences", slug: "apic", titleSuffix: "Management Company in Delhi" },
                            { id: "annual-employee-team-conferences", title: "Annual Employee and Team Conferences", slug: "aetc", titleSuffix: "Management Company in Delhi" },
                            { id: "annual-customer-client-conferences", title: "Annual Customer or Client Conferences", slug: "accc", titleSuffix: "Management Company in Delhi" },
                            { id: "annual-recognition-award-conferences", title: "Annual Recognition and Award Conferences", slug: "arac", titleSuffix: "Management Company in Delhi" },
                            { id: "annual-csr-conferences", title: "Annual CSR - (Corporate Social Responsibility) Conferences", slug: "acsrc", titleSuffix: "Management Company in Delhi" },
                            { id: "annual-investor-conferences", title: "Annual Investor Conferences", slug: "aic", titleSuffix: "Management Company in Delhi" },
                            { id: "annual-leadership-conferences", title: "Annual Leadership Conferences", slug: "alc", titleSuffix: "Management Company in Delhi" },
                        ]
                    },
                    {
                        id: "seminars-and-forums",
                        title: "Seminars & Forums",
                        slug: "sem-for",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            { id: "training-seminars", title: "Training Seminars", slug: "trn-sem", titleSuffix: "Management Company in Delhi" },
                            { id: "educational-seminars", title: "Educational Seminars", slug: "edu-sem", titleSuffix: "Management Company in Delhi" },
                            { id: "product-service-seminars", title: "Product or Service Seminars", slug: "prd-svc-sem", titleSuffix: "Management Company in Delhi" },
                            { id: "panel-discussion-forums", title: "Panel Discussion Forums", slug: "pnl-disc-for", titleSuffix: "Management Company in Delhi" },
                            { id: "roundtable-forums", title: "Roundtable Forums", slug: "rt-for", titleSuffix: "Management Company in Delhi" },
                            { id: "conference-seminars", title: "Conference Seminars", slug: "conf-sem", titleSuffix: "Management Company in Delhi" },
                            { id: "interactive-workshops", title: "Interactive Workshops", slug: "int-work", titleSuffix: "Management Company in Delhi" },
                            { id: "expert-led-forums", title: "Expert-Led Forums", slug: "exp-led-for", titleSuffix: "Management Company in Delhi" },
                            { id: "thought-leadership-seminars", title: "Thought Leadership Seminars", slug: "thg-lead-sem", titleSuffix: "Management Company in Delhi" },
                            { id: "policy-regulatory-forums", title: "Policy or Regulatory Forums", slug: "pol-reg-for", titleSuffix: "Management Company in Delhi" },
                            { id: "networking-seminars", title: "Networking Seminars", slug: "net-sem", titleSuffix: "Management Company in Delhi" },
                            { id: "virtual-seminars-and-forums", title: "Virtual Seminars and Forums", slug: "virt-sem-for", titleSuffix: "Management Company in Delhi" },
                        ]

                    }
                ],
            },
            {
                id: "Seminars and Workshops",
                title: "Seminars and Workshops",
                slug: "sem-work",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "corporate-training-seminars",
                        title: "Corporate Training Seminars",
                        slug: "corp-trn-sem",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "leadership-and-management-training-seminars",
                                title: "Leadership and Management Training Seminars",
                                slug: "lead-man-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "communication-skills-training-seminars",
                                title: "Communication Skills Training Seminars",
                                slug: "com-skl-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "time-management-and-productivity-training-seminars",
                                title: "Time Management and Productivity Seminars",
                                slug: "tme-prd-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sales-and-customer-service-training-seminars",
                                title: "Sales and Customer Service Training Seminars",
                                slug: "scs-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "conflict-resolution-and-negotiation-training-seminars",
                                title: "Conflict Resolution and Negotiation Training Seminars",
                                slug: "crn-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "diversity-equity-and-inclusion-training-seminars",
                                title: "Diversity, Equity, and Inclusion (DEI) Training Seminars",
                                slug: "dei-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "technical-and-software-training-seminars",
                                title: "Technical and Software Training Seminars",
                                slug: "tech-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "financial-and-accounting-training-seminars",
                                title: "Financial and Accounting Training Seminars",
                                slug: "fin-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "health-and-safety-training-seminars",
                                title: "Health, Safety, and Compliance Training Seminars",
                                slug: "hlt-sft-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "innovation-and-creativity-training-seminars",
                                title: "Innovation and Creativity Training Seminars",
                                slug: "inn-cre-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "emotional-intelligence-training-seminars",
                                title: "Emotional Intelligence (EQ) Training Seminars",
                                slug: "emt-int-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "change-management-training-seminars",
                                title: "Change Management Training Seminars",
                                slug: "chn-mgt-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "project-management-training-seminars",
                                title: "Project Management Training Seminars",
                                slug: "prj-mgt-trn-sem",
                                titleSuffix: "Management Company in Delhi"
                            }
                        ]
                    },
                    {
                        id: "professional-development-workshops",
                        title: "Professional Development Workshops",
                        slug: "pro-dev-work",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "leadership-development-workshops",
                                title: "Leadership Development Workshops",
                                slug: "led-dev-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "communication-skills-workshops",
                                title: "Communication Skills Workshops",
                                slug: "comm-skl-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "time-management-and-productivity-workshops",
                                title: "Time Management and Productivity Workshops",
                                slug: "tim-mgt-pro-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "career-development-and-growth-workshops",
                                title: "Career Development and Growth Workshops",
                                slug: "car-dev-gro-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "emotional-intelligence-workshops",
                                title: "Emotional Intelligence (EQ) Workshops",
                                slug: "emt-int-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "diversity-and-inclusion-workshops",
                                title: "Diversity and Inclusion Workshops",
                                slug: "div-in-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "conflict-resolution-and-negotiation-workshops",
                                title: "Conflict Resolution and Negotiation Workshops",
                                slug: "conf-res-neg-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "team-building-workshops",
                                title: "Team Building Workshops",
                                slug: "tm-bld-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "problem-solving-and-critical-thinking-workshops",
                                title: "Problem-Solving and Critical Thinking Workshops",
                                slug: "psc-thnk-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sales-and-customer-service-skills-workshops",
                                title: "Sales and Customer Service Skills Workshops",
                                slug: "sls-cst-srv-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "creativity-and-innovation-workshops",
                                title: "Creativity and Innovation Workshops",
                                slug: "cre-inn-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "financial-literacy-and-budgeting-workshops",
                                title: "Financial Literacy and Budgeting Workshops",
                                slug: "fin-lit-bdg-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "stress-management-and-well-being-workshops",
                                title: "Stress Management and Well-being Workshops",
                                slug: "str-mgt-well-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "digital-literacy-and-technology-skills-workshops",
                                title: "Digital Literacy and Technology Skills Workshops",
                                slug: "dig-lit-tech-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "change-management-workshops",
                                title: "Change Management Workshops",
                                slug: "chg-mgt-work",
                                titleSuffix: "Management Company in Delhi"
                            }
                        ]
                    },
                    {
                        id: "creative-workshops",
                        title: "Creative Workshops",
                        slug: "cre-work",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "design-thinking-workshops",
                                title: "Design Thinking Workshops",
                                slug: "des-thnk-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "brainstorming-and-ideation-workshops",
                                title: "Brainstorming and Ideation Workshops",
                                slug: "bai-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "visual-storytelling-workshops",
                                title: "Visual Storytelling Workshops",
                                slug: "vis-stor-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "creative-writing-workshops",
                                title: "Creative Writing Workshops",
                                slug: "cre-wri-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "graphic-design-workshops",
                                title: "Graphic Design Workshops",
                                slug: "grf-des-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "photography-and-videography-workshops",
                                title: "Photography and Videography Workshops",
                                slug: "phto-vdo-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "digital-illustration-workshops",
                                title: "Digital Illustration Workshops",
                                slug: "dig-ill-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "innovation-and-creativity-in-business-workshops",
                                title: "Innovation and Creativity in Business Workshops",
                                slug: "inn-cre-bus-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "acting-and-performance-workshops",
                                title: "Acting and Performance Workshops",
                                slug: "art-perf-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "craft-and-diy-workshops",
                                title: "Craft and DIY Workshops",
                                slug: "crft-diy-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "music-and-sound-design-workshops",
                                title: "Music and Sound Design Workshops",
                                slug: "mus-snd-des-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "fashion-design-workshops",
                                title: "Fashion Design Workshops",
                                slug: "fash-des-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "UX/UI Design Workshops",
                                title: "UX/UI Design Workshops",
                                slug: "ux-ui-des-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "branding-and-identity-design-workshops",
                                title: "Branding and Identity Design Workshops",
                                slug: "brd-ide-des-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "mixed-media-and-collage-workshops",
                                title: "Mixed Media and Collage Workshops",
                                slug: "mix-med-col-work",
                                titleSuffix: "Management Company in Delhi"
                            }
                        ]
                    },
                    {
                        id: "technical-workshops",
                        title: "Technical Workshops",
                        slug: "tech-work",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "programming-and-coding-workshops",
                                title: "Programming and Coding Workshops",
                                slug: "prog-cod-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "data-science-and-analytics-workshops",
                                title: "Data Science and Analytics Workshops",
                                slug: "data-sci-ana-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "cybersecurity-workshops",
                                title: "Cybersecurity Workshops",
                                slug: "cybr-sec-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "cloud-computing-workshops",
                                title: "Cloud Computing Workshops",
                                slug: "clo-com-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "artificial-intelligence-and-machine-learning-workshops",
                                title: "Artificial Intelligence and Machine Learning Workshops",
                                slug: "aim-lear-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "networking-and-network-administration-workshops",
                                title: "Networking and Network Administration Workshops",
                                slug: "net-net-admn-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "blockchain-and-cryptocurrency-workshops",
                                title: "Blockchain and Cryptocurrency Workshops",
                                slug: "blck-cryp-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "internet-of-things-workshops",
                                title: "Internet of Things (IoT) Workshops",
                                slug: "iot-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "robotics-and-automation-workshops",
                                title: "Robotics and Automation Workshops",
                                slug: "rbt-auto-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "software-testing-and-quality-assurance-workshops",
                                title: "Software Testing and Quality Assurance Workshops",
                                slug: "sw-tst-qa-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "virtual-and-augmented-reality-vr-ar-workshops",
                                title: "Virtual and Augmented Reality (VR/AR) Workshops",
                                slug: "vr-ar-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "devops-workshops",
                                title: "DevOps Workshops",
                                slug: "dev-ops-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "3d-printing-and-additive-manufacturing-workshops",
                                title: "3D Printing and Additive Manufacturing Workshops",
                                slug: "prnt-add-mnf-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "mobile-app-development-workshops",
                                title: "Mobile App Development Workshops",
                                slug: "mob-app-dev-work",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "hardware-and-embedded-systems-workshops",
                                title: "Hardware and Embedded Systems Workshops",
                                slug: "hw-emb-sys-work",
                                titleSuffix: "Management Company in Delhi"
                            }
                        ]
                    },
                ]
            },
            {
                id: "Corporate Meetings",
                title: "Corporate Meetings",
                slug: "corp-meet",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "annual-general-meetings",
                        title: "Annual General Meetings (AGMs)",
                        slug: "ann-gen-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "public-company-agm",
                                title: "Public Company AGM",
                                slug: "pub-co-agm",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "private-company-agm",
                                title: "Private Company AGM",
                                slug: "pvt-co-agm",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "virtual-agm",
                                title: "Virtual AGM (Online AGM)",
                                slug: "vrt-agm",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "hybrid-agm",
                                title: "Hybrid AGM",
                                slug: "hyb-agm",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "extraordinary-general-meetings",
                                title: "Extraordinary General Meeting (EGM)",
                                slug: "egm",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sole-shareholder-agm",
                                title: "Sole Shareholder AGM",
                                slug: "sole-shr-agm",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "international-agm",
                                title: "International AGM",
                                slug: "intl-agm",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "investor-focused-agm",
                                title: "Investor-Focused AGM",
                                slug: "inv-fcsd-agm",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "employee-agm",
                                title: "Employee AGM",
                                slug: "emp-agm",
                                titleSuffix: "Management Company in Delhi"
                            },
                        ]
                    },
                    {
                        id: "board-meetings",
                        title: "Board Meetings",
                        slug: "brd-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "regular-board-meetings",
                                title: "Regular Board Meetings",
                                slug: "reg-brd-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "annual-board-meetings",
                                title: "Annual Board Meetings",
                                slug: "ann-brd-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "special-emergency-board-meetings",
                                title: "Special or Emergency Board Meetings",
                                slug: "spec-emg-brd-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "strategic-planning-meetings",
                                title: "Strategic Planning Meetings",
                                slug: "str-pln-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "committee-board-meetings",
                                title: "Committee Board Meetings",
                                slug: "comm-brd-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "informal-working-board-meetings",
                                title: "Informal or Working Board Meetings",
                                slug: "inf-wrk-brd-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            // {
                            //     id: "board-retreats",
                            //     title: "Board Retreats",
                            //     slug: "brd-rets",
                            //     titleSuffix: "Management Company in Delhi"
                            // },
                            {
                                id: "budget-financial-review-meetings",
                                title: "Budget and Financial Review Meetings",
                                slug: "bud-fin-rev-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "risk-management-meetings",
                                title: "Risk Management Meetings",
                                slug: "rsk-mgmt-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "performance-review-meetings",
                                title: "Performance Review Meetings",
                                slug: "perf-rev-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "shareholder-investor-board-meetings",
                                title: "Shareholder or Investor Board Meetings",
                                slug: "shr-inv-brd-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "ma-board-meetings",
                                title: "M & A (Merger and Acquisition) Board Meetings",
                                slug: "ma-brd-meet",
                                titleSuffix: "Management Company in Delhi"
                            }
                        ]
                    },
                    {
                        id: "team-meetings",
                        title: "Team Meetings",
                        slug: "tm-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "weekly-team-meetings",
                                title: "Weekly Team Meetings",
                                slug: "wkly-tm-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "standup-meetings",
                                title: "Stand-up Meetings (Daily Stand-ups)",
                                slug: "stnd-up-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "brainstorming-creative-meetings",
                                title: "Brainstorming or Creative Meetings",
                                slug: "brstg-cre-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "status-update-meetings",
                                title: "Status Update Meetings",
                                slug: "sts-upd-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "problem-solving-meetings",
                                title: "Problem-Solving Meetings",
                                slug: "prob-slv-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "retrospective-meetings",
                                title: "Retrospective Meetings",
                                slug: "rts-pct-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "one-on-one-meetings",
                                title: "One-on-One Meetings",
                                slug: "one-on-one-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "team-building-meetings",
                                title: "Team Building Meetings",
                                slug: "tm-bld-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "client-stakeholder-meetings",
                                title: "Client & Stakeholder Meetings",
                                slug: "clnt-stk-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "alignment-meetings",
                                title: "Alignment Meetings",
                                slug: "algn-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "feedback-meetings",
                                title: "Feedback Meetings",
                                slug: "fbck-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "training-or-development-meetings",
                                title: "Training or Development Meetings",
                                slug: "tra-dev-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "decision-making-meetings",
                                title: "Decision-Making Meetings",
                                slug: "dec-mak-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "operational-or-process-improvement-meetings",
                                title: "Operational or Process Improvement Meetings",
                                slug: "op-pro-imp-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "cross-functional-team-meetings",
                                title: "Cross-Functional Team Meetings",
                                slug: "crs-fun-tm-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                        ]
                    },
                    {
                        id: "stakeholder-meetings",
                        title: "Stakeholder Meetings",
                        slug: "stkhldr-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "kickoff-meetings",
                                title: "Kickoff Meetings",
                                slug: "kick-off-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "progress-update-meetings",
                                title: "Progress Update Meetings",
                                slug: "prog-upd-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "strategy-alignment-meetings",
                                title: "Strategy Alignment Meetings",
                                slug: "str-alg-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "problem-solving-or-issue-resolution-meetings",
                                title: "Problem-Solving or Issue Resolution Meetings",
                                slug: "psi-res-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "annual-or-quarterly-review-meetings",
                                title: "Annual or Quarterly Review Meetings",
                                slug: "ann-qtr-rev-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "stakeholder-feedback-meetings",
                                title: "Stakeholder Feedback Meetings",
                                slug: "stk-fdbk-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "advisory-board-meetings",
                                title: "Advisory Board Meetings",
                                slug: "adv-brd-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "crisis-management-meetings",
                                title: "Crisis Management Meetings",
                                slug: "cris-mgmt-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            // {
                            //     id: "investor-meetings",
                            //     title: "Investor Meetings",
                            //     slug: "inv-str-meet",
                            //     titleSuffix: "Management Company in Delhi"
                            // },
                            {
                                id: "client-review-meetings",
                                title: "Client Review Meetings",
                                slug: "clnt-rev-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "mergers-acquisitions-meetings",
                                title: "Mergers & Acquisitions (M&A) Stakeholder Meetings",
                                slug: "ma-stk-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "risk-management-meetings",
                                title: "Risk Management Meetings",
                                slug: "rsk-mgmt-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "change-management-meetings",
                                title: "Change Management Meetings",
                                slug: "chnge-mgmt-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                            // {
                            //     id: "contract-negotiation-meetings",
                            //     title: "Contract Negotiation Meetings",
                            //     slug: "ctr-neg-meet",
                            //     titleSuffix: "Management Company in Delhi"
                            // },
                            {
                                id: "sustainability-and-csr-meetings",
                                title: "Sustainability and Corporate Social Responsibility (CSR) Meetings",
                                slug: "sust-csr-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
                        ]
                    },
                    {
                        id: "sales-meetings",
                        title: "Sales Meetings",
                        slug: "sales-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "weekly-sales-meetings",
                                title: "Weekly Sales Meetings",
                                slug: "wkly-sles-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sales-strategy-meetings",
                                title: "Sales Strategy Meetings",
                                slug: "sles-strat-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sales-training-meetings",
                                title: "Sales Training Meetings",
                                slug: "sles-trn-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "lead-review-and-pipeline-meetings",
                                title: "Lead Review and Pipeline Meetings",
                                slug: "ld-rvw-ppl-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "client-presentation-preparation-meetings",
                                title: "Client Presentation Preparation Meetings",
                                slug: "clnt-pre-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "post-sales-review-meetings",
                                title: "Post-Sales Review Meetings",
                                slug: "pst-sles-rvw-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "quarterly-or-monthly-sales-review-meetings",
                                title: "Quarterly or Monthly Sales Review Meetings",
                                slug: "qms-rvw-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "event-proposal-and-bid-review-meetings",
                                title: "Event Proposal and Bid Review Meetings",
                                slug: "epb-rvw-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "client-relationship-management-crm-meetings",
                                title: "Client Relationship Management (CRM) Meetings",
                                slug: "clnt-crm-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sales-incentive-or-motivation-meetings",
                                title: "Sales Incentive or Motivation Meetings",
                                slug: "sles-inc-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cross-departmental-sales-meetings",
                                title: "Cross-Departmental Sales Meetings",
                                slug: "cro-dept-sles-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sales-forecasting-meetings",
                                title: "Sales Forecasting Meetings",
                                slug: "sles-for-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "target-account-key-client-strategy-meetings",
                                title: "Target Account/Key Client Strategy Meetings",
                                slug: "tak-clnt-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sales-performance-recognition-meetings",
                                title: "Sales Performance Recognition Meetings",
                                slug: "sles-perf-rec-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "competitor-analysis-meetings",
                                title: "Competitor Analysis Meetings",
                                slug: "comp-ana-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "client-meetings",
                        title: "Client Meetings",
                        slug: "clnt-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "initial-consultation-discovery-meetings",
                                title: "Initial Consultation & Discovery Meetings",
                                slug: "ini-con-dis-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "proposal-presentation-meetings",
                                title: "Proposal Presentation Meetings",
                                slug: "prop-pres-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "contract-negotiation-meetings",
                                title: "Contract Negotiation Meetings",
                                slug: "con-neg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "kickoff-meetings",
                                title: "Kickoff Meetings",
                                slug: "kik-off-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "status-update-and-progress-meetings",
                                title: "Status Update & Progress Meetings",
                                slug: "sts-upd-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "feedback-and-review-meetings",
                                title: "Feedback and Review Meetings",
                                slug: "feed-rev-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "problem-solving-and-issue-resolution-meetings",
                                title: "Problem-Solving/Issue Resolution Meetings",
                                slug: "prob-sol-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "strategic-planning-meetings",
                                title: "Strategic Planning Meetings",
                                slug: "strg-pln-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "quarterly-annual-business-review-qbr-abr-meetings",
                                title: "Quarterly and Annual Business Review Meetings",
                                slug: "qbr-abr-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "end-of-project-review-meetings",
                                title: "End-of-Project Review Meetings",
                                slug: "end-pro-rev-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "relationship-account-management-meetings",
                                title: "Relationship & Account Management Meetings",
                                slug: "rel-acc-man-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "client-escalation-meetings",
                                title: "Client Escalation Meetings",
                                slug: "clnt-escal-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "collaborative-brainstorming-or-workshop-meetings",
                                title: "Collaborative Brainstorming or Workshop Meetings",
                                slug: "col-brn-wrk-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "site-visit-meetings",
                                title: "Site Visit Meetings",
                                slug: "site-visit-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "contract-renewal-meetings",
                                title: "Contract Renewal Meetings",
                                slug: "cont-rnwl-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "partnership-and-co-marketing-meetings",
                                title: "Partnership & Co-Marketing Meetings",
                                slug: "prt-co-mrk-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "staff-employee-meetings",
                        title: "Staff & Employee Meetings",
                        slug: "staff-emp-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "department-meetings",
                                title: "Department Meetings",
                                slug: "dept-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "one-on-one-meetings",
                                title: "One-on-One Meetings",
                                slug: "one-on-one-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "all-hands-meetings",
                                title: "All-Hands Meetings (Company-wide Meetings)",
                                slug: "all-hnds-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "town-hall-meetings",
                                title: "Town Hall Meetings",
                                slug: "twn-hall-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "brainstorming-idea-generation-meetings",
                                title: "Brainstorming or Idea Generation Meetings",
                                slug: "brns-ida-gen-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "staff-training-development-meetings",
                                title: "Staff Training and Development Meetings",
                                slug: "stff-tra-dev-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "performance-review-meetings",
                                title: "Performance Review Meetings",
                                slug: "perf-rvw-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-feedback-meetings",
                                title: "Employee Feedback Meetings",
                                slug: "emp-fdbk-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-management-meetings",
                                title: "Crisis or Emergency Meetings",
                                slug: "crs-man-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-engagement-meetings",
                                title: "Employee Engagement Meetings",
                                slug: "emp-eng-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cross-departmental-collaboration-meetings",
                                title: "Cross-Departmental Collaboration Meetings",
                                slug: "crss-dept-coll-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "budget-financial-meetings",
                                title: "Budget & Financial Meetings",
                                slug: "bgt-fin-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "health-safety-compliance-meetings",
                                title: "Health & Safety or Compliance Meetings",
                                slug: "hlth-sft-com-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "exit-interviews-offboarding-meetings",
                                title: "Exit Interviews or Offboarding Meetings",
                                slug: "exit-off-brd-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-recognition-meetings",
                                title: "Employee Recognition Meetings",
                                slug: "emp-rec-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "strategy-meetings",
                        title: "Strategy Meetings",
                        slug: "strg-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "annual-strategy-meetings",
                                title: "Annual Strategy Meetings",
                                slug: "ann-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "quarterly-strategy-meetings",
                                title: "Quarterly Strategy Meetings",
                                slug: "qrtr-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "executive-strategy-meetings",
                                title: "Executive Strategy Meetings",
                                slug: "exe-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "swot-analysis-meetings",
                                title: "SWOT Analysis Meetings",
                                slug: "swot-anls-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "marketing-strategy-meetings",
                                title: "Marketing Strategy Meetings:",
                                slug: "mrkt-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-strategy-meetings",
                                title: "Product Strategy Meetings",
                                slug: "prod-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "growth-strategy-meetings",
                                title: "Growth Strategy Meetings",
                                slug: "grwth-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "innovation-strategy-meetings",
                                title: "Innovation Strategy Meetings",
                                slug: "inno-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "financial-strategy-meetings",
                                title: "Financial Strategy Meetings",
                                slug: "fncl-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "operational-strategy-meetings",
                                title: "Operational Strategy Meetings",
                                slug: "oprl-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-management-strategy-meetings",
                                title: "Crisis Management Strategy Meetings",
                                slug: "crs-mgmt-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "change-management-strategy-meetings",
                                title: "Change Management Strategy Meetings",
                                slug: "chnge-mgmt-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "mergers-and-acquisitions-ma-strategy-meetings",
                                title: "Mergers and Acquisitions (M&A) Strategy Meetings",
                                slug: "ma-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-experience-cx-strategy-meetings",
                                title: "Customer Experience (CX) Strategy Meetings",
                                slug: "cx-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "risk-management-strategy-meetings",
                                title: "Risk Management Strategy Meetings",
                                slug: "rsk-mgmt-strg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "talent-strategy-meetings",
                        title: "Talent Strategy Meetings",
                        slug: "tlnt-strg-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "brainstorming-workshops",
                                title: "Brainstorming Workshops",
                                slug: "brn-str-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "team-building-workshops",
                                title: "Team-building Workshops",
                                slug: "tm-bld-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "problem-solving-workshops",
                                title: "Problem-Solving Workshops",
                                slug: "prblm-slv-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "strategic-planning-workshops",
                                title: "Strategic Planning Workshops",
                                slug: "stra-pln-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "innovation-workshops",
                                title: "Innovation Workshops",
                                slug: "innov-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "conflict-resolution-workshops",
                                title: "Conflict Resolution Workshops",
                                slug: "cnflct-res-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            // {
                            //     id: "change-management-workshops",
                            //     title: "Change Management Workshops",
                            //     slug: "chnge-man-wrks",
                            //     titleSuffix: "Management Company in Delhi",
                            // },
                            {
                                id: "cultural-competency-workshops",
                                title: "Cultural Competency Workshops",
                                slug: "cul-comp-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sales-workshops",
                                title: "Sales Workshops",
                                slug: "sal-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-service-workshops",
                                title: "Customer Service Workshops",
                                slug: "cus-srv-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "time-management-workshops",
                                title: "Time Management Workshops",
                                slug: "time-man-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "performance-management-workshops",
                                title: "Performance Management Workshops",
                                slug: "perf-man-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "wellness-and-stress-management-workshops",
                                title: "Wellness and Stress Management Workshops",
                                slug: "well-strs-man-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "compliance-and-regulatory-workshops",
                                title: "Compliance and Regulatory Workshops",
                                slug: "comp-reg-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "digital-transformation-workshops",
                                title: "Digital Transformation Workshops",
                                slug: "dig-trns-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cross-functional-collaboration-workshops",
                                title: "Cross-functional Collaboration Workshops",
                                slug: "crs-fun-coll-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "feedback-and-evaluation-workshops",
                                title: "Feedback and Evaluation Workshops",
                                slug: "fbk-eval-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sustainability-workshops",
                                title: "Sustainability Workshops",
                                slug: "sust-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "training-meetings",
                        title: "Training Meetings",
                        slug: "tra-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "onboarding-training-meetings",
                                title: "Onboarding Training Meetings",
                                slug: "onbrd-tra-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-or-service-training",
                                title: "Product or Service Training",
                                slug: "prod-svc-tra-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "compliance-training",
                                title: "Compliance Training",
                                slug: "comp-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "soft-skills-training",
                                title: "Soft Skills Training",
                                slug: "soft-skl-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "leadership-and-management-training",
                                title: "Leadership and Management Training",
                                slug: "ldr-mngmt-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sales-training",
                                title: "Sales Training",
                                slug: "sales-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-service-training",
                                title: "Customer Service Training",
                                slug: "cust-svc-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "time-management-and-productivity-training",
                                title: "Time Management and Productivity Training",
                                slug: "tme-mngmt-prod-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "conflict-resolution-training",
                                title: "Conflict Resolution Training",
                                slug: "conf-res-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "diversity-and-inclusion-training",
                                title: "Diversity and Inclusion Training",
                                slug: "div-inc-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "health-and-safety-training",
                                title: "Health and Safety Training",
                                slug: "hlth-sfty-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "teamwork-and-collaboration-training",
                                title: "Teamwork and Collaboration Training",
                                slug: "tm-coll-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "change-management-training",
                                title: "Change Management Training",
                                slug: "chnge-man-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "mentoring-and-coaching-training",
                                title: "Mentorship and Coaching Training",
                                slug: "ment-coch-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-training",
                                title: "Virtual Training",
                                slug: "virt-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-management-training",
                                title: "Crisis Management Training",
                                slug: "cris-man-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "productivity-tools-training",
                                title: "Productivity Tools Training",
                                slug: "prdty-tls-tra",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "project-kickoff-meetings",
                        title: "Project Kickoff Meetings",
                        slug: "proj-kick-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "internal-project-kickoff-meeting",
                                title: "Internal Project Kickoff Meeting",
                                slug: "int-prj-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "client-facing-project-kickoff-meeting",
                                title: "Client-Facing Project Kickoff Meeting",
                                slug: "clnt-fac-prj-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cross-departmental-kickoff-meeting",
                                title: "Cross-Departmental Kickoff Meeting",
                                slug: "crss-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "stakeholder-kickoff-meeting",
                                title: "Stakeholder Kickoff Meeting",
                                slug: "stk-hldr-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "remote-virtual-project-kickoff-meeting",
                                title: "Remote & Virtual Project Kickoff Meeting",
                                slug: "rav-prj-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "agile-iterative-project-kickoff-meeting",
                                title: "Agile & Iterative Project Kickoff Meeting",
                                slug: "agi-prj-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "strategic-kickoff-meeting",
                                title: "Strategic Kickoff Meeting",
                                slug: "stra-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "high-level-executive-kickoff-meeting",
                                title: "High-Level Executive Kickoff Meeting",
                                slug: "hle-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "risk-and-issues-kickoff-meeting",
                                title: "Risk and Issues Kickoff Meeting",
                                slug: "rski-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "change-management-kickoff-meeting",
                                title: "Change Management Kickoff Meeting",
                                slug: "chng-mngmt-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "legal-contract-kickoff-meeting",
                                title: "Legal and Contract Kickoff Meeting",
                                slug: "lgl-con-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "post-kickoff-alignment-meeting",
                                title: "Post-Kickoff Alignment Meeting",
                                slug: "post-kik-alg-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "training-skill-building-kickoff-meeting",
                                title: "Training or Skill-Building Kickoff Meeting",
                                slug: "trs-bld-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "agile-sprint-kickoff-meeting",
                                title: "Agile Sprint Kickoff Meeting",
                                slug: "agl-sprnt-kik-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "product-launch-meetings",
                        title: "Product Launch Meetings",
                        slug: "prd-lan-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "internal-product-launch-meeting",
                                title: "Internal Product Launch Meeting",
                                slug: "int-prd-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "marketing-product-launch-meeting",
                                title: "Marketing Product Launch Meeting",
                                slug: "mrk-prd-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sales-product-launch-meeting",
                                title: "Sales Product Launch Meeting",
                                slug: "sls-prd-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-support-product-launch-meeting",
                                title: "Customer Support Product Launch Meeting",
                                slug: "csp-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "executive-product-launch-meeting",
                                title: "Executive Product Launch Meeting",
                                slug: "exe-prd-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cross-functional-product-launch-meeting",
                                title: "Cross-Functional Product Launch Meeting",
                                slug: "cfp-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "press-or-media-product-launch-meeting",
                                title: "Product Launch Briefing Meeting (Press or Media)",
                                slug: "prs-mdia-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "investor-product-launch-meeting",
                                title: "Investor and Product Launch Meeting",
                                slug: "inv-prd-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-launch-demo-or-showcase-event",
                                title: "Product Launch Demo or Showcase Event",
                                slug: "prt-prd-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "training-and-enablement-product-launch-meeting",
                                title: "Training and Enablement Product Launch Meeting",
                                slug: "trn-prd-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "partner-product-launch-meeting",
                                title: "Partner Product Launch Meeting",
                                slug: "prt-prd-lanc-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "post-launch-review-meeting",
                                title: "Post-Launch Review Meeting",
                                slug: "pst-lan-rev-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "vip-product-launch-meeting",
                                title: "VIP - Product Launch Event",
                                slug: "vip-prd-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "feedback-iteration-product-launch-meeting",
                                title: "Feedback and Iteration Meeting (Post-Launch)",
                                slug: "fip-lan-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "crisis-management-meetings",
                        title: "Crisis Management Meetings",
                        slug: "cris-man-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "crisis-response-meeting",
                                title: "Crisis Response Meeting",
                                slug: "cris-res-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-communication-meeting",
                                title: "Crisis Communication Meeting",
                                slug: "cris-com-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-leadership-meeting",
                                title: "Crisis Leadership Meeting",
                                slug: "cris-ldr-ship-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "emergency-operations-meeting",
                                title: "Emergency Operations Meeting",
                                slug: "emerg-op-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "incident-management-meeting",
                                title: "Incident Management Meeting",
                                slug: "inc-man-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "post-crisis-evaluation-meeting",
                                title: "Post-Crisis Evaluation Meeting",
                                slug: "post-crs-eval-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-recovery-meeting",
                                title: "Crisis Recovery Meeting",
                                slug: "cris-rec-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-risk-assessment-meeting",
                                title: "Crisis Risk Assessment Meeting",
                                slug: "crs-rsk-asse-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "legal-compliance-crisis-meeting",
                                title: "Legal & Compliance Crisis Meeting",
                                slug: "leg-com-crs-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "stakeholder-crisis-meeting",
                                title: "Stakeholder Crisis Meeting",
                                slug: "stk-cris-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "media-relations-crisis-meeting",
                                title: "Media Relations Crisis Meeting",
                                slug: "med-rel-crs-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-training-and-simulation-meeting",
                                title: "Crisis Training and Simulation Meeting",
                                slug: "cris-trn-sim-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "investor-meetings",
                        title: "Investor Meetings",
                        slug: "invst-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "annual-general-meeting-agm-for-investors",
                                title: "Annual General Meeting (AGM) for Investors",
                                slug: "ann-gen-meet-inv",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "quarterly-earnings-call",
                                title: "Quarterly Earnings Call",
                                slug: "qtr-ern-call",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "private-investor-meetings",
                                title: "Private Investor Meetings",
                                slug: "pvt-inv-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "investor-roadshows-and-presentations",
                                title: "Investor Roadshows and Presentations",
                                slug: "inv-road-pres",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "board-of-directors-meeting-with-investors",
                                title: "Board of Directors Meeting with Investors",
                                slug: "brd-dir-meet-inv",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "investor-conference-calls",
                                title: "Investor Conference Calls",
                                slug: "inv-conf-call",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "private-equity-or-venture-capital-investor-meetings",
                                title: "Private Equity or Venture Capital Investor Meetings",
                                slug: "peb-cap-inv-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "special-investor-presentations",
                                title: "Special Investor Presentation (e.g., Mergers & Acquisitions, IPO)",
                                slug: "spec-inv-pres",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "investor-feedback-sessions",
                                title: "Investor Feedback Sessions",
                                slug: "inv-feed-sess",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "investor-relations-ir-event-or-meetings",
                                title: "Investor Relations (IR) Event or Meetings",
                                slug: "iri-evnt-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "debt-or-bondholder-investor-meetings",
                                title: "Debt or Bondholder Investor Meetings",
                                slug: "deb-bon-inv-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "follow-up-investor-meetings",
                                title: "Follow-up Investor Meetings",
                                slug: "foll-up-inv-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "investor-strategy-sessions",
                                title: "Investor Strategy Sessions",
                                slug: "inv-stra-sess",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "investor-networking-events",
                                title: "Investor Networking Events",
                                slug: "inv-net-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "annual-investor-day",
                                title: "Annual Investor Day",
                                slug: "ann-inv-day",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "networking-meetings",
                        title: "Networking Meetings",
                        slug: "net-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "industry-networking-meetings",
                                title: "Industry Networking Meetings",
                                slug: "ind-net-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "business-networking-breakfast-lunch-dinner",
                                title: "Business Networking Breakfast - Lunch - Dinner",
                                slug: "bnb-lun-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "speed-networking-sessions",
                                title: "Speed Networking Sessions",
                                slug: "spd-net-sess",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "professional-association-networking-events",
                                title: "Professional Association Networking Events",
                                slug: "prof-ass-net-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "corporate-networking-events",
                                title: "Corporate Networking Events",
                                slug: "cor-net-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "alumni-networking-meetings",
                                title: "Alumni Networking Meetings",
                                slug: "alm-net-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "conference-networking-sessions",
                                title: "Conference Networking Sessions",
                                slug: "conf-net-sess",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "trade-show-networking-events",
                                title: "Trade Show Networking Events",
                                slug: "trd-shw-net-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "mentorship-networking-meetings",
                                title: "Mentorship Networking Meetings",
                                slug: "mnt-net-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cross-company-networking-events",
                                title: "Cross-Company Networking Events",
                                slug: "crs-com-net-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "investor-networking-meetings",
                                title: "Investor Networking Meetings",
                                slug: "inv-net-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-networking-meetings",
                                title: "Virtual Networking Meetings",
                                slug: "virt-net-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "executive-networking-roundtables",
                                title: "Executive Networking Roundtables",
                                slug: "exe-net-rnd-tbls",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "charter-or-fundraising-networking-events",
                                title: "Charity or Fundraising Networking Events",
                                slug: "chr-fnd-net-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "innovation-and-startup-networking-events",
                                title: "Innovation and Startup Networking Events",
                                slug: "inn-strt-net-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "executive-committee-meetings",
                        title: "Executive Committee Meetings",
                        slug: "exe-com-meet",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "strategic-planning-meetings",
                                title: "Strategic Planning Meetings",
                                slug: "stra-pln-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "budgeting-and-financial-planning-meetings",
                                title: "Budgeting and Financial Planning Meetings",
                                slug: "bud-fin-pln-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-management-meetings",
                                title: "Crisis Management Meetings",
                                slug: "cri-man-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "board-reporting-and-updates-meetings",
                                title: "Board Reporting and Updates Meetings",
                                slug: "brd-rpt-upd-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "performance-review-meetings",
                                title: "Performance Review Meetings",
                                slug: "per-rvw-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "mergers-and-acquisitions-ma-meetings",
                                title: "Mergers and Acquisitions (M&A) Meetings",
                                slug: "mer-acq-ma-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "risk-management-and-compliance-meetings",
                                title: "Risk Management and Compliance Meetings",
                                slug: "risk-com-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "leadership-development-and-succession-planning-meetings",
                                title: "Leadership Development and Succession Planning Meetings",
                                slug: "lds-pln-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "innovation-and-product-development-meetings",
                                title: "Innovation and Product Development Meetings",
                                slug: "inn-pro-dev-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "operational-efficiency-and-improvement-meetings",
                                title: "Operational Efficiency and Improvement Meetings",
                                slug: "opr-eff-impr-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-engagement-and-corporate-culture-meetings",
                                title: "Employee Engagement and Corporate Culture Meetings",
                                slug: "eec-cul-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "investor-relations-and-communication-meetings",
                                title: "Investor Relations and Communication Meetings",
                                slug: "inv-rel-com-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "global-expansion-and-market-entry-meetings",
                                title: "Global Expansion and Market Entry Meetings",
                                slug: "gem-ntry-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sustainability-and-corporate-social-responsibility-csr-meetings",
                                title: "Sustainability and Corporate Social Responsibility (CSR) Meetings",
                                slug: "sus-csr-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "corporate-governance-meetings",
                                title: "Corporate Governance Meetings",
                                slug: "cor-gov-meet",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "focus-groups",
                        title: "Focus Groups",
                        slug: "foc-grps",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "product-feedback-focus-groups",
                                title: "Product Feedback Focus Groups",
                                slug: "prd-fdk-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "market-research-focus-groups",
                                title: "Market Research Focus Groups",
                                slug: "mrk-rsrch-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-satisfaction-focus-groups",
                                title: "Customer Satisfaction Focus Groups",
                                slug: "cus-sat-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "concept-testing-focus-groups",
                                title: "Concept Testing Focus Groups",
                                slug: "cnpt-tst-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "brand-perception-focus-groups",
                                title: "Brand Perception Focus Groups",
                                slug: "brd-per-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "usability-testing-focus-groups",
                                title: "Usability Testing Focus Groups",
                                slug: "usa-tst-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "ad-testing-focus-groups",
                                title: "Ad Testing Focus Groups",
                                slug: "ad-tst-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-focus-groups",
                                title: "Employee Focus Groups",
                                slug: "emp-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-journey-focus-groups",
                                title: "Customer Journey Focus Groups",
                                slug: "cus-jrn-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "diversity-and-inclusion-focus-groups",
                                title: "Diversity and Inclusion Focus Groups",
                                slug: "div-inc-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "trend-analysis-focus-groups",
                                title: "Trend Analysis Focus Groups",
                                slug: "trd-ana-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "community-or-stakeholder-focus-groups",
                                title: "Community or Stakeholder Focus Groups",
                                slug: "cmn-stk-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "pricing-strategy-focus-groups",
                                title: "Pricing Strategy Focus Groups",
                                slug: "prd-str-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "consumer-behavior-focus-groups",
                                title: "Consumer Behavior Focus Groups",
                                slug: "csm-bhv-foc-grps",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    }
                ]
            },
            {
                id: "Team-Building Events",
                title: "Team-Building Events",
                slug: "tm-bld-evt",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "outdoor-retreats",
                        title: "Outdoor Retreats",
                        slug: "out-ret",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "adventure-based-retreats",
                                title: "Adventure-Based Retreats",
                                slug: "adv-bsd-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "survival-skills-retreats",
                                title: "Survival Skills Retreats",
                                slug: "surv-skll-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "wellness-retreats",
                                title: "Wellness Retreats",
                                slug: "well-ness-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "corporate-challenge-retreats",
                                title: "Corporate Challenge Retreats",
                                slug: "cor-chll-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "environmental-sustainability-retreats",
                                title: "Environmental or Sustainability Retreats",
                                slug: "env-sus-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "creative-innovation-retreats",
                                title: "Creative and Innovation Retreats",
                                slug: "cre-inn-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "mindfulness-reflection-retreats",
                                title: "Mindfulness and Reflection Retreats",
                                slug: "mind-refl-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "team-bonding-retreats",
                                title: "Team Bonding Retreats",
                                slug: "tm-bond-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "adventure-therapy-retreats",
                                title: "Adventure Therapy Retreats",
                                slug: "adv-ther-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sports-and-outdoor-competition-retreats",
                                title: "Sports and Outdoor Competition Retreats",
                                slug: "spr-out-com-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cultural-exploration-retreats",
                                title: "Cultural Exploration Retreats",
                                slug: "cul-expl-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "campfire-and-storytelling-retreats",
                                title: "Campfire and Storytelling Retreats",
                                slug: "camp-stry-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "yoga-and-outdoor-retreats",
                                title: "Yoga and Outdoor Retreats",
                                slug: "yog-out-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "escape-room-challenges",
                        title: "Escape Room Challenges",
                        slug: "esc-rom-chal",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "physical-escape-room-challenges",
                                title: "Physical Escape Room Challenges",
                                slug: "phys-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "themed-escape-room-challenges",
                                title: "Themed Escape Room Challenges",
                                slug: "thmd-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-escape-room-challenges",
                                title: "Virtual Escape Room Challenges",
                                slug: "vir-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "outdoor-escape-room-challenges",
                                title: "Outdoor Escape Room Challenges",
                                slug: "out-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "puzzle-based-escape-room-challenges",
                                title: "Puzzle-Based Escape Room Challenges",
                                slug: "puz-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "mission-based-escape-room-challenges",
                                title: "Mission-Based Escape Room Challenges",
                                slug: "mis-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "time-based-escape-room-challenges",
                                title: "Time-Based Escape Room Challenges",
                                slug: "tim-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "collaborative-escape-room-challenges",
                                title: "Collaborative Escape Room Challenges",
                                slug: "coll-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "themed-scavenger-hunt-escape-rooms",
                                title: "Themed Scavenger Hunt Escape Rooms",
                                slug: "tsh-esc-rom",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "escape-room-challenges-with-role-play",
                                title: "Escape Room with Role Play",
                                slug: "rol-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "escape-room-challenges-with-problem-solving-scenarios",
                                title: "Escape Room Challenges with Problem-Solving Scenarios",
                                slug: "pse-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "hybrid-escape-room-challenges",
                                title: "Hybrid Escape Room Challenges",
                                slug: "hyb-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "leadership-focused-escape-room-challenges",
                                title: "Leadership-Focused Escape Rooms",
                                slug: "ldr-esc-rom-chll",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "mystery-detective-escape-rooms",
                                title: "Mystery & Detective Escape Rooms",
                                slug: "mys-det-esc-rom",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "group-challenges",
                        title: "Group Challenges",
                        slug: "grp-chal",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "problem-solving-challenges",
                                title: "Problem-Solving Challenges",
                                slug: "prb-sol-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "trust-building-challenges",
                                title: "Trust-Building Challenges",
                                slug: "trst-bld-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "physical-challenges",
                                title: "Physical Challenges",
                                slug: "phys-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "creative-challenges",
                                title: "Creative Challenges",
                                slug: "crat-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "survival-challenges",
                                title: "Survival Challenges",
                                slug: "srvl-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "scavenger-hunts",
                                title: "Scavenger Hunts",
                                slug: "scav-hunts",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "communication-challenges",
                                title: "Communication Challenges",
                                slug: "comm-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "leadership-development-challenges",
                                title: "Leadership Development Challenges",
                                slug: "ldr-dev-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "role-specific-challenges",
                                title: "Role-Specific Challenges",
                                slug: "rl-spc-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "innovation-and-design-challenges",
                                title: "Innovation and Design Challenges",
                                slug: "inn-dsg-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cultural-awareness-challenges",
                                title: "Cultural Awareness Challenges",
                                slug: "cul-awr-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "conflict-resolution-challenges",
                                title: "Conflict Resolution Challenges",
                                slug: "cnfl-res-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "time-management-challenges",
                                title: "Time Management Challenges",
                                slug: "tm-mng-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "charity-or-social-good-challenges",
                                title: "Charity or Social Good Challenges",
                                slug: "chr-soc-god-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "escape-room-challenges",
                                title: "Escape Room Challenges (Group-Based)",
                                slug: "esc-rm-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "competitive-challenges",
                                title: "Competitive Challenges",
                                slug: "comp-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "team-strategy-challenges",
                                title: "Team Strategy Challenges",
                                slug: "tm-str-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "volunteer-community-service-events",
                        title: "Workshops and Collaborative Tasks",
                        slug: "wrk-coll-tsks",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "creative-problem-solving-workshops",
                                title: "Creative Problem-Solving Workshops",
                                slug: "cre-pro-sol-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "communication-and-active-listening-workshops",
                                title: "Communication and Active Listening Workshops",
                                slug: "comm-act-lst-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "trust-building-workshops",
                                title: "Trust-Building Workshops",
                                slug: "trs-bld-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "team-collaboration-workshops",
                                title: "Team Collaboration Workshops",
                                slug: "tm-coll-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "innovation-and-creativity-workshops",
                                title: "Innovation and Creativity Workshops",
                                slug: "inn-cre-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "outdoor-adventure-challenges",
                                title: "Outdoor Adventure Challenges",
                                slug: "out-adv-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "role-playing-and-scenario-based-workshops",
                                title: "Role-Playing and Scenario-Based Workshops",
                                slug: "rps-bas-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "team-building-games-and-icebreakers",
                                title: "Team Building Games and Icebreakers",
                                slug: "tm-bld-gms-ice",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "project-management-workshops",
                                title: "Project Management Workshops",
                                slug: "proj-mngt-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "decision-making-and-delegation-workshops",
                                title: "Decision-Making and Delegation Workshops",
                                slug: "dec-mak-del-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cultural-awareness-and-inclusion-workshops",
                                title: "Cultural Awareness and Inclusion Workshops",
                                slug: "cul-awa-inc-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "fitness-and-wellbeing-challenges",
                                title: "Fitness and Wellbeing Challenges",
                                slug: "fit-wel-chal",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-service-and-client-interaction-workshops",
                                title: "Customer Service and Client Interaction Workshops",
                                slug: "csc-int-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "feedback-and-reflection-workshops",
                                title: "Feedback and Reflection Workshops",
                                slug: "fdbk-rfl-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "strategic-planning-workshops",
                                title: "Strategic Planning Workshops",
                                slug: "str-pln-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                ]
            },
            {
                id: "Product Launches",
                title: "Product Launches",
                slug: "prd-lan",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "press-conferences",
                        title: "Press Conferences",
                        slug: "prs-conf",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "traditional-press-conferences",
                                title: "Traditional Press Conference",
                                slug: "trd-prs-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-press-conferences",
                                title: "Virtual Press Conference",
                                slug: "vrt-prs-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "hybrid-press-conferences",
                                title: "Hybrid Press Conference",
                                slug: "hyb-prs-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-showcase-press-conferences",
                                title: "Product Showcase Press Conference",
                                slug: "prd-shw-prs-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "media-briefings-roundtable-press-conferences",
                                title: "Media Briefing or Roundtable Press Conference",
                                slug: "med-brf-rt-prs-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "global-press-conferences",
                                title: "Global Press Conference",
                                slug: "glb-prs-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "influencer-social-media-press-conferences",
                                title: "Influencer or Social Media Press Conference",
                                slug: "ism-prs-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "press-conferences-with-live-audience",
                                title: "Press Conference with a Live Audience",
                                slug: "prs-conf-liv-aud",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "press-conferences-with-panel-discussion",
                                title: "Press Conference with Panel Discussion",
                                slug: "prs-conf-pl-disc",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "product-demos",
                        title: "Product Demos",
                        slug: "prd-dmo",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "live-product-demonstrations",
                                title: "Live Product Demonstrations",
                                slug: "liv-prd-dmo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "pre-recorded-product-demonstrations",
                                title: "Pre-Recorded Product Demonstrations",
                                slug: "pre-rec-prd-dmo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "interactive-product-demos",
                                title: "Interactive Product Demos",
                                slug: "int-prd-dmo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "hands-on-demo-stations",
                                title: "Hands-On Demo Stations",
                                slug: "hnd-ons-dmo-sta",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "webinars-or-online-product-demos",
                                title: "Webinars or Online Product Demos",
                                slug: "web-on-prd-dmo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "trade-show-product-demos",
                                title: "Trade Show Product Demos",
                                slug: "trd-shw-prd-dmo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "influencer-or-social-media-product-demos",
                                title: "Influencer or Social Media Product Demos",
                                slug: "ism-prd-dmo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-reality-vr-or-augmented-reality-ar-demos",
                                title: "Virtual Reality (VR) or Augmented Reality (AR) Demos",
                                slug: "vir-rea-vr-ar-dmo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-testimonial-demos",
                                title: "Customer Testimonial Demos",
                                slug: "cust-tst-dmo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-demo-with-expert-panel",
                                title: "Product Demo with Expert Panel",
                                slug: "pdw-exp-pnl",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "interactive-product-demo-contests",
                                title: "Interactive Product Demo Contests",
                                slug: "int-prd-dmo-con",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "exclusive-launch-events",
                        title: "Exclusive Launch Events",
                        slug: "exc-lan-evt",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "vip-invitation-only-launch-events",
                                title: "VIP Invitation-Only Launch Events",
                                slug: "vio-lan-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "private-media-events",
                                title: "Private Media Events",
                                slug: "pvt-med-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "influencer-and-celebrity-led-launch-events",
                                title: "Influencer and Celebrity-Led Launch Events",
                                slug: "inf-clb-lan-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "private-gala-dinner-or-cocktail-events",
                                title: "Private Gala Dinner or Cocktail Events",
                                slug: "pgd-or-cock-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "pop-up-experience-or-private-showroom",
                                title: "Pop-Up Experience or Private Showroom",
                                slug: "pop-up-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-loyalty-and-exclusive-club-events",
                                title: "Customer Loyalty and Exclusive Club Events",
                                slug: "cst-loy-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "exclusive-online-launch-events",
                                title: "Exclusive Online Launch Events",
                                slug: "exc-onl-lan-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "brand-ambassador-launch-events",
                                title: "Brand Ambassador Launch Events",
                                slug: "brd-amb-lan-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "press-and-industry-leader-preview-events",
                                title: "Press and Industry Leader Preview Events",
                                slug: "prs-ind-lan-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "virtual-launch-events",
                        title: "Virtual Launch Events",
                        slug: "virt-lan-evt",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "live-streamed-product-launch-events",
                                title: "Live Streamed Product Launch Events",
                                slug: "liv-str-lan-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "webinar-product-launch-events",
                                title: "Webinar Product Launch Events",
                                slug: "web-lan-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-trade-show-or-exhibitions",
                                title: "Virtual Trade Show or Exhibitions",
                                slug: "vrt-trd-shw-exh",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-product-unboxing-events",
                                title: "Virtual Product Unboxing Events",
                                slug: "vrt-pro-unb-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-influencer-launch-events",
                                title: "Virtual Influencer Launch Events",
                                slug: "vrt-inf-lan-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-product-launch-party",
                                title: "Virtual Product Launch Party",
                                slug: "vrt-pro-lan-prty",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-roundtable-or-panel-discussion",
                                title: "Virtual Roundtable or Panel Discussion",
                                slug: "vrt-rtp-dsc",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-interactive-experiences",
                                title: "Virtual Interactive Experiences",
                                slug: "vrt-int-exp",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "on-demand-product-launch-events",
                                title: "On-Demand Product Launch Events",
                                slug: "vrt-on-dln-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    }
                ]
            },
            {
                id: "Corporate Social Responsibility (CSR) Events",
                title: "Corporate Social Responsibility (CSR) Events",
                slug: "csr-evt",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "charity-fundraisers",
                        title: "Charity Fundraisers",
                        slug: "char-fun",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "gala-dinners",
                                title: "Gala Dinners",
                                slug: "gala-din",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "charity-walks-runs-and-marathons",
                                title: "Charity Walks, Runs, and Marathons",
                                slug: "chr-wlk-rns-mrn",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "charity-auctions",
                                title: "Charity Auctions",
                                slug: "chr-auc",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "benefit-concerts-and-performances",
                                title: "Benefit Concerts and Performances",
                                slug: "bnf-con-per",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "charity-raffles",
                                title: "Charity Raffles",
                                slug: "chr-rffles",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "volunteer-fundraisers",
                                title: "Volunteer Fundraisers",
                                slug: "vol-fun",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "corporate-social-responsibility",
                                title: "Corporate Social Responsibility (CSR) Challenges",
                                slug: "csr-chal",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "charity-dinners-or-luncheons",
                                title: "Charity Dinners or Luncheons",
                                slug: "chr-din-lun",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "online-charity-campaigns",
                                title: "Online Charity Campaigns",
                                slug: "chr-on-camp",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "corporate-sponsorship-fundraisers",
                                title: "Corporate Sponsorship Fundraisers",
                                slug: "csr-fun",
                                titleSuffix: "Management Company in Delhi"
                            },
                        ]
                    },
                    {
                        id: "volunteer-days",
                        title: "Volunteering Days",
                        slug: "vol-day",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "community-service-days",
                                title: "Community Service Days",
                                slug: "comm-srv-day",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "skills-based-volunteering-days",
                                title: "Skills-Based Volunteering Days",
                                slug: "skil-vol-day",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "charity-event-volunteering",
                                title: "Charity Event Volunteering",
                                slug: "chr-evt-vol",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "team-building-volunteering-days",
                                title: "Team-Building Volunteering Days",
                                slug: "tm-bld-vol-day",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "environmental-volunteering-days",
                                title: "Environmental Volunteering Days",
                                slug: "env-vol-day",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "disaster-relief-volunteering-days",
                                title: "Disaster Relief Volunteering Days",
                                slug: "dis-rel-vol-day",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "virtual-volunteering-days",
                                title: "Virtual Volunteering Days",
                                slug: "vrt-vol-day",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "employee-volunteer-programs-evps",
                                title: "Employee Volunteer Programs (EVPs)",
                                slug: "emp-vol-prg",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "fundraising-volunteering-days",
                                title: "Fundraising Volunteering Days",
                                slug: "fund-vol-day",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "health-and-wellness-volunteering-days",
                                title: "Health and Wellness Volunteering Days",
                                slug: "hlth-wel-vol-day",
                                titleSuffix: "Management Company in Delhi"
                            },
                        ]
                    },
                    {
                        id: "sustainability-events",
                        title: "Sustainability Events",
                        slug: "sust-evt",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "eco-friendly-product-launches",
                                title: "Eco-Friendly Product Launches",
                                slug: "eco-prd-lan",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "green-conferences-and-seminars",
                                title: "Green Conferences and Seminars",
                                slug: "grn-con-sem",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "eco-friendly-trade-shows-and-expos",
                                title: "Eco-Friendly Trade Shows and Expos",
                                slug: "eco-trd-shw-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sustainable-team-building-events",
                                title: "Sustainable Team-Building Events",
                                slug: "sus-tm-bld-evt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sustainable-corporate-retreats",
                                title: "Sustainable Corporate Retreats",
                                slug: "sus-corp-rtr",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "corporate-sustainability-awards",
                                title: "Corporate Sustainability Awards",
                                slug: "crp-sus-awrds",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sustainability-workshops-and-trainings",
                                title: "Sustainability Workshops and Trainings",
                                slug: "sus-wrk-trn",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sustainability-volunteer-days",
                                title: "Sustainability Volunteer Days",
                                slug: "sus-vol-days",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sustainablity-hackathons",
                                title: "Sustainability Hackathons",
                                slug: "sus-hck-thns",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sustainable-fashion-events",
                                title: "Sustainable Fashion Events",
                                slug: "sus-fsh-evt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sustainability-festivals",
                                title: "Sustainability Festivals",
                                slug: "sus-fst",
                                titleSuffix: "Management Company in Delhi"
                            },
                        ]
                    },
                    {
                        id: "community-service-projects",
                        title: "Community Service Projects",
                        slug: "comm-srv-prjt",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "environmental-conservation-projects",
                                title: "Environmental Conservation Projects",
                                slug: "env-con-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "community-development-projects",
                                title: "Community Development Projects",
                                slug: "comm-dev-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "educational-support-projects",
                                title: "Educational Support Projects",
                                slug: "edu-sup-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "health-and-wellness-projects",
                                title: "Health and Wellness Projects",
                                slug: "hlth-wlln-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "food-and-hunger-relief-projects",
                                title: "Food and Hunger Relief Projects",
                                slug: "fd-hun-rlf-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "youth-empowerment-projects",
                                title: "Youth Empowerment Projects",
                                slug: "yth-emp-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "elderly-and-senior-support-projects",
                                title: "Elderly and Senior Support Projects",
                                slug: "eld-snr-sprt-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "disaster-relief-and-emergency-response-projects",
                                title: "Disaster Relief and Emergency Response Projects",
                                slug: "dre-res-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "cultural-and-arts-projects",
                                title: "Cultural and Arts Projects",
                                slug: "clt-art-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "disability-support-projects",
                                title: "Disability Support Projects",
                                slug: "dis-sprt-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "animal-welfare-projects",
                                title: "Animal Welfare Projects",
                                slug: "ani-wlf-prjt",
                                titleSuffix: "Management Company in Delhi"
                            },
                        ]
                    }
                ]
            },
            {
                id: "trade-shows-and-exhibitions",
                title: "Trade Shows and Exhibitions",
                slug: "trd-shw-exh",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "industry-expos",
                        title: "Industry Expos",
                        slug: "ind-expos",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "technology-expos",
                                title: "Technology Expos",
                                slug: "tech-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "healthcare-expos",
                                title: "Healthcare Expos",
                                slug: "hlth-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "fashion-expos",
                                title: "Fashion Expos",
                                slug: "fas-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "automotive-expos",
                                title: "Automotive Expos",
                                slug: "auto-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "food-and-beverage-expos",
                                title: "Food and Beverage Expos",
                                slug: "food-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "construction-and-real-estate-expos",
                                title: "Construction and Real Estate Expos",
                                slug: "cons-re-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "entertainment-and-media-expos",
                                title: "Entertainment and Media Expos",
                                slug: "ent-me-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "renewable-energy-and-sustainability-expos",
                                title: "Renewable Energy and Sustainability Expos",
                                slug: "ren-es-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "retail-and-e-Commerce-expos",
                                title: "Retail and E-Commerce Expos",
                                slug: "ret-ecom-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "hospitality-and-tourism-expos",
                                title: "Hospitality and Tourism Expos",
                                slug: "hos-tur-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "financial-services-expos",
                                title: "Financial Services Expos",
                                slug: "fin-ser-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "beauty-and-cosmetics-expos",
                                title: "Beauty and Cosmetics Expos",
                                slug: "bea-cos-expos",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "product-exhibitions",
                        title: "Product Exhibitions",
                        slug: "prd-exh",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "consumer-goods-exhibitions",
                                title: "Consumer Goods Exhibitions",
                                slug: "cons-gd-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "industrial-product-exhibitions",
                                title: "Industrial Product Exhibitions",
                                slug: "inds-pro-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "technology-product-exhibitions",
                                title: "Technology Product Exhibitions",
                                slug: "tech-pro-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "automotive-product-exhibitions",
                                title: "Automotive Product Exhibitions",
                                slug: "auto-pro-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "food-and-beverage-product-exhibitions",
                                title: "Food and Beverage Product Exhibitions",
                                slug: "food-bp-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "healthcare-and-medical-product-exhibitions",
                                title: "Healthcare and Medical Product Exhibitions",
                                slug: "hlth-mp-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "construction-and-building-product-exhibitions",
                                title: "Construction and Building Product Exhibitions",
                                slug: "cons-bp-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "fashion-and-textile-product-exhibitions",
                                title: "Fashion and Textile Product Exhibitions",
                                slug: "fash-tp-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "beauty-and-personal-care-product-exhibitions",
                                title: "Beauty and Personal Care Product Exhibitions",
                                slug: "beau-pcp-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sustainable-product-exhibitions",
                                title: "Sustainable Product Exhibitions",
                                slug: "sust-pro-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sports-and-fitness-product-exhibitions",
                                title: "Sports and Fitness Product Exhibitions",
                                slug: "sprt-fp-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "packaging-product-exhibitions",
                                title: "Packaging Product Exhibitions",
                                slug: "pack-pro-exh",
                                titleSuffix: "Management Company in Delhi"
                            },
                        ]
                    },
                    {
                        id: "b2b-trade-shows",
                        title: "B2B Trade Shows",
                        slug: "b-to-b",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "industry-specific-b2b-trade-shows",
                                title: "Industry-Specific B2B Trade Shows",
                                slug: "isb-trd-shw",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "technology-trade-shows",
                                        title: "Technology Trade Shows",
                                        slug: "tech-t-sho",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "healthcare-trade-shows",
                                        title: "Healthcare Trade Shows",
                                        slug: "hlth-t-sho",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "automotive-trade-shows",
                                        title: "Automotive Trade Shows",
                                        slug: "auto-t-sho",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "construction-and-real-estate-trade-shows",
                                        title: "Construction and Real Estate Trade Shows",
                                        slug: "cons-re-sho",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "fashion-and-apparel-trade-shows",
                                        title: "Fashion and Apparel Trade Shows",
                                        slug: "fash-pt-sho",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "food-and-beverage-trade-shows",
                                        title: "Food and Beverage Trade Shows",
                                        slug: "food-bt-sho",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                ]
                            },
                            {
                                id: "technology-and-innovation-b2b-trade-shows",
                                title: "Technology and Innovation B2B Trade Shows",
                                slug: "tib-trd-shw",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "tech-startup-expos",
                                        title: "Tech Startup Expos",
                                        slug: "tech-st-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "software-and-app-development-expos",
                                        title: "Software and App Development Expos",
                                        slug: "soft-ad-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "iot-expos",
                                        title: "IoT (Internet of Things) Expos",
                                        slug: "iot-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "artificial-intelligence-and-machine-learning-expos",
                                        title: "Artificial Intelligence and Machine Learning Expos",
                                        slug: "aim-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "cybersecurity-expos",
                                        title: "Cybersecurity Expos",
                                        slug: "tech-s-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                ]
                            },
                            {
                                id: "manufacturing-and-industrial-b2b-trade-shows",
                                title: "Manufacturing and Industrial B2B Trade Shows",
                                slug: "mib-trd-shw",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "automotive-manufacturing-expos",
                                        title: "Automotive Manufacturing Expos",
                                        slug: "auto-m-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "machinery-and-equipment-expos",
                                        title: "Machinery and Equipment Expos",
                                        slug: "mac-e-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "packaging-and-logistics-expos",
                                        title: "Packaging and Logistics Expos",
                                        slug: "pck-l-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "chemical-and-material-trade-shows",
                                        title: "Chemical and Material Trade Shows",
                                        slug: "che-m-show",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "bnergy-and-power-generation-expos",
                                        title: "Energy and Power Generation Expos",
                                        slug: "enr-p-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                ]
                            },
                            {
                                id: "consumer-goods-b2b-trade-shows",
                                title: "Consumer Goods B2B Trade Shows",
                                slug: "cgb-trd-shw",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "fashion-and-apparele-expos",
                                        title: "Fashion and Apparel Expos",
                                        slug: "fash-a-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "home-and-lifestyle-goods-expos",
                                        title: "Home and Lifestyle Goods Expos",
                                        slug: "hom-l-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "health-and-beauty-expos",
                                        title: "Health and Beauty Expos",
                                        slug: "hlth-b-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "sports-equipment-and-outdoor-goods",
                                        title: "Sports Equipment and Outdoor Goods",
                                        slug: "sprt-eo-good",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "toys-and-games-expos",
                                        title: "Toys and Games Expos",
                                        slug: "toy-g-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                ]
                            },
                            {
                                id: "service-oriented-b2b-trade-shows",
                                title: "Service-Oriented B2B Trade Shows",
                                slug: "sob-trd-shw",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "financial-services-expos",
                                        title: "Financial Services Expos",
                                        slug: "fin-s-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "marketing-and-advertising-expos",
                                        title: "Marketing and Advertising Expos",
                                        slug: "mkt-aa-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "hr-and-recruitment-expos",
                                        title: "HR and Recruitment Expos",
                                        slug: "hr-r-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "consulting-and-business-solutions-expos",
                                        title: "Consulting and Business Solutions Expos",
                                        slug: "cons-abs-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "legal-services-expos",
                                        title: "Legal Services Expos",
                                        slug: "lgl-s-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                ]
                            },
                            {
                                id: "trade-and-wholesale-b2b-trade-shows",
                                title: "Trade and Wholesale B2B Trade Shows",
                                slug: "twb-trd-shw",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "wholesale-distribution-expos",
                                        title: "Wholesale Distribution Expos",
                                        slug: "whl-d-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "import-and-export-expos",
                                        title: "Import and Export Expos",
                                        slug: "imp-e-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "retail-supply-chain-expos",
                                        title: "Retail Supply Chain Expos",
                                        slug: "ret-sc-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "trade-supply-expos",
                                        title: "Trade Supply Expos",
                                        slug: "trd-s-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "e-commerce-and-online-retail-expos",
                                        title: "E-commerce and Online Retail Expos",
                                        slug: "ecom-or-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                ]
                            },
                            {
                                id: "sustainability-and-green-b2b-trade-shows",
                                title: "Sustainability and Green B2B Trade Shows",
                                slug: "sbg-trd-shw",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "renewable-energy-expos",
                                        title: "Renewable Energy Expos",
                                        slug: "renw-e-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "green-technology-expos",
                                        title: "Green Technology Expos",
                                        slug: "grn-t-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "sustainable-packaging-expos",
                                        title: "Sustainable Packaging Expos",
                                        slug: "sust-p-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "eco-friendly-product-expos",
                                        title: "Eco-friendly Product Expos",
                                        slug: "eco-fp-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "waste-management-and-recycling-expos",
                                        title: "Waste Management and Recycling Expos",
                                        slug: "wast-mr-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                ]
                            },
                            {
                                id: "educational-b2b-trade-shows",
                                title: "Educational B2B Trade Shows",
                                slug: "edb-trd-shw",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "edTech-expos",
                                        title: "EdTech Expos",
                                        slug: "edt-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "corporate-training-and-development-expos",
                                        title: "Corporate Training and Development Expos",
                                        slug: "corp-td-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "textbooks-and-learning-resources-expos",
                                        title: "Textbooks and Learning Resources Expos",
                                        slug: "text-l-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "learning-management-systems-expos",
                                        title: "Learning Management Systems (LMS) Expos",
                                        slug: "lrn-ms-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "language-learning-and-training-expos",
                                        title: "Language Learning and Training Expos",
                                        slug: "lng-lt-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                ]
                            },
                            {
                                id: "tourism-and-hospitality-b2b-trade-shows",
                                title: "Tourism and Hospitality B2B Trade Shows",
                                slug: "tih-trd-shw",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "travel-and-tourism-expos",
                                        title: "Travel and Tourism Expos",
                                        slug: "trv-t-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "hotel-and-resort-expos",
                                        title: "Hotel and Resort Expos",
                                        slug: "htl-r-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "mice-expos",
                                        title: "MICE (Meetings, Incentives, Conferences, and Exhibitions) Expos",
                                        slug: "mice-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "luxury-travel-expos",
                                        title: "Luxury Travel Expos",
                                        slug: "lux-t-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "cruise-and-adventure-travel-expos",
                                        title: "Cruise and Adventure Travel Expos",
                                        slug: "cru-at-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                ]
                            },
                            {
                                id: "logistics-and-supply-chain-b2b-trade-shows",
                                title: "Logistics and Supply Chain B2B Trade Shows",
                                slug: "lsc-trd-shw",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "freight-and-shipping-expos",
                                        title: "Freight and Shipping Expos",
                                        slug: "fre-s-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "warehouse-and-distribution-expos",
                                        title: "Warehouse and Distribution Expos",
                                        slug: "wrh-d-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "transportation-and-logistics-technologies",
                                        title: "Transportation and Logistics Technologies",
                                        slug: "trns-lt-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "last-mile-delivery-expos",
                                        title: "Last-Mile Delivery Expos",
                                        slug: "lux-t-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                    {
                                        id: "cold-chain-and-perishable-goods-expos",
                                        title: "Cold Chain and Perishable Goods Expos",
                                        slug: "col-cpg-expo",
                                        titleSuffix: "Management Company in Delhi"
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        id: "virtual-trade-shows",
                        title: "Virtual Trade Shows",
                        slug: "vir-trd-shw",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "industry-specific-virtual-trade-shows",
                                title: "Industry-Specific Virtual Trade Shows",
                                slug: "ind-sv-show",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "product-specific-virtual-trade-shows",
                                title: "Product-Specific Virtual Trade Shows",
                                slug: "pro-sv-show",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "technology-and-innovation-virtual-trade-shows",
                                title: "Technology and Innovation Virtual Trade Shows",
                                slug: "tech-ivt-show",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "global-and-regional-virtual-trade-shows",
                                title: "Global and Regional Virtual Trade Shows",
                                slug: "glo-rvt-show",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "networking-centric-virtual-trade-shows",
                                title: "Networking-Centric Virtual Trade Shows",
                                slug: "net-cvt-show",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "interactive-virtual-trade-shows",
                                title: "Interactive Virtual Trade Shows",
                                slug: "int-vt-show",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "hybrid-virtual-trade-shows",
                                title: "Hybrid Virtual Trade Shows",
                                slug: "hyb-vt-show",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "job-fair-and-recruitment-virtual-trade-shows",
                                title: "Job Fair and Recruitment Virtual Trade Shows",
                                slug: "job-frvt-show",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sustainability-and-green-virtual-trade-shows",
                                title: "Sustainability and Green Virtual Trade Shows",
                                slug: "sust-gvt-show",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "consumer-focused-virtual-trade-shows",
                                title: "Consumer-Focused Virtual Trade Shows (B2C)",
                                slug: "con-fvt-show",
                                titleSuffix: "Management Company in Delhi"
                            },
                        ]
                    },
                ]
            },
            {
                id: "Networking Events",
                title: "Networking Events",
                slug: "net-evt",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "industry-networking-events",
                        title: "Industry Networking Events",
                        slug: "ind-net-evt",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "sector-specific-networking-mixers",
                                title: "Sector-Specific Networking Mixers",
                                slug: "sec-sn-mix",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "small-business-and-startup-networking-mixers",
                                title: "Small Business and Startup Networking Mixers",
                                slug: "sml-bsn-mix",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "professional-development-networking-mixers",
                                title: "Professional Development Networking Mixers",
                                slug: "pro-dn-mix",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-networking-mixers",
                                title: "Virtual Networking Mixers",
                                slug: "vir-net-mix",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "industry-collaboration-networking-mixers",
                                title: "Industry Collaboration Networking Mixers",
                                slug: "ind-cn-mix",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "trade-association-and-industry-group-networking Mixers",
                                title: "Trade Association and Industry Group Networking Mixers",
                                slug: "trd-aign-mix",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "conference-event-centric-networking-mixers",
                                title: "Conference or Event-Centric Networking Mixers",
                                slug: "con-ecn-mix",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "exclusive-vip-networking-mixers",
                                title: "Exclusive VIP Networking Mixers",
                                slug: "exl-vip-mix",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "social-and-informal-industry-networking-mixers",
                                title: "Social and Informal Industry Networking Mixers",
                                slug: "soc-iin-mix",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "charity-and-community-focused-networking-mixers",
                                title: "Charity and Community-Focused Networking Mixers",
                                slug: "char-cfn-mix",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "business-luncheons-or-dinners",
                        title: "Business Luncheons or Dinners",
                        slug: "bus-lun-din",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "industry-specific-business-luncheons-dinners",
                                title: "Industry-Specific Business Luncheons and Dinners",
                                slug: "ind-sbl-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "executive-and-c-suite-business-luncheons-binners",
                                title: "Executive and C-Suite Business Luncheons Dinners",
                                slug: "exe-bl-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "client-customer-business-luncheons-dinners",
                                title: "Client or Customer Business Luncheons and Dinners",
                                slug: "clnt-cbl-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "networking-business-luncheons-dinners",
                                title: "Networking Business Luncheons and Dinners",
                                slug: "net-bl-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "small-group-business-luncheons-dinners",
                                title: "Small Group Business Luncheons and Dinners",
                                slug: "sm-gbl-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "charity-cause-oriented-business-luncheons-dinners",
                                title: "Charity or Cause-Oriented Business Luncheons and Dinners",
                                slug: "char-cobl-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "holiday-seasonal-business-luncheons-dinners",
                                title: "Holiday or Seasonal Business Luncheons and Dinners",
                                slug: "holi-sbl-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "international-business-luncheons-dinners",
                                title: "International Business Luncheons and Dinners",
                                slug: "int-bl-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "panel-discussion-business-luncheons-dinners",
                                title: "Panel Discussion Business Luncheons and Dinners",
                                slug: "pan-dbl-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "alumni-and-educational-business-luncheons-dinners",
                                title: "Alumni and Educational Business Luncheons and Dinners",
                                slug: "alu-ebl-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "professional-conferences-networking",
                        title: "Professional Conferences Networking",
                        slug: "pro-conf-evt",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "industry-specific-networking-at-conferences",
                                title: "Industry-Specific Networking at Conferences",
                                slug: "ind-sn-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "small-group-networking-sessions-at-conferences",
                                title: "Small Group Networking Sessions at Conferences",
                                slug: "sm-gns-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "panel-discussion-networking-at-conferences",
                                title: "Panel Discussion Networking at Conferences",
                                slug: "pan-dn-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "speed-networking-at-conferences",
                                title: "Speed Networking at Conferences",
                                slug: "spd-net-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "networking-dinners-luncheons-at-conferences",
                                title: "Networking Dinners & Luncheons at Conferences",
                                slug: "net-dl-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "workshops-and-collaborative-networking-sessions-at-conferences",
                                title: "Workshops and Collaborative Networking Sessions at Conferences",
                                slug: "wrk-cns-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "international-networking-at-conferences",
                                title: "International Networking at Conferences",
                                slug: "int-net-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "technology-driven-networking-at-conferences",
                                title: "Technology-Driven Networking at Conferences",
                                slug: "tech-dn-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "post-conference-networking-events",
                                title: "Post-Conference Networking Events",
                                slug: "post-cn-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "student-and-young-professional-networking-at-conferences",
                                title: "Student and Young Professional Networking at Conferences",
                                slug: "stu-ypn-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "speed-networking",
                        title: "Speed Networking",
                        slug: "spd-net",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "industry-specific-speed-networking",
                                title: "Industry-Specific Speed Networking",
                                slug: "ind-sp-net",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "corporate-speed-networking",
                                title: "Corporate Speed Networking",
                                slug: "corp-s-net",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "entrepreneur-and-startup-speed-networking",
                                title: "Entrepreneur and Startup Speed Networking",
                                slug: "ent-ss-net",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "young-professionals-speed-networking",
                                title: "Young Professionals Speed Networking",
                                slug: "yng-ps-net",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cross-industry-speed-networking",
                                title: "Cross-Industry Speed Networking",
                                slug: "crss-is-net",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-speed-networking",
                                title: "Virtual Speed Networking",
                                slug: "vir-s-net",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "charity-and-cause-based-speed-networking",
                                title: "Charity and Cause-Based Speed Networking",
                                slug: "char-cbs-net",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "women-in-business-speed-networking",
                                title: "Women in Business Speed Networking",
                                slug: "wom-bs-net",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "academic-and-research-speed-networking",
                                title: "Academic and Research Speed Networking",
                                slug: "aca-rs-net",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "job-focused-speed-networking",
                                title: "Job-Focused Speed Networking",
                                slug: "job-fs-net",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                ]
            },
            {
                id: "Incentive Programs",
                title: "Incentive Programs",
                slug: "inc-pro",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "sales-incentive-trips",
                        title: "Sales Incentive Trips",
                        slug: "sal-inc-trp",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "luxury-getaways",
                                title: "Luxury Getaways",
                                slug: "lux-gtw",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "adventure-and-exploration-trips",
                                title: "Adventure and Exploration Trips",
                                slug: "adv-exp-trip",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cruise-incentives",
                                title: "Cruise Incentives",
                                slug: "cru-inc",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "global-travel-incentives",
                                title: "Global Travel Incentives",
                                slug: "glo-trv-inc",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "team-building-incentive-trips",
                                title: "Team-Building Incentive Trips",
                                slug: "tm-bi-trip",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "exclusive-vip-experiences",
                                title: "Exclusive VIP Experiences",
                                slug: "exc-vip-exp",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "short-haul-weekend-getaways",
                                title: "Short-Haul Weekend Getaways",
                                slug: "sho-hw-gtw",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cultural-and-historical-exploration",
                                title: "Cultural and Historical Exploration",
                                slug: "cul-his-exp",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "wellness-and-health-focused-incentive-trips",
                                title: "Wellness and Health-Focused Incentive Trips",
                                slug: "well-hfi-trp",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "luxury-staycation-incentives",
                                title: "Luxury Staycation Incentives",
                                slug: "lux-sta-inc",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "recognition-dinners-or-galas",
                        title: "Recognition Dinners or Galas",
                        slug: "rec-din-gls",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "annual-awards-gala",
                                title: "Annual Awards Gala",
                                slug: "ann-awa-gala",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "top-performer-recognition-dinner",
                                title: "Top Performer Recognition Dinner",
                                slug: "top-pr-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "vip-recognition-event",
                                title: "VIP Recognition Event",
                                slug: "vip-rec-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "themed-recognition-gala",
                                title: "Themed Recognition Gala",
                                slug: "the-rec-gala",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "charity-gala-or-recognition-dinner",
                                title: "Charity Gala or Recognition Dinner",
                                slug: "cha-gr-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-anniversary-celebration-gala",
                                title: "Employee Anniversary Celebration Gala",
                                slug: "emp-ac-gala",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "executive-recognition-inner",
                                title: "Executive Recognition Dinner",
                                slug: "exe-rec-din",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "team-recognition-gala",
                                title: "Team Recognition Gala",
                                slug: "tm-rec-gala",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-appreciation-gala",
                                title: "Employee Appreciation Gala",
                                slug: "emp-app-gala",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "holiday-recognition-gala",
                                title: "Holiday Recognition Gala",
                                slug: "hol-rec-gala",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "annual-awards-ceremonies",
                        title: "Annual Awards Ceremonies",
                        slug: "ann-awd-crt",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "employee-of-the-year-awards",
                                title: "Employee of the Year Awards",
                                slug: "emp-oty-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sales-achievement-awards",
                                title: "Sales Achievement Awards",
                                slug: "sal-ach-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "innovation-and-creativity-awards",
                                title: "Innovation and Creativity Awards",
                                slug: "inn-cre-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "customer-service-excellence-awards",
                                title: "Customer Service Excellence Awards",
                                slug: "cus-se-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "employee-engagement-and-culture-awards",
                                title: "Employee Engagement and Culture Awards",
                                slug: "emp-ec-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "leadership-and-management-excellence-awards",
                                title: "Leadership and Management Excellence Awards",
                                slug: "lea-me-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "employee-longevity-and-service-awards",
                                title: "Employee Longevity and Service Awards",
                                slug: "emp-ls-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "sustainability-and-csr-awards",
                                title: "Sustainability and CSR Awards",
                                slug: "sus-csr-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "health-and-wellness-achievement-awards",
                                title: "Health and Wellness Achievement Awards",
                                slug: "hlt-wa-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "team-achievement-awards",
                                title: "Team Achievement Awards",
                                slug: "tm-ach-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "diversity-and-inclusion-Awards",
                                title: "Diversity and Inclusion Awards",
                                slug: "div-inc-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "safety-and-risk-management-awards",
                                title: "Safety and Risk Management Awards",
                                slug: "saf-rm-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                            {
                                id: "global-performance-recognition-awards",
                                title: "Global Performance Recognition Awards",
                                slug: "glo-pr-awa",
                                titleSuffix: "Management Company in Delhi"
                            },
                        ]
                    },
                    {
                        id: "client-appreciation-events",
                        title: "Client Appreciation Events",
                        slug: "cli-app-evt",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "exclusive-dinner-events",
                                title: "Exclusive Dinner Events",
                                slug: "exc-din-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "client-appreciation-receptions",
                                title: "Client Appreciation Receptions",
                                slug: "cli-app-rec",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "corporate-sporting-events-or-vip-tickets",
                                title: "Corporate Sporting Events or VIP Tickets",
                                slug: "cor-sev-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "gift-giving-events",
                                title: "Gift-Giving Events",
                                slug: "gif-giv-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "client-appreciation-cruises-or-retreats",
                                title: "Client Appreciation Cruises or Retreats",
                                slug: "cli-ac-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "workshops-or-training-sessions",
                                title: "Workshops or Training Sessions",
                                slug: "wor-tra-ses",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "client-appreciation-parties",
                                title: "Client Appreciation Parties",
                                slug: "cli-app-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "charity-or-csr-events",
                                title: "Charity or CSR Events",
                                slug: "cha-csr-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "exclusive-product-service-previews",
                                title: "Exclusive Product and Service Previews",
                                slug: "exc-ps-pre",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "golf-outings-or-tournaments",
                                title: "Golf Outings or Tournaments",
                                slug: "gol-out-tour",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "interactive-client-appreciation-events",
                                title: "Interactive Client Appreciation Events",
                                slug: "int-ca-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-client-appreciation-events",
                                title: "Virtual Client Appreciation Events",
                                slug: "vir-ca-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    }
                ]
            },
            {
                id: "Corporate Parties and Celebrations",
                title: "Corporate Parties and Celebrations",
                slug: "corp-prt-cel",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "holiday-parties",
                        title: "Holiday Parties",
                        slug: "hol-prt",
                        titleSuffix: "Management Company in Delhi",
                        children: [

                            {
                                id: "christmas-or-holiday-parties",
                                title: "Christmas or Holiday Parties",
                                slug: "chr-hol-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "new-year-eve-party",
                                title: "New Year’s Eve Party",
                                slug: "new-yre-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "company-anniversary-party",
                                title: "Company Anniversary Party (Holiday-Themed)",
                                slug: "com-ann-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "end-of-year-celebration",
                                title: "End-of-Year Celebration",
                                slug: "end-yr-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "winter-wonderland-party",
                                title: "Winter Wonderland Party",
                                slug: "win-won-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "themed-holiday-parties",
                                title: "Themed Holiday Parties",
                                slug: "the-hol-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "office-potluck-holiday-party",
                                title: "Office Potluck Holiday Party",
                                slug: "off-ph-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "charity-or-volunteer-holiday-party",
                                title: "Charity or Volunteer Holiday Party",
                                slug: "cha-vh-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "holiday-team-building-events",
                                title: "Holiday Team Building Events",
                                slug: "hol-tmb-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-holiday-parties",
                                title: "Virtual Holiday Parties",
                                slug: "vir-hol-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "family-friendly-holiday-parties",
                                title: "Family-Friendly Holiday Parties",
                                slug: "fam-fh-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "luxury-holiday-parties",
                                title: "Luxury Holiday Parties",
                                slug: "lux-hol-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "company-anniversary-celebrations",
                        title: "Company Anniversary Celebrations",
                        slug: "cmp-ann-cele",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "company-milestone-anniversary-party",
                                title: "Company Milestone Anniversary Party",
                                slug: "cmp-ma-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-anniversary-celebration",
                                title: "Employee Anniversary Celebration",
                                slug: "emp-ann-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "brand-anniversary-party",
                                title: "Brand Anniversary Party",
                                slug: "brnd-ann-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "corporate-gala-or-black-tie-anniversary-celebration",
                                title: "Corporate Gala or Black-Tie Anniversary Celebration",
                                slug: "cor-gbta-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-appreciation-day-for-anniversaries",
                                title: "Employee Appreciation Day for Anniversaries",
                                slug: "emp-adf-ann",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "client-and-stakeholder-anniversary-event",
                                title: "Client and Stakeholder Anniversary Event",
                                slug: "clnt-sa-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "charity-or-csr-anniversary-event",
                                title: "Charity or CSR Anniversary Event",
                                slug: "cha-ca-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-or-service-anniversary-launch-party",
                                title: "Product or Service Anniversary Launch Party",
                                slug: "pro-sal-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "founders-and-leadership-recognition-anniversary-event",
                                title: "Founders and Leadership Recognition Anniversary Event",
                                slug: "fou-lra-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "casual-anniversary-celebration",
                                title: "Casual Anniversary Celebration",
                                slug: "cas-ann-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "interactive-anniversary-event",
                                title: "Interactive Anniversary Event",
                                slug: "int-ann-evt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-anniversary-celebration",
                                title: "Virtual Anniversary Celebration",
                                slug: "vir-ann-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "milestone-celebrations",
                        title: "Milestone Celebrations",
                        slug: "mil-cele",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "company-anniversary-milestone-celebrations",
                                title: "Company Anniversary Milestone Celebrations",
                                slug: "cmp-am-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sales-or-revenue-milestone-celebrations",
                                title: "Sales or Revenue Milestone Celebrations",
                                slug: "sal-rm-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-launch-or-innovation-milestones",
                                title: "Product Launch or Innovation Milestones",
                                slug: "pro-li-mil",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "market-expansion-or-geographic-milestones",
                                title: "Market Expansion or Geographic Milestones",
                                slug: "mkt-eog-mil",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-or-team-achievement-milestones",
                                title: "Employee or Team Achievement Milestones",
                                slug: "emp-ta-mil",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "client-or-partner-milestone-celebrations",
                                title: "Client or Partner Milestone Celebrations",
                                slug: "clnt-pm-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-or-service-milestone-celebrations",
                                title: "Product or Service Milestone Celebrations",
                                slug: "pro-sm-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "corporate-social-responsibility-milestone-celebrations",
                                title: "Corporate Social Responsibility (CSR) Milestone Celebrations",
                                slug: "corp-srm-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "innovation-and-technology-milestone-celebrations",
                                title: "Innovation and Technology Milestone Celebrations",
                                slug: "inn-tm-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "revenue-or-profitability-milestone-celebrations",
                                title: "Revenue or Profitability Milestone Celebrations",
                                slug: "rev-pm-cel",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "global-expansion-or-new-market-entry-milestones",
                                title: "Global Expansion or New Market Entry Milestones",
                                slug: "glo-enme-mil",
                                titleSuffix: "Management Company in Delhi",
                            },

                        ]
                    },
                    {
                        id: "themed-parties",
                        title: "Themed Parties",
                        slug: "thm-prt",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "holiday-themed-parties",
                                title: "Holiday-Themed Parties",
                                slug: "hld-prt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "casino-night-party",
                                title: "Casino Night Party",
                                slug: "cas-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "decade-themed-parties",
                                title: "Decade-Themed Parties",
                                slug: "dec-thm-prt",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "tropical-or-hawaiian-luau",
                                title: "Tropical or Hawaiian Luau",
                                slug: "tro-haw-lua",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "hollywood-or-red-carpet-themed-party",
                                title: "Hollywood or Red Carpet Themed Party",
                                slug: "hol-rct-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "around-the-world-party",
                                title: "Around the World Party",
                                slug: "aro-tw-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "superhero-or-comic-book-theme",
                                title: "Superhero or Comic Book Theme",
                                slug: "sup-ocb-thm",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "black-and-white-party",
                                title: "Black and White Party",
                                slug: "bla-aw-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "carnival-or-circus-theme",
                                title: "Carnival or Circus Theme",
                                slug: "crv-cir-thm",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "futuristic-or-sci-fi-themed-party",
                                title: "Futuristic or Sci-Fi Themed Party",
                                slug: "fut-sft-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "farm-or-country-themed-party",
                                title: "Farm or Country-Themed Party",
                                slug: "far-ct-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "pirate-theme-party",
                                title: "Pirate Theme Party",
                                slug: "pir-thm-par",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    }
                ]
            },
            {
                id: "executive-retreats",
                title: "Executive Retreats",
                slug: "exe-ret",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "leadership-retreats",
                        title: "Leadership Retreats",
                        slug: "led-ret",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "strategic-planning-retreats",
                                title: "Strategic Planning Retreats",
                                slug: "str-pla-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "team-building-and-bonding-retreats",
                                title: "Team Building and Bonding Retreats",
                                slug: "tm-bb-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "leadership-development-retreats",
                                title: "Leadership Development Retreats",
                                slug: "lea-dev-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "innovation-and-creativity-retreats",
                                title: "Innovation and Creativity Retreats",
                                slug: "inn-cre-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-management-and-risk-mitigation-retreats",
                                title: "Crisis Management and Risk Mitigation Retreats",
                                slug: "cri-mrm-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "visionary-leadership-retreats",
                                title: "Visionary Leadership Retreats",
                                slug: "vis-lea-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "change-management-retreats",
                                title: "Change Management Retreats",
                                slug: "cha-mng-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "high-Performance-leadership-retreats",
                                title: "High-Performance Leadership Retreats",
                                slug: "high-pl-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "executive-wellness-retreats",
                                title: "Executive Wellness Retreats",
                                slug: "exe-well-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "philanthropy-and-csr-leadership-retreats",
                                title: "Philanthropy and CSR Leadership Retreats",
                                slug: "phi-csrl-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "executive-collaboration-retreats",
                                title: "Executive Collaboration Retreats",
                                slug: "exe-col-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "board-retreats",
                        title: "Board Retreats",
                        slug: "brd-ret",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "strategic-planning-board-retreats",
                                title: "Strategic Planning Board Retreats",
                                slug: "str-pb-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "governance-and-compliance-retreats",
                                title: "Governance and Compliance Retreats",
                                slug: "gov-com-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "team-building-and-collaboration-retreats",
                                title: "Team Building and Collaboration Retreats",
                                slug: "tm-bc-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "performance-review-and-evaluation-retreats",
                                title: "Performance Review and Evaluation Retreats",
                                slug: "per-rae-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "crisis-management-and-contingency-planning-retreats",
                                title: "Crisis Management and Contingency Planning Retreats",
                                slug: "cri-mac-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "financial-oversight-and-management-retreats",
                                title: "Financial Oversight and Management Retreats",
                                slug: "fin-oam-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "leadership-development-and-succession-planning-retreats",
                                title: "Leadership Development and Succession Planning Retreats",
                                slug: "lead-dsp-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "innovation-and-future-growth-retreats",
                                title: "Innovation and Future Growth Retreats",
                                slug: "inn-afw-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "board-member-education-retreats",
                                title: "Board Member Education Retreats",
                                slug: "boa-me-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "relationship-building-with-stakeholders-retreats",
                                title: "Relationship Building with Stakeholders Retreats",
                                slug: "rel-bs-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "team-strategy-retreats",
                        title: "Team Strategy Retreats",
                        slug: "tm-stra-ret",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "vision-and-goal-alignment-retreats",
                                title: "Vision and Goal Alignment Retreats",
                                slug: "vis-aga-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "collaboration-and-communication-strategy-retreats",
                                title: "Collaboration and Communication Strategy Retreats",
                                slug: "col-cs-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "inovation-and-problem-solving-strategy-retreats",
                                title: "Innovation and Problem-Solving Strategy Retreats",
                                slug: "inn-pss-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "performance-review-and-improvement-retreats",
                                title: "Performance Review and Improvement Retreats",
                                slug: "per-rai-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "risk-management-and-contingency-planning-retreats",
                                title: "Risk Management and Contingency Planning Retreats",
                                slug: "risk-mcp-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "leadership-development-and-succession-planning-retreats",
                                title: "Leadership Development and Succession Planning Retreats",
                                slug: "lead-dasp-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "cultural-alignment-and-values-integration-retreats",
                                title: "Cultural Alignment and Values Integration Retreats",
                                slug: "cul-aavi-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "productivity-and-efficiency-retreats",
                                title: "Productivity and Efficiency Retreats",
                                slug: "pro-ae-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "financial-strategy-and-budgeting-retreats",
                                title: "Financial Strategy and Budgeting Retreats",
                                slug: "fin-sab-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "executive-alignment-and-relationship-building-retreats",
                                title: "Executive Alignment and Relationship Building Retreats",
                                slug: "exe-aga-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "change-management-strategy-retreats",
                                title: "Change Management Strategy Retreats",
                                slug: "cha-ms-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "reflection-and-wellness-retreats",
                        title: "Reflection and Wellness Retreats",
                        slug: "ref-wel-ret",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "mindfulness-and-meditation-retreats",
                                title: "Mindfulness and Meditation Retreats",
                                slug: "mind-med-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "stress-management-and-relaxation-retreats",
                                title: "Stress Management and Relaxation Retreats",
                                slug: "stre-mar-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "physical-wellness-and-fitness-retreats",
                                title: "Physical Wellness and Fitness Retreats",
                                slug: "phy-waf-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "personal-reflection-and-goal-setting-retreats",
                                title: "Personal Reflection and Goal Setting Retreats",
                                slug: "per-rgs-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "digital-detox-and-disconnect-retreats",
                                title: "Digital Detox and Disconnect Retreats",
                                slug: "digi-dad-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "holistic-healing-and-restorative-retreats",
                                title: "Holistic Healing and Restorative Retreats",
                                slug: "holi-har-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "nature-based-wellness-retreats",
                                title: "Nature-Based Wellness Retreats",
                                slug: "nat-bw-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sleep-and-recovery-retreats",
                                title: "Sleep and Recovery Retreats",
                                slug: "sle-ar-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "emotional-wellness-and-resilience-retreats",
                                title: "Emotional Wellness and Resilience Retreats",
                                slug: "emo-war-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "creative-expression-and-arts-based-retreats",
                                title: "Creative Expression and Arts-Based Retreats",
                                slug: "cre-eab-ret",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    }
                ]
            },
            {
                id: "webinars-and-virtual-events",
                title: "Webinars and Virtual Events",
                slug: "web-vir-evt",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "online-training-workshops",
                        title: "Online Training Workshops",
                        slug: "onl-trn-work",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "skill-development-workshops",
                                title: "Skill Development Workshops",
                                slug: "skil-dev-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "certifications-and-professional-development-workshops",
                                title: "Certifications and Professional Development Workshops",
                                slug: "cert-pd-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-training-workshops",
                                title: "Product Training Workshops",
                                slug: "pro-tra-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "employee-onboarding-workshops",
                                title: "Employee Onboarding Workshops",
                                slug: "emp-onb-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "leadership-and-management-training-workshops",
                                title: "Leadership and Management Training Workshops",
                                slug: "lea-mt-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "personal-development-workshops",
                                title: "Personal Development Workshops",
                                slug: "pers-dev-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sales-and-marketing-training-workshops",
                                title: "Sales and Marketing Training Workshops",
                                slug: "sales-mt-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "tech-and-software-training-workshops",
                                title: "Tech and Software Training Workshops",
                                slug: "tech-st-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "creative-and-design-workshops",
                                title: "Creative and Design Workshops",
                                slug: "cre-des-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-service-and-support-workshops",
                                title: "Customer Service and Support Workshops",
                                slug: "cust-ss-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "compliance-and-legal-training-workshops",
                                title: "Compliance and Legal Training Workshops",
                                slug: "comp-lt-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "innovation-and-change-management-workshops",
                                title: "Innovation and Change Management Workshops",
                                slug: "inn-cm-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-networking-and-collaboration-workshops",
                                title: "Virtual Networking and Collaboration Workshops",
                                slug: "vir-nc-work",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "virtual-conferences",
                        title: "Virtual Conferences",
                        slug: "vir-conf",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "industry-Specific-conferences",
                                title: "Industry-Specific Conferences",
                                slug: "indus-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "educational-and-academic-conferences",
                                title: "Educational and Academic Conferences",
                                slug: "edu-ace-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "corporate-conferences",
                                title: "Corporate Conferences",
                                slug: "corp-confs",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "trade-and-product-showcase-conferences",
                                title: "Trade and Product Showcase Conferences",
                                slug: "trd-ps-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "keynote-and-thought-leadership-conferences",
                                title: "Keynote and Thought Leadership Conferences",
                                slug: "key-tls-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "workshops-and-hands-on-learning-conferences",
                                title: "Workshops and Hands-On Learning Conferences",
                                slug: "work-hol-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "annual-or-bi-annual-conferences",
                                title: "Annual or Bi-Annual Conferences",
                                slug: "ann-bia-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-development-or-innovation-conferences",
                                title: "Product Development or Innovation Conferences",
                                slug: "pro-doi-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-summits",
                                title: "Virtual Summits",
                                slug: "virt-summ",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "interactive-q-and-a-and-panel-discussion Conferences",
                                title: "Interactive Q and A and Panel Discussion Conferences",
                                slug: "int-qapd-summ",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "global-or-international-conferences",
                                title: "Global or International Conferences",
                                slug: "glob-int-conf",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "product-webinars",
                        title: "Product Webinars",
                        slug: "prod-web",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "product-demonstrations",
                                title: "Product Demonstrations (Demos)",
                                slug: "prod-demos",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-launch-webinars",
                                title: "Product Launch Webinars",
                                slug: "prod-webi",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-training-webinars",
                                title: "Product Training Webinars",
                                slug: "prod-tran",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-updates-and-new-features-webinars",
                                title: "Product Updates and New Features Webinars",
                                slug: "prod-unf-webi",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-use-case-webinars",
                                title: "Product Use Case Webinars",
                                slug: "prod-uc-webi",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-q-and-a-webinars",
                                title: "Product Q and A Webinars",
                                slug: "prod-qa-webi",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-webinars-for-sales-teams",
                                title: "Product Webinars for Sales Teams",
                                slug: "prod-wfs-tm",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-webinars-for-partners-and-resellers",
                                title: "Product Webinars for Partners and Resellers",
                                slug: "prod-wfp-rese",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "customer-feedback-and-advisory-webinars",
                                title: "Customer Feedback and Advisory Webinars",
                                slug: "cust-faa-webi",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "product-comparison-webinars",
                                title: "Product Comparison Webinars",
                                slug: "prod-comp-webi",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    }
                ]
            },
        ]
    },


    // Artist Management
    {
        id: "artist",
        title: "Artist Management",
        titleSuffix: "Company in Delhi",
        slug: "artist-mngmt",
        children: [
            {
                id: "musical-artists",
                title: "Musical Artists",
                titleSuffix: "Management Company in Delhi",
                slug: "musi-art",
                children: [
                    {
                        id: "solo-artists",
                        title: "Solo Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "solo-art",
                        children: [
                            { id: "pop-stars", title: "Pop Stars", slug: "pop-str", titleSuffix: "Management Company in Delhi" },
                            { id: "rock-alternative-musicians", title: "Rock and Alternative Musicians", slug: "rock-alt-mus", titleSuffix: "Management Company in Delhi" },
                            { id: "classical-musicians", title: "Classical Musicians", slug: "clsl-mus", titleSuffix: "Management Company in Delhi" },
                            { id: "electronic-djs", title: "Electronic DJs", slug: "ele-djs", titleSuffix: "Management Company in Delhi" },
                            { id: "singer-songwriters", title: "Singer-Songwriters", slug: "sin-son", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "bands-and-groups",
                        title: "Bands and Groups",
                        titleSuffix: "Management Company in Delhi",
                        slug: "bag",
                        children: [
                            { id: "rock-bands", title: "Rock Bands", slug: "roc-ban", titleSuffix: "Management Company in Delhi" },
                            { id: "pop-groups", title: "Pop Groups", slug: "pop-grps", titleSuffix: "Management Company in Delhi" },
                            { id: "jazz-ensembles", title: "Jazz Ensembles", slug: "jaz-ens", titleSuffix: "Management Company in Delhi" },
                            { id: "orchestras-and-symphonies", title: "Orchestras and Symphonies", slug: "orc-and-sym", titleSuffix: "Management Company in Delhi" },
                            { id: "hip-hop-urban-groups", title: "Hip-Hop/Urban Groups", slug: "hhu-grps", titleSuffix: "Management Company in Delhi" },
                            { id: "folk-country-bands", title: "Folk and Country Bands", slug: "foc-band", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "music-producers",
                        title: "Music Producers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "music-prod",
                        children: [
                            { id: "studio-`producers", title: "Studio Producers", slug: "std-prod", titleSuffix: "Management Company in Delhi" },
                            { id: "beat-makers", title: "Beat Makers", slug: "bea-mak", titleSuffix: "Management Company in Delhi" },
                            { id: "live-producers", title: "Live Producers", slug: "liv-pro", titleSuffix: "Management Company in Delhi" },
                            { id: "mixing-mastering-engineers", title: "Mixing and Mastering Engineers", slug: "mix-mas-eng", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "composers-songwriters",
                        title: "Composers and Songwriters",
                        titleSuffix: "Management Company in Delhi",
                        slug: "comp-song",
                        children: [
                            { id: "film-tv-composers", title: "Film and TV Composers", slug: "fil-tv-com", titleSuffix: "Management Company in Delhi" },
                            { id: "songwriters-for-other-artists", title: "Songwriters for Other Artists", slug: "son-for-oth-art", titleSuffix: "Management Company in Delhi" },
                            { id: "classical-composers", title: "Classical Composers", slug: "cla-com", titleSuffix: "Management Company in Delhi" },
                            { id: "lyricists", title: "Lyricists", slug: "lyrts", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "session-musicians",
                        title: "Session Musicians",
                        titleSuffix: "Management Company in Delhi",
                        slug: "sess-music",
                        children: [
                            { id: "studio-musicians", title: "Studio Musicians", slug: "stu-music", titleSuffix: "Management Company in Delhi" },
                            { id: "live-session-musicians", title: "Live Session Musicians", slug: "liv-ses-mus", titleSuffix: "Management Company in Delhi" },
                            { id: "instrument-specialists", title: "Instrument Specialists", slug: "inst-spc", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "rappers-hip-hop-artists",
                        title: "Rappers and Hip-Hop Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "rhh-art",
                        children: [
                            { id: "solo-rappers", title: "Solo Rappers", slug: "solo-rap", titleSuffix: "Management Company in Delhi" },
                            { id: "hip-hop-groups", title: "Hip-Hop Groups", slug: "hip-hop-grps", titleSuffix: "Management Company in Delhi" },
                            { id: "rnb-singers", title: "R&B Singers", slug: "rnb-sin", titleSuffix: "Management Company in Delhi" },
                            { id: "freestyle-rappers", title: "Freestyle Rappers", slug: "fre-rap", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "electronic-dance-music-artists",
                        title: "Electronic and Dance Music Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "edma",
                        children: [
                            { id: "djs", title: "DJs", slug: "djs", titleSuffix: "Management Company in Delhi" },
                            { id: "edm-producers", title: "Producers of EDM", slug: "edm-prod", titleSuffix: "Management Company in Delhi" },
                            { id: "live-performers", title: "Live Performers", slug: "liv-perf", titleSuffix: "Management Company in Delhi" },
                            { id: "techno-house-trance-artists", title: "Techno, House, and Trance Artists", slug: "tht-art", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "classical-opera-artists",
                        title: "Classical and Opera Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "coa",
                        children: [
                            { id: "opera-singers", title: "Opera Singers", slug: "ope-sin", titleSuffix: "Management Company in Delhi" },
                            { id: "classical-instrumentalists", title: "Classical Instrumentalists", slug: "cla-ins", titleSuffix: "Management Company in Delhi" },
                            { id: "conductors", title: "Conductors", slug: "cond", titleSuffix: "Management Company in Delhi" },
                            { id: "chamber-musicians", title: "Chamber Musicians", slug: "cha-mus", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "indie-alternative-artists",
                        title: "Indie and Alternative Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "iaa",
                        children: [
                            { id: "indie-rock-bands", title: "Indie Rock Bands", slug: "ind-roc-ban", titleSuffix: "Management Company in Delhi" },
                            { id: "indie-folk-singer-songwriters", title: "Indie Folk and Singer-Songwriters", slug: "ifs-son", titleSuffix: "Management Company in Delhi" },
                            { id: "alternative-hip-hop-artists", title: "Alternative Hip-Hop Artists", slug: "ahh-art", titleSuffix: "Management Company in Delhi" },
                            { id: "experimental-musicians", title: "Experimental Musicians", slug: "exp-mus", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "world-music-artists",
                        title: "Reggae, Latin, and World Music Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "wma",
                        children: [
                            { id: "reggae-artists", title: "Reggae Artists", slug: "reg-art", titleSuffix: "Management Company in Delhi" },
                            { id: "latin-music-artists", title: "Latin Music Artists", slug: "lat-mus-art", titleSuffix: "Management Company in Delhi" },
                            { id: "afrobeat-artists", title: "Afrobeat Artists", slug: "afrb-art", titleSuffix: "Management Company in Delhi" },
                            { id: "folk-traditional-musicians", title: "Folk and Traditional Musicians", slug: "fol-trad-mus", titleSuffix: "Management Company in Delhi" }
                        ]
                    }
                ]
            },
            {
                id: "visual-artists",
                title: "Visual Artists",
                slug: "vis-artist",
                titleSuffix: "Management Company in Delhi",
                children: [
                    {
                        id: "painters",
                        title: "Painters",
                        slug: "pntrs",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            { id: "abstract-painters", title: "Abstract Painters", slug: "abs-pntrs", titleSuffix: "Management Company in Delhi" },
                            { id: "realist-painters", title: "Realist Painters", slug: "real-pntrs", titleSuffix: "Management Company in Delhi" },
                            { id: "surrealist-artists", title: "Surrealist Artists", slug: "sur-arts", titleSuffix: "Management Company in Delhi" },
                            { id: "impressionists", title: "Impressionists", slug: "impre", titleSuffix: "Management Company in Delhi" },
                            { id: "portrait-painters", title: "Portrait Painters", slug: "port-pntrs", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                    {
                        id: "sculptors",
                        title: "Sculptors",
                        slug: "sculp",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "traditional-sculptors",
                                title: "Traditional Sculptors",
                                slug: "trad-sculp",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "contemporary-sculptors",
                                title: "Contemporary Sculptors",
                                slug: "cont-sculp",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "installation-artists",
                                title: "Installation Artists",
                                slug: "inst-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "conceptual-sculptors",
                                title: "Conceptual Sculptors",
                                slug: "conc-sculp",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "photographers",
                        title: "Photographers",
                        slug: "photo",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "fine-art-photographers",
                                title: "Fine Art Photographers",
                                slug: "fine-art-photo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "commercial-photographers",
                                title: "Commercial Photographers",
                                slug: "comm-photo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "documentary-photographers",
                                title: "Documentary Photographers",
                                slug: "docu-photo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "fashion-photographers",
                                title: "Fashion Photographers",
                                slug: "fash-photo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "nature-and-landscape-photographers",
                                title: "Nature and Landscape Photographers",
                                slug: "nat-land-photo",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "Illustrators",
                        title: "Illustrators",
                        slug: "illust",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "book-illustrators",
                                title: "Book Illustrators",
                                slug: "book-illust",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "editorial-illustrators",
                                title: "Editorial Illustrators",
                                slug: "edit-illust",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "graphic-designers",
                                title: "Graphic Designers",
                                slug: "grap-desig",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "comic-artists",
                                title: "Comic Artists",
                                slug: "comic-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "storyboard-artists",
                                title: "Storyboard Artists",
                                slug: "story-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "digital-artists",
                        title: "Digital Artists",
                        slug: "trad-sculp",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "digital-painters",
                                title: "Digital Painters",
                                slug: "digi-paint",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "graphic-designers",
                                title: "Graphic Designers",
                                slug: "grap-desig",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "3d-artists",
                                title: "3D Artists",
                                slug: "3d-artist",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "motion-graphics-artists",
                                title: "Motion Graphics Artists",
                                slug: "mot-gra-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "video-game-artists",
                                title: "Video Game Artists",
                                slug: "vdeo-gam-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "printmakers",
                        title: "Printmakers",
                        slug: "print-maker",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "etchers-and-lithographers",
                                title: "Etchers and Lithographers",
                                slug: "etch-litho",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "screen-printers",
                                title: "Screen Printers",
                                slug: "screen-print",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "woodcut-and-linocut-artists",
                                title: "Woodcut and Linocut Artists",
                                slug: "wood-lino-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "monotype-artists",
                                title: "Monotype Artists",
                                slug: "mono-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "conceptual-artists",
                        title: "Conceptual Artists",
                        slug: "conce-artist",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "conceptual-painters",
                                title: "Conceptual Painters",
                                slug: "conce-paint",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "performance-and-installation-artists",
                                title: "Performance and Installation Artists",
                                slug: "perf-inst-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "text-based-artists",
                                title: "Text-Based Artists",
                                slug: "text-base-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "street-and-urban-artists",
                        title: "Street and Urban Artists",
                        slug: "street-urb-art",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "graffiti-artists",
                                title: "Graffiti Artists",
                                slug: "graf-artist",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "muralists",
                                title: "Muralists",
                                slug: "muralist",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "street-installations",
                                title: "Street Installations",
                                slug: "street-install",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "sticker-and-poster-artists",
                                title: "Sticker and Poster Artists",
                                slug: "stick-post-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "textile-and-fabric-artists",
                        title: "Textile and Fabric Artists",
                        slug: "text-fab-art",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "quilters",
                                title: "Quilters",
                                slug: "quilters",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "fashion-artists",
                                title: "Fashion Artists",
                                slug: "fash-artist",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "weavers-and-fiber-artists",
                                title: "Weavers and Fiber Artists",
                                slug: "weav-fib-artist",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "textile-installations",
                                title: "Textile Installations",
                                slug: "text-install",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                    {
                        id: "glass-and-ceramic-artists",
                        title: "Glass and Ceramic Artists",
                        slug: "glass-c-art",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            {
                                id: "glassblowers",
                                title: "Glassblowers",
                                slug: "glass",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "ceramic-sculptors",
                                title: "Ceramic Sculptors",
                                slug: "cera-sculp",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "mosaic-artists",
                                title: "Mosaic Artists",
                                slug: "mos-art",
                                titleSuffix: "Management Company in Delhi",
                            },
                        ]
                    },
                ],
            },
            {
                id: "performing-artists",
                title: "Performing Artists",
                titleSuffix: "Management Company in Delhi",
                slug: "perform-artist",
                children: [
                    {
                        id: "performing-actors",
                        title: "Performing Actors",
                        titleSuffix: "Management Company in Delhi",
                        slug: "perform-actor",
                        children: []
                    },
                    {
                        id: "musicians-and-singers",
                        title: "Musicians and Singers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "music-singer",
                        children: []
                    },
                    {
                        id: "dancers",
                        title: "Dancers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "dancer",
                        children: [
                            {
                                id: "ballet-dancers",
                                title: "Ballet Dancers",
                                slug: "ball-dancer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "classical-ballet-dancers",
                                        title: "Classical Ballet Dancers",
                                        slug: "clas-ball-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                    {
                                        id: "neoclassical-ballet-dancers",
                                        title: "Neoclassical Ballet Dancers",
                                        slug: "neo-ball-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                    {
                                        id: "contemporary-ballet-dancers",
                                        title: "Contemporary Ballet Dancers",
                                        slug: "cont-ball-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                    {
                                        id: "character-dancers",
                                        title: "Character Dancers",
                                        slug: "char-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                    {
                                        id: "male-ballet-dancers",
                                        title: "Male Ballet Dancers",
                                        slug: "male-ball-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                    {
                                        id: "female-ballet-dancers",
                                        title: "Female Ballet Dancers",
                                        slug: "fem-ball-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                    {
                                        id: "ballet-dancers-specializing-in-pointe-work",
                                        title: "Ballet Dancers Specializing in Pointe Work",
                                        slug: "ball-danc-sp-work",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                    {
                                        id: "ballet-dancers-specializing-in-pas-de-deux",
                                        title: "Ballet Dancers Specializing in Pas de Deux",
                                        slug: "ball-dsp-deux",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                    {
                                        id: "ballet-dancers-in-modern-experimental-ballet",
                                        title: "Ballet Dancers in Modern & Experimental Ballet",
                                        slug: "ball-dme-ball",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                    {
                                        id: "ballet-dancers-in-ballet-companies",
                                        title: "Ballet Dancers in Ballet Companies",
                                        slug: "ball-dib-comp",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                    {
                                        id: "ballet-dancers-in-modern-experimental-ballet",
                                        title: "Ballet Dancers in Modern & Experimental Ballet",
                                        slug: "ball-dme-ball",
                                        titleSuffix: "Management Company in Delhi",
                                        children: []
                                    },
                                ]
                            },
                            {
                                id: "contemporary-dancers",
                                title: "Contemporary Dancers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "cont-dancer",
                                children: [
                                    {
                                        id: "modern-dance",
                                        title: "Modern Dance",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "modern-dance",
                                        children: []
                                    },
                                    {
                                        id: "release-technique",
                                        title: "Release Technique",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "relea-tech",
                                        children: []
                                    },
                                    {
                                        id: "improvisation",
                                        title: "Improvisation",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "impro",
                                        children: []
                                    },
                                    {
                                        id: "jazz-inspired-contemporary",
                                        title: "Jazz-Inspired Contemporary",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "jazz-ins-conte",
                                        children: []
                                    },
                                    {
                                        id: "floorwork",
                                        title: "Floorwork",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "floor-work",
                                        children: []
                                    },
                                    {
                                        id: "release-and-suspension",
                                        title: "Release and Suspension",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "relea-susp",
                                        children: []
                                    },
                                    {
                                        id: "fusion-styles",
                                        title: "Fusion Styles",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fusi-style",
                                        children: []
                                    },
                                    {
                                        id: "urban-contemporary",
                                        title: "Urban Contemporary",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "urbn-conte",
                                        children: []
                                    },
                                    {
                                        id: "narrative-contemporary-dance",
                                        title: "Narrative Contemporary Dance",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "narr-conte-dance",
                                        children: []
                                    },
                                ]
                            },
                            {
                                id: "hip-hop-dancers",
                                title: "Hip-Hop Dancers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "hip-hop-dance",
                                children: [
                                    {
                                        id: "breaking",
                                        title: "Breaking - B-boying & B-girling",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "breaking",
                                        children: []
                                    },
                                    {
                                        id: "popping",
                                        title: "popping",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "popping",
                                        children: []
                                    },
                                    {
                                        id: "locking",
                                        title: "locking",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "locking",
                                        children: []
                                    },
                                    {
                                        id: "krumping",
                                        title: "krumping",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "krumping",
                                        children: []
                                    },
                                    {
                                        id: "house-dance",
                                        title: "House Dance",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "house-dance",
                                        children: []
                                    },
                                    {
                                        id: "hip-hop-choreography",
                                        title: "Hip-Hop Choreography",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "hip-hop-chore",
                                        children: []
                                    },
                                    {
                                        id: "memphis-jookin",
                                        title: "Memphis Jookin",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "memp-jookin",
                                        children: []
                                    },
                                    {
                                        id: "turfing",
                                        title: "turfing",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "turfing",
                                        children: []
                                    },
                                    {
                                        id: "dancehall",
                                        title: "dancehall",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "dance-hall",
                                        children: []
                                    },
                                ]
                            },
                            {
                                id: "latin-and-ballroom-dancers",
                                title: "Latin and Ballroom Dancers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "lat-ball-dance",
                                children: [
                                    {
                                        id: "latin-dancers",
                                        title: "Latin Dancers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "latin-dance",
                                        children: []
                                    },
                                    {
                                        id: "ballroom-dancers",
                                        title: "Ballroom Dancers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "ball-rm-dance",
                                        children: []
                                    },
                                    {
                                        id: "social-and-other-latin-and-ballroom-dances",
                                        title: "Social and Other Latin and Ballroom Dances",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "soc-olb-dance",
                                        children: []
                                    },
                                ]
                            },
                            {
                                id: "folk-and-traditional-dancers",
                                title: "Folk and Traditional Dancers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "folk-trd-dance",
                                children: [
                                    {
                                        id: "indian-folk-and-traditional-dancers",
                                        title: "Indian Folk and Traditional Dancers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "ind-fat-dance",
                                        children: [
                                            {
                                                id: "kuchipudi",
                                                title: "Kuchipudi (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kuchipudi",
                                            },
                                            {
                                                id: "butta-bommalu",
                                                title: "Butta Bommalu (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "butta-bommalu",
                                            },
                                            {
                                                id: "lambadi-dance",
                                                title: "Lambadi Dance - Banjara Dance (Andhra Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lambadi-dance",
                                            },
                                            {
                                                id: "dappu-dance",
                                                title: "Dappu Dance (Andhra Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dappu-dance",
                                            },
                                            {
                                                id: "kolattam",
                                                title: "Kolattam (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kolattam",
                                            },
                                            {
                                                id: "veeragase",
                                                title: "Veeragase (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "veeragase",
                                            },
                                            {
                                                id: "chindu-yakshaganam",
                                                title: "Chindu Yakshaganam (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chindu-yaksh-ganam",
                                            },
                                            {
                                                id: "burrakatha",
                                                title: "Burrakatha (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "burra-katha",
                                            },
                                            {
                                                id: "nautanki",
                                                title: "Nautanki (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "nautanki",
                                            },
                                            {
                                                id: "tappeta-gullu",
                                                title: "Tappeta Gullu (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tappeta-gullu",
                                            },
                                            {
                                                id: "jangam",
                                                title: "Jangam (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jangam",
                                            },
                                            {
                                                id: "koya-dance",
                                                title: "Koya Dance (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "koya-dance",
                                            },
                                            {
                                                id: "rama-krishna-dance",
                                                title: "Rama Krishna Dance (Andhra Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rama-krishna",
                                            },
                                            {
                                                id: "oggu-katha",
                                                title: "Oggu Katha (Andhra Pradesh) Dance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "oggu-katha",
                                            },
                                        ]
                                    },

                                ]
                            }
                        ]
                    },
                    {
                        id: "comedians",
                        title: "Comedians",
                        titleSuffix: "Management Company in Delhi",
                        slug: "comedians",
                        children: []
                    },
                    {
                        id: "magicians-and-illusionists",
                        title: "Magicians and Illusionists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "magic-Illus",
                        children: []
                    },
                    {
                        id: "circus-performers",
                        title: "Circus Performers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "circus-perform",
                        children: []
                    },
                    {
                        id: "performance-artists",
                        title: "Performance Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "perform-artist",
                        children: []
                    },
                    {
                        id: "speakers-and-hosts",
                        title: "Speakers and Hosts",
                        titleSuffix: "Management Company in Delhi",
                        slug: "speak-hosts",
                        children: []
                    },
                    {
                        id: "opera-performers",
                        title: "Opera Performers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "opera-perform",
                        children: []
                    },
                    {
                        id: "musical-theater-artists",
                        title: "Musical Theater Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "music-the-artist",
                        children: []
                    },
                    {
                        id: "street-performers",
                        title: "Street Performers (Buskers)",
                        titleSuffix: "Management Company in Delhi",
                        slug: "street-perform",
                        children: []
                    },
                    {
                        id: "Voice Performers",
                        title: "Voice Performers (Spoken Word & Poetry)",
                        titleSuffix: "Management Company in Delhi",
                        slug: "voice-perform",
                        children: []
                    },

                ]
            },
            {
                id: "writers-and-authors",
                title: "Writers and Authors",
                titleSuffix: "Management Company in Delhi",
                slug: "writer-author",
                children: [
                    {
                        id: "novelists",
                        title: "Novelists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "novelist",
                        children: []
                    },
                    {
                        id: "poets",
                        title: "Poets",
                        titleSuffix: "Management Company in Delhi",
                        slug: "poets",
                        children: []
                    },
                    {
                        id: "screenwriters",
                        title: "Screenwriters",
                        titleSuffix: "Management Company in Delhi",
                        slug: "scr-writer",
                        children: []
                    },
                    {
                        id: "playwrights",
                        title: "Playwrights",
                        titleSuffix: "Management Company in Delhi",
                        slug: "ply-wright",
                        children: []
                    },
                    {
                        id: "journalists-and-columnists",
                        title: "Journalists and Columnists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "jornl-and-column",
                        children: []
                    },
                    {
                        id: "nonfiction-writers",
                        title: "Nonfiction Writers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "nonfi-writer",
                        children: []
                    },
                    {
                        id: "copywriters",
                        title: "Copywriters",
                        titleSuffix: "Management Company in Delhi",
                        slug: "copy-writer",
                        children: []
                    },
                    {
                        id: "content-writer",
                        title: "Content Writers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "content-writer",
                        children: []
                    },
                    {
                        id: "technical-writers",
                        title: "Technical Writers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "technical-writer",
                        children: []
                    },
                    {
                        id: "speechwriters",
                        title: "Speechwriters",
                        titleSuffix: "Management Company in Delhi",
                        slug: "speech-writer",
                        children: []
                    },
                    {
                        id: "playwrights-for-interactive-and-video-games",
                        title: "Playwrights for Interactive and Video Games",
                        titleSuffix: "Management Company in Delhi",
                        slug: "play-fiab-game",
                        children: []
                    },
                    {
                        id: "speech-and-debate-writers",
                        title: "Speech and Debate Writers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "spch-deb-writer",
                        children: []
                    },
                ]
            },
            {
                id: "fashion-designers",
                title: "Fashion Designers",
                titleSuffix: "Management Company in Delhi",
                slug: "fashion-design",
                children: [
                    {
                        id: "haute-couture-designers",
                        title: "Haute Couture Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "haut-cout-dsigner",
                        children: []
                    },
                    {
                        id: "ready-to-wear-designers",
                        title: "Ready-to-Wear Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "rdy-to-wear-dsigner",
                    },
                    {
                        id: "sportswear-designers",
                        title: "Sportswear Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "sprt-wear-dsigner",
                        children: []
                    },
                    {
                        id: "footwear-designers",
                        title: "Footwear Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "ft-wear-dsigner",
                    },
                    {
                        id: "accessory-designers",
                        title: "Accessory Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "access-dsigner",
                        children: []
                    },
                    {
                        id: "textile-designers",
                        title: "Textile Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "text-dsigner",
                    },
                    {
                        id: "costume-designers",
                        title: "Costume Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "cost-dsigner",
                    },
                    {
                        id: "childrens-wear-designers",
                        title: "Children’s Wear Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "child-wear-dsigner",
                    },
                    {
                        id: "sustainable-or-eco-friendly-fashion-designers",
                        title: "Sustainable or Eco-Friendly Fashion Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "sust-eff-dsigner",
                    },
                    {
                        id: "bridal-and-evening-wear-designers",
                        title: "Bridal and Evening Wear Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "brd-eve-wear-dsigner",
                    },
                    {
                        id: "streetwear-designers",
                        title: "Streetwear Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "str-wear-dsigner",
                    },
                    {
                        id: "fashion-stylists",
                        title: "Fashion Stylists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "fashion-stylist",
                    },
                    {
                        id: "conceptual-fashion-designers",
                        title: "Conceptual Fashion Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "concep-fash-dsigner",
                    },
                    {
                        id: "virtual-fashion-designers",
                        title: "Virtual Fashion Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "virtu-fash-dsigner",
                    },
                    {
                        id: "costume-and-fashion-designers-for-theme-parks",
                        title: "Costume and Fashion Designers for Theme Parks",
                        titleSuffix: "Management Company in Delhi",
                        slug: "cost-fdft-park",
                        children: []
                    },
                    {
                        id: "maternity-wear-designers",
                        title: "Maternity Wear Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "matr-wr-dsigner",
                        children: []
                    },
                    {
                        id: "lingerie-and-underwear-designers",
                        title: "Lingerie and Underwear Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "ling-undr-dsigner",
                        children: []
                    },
                    {
                        id: "plus-size-fashion-designers",
                        title: "Plus-Size Fashion Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "plus-size-fash-dsigner",
                    },
                    {
                        id: "runway-fashion-designers",
                        title: "Runway Fashion Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "run-fash-dsigner",
                    },
                    {
                        id: "urban-fashion-designers",
                        title: "Urban Fashion Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "urbn-fash-dsigner",
                    },
                ]
            },
            {
                id: "film-and-television-artists",
                title: "Film and Television Artists",
                titleSuffix: "Management Company in Delhi",
                slug: "film-tele-artist",
                children: [
                    {
                        id: "film-actors",
                        title: "film Actors",
                        titleSuffix: "Management Company in Delhi",
                        slug: "film-actor",
                        children: []
                    },
                    {
                        id: "film-directors",
                        title: "Film Directors",
                        titleSuffix: "Management Company in Delhi",
                        slug: "film-director",
                    },
                    {
                        id: "film-producers",
                        title: "film Producers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "film-producer",
                        children: []
                    },
                    {
                        id: "film-screenwriters",
                        title: "Film Screenwriter",
                        titleSuffix: "Management Company in Delhi",
                        slug: "film-scr-writer",
                        children: []
                    },
                    {
                        id: "cinematographers",
                        title: "Cinematographers (Directors of Photography)",
                        titleSuffix: "Management Company in Delhi",
                        slug: "cinema-grapher",
                        children: []
                    },
                    {
                        id: "production-designers",
                        title: "Production Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "prod-dsigner",
                    },
                    {
                        id: "makeup-artists",
                        title: "Makeup Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "mkup-artist",
                    },
                    {
                        id: "sound-designers",
                        title: "Sound Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "sound-designer",
                    },
                    {
                        id: "composers",
                        title: "Composers - Film andTV Music",
                        titleSuffix: "Management Company in Delhi",
                        slug: "composer",
                    },
                    {
                        id: "stunt-performers",
                        title: "Stunt Performers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "stunt-performer",
                    },
                    {
                        id: "choreographers",
                        title: "Choreographers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "choreo-grapher",
                    },
                    {
                        id: "casting-sirectors",
                        title: "Casting Directors",
                        titleSuffix: "Management Company in Delhi",
                        slug: "casting-director",
                    },
                    {
                        id: "voiceover-artists",
                        title: "Voiceover Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "voice-over-artist",
                    },
                    {
                        id: "animators",
                        title: "Animators",
                        titleSuffix: "Management Company in Delhi",
                        slug: "animators",
                    },
                    {
                        id: "vfx-artists",
                        title: "VFX Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "vfx-artist",
                    },
                    {
                        id: "set-designers",
                        title: "Set Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "set-dsigner",
                    },
                    {
                        id: "lighting-designers",
                        title: "Lighting Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "lighting-dsigner",
                    },
                    {
                        id: "public-relations-and-marketing-teams",
                        title: "Public Relations and Marketing Teams",
                        titleSuffix: "Management Company in Delhi",
                        slug: "Public-rel-mkt-team",
                    },
                    {
                        id: "talent-managers",
                        title: "Talent Managers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "telent-manager",
                    },
                ]
            },


        ]
    },


    // Wedding Management
    {
        id: "wedding-planning",
        title: "Wedding Planning",
        titleSuffix: "Management Company in Delhi",
        slug: "wedd-plan",
        children: [
            {
                id: "traditional-weddings",
                title: "Traditional Weddings",
                titleSuffix: "Management Company in Delhi",
                slug: "trd-wed",
                children: [
                    { id: "christian-weddings", title: "Christian Weddings", slug: "chr-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "jewish-weddings", title: "Jewish Weddings", slug: "jew-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "hindu-weddings", title: "Hindu Weddings", slug: "hin-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "muslim-weddings", title: "Muslim Weddings", slug: "mus-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "sikh-weddings", title: "Sikh Weddings", slug: "sik-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "buddhist-weddings", title: "Buddhist Weddings", slug: "bud-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "african-traditional-weddings", title: "African Traditional Weddings", slug: "afr-tra-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "chinese-weddings", title: "Chinese Weddings", slug: "chi-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "japanese-weddings", title: "Japanese Weddings", slug: "jap-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "latin-american-weddings", title: "Latin American Weddings", slug: "lat-ame-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "european-traditional-weddings", title: "European Traditional Weddings", slug: "eur-tra-wed", titleSuffix: "Management Company in Delhi" },
                    { id: "indigenous-weddings", title: "Indigenous Weddings", slug: "ind-wed", titleSuffix: "Management Company in Delhi" }
                ]
            },
            {
                id: "destination-weddings",
                title: "Destination Weddings",
                titleSuffix: "Management Company in Delhi",
                slug: "dest-wed",
                children: [
                    {
                        id: "beach-weddings",
                        title: "Beach Weddings",
                        slug: "bea-wed",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            { id: "maldives", title: "Maldives", slug: "mal-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "hawaii-usa", title: "Hawaii (USA)", slug: "haw-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "bora-bora-french-polynesia", title: "Bora Bora (French Polynesia)", slug: "bor-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "tulum-mexico", title: "Tulum (Mexico)", slug: "tul-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "santorini-greece", title: "Santorini (Greece)", slug: "san-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "fiji", title: "Fiji", slug: "fij-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "jamaica", title: "Jamaica", slug: "jam-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "bahamas", title: "Bahamas", slug: "bah-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "amalfi-coast-italy", title: "Amalfi Coast (Italy)", slug: "ama-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "phuket-thailand", title: "Phuket (Thailand)", slug: "phu-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "seychelles", title: "Seychelles", slug: "sey-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "mauritius", title: "Mauritius", slug: "mau-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "zanzibar-tanzania", title: "Zanzibar (Tanzania)", slug: "zan-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "kerala-india", title: "Kerala (India)", slug: "ker-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "punta-cana-dominican-republic", title: "Punta Cana (Dominican Republic)", slug: "pun-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "barbados", title: "Barbados", slug: "bar-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "cabo-san-lucas-mexico", title: "Cabo San Lucas (Mexico)", slug: "cab-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "bali-indonesia", title: "Bali (Indonesia)", slug: "bal-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "canary-islands-spain", title: "The Canary Islands (Spain)", slug: "can-wed", titleSuffix: "Management Company in Delhi" },
                            { id: "costa-rica", title: "Costa Rica", slug: "cos-wed", titleSuffix: "Management Company in Delhi" }

                        ]
                    },
                    {
                        id: "mountain-weddings",
                        title: "Mountain Weddings",
                        slug: "moun-wed",
                        titleSuffix: "Management Company in Delhi",
                        children: [
                            { id: "swiss-alps-switzerland", title: "Swiss Alps (Switzerland)", slug: "sws-alp-swt", titleSuffix: "Management Company in Delhi" },
                            { id: "rocky-mountains-usa-canada", title: "Rocky Mountains (USA & Canada)", slug: "roc-mou-usa-can", titleSuffix: "Management Company in Delhi" },
                            { id: "dolomites-italy", title: "Dolomites (Italy)", slug: "dol-mou-ita", titleSuffix: "Management Company in Delhi" },
                            { id: "himalayas-nepal-india", title: "Himalayas (Nepal & India)", slug: "him-nep-ind", titleSuffix: "Management Company in Delhi" },
                            { id: "banff-national-park-canada", title: "Banff National Park (Canada)", slug: "ban-nat-park-can", titleSuffix: "Management Company in Delhi" },
                            { id: "lake-tahoe-usa", title: "Lake Tahoe (USA)", slug: "lak-tah-usa", titleSuffix: "Management Company in Delhi" },
                            { id: "kyoto-mountains-japan", title: "Kyoto Mountains (Japan)", slug: "kyo-mou-jpn", titleSuffix: "Management Company in Delhi" },
                            { id: "chamonix-france", title: "Chamonix (France)", slug: "cha-fra", titleSuffix: "Management Company in Delhi" },
                            { id: "tasmanian-wilderness-australia", title: "Tasmanian Wilderness (Australia)", slug: "tas-wil-aus", titleSuffix: "Management Company in Delhi" },
                            { id: "patagonia-argentina-chile", title: "Patagonia (Argentina & Chile)", slug: "pat-arg-chi", titleSuffix: "Management Company in Delhi" },
                            { id: "whistler-canada", title: "Whistler (Canada)", slug: "whi-can", titleSuffix: "Management Company in Delhi" },
                            { id: "mount-hood-usa", title: "Mount Hood (USA)", slug: "mou-hood-usa", titleSuffix: "Management Company in Delhi" },
                            { id: "tatra-mountains", title: "Tatra Mountains (Poland & Slovakia)", slug: "tat-mou-pol-svk", titleSuffix: "Management Company in Delhi" },
                            { id: "andes-south-america", title: "The Andes (South America)", slug: "and-sou-ame", titleSuffix: "Management Company in Delhi" },
                            { id: "mt-fuji-japan", title: "Mt. Fuji (Japan)", slug: "mt-fuji-japan", titleSuffix: "Management Company in Delhi" },
                            { id: "alaska-usa", title: "Alaska (USA)", slug: "ala-usa", titleSuffix: "Management Company in Delhi" },
                            { id: "scotland-highlands-uk", title: "Scotland Highlands (United Kingdom)", slug: "sco-high-uk", titleSuffix: "Management Company in Delhi" },
                            { id: "aoraki-mount-cook", title: "Aoraki/Mount Cook National Park (New Zealand)", slug: "aor-mou-cook", titleSuffix: "Management Company in Delhi" },
                            { id: "mont-blanc", title: "Mont Blanc (France/Italy/Switzerland)", slug: "mont-blanc", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                ]

            },


        ]
    },


    // Exhibition Management
    {
        id: "exhibition",
        title: "Exhibition",
        titleSuffix: "Management Company in Delhi",
        slug: "exhbn",
        children: [
            {
                id: "trade-exhibitions",
                title: "Trade Exhibitions",
                titleSuffix: "Management Company in Delhi",
                slug: "trd-exh",
                children: [
                    { id: "industrial-trade-exhibitions", title: "Industrial Trade Exhibitions", slug: "ite", titleSuffix: "Management Company in Delhi" },
                    { id: "technology-trade-exhibitions", title: "Technology Trade Exhibitions", slug: "tte", titleSuffix: "Management Company in Delhi" },
                    { id: "automotive-trade-exhibitions", title: "Automotive Trade Exhibitions", slug: "ate", titleSuffix: "Management Company in Delhi" },
                    { id: "fashion-apparel-trade-exhibitions", title: "Fashion and Apparel Trade Exhibitions", slug: "fate", titleSuffix: "Management Company in Delhi" },
                    { id: "food-beverage-trade-exhibitions", title: "Food and Beverage Trade Exhibitions", slug: "fbte", titleSuffix: "Management Company in Delhi" },
                    { id: "healthcare-medical-trade-exhibitions", title: "Healthcare and Medical Trade Exhibitions", slug: "hmte", titleSuffix: "Management Company in Delhi" },
                    { id: "beauty-personal-care-trade-exhibitions", title: "Beauty and Personal Care Trade Exhibitions", slug: "bpce", titleSuffix: "Management Company in Delhi" },
                    { id: "real-estate-trade-exhibitions", title: "Real Estate Trade Exhibitions", slug: "rete", titleSuffix: "Management Company in Delhi" },
                    { id: "retail-ecommerce-trade-exhibitions", title: "Retail and E-Commerce Trade Exhibitions", slug: "ret-exh", titleSuffix: "Management Company in Delhi" },
                    { id: "travel-tourism-trade-exhibitions", title: "Travel and Tourism Trade Exhibitions", slug: "ttt-exh", titleSuffix: "Management Company in Delhi" },
                    { id: "creative-media-trade-exhibitions", title: "Creative and Media Trade Exhibitions", slug: "cmt-exh", titleSuffix: "Management Company in Delhi" },
                    { id: "construction-building-trade-exhibitions", title: "Construction and Building Trade Exhibitions", slug: "cbt-exh", titleSuffix: "Management Company in Delhi" },
                    { id: "logistics-supply-chain-trade-exhibitions", title: "Logistics and Supply Chain Trade Exhibitions", slug: "lsc-tra-exh", titleSuffix: "Management Company in Delhi" },
                    { id: "media-publishing-trade-exhibitions", title: "Media and Publishing Trade Exhibitions", slug: "mpt-exh", titleSuffix: "Management Company in Delhi" }
                ]
            },

        ]
    },


    // Conferences
    {
        id: "conferences",
        title: "Conferences",
        titleSuffix: "Management Company in Delhi",
        slug: "cm",
        children: [
            {
                id: "academic-conferences",
                title: "Academic Conferences",
                titleSuffix: "Management Company in Delhi",
                slug: "acs",
                children: [
                    { id: "subject-specific-conferences", title: "Disciplinary or Subject-Specific Conferences", slug: "dss-con", titleSuffix: "Management Company in Delhi" },
                    { id: "interdisciplinary-conferences", title: "Interdisciplinary Conferences", slug: "int-con", titleSuffix: "Management Company in Delhi" },
                    { id: "international-conferences", title: "International Conferences", slug: "intc", titleSuffix: "Management Company in Delhi" },
                    { id: "national-conferences", title: "National Conferences", slug: "nat-con", titleSuffix: "Management Company in Delhi" },
                    { id: "regional-conferences", title: "Regional Conferences", slug: "reg-con", titleSuffix: "Management Company in Delhi" },
                    { id: "symposiums", title: "Symposiums", slug: "sym", titleSuffix: "Management Company in Delhi" },
                    { id: "workshops-seminars", title: "Workshops and Seminars", slug: "was", titleSuffix: "Management Company in Delhi" },
                    { id: "virtual-conferences", title: "Virtual or Online Conferences", slug: "voc", titleSuffix: "Management Company in Delhi" },
                    // { id: "annual-conferences-academic", title: "Annual Conferences", slug: "aca", titleSuffix: "Management Company in Delhi" },
                    { id: "professional-development-academic", title: "Professional Development Acedemic", slug: "pdc-aca", titleSuffix: "Management Company in Delhi" },
                    { id: "research-conferences", title: "Research Conferences", slug: "res-con", titleSuffix: "Management Company in Delhi" },
                    { id: "graduate-conferences", title: "Graduate and Postgraduate Conferences", slug: "grp-con", titleSuffix: "Management Company in Delhi" },
                    { id: "academic-networking", title: "Academic Networking Conferences", slug: "anc", titleSuffix: "Management Company in Delhi" }
                ]
            },

        ]
    },

    // Theme Parties
    {
        id: "theme-parties",
        title: "Theme Parties",
        titleSuffix: "Management Company in Delhi",
        slug: "tp",
        children: [
            { id: "masquerade-ball", title: "Masquerade Ball", slug: "mas-ball", titleSuffix: "Management Company in Delhi" },
            { id: "hollywood-red-carpet", title: "Hollywood or Red Carpet Party", slug: "hrc-par", titleSuffix: "Management Company in Delhi" },
            { id: "hawaiian-luau", title: "Hawaiian Luau", slug: "hlp", titleSuffix: "Management Company in Delhi" },
            { id: "retro-vintage", title: "Retro or Vintage Party", slug: "rvp", titleSuffix: "Management Company in Delhi" },
            { id: "carnival-circus", title: "Carnival or Circus Party", slug: "ccp", titleSuffix: "Management Company in Delhi" },
            { id: "casino-night", title: "Casino Night", slug: "cnp", titleSuffix: "Management Company in Delhi" },
            { id: "mystery-dinner", title: "Masquerade or Mystery Dinner Party", slug: "mmd-par", titleSuffix: "Management Company in Delhi" },
            { id: "superhero", title: "Superhero Party", slug: "stp", titleSuffix: "Management Company in Delhi" },
            { id: "fairytale-fantasy", title: "Fairytale or Fantasy Party", slug: "ffp", titleSuffix: "Management Company in Delhi" },
            { id: "nautical", title: "Under the Sea or Nautical Party", slug: "usn-par", titleSuffix: "Management Company in Delhi" },
            { id: "wild-west", title: "Wild West or Cowboy Party", slug: "wwc-par", titleSuffix: "Management Company in Delhi" },
            { id: "sci-fi", title: "Futuristic or Sci-Fi Party", slug: "fcf-par", titleSuffix: "Management Company in Delhi" },
            { id: "alice-wonderland", title: "Alice in Wonderland Party", slug: "aiw-par", titleSuffix: "Management Company in Delhi" },
            { id: "sports-theme", title: "Sports Theme Party", slug: "spo-the-par", titleSuffix: "Management Company in Delhi" },
            { id: "murder-mystery", title: "Murder Mystery Party", slug: "mmp", titleSuffix: "Management Company in Delhi" },
            { id: "time-travel", title: "Time Travel Party", slug: "ttp", titleSuffix: "Management Company in Delhi" },
            { id: "glow-dark", title: "Glow in the Dark Party", slug: "git-dar-par", titleSuffix: "Management Company in Delhi" },
            { id: "tropical-paradise", title: "Tropical Paradise Party", slug: "tpp", titleSuffix: "Management Company in Delhi" },
            { id: "pirate", title: "Pirate Party", slug: "ptp", titleSuffix: "Management Company in Delhi" },
            { id: "garden", title: "Garden Party", slug: "gpt", titleSuffix: "Management Company in Delhi" },
            { id: "sports-fan", title: "Sports Team Fan Party", slug: "stf-par", titleSuffix: "Management Company in Delhi" },
            { id: "wildlife-safari", title: "Wildlife / Safari Party", slug: "wsp", titleSuffix: "Management Company in Delhi" },
            { id: "victorian-tea", title: "Victorian Tea Party", slug: "vtp", titleSuffix: "Management Company in Delhi" },
            { id: "chocolate-dessert", title: "Chocolate or Dessert Party", slug: "cdp", titleSuffix: "Management Company in Delhi" },
            { id: "anime-manga", title: "Anime or Manga Party", slug: "amp", titleSuffix: "Management Company in Delhi" },
            { id: "boho-chic", title: "Boho Chic Party", slug: "boho-chic-party", titleSuffix: "Management Company in Delhi" },
            { id: "hollywood-glamour", title: "Hollywood Glamour Party", slug: "hgp", titleSuffix: "Management Company in Delhi" }
        ]
    },


    // Brand Prmotion
    {
        id: "brand-promotion",
        title: "Brand Promotion",
        titleSuffix: "Management Company in Delhi",
        slug: "bp",
        children: [
            {
                id: "product-launch-events",
                title: "Product Launch Events",
                titleSuffix: "Management Company in Delhi",
                slug: "ple",
                children: [
                    { id: "in-store-launch", title: "In-Store Product Launch Events", slug: "isp-lau-eve", titleSuffix: "Management Company in Delhi" },
                    { id: "online-launch", title: "Online Product Launch Events", slug: "opl-eve", titleSuffix: "Management Company in Delhi" },
                    { id: "press-media-launch", title: "Press and Media Launch Events", slug: "pml-eve", titleSuffix: "Management Company in Delhi" },
                    { id: "celebrity-influencer-launch", title: "Celebrity and Influencer Launch Events", slug: "cil-eve", titleSuffix: "Management Company in Delhi" },
                    { id: "vip-launch", title: "Exclusive VIP Product Launch Events", slug: "vpl-eve", titleSuffix: "Management Company in Delhi" },
                    { id: "expo-launch", title: "Trade Show and Expo Launches", slug: "tse-lau", titleSuffix: "Management Company in Delhi" },
                    { id: "experiential-launch", title: "Experiential Product Launch Events", slug: "epl-eve", titleSuffix: "Management Company in Delhi" },
                    { id: "launch-parties", title: "Launch Parties", slug: "plp", titleSuffix: "Management Company in Delhi" },
                    { id: "cross-promotional-launch", title: "Cross-Promotional Product Launch Events", slug: "cpl-eve", titleSuffix: "Management Company in Delhi" },
                    { id: "popup-experiences", title: "Pop-Up Experiences", slug: "ppe", titleSuffix: "Management Company in Delhi" },
                    { id: "community-launch", title: "Community and Local Launch Events", slug: "cll-eve", titleSuffix: "Management Company in Delhi" },
                    { id: "webinars-demos", title: "Webinars and Online Product Demos", slug: "wop-dem", titleSuffix: "Management Company in Delhi" },
                    { id: "vr-ar-launch", title: "Interactive Virtual Reality (VR) or Augmented Reality (AR) Launches", slug: "vr-ar-pl", titleSuffix: "Management Company in Delhi" },
                    { id: "international-launch", title: "International Product Launch Events", slug: "ipl-eve", titleSuffix: "Management Company in Delhi" }
                ]
            },

        ]
    }

];