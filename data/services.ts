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
                                title: "Marketing Strategy Meetings",
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
                            { id: "rnb-singers", title: "R & B Singers", slug: "rnb-sin", titleSuffix: "Management Company in Delhi" },
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
                                children: [
                                    {
                                        id: "conceptual-photographers",
                                        title: "Conceptual Photographers",
                                        slug: "conceptual-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "landscape-photographers",
                                        title: "Landscape Photographers",
                                        slug: "landscape-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "black-and-white-photographers",
                                        title: "Black and White Photographers",
                                        slug: "black-white-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "abstract-photographers",
                                        title: "Abstract Photographers",
                                        slug: "abstract-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "commercial-photographers",
                                title: "Commercial Photographers",
                                slug: "comm-photo",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "product-photographers",
                                        title: "Product Photographers",
                                        slug: "product-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "food-photographers",
                                        title: "Food Photographers",
                                        slug: "food-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "real-estate-photographers",
                                        title: "Real Estate Photographers",
                                        slug: "real-estate-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "architectural-photographers",
                                        title: "Architectural Photographers",
                                        slug: "architectural-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "documentary-photographers",
                                title: "Documentary Photographers",
                                slug: "docu-photo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "stock-photographers",
                                title: "Stock Photographers",
                                slug: "stock-photographer",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "virtual-digital-photographers",
                                title: "Virtual and Digital Photographers",
                                slug: "digital-photographer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "3d-virtual-photographers",
                                        title: "3D and Virtual Photographers",
                                        slug: "3d-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "360-degree-photographers",
                                        title: "360-Degree Photographers",
                                        slug: "360-degree-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "aerial-photographers",
                                title: "Aerial Photographers",
                                slug: "aerial-photographer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "drone-photographers",
                                        title: "Drone Photographers",
                                        slug: "drone-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "aerial-mapping-surveying-photographers",
                                        title: "Aerial Mapping and Surveying Photographers",
                                        slug: "aerial-map-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "pet-photographers",
                                title: "Pet Photographers",
                                slug: "pet-photographer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "pet-portrait-photographers",
                                        title: "Pet Portrait Photographers",
                                        slug: "pet-port-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "animal-behavior-photographers",
                                        title: "Animal Behavior Photographers",
                                        slug: "animal-behave-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "commercial-fashion-advertising-photographers",
                                title: "Commercial Fashion and Advertising Photographers",
                                slug: "comm-advertise-photographer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "editorial-fashion-photographers",
                                        title: "Editorial Fashion Photographers",
                                        slug: "edit-fashion-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "advertising-commercial-product-photographers",
                                        title: "Advertising and Commercial Product Photographers",
                                        slug: "comm-product-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "cosmetic-photographers",
                                        title: "Cosmetic Photographers",
                                        slug: "cosmetic-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "photographer-for-social-media-influencers",
                                title: "Photographers for Social Media and Influencers",
                                slug: "social-media-photographer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "influencer-photographers",
                                        title: "Influencer Photographers",
                                        slug: "influencer-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "lifestyle-influencer-photographers",
                                        title: "Lifestyle Influencer Photographers",
                                        slug: "lifestyle-influe-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "product-photography-for-influencers",
                                        title: "Product Photography for Influencers",
                                        slug: "product-photography",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "nature-wildlife-photographers",
                                title: "Nature and Wildlife Photographers",
                                slug: "nature-wild-photographer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "wildlife-photographers",
                                        title: "Wildlife Photographers",
                                        slug: "wildlife-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "nature-photographers",
                                        title: "Nature Photographers",
                                        slug: "nature-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "underwater-photographers",
                                        title: "Underwater Photographers",
                                        slug: "underwater-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "sports-photographers",
                                title: "Sports Photographers",
                                slug: "sports-photographer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "action-sports-photographers",
                                        title: "Action Sports Photographers",
                                        slug: "action-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "studio-sports-photographers",
                                        title: "Studio Sports Photographers",
                                        slug: "std-sports-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "sports-journalism-photographers",
                                        title: "Sports Journalism Photographers",
                                        slug: "journalism-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "fashion-photographers",
                                title: "Fashion Photographers",
                                slug: "fash-photo",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "runway-fashion-photographers",
                                        title: "Runway Fashion Photographers",
                                        slug: "runway-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "commercial-fashion-photographers",
                                        title: "Commercial Fashion Photographers",
                                        slug: "commercial-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "nature-and-landscape-photographers",
                                title: "Nature and Landscape Photographers",
                                slug: "nat-land-photo",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "portrait-photographers",
                                title: "Portrait Photographers",
                                slug: "portrait-photographer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "studio-portrait-photographers",
                                        title: "Studio Portrait Photographers",
                                        slug: "studio-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "environmental-portrait-photographers",
                                        title: "Environmental Portrait Photographers",
                                        slug: "environmental-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "lifestyle-portrait-photographers",
                                        title: "Lifestyle Portrait Photographers",
                                        slug: "lifestyle-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "celebrity-portrait-photographers",
                                        title: "Celebrity Portrait Photographers",
                                        slug: "cele-portra-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "event-photographers",
                                title: "Event Photographers",
                                slug: "event-photographer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "wedding-photographers",
                                        title: "Wedding Photographers",
                                        slug: "wedding-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "corporate-event-photographers",
                                        title: "Corporate Event Photographers",
                                        slug: "corporate-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "concert-music-photographers",
                                        title: "Concert and Music Photographers",
                                        slug: "concert-music-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "party-social-event-photographers",
                                        title: "Party and Social Event Photographers",
                                        slug: "social-event-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "engagement-photographers",
                                        title: "Wedding and Engagement Photographers",
                                        slug: "engagement-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            },
                            {
                                id: "documentary-photojournalism-photographers",
                                title: "Documentary and Photojournalism Photographers",
                                slug: "documentary-photographer",
                                titleSuffix: "Management Company in Delhi",
                                children: [
                                    {
                                        id: "news-photographers",
                                        title: "News Photographers",
                                        slug: "news-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "war-conflict-photographers",
                                        title: "War and Conflict Photographers",
                                        slug: "war-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                    {
                                        id: "travel-photographers",
                                        title: "Travel Photographers",
                                        slug: "travel-photographer",
                                        titleSuffix: "Management Company in Delhi",
                                    },
                                ]
                            }
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
                        children: [
                            {
                                id: "theatrical-actors",
                                title: "Theatrical Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "theatrical-actors",
                            },
                            {
                                id: "film-and-tv-actors",
                                title: "Film and TV Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "film-and-tv-actors",
                            },
                            {
                                id: "voice-actors",
                                title: "Voice Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "voice-actors",
                            },
                            {
                                id: "commercial-and-commercial-print-models",
                                title: "Commercial and Commercial Print Models",
                                titleSuffix: "Management Company in Delhi",
                                slug: "commercial-prnt-models",
                            },
                        ]
                    },
                    {
                        id: "musicians-and-singers",
                        title: "Musicians and Singers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "music-singer",
                        children: [
                            {
                                id: "solo-musicians",
                                title: "Solo Musicians",
                                titleSuffix: "Management Company in Delhi",
                                slug: "solo-musicians",
                            },
                            {
                                id: "bands-and-ensembles",
                                title: "Bands and Ensembles",
                                titleSuffix: "Management Company in Delhi",
                                slug: "bands-and-ensembles",
                            },
                            {
                                id: "opera-singers",
                                title: "Opera Singers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "opera-singers",
                            },
                            {
                                id: "theater-musicians",
                                title: "Theater Musicians",
                                titleSuffix: "Management Company in Delhi",
                                slug: "theater-musicians",
                            },
                            {
                                id: "djs-and-electronic-musicians",
                                title: "DJs and Electronic Musicians",
                                titleSuffix: "Management Company in Delhi",
                                slug: "djs-and-ele-musicians",
                            },
                        ]
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
                                        children: [
                                            {
                                                id: "principals",
                                                title: "Principals",
                                                slug: "principals",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                            {
                                                id: "soloists",
                                                title: "Soloists",
                                                slug: "soloists",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                            {
                                                id: "corps-de-ballet",
                                                title: "Corps de Ballet",
                                                slug: "corps-de-ballet",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                            {
                                                id: "coryphees",
                                                title: "Coryphées",
                                                slug: "coryphees",
                                                titleSuffix: "Management Company in Delhi",
                                            },

                                        ]
                                    },
                                    {
                                        id: "neoclassical-ballet-dancers",
                                        title: "Neoclassical Ballet Dancers",
                                        slug: "neo-ball-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: [
                                            {
                                                id: "lead-dancers",
                                                title: "Lead Dancers",
                                                slug: "lead-dancers",
                                                titleSuffix: "Management Company in Delhi",
                                            }
                                        ]
                                    },
                                    {
                                        id: "contemporary-ballet-dancers",
                                        title: "Contemporary Ballet Dancers",
                                        slug: "cont-ball-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: [
                                            {
                                                id: "lead-contmry-dan",
                                                title: "Lead Contemporary Dancers",
                                                slug: "lead-contmry-dan",
                                                titleSuffix: "Management Company in Delhi",
                                            }
                                        ]
                                    },
                                    {
                                        id: "character-dancers",
                                        title: "Character Dancers",
                                        slug: "char-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: [
                                            {
                                                id: "male-char-dancer",
                                                title: "Male Character Dancer",
                                                slug: "male-char-dancer",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                            {
                                                id: "female-char-dancer",
                                                title: "Female Character Dancer",
                                                slug: "female-char-dancer",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                        ]
                                    },
                                    {
                                        id: "male-ballet-dancers",
                                        title: "Male Ballet Dancers",
                                        slug: "male-ball-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: [
                                            {
                                                id: "principal-dancer",
                                                title: "Principal Dancer",
                                                slug: "principal-dancer",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                            {
                                                id: "pas-de-deux",
                                                title: "Pas de Deux Partner",
                                                slug: "pas-de-deux",
                                                titleSuffix: "Management Company in Delhi",
                                            },

                                        ]
                                    },
                                    {
                                        id: "female-ballet-dancers",
                                        title: "Female Ballet Dancers",
                                        slug: "fem-ball-danc",
                                        titleSuffix: "Management Company in Delhi",
                                        children: [
                                            {
                                                id: "prim-ballerina",
                                                title: "Prima Ballerina",
                                                slug: "prim-ballerina",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                            {
                                                id: "first-soloist",
                                                title: "First Soloist",
                                                slug: "first-soloist",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                        ]
                                    },
                                    {
                                        id: "ballet-dancers-specializing-in-pointe-work",
                                        title: "Ballet Dancers Specializing in Pointe Work",
                                        slug: "ball-danc-sp-work",
                                        titleSuffix: "Management Company in Delhi",
                                        children: [
                                            {
                                                id: "prima-ballerina-asslta",
                                                title: "Prima Ballerina Assoluta",
                                                slug: "prima-ballerina-asslta",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                        ]
                                    },
                                    {
                                        id: "ballet-dancers-specializing-in-pas-de-deux",
                                        title: "Ballet Dancers Specializing in Pas de Deux",
                                        slug: "ball-dsp-deux",
                                        titleSuffix: "Management Company in Delhi",
                                        children: [
                                            {
                                                id: "lead-maule-partner",
                                                title: "Lead Male Partner",
                                                slug: "lead-male-partner",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                            {
                                                id: "female-lead",
                                                title: "Lead Female Partner",
                                                slug: "female-lead",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                        ]
                                    },
                                    {
                                        id: "ballet-dancers-in-ballet-companies",
                                        title: "Ballet Dancers in Ballet Companies",
                                        slug: "ball-dib-comp",
                                        titleSuffix: "Management Company in Delhi",
                                        children: [
                                            {
                                                id: "artistic-director",
                                                title: "Artistic Director",
                                                slug: "artistic-director",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                            {
                                                id: "demi-soloists",
                                                title: "Demi-Soloists",
                                                slug: "demi-soloists",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                            {
                                                id: "apprentices",
                                                title: "Apprentices",
                                                slug: "apprentices",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                        ]
                                    },
                                    {
                                        id: "ballet-dancers-in-modern-experimental-ballet",
                                        title: "Ballet Dancers in Modern & Experimental Ballet",
                                        slug: "ball-dme-ball",
                                        titleSuffix: "Management Company in Delhi",
                                        children: [
                                            {
                                                id: "exp-mental-dancers",
                                                title: "Experimental Ballet Dancers",
                                                slug: "exp-mental-dancers",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                            {
                                                id: "collaborative-dancers",
                                                title: "Collaborative Dancers",
                                                slug: "collaborative-dancers",
                                                titleSuffix: "Management Company in Delhi",
                                            },
                                        ]
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
                                        children: [
                                            {
                                                id: "graham-technique",
                                                title: "Graham Technique",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "graham-technique",
                                            },
                                            {
                                                id: "cunningham-technique",
                                                title: "Cunningham Technique",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "cunnin-technique",
                                            },
                                            {
                                                id: "limon-technique",
                                                title: "Limon Technique",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "cunnin-technique",
                                            },
                                            {
                                                id: "horton-technique",
                                                title: "Horton Technique",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "horton-technique"
                                            },

                                        ]
                                    },
                                    {
                                        id: "release-technique",
                                        title: "Release Technique",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "relea-tech",
                                        children: [
                                            {
                                                id: "alexander-technique",
                                                title: "Alexander Technique",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "alex-technique",
                                            },
                                            {
                                                id: "feldenkraise-technique",
                                                title: "Feldenkrais Method",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "feld-technique",
                                            },
                                            {
                                                id: "bart-funcamental",
                                                title: "Bartenieff Fundamentals",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bart-fundamental",
                                            },
                                        ]
                                    },
                                    {
                                        id: "improvisation",
                                        title: "Improvisation",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "impro",
                                        children: [
                                            {
                                                id: "cont-improvisation",
                                                title: "Contact Improvisation",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "cont-improvisation",
                                            },
                                            {
                                                id: "structured-improvisation",
                                                title: "Structured Improvisation",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "struct-improvisation",
                                            },
                                            {
                                                id: "free-improvisation",
                                                title: "Free Improvisation",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "free-improvisation",
                                            },
                                        ]
                                    },
                                    {
                                        id: "jazz-inspired-contemporary",
                                        title: "Jazz-Inspired Contemporary",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "jazz-ins-conte",
                                        children: [
                                            {
                                                id: "lyrical-contemporary",
                                                title: "Lyrical Contemporary",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lyrical-contemporary",
                                            },
                                            {
                                                id: "jazz-funk",
                                                title: "Jazz-Funk",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jazz-funk",
                                            },
                                            {
                                                id: "contemporary-jazz",
                                                title: "Contemporary Jazz",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "contemporary-jazz",
                                            },
                                        ]
                                    },
                                    {
                                        id: "floorwork",
                                        title: "Floorwork",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "floor-work",
                                        children: [
                                            {
                                                id: "floor-work-contemp",
                                                title: "Floor Work in Contemporary",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "floor-work-contemp",
                                            },
                                            {
                                                id: "contact-work",
                                                title: "Contact Work",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "contact-work",
                                            },
                                        ]
                                    },
                                    {
                                        id: "release-and-suspension",
                                        title: "Release and Suspension",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "relea-susp",
                                        children: [
                                            {
                                                id: "weight-sharing",
                                                title: "Weight Sharing",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "weight-sharing",
                                            },
                                            {
                                                id: "suspended-movement",
                                                title: "Suspended Movement",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "suspended-movement",
                                            },
                                            {
                                                id: "release-and-fall",
                                                title: "Release and Fall",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "release-and-fall",
                                            },
                                        ]
                                    },
                                    {
                                        id: "fusion-styles",
                                        title: "Fusion Styles",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fusi-style",
                                        children: [
                                            {
                                                id: "hip-hop-contmry-fus",
                                                title: "Hip-Hop Contemporary Fusion",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "hip-hop-contmry-fus",
                                            },
                                            {
                                                id: "contmry-flamenco",
                                                title: "Contemporary Flamenco",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "contmry-flamenco",
                                            },
                                            {
                                                id: "indian-contmry-fus",
                                                title: "Indian Contemporary Fusion",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "indian-contmry-fus",
                                            },
                                        ]
                                    },
                                    {
                                        id: "urban-contemporary",
                                        title: "Urban Contemporary",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "urbn-conte",
                                        children: [
                                            {
                                                id: "contmpry-hip-hop",
                                                title: "Contemporary Hip-Hop",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "contmpry-hip-hop",
                                            },
                                            {
                                                id: "street-contmry",
                                                title: "Street Contemporary",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "street-contmry",
                                            },
                                        ]
                                    },
                                    {
                                        id: "narrative-contemporary-dance",
                                        title: "Narrative Contemporary Dance",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "narr-conte-dance",
                                        children: [
                                            {
                                                id: "physical-theater",
                                                title: "Physical Theater",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "physical-theater",
                                            },
                                            {
                                                id: "dance-theater",
                                                title: "Dance Theater",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dance-theater",
                                            },
                                        ]
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
                                        title: "Popping",
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
                                        title: "Krumping",
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
                                        title: "Turfing",
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

                                            {
                                                id: "sankranti-dance-andhra-pradesh",
                                                title: "Sankranti Dance (Andhra Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sankranti-dance-andhra-pradesh",
                                            },
                                            {
                                                id: "siddi-dance-andhra-pradesh",
                                                title: "Siddi Dance (Andhra Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "siddi-dance-andhra-pradesh",
                                            },
                                            {
                                                id: "kuchipudi-natya-andhra-pradesh",
                                                title: "Kuchipudi Natya (Andhra Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kuchipudi-natya-andhra-pradesh",
                                            },
                                            {
                                                id: "gangireddulu-dance-andhra-pradesh",
                                                title: "Gangireddulu Dance (Andhra Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gangireddulu-dance-andhra-pradesh",
                                            },
                                            {
                                                id: "buiya-dance-arunachal-pradesh",
                                                title: "Buiya Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "buiya-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "ponung-dance-arunachal-pradesh",
                                                title: "Ponung Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ponung-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "bari-dance-arunachal-pradesh",
                                                title: "Bari Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bari-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "aji-lamu-dance-arunachal-pradesh",
                                                title: "Aji Lamu Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "aji-lamu-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "lion-dance-arunachal-pradesh",
                                                title: "Lion Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lion-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "ngandam-dance-arunachal-pradesh",
                                                title: "Ngandam Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ngandam-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "mishing-bihu-dance-arunachal-pradesh",
                                                title: "Mishing Bihu Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mishing-bihu-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "popir-dance-arunachal-pradesh",
                                                title: "Popir Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "popir-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "dree-dance-arunachal-pradesh",
                                                title: "Dree Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dree-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "idu-mishmi-dance-arunachal-pradesh",
                                                title: "Idu Mishmi Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "idu-mishmi-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "wangla-dance-arunachal-pradesh",
                                                title: "Wangla Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "wangla-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "buddhist-monpa-dance-arunachal-pradesh",
                                                title: "Buddhist Monpa Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "buddhist-monpa-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "fagli-dance-arunachal-pradesh",
                                                title: "Fagli Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fagli-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "mibu-dance-arunachal-pradesh",
                                                title: "Mibu Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mibu-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "galo-dance-arunachal-pradesh",
                                                title: "Galo Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "galo-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "hojagiri-dance-arunachal-pradesh",
                                                title: "Hojagiri Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "hojagiri-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "rang-ghar-dance-arunachal-pradesh",
                                                title: "Rang Ghar Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rang-ghar-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "dumang-dance-arunachal-pradesh",
                                                title: "Dumang Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dumang-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "tamang-dance-arunachal-pradesh",
                                                title: "Tamang Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tamang-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "buddhist-chhewar-dance-arunachal-pradesh",
                                                title: "Buddhist Chhewar Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "buddhist-chhewar-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "konyak-dance-arunachal-pradesh",
                                                title: "Konyak Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "konyak-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "pasi-dance-arunachal-pradesh",
                                                title: "Pasi Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pasi-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "changlang-dance-arunachal-pradesh",
                                                title: "Changlang Dance (Arunachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "changlang-dance-arunachal-pradesh",
                                            },
                                            {
                                                id: "sattriya-assam",
                                                title: "Sattriya (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sattriya-assam",
                                            },
                                            {
                                                id: "jhumur-assam",
                                                title: "Jhumur (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhumur-assam",
                                            },
                                            {
                                                id: "bihu-assam",
                                                title: "Bihu (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bihu-assam",
                                            },
                                            {
                                                id: "bagurumba-assam",
                                                title: "Bagurumba (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bagurumba-assam",
                                            },
                                            {
                                                id: "ali-ai-ligang-dance-assam",
                                                title: "Ali Ai Ligang Dance (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ali-ai-ligang-dance-assam",
                                            },
                                            {
                                                id: "deodhani-dance-assam",
                                                title: "Deodhani Dance (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "deodhani-dance-assam",
                                            },
                                            {
                                                id: "bhortal-dance-assam",
                                                title: "Bhortal Dance (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhortal-dance-assam",
                                            },
                                            {
                                                id: "ojapali-dance-assam",
                                                title: "Ojapali Dance (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ojapali-dance-assam",
                                            },
                                            {
                                                id: "tiwa-dance-assam",
                                                title: "Tiwa Dance (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tiwa-dance-assam",
                                            },
                                            {
                                                id: "rabha-dance-assam",
                                                title: "Rabha Dance (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rabha-dance-assam",
                                            },
                                            {
                                                id: "ka-shad-mastieh-dance-assam",
                                                title: "Ka Shad Mastieh Dance (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ka-shad-mastieh-dance-assam",
                                            },
                                            {
                                                id: "kushan-dance-assam",
                                                title: "Kushan Dance (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kushan-dance-assam",
                                            },
                                            {
                                                id: "dhol-cholom-assam",
                                                title: "Dhol Cholom (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhol-cholom-assam",
                                            },
                                            {
                                                id: "mishing-bihu-dance-assam",
                                                title: "Mishing Bihu Dance (Assam)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mishing-bihu-dance-assam",
                                            },

                                            {
                                                id: "bidesia-bihar",
                                                title: "Bidesia (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bidesia-bihar",
                                            },
                                            {
                                                id: "jhijhiya-bihar",
                                                title: "Jhijhiya (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhijhiya-bihar",
                                            },
                                            {
                                                id: "fagua-bihar",
                                                title: "Fagua (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fagua-bihar",
                                            },
                                            {
                                                id: "biharian-jat-jatin-bihar",
                                                title: "Biharian Jat-Jatin (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "biharian-jat-jatin-bihar",
                                            },
                                            {
                                                id: "lori-bihar",
                                                title: "Lori (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lori-bihar",
                                            },
                                            {
                                                id: "chhau-dance-bihar",
                                                title: "Chhau Dance (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chhau-dance-bihar",
                                            },
                                            {
                                                id: "jhumar-bihar",
                                                title: "Jhumar (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhumar-bihar",
                                            },
                                            {
                                                id: "kachaudi-dance-bihar",
                                                title: "Kachaudi Dance (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kachaudi-dance-bihar",
                                            },
                                            {
                                                id: "satnami-bihar",
                                                title: "Satnami (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "satnami-bihar",
                                            },
                                            {
                                                id: "panchhi-dance-bihar",
                                                title: "Panchhi Dance (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "panchhi-dance-bihar",
                                            },
                                            {
                                                id: "nautanki-bihar",
                                                title: "Nautanki (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "nautanki-bihar",
                                            },
                                            {
                                                id: "dhamal-bihar",
                                                title: "Dhamal (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhamal-bihar",
                                            },
                                            {
                                                id: "sama-chakeva-bihar",
                                                title: "Sama Chakeva (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sama-chakeva-bihar",
                                            },
                                            {
                                                id: "madhubani-dance-bihar",
                                                title: "Madhubani Dance (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "madhubani-dance-bihar",
                                            },
                                            {
                                                id: "sohar-dance-bihar",
                                                title: "Sohar Dance (Bihar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sohar-dance-bihar",
                                            },

                                            {
                                                id: "raut-nacha-chhattisgarh",
                                                title: "Raut Nacha (Chhattisgarh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "raut-nacha-chhattisgarh",
                                            },
                                            {
                                                id: "pandavani-chhattisgarh",
                                                title: "Pandavani (Chhattisgarh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pandavani-chhattisgarh",
                                            },
                                            {
                                                id: "panthi-dance-chhattisgarh",
                                                title: "Panthi Dance (Chhattisgarh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "panthi-dance-chhattisgarh",
                                            },
                                            {
                                                id: "karma-dance-chhattisgarh",
                                                title: "Karma Dance (Chhattisgarh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "karma-dance-chhattisgarh",
                                            },
                                            {
                                                id: "sua-nacha-chhattisgarh",
                                                title: "Sua Nacha (Chhattisgarh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sua-nacha-chhattisgarh",
                                            },
                                            {
                                                id: "gendi-dance-chhattisgarh",
                                                title: "Gendi Dance (Chhattisgarh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gendi-dance-chhattisgarh",
                                            },
                                            {
                                                id: "danda-nacha-chhattisgarh",
                                                title: "Danda Nacha (Chhattisgarh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "danda-nacha-chhattisgarh",
                                            },
                                            {
                                                id: "bastar-bison-horn-dance-chhattisgarh",
                                                title: "Bastar Bison Horn Dance (Chhattisgarh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bastar-bison-horn-dance-chhattisgarh",
                                            },
                                            {
                                                id: "mandari-dance-chhattisgarh",
                                                title: "Mandari Dance (Chhattisgarh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mandari-dance-chhattisgarh",
                                            },
                                            {
                                                id: "gaur-maria-dance-chhattisgarh",
                                                title: "Gaur Maria Dance (Chhattisgarh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gaur-maria-dance-chhattisgarh",
                                            },

                                            {
                                                id: "dekhni-goa",
                                                title: "Dekhni (Goa)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dekhni-goa",
                                            },
                                            {
                                                id: "fugdi-goa",
                                                title: "Fugdi (Goa)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fugdi-goa",
                                            },
                                            {
                                                id: "dhalo-goa",
                                                title: "Dhalo (Goa)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhalo-goa",
                                            },
                                            {
                                                id: "corridinho-goa",
                                                title: "Corridinho (Goa)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "corridinho-goa",
                                            },
                                            {
                                                id: "ghode-modni-goa",
                                                title: "Ghode Modni (Goa)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ghode-modni-goa",
                                            },
                                            {
                                                id: "lamp-dance-goa",
                                                title: "Lamp Dance (Goa)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lamp-dance-goa",
                                            },
                                            {
                                                id: "kunbi-dance-goa",
                                                title: "Kunbi Dance (Goa)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kunbi-dance-goa",
                                            },
                                            {
                                                id: "zagor-goa",
                                                title: "Zagor (Goa)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "zagor-goa",
                                            },
                                            {
                                                id: "mando-dance-goa",
                                                title: "Mando Dance (Goa)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mando-dance-goa",
                                            },
                                            {
                                                id: "romat-dance-goa",
                                                title: "Romat Dance (Goa)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "romat-dance-goa",
                                            },

                                            {
                                                id: "garba-gujarat",
                                                title: "Garba (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "garba-gujarat",
                                            },
                                            {
                                                id: "dandiya-raas-gujarat",
                                                title: "Dandiya Raas (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dandiya-raas-gujarat",
                                            },
                                            {
                                                id: "tanzara-gujarat",
                                                title: "Tanzara (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tanzara-gujarat",
                                            },
                                            {
                                                id: "tippani-dance-gujarat",
                                                title: "Tippani Dance (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tippani-dance-gujarat",
                                            },
                                            {
                                                id: "bhavai-gujarat",
                                                title: "Bhavai (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhavai-gujarat",
                                            },
                                            {
                                                id: "hudo-dance-gujarat",
                                                title: "Hudo Dance (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "hudo-dance-gujarat",
                                            },
                                            {
                                                id: "padhar-dance-gujarat",
                                                title: "Padhar Dance (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "padhar-dance-gujarat",
                                            },
                                            {
                                                id: "dangi-dance-gujarat",
                                                title: "Dangi Dance (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dangi-dance-gujarat",
                                            },
                                            {
                                                id: "sidi-dhamal-gujarat",
                                                title: "Sidi Dhamal (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sidi-dhamal-gujarat",
                                            },
                                            {
                                                id: "mer-ras-gujarat",
                                                title: "Mer Ras (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mer-ras-gujarat",
                                            },
                                            {
                                                id: "matukadi-dance-gujarat",
                                                title: "Matukadi Dance (Gujarat)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "matukadi-dance-gujarat",
                                            },

                                            {
                                                id: "dhamal-haryana",
                                                title: "Dhamal (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhamal-haryana",
                                            },
                                            {
                                                id: "ghoomar-haryana",
                                                title: "Ghoomar (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ghoomar-haryana",
                                            },
                                            {
                                                id: "khoria-dance-haryana",
                                                title: "Khoria Dance (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "khoria-dance-haryana",
                                            },
                                            {
                                                id: "daph-dance-haryana",
                                                title: "Daph Dance (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "daph-dance-haryana",
                                            },
                                            {
                                                id: "loor-haryana",
                                                title: "Loor (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "loor-haryana",
                                            },
                                            {
                                                id: "gugga-dance-haryana",
                                                title: "Gugga Dance (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gugga-dance-haryana",
                                            },
                                            {
                                                id: "jhumar-haryana",
                                                title: "Jhumar (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhumar-haryana",
                                            },
                                            {
                                                id: "ras-leela-haryana",
                                                title: "Ras Leela (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ras-leela-haryana",
                                            },
                                            {
                                                id: "saang-haryana",
                                                title: "Saang (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "saang-haryana",
                                            },
                                            {
                                                id: "teej-dance-haryana",
                                                title: "Teej Dance (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "teej-dance-haryana",
                                            },
                                            {
                                                id: "chhathi-dance-haryana",
                                                title: "Chhathi Dance (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chhathi-dance-haryana",
                                            },
                                            {
                                                id: "phag-dance-haryana",
                                                title: "Phag Dance (Haryana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "phag-dance-haryana",
                                            },
                                            {
                                                id: "nati-himachal-pradesh",
                                                title: "Nati (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "nati-himachal-pradesh",
                                            },
                                            {
                                                id: "kullu-nati-himachal-pradesh",
                                                title: "Kullu Nati (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kullu-nati-himachal-pradesh",
                                            },
                                            {
                                                id: "shan-himachal-pradesh",
                                                title: "Shan (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "shan-himachal-pradesh",
                                            },
                                            {
                                                id: "dangi-himachal-pradesh",
                                                title: "Dangi (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dangi-himachal-pradesh",
                                            },
                                            {
                                                id: "chhambha-himachal-pradesh",
                                                title: "Chhambha (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chhambha-himachal-pradesh",
                                            },
                                            {
                                                id: "lahauli-dance-himachal-pradesh",
                                                title: "Lahauli Dance (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lahauli-dance-himachal-pradesh",
                                            },
                                            {
                                                id: "jhoori-himachal-pradesh",
                                                title: "Jhoori (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhoori-himachal-pradesh",
                                            },
                                            {
                                                id: "rasa-dance-himachal-pradesh",
                                                title: "Rasa Dance (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rasa-dance-himachal-pradesh",
                                            },
                                            {
                                                id: "gee-dance-himachal-pradesh",
                                                title: "Gee Dance (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gee-dance-himachal-pradesh",
                                            },
                                            {
                                                id: "kharait-himachal-pradesh",
                                                title: "Kharait (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kharait-himachal-pradesh",
                                            },
                                            {
                                                id: "bakayang-himachal-pradesh",
                                                title: "Bakayang (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bakayang-himachal-pradesh",
                                            },
                                            {
                                                id: "dandras-himachal-pradesh",
                                                title: "Dandras (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dandras-himachal-pradesh",
                                            },
                                            {
                                                id: "dhurang-himachal-pradesh",
                                                title: "Dhurang (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhurang-himachal-pradesh",
                                            },
                                            {
                                                id: "droh-himachal-pradesh",
                                                title: "Droh (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "droh-himachal-pradesh",
                                            },
                                            {
                                                id: "bissu-himachal-pradesh",
                                                title: "Bissu (Himachal Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bissu-himachal-pradesh",
                                            },

                                            {
                                                id: "chhau-jharkhand",
                                                title: "Chhau (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chhau-jharkhand",
                                            },
                                            {
                                                id: "sohrai-jharkhand",
                                                title: "Sohrai (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sohrai-jharkhand",
                                            },
                                            {
                                                id: "paitkar-jharkhand",
                                                title: "Paitkar (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "paitkar-jharkhand",
                                            },
                                            {
                                                id: "jhumar-jharkhand",
                                                title: "Jhumar (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhumar-jharkhand",
                                            },
                                            {
                                                id: "fagua-dance-jharkhand",
                                                title: "Fagua Dance (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fagua-dance-jharkhand",
                                            },
                                            {
                                                id: "domkach-jharkhand",
                                                title: "Domkach (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "domkach-jharkhand",
                                            },
                                            {
                                                id: "mundari-dance-jharkhand",
                                                title: "Mundari Dance (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mundari-dance-jharkhand",
                                            },
                                            {
                                                id: "santhali-dance-jharkhand",
                                                title: "Santhali Dance (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "santhali-dance-jharkhand",
                                            },
                                            {
                                                id: "karma-dance-jharkhand",
                                                title: "Karma Dance (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "karma-dance-jharkhand",
                                            },
                                            {
                                                id: "sarhul-dance-jharkhand",
                                                title: "Sarhul Dance (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sarhul-dance-jharkhand",
                                            },
                                            {
                                                id: "nachni-dance-jharkhand",
                                                title: "Nachni Dance (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "nachni-dance-jharkhand",
                                            },
                                            {
                                                id: "barao-dance-jharkhand",
                                                title: "Barao Dance (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "barao-dance-jharkhand",
                                            },
                                            {
                                                id: "ghora-naach-jharkhand",
                                                title: "Ghora Naach (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ghora-naach-jharkhand",
                                            },
                                            {
                                                id: "bans-naach-jharkhand",
                                                title: "Bans Naach (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bans-naach-jharkhand",
                                            },
                                            {
                                                id: "phagua-dance-jharkhand",
                                                title: "Phagua Dance (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "phagua-dance-jharkhand",
                                            },
                                            {
                                                id: "bidesia-dance-jharkhand",
                                                title: "Bidesia Dance (Jharkhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bidesia-dance-jharkhand",
                                            },

                                            {
                                                id: "yakshagana-karnataka",
                                                title: "Yakshagana (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "yakshagana-karnataka",
                                            },
                                            {
                                                id: "kamsale-karnataka",
                                                title: "Kamsale (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kamsale-karnataka",
                                            },
                                            {
                                                id: "veeragase-karnataka",
                                                title: "Veeragase (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "veeragase-karnataka",
                                            },
                                            {
                                                id: "dollu-kunitha-karnataka",
                                                title: "Dollu Kunitha (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dollu-kunitha-karnataka",
                                            },
                                            {
                                                id: "gidda-karnataka",
                                                title: "Gidda (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gidda-karnataka",
                                            },
                                            {
                                                id: "ravana-hatha-karnataka",
                                                title: "Ravana Hatha (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ravana-hatha-karnataka",
                                            },
                                            {
                                                id: "kolata-karnataka",
                                                title: "Kolata (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kolata-karnataka",
                                            },
                                            {
                                                id: "channapatna-dance-karnataka",
                                                title: "Channapatna Dance (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "channapatna-dance-karnataka",
                                            },
                                            {
                                                id: "bhavageethe-dance-karnataka",
                                                title: "Bhavageethe Dance (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhavageethe-dance-karnataka",
                                            },
                                            {
                                                id: "melethirtha-dance-karnataka",
                                                title: "Melethirtha Dance (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "melethirtha-dance-karnataka",
                                            },
                                            {
                                                id: "siddi-dance-karnataka",
                                                title: "Siddi Dance (Karnataka)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "siddi-dance-karnataka",
                                            },
                                            {
                                                id: "ottamthullal-kerala",
                                                title: "Ottamthullal (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ottamthullal-kerala",
                                            },
                                            {
                                                id: "theyyam-kerala",
                                                title: "Theyyam (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "theyyam-kerala",
                                            },
                                            {
                                                id: "kathakali-kerala",
                                                title: "Kathakali (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kathakali-kerala",
                                            },
                                            {
                                                id: "mohiniyattam-kerala",
                                                title: "Mohiniyattam (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mohiniyattam-kerala",
                                            },
                                            {
                                                id: "koodiyattam-kerala",
                                                title: "Koodiyattam (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "koodiyattam-kerala",
                                            },
                                            {
                                                id: "oppana-kerala",
                                                title: "Oppana (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "oppana-kerala",
                                            },
                                            {
                                                id: "thiruvathira-kerala",
                                                title: "Thiruvathira (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "thiruvathira-kerala",
                                            },
                                            {
                                                id: "chakyar-koothu-kerala",
                                                title: "Chakyar Koothu (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chakyar-koothu-kerala",
                                            },
                                            {
                                                id: "margam-kali-kerala",
                                                title: "Margam Kali (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "margam-kali-kerala",
                                            },
                                            {
                                                id: "pulsar-kuthu-kerala",
                                                title: "Pulsar Kuthu (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pulsar-kuthu-kerala",
                                            },
                                            {
                                                id: "kolkali-kerala",
                                                title: "Kolkali (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kolkali-kerala",
                                            },
                                            {
                                                id: "vallamkali-kerala",
                                                title: "Vallamkali (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "vallamkali-kerala",
                                            },
                                            {
                                                id: "kalaripayattu-kerala",
                                                title: "Kalaripayattu (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kalaripayattu-kerala",
                                            },
                                            {
                                                id: "thumbi-thullal-kerala",
                                                title: "Thumbi Thullal (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "thumbi-thullal-kerala",
                                            },
                                            {
                                                id: "ayyappan-thullal-kerala",
                                                title: "Ayyappan Thullal (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ayyappan-thullal-kerala",
                                            },
                                            {
                                                id: "kettukazha-kerala",
                                                title: "Kettukazha (Kerala)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kettukazha-kerala",
                                            },

                                            {
                                                id: "chholiya-madhya-pradesh",
                                                title: "Chholiya (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chholiya-madhya-pradesh",
                                            },
                                            {
                                                id: "gondi-dance-madhya-pradesh",
                                                title: "Gondi Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gondi-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "padhar-madhya-pradesh",
                                                title: "Padhar (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "padhar-madhya-pradesh",
                                            },
                                            {
                                                id: "ladakh-dance-madhya-pradesh",
                                                title: "Ladakh Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ladakh-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "badhai-madhya-pradesh",
                                                title: "Badhai (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "badhai-madhya-pradesh",
                                            },
                                            {
                                                id: "gond-dance-madhya-pradesh",
                                                title: "Gond Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gond-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "lavani-madhya-pradesh",
                                                title: "Lavani (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lavani-madhya-pradesh",
                                            },
                                            {
                                                id: "karma-dance-madhya-pradesh",
                                                title: "Karma Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "karma-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "dandia-madhya-pradesh",
                                                title: "Dandia (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dandia-madhya-pradesh",
                                            },
                                            {
                                                id: "matki-dance-madhya-pradesh",
                                                title: "Matki Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "matki-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "raut-nacha-madhya-pradesh",
                                                title: "Raut Nacha (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "raut-nacha-madhya-pradesh",
                                            },
                                            {
                                                id: "bhargavani-dance-madhya-pradesh",
                                                title: "Bhargavani Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhargavani-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "kachhi-ghodi-madhya-pradesh",
                                                title: "Kachhi Ghodi (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kachhi-ghodi-madhya-pradesh",
                                            },
                                            {
                                                id: "saila-dance-madhya-pradesh",
                                                title: "Saila Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "saila-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "charkula-dance-madhya-pradesh",
                                                title: "Charkula Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "charkula-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "tertali-dance-madhya-pradesh",
                                                title: "Tertali Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tertali-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "gher-dance-madhya-pradesh",
                                                title: "Gher Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gher-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "bison-horn-dance-madhya-pradesh",
                                                title: "Bison Horn Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bison-horn-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "banjara-dance-madhya-pradesh",
                                                title: "Banjara Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "banjara-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "adivasi-dance-madhya-pradesh",
                                                title: "Adivasi Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "adivasi-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "jhumar-dance-madhya-pradesh",
                                                title: "Jhumar Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhumar-dance-madhya-pradesh",
                                            },
                                            {
                                                id: "sankheda-dance-madhya-pradesh",
                                                title: "Sankheda Dance (Madhya Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sankheda-dance-madhya-pradesh",
                                            },

                                            {
                                                id: "kathyawadi-dance-maharashtra",
                                                title: "Kathyawadi Dance (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kathyawadi-dance-maharashtra",
                                            },
                                            {
                                                id: "lavani-maharashtra",
                                                title: "Lavani (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lavani-maharashtra",
                                            },
                                            {
                                                id: "dholki-maharashtra",
                                                title: "Dholki (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dholki-maharashtra",
                                            },
                                            {
                                                id: "koli-maharashtra",
                                                title: "Koli (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "koli-maharashtra",
                                            },
                                            {
                                                id: "tamasha-maharashtra",
                                                title: "Tamasha (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tamasha-maharashtra",
                                            },
                                            {
                                                id: "dhangari-gaja-maharashtra",
                                                title: "Dhangari Gaja (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhangari-gaja-maharashtra",
                                            },
                                            {
                                                id: "gondhal-maharashtra",
                                                title: "Gondhal (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gondhal-maharashtra",
                                            },
                                            {
                                                id: "povada-maharashtra",
                                                title: "Povada (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "povada-maharashtra",
                                            },
                                            {
                                                id: "bharud-maharashtra",
                                                title: "Bharud (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bharud-maharashtra",
                                            },
                                            {
                                                id: "lezim-dance-maharashtra",
                                                title: "Lezim Dance (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lezim-dance-maharashtra",
                                            },
                                            {
                                                id: "fugdi-maharashtra",
                                                title: "Fugdi (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fugdi-maharashtra",
                                            },
                                            {
                                                id: "kalgi-tura-maharashtra",
                                                title: "Kalgi-Tura (Maharashtra)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kalgi-tura-maharashtra",
                                            },

                                            {
                                                id: "manipuri-manipur",
                                                title: "Manipuri (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "manipuri-manipur",
                                            },
                                            {
                                                id: "pung-cholom-manipur",
                                                title: "Pung Cholom (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pung-cholom-manipur",
                                            },
                                            {
                                                id: "raas-leela-manipur",
                                                title: "Raas Leela (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "raas-leela-manipur",
                                            },
                                            {
                                                id: "thang-ta-manipur",
                                                title: "Thang Ta (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "thang-ta-manipur",
                                            },
                                            {
                                                id: "maibi-jagoi-manipur",
                                                title: "Maibi Jagoi (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "maibi-jagoi-manipur",
                                            },
                                            {
                                                id: "lai-haraoba-dance-manipur",
                                                title: "Lai Haraoba Dance (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lai-haraoba-dance-manipur",
                                            },
                                            {
                                                id: "khamba-thoibi-dance-manipur",
                                                title: "Khamba Thoibi Dance (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "khamba-thoibi-dance-manipur",
                                            },
                                            {
                                                id: "nupa-pala-manipur",
                                                title: "Nupa Pala (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "nupa-pala-manipur",
                                            },
                                            {
                                                id: "moirang-sai-manipur",
                                                title: "Moirang Sai (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "moirang-sai-manipur",
                                            },

                                            {
                                                id: "gouralila-manipur",
                                                title: "Gouralila (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gouralila-manipur",
                                            },
                                            {
                                                id: "khousaba-dance-manipur",
                                                title: "Khousaba Dance (Manipur)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "khousaba-dance-manipur",
                                            },

                                            {
                                                id: "shad-suk-mynsiem-meghalaya",
                                                title: "Shad Suk Mynsiem (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "shad-suk-mynsiem-meghalaya",
                                            },
                                            {
                                                id: "laho-dance-meghalaya",
                                                title: "Laho Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "laho-dance-meghalaya",
                                            },
                                            {
                                                id: "wangla-dance-meghalaya",
                                                title: "Wangla Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "wangla-dance-meghalaya",
                                            },
                                            {
                                                id: "bhortal-dance-meghalaya",
                                                title: "Bhortal Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhortal-dance-meghalaya",
                                            },
                                            {
                                                id: "nongkrem-dance-meghalaya",
                                                title: "Nongkrem Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "nongkrem-dance-meghalaya",
                                            },
                                            {
                                                id: "dhokna-dance-meghalaya",
                                                title: "Dhokna Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhokna-dance-meghalaya",
                                            },
                                            {
                                                id: "chhemlap-dance-meghalaya",
                                                title: "Chhemlap Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chhemlap-dance-meghalaya",
                                            },
                                            {
                                                id: "shad-khein-phan-meghalaya",
                                                title: "Shad Khein Phan (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "shad-khein-phan-meghalaya",
                                            },
                                            {
                                                id: "pator-dance-meghalaya",
                                                title: "Pator Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pator-dance-meghalaya",
                                            },
                                            {
                                                id: "rangmang-dance-meghalaya",
                                                title: "Rangmang Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rangmang-dance-meghalaya",
                                            },
                                            {
                                                id: "jhumair-dance-meghalaya",
                                                title: "Jhumair Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhumair-dance-meghalaya",
                                            },
                                            {
                                                id: "khadum-dance-meghalaya",
                                                title: "Khadum Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "khadum-dance-meghalaya",
                                            },
                                            {
                                                id: "sokhe-dance-meghalaya",
                                                title: "Sokhe Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sokhe-dance-meghalaya",
                                            },
                                            {
                                                id: "kynthei-shad-dance-meghalaya",
                                                title: "Kynthei Shad Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kynthei-shad-dance-meghalaya",
                                            },
                                            {
                                                id: "laying-dance-meghalaya",
                                                title: "Laying Dance (Meghalaya)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "laying-dance-meghalaya",
                                            },

                                            {
                                                id: "cheraw-dance-mizoram",
                                                title: "Cheraw Dance (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "cheraw-dance-mizoram",
                                            },
                                            {
                                                id: "lai-haraoba-mizoram",
                                                title: "Lai Haraoba (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lai-haraoba-mizoram",
                                            },
                                            {
                                                id: "khuallam-mizoram",
                                                title: "Khuallam (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "khuallam-mizoram",
                                            },
                                            {
                                                id: "sarlamkai-mizoram",
                                                title: "Sarlamkai (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sarlamkai-mizoram",
                                            },
                                            {
                                                id: "chheihlam-mizoram",
                                                title: "Chheihlam (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chheihlam-mizoram",
                                            },
                                            {
                                                id: "tlanglam-mizoram",
                                                title: "Tlanglam (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tlanglam-mizoram",
                                            },
                                            {
                                                id: "lai-hla-mizoram",
                                                title: "Lai Hla (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lai-hla-mizoram",
                                            },
                                            {
                                                id: "tlawng-dance-mizoram",
                                                title: "Tlawng Dance (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tlawng-dance-mizoram",
                                            },
                                            {
                                                id: "pawl-kut-dance-mizoram",
                                                title: "Pawl-Kut Dance (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pawl-kut-dance-mizoram",
                                            },
                                            {
                                                id: "chawnglaizawn-mizoram",
                                                title: "Chawnglaizawn (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chawnglaizawn-mizoram",
                                            },
                                            {
                                                id: "buhchuah-dance-mizoram",
                                                title: "Buhchuah Dance (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "buhchuah-dance-mizoram",
                                            },
                                            {
                                                id: "zawlbuk-dance-mizoram",
                                                title: "Zawlbuk Dance (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "zawlbuk-dance-mizoram",
                                            },
                                            {
                                                id: "vanchip-dance-mizoram",
                                                title: "Vanchip Dance (Mizoram)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "vanchip-dance-mizoram",
                                            },

                                            {
                                                id: "mimkut-nagaland",
                                                title: "Mimkut (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mimkut-nagaland",
                                            },
                                            {
                                                id: "aoleang-nagaland",
                                                title: "Aoleang (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "aoleang-nagaland",
                                            },
                                            {
                                                id: "bamboo-dance-nagaland",
                                                title: "Bamboo Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bamboo-dance-nagaland",
                                            },
                                            {
                                                id: "naga-war-dance-nagaland",
                                                title: "Naga War Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "naga-war-dance-nagaland",
                                            },
                                            {
                                                id: "zeliang-dance-nagaland",
                                                title: "Zeliang Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "zeliang-dance-nagaland",
                                            },
                                            {
                                                id: "angami-dance-nagaland",
                                                title: "Angami Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "angami-dance-nagaland",
                                            },
                                            {
                                                id: "khiamniungan-dance-nagaland",
                                                title: "Khiamniungan Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "khiamniungan-dance-nagaland",
                                            },
                                            {
                                                id: "lotha-dance-nagaland",
                                                title: "Lotha Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lotha-dance-nagaland",
                                            },
                                            {
                                                id: "sumi-dance-nagaland",
                                                title: "Sumi Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sumi-dance-nagaland",
                                            },
                                            {
                                                id: "chakesang-dance-nagaland",
                                                title: "Chakesang Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chakesang-dance-nagaland",
                                            },
                                            {
                                                id: "rangmawii-dance-nagaland",
                                                title: "Rangmawii Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rangmawii-dance-nagaland",
                                            },
                                            {
                                                id: "pochury-dance-nagaland",
                                                title: "Pochury Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pochury-dance-nagaland",
                                            },
                                            {
                                                id: "ao-dance-nagaland",
                                                title: "Ao Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ao-dance-nagaland",
                                            },
                                            {
                                                id: "rengma-dance-nagaland",
                                                title: "Rengma Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rengma-dance-nagaland",
                                            },
                                            {
                                                id: "konyak-dance-nagaland",
                                                title: "Konyak Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "konyak-dance-nagaland",
                                            },
                                            {
                                                id: "sangtam-dance-nagaland",
                                                title: "Sangtam Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sangtam-dance-nagaland",
                                            },
                                            {
                                                id: "yimchungru-dance-nagaland",
                                                title: "Yimchungru Dance (Nagaland)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "yimchungru-dance-nagaland",
                                            },
                                            {
                                                id: "odissi-odisha",
                                                title: "Odissi (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "odissi-odisha",
                                            },
                                            {
                                                id: "sambalpuri-dance-odisha",
                                                title: "Sambalpuri Dance (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sambalpuri-dance-odisha",
                                            },
                                            {
                                                id: "chhau-odisha",
                                                title: "Chhau (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chhau-odisha",
                                            },
                                            {
                                                id: "raibenshe-odisha",
                                                title: "Raibenshe (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "raibenshe-odisha",
                                            },
                                            {
                                                id: "gotipua-odisha",
                                                title: "Gotipua (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gotipua-odisha",
                                            },
                                            {
                                                id: "dalkhai-odisha",
                                                title: "Dalkhai (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dalkhai-odisha",
                                            },
                                            {
                                                id: "rasa-lila-odisha",
                                                title: "Rasa Lila (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rasa-lila-odisha",
                                            },
                                            {
                                                id: "mahari-odisha",
                                                title: "Mahari (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mahari-odisha",
                                            },
                                            {
                                                id: "bihu-odisha",
                                                title: "Bihu (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bihu-odisha",
                                            },
                                            {
                                                id: "karma-odisha",
                                                title: "Karma (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "karma-odisha",
                                            },
                                            {
                                                id: "chandan-jhulna-odisha",
                                                title: "Chandan Jhulna (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chandan-jhulna-odisha",
                                            },
                                            {
                                                id: "rath-yatra-dance-odisha",
                                                title: "Rath Yatra Dance (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rath-yatra-dance-odisha",
                                            },
                                            {
                                                id: "palahar-odisha",
                                                title: "Palahar (Odisha)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "palahar-odisha",
                                            },

                                            {
                                                id: "bhangra-punjab",
                                                title: "Bhangra (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhangra-punjab",
                                            },
                                            {
                                                id: "gidda-punjab",
                                                title: "Gidda (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gidda-punjab",
                                            },
                                            {
                                                id: "luddi-punjab",
                                                title: "Luddi (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "luddi-punjab",
                                            },
                                            {
                                                id: "jhumar-punjab",
                                                title: "Jhumar (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhumar-punjab",
                                            },
                                            {
                                                id: "dhamal-punjab",
                                                title: "Dhamal (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhamal-punjab",
                                            },
                                            {
                                                id: "dhola-punjab",
                                                title: "Dhola (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhola-punjab",
                                            },
                                            {
                                                id: "heren-punjab",
                                                title: "Heren (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "heren-punjab",
                                            },
                                            {
                                                id: "gatka-punjab",
                                                title: "Gatka (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gatka-punjab",
                                            },
                                            {
                                                id: "teeyan-punjab",
                                                title: "Teeyan (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "teeyan-punjab",
                                            },
                                            {
                                                id: "dankara-punjab",
                                                title: "Dankara (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dankara-punjab",
                                            },
                                            {
                                                id: "sammi-punjab",
                                                title: "Sammi (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sammi-punjab",
                                            },
                                            {
                                                id: "kikli-punjab",
                                                title: "Kikli (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kikli-punjab",
                                            },
                                            {
                                                id: "jaago-punjab",
                                                title: "Jaago (Punjab)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jaago-punjab",
                                            },

                                            {
                                                id: "ghoomar-rajasthan",
                                                title: "Ghoomar (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ghoomar-rajasthan",
                                            },
                                            {
                                                id: "kalbeliya-rajasthan",
                                                title: "Kalbeliya (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kalbeliya-rajasthan",
                                            },
                                            {
                                                id: "chari-rajasthan",
                                                title: "Chari (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chari-rajasthan",
                                            },
                                            {
                                                id: "bhavai-rajasthan",
                                                title: "Bhavai (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhavai-rajasthan",
                                            },
                                            {
                                                id: "terah-taali-rajasthan",
                                                title: "Terah Taali (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "terah-taali-rajasthan",
                                            },
                                            {
                                                id: "kachhi-ghodi-rajasthan",
                                                title: "Kachhi Ghodi (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kachhi-ghodi-rajasthan",
                                            },
                                            {
                                                id: "gair-rajasthan",
                                                title: "Gair (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gair-rajasthan",
                                            },
                                            {
                                                id: "kathputli-dance-rajasthan",
                                                title: "Kathputli Dance (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kathputli-dance-rajasthan",
                                            },
                                            {
                                                id: "fire-dance-rajasthan",
                                                title: "Fire Dance (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fire-dance-rajasthan",
                                            },
                                            {
                                                id: "banjara-dance-rajasthan",
                                                title: "Banjara Dance (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "banjara-dance-rajasthan",
                                            },
                                            {
                                                id: "maand-rajasthan",
                                                title: "Maand (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "maand-rajasthan",
                                            },
                                            {
                                                id: "rasiya-rajasthan",
                                                title: "Rasiya (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rasiya-rajasthan",
                                            },
                                            {
                                                id: "dang-lila-rajasthan",
                                                title: "Dang Lila (Rajasthan)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dang-lila-rajasthan",
                                            },

                                            {
                                                id: "cheraw-dance-sikkim",
                                                title: "Cheraw Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "cheraw-dance-sikkim",
                                            },
                                            {
                                                id: "mask-dance-sikkim",
                                                title: "Mask Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mask-dance-sikkim",
                                            },
                                            {
                                                id: "dhan-naach-sikkim",
                                                title: "Dhan Naach (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhan-naach-sikkim",
                                            },
                                            {
                                                id: "khukuri-dance-sikkim",
                                                title: "Khukuri Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "khukuri-dance-sikkim",
                                            },
                                            {
                                                id: "tamang-selo-dance-sikkim",
                                                title: "Tamang Selo Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tamang-selo-dance-sikkim",
                                            },
                                            {
                                                id: "buddhist-monastery-dance-sikkim",
                                                title: "Buddhist Monastery Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "buddhist-monastery-dance-sikkim",
                                            },
                                            {
                                                id: "lho-bha-dance-sikkim",
                                                title: "Lho-Bha Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lho-bha-dance-sikkim",
                                            },
                                            {
                                                id: "sikkimese-folk-dance-sikkim",
                                                title: "Sikkimese Folk Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sikkimese-folk-dance-sikkim",
                                            },
                                            {
                                                id: "bheda-dance-sikkim",
                                                title: "Bheda Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bheda-dance-sikkim",
                                            },
                                            {
                                                id: "puja-dance-sikkim",
                                                title: "Puja Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "puja-dance-sikkim",
                                            },
                                            {
                                                id: "dzumsa-dance-sikkim",
                                                title: "Dzumsa Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dzumsa-dance-sikkim",
                                            },
                                            {
                                                id: "yak-dance-sikkim",
                                                title: "Yak Dance (Sikkim)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "yak-dance-sikkim",
                                            },

                                            {
                                                id: "bharatanatyam-tamil-nadu",
                                                title: "Bharatanatyam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bharatanatyam-tamil-nadu",
                                            },
                                            {
                                                id: "kuchipudi-tamil-nadu",
                                                title: "Kuchipudi (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kuchipudi-tamil-nadu",
                                            },
                                            {
                                                id: "karagattam-tamil-nadu",
                                                title: "Karagattam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "karagattam-tamil-nadu",
                                            },
                                            {
                                                id: "kolattam-tamil-nadu",
                                                title: "Kolattam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kolattam-tamil-nadu",
                                            },
                                            {
                                                id: "kummi-tamil-nadu",
                                                title: "Kummi (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kummi-tamil-nadu",
                                            },
                                            {
                                                id: "silambam-tamil-nadu",
                                                title: "Silambam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "silambam-tamil-nadu",
                                            },
                                            {
                                                id: "aattam-tamil-nadu",
                                                title: "Aattam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "aattam-tamil-nadu",
                                            },
                                            {
                                                id: "thappattam-tamil-nadu",
                                                title: "Thappattam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "thappattam-tamil-nadu",
                                            },
                                            {
                                                id: "puli-kali-tamil-nadu",
                                                title: "Puli Kali (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "puli-kali-tamil-nadu",
                                            },
                                            {
                                                id: "mayil-attam-tamil-nadu",
                                                title: "Mayil Attam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mayil-attam-tamil-nadu",
                                            },
                                            {
                                                id: "dappan-koothu-tamil-nadu",
                                                title: "Dappan Koothu (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dappan-koothu-tamil-nadu",
                                            },
                                            {
                                                id: "kaalai-attam-tamil-nadu",
                                                title: "Kaalai Attam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kaalai-attam-tamil-nadu",
                                            },
                                            {
                                                id: "poikkal-kudirai-aattam-tamil-nadu",
                                                title: "Poikkal Kudirai Aattam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "poikkal-kudirai-aattam-tamil-nadu",
                                            },
                                            {
                                                id: "sera-thappattam-tamil-nadu",
                                                title: "Sera Thappattam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sera-thappattam-tamil-nadu",
                                            },
                                            {
                                                id: "puthu-vannam-tamil-nadu",
                                                title: "Puthu Vannam (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "puthu-vannam-tamil-nadu",
                                            },
                                            {
                                                id: "villu-paattu-dance-tamil-nadu",
                                                title: "Villu Paattu Dance (Tamil Nadu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "villu-paattu-dance-tamil-nadu",
                                            },

                                            {
                                                id: "bathukamma-dance-telangana",
                                                title: "Bathukamma Dance (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bathukamma-dance-telangana",
                                            },
                                            {
                                                id: "lambadi-dance-telangana",
                                                title: "Lambadi Dance (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lambadi-dance-telangana",
                                            },
                                            {
                                                id: "kolattam-telangana",
                                                title: "Kolattam (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kolattam-telangana",
                                            },
                                            {
                                                id: "dappu-telangana",
                                                title: "Dappu (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dappu-telangana",
                                            },
                                            {
                                                id: "pakala-telangana",
                                                title: "Pakala (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pakala-telangana",
                                            },
                                            {
                                                id: "perini-sivatandavam-telangana",
                                                title: "Perini Sivatandavam (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "perini-sivatandavam-telangana",
                                            },
                                            {
                                                id: "oggu-katha-telangana",
                                                title: "Oggu Katha (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "oggu-katha-telangana",
                                            },
                                            {
                                                id: "gussadi-telangana",
                                                title: "Gussadi (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gussadi-telangana",
                                            },
                                            {
                                                id: "bonalu-telangana",
                                                title: "Bonalu (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bonalu-telangana",
                                            },
                                            {
                                                id: "chindu-bhagavatam-telangana",
                                                title: "Chindu Bhagavatam (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chindu-bhagavatam-telangana",
                                            },
                                            {
                                                id: "sangini-telangana",
                                                title: "Sangini (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sangini-telangana",
                                            },
                                            {
                                                id: "tolu-bommalata-telangana",
                                                title: "Tolu Bommalata (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tolu-bommalata-telangana",
                                            },
                                            {
                                                id: "komuravelli-telangana",
                                                title: "Komuravelli (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "komuravelli-telangana",
                                            },
                                            {
                                                id: "nandi-nartana-telangana",
                                                title: "Nandi Nartana (Telangana)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "nandi-nartana-telangana",
                                            },

                                            {
                                                id: "hojagiri-dance-tripura",
                                                title: "Hojagiri Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "hojagiri-dance-tripura",
                                            },
                                            {
                                                id: "garia-dance-tripura",
                                                title: "Garia Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "garia-dance-tripura",
                                            },
                                            {
                                                id: "lebang-boomani-tripura",
                                                title: "Lebang Boomani (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lebang-boomani-tripura",
                                            },
                                            {
                                                id: "rong-chham-tripura",
                                                title: "Rong Chham (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rong-chham-tripura",
                                            },
                                            {
                                                id: "mishmi-dance-tripura",
                                                title: "Mishmi Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mishmi-dance-tripura",
                                            },
                                            {
                                                id: "bijuwa-dance-tripura",
                                                title: "Bijuwa Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bijuwa-dance-tripura",
                                            },
                                            {
                                                id: "jhum-dance-tripura",
                                                title: "Jhum Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhum-dance-tripura",
                                            },
                                            {
                                                id: "chailo-dance-tripura",
                                                title: "Chailo Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chailo-dance-tripura",
                                            },
                                            {
                                                id: "bamboo-dance-tripura",
                                                title: "Bamboo Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bamboo-dance-tripura",
                                            },
                                            {
                                                id: "chhura-dance-tripura",
                                                title: "Chhura Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chhura-dance-tripura",
                                            },
                                            {
                                                id: "kirtan-dance-tripura",
                                                title: "Kirtan Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kirtan-dance-tripura",
                                            },
                                            {
                                                id: "wanchuwa-dance-tripura",
                                                title: "Wanchuwa Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "wanchuwa-dance-tripura",
                                            },
                                            {
                                                id: "sakta-dance-tripura",
                                                title: "Sakta Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sakta-dance-tripura",
                                            },
                                            {
                                                id: "khowai-dance-tripura",
                                                title: "Khowai Dance (Tripura)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "khowai-dance-tripura",
                                            },
                                            {
                                                id: "rasiya-uttar-pradesh",
                                                title: "Rasiya (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rasiya-uttar-pradesh",
                                            },
                                            {
                                                id: "charkula-dance-uttar-pradesh",
                                                title: "Charkula Dance (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "charkula-dance-uttar-pradesh",
                                            },
                                            {
                                                id: "raslila-uttar-pradesh",
                                                title: "Raslila (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "raslila-uttar-pradesh",
                                            },
                                            {
                                                id: "nautanki-uttar-pradesh",
                                                title: "Nautanki (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "nautanki-uttar-pradesh",
                                            },
                                            {
                                                id: "kathak-uttar-pradesh",
                                                title: "Kathak (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kathak-uttar-pradesh",
                                            },
                                            {
                                                id: "kajri-dance-uttar-pradesh",
                                                title: "Kajri Dance (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kajri-dance-uttar-pradesh",
                                            },
                                            {
                                                id: "jhora-dance-uttar-pradesh",
                                                title: "Jhora Dance (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhora-dance-uttar-pradesh",
                                            },
                                            {
                                                id: "sawani-dance-uttar-pradesh",
                                                title: "Sawani Dance (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sawani-dance-uttar-pradesh",
                                            },
                                            {
                                                id: "dhobia-dance-uttar-pradesh",
                                                title: "Dhobia Dance (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhobia-dance-uttar-pradesh",
                                            },
                                            {
                                                id: "braj-holi-dance-uttar-pradesh",
                                                title: "Braj Holi Dance (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "braj-holi-dance-uttar-pradesh",
                                            },
                                            {
                                                id: "birha-dance-uttar-pradesh",
                                                title: "Birha Dance (Uttar Pradesh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "birha-dance-uttar-pradesh",
                                            },

                                            {
                                                id: "choliya-uttarakhand",
                                                title: "Choliya (Uttarakhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "choliya-uttarakhand",
                                            },
                                            {
                                                id: "jhora-uttarakhand",
                                                title: "Jhora (Uttarakhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhora-uttarakhand",
                                            },
                                            {
                                                id: "langvir-nritya-uttarakhand",
                                                title: "Langvir Nritya (Uttarakhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "langvir-nritya-uttarakhand",
                                            },
                                            {
                                                id: "pandav-nritya-uttarakhand",
                                                title: "Pandav Nritya (Uttarakhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pandav-nritya-uttarakhand",
                                            },
                                            {
                                                id: "chhapeli-uttarakhand",
                                                title: "Chhapeli (Uttarakhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chhapeli-uttarakhand",
                                            },
                                            {
                                                id: "tandi-nritya-uttarakhand",
                                                title: "Tandi Nritya (Uttarakhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tandi-nritya-uttarakhand",
                                            },
                                            {
                                                id: "bhotiya-dance-uttarakhand",
                                                title: "Bhotiya Dance (Uttarakhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhotiya-dance-uttarakhand",
                                            },
                                            {
                                                id: "barada-nati-uttarakhand",
                                                title: "Barada Nati (Uttarakhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "barada-nati-uttarakhand",
                                            },
                                            {
                                                id: "ramola-dance-uttarakhand",
                                                title: "Ramola Dance (Uttarakhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ramola-dance-uttarakhand",
                                            },
                                            {
                                                id: "hurkiya-baul-uttarakhand",
                                                title: "Hurkiya Baul (Uttarakhand)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "hurkiya-baul-uttarakhand",
                                            },

                                            {
                                                id: "raibenshe-west-bengal",
                                                title: "Raibenshe (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "raibenshe-west-bengal",
                                            },
                                            {
                                                id: "baul-dance-west-bengal",
                                                title: "Baul Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "baul-dance-west-bengal",
                                            },
                                            {
                                                id: "chhau-west-bengal",
                                                title: "Chhau (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chhau-west-bengal",
                                            },
                                            {
                                                id: "jhumur-dance-west-bengal",
                                                title: "Jhumur Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jhumur-dance-west-bengal",
                                            },
                                            {
                                                id: "tusu-dance-west-bengal",
                                                title: "Tusu Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tusu-dance-west-bengal",
                                            },
                                            {
                                                id: "hulud-dance-west-bengal",
                                                title: "Hulud Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "hulud-dance-west-bengal",
                                            },
                                            {
                                                id: "rabindra-nritya-west-bengal",
                                                title: "Rabindra Nritya (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rabindra-nritya-west-bengal",
                                            },
                                            {
                                                id: "santal-dance-west-bengal",
                                                title: "Santal Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "santal-dance-west-bengal",
                                            },
                                            {
                                                id: "kherai-dance-west-bengal",
                                                title: "Kherai Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kherai-dance-west-bengal",
                                            },
                                            {
                                                id: "rai-dance-west-bengal",
                                                title: "Rai Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rai-dance-west-bengal",
                                            },
                                            {
                                                id: "dhamail-dance-west-bengal",
                                                title: "Dhamail Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhamail-dance-west-bengal",
                                            },
                                            {
                                                id: "gambhira-dance-west-bengal",
                                                title: "Gambhira Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "gambhira-dance-west-bengal",
                                            },
                                            {
                                                id: "santhali-dance-west-bengal",
                                                title: "Santhali Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "santhali-dance-west-bengal",
                                            },
                                            {
                                                id: "bhawaiya-dance-west-bengal",
                                                title: "Bhawaiya Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhawaiya-dance-west-bengal",
                                            },
                                            {
                                                id: "kali-naach-west-bengal",
                                                title: "Kali Naach (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kali-naach-west-bengal",
                                            },
                                            {
                                                id: "domni-dance-west-bengal",
                                                title: "Domni Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "domni-dance-west-bengal",
                                            },
                                            {
                                                id: "kirtan-dance-west-bengal",
                                                title: "Kirtan Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kirtan-dance-west-bengal",
                                            },
                                            {
                                                id: "lathi-dance-west-bengal",
                                                title: "Lathi Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lathi-dance-west-bengal",
                                            },
                                            {
                                                id: "dhali-dance-west-bengal",
                                                title: "Dhali Dance (West Bengal)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dhali-dance-west-bengal",
                                            },

                                            {
                                                id: "rauf-jammu-and-kashmir",
                                                title: "Rauf (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rauf-jammu-and-kashmir",
                                            },
                                            {
                                                id: "dogri-bhangra-jammu-and-kashmir",
                                                title: "Dogri Bhangra (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dogri-bhangra-jammu-and-kashmir",
                                            },
                                            {
                                                id: "jagarana-jammu-and-kashmir",
                                                title: "Jagarana (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jagarana-jammu-and-kashmir",
                                            },
                                            {
                                                id: "kud-jammu-and-kashmir",
                                                title: "Kud (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kud-jammu-and-kashmir",
                                            },
                                            {
                                                id: "heren-jammu-and-kashmir",
                                                title: "Heren (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "heren-jammu-and-kashmir",
                                            },
                                            {
                                                id: "fumenie-and-jagarana-jammu-and-kashmir",
                                                title: "Fumenie and Jagarana (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fumenie-and-jagarana-jammu-and-kashmir",
                                            },
                                            {
                                                id: "geetru-jammu-and-kashmir",
                                                title: "Geetru (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "geetru-jammu-and-kashmir",
                                            },
                                            {
                                                id: "bhand-pather-jammu-and-kashmir",
                                                title: "Bhand Pather (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhand-pather-jammu-and-kashmir",
                                            },
                                            {
                                                id: "bacha-nagma-jammu-and-kashmir",
                                                title: "Bacha Nagma (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bacha-nagma-jammu-and-kashmir",
                                            },
                                            {
                                                id: "hafiza-dance-jammu-and-kashmir",
                                                title: "Hafiza Dance (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "hafiza-dance-jammu-and-kashmir",
                                            },
                                            {
                                                id: "dumhal-jammu-and-kashmir",
                                                title: "Dumhal (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dumhal-jammu-and-kashmir",
                                            },
                                            {
                                                id: "bhand-jashan-jammu-and-kashmir",
                                                title: "Bhand Jashan (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhand-jashan-jammu-and-kashmir",
                                            },
                                            {
                                                id: "rouf-jammu-and-kashmir",
                                                title: "Rouf (Jammu and Kashmir)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rouf-jammu-and-kashmir",
                                            },

                                            {
                                                id: "kathak-north-india",
                                                title: "Kathak (North India)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kathak-north-india",
                                            },
                                            {
                                                id: "nicobarese-dance-andaman-nicobar",
                                                title: "Nicobarese Dance (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "nicobarese-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "great-andamanese-tribal-dance-andaman-nicobar",
                                                title: "Tribal Dance of the Great Andamanese (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "great-andamanese-tribal-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "jarwa-dance-andaman-nicobar",
                                                title: "Jarwa Dance (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "jarwa-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "sentinalese-dance-andaman-nicobar",
                                                title: "Sentinalese Dance (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sentinalese-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "kala-pung-dance-andaman-nicobar",
                                                title: "Kala Pung Dance (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kala-pung-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "mundu-dance-andaman-nicobar",
                                                title: "Mundu Dance (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mundu-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "island-folk-dance-andaman-nicobar",
                                                title: "Island Folk Dance (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "island-folk-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "bamboo-dance-andaman-nicobar",
                                                title: "Bamboo Dance (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bamboo-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "shompens-dance-andaman-nicobar",
                                                title: "Dance of the Shompens (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "shompens-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "chakma-dance-andaman-nicobar",
                                                title: "Chakma Dance (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chakma-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "bangla-folk-dance-andaman-nicobar",
                                                title: "Bangla Folk Dance (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bangla-folk-dance-andaman-nicobar",
                                            },
                                            {
                                                id: "mizo-tribal-dance-andaman-nicobar",
                                                title: "Mizo Tribal Dance (Andaman and Nicobar)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mizo-tribal-dance-andaman-nicobar",
                                            },

                                            {
                                                id: "dandiya-raas-dadra-daman-diu",
                                                title: "Dandiya Raas (Dadra and Nagar Haveli and Daman and Diu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dandiya-raas-dadra-daman-diu",
                                            },
                                            {
                                                id: "garba-dadra-daman-diu",
                                                title: "Garba (Dadra and Nagar Haveli and Daman and Diu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "garba-dadra-daman-diu",
                                            },
                                            {
                                                id: "koli-dance-dadra-daman-diu",
                                                title: "Koli Dance (Dadra and Nagar Haveli and Daman and Diu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "koli-dance-dadra-daman-diu",
                                            },
                                            {
                                                id: "fugdi-dadra-daman-diu",
                                                title: "Fugdi (Dadra and Nagar Haveli and Daman and Diu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fugdi-dadra-daman-diu",
                                            },
                                            {
                                                id: "bhoomiya-dance-dadra-daman-diu",
                                                title: "Bhoomiya Dance (Dadra and Nagar Haveli and Daman and Diu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bhoomiya-dance-dadra-daman-diu",
                                            },
                                            {
                                                id: "sufi-dance-dadra-daman-diu",
                                                title: "Sufi Dance (Dadra and Nagar Haveli and Daman and Diu)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sufi-dance-dadra-daman-diu",
                                            },

                                            {
                                                id: "parichakali-lakshadweep",
                                                title: "Parichakali (Lakshadweep)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "parichakali-lakshadweep",
                                            },
                                            {
                                                id: "folk-dance-of-kolkali-lakshadweep",
                                                title: "Folk Dance of Kolkali (Lakshadweep)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "folk-dance-of-kolkali-lakshadweep",
                                            },
                                            {
                                                id: "mappila-paattu-lakshadweep",
                                                title: "Mappila Paattu (Lakshadweep)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mappila-paattu-lakshadweep",
                                            },
                                            {
                                                id: "adivasi-tribal-dance-lakshadweep",
                                                title: "Adivasi Tribal Dance (Lakshadweep)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "adivasi-tribal-dance-lakshadweep",
                                            },
                                            {
                                                id: "tharavad-dance-lakshadweep",
                                                title: "Tharavad Dance (Lakshadweep)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tharavad-dance-lakshadweep",
                                            },

                                            {
                                                id: "chham-dance-ladakh",
                                                title: "Chham Dance (Ladakh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chham-dance-ladakh",
                                            },
                                            {
                                                id: "shondol-dance-ladakh",
                                                title: "Shondol Dance (Ladakh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "shondol-dance-ladakh",
                                            },
                                            {
                                                id: "mask-dance-ladakh",
                                                title: "Mask Dance (Ladakh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mask-dance-ladakh",
                                            },
                                            {
                                                id: "ladakhi-folk-dance-ladakh",
                                                title: "Ladakhi Folk Dance (Ladakh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ladakhi-folk-dance-ladakh",
                                            },
                                            {
                                                id: "dumhal-dance-ladakh",
                                                title: "Dumhal Dance (Ladakh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dumhal-dance-ladakh",
                                            },
                                            {
                                                id: "kesar-dance-ladakh",
                                                title: "Kesar Dance (Ladakh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "kesar-dance-ladakh",
                                            },
                                            {
                                                id: "tibetan-dance-ladakh",
                                                title: "Tibetan Dance (Ladakh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "tibetan-dance-ladakh",
                                            },
                                            {
                                                id: "buddhist-monastic-dance-ladakh",
                                                title: "Buddhist Monastic Dance (Ladakh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "buddhist-monastic-dance-ladakh",
                                            },
                                            {
                                                id: "phyang-monastery-dance-ladakh",
                                                title: "Phyang Monastery Dance (Ladakh)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "phyang-monastery-dance-ladakh",
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
                        children: [
                            {
                                id: "stand-up-com",
                                title: "Stand-Up Comedians",
                                titleSuffix: "Management Company in Delhi",
                                slug: "stand-up-com",
                                children: [
                                    {
                                        id: "observ-comedians",
                                        title: "Observational Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "observ-comedians",
                                    },
                                    {
                                        id: "prop-comedians",
                                        title: "Prop Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "prop-comedians",
                                    },
                                    {
                                        id: "satirical-comedians",
                                        title: "Satirical Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "satirical-comedians",
                                    },
                                    {
                                        id: "dark-comedians",
                                        title: "Dark Comedians (Black Comedy)",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "dark-comedians",
                                    },
                                    {
                                        id: "storytelling-comedians",
                                        title: "Storytelling Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "storytelling-comedians",
                                    },
                                    {
                                        id: "one-liner-comedians",
                                        title: "One-Liner Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "one-liner-comedians",
                                    },
                                    {
                                        id: "obs-satire-comedians",
                                        title: "Observational Satire Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "obs-satire-comedians",
                                    },
                                    {
                                        id: "physical-comedians",
                                        title: "Physical Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "physical-comedians",
                                    },
                                    {
                                        id: "surreal-comedians",
                                        title: "Surreal Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "surreal-comedians",
                                    },
                                    {
                                        id: "insult-comedians",
                                        title: "Insult Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "insult-comedians",
                                    },
                                    {
                                        id: "alternative-comedians",
                                        title: "Alternative Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "alternative-comedians",
                                    },
                                    {
                                        id: "clean-comedians",
                                        title: "Clean Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "clean-comedians",
                                    },
                                    {
                                        id: "political-comedians",
                                        title: "Political Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "political-comedians",
                                    },
                                    {
                                        id: "musical-comedians",
                                        title: "Musical Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "musical-comedians",
                                    },
                                    {
                                        id: "anti-comedians",
                                        title: "Anti-Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "anti-comedians",
                                    },
                                    {
                                        id: "nerdy-comedians",
                                        title: "Nerdy Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "nerdy-comedians",
                                    },

                                ]
                            },
                            {
                                id: "sketch-comed",
                                title: "Sketch Comedians",
                                titleSuffix: "Management Company in Delhi",
                                slug: "sketch-comed",
                                children: [
                                    {
                                        id: "char-comedians",
                                        title: "Character Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "char-comedians",
                                    },
                                    {
                                        id: "sat-sktch-comedians",
                                        title: "Satirical Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "sat-sktch-comedians",
                                    },
                                    {
                                        id: "parody-comedians",
                                        title: "Parody Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "parody-comedians",
                                    },
                                    {
                                        id: "phy-sktch-comedians",
                                        title: "Physical Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "phy-sktch-comedians",
                                    },
                                    {
                                        id: "imp-sktch-comedians",
                                        title: "Improvisational Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "imp-sktch-comedians",
                                    },
                                    {
                                        id: "abs-sketch-comedians",
                                        title: "Absurdist Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "abs-sketch-comedians",
                                    },
                                    {
                                        id: "slapstick-comedians",
                                        title: "Slapstick Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "slapstick-comedians",
                                    },
                                    {
                                        id: "dark-sketch-comedians",
                                        title: "Dark Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "dark-sketch-comedians",
                                    },
                                    {
                                        id: "soc-com-sktch-comedians",
                                        title: "Social Commentary Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "soc-com-sktch-comedians",
                                    },
                                    {
                                        id: "wordplay-wit-comedians",
                                        title: "Wordplay and Wit Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "wordplay-wit-comedians",
                                    },
                                    {
                                        id: "sat-new-sktch-comedians",
                                        title: "Satirical News Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "sat-new-sktch-comedians",
                                    },
                                    {
                                        id: "musical-sketch-comedians",
                                        title: "Musical Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "musical-sketch-comedians",
                                    },
                                    {
                                        id: "digital-sketch-comedians",
                                        title: "Digital Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "digital-sketch-comedians",
                                    },
                                    {
                                        id: "clean-sketch-comedians",
                                        title: "Clean Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "clean-sketch-comedians",
                                    },
                                    {
                                        id: "surreal-sketch-comedians",
                                        title: "Surreal Sketch Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "surreal-sketch-comedians",
                                    },
                                    {
                                        id: "sktch-com-duo-ensembles",
                                        title: "Sketch Comedy Duos or Ensembles",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "sktch-com-duo-ensembles",
                                    },
                                ]
                            },
                            {
                                id: "improv-comed",
                                title: "Improvisational Comedians (Improv)",
                                titleSuffix: "Management Company in Delhi",
                                slug: "improv-comed",
                                children: [
                                    {
                                        id: "long-for-imp-comedians",
                                        title: "Long-Form Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "long-for-imp-comedians",
                                    },
                                    {
                                        id: "short-for-imp-comedians",
                                        title: "Short-Form Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "short-for-imp-comedians",
                                    },
                                    {
                                        id: "musical-imp-comedians",
                                        title: "Musical Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "musical-imp-comedians",
                                    },
                                    {
                                        id: "imp-stand-up-comedians",
                                        title: "Improvised Stand-Up Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "imp-stand-up-comedians",
                                    },
                                    {
                                        id: "aud-par-imp-comedians",
                                        title: "Audience Participation Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "aud-par-imp-comedians",
                                    },
                                    {
                                        id: "imp-duo-trio-comedians",
                                        title: "Improv Duo or Trio Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "imp-duo-trio-comedians",
                                    },
                                    {
                                        id: "narra-improv-comedians",
                                        title: "Narrative Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "narra-improv-comedians",
                                    },
                                    {
                                        id: "pro-base-imp-comedians",
                                        title: "Prop-Based Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "pro-base-imp-comedians",
                                    },
                                    {
                                        id: "phy-improv-comedians",
                                        title: "Physical Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "phy-improv-comedians",
                                    },
                                    {
                                        id: "emot-impr-comedians",
                                        title: "Emotional Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "emot-impr-comedians",
                                    },
                                    {
                                        id: "obs-improv-comedians",
                                        title: "Observational Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "obs-improv-comedians",
                                    },
                                    {
                                        id: "satir-imp-comedians",
                                        title: "Satirical Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "satir-imp-comedians",
                                    },
                                    {
                                        id: "imp-teams-ensembles",
                                        title: "Improv Teams or Ensembles",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "imp-teams-ensembles",
                                    },
                                    {
                                        id: "imp-games-comedians",
                                        title: "Improv Games Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "imp-games-comedians",
                                    },
                                    {
                                        id: "anti-co-imp-comedians",
                                        title: "Anti-Comedy Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "anti-co-imp-comedians",
                                    },
                                    {
                                        id: "coll-exp-imp-comedians",
                                        title: "Collaborative or Experimental Improv Comedians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "coll-exp-imp-comedians",
                                    },
                                ]
                            },
                            {
                                id: "comedy-writers",
                                title: "Comedy Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "comedy-writers",
                                children: [
                                    {
                                        id: "stnd-up-com-writers",
                                        title: "Stand-Up Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "stnd-up-com-writers",
                                    },
                                    {
                                        id: "sketch-com-writers",
                                        title: "Sketch Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "sketch-com-writers",
                                    },
                                    {
                                        id: "sitcom-writers",
                                        title: "Sitcom Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "sitcom-writers",
                                    },
                                    {
                                        id: "tv-sho-com-writers",
                                        title: "TV Show Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "tv-sho-com-writers",
                                    },
                                    {
                                        id: "movie-com-writers",
                                        title: "Movie Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "movie-com-writers",
                                    },
                                    {
                                        id: "parody-writers",
                                        title: "Parody Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "parody-writers",
                                    },
                                    {
                                        id: "satiri-com-writers",
                                        title: "Satirical Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "satiri-com-writers",
                                    },
                                    {
                                        id: "improv-com-writers",
                                        title: "Improv Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "improv-com-writers",
                                    },
                                    {
                                        id: "late-nig-com-writers",
                                        title: "Late-Night Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "late-nig-com-writers",
                                    },
                                    {
                                        id: "stnd-up-com-spec-writers",
                                        title: "Stand-Up Comedy Special Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "stnd-com-spec-writers",
                                    },
                                    {
                                        id: "web-seri-com-writers",
                                        title: "Web Series Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "web-seri-com-writers",
                                    },
                                    {
                                        id: "dark-comedy-writers",
                                        title: "Dark Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "dark-comedy-writers",
                                    },
                                    {
                                        id: "abs-comedy-writers",
                                        title: "Absurdist Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "abs-comedy-writers",
                                    },
                                    {
                                        id: "obs-comedy-writers",
                                        title: "Observational Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "obs-comedy-writers",
                                    },
                                    {
                                        id: "politi-com-writers",
                                        title: "Political Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "politi-com-writers",
                                    },
                                    {
                                        id: "fam-frnd-cmdy-writers",
                                        title: "Family-Friendly Comedy Writers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fam-frnd-cmdy-writers",
                                    },
                                    {
                                        id: "std-co-collaborators",
                                        title: "Stand-Up Comedy Collaborators",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "std-co-collaborators",
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        id: "magicians-and-illusionists",
                        title: "Magicians and Illusionists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "magic-illus",
                        children: [
                            {
                                id: "stage-magicians",
                                title: "Stage Magicians",
                                titleSuffix: "Management Company in Delhi",
                                slug: "stage-magicians",
                                children: [
                                    {
                                        id: "close-up-magicians",
                                        title: "Close-Up Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "close-up-magicians",
                                    },
                                    {
                                        id: "escape-artists",
                                        title: "Escape Artists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "escape-artists",
                                    },
                                    {
                                        id: "comedy-magicians",
                                        title: "Comedy Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "comedy-magicians",
                                    },
                                    {
                                        id: "illus-mental-combos",
                                        title: "Illusionist and Mentalist Combos",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "illus-mental-combos",
                                    },
                                    {
                                        id: "stg-manipulators",
                                        title: "Stage Manipulators",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "stg-manipulators",
                                    },
                                    {
                                        id: "fire-magicians",
                                        title: "Fire Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fire-magicians",
                                    },
                                    {
                                        id: "stg-illus-perf-animals",
                                        title: "Stage Illusion Performers with Animals",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "stg-illus-perf-animals",
                                    },
                                    {
                                        id: "ment-hyb-performers",
                                        title: "Mentalism and Illusion Hybrid Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "ment-hyb-performers",
                                    },
                                ]
                            },
                            {
                                id: "clos-up-magicians",
                                title: "Close-Up Magicians",
                                titleSuffix: "Management Company in Delhi",
                                slug: "clos-up-magicians",
                                children: [
                                    {
                                        id: "coin-magicians",
                                        title: "Coin Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "coin-magicians",
                                    },
                                    {
                                        id: "street-magicians",
                                        title: "Street Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "street-magicians",
                                    },
                                    {
                                        id: "rope-magicians",
                                        title: "Rope Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "rope-magicians",
                                    },
                                    {
                                        id: "ring-magicians",
                                        title: "Ring Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "ring-magicians",
                                    },
                                    {
                                        id: "watch-jew-magicians",
                                        title: "Watch and Jewelry Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "watch-jew-magicians",
                                    },
                                    {
                                        id: "restur-magicians",
                                        title: "Restaurant Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "restur-magicians",
                                    },
                                    {
                                        id: "family-magicians",
                                        title: "Family Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "family-magicians",
                                    },
                                    {
                                        id: "corporate-magicians",
                                        title: "Corporate Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "corporate-magicians",
                                    },
                                    {
                                        id: "bar-pub-magicians",
                                        title: "Bar and Pub Magicians",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "bar-pub-magicians",
                                    },
                                    {
                                        id: "coin-manipulators",
                                        title: "Coin and Card Manipulators (Specialized Close-Up)",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "coin-manipulators",
                                    },
                                    {
                                        id: "clos-up-mentalists",
                                        title: "Close-Up Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "clos-up-mentalists",
                                    },
                                ]
                            },
                            {
                                id: "illusionists",
                                title: "Illusionists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "illusionists",
                                children: [
                                    {
                                        id: "stg-illusionists",
                                        title: "Stage Illusionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "stg-illusionists",
                                    },
                                    {
                                        id: "esc-illusionists",
                                        title: "Escape Illusionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "esc-illusionists",
                                    },
                                    {
                                        id: "ment-illusionists",
                                        title: "Mentalist Illusionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "ment-illusionists",
                                    },
                                    {
                                        id: "cmdy-illusionists",
                                        title: "Comedy Illusionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "cmdy-illusionists",
                                    },
                                    {
                                        id: "tech-illusionists",
                                        title: "Technology-Based Illusionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "tech-illusionists",
                                    },
                                    {
                                        id: "lrg-scale-performers",
                                        title: "Large-Scale Illusion Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "lrg-scale-performers",
                                    },
                                    {
                                        id: "levit-illusionists",
                                        title: "Levitation Illusionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "levit-illusionists",
                                    },
                                    {
                                        id: "esc-hyb-performers",
                                        title: "Escape and Illusion Hybrid Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "esc-hyb-performers",
                                    },
                                    {
                                        id: "fire-illusionists",
                                        title: "Fire Illusionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fire-illusionists",
                                    },
                                    {
                                        id: "anim-illusionists",
                                        title: "Animal Illusionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "anim-illusionists",
                                    },
                                    {
                                        id: "illus-hyb-performers",
                                        title: "Illusion and Mentalism Hybrid Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "illus-hyb-performers",
                                    },
                                    {
                                        id: "the-illusionists",
                                        title: "Theatrical Illusionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "the-illusionists",
                                    },
                                ]
                            },
                            {
                                id: "mentalists",
                                title: "Mentalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mentalists",
                                children: [
                                    {
                                        id: "psych-mentalists",
                                        title: "Psychological Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "psych-mentalists",
                                    },
                                    {
                                        id: "tele-mentalists",
                                        title: "Telepathy Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "tele-mentalists",
                                    },
                                    {
                                        id: "clair-mentalists",
                                        title: "Clairvoyant Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "clair-mentalists",
                                    },
                                    {
                                        id: "pred-mentalists",
                                        title: "Prediction Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "pred-mentalists",
                                    },
                                    {
                                        id: "mind-mentalists",
                                        title: "Mind Control Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "mind-mentalistss",
                                    },
                                    {
                                        id: "memory-mentalists",
                                        title: "Memory Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "memory-mentalists",
                                    },
                                    {
                                        id: "cold-mentalists",
                                        title: "Cold Reading Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "cold-mentalists",
                                    },
                                    {
                                        id: "for-mentalists",
                                        title: "Forensic Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "for-mentalists",
                                    },
                                    {
                                        id: "behav-mentalists",
                                        title: "Behavioral Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "behav-mentalists",
                                    },
                                    {
                                        id: "mind-read-mentalists",
                                        title: "Mind Reading Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "mind-read-mentalists",
                                    },
                                    {
                                        id: "intuitive-mentalists",
                                        title: "Intuitive Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "intuitive-mentalists",
                                    },
                                    {
                                        id: "choice-mentalists",
                                        title: "Prediction and Choice Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "choice-mentalists",
                                    },
                                    {
                                        id: "stage-mentalists",
                                        title: "Stage Mentalists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "stage-mentalists",
                                    },

                                ]
                            },
                        ]
                    },
                    {
                        id: "circus-performers",
                        title: "Circus Performers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "circus-perform",
                        children: [
                            {
                                id: "acrobats",
                                title: "Acrobats",
                                titleSuffix: "Management Company in Delhi",
                                slug: "acrobats",
                                children: [
                                    {
                                        id: "e-acrobat",
                                        title: "Aerial Acrobats",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "aerial-acrobat",
                                        children: [
                                            {
                                                id: "the-flyng-trap-artists",
                                                title: "The Flying Trapeze Artists",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "the-flyng-trap-artists",
                                            },
                                            {
                                                id: "du-soleil-performers",
                                                title: "Cirque du Soleil Performers",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "du-soleil-performers",
                                            },
                                        ]
                                    },
                                    {
                                        id: "trampo-acrobat",
                                        title: "Trampoline Acrobats",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "trampo-acrobat",
                                        children: [
                                            {
                                                id: "flying-trampoline-act",
                                                title: "The Flying Trampolines Act",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flying-trampoline-act",
                                            },
                                            {
                                                id: "magic-show-trampo-acts",
                                                title: "Trampoline Acts in Magic Shows",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "magic-show-trampo-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "hand-to-hand",
                                        title: "Hand-to-Hand Acrobats",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "hand-to-hand",
                                        children: [
                                            {
                                                id: "human-pyramids",
                                                title: "Human Pyramids",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "human-pyramids",
                                            },
                                            {
                                                id: "partner-hand-balancing",
                                                title: "Partner Hand Balancing",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "partner-hand-balancing",
                                            },

                                        ]
                                    },
                                    {
                                        id: "contortion",
                                        title: "Contortionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "contortion",
                                        children: [
                                            {
                                                id: "contortion-escape-act",
                                                title: "Escape Acts with Contortion",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "contortion-escape-act",
                                            },
                                            {
                                                id: "magic-contortion-act",
                                                title: "Contortion in Magic Performances",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "magic-contortion-act",
                                            },
                                        ]
                                    },
                                    {
                                        id: "human-cannon-acts",
                                        title: "Human Cannonball Acts",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "human-cannon-acts",
                                        children: [
                                            {
                                                id: "human-cannon-performer",
                                                title: "Human Cannonball Acts in Circus Performances",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "human-cannon-performer",
                                            },
                                            {
                                                id: "magician-illusionist-act",
                                                title: "Magicians and Illusionists Incorporating the Act",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "magician-illusionist-act",
                                            },
                                        ]
                                    },
                                    {
                                        id: "juggle-acrobats",
                                        title: "Juggling Acrobats",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "juggle-acrobats",
                                        children: [
                                            {
                                                id: "fire-juggling-act",
                                                title: "Juggling with Fire or Other Objects",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fire-juggling-act",
                                            },
                                            {
                                                id: "multitask-illusion-act",
                                                title: "Multitasking Illusion Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "multitask-illusion-act",
                                            },
                                        ]
                                    },
                                    {
                                        id: "clown-acrobat",
                                        title: "Clown Acrobats",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "clown-acrobat",
                                        children: [
                                            {
                                                id: "phys-comedy-illusion",
                                                title: "Physical Comedy in Illusions",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "phys-comedy-illusion",
                                            },
                                            {
                                                id: "humo--balance-acts",
                                                title: "Humorous Aerial or Hand Balance Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "humo--balance-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "acrobat-illusion",
                                        title: "Acrobatic Illusionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "acrobat-illusion",
                                        children: [
                                            {
                                                id: "david-aerial-acts",
                                                title: "David Copperfield's Aerial Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "david-aerial-acts",
                                            },
                                            {
                                                id: "cirque-du-soleil",
                                                title: "Cirque du Soleil",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "cirque-du-soleil",
                                            }
                                        ]
                                    },
                                    {
                                        id: "flying-acts",
                                        title: "Flying Acts",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "flying-acts",
                                        children: [
                                            {
                                                id: "flying-magic-shows",
                                                title: "Flying Aerial Acts in Magic Shows",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flying-magic-shows",
                                            },
                                            {
                                                id: "flying-magic-theater",
                                                title: "The Flying Act in Magical Theater",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flying-magic-theater",
                                            },
                                        ]
                                    },
                                    {
                                        id: "hum-ladder-tower-acts",
                                        title: "Human Ladders and Tower Acts",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "hum-ladder-tower-acts",
                                        children: [
                                            {
                                                id: "human-tower-acts",
                                                title: "Human Tower Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "human-tower-acts",
                                            },
                                            {
                                                id: "balance-acts",
                                                title: "Balance Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "balance-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "balance-acrobat",
                                        title: "Balancing Acrobats",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "balance-acrobat",
                                        children: [
                                            {
                                                id: "pole-balancing-acts",
                                                title: "Pole Balancing Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pole-balancing-acts",
                                            },
                                            {
                                                id: "balance-escape-acts",
                                                title: "Balance and Escape Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "balance-escape-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "human-cannonball",
                                        title: "Human Cannonball",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "human-cannonball",
                                        children: [
                                            {
                                                id: "human-cannon-acts",
                                                title: "Human Cannonball Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "human-cannon-acts",
                                            },
                                            {
                                                id: "illusion-disappearance",
                                                title: "Illusion of Disappearance",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "illusion-disappearance",
                                            }
                                        ]
                                    },
                                    {
                                        id: "duo-acrobat-acts",
                                        title: "Duo Acrobatic Acts",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "duo-acrobat-acts",
                                        children: [
                                            {
                                                id: "duo-hand-balancing",
                                                title: "Duo Hand Balancing",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "duo-hand-balancing",
                                            },
                                            {
                                                id: "acro-partner-acts",
                                                title: "Acrobatic Partner Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "acro-partner-acts",
                                            },

                                        ]
                                    }
                                ]
                            },
                            {
                                id: "clowns",
                                title: "Clowns",
                                titleSuffix: "Management Company in Delhi",
                                slug: "clowns",
                                children: [
                                    {
                                        id: "whiteface-clown",
                                        title: "Whiteface Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "whiteface-clown",
                                        children: [
                                            {
                                                id: "classic-whiteface",
                                                title: "Classic Whiteface",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "classic-whiteface",
                                            },
                                            {
                                                id: "trad-cir-whiteface",
                                                title: "Traditional Circus Whiteface",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "trad-cir-whiteface",
                                            },
                                        ]
                                    },
                                    {
                                        id: "auguste-clown",
                                        title: "Auguste Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "auguste-clown",
                                        children: [
                                            {
                                                id: "trad-auguste-clown",
                                                title: "Traditional Auguste Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "trad-auguste-clown",
                                            },
                                            {
                                                id: "fool-or-sidekick",
                                                title: "The Fool or Sidekick",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fool-or-sidekick",
                                            }
                                        ]
                                    },
                                    {
                                        id: "charcter-clown",
                                        title: "Character Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "charcter-clown",
                                        children: [
                                            {
                                                id: "hobo-clown",
                                                title: "Hobo Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "hobo-clown",
                                            },
                                            {
                                                id: "business-clown",
                                                title: "Business Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "business-clown",
                                            },
                                            {
                                                id: "animal-clown",
                                                title: "Animal Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "animal-clown",
                                            },
                                        ]
                                    },
                                    {
                                        id: "tramp-clown",
                                        title: "Tramp Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "tramp-clown",
                                        children: [
                                            {
                                                id: "charlie-chaplin-clown",
                                                title: "Charlie Chaplin-like Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "charlie-chaplin-clown",
                                            },
                                        ]
                                    },
                                    {
                                        id: "slap-bozo-clown",
                                        title: "Slapstick or Bozo Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "slap-bozo-clown",
                                        children: [
                                            {
                                                id: "bozo-the-clown",
                                                title: "Bozo the Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bozo-the-clown",
                                            },
                                            {
                                                id: "pie-face-clown",
                                                title: "Pie-in-the-Face Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pie-face-clown",
                                            }
                                        ]
                                    },
                                    {
                                        id: "sad-clown",
                                        title: "Sad Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "sad-clown",
                                        children: [
                                            {
                                                id: "the-tragic-clown",
                                                title: "The Tragic Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "the-tragic-clown",
                                            },
                                            {
                                                id: "sad-comic",
                                                title: "Sad Comic",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sad-comic",
                                            },

                                        ]
                                    },
                                    {
                                        id: "ringmaster-clown",
                                        title: "Ringmaster Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "ringmaster-clown",
                                        children: [
                                            {
                                                id: "clown-ringmaster",
                                                title: "Clown Ringmaster",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "clown-ringmaster",
                                            },
                                            {
                                                id: "comedic-mc",
                                                title: "Comedic MC",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "comedic-mc",
                                            }
                                        ]
                                    },
                                    {
                                        id: "fool-clown",
                                        title: "Fool or Buffoon Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fool-clown",
                                        children: [
                                            {
                                                id: "the-buffoon",
                                                title: "The Buffoon",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "the-buffoon",
                                            },
                                            {
                                                id: "the-jester",
                                                title: "The Jester",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "the-jester",
                                            },
                                        ]
                                    },
                                    {
                                        id: "acrobatic-clown",
                                        title: "Acrobatic or Athletic Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "acrobatic-clown",
                                        children: [
                                            {
                                                id: "clown-acrobat",
                                                title: "Clown Acrobat",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "clown-acrobat",
                                            },
                                            {
                                                id: "juggling-clown",
                                                title: "Juggling Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "juggling-clown",
                                            },
                                        ]
                                    },
                                    {
                                        id: "invisible-clown",
                                        title: "Invisible Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "invisible-clown",
                                        children: [
                                            {
                                                id: "invisible-box-clown",
                                                title: "Invisible Box Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "invisible-box-clown",
                                            },
                                            {
                                                id: "mimed-clown-acts",
                                                title: "Mimed Clown Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "mimed-clown-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "mime-clown",
                                        title: "Mime Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "mime-clown",
                                        children: [
                                            {
                                                id: "silent-comic",
                                                title: "Silent Comic",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "silent-comic",
                                            },
                                            {
                                                id: "pantomime-clown",
                                                title: "Pantomime Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "pantomime-clown",
                                            },
                                        ]
                                    },
                                    {
                                        id: "family-clown",
                                        title: "Family Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "family-clown",
                                        children: [
                                            {
                                                id: "bdy-party-clowns",
                                                title: "Birthday Party Clowns",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bday-party-clowns",
                                            },
                                            {
                                                id: "child-circus-clowns",
                                                title: "Children's Circus Clowns",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "child-circus-clowns",
                                            },

                                        ]
                                    },
                                    {
                                        id: "geek-clown",
                                        title: "Geek Clowns",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "geek-clown",
                                        children: [
                                            {
                                                id: "strange-clown",
                                                title: "Strange and Eccentric Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "strange-clown",
                                            },
                                            {
                                                id: "bizarre-act-clown",
                                                title: "Bizarre Act Clown",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "bizarre-act-clown",
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "trapeze-artists",
                                title: "Trapeze Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "trapeze-artists",
                                children: [
                                    {
                                        id: "high-flying-artist",
                                        title: "High-Flying Trapeze Artists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "high-flying-artist",
                                        children: [
                                            {
                                                id: "catchers-and-flyers",
                                                title: "Catchers and Flyers",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "catchers-and-flyers",
                                            },
                                            {
                                                id: "solo-flying-acts",
                                                title: "Solo High-Flying Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "solo-flying-acts",
                                            },

                                        ]
                                    },
                                    {
                                        id: "double-trap-artist",
                                        title: "Double Trapeze Artists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "double-trap-artist",
                                        children: [
                                            {
                                                id: "aerial-duo",
                                                title: "Aerial Duo",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "aerial-duo",
                                            },
                                            {
                                                id: "partner-swings",
                                                title: "Partner Swings",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "partner-swings",
                                            },
                                        ]
                                    },
                                    {
                                        id: "flying-trap-artist",
                                        title: "Flying Trapeze Artists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "flying-trap-artist",
                                        children: [
                                            {
                                                id: "flying-through-air",
                                                title: "Flying through the Air",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flying-through-air",
                                            },
                                            {
                                                id: "flying-through-air",
                                                title: "Flying through the Air",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flying-through-air",
                                            },
                                            {
                                                id: "single-multi-catches",
                                                title: "Single or Multiple Catches",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "single-multi-catches",
                                            },
                                        ]
                                    },
                                    {
                                        id: "swing-trap-artist",
                                        title: "Swinging Trapeze Artists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "swing-trap-artist",
                                        children: [
                                            {
                                                id: "solo-swinging-act",
                                                title: "Solo Swinging Act",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "solo-swinging-act",
                                            },
                                            {
                                                id: "aerial-dismounts",
                                                title: "Aerial Dismounts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "aerial-dismounts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "static-trap-artist",
                                        title: "Static Trapeze Artists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "static-trap-artist",
                                        children: [
                                            {
                                                id: "aerial-static-trapeze",
                                                title: "Aerial Silks and Static Trapeze",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "aerial-static-trapeze",
                                            },
                                            {
                                                id: "strength-flexi-acts",
                                                title: "Strength and Flexibility Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "strength-flexi-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "trap-ontortionist",
                                        title: "Trapeze Contortionists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "trap-ontortionist",
                                        children: [
                                            {
                                                id: "contorted-poses",
                                                title: "Contorted Aerial Poses",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "contorted-poses",
                                            },
                                            {
                                                id: "flexible-hold",
                                                title: "Flexible Holds",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flexible-hold",
                                            },

                                        ]
                                    },
                                    {
                                        id: "hand-trap-artist",
                                        title: "Hand-to-Hand Trapeze Artists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "hand-trap-artist",
                                        children: [
                                            {
                                                id: "partner-lift-balance",
                                                title: "Partner Lifts and Balances",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "partner-lift-balance",
                                            },
                                            {
                                                id: "acro-lift-acts",
                                                title: "Acrobatic Lifting Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "acro-lift-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "aerial-trap-prop",
                                        title: "Aerial Trapeze Artists with Props",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "aerial-trap-prop",
                                        children: [
                                            {
                                                id: "fire-trap-acts",
                                                title: "Fire and Trapeze Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fire-trap-acts",
                                            },
                                            {
                                                id: "hoop-combination",
                                                title: "Hoop and Trapeze Combinations",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "hoop-combination",
                                            },

                                        ]
                                    },
                                    {
                                        id: "solo-trap-artist",
                                        title: "Solo Trapeze Artists",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "solo-trap-artist",
                                        children: [
                                            {
                                                id: "single-perfor-swing",
                                                title: "Single Performer Swings",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "single-perfor-swing",
                                            },
                                            {
                                                id: "solo-flight",
                                                title: "Solo Flight",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "solo-flight",
                                            },
                                        ]
                                    },
                                    {
                                        id: "aerial-duo-acts",
                                        title: "Aerial Duo Acts",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "aerial-duo-acts",
                                        children: [
                                            {
                                                id: "aerial-tra-syncing",
                                                title: "Aerial Trapeze Syncing",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "aerial-tra-syncing",
                                            },
                                            {
                                                id: "aerial-switches",
                                                title: "Aerial Dismounts and Partner Switches",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "aerial-tra-syncing",
                                            },
                                        ]
                                    },
                                    {
                                        id: "trap-acrobatic",
                                        title: "Trapeze Aerialists with Acrobatics",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "trap-acrobatic",
                                        children: [
                                            {
                                                id: "aerial-twists",
                                                title: "Aerial Somersaults and Twists",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "aerial-twists",
                                            },
                                            {
                                                id: "flipping-catches",
                                                title: "Flipping Catches",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flipping-catches",
                                            },
                                        ]
                                    },
                                    {
                                        id: "trap-flying-rope",
                                        title: "Trapeze Performers with Flying Ropes",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "trap-flying-rope",
                                        children: [
                                            {
                                                id: "flying-rope-act",
                                                title: "Flying Rope Act",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flying-rope-act",
                                            },
                                            {
                                                id: "rope-coordination",
                                                title: "Rope and Trapeze Coordination",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "rope-coordination",
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "animal-performer",
                                title: "Animal Trainers and Performers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "animal-performer",
                                children: [
                                    {
                                        id: "big-cat-performer",
                                        title: "Big Cat Trainers and Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "big-cat-performer",
                                        children: [
                                            {
                                                id: "lion-tiger-acts",
                                                title: "Lion and Tiger Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "lion-tiger-acts",
                                            },
                                            {
                                                id: "wild-cat-show",
                                                title: "Wild Cat Shows",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "wild-cat-show",
                                            },
                                        ]
                                    },
                                    {
                                        id: "element-performer",
                                        title: "Elephant Trainers and Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "element-performer",
                                        children: [
                                            {
                                                id: "elephant-acrobatic",
                                                title: "Elephant Acrobatics",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "elephant-acrobatics",
                                            },
                                            {
                                                id: "elephant-shows",
                                                title: "Elephant Shows",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "elephant-shows",
                                            },

                                        ]
                                    },
                                    {
                                        id: "horse-performer",
                                        title: "Horse Trainers and Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "horse-performer",
                                        children: [
                                            {
                                                id: "horseback-acrobatic",
                                                title: "Horseback Acrobatics",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "horseback-acrobatic",
                                            },
                                            {
                                                id: "liber-horse-acts",
                                                title: "Liberty Horse Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "liber-horse-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "dog-train-performer",
                                        title: "Dog Trainers and Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "dog-train-performer",
                                        children: [
                                            {
                                                id: "canine-agil-routine",
                                                title: "Canine Agility Routines",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "canine-agil-routine",
                                            },
                                            {
                                                id: "dog-handler-acts",
                                                title: "Dog and Handler Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "dog-handler-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "bird-train-performer",
                                        title: "Birds Trainers and Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "bird-train-performer",
                                        children: [
                                            {
                                                id: "falconry-acts",
                                                title: "Falconry Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "falconry-acts",
                                            },
                                            {
                                                id: "parrot-bird-acts",
                                                title: "Parrot and Exotic Bird Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "parrot-bird-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "monkey-perdormer",
                                        title: "Monkey Trainers and Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "monkey-perdormer",
                                        children: [
                                            {
                                                id: "chimpanzee-acts",
                                                title: "Chimpanzee Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "chimpanzee-acts",
                                            },
                                            {
                                                id: "ape-acrobatics",
                                                title: "Ape Acrobatics",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ape-acrobatics",
                                            },

                                        ]
                                    },
                                    {
                                        id: "seal-train-perform",
                                        title: "Seal and Sea Lion Trainers and Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "seal-train-perform",
                                        children: [
                                            {
                                                id: "sea-lion-acts",
                                                title: "Sea Lion Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "sea-lion-acts",
                                            },
                                            {
                                                id: "seal-performances",
                                                title: "Seal Performances",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "seal-performances",
                                            },
                                        ]
                                    },
                                    {
                                        id: "camel-train-performer",
                                        title: "Camel Trainers and Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "camel-train-performer",
                                        children: [
                                            {
                                                id: "camel-parades",
                                                title: "Camel Parades",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "camel-parades",
                                            },
                                            {
                                                id: "camel-trick-acts",
                                                title: "Camel Trick Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "camel-trick-acts",
                                            },

                                        ]
                                    },
                                    {
                                        id: "exotic-performer",
                                        title: "Exotic Animal Trainers and Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "exotic-performer",
                                        children: [
                                            {
                                                id: "zebra-acts",
                                                title: "Zebra Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "zebra-acts",
                                            },
                                            {
                                                id: "reptile-shows",
                                                title: "Reptile Shows",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "reptile-shows",
                                            },
                                        ]
                                    },
                                    {
                                        id: "train-animal-acts",
                                        title: "Trained Animal Acts",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "train-animal-acts",
                                        children: [
                                            {
                                                id: "exotic-performer",
                                                title: "multi-animal-acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "exotic-performer",
                                            },
                                            {
                                                id: "animal-circus-acts",
                                                title: "Animal Circus Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "animal-circus-acts",
                                            },

                                        ]
                                    },
                                    {
                                        id: "aerial-animal-acts",
                                        title: "Aerial Animal Acts",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "aerial-animal-acts",
                                        children: [
                                            {
                                                id: "aerial-bird-acts",
                                                title: "Aerial Bird Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "aerial-bird-acts",
                                            },
                                            {
                                                id: "monkey-flying-acts",
                                                title: "Monkey Flying Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "monkey-flying-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "human-coll-acts",
                                        title: "Human-Animal Collaboration Acts",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "human-coll-acts",
                                        children: [
                                            {
                                                id: "animal-trainer-skits",
                                                title: "Animal and Trainer Skits",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "animal-trainer-skits",
                                            },
                                            {
                                                id: "animal-ballets",
                                                title: "Animal Ballets",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "animal-ballets",
                                            },
                                        ]
                                    }
                                ]
                            },
                            {
                                id: "juggle-fire-eater",
                                title: "Jugglers and Fire-Eaters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "juggle-fire-eater",
                                children: [
                                    {
                                        id: "ball-juggle",
                                        title: "Ball Jugglers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "ball-juggle",
                                        children: [
                                            {
                                                id: "solo-ball-juggle",
                                                title: "Solo Ball Juggling",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "solo-ball-juggle",
                                            },
                                            {
                                                id: "multi-ball-juggling",
                                                title: "Multiple Ball Juggling",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "multi-ball-juggling",
                                            },
                                        ]
                                    },
                                    {
                                        id: "ring-jugglers",
                                        title: "Ring Jugglers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "ring-jugglers",
                                        children: [
                                            {
                                                id: "ring-juggle-routine",
                                                title: "Ring Juggling Routines",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ring-juggle-routine",
                                            },
                                            {
                                                id: "double-ring-juggling",
                                                title: "Double Ring Juggling",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "double-ring-juggling",
                                            },
                                        ]
                                    },
                                    {
                                        id: "club-jugglers",
                                        title: "Club Jugglers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "club-jugglers",
                                        children: [
                                            {
                                                id: "solo-club-juggling",
                                                title: "Solo Club Juggling",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "solo-club-juggling",
                                            },
                                            {
                                                id: "passing-clubs",
                                                title: "Passing Clubs",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "passing-clubs",
                                            },
                                        ]
                                    },
                                    {
                                        id: "knife-jugglers",
                                        title: "Knife Jugglers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "knife-jugglers",
                                        children: [
                                            {
                                                id: "knife-precision",
                                                title: "Knife Juggling with Precision",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "knife-precision",
                                            },
                                            {
                                                id: "knife-passing-acts",
                                                title: "Knife Passing Acts",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "knife-passing-acts",
                                            },
                                        ]
                                    },
                                    {
                                        id: "fire-jugglers",
                                        title: "Fire Jugglers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fire-jugglers",
                                        children: [
                                            {
                                                id: "flaming-juggling",
                                                title: "Flaming Torch Juggling",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flaming-juggling",
                                            },
                                            {
                                                id: "multi-fire-props",
                                                title: "Multiple Fire Props",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "multi-fire-props",
                                            },
                                        ]
                                    },
                                    {
                                        id: "fire-eater",
                                        title: "Fire Eaters",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fire-eater",
                                        children: [
                                            {
                                                id: "trad-fire-eating",
                                                title: "Traditional Fire Eating",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "trad-fire-eating",
                                            },
                                            {
                                                id: "fire-breathing",
                                                title: "Fire Breathing",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fire-breathing",
                                            },
                                        ]
                                    },
                                    {
                                        id: "fire-juggling",
                                        title: "Fire Juggling",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fire-juggling",
                                        children: [
                                            {
                                                id: "fire-poi-juggling",
                                                title: "Fire Poi Juggling",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fire-poi-juggling",
                                            },
                                            {
                                                id: "flame-staff-juggling",
                                                title: "Flame Staff Juggling",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flame-staff-juggling",
                                            },
                                        ]
                                    },
                                    {
                                        id: "obj-mani-diabolo",
                                        title: "Object Manipulation and Diabolo",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "obj-mani-diabolo",
                                        children: [
                                            {
                                                id: "diabolo-chinese-yoyo",
                                                title: "Diabolo (Chinese Yo-Yo)",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "diabolo-chinese-yoyo",
                                            },
                                            {
                                                id: "hoop-manipulation",
                                                title: "Hoop Manipulation",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "hoop-manipulation",
                                            },
                                        ]
                                    },
                                    {
                                        id: "cont-juggling",
                                        title: "Contact Juggling",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "cont-juggling",
                                        children: [
                                            {
                                                id: "crystal-manipulation",
                                                title: "Crystal Ball Manipulation",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "crystal-manipulation",
                                            },
                                            {
                                                id: "body-rolling",
                                                title: "Body Rolling",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "body-rolling",
                                            },
                                        ]
                                    },
                                    {
                                        id: "baton-twirlers",
                                        title: "Baton Twirlers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "baton-twirlers",
                                        children: [
                                            {
                                                id: "baton-spinning",
                                                title: "Baton Spinning",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "baton-spinning",
                                            },
                                            {
                                                id: "synch-baton-passing",
                                                title: "Synchronized Baton Passing",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "synch-baton-passing",
                                            },
                                        ]
                                    },
                                    {
                                        id: "umbrella-jugglers",
                                        title: "Umbrella Jugglers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "umbrella-jugglers",
                                        children: [
                                            {
                                                id: "umbrella-tossing",
                                                title: "Umbrella Tossing",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "umbrella-tossing",
                                            },
                                            {
                                                id: "balance-and-spin",
                                                title: "Balance and Spin",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "balance-and-spin",
                                            },

                                        ]
                                    },
                                    {
                                        id: "cigar-box-juggling",
                                        title: "Cigar Box Juggling",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "cigar-box-juggling",
                                        children: [
                                            {
                                                id: "cigar-manipulation",
                                                title: "Cigar Box Manipulation",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "cigar-manipulation",
                                            },
                                            {
                                                id: "box-passing",
                                                title: "Box Passing",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "box-passing",
                                            },
                                        ]
                                    },
                                    {
                                        id: "spin-twir-performer",
                                        title: "Spinning and Twirling Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "spin-twir-performer",
                                        children: [
                                            {
                                                id: "plate-spinning",
                                                title: "Plate Spinning",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "plate-spinning",
                                            },
                                            {
                                                id: "ribbon-twirling",
                                                title: "Ribbon Twirling",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "ribbon-twirling",
                                            },

                                        ]
                                    },
                                    {
                                        id: "fire-poi-performer",
                                        title: "Fire Poi Performers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fire-poi-performer",
                                        children: [
                                            {
                                                id: "fire-poi-circles",
                                                title: "Fire Poi Circles",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fire-poi-circles",
                                            },
                                            {
                                                id: "fire-poi-weaving",
                                                title: "Fire Poi Weaving",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "fire-poi-weaving",
                                            },
                                        ]
                                    },
                                    {
                                        id: "cont-fire-juggling",
                                        title: "Contact Fire Juggling",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "cont-fire-juggling",
                                        children: [
                                            {
                                                id: "flame-manipulation",
                                                title: "Flame Staff Manipulation",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flame-manipulation",
                                            },
                                            {
                                                id: "flame-poi-contact",
                                                title: "Flame Poi Contact",
                                                titleSuffix: "Management Company in Delhi",
                                                slug: "flame-poi-contact",
                                            },
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: "performance-artists",
                        title: "Performance Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "perform-artist",
                        children: [
                            {
                                id: "theater-perf-artist",
                                title: "Theater Performance Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "theater-perf-artist",
                            },
                            {
                                id: "live-art-performer",
                                title: "Live Art Performers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "live-art-performer",
                            },
                            {
                                id: "inter-artist",
                                title: "Interdisciplinary Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "inter-artist",
                            },
                        ]
                    },
                    {
                        id: "speakers-and-hosts",
                        title: "Speakers and Hosts",
                        titleSuffix: "Management Company in Delhi",
                        slug: "speak-hosts",
                        children: [
                            {
                                id: "motivational-speaker",
                                title: "Motivational Speakers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "motivational-speaker",
                            },
                            {
                                id: "corporate-speaker",
                                title: "Corporate Speakers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "corporate-speakers",
                            },
                            {
                                id: "event-hosts",
                                title: "Event Hosts",
                                titleSuffix: "Management Company in Delhi",
                                slug: "event-hosts",
                            },
                            {
                                id: "talk-show-host",
                                title: "Talk Show Hosts",
                                titleSuffix: "Management Company in Delhi",
                                slug: "talk-show-host",
                            },
                        ]
                    },
                    {
                        id: "opera-performers",
                        title: "Opera Performers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "opera-perform",
                        children: [
                            {
                                id: "opera-conductor",
                                title: "Opera Conductor",
                                titleSuffix: "Management Company in Delhi",
                                slug: "opera-conductor",
                            },
                            {
                                id: "opera-orchestras",
                                title: "Opera Orchestras",
                                titleSuffix: "Management Company in Delhi",
                                slug: "opera-orchestras",
                            },
                        ]
                    },
                    {
                        id: "musical-theater-artists",
                        title: "Musical Theater Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "music-the-artist",
                        children: [
                            {
                                id: "broadway-performer",
                                title: "Broadway Performers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "broadway-performer",
                            },
                            {
                                id: "west-end-performer",
                                title: "West End Performers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "west-end-performer",
                            },
                            {
                                id: "touring-casts",
                                title: "Touring Casts",
                                titleSuffix: "Management Company in Delhi",
                                slug: "touring-casts",
                            },
                            {
                                id: "choreographers",
                                title: "Choreographers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "choreographers",
                            },
                        ]
                    },
                    {
                        id: "street-performers",
                        title: "Street Performers (Buskers)",
                        titleSuffix: "Management Company in Delhi",
                        slug: "street-perform",
                        children: [
                            {
                                id: "musical-busker",
                                title: "Musical Buskers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "musical-busker",
                            },
                            {
                                id: "pantomime-artist",
                                title: "Pantomime Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "pantomime-artist",
                            },
                            {
                                id: "living-statues",
                                title: "Living Statues",
                                titleSuffix: "Management Company in Delhi",
                                slug: "living-statues",
                            },
                            {
                                id: "juggler-and-acrobat",
                                title: "Jugglers and Acrobats",
                                titleSuffix: "Management Company in Delhi",
                                slug: "juggler-and-acrobat",
                            },
                        ]
                    },
                    {
                        id: "Voice Performers",
                        title: "Voice Performers (Spoken Word & Poetry)",
                        titleSuffix: "Management Company in Delhi",
                        slug: "voice-perform",
                        children: [
                            {
                                id: "spoken-word-artist",
                                title: "Spoken Word Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "spoken-word-artist",
                            },
                            {
                                id: "storytellers",
                                title: "Storytellers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "storytellers",
                            },
                            {
                                id: "poetry-slam-performer",
                                title: "Poetry Slam Performers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "poetry-slam-performer",
                            },
                        ]
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
                        children: [
                            {
                                id: "literary-fiction-writers",
                                title: "Literary Fiction Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "literary-fiction-writers",
                            },
                            {
                                id: "genre-fiction-writers",
                                title: "Genre Fiction Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "genre-fiction-writers",
                            },
                            {
                                id: "historical-fiction-writers",
                                title: "Historical Fiction Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "historical-fiction-writers",
                            },
                            {
                                id: "young-adult-novelists",
                                title: "Young Adult (YA) Novelists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "young-adult-novelists",
                            },
                            {
                                id: "childrens-book-authors",
                                title: "Children’s Book Authors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "childrens-book-authors",
                            },
                        ]
                    },
                    {
                        id: "poets",
                        title: "Poets",
                        titleSuffix: "Management Company in Delhi",
                        slug: "poets",
                        children: [
                            {
                                id: "contemporary-poets",
                                title: "Contemporary Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "contemporary-poets",
                            },
                            {
                                id: "classic-poets",
                                title: "Classic Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "classic-poets",
                            },
                            {
                                id: "spoken-word-poets",
                                title: "Spoken Word Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "spoken-word-poets",
                            },
                            {
                                id: "experimental-poets",
                                title: "Experimental Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "experimental-poets",
                            },
                            {
                                id: "lyric-poets",
                                title: "Lyric Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "lyric-poets",
                            },
                            {
                                id: "epic-poets",
                                title: "Epic Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "epic-poets",
                            },
                            {
                                id: "narrative-poets",
                                title: "Narrative Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "narrative-poets",
                            },
                            {
                                id: "dramatic-poets",
                                title: "Dramatic Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "dramatic-poets",
                            },
                            {
                                id: "sonnet-poets",
                                title: "Sonnet Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "sonnet-poets",
                            },
                            {
                                id: "confessional-poets",
                                title: "Confessional Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "confessional-poets",
                            },
                            {
                                id: "beat-poets",
                                title: "Beat Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "beat-poets",
                            },
                            {
                                id: "modernist-poets",
                                title: "Modernist Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "modernist-poets",
                            },
                            {
                                id: "surrealist-poets",
                                title: "Surrealist Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "surrealist-poets",
                            },
                            {
                                id: "haiku-poets",
                                title: "Haiku Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "haiku-poets",
                            },
                            {
                                id: "free-verse-poets",
                                title: "Free Verse Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "free-verse-poets",
                            },
                            {
                                id: "political-poets",
                                title: "Political Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "political-poets",
                            },
                            {
                                id: "nature-poets",
                                title: "Nature Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "nature-poets",
                            },
                            {
                                id: "postmodern-poets",
                                title: "Postmodern Poets",
                                titleSuffix: "Management Company in Delhi",
                                slug: "postmodern-poets",
                            },
                        ]
                    },
                    {
                        id: "screenwriters",
                        title: "Screenwriters",
                        titleSuffix: "Management Company in Delhi",
                        slug: "scr-writer",
                        children: [
                            {
                                id: "feat-film-screenwrite",
                                title: "Feature Film Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "feat-film-screenwrite",
                            },
                            {
                                id: "television-screenwriters",
                                title: "Television Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "television-screenwriters",
                            },
                            {
                                id: "adaptation-screenwriters",
                                title: "Adaptation Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "adaptation-screenwriters",
                            },
                            {
                                id: "spec-script-writers",
                                title: "Spec Script Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "spec-script-writers",
                            },
                            {
                                id: "dialogue-writers",
                                title: "Dialogue Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "dialogue-writers",
                            },
                            {
                                id: "documentary-screenwriters",
                                title: "Documentary Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "documentary-screenwriters",
                            },
                            {
                                id: "action-screenwriters",
                                title: "Action Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "action-screenwriters",
                            },
                            {
                                id: "comedy-screenwriters",
                                title: "Comedy Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "comedy-screenwriters",
                            },
                            {
                                id: "romantic-comedy-screenwriters",
                                title: "Romantic Comedy Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "romantic-comedy-screenwriters",
                            },
                            {
                                id: "animated-screenwriters",
                                title: "Animated Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "animated-screenwriters",
                            },
                            {
                                id: "experimental-screenwriters",
                                title: "Experimental Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "experimental-screenwriters",
                            },
                            {
                                id: "historical-screenwriters",
                                title: "Historical Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "historical-screenwriters",
                            },
                            {
                                id: "sci-fi-fantasy-screenwriters",
                                title: "Sci-Fi/Fantasy Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "sci-fi-fantasy-screenwriters",
                            },
                            {
                                id: "script-doctors",
                                title: "Script Doctors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "script-doctors",
                            },
                            {
                                id: "genre-spec-screenwriters",
                                title: "Genre-Specific Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "genre-spec-screenwriters",
                            },
                        ]
                    },
                    {
                        id: "playwrights",
                        title: "Playwrights",
                        titleSuffix: "Management Company in Delhi",
                        slug: "ply-wright",
                        children: [
                            {
                                id: "tragedy-playwrights",
                                title: "Tragedy Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "tragedy-playwrights",
                            },
                            {
                                id: "comedy-playwrights",
                                title: "Comedy Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "comedy-playwrights",
                            },
                            {
                                id: "tragicomedy-playwrights",
                                title: "Tragicomedy Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "tragicomedy-playwrights",
                            },
                            {
                                id: "modern-playwrights",
                                title: "Modern Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "modern-playwrights",
                            },
                            {
                                id: "experimental-playwrights",
                                title: "Experimental Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "experimental-playwrights",
                            },
                            {
                                id: "musical-playwrights",
                                title: "Musical Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "musical-playwrights",
                            },
                            {
                                id: "political-playwrights",
                                title: "Political Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "political-playwrights",
                            },
                            {
                                id: "historical-playwrights",
                                title: "Historical Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "historical-playwrights",
                            },
                            {
                                id: "absurdist-playwrights",
                                title: "Absurdist Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "absurdist-playwrights",
                            },
                            {
                                id: "romantic-playwrights",
                                title: "Romantic Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "romantic-playwrights",
                            },
                            {
                                id: "farce-playwrights",
                                title: "Farce Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "farce-playwrights",
                            },
                            {
                                id: "realist-playwrights",
                                title: "Realist Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "realist-playwrights",
                            },
                            {
                                id: "family-playwrights",
                                title: "Family Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "family-playwrights",
                            },
                            {
                                id: "monologue-playwrights",
                                title: "Monologue Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "monologue-playwrights",
                            },
                            {
                                id: "childrens-playwrights",
                                title: "Children's Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "childrens-playwrights",
                            },
                            {
                                id: "improv-playwrights",
                                title: "Improv Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "improv-playwrights",
                            },
                            {
                                id: "avant-garde-playwrights",
                                title: "Avant-Garde Playwrights",
                                titleSuffix: "Management Company in Delhi",
                                slug: "avant-garde-playwrights",
                            },
                        ]
                    },
                    {
                        id: "journalists-and-columnists",
                        title: "Journalists and Columnists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "jornl-and-column",
                        children: [
                            {
                                id: "investigative-journalists",
                                title: "Investigative Journalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "investigative-journalists",
                            },
                            {
                                id: "news-journalists",
                                title: "News Journalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "news-journalists",
                            },
                            {
                                id: "feature-journalists",
                                title: "Feature Journalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "feature-journalists",
                            },
                            {
                                id: "political-journalists",
                                title: "Political Journalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "political-journalists",
                            },
                            {
                                id: "sports-journalists",
                                title: "Sports Journalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "sports-journalists",
                            },
                            {
                                id: "business-journalists",
                                title: "Business Journalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "business-journalists",
                            },
                            {
                                id: "environmental-journalists",
                                title: "Environmental Journalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "environmental-journalists",
                            },
                            {
                                id: "photojournalists",
                                title: "Photojournalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "photojournalists",
                            },
                            {
                                id: "broadcast-journalists",
                                title: "Broadcast Journalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "broadcast-journalists",
                            },
                            {
                                id: "opinion-columnists",
                                title: "Opinion Columnists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "opinion-columnists",
                            },
                            {
                                id: "lifestyle-columnists",
                                title: "Lifestyle Columnists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "lifestyle-columnists",
                            },
                            {
                                id: "humor-columnists",
                                title: "Humor Columnists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "humor-columnists",
                            },
                            {
                                id: "technology-columnists",
                                title: "Technology Columnists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "technology-columnists",
                            },
                            {
                                id: "financial-columnists",
                                title: "Financial Columnists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "financial-columnists",
                            },
                            {
                                id: "cultural-columnists",
                                title: "Cultural Columnists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "cultural-columnists",
                            },
                            {
                                id: "health-columnists",
                                title: "Health Columnists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "health-columnists",
                            },
                            {
                                id: "travel-columnists",
                                title: "Travel Columnists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "travel-columnists",
                            },
                            {
                                id: "food-columnists",
                                title: "Food Columnists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "food-columnists",
                            },
                        ]
                    },
                    {
                        id: "nonfiction-writers",
                        title: "Nonfiction Writers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "nonfi-writer",
                        children: [
                            {
                                id: "journalists",
                                title: "Journalists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "journalists",
                            },
                            {
                                id: "biographers",
                                title: "Biographers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "biographers",
                            },
                            {
                                id: "memoirists",
                                title: "Memoirists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "memoirists",
                            },
                            {
                                id: "essayists",
                                title: "Essayists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "essayists",
                            },
                            {
                                id: "historians",
                                title: "Historians",
                                titleSuffix: "Management Company in Delhi",
                                slug: "historians",
                            },
                            {
                                id: "self-help-authors",
                                title: "Self-help Authors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "self-help-authors",
                            },
                            {
                                id: "health-wellness-writers",
                                title: "Health and Wellness Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "health-wellness-writers",
                            },
                            {
                                id: "science-writers",
                                title: "Science Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "science-writers",
                            },
                            {
                                id: "cookbook-authors",
                                title: "Cookbook Authors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "cookbook-authors",
                            },
                            {
                                id: "business-writers",
                                title: "Business Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "business-writers",
                            },
                            {
                                id: "critics-and-reviewers",
                                title: "Critics and Reviewers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "critics-and-reviewers",
                            },
                        ]
                    },
                    {
                        id: "copywriters",
                        title: "Copywriters",
                        titleSuffix: "Management Company in Delhi",
                        slug: "copy-writer",
                        children: [
                            {
                                id: "advertising-copywriters",
                                title: "Advertising Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "advertise-copywriters",
                            },
                            {
                                id: "seo-copywriters",
                                title: "SEO Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "seo-copywriters",
                            },
                            {
                                id: "content-copywriters",
                                title: "Content Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "content-copywriters",
                            },
                            {
                                id: "social-media-copywriters",
                                title: "Social Media Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "social-media-copywriters",
                            },
                            {
                                id: "email-copywriters",
                                title: "Email Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "email-copywriters",
                            },
                            {
                                id: "branding-copywriters",
                                title: "Branding Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "branding-copywriters",
                            },
                            {
                                id: "product-copywriters",
                                title: "Product Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "product-copywriters",
                            },
                            {
                                id: "direct-response-copywriters",
                                title: "Direct Response Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "direct-resp-copywriters",
                            },
                            {
                                id: "technical-copywriters",
                                title: "Technical Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "technical-copywriters",
                            },
                            {
                                id: "creative-copywriters",
                                title: "Creative Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "creative-copywriters",
                            },
                            {
                                id: "corporate-copywriters",
                                title: "Corporate Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "corporate-copywriters",
                            },
                            {
                                id: "ux-copywriters",
                                title: "UX Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "ux-copywriters",
                            },
                            {
                                id: "pr-copywriters",
                                title: "Public Relations (PR) Copywriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "pr-copywriters",
                            },
                            {
                                id: "video-scriptwriters",
                                title: "Video Scriptwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "video-scriptwriters",
                            },

                        ]
                    },
                    {
                        id: "content-writer",
                        title: "Content Writers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "content-writer",
                        children: [
                            {
                                id: "blog-writers",
                                title: "Blog Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "blog-writers",
                            },
                            {
                                id: "seo-content-writers",
                                title: "SEO Content Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "seo-content-writers",
                            },
                            {
                                id: "article-writers",
                                title: "Article Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "article-writers",
                            },
                            {
                                id: "social-media-content-writers",
                                title: "Social Media Content Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "social-media-content-writers",
                            },
                            {
                                id: "technical-writers",
                                title: "Technical Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "technical-writers",
                            },
                            {
                                id: "e-commerce-content-writers",
                                title: "E-commerce Content Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "e-commerce-content-writers",
                            },
                            {
                                id: "press-release-writers",
                                title: "Press Release Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "press-release-writers",
                            },
                            {
                                id: "script-writers",
                                title: "Script Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "script-writers",
                            },
                            {
                                id: "white-paper-writers",
                                title: "White Paper Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "white-paper-writers",
                            },
                            {
                                id: "case-study-writers",
                                title: "Case Study Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "case-study-writers",
                            },
                            {
                                id: "ghostwriters",
                                title: "Ghostwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "ghostwriters",
                            },
                            {
                                id: "academic-writers",
                                title: "Academic Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "academic-writers",
                            },
                            {
                                id: "health-medical-content-writer",
                                title: "Health and Medical Content Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "health-medi-content-writer",
                            },
                            {
                                id: "travel-writers",
                                title: "Travel Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "travel-writers",
                            },
                            {
                                id: "lifestyle-writers",
                                title: "Lifestyle Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "lifestyle-writers",
                            },
                            {
                                id: "financial-content-writers",
                                title: "Financial Content Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "financial-content-writers",
                            },
                            {
                                id: "product-review-writers",
                                title: "Product Review Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "product-review-writers",
                            },
                            {
                                id: "podcast-content-writers",
                                title: "Podcast Content Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "podcast-content-writers",
                            },
                            {
                                id: "news-writers",
                                title: "News Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "news-writers",
                            },

                        ]
                    },
                    {
                        id: "technical-writers",
                        title: "Technical Writers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "technical-writer",
                        children: [
                            {
                                id: "user-manual-writers",
                                title: "User Manual Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "user-manual-writers",
                            },
                            {
                                id: "api-documentation-writers",
                                title: "API Documentation Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "api-documentation-writers",
                            },
                            {
                                id: "help-documentation-writers",
                                title: "Help Documentation Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "help-documentation-writers",
                            },
                            {
                                id: "instructional-designers",
                                title: "Instructional Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "instructional-designers",
                            },
                            {
                                id: "software-documentation-writers",
                                title: "Software Documentation Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "software-documentation-writers",
                            },
                            {
                                id: "process-documentation-writers",
                                title: "Process Documentation Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "process-documentation-writers",
                            },
                            {
                                id: "technical-editors",
                                title: "Technical Editors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "technical-editors",
                            },
                            {
                                id: "systems-documentation-writers",
                                title: "Systems Documentation Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "systems-documentation-writers",
                            },
                            {
                                id: "product-documentation-writers",
                                title: "Product Documentation Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "product-documentation-writers",
                            },
                            {
                                id: "compliance-and-regulatory-documentation-writers",
                                title: "Compliance and Regulatory Documentation Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "compli-documentation-writers",
                            },
                            {
                                id: "web-content-writers-technical-focus",
                                title: "Web Content Writers (Technical Focus)",
                                titleSuffix: "Management Company in Delhi",
                                slug: "web-content-writers-focus",
                            },
                            {
                                id: "proposal-writers",
                                title: "Proposal Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "proposal-writers",
                            },
                            {
                                id: "release-note-writers",
                                title: "Release Note Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "release-note-writers",
                            },
                            {
                                id: "knowledge-base-writers",
                                title: "Knowledge Base Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "knowledge-base-writers",
                            },
                            {
                                id: "test-case-writers",
                                title: "Test Case Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "test-case-writers",
                            },
                        ]
                    },
                    {
                        id: "speechwriters",
                        title: "Speechwriters",
                        titleSuffix: "Management Company in Delhi",
                        slug: "speech-writer",
                        children: [
                            {
                                id: "political-speechwriters",
                                title: "Political Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "political-speechwriters",
                            },
                            {
                                id: "corporate-speechwriters",
                                title: "Corporate Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "corporate-speechwriters",
                            },
                            {
                                id: "pr-speechwriters",
                                title: "Public Relations Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "pr-speechwriters",
                            },
                            {
                                id: "public-relations-speechwriters",
                                title: "Public Relations Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "public-relation-speechwriter",
                            },
                            {
                                id: "motivational-speechwriters",
                                title: "Motivational Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "motivational-speechwriters",
                            },
                            {
                                id: "wedding-speechwriters",
                                title: "Wedding Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "wedding-speechwriters",
                            },
                            {
                                id: "eulogy-speechwriters",
                                title: "Eulogy Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "eulogy-speechwriters",
                            },
                            {
                                id: "keynote-speechwriters",
                                title: "Keynote Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "keynote-speechwriters",
                            },
                            {
                                id: "ceremonial-speechwriters",
                                title: "Ceremonial Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "ceremonial-speechwriters",
                            },
                            {
                                id: "award-speechwriters",
                                title: "Award Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "award-speechwriters",
                            },
                            {
                                id: "speechwriters-for-nonprofits-and-advocacy-groups",
                                title: "Speechwriters for Nonprofits and Advocacy Groups",
                                titleSuffix: "Management Company in Delhi",
                                slug: "speechwriter-advocacy-group",
                            },
                            {
                                id: "religious-speechwriters",
                                title: "Religious Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "religious-speechwriters",
                            },
                            {
                                id: "business-presentation-speechwriters",
                                title: "Business Presentation Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "busi-present-speechwriter",
                            },
                            {
                                id: "comedic-speechwriters",
                                title: "Comedic Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "comedic-speechwriterS",
                            },
                            {
                                id: "legal-speechwriters",
                                title: "Legal Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "legal-speechwriter",
                            },
                            {
                                id: "cultural-or-social-event-speechwriters",
                                title: "Cultural or Social Event Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "culture-social-speechwriter",
                            },
                            {
                                id: "academic-speechwriters",
                                title: "Academic Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "academic-speechwriter",
                            },
                            {
                                id: "startup-and-entrepreneurial-speechwriters",
                                title: "Startup and Entrepreneurial Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "start-entrepreneur-speechwriter",
                            },
                        ]

                    },
                    {
                        id: "playwrights-for-interactive-and-video-games",
                        title: "Playwrights for Interactive and Video Games",
                        titleSuffix: "Management Company in Delhi",
                        slug: "play-fiab-game",
                        children: [
                            {
                                id: "narrative-designers",
                                title: "Narrative Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "narrative-designers",
                            },
                            {
                                id: "quest-designers",
                                title: "Quest Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "quest-designers",
                            },
                            {
                                id: "interactive-scriptwriters",
                                title: "Interactive Scriptwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "interactive-scriptwriters",
                            },
                            {
                                id: "worldbuilding-writers",
                                title: "Worldbuilding Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "worldbuilding-writers",
                            },
                            {
                                id: "cutscene-writers",
                                title: "Cutscene Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "cutscene-writers",
                            },
                            {
                                id: "character-writers",
                                title: "Character Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "character-writers",
                            },
                            {
                                id: "branching-narrative-writers",
                                title: "Branching Narrative Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "branch-narrative-writers",
                            },
                            {
                                id: "localization-writers",
                                title: "Localization Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "localization-writers",
                            },
                            {
                                id: "game-scriptwriters-immersive-storytelling",
                                title: "Game Scriptwriters for Immersive Storytelling",
                                titleSuffix: "Management Company in Delhi",
                                slug: "game-scriptwriters",
                            },
                            {
                                id: "level-designers-narrative-focus",
                                title: "Level Designers with Narrative Focus",
                                titleSuffix: "Management Company in Delhi",
                                slug: "level-designers",
                            },
                            {
                                id: "procedural-writers",
                                title: "Procedural Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "procedural-writers",
                            },
                            {
                                id: "interactive-drama-writers",
                                title: "Interactive Drama Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "intera-drama-writers",
                            },
                            {
                                id: "game-event-writers",
                                title: "Game Event Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "game-event-writers",
                            },
                            {
                                id: "voiceover-scriptwriters",
                                title: "Voiceover Scriptwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "voiceover-scriptwriters",
                            },
                        ]
                    },
                    {
                        id: "speech-and-debate-writers",
                        title: "Speech and Debate Writers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "spch-deb-writer",
                        children: [
                            {
                                id: "persuasive-speechwriters",
                                title: "Persuasive Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "persuasive-speechwriters",
                            },
                            {
                                id: "informative-speechwriters",
                                title: "Informative Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "informative-speechwriters",
                            },
                            {
                                id: "debate-case-writers",
                                title: "Debate Case Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "debate-case-writers",
                            },
                            {
                                id: "lincoln-douglas-debate-writers",
                                title: "Lincoln-Douglas Debate Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "lincoln-debate-writers",
                            },
                            {
                                id: "policy-debate-writers",
                                title: "Policy Debate Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "policy-debate-writers",
                            },
                            {
                                id: "public-forum-debate-writers",
                                title: "Public Forum Debate Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "public-forum-writers",
                            },
                            {
                                id: "extemporaneous-speechwriters",
                                title: "Extemporaneous Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "extemporaneous-speechwriter",
                            },
                            {
                                id: "impromptu-speechwriters",
                                title: "Impromptu Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "impromptu-speechwriter",
                            },
                            {
                                id: "oratorical-speechwriters",
                                title: "Oratorical Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "oratorical-speechwriter",
                            },
                            {
                                id: "value-debate-writers",
                                title: "Value Debate Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "value-debate-writer",
                            },
                            {
                                id: "student-speechwriters",
                                title: "Student Congress Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "student-speechwriter",
                            },
                            {
                                id: "rhetorical-argument-writers",
                                title: "Rhetorical Argument Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "rhetorical-argu-writer",
                            },
                            {
                                id: "mock-trial-writers",
                                title: "Mock Trial Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mock-trial-writer",
                            },
                            {
                                id: "campaign-speechwriters",
                                title: "Campaign Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "campaign-speechwriter",
                            },
                            {
                                id: "debate-resolution-writers",
                                title: "Debate Resolution Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "debate-resolution-writer",
                            },
                            {
                                id: "comedy-debate-writers",
                                title: "Comedy Debate Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "comedy-debate-writer",
                            },
                            {
                                id: "moot-court-speechwriters",
                                title: "Moot Court Speechwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "moot-court-speechwriter",
                            },
                        ]
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
                        children: [
                            {
                                id: "lux-haute-cout-desi",
                                title: "Luxury Haute Couture Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "lux-haute-cout-desi",
                            },
                            {
                                id: "avant-garde-haut-cout-desi",
                                title: "Avant-Garde Haute Couture Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "avant-garde-haut-cout-desi",
                            },
                            {
                                id: "trad-haut-cout-desi",
                                title: "Traditional Haute Couture Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "trad-haut-cout-desi",
                            },
                            {
                                id: "rtw-haut-cout-desi",
                                title: "Ready-to-Wear Haute Couture Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "rtw-haut-cout-desi",
                            },
                            {
                                id: "eco-haut-cout-desi",
                                title: "Sustainable Haute Couture Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "eco-haut-cout-desi",
                            },
                            {
                                id: "haute-cout-access-desi",
                                title: "Haute Couture Accessory Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "haute-cout-access-desi",
                            },
                            {
                                id: "haute-cout-house",
                                title: "Haute Couture Fashion Houses",
                                titleSuffix: "Management Company in Delhi",
                                slug: "haute-cout-house",
                            },
                            {
                                id: "cultural-theme-haut-cout-desi",
                                title: "Cultural and Thematic Haute Couture Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "cultural-theme-haut-cout-desi",
                            },
                            {
                                id: "collab-haut-cout-desi",
                                title: "Collaborative Haute Couture Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "collab-haut-cout-desi",
                            },
                            {
                                id: "future-haut-cout-desi",
                                title: "Futuristic Haute Couture Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "future-haut-cout-desi",
                            },
                        ]
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
                        children: [
                            {
                                id: "activewear-designers",
                                title: "Activewear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "activewear-dsigner",
                            },
                            {
                                id: "casual-sport-designers",
                                title: "Casual Sportswear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "casual-sport-dsigner",
                            },
                            {
                                id: "footwear-designers-sportswear",
                                title: "Footwear Designers (Sportswear)",
                                titleSuffix: "Management Company in Delhi",
                                slug: "footwear-desig-sportswear",
                            },
                            {
                                id: "sport-outer-designers",
                                title: "Sports Outerwear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "sport-outer-dsigner",
                            },
                            {
                                id: "swimwear-designers",
                                title: "Swimwear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "swimwear-dsigner",
                            },
                            {
                                id: "yoga-pilates-apar-desi",
                                title: "Yoga and Pilates Apparel Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "yoga-pilates-apar-desi",
                            },
                            {
                                id: "winter-sport-designers",
                                title: "Winter Sportswear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "winter-sport-designer",
                            },
                            {
                                id: "sport-uniform-designers",
                                title: "Sports Uniform Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "sport-uniform-designer",
                            },
                            {
                                id: "sustainable-sportswear-designers",
                                title: "Sustainable Sportswear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "sust-sport-dsigner",
                            },
                            {
                                id: "adaptive-sport-designers",
                                title: "Adaptive Sportswear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "adaptive-sport-dsigner",
                            },
                        ]
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
                        children: [
                            {
                                id: "jewelry-designers",
                                title: "Jewelry Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "jewelry-dsigner",
                            },
                            {
                                id: "handbag-and-bag-designers",
                                title: "Handbag and Bag Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "handbag-bag-dsigner",
                            },
                            {
                                id: "footwear-designers",
                                title: "Footwear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "foot-wear-dsigner",
                            },
                            {
                                id: "headwear-designers",
                                title: "Headwear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "head-wear-dsigner",
                            },
                            {
                                id: "scarf-and-shawl-designers",
                                title: "Scarf and Shawl Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "scarf-shawl-dsigner",
                            },
                            {
                                id: "belt-and-buckle-designers",
                                title: "Belt and Buckle Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "belt-buckle-dsigner",
                            },
                            {
                                id: "belt-and-buckle-designers",
                                title: "Eyewear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "belt-buckle-dsigner",
                            },
                            {
                                id: "glove-designers",
                                title: "Glove Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "glove-dsigner",
                            },
                            {
                                id: "tech-func-acc-designers",
                                title: "Tech and Functional Accessory Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "tech-func-acc-designer",
                            },
                            {
                                id: "sustainable-or-eco-friendly-accessory-designers",
                                title: "Sustainable and Eco-Friendly Accessory Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "sust-eff-acc-designer",
                            },
                            {
                                id: "bridal-and-special-occasion-accessory-designers",
                                title: "Bridal and Special Occasion Accessory Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "brd-spc-acc-designer",
                            },
                            {
                                id: "creative-and-experimental-accessory-designers",
                                title: "Creative and Experimental Accessory Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "cre-exp-acc-designer",
                            },
                        ]
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
                        children: [
                            {
                                id: "character-costume-designers",
                                title: "Character Costume Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "char-cost-dsigner",
                            },
                            {
                                id: "theme-park-parade-and-show-costume-designers",
                                title: "Theme Park Parade and Show Costume Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "theme-parade-costume-designer",
                            },
                            {
                                id: "attraction-costume-designers",
                                title: "Attraction Costume Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "attraction-costume-designer",
                            },
                            {
                                id: "specialty-costume-designers",
                                title: "Specialty Costume Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "specialty-costume-designer",
                            },
                            {
                                id: "interactive-roleplay-and-entertainment-costume-designers",
                                title: "Interactive Roleplay and Entertainment Costume Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "roleplay-entert-designer",
                            },
                            {
                                id: "employee-uniform-designers",
                                title: "Employee Uniform Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "employee-uniform-designer",
                            },
                            {
                                id: "high-concept-costume-designers",
                                title: "High-Concept Costume Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "high-concept-dsigner",
                            },
                            {
                                id: "immersive-cost-designers",
                                title: "Costume Designers for Immersive Experiences",
                                titleSuffix: "Management Company in Delhi",
                                slug: "immersive-cost-dsigner",
                            },
                            {
                                id: "costume-designers-for-special-effects",
                                title: "Costume Designers for Special Effects",
                                titleSuffix: "Management Company in Delhi",
                                slug: "costume-dsigner-effect",
                            },
                            {
                                id: "luxury-vip-exp-designers",
                                title: "Luxury and VIP Experience Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "luxury-vip-exp-dsigner",
                            },
                            {
                                id: "family-kid-fri-cost-designers",
                                title: "Family and Kid-Friendly Costume Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "family-kid-cost-dsigner",
                            },
                        ]
                    },
                    {
                        id: "maternity-wear-designers",
                        title: "Maternity Wear Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "matr-wr-dsigner",
                        children: [
                            {
                                id: "casual-mat-wear-designers",
                                title: "Casual Maternity Wear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "casual-mat-wear-dsigner",
                            },
                            {
                                id: "professional-mat-wear-designers",
                                title: "Professional Maternity Wear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "professional-mat-dsigner",
                            },
                            {
                                id: "evening-formal-mat-wear-designers",
                                title: "Evening and Formal Maternity Wear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "evening-mat-dsigner",
                            },
                            {
                                id: "luxe-and-couture-mat-wear-designers",
                                title: "Luxe and Couture Maternity Wear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "luxe-mat-dsigner",
                            },
                            {
                                id: "maternity-lingerie-designers",
                                title: "Maternity Lingerie Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mat-lingerie-dsigner",
                            },
                            {
                                id: "maternity-swimwear-designers",
                                title: "Maternity Swimwear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mat-swim-dsigner",
                            },
                            {
                                id: "maternity-outerwear-designers",
                                title: "Maternity Outerwear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mat-outer-dsigner",
                            },
                            {
                                id: "mat-bridal-wear-designers",
                                title: "Maternity Bridal Wear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mat-bridal-dsigner",
                            },
                            {
                                id: "sustainable-and-ethical-maternity-wear-designers",
                                title: "Sustainable and Ethical Maternity Wear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "sust-eth-mat-dsigner",
                            },
                            {
                                id: "maternity-wear-for-special-occasions-designers",
                                title: "Maternity Wear for Special Occasions Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mat-occasions-dsigner",
                            },
                            {
                                id: "maternity-active-and-fitness-wear-designers",
                                title: "Maternity Active and Fitness Wear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mat-active-dsigner",
                            },
                            {
                                id: "maternity-wear-for-multiple-pregnancies-designers",
                                title: "Maternity Wear for Multiple Pregnancies Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mat-multi-preg-dsigner",
                            },
                            {
                                id: "maternity-accessories-designers",
                                title: "Maternity Accessories Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mat-accessory-dsigner",
                            },
                        ]
                    },
                    {
                        id: "lingerie-and-underwear-designers",
                        title: "Lingerie and Underwear Designers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "ling-undr-dsigner",
                        children: [
                            {
                                id: "luxury-lingerie-designers",
                                title: "Luxury Lingerie Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "lux-ling-dsigner",
                            },
                            {
                                id: "everyday-lingerie-designers",
                                title: "Everyday Lingerie Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "everyday-ling-dsigner",
                            },
                            {
                                id: "maternity-postpartum-lingerie-designers",
                                title: "Maternity and Postpartum Lingerie Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "mat-post-ling-dsigner",
                            },
                            {
                                id: "plus-size-lingerie-designers",
                                title: "Plus-Size Lingerie Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "plus-size-ling-dsigner",
                            },
                            {
                                id: "corsetry-designers",
                                title: "Corsetry Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "corsetry-dsigner",
                            },
                            {
                                id: "swim-lingerie-hybrid-designers",
                                title: "Swimwear and Lingerie Hybrid Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "swim-hybrid-dsigner",
                            },
                            {
                                id: "ethical-sustainable-lingerie-designers",
                                title: "Ethical and Sustainable Lingerie Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "ethical-sustain-dsigner",
                            },
                            {
                                id: "fashion-forward-lingerie-designers",
                                title: "Fashion-Forward Lingerie Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "fashion-forward-dsigner",
                            },
                            {
                                id: "lingerie-accessories-designers",
                                title: "Lingerie Accessories Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "ling-accessory-dsigner",
                            },
                            {
                                id: "men-s-lingerie-underwear-designers",
                                title: "Men’s Lingerie and Underwear Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "men-underwear-dsigner",
                            },
                            {
                                id: "bridal-lingerie-designers",
                                title: "Bridal Lingerie Designers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "bridal-lingerie-dsigner",
                            },
                        ]
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
                        title: "Film Actors",
                        titleSuffix: "Management Company in Delhi",
                        slug: "film-actor",
                        children: [
                            {
                                id: "lead-actor",
                                title: "Lead Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "lead-actor",
                            },
                            {
                                id: "supporting-actor",
                                title: "Supporting Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "supporting-actor",
                            },
                            {
                                id: "character-actor",
                                title: "Character Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "character-actor",
                            },
                        ]
                    },
                    {
                        id: "film-directors",
                        title: "Film Directors",
                        titleSuffix: "Management Company in Delhi",
                        slug: "film-director",
                    },
                    {
                        id: "film-producers",
                        title: "Film Producers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "film-producer",
                        children: [
                            {
                                id: "film-producers",
                                title: "Film Producers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "film-producer",
                                children: [
                                    {
                                        id: "executive-producers",
                                        title: "Executive Producers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "executive-producer",
                                    },
                                    {
                                        id: "line-producers",
                                        title: "Line Producers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "line-producer",
                                    },
                                    {
                                        id: "co-producers",
                                        title: "Co-Producers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "co-producer",
                                    },

                                ]
                            }
                        ]
                    },
                    {
                        id: "film-screenwriters",
                        title: "Film Screenwriter",
                        titleSuffix: "Management Company in Delhi",
                        slug: "film-scr-writer",
                        children: [
                            {
                                id: "original-screenwriters",
                                title: "Original Screenwriters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "original-scr-writer",
                            },
                            {
                                id: "adaptation-writers",
                                title: "Adaptation Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "adaptation-writer",
                            },
                            {
                                id: "television-writers",
                                title: "Television Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "television-writer",
                            },
                        ]
                    },
                    {
                        id: "cinematographers",
                        title: "Cinematographers (Directors of Photography)",
                        titleSuffix: "Management Company in Delhi",
                        slug: "cinema-grapher",
                    },
                    {
                        id: "film-editors",
                        title: "Film Editors",
                        titleSuffix: "Management Company in Delhi",
                        slug: "film-editor",
                    },
                    {
                        id: "television-editors",
                        title: "Television Editors",
                        titleSuffix: "Management Company in Delhi",
                        slug: "television-editor",
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
                        id: "casting-directors",
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
                        slug: "public-rel-mkt-team",
                    },
                    {
                        id: "talent-managers",
                        title: "Talent Managers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "telent-manager",
                    },
                ]
            },
            {
                id: "celebrity-artists",
                title: "Celebrity Artists",
                titleSuffix: "Management Company in Delhi",
                slug: "celebrity-artist",
                children: [
                    {
                        id: "musicians-singers",
                        title: "Musicians and Singers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "musician-singer",
                        children: [
                            {
                                id: "bands",
                                title: "Bands",
                                titleSuffix: "Management Company in Delhi",
                                slug: "band",
                            }
                        ]
                    },
                    {
                        id: "actors-and-actresses",
                        title: "Actors and Actresses",
                        titleSuffix: "Management Company in Delhi",
                        slug: "actor-actress",
                    },
                    {
                        id: "athletes",
                        title: "Athletes",
                        titleSuffix: "Management Company in Delhi",
                        slug: "athlete",
                        children: [
                            {
                                id: "professional-athletes",
                                title: "Professional Athletes",
                                titleSuffix: "Management Company in Delhi",
                                slug: "professional-athlete",
                            },
                            {
                                id: "olympic-athletes",
                                title: "Olympic Athletes",
                                titleSuffix: "Management Company in Delhi",
                                slug: "olympic-athlete",
                            },
                        ]
                    },
                    {
                        id: "fashion-icons",
                        title: "Fashion Icons",
                        titleSuffix: "Management Company in Delhi",
                        slug: "fashion-icon",
                        children: [
                            {
                                id: "fashion-models",
                                title: "Fashion Models",
                                titleSuffix: "Management Company in Delhi",
                                slug: "fashion-model",
                            },
                            {
                                id: "style-influencers",
                                title: "Style Influencers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "style-influencer",
                            },
                        ]
                    },
                    {
                        id: "authors-and-writers",
                        title: "Authors and Writers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "author-writer",
                        children: [
                            {
                                id: "nonfiction-writers",
                                title: "Nonfiction Writers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "nonfiction-writer",
                            }
                        ]
                    },
                    {
                        id: "directors-and-producers",
                        title: "Directors and Producers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "director-producer",
                        children: [
                            {
                                id: "producers",
                                title: "Producers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "producer",
                            }
                        ]
                    },
                    {
                        id: "reality-tv-stars",
                        title: "Reality TV Stars",
                        titleSuffix: "Management Company in Delhi",
                        slug: "reality-tv-star",
                        children: [
                            {
                                id: "contestants",
                                title: "Contestants",
                                titleSuffix: "Management Company in Delhi",
                                slug: "contestant",
                            },
                            {
                                id: "hosts",
                                title: "Hosts",
                                titleSuffix: "Management Company in Delhi",
                                slug: "host",
                            },
                        ]
                    },
                    {
                        id: "youTubers-content-creators",
                        title: "YouTubers or Content Creators",
                        titleSuffix: "Management Company in Delhi",
                        slug: "youtuber-content-creator",
                        children: [
                            {
                                id: "vloggers",
                                title: "Vloggers or Bloggers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "vlogger",
                                children: [
                                    {
                                        id: "fashion-bloggers",
                                        title: "Fashion Bloggers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fashion-blogger",
                                    },
                                    {
                                        id: "food-bloggers",
                                        title: "Food Bloggers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "food-blogger",
                                    },
                                    {
                                        id: "travel-bloggers",
                                        title: "Travel Bloggers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "travel-blogger",
                                    },
                                    {
                                        id: "health-and-wellness-bloggers",
                                        title: "Health and Wellness Bloggers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "health-well-blogger",
                                    },
                                ]
                            },
                            {
                                id: "content-creators",
                                title: "Content Creators",
                                titleSuffix: "Management Company in Delhi",
                                slug: "content-creator",
                            },
                        ]
                    },
                    {
                        id: "social-entrepreneurs",
                        title: "Social Entrepreneurs",
                        titleSuffix: "Management Company in Delhi",
                        slug: "social-entrepreneur",
                        children: [
                            {
                                id: "philanthropists",
                                title: "Philanthropists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "philanthropist",
                            },
                            {
                                id: "activists",
                                title: "Activists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "activist",
                            },
                        ]
                    },
                    {
                        id: "voiceover-artists",
                        title: "Voiceover Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "voiceover-artist",
                        children: [
                            {
                                id: "animated-film-voice-actors",
                                title: "Animated Film Voice Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "animated-voice-actor",
                            },
                            {
                                id: "video-game-voice-actors",
                                title: "Video Game Voice Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "video-game-voice-actor",
                            },
                            {
                                id: "commercial-voiceover-artists",
                                title: "Commercial Voiceover Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "commer-voiceover-artist",
                            },
                        ]
                    },
                    {
                        id: "photographers-and-visual-artists",
                        title: "Photographers and Visual Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "photographer-vis-artist",
                        children: [
                            {
                                id: "celebrity-photographers",
                                title: "Celebrity Photographers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "celebrity-photographer",
                            }
                        ]
                    },
                    {
                        id: "chefs-and-culinary-artists",
                        title: "Chefs and Culinary Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "chef-culinary-artist",
                        children: [
                            {
                                id: "celebrity-chefs",
                                title: "Celebrity Chefs",
                                titleSuffix: "Management Company in Delhi",
                                slug: "celebrity-chef",
                            },
                            {
                                id: "culinary-personalities",
                                title: "Culinary Personalities",
                                titleSuffix: "Management Company in Delhi",
                                slug: "culinary-personality",
                            },

                        ]
                    },
                    {
                        id: "spiritual-leaders-or-healers",
                        title: "Spiritual Leaders or Healers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "spirit-leader-healer",
                        children: [
                            {
                                id: "motivational-speakers",
                                title: "Motivational Speakers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "motivational-speaker",
                            },
                            {
                                id: "life-coaches",
                                title: "Life Coaches",
                                titleSuffix: "Management Company in Delhi",
                                slug: "life-coach",
                            },
                        ]
                    },
                    {
                        id: "fashion-designers-and-entrepreneurs",
                        title: "Fashion Designers and Entrepreneurs",
                        titleSuffix: "Management Company in Delhi",
                        slug: "fashion-designer-entrepreneur",
                        children: [
                            {
                                id: "fashion-entrepreneurs",
                                title: "Fashion Entrepreneurs",
                                titleSuffix: "Management Company in Delhi",
                                slug: "fashion-entrepreneur",
                            },
                            {
                                id: "beauty-and-lifestyle-brand-owners",
                                title: "Beauty and Lifestyle Brand Owners",
                                titleSuffix: "Management Company in Delhi",
                                slug: "beauty-lifestyle-owner",
                            },

                        ]
                    },
                    {
                        id: "podcasters",
                        title: "Podcasters",
                        titleSuffix: "Management Company in Delhi",
                        slug: "podcaster",
                        children: [
                            {
                                id: "niche-prodcasters",
                                title: "Niche Podcasters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "niche-podcaster",
                            },
                            {
                                id: "entertainment-podcasters",
                                title: "Entertainment Podcasters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "entertainment-podcaster",
                            },
                            {
                                id: "social-issues-podcasters",
                                title: "Social Issues Podcasters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "social-issues-podcaster",
                            },
                        ]
                    },
                    {
                        id: "twitch-streamers",
                        title: "Twitch Streamers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "twitch-streamer",
                        children: [
                            {
                                id: "gaming-streamers",
                                title: "Gaming Streamers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "gaming-streamer",
                            },
                            {
                                id: "creative-streamers",
                                title: "Creative Streamers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "creative-streamer",
                            },
                            {
                                id: "irl-streamers",
                                title: "IRL (In Real Life) Streamers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "irl-streamer",
                            },

                        ]
                    }
                ]
            },
            {
                id: "influencers",
                title: "Influencers",
                titleSuffix: "Management Company in Delhi",
                slug: "influencer",
                children: [
                    {
                        id: "social-media-influencers",
                        title: "Social Media Influencers",
                        titleSuffix: "Management Company in Delhi",
                        slug: "social-media-influencer",
                        children: [
                            {
                                id: "instagram-influencers",
                                title: "Instagram Influencers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "instagram-influencer",
                                children: [
                                    {
                                        id: "macro-influencers",
                                        title: "Macro Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "macro-influencer",
                                    },
                                    {
                                        id: "micro-influencers",
                                        title: "Micro-Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "micro-influencer",
                                    },
                                    {
                                        id: "nano-influencers",
                                        title: "Nano-Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "nano-influencer",
                                    },
                                    {
                                        id: "instagram-models",
                                        title: "Instagram Models",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "instagram-model",
                                    },
                                    {
                                        id: "instagram-business-influencers",
                                        title: "Instagram Business Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "insta-busi-influencer",
                                    },
                                ]
                            },
                            {
                                id: "youtube-influencers",
                                title: "YouTube Influencers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "youtube-influencer",
                                children: [
                                    {
                                        id: "beauty-and-makeup-influencers",
                                        title: "Beauty and Makeup Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "beauty-makeup-influencer",
                                    },
                                    {
                                        id: "gaming-influencers",
                                        title: "Gaming Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "gaming-influencer",
                                    },
                                    {
                                        id: "tech-influencers",
                                        title: "Tech Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "tech-influencer",
                                    },
                                    {
                                        id: "diy-and-craft-influencers",
                                        title: "DIY and Craft Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "diy-craft-influencer",
                                    },
                                    {
                                        id: "fitness-influencers",
                                        title: "Fitness Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "fitness-influencer",
                                    },
                                ]
                            },
                            {
                                id: "twitter-influencers",
                                title: "Twitter Influencers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "twitter-influencer",
                                children: [
                                    {
                                        id: "political-news-influencers",
                                        title: "Political and News Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "political-news-influencer",
                                    },
                                    {
                                        id: "celebrity-influencers",
                                        title: "Celebrity Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "celebrity-influencer",
                                    },
                                ]
                            },
                            {
                                id: "facebook-influencers",
                                title: "Facebook Influencers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "facebook-influencer",
                                children: [
                                    {
                                        id: "community-leaders",
                                        title: "Community Leaders",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "community-leader",
                                    },
                                    {
                                        id: "brand-ambassadors",
                                        title: "Brand Ambassadors",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "brand-ambassador",
                                    },
                                    {
                                        id: "live-streamers",
                                        title: "Live Streamers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "live-streamer",
                                    },
                                ]
                            },
                            {
                                id: "linkedin-influencers",
                                title: "LinkedIn Influencers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "linkedin-influencer",
                                children: [
                                    {
                                        id: "business-leaders-entrepreneurs",
                                        title: "Business Leaders and Entrepreneurs",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "business-lead-influencer",
                                    },
                                    {
                                        id: "industry-experts",
                                        title: "Industry Experts",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "industry-expert",
                                    },

                                ]
                            },
                            {
                                id: "clubhouse-influencers",
                                title: "Clubhouse Influencers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "clubhouse-influencer",
                                children: [
                                    {
                                        id: "thought-leaders",
                                        title: "Thought Leaders",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "thought-leader",
                                    }
                                ]
                            },
                            {
                                id: "virtual-influencers",
                                title: "Virtual Influencers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "virtual-influencer",
                                children: [
                                    {
                                        id: "digital-avatars",
                                        title: "Digital Avatars",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "digital-avatar",
                                    },
                                    {
                                        id: "ai-powered-influencers",
                                        title: "AI Powered Influencers",
                                        titleSuffix: "Management Company in Delhi",
                                        slug: "ai-influencer",
                                    },

                                ]
                            },
                        ]
                    }
                ]
            },
            {
                id: "voice-artists",
                title: "Voice Artists",
                titleSuffix: "Management Company in Delhi",
                slug: "voice-artist",
                children: [
                    {
                        id: "animation-voice-artists",
                        title: "Animation Voice Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "animation-voice-artist",
                        children: [
                            {
                                id: "character-voice-actors",
                                title: "Character Voice Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "character-voice-artist",
                            },
                            {
                                id: "creature-voice-actors",
                                title: "Creature Voice Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "creature-voice-actor",
                            },

                        ]
                    },
                    {
                        id: "voiceover-artists-commercial",
                        title: "Voiceover Artists (Commercials)",
                        titleSuffix: "Management Company in Delhi",
                        slug: "voiceover-artist-commerce",
                        children: [
                            {
                                id: "infomercial-voiceover-artists",
                                title: "Infomercial Voiceover Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "info-voiceover-artist",
                            },
                            {
                                id: "promo-voiceover-artists",
                                title: "Promo Voiceover Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "promo-voice-artist",
                            },

                        ]
                    },
                    {
                        id: "dubbing-localization-voice-artists",
                        title: "Dubbing and Localization Voice Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "dubbing-voice-artist",
                        children: [
                            {
                                id: "dubbing-actors",
                                title: "Dubbing Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "dubbing-actors",
                            },
                            {
                                id: "subtitling-and-narration-artists",
                                title: "Subtitling and Narration Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "subtitling-artist",
                            },
                            {
                                id: "foreign-language-dubbing-artists",
                                title: "Foreign Language Dubbing Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "foreign-language-artist",
                            },

                        ]
                    },
                    {
                        id: "audiobook-narrators",
                        title: "Audiobook Narrators",
                        titleSuffix: "Management Company in Delhi",
                        slug: "audiobook-narrator",
                        children: [
                            {
                                id: "narrators",
                                title: "Narrators",
                                titleSuffix: "Management Company in Delhi",
                                slug: "narrator",
                            },
                            {
                                id: "character-voices",
                                title: "Character Voices",
                                titleSuffix: "Management Company in Delhi",
                                slug: "character-voice",
                            },
                            {
                                id: "audio-drama-voice-actors",
                                title: "Audio Drama Voice Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "audio-drama-voice-actor",
                            },
                        ]
                    },
                    {
                        id: "documentary-educational-voice-artists",
                        title: "Documentary and Educational Voice Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "documentary-voice-artist",
                        children: [
                            {
                                id: "instructional-voiceover-artists",
                                title: "Instructional Voiceover Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "instru-voiceover-artist",
                            }
                        ]
                    },
                    {
                        id: "podcast-voice-artists",
                        title: "Podcast Voice Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "podcast-voice-artist",
                        children: [
                            {
                                id: "podcast-hosts",
                                title: "Podcast Hosts",
                                titleSuffix: "Management Company in Delhi",
                                slug: "podcast-host",
                            },
                            {
                                id: "narrative-podcasters",
                                title: "Narrative Podcasters",
                                titleSuffix: "Management Company in Delhi",
                                slug: "narrative-podcaster",
                            }
                        ]
                    },
                    {
                        id: "television-and-film-narrators",
                        title: "Television and Film Narrators",
                        titleSuffix: "Management Company in Delhi",
                        slug: "television-film-narrator",
                        children: [
                            {
                                id: "narrators-for-documentaries-series",
                                title: "Narrators for Documentaries or Series",
                                titleSuffix: "Management Company in Delhi",
                                slug: "narrator-for-series",
                            },
                            {
                                id: "tv-show-announcers",
                                title: "TV Show Announcers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "tv-show-announcer",
                            }
                        ]
                    },
                    {
                        id: "live-event-voice-artists",
                        title: "Live Event Voice Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "live-event-voice-artist",
                        children: [
                            {
                                id: "event-announcers",
                                title: "Event Announcers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "event-announcer",
                            },
                            {
                                id: "stage-announcers",
                                title: "Stage Announcers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "stage-announcer",
                            }
                        ]
                    },
                    {
                        id: "ivr-systems",
                        title: "Voice Artists for IVR (Interactive Voice Response) Systems",
                        titleSuffix: "Management Company in Delhi",
                        slug: "ivr-system",
                        children: [
                            {
                                id: "ivr-voice-artists",
                                title: "IVR Voice Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "ivr-voice-artist",
                            },
                        ]
                    },
                    {
                        id: "video-game-voice-artists",
                        title: "Video Game Voice Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "video-game-voice-artist",
                        children: [
                            {
                                id: "main-character-voice-actors",
                                title: "Main Character Voice Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "main-char-voice-actor",
                            },
                            {
                                id: "supporting-character-voice-actors",
                                title: "Supporting Character Voice Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "supporting-voice-actor",
                            },
                            {
                                id: "npc-voice-actors",
                                title: "Non-playable Character (NPC) Voice Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "npc-voice-actor",
                            },
                        ]
                    },
                    {
                        id: "impressionists-and-sound-alike-voice-artists",
                        title: "Impressionists and Sound-Alike Voice Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "impression-sound-artist",
                        children: [
                            {
                                id: "celebrity-impersonators",
                                title: "Celebrity Impersonators",
                                titleSuffix: "Management Company in Delhi",
                                slug: "celebrity-impersonator",
                            },
                            {
                                id: "sound-alike-artists",
                                title: "Sound-Alike Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "sound-alike-artist",
                            },
                        ]
                    },
                    {
                        id: "pa-voice-artists",
                        title: "Public Announcement (PA) Voice Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "pa-voice-artist",
                        children: [
                            {
                                id: "transportation-announcement-voices",
                                title: "Transportation Announcement Voices",
                                titleSuffix: "Management Company in Delhi",
                                slug: "transport-announce-voice",
                            },
                            {
                                id: "public-event-announcers",
                                title: "Public Event Announcers",
                                titleSuffix: "Management Company in Delhi",
                                slug: "public-event-announcer",
                            },
                        ]
                    },
                    {
                        id: "virtual-assistant-ai-voice-artists",
                        title: "Virtual Assistant and AI Voice Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "ai-voice-artist",
                        children: [
                            {
                                id: "ai-voice-actors",
                                title: "AI Voice Actors",
                                titleSuffix: "Management Company in Delhi",
                                slug: "ai-voice-actor",
                            },
                            {
                                id: "chatbot-voice-artists",
                                title: "Chatbot Voice Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "chatbot-voice-artist",
                            },
                        ]
                    },
                    {
                        id: "corporate-and-brand-voice-artists",
                        title: "Corporate and Brand Voice Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "corpo-brand-voice-artist",
                        children: [
                            {
                                id: "corporate-narrators",
                                title: "Corporate Narrators",
                                titleSuffix: "Management Company in Delhi",
                                slug: "corporate-narrator",
                            },
                            {
                                id: "brand-voice-artists",
                                title: "Brand Voice Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "brand-voice-artist",
                            },
                        ]
                    },
                    {
                        id: "sound-design-and-foley-artists",
                        title: "Sound Design and Foley Artists",
                        titleSuffix: "Management Company in Delhi",
                        slug: "sound-design-foley-artist",
                        children: [
                            {
                                id: "foley-artists",
                                title: "Foley Artists",
                                titleSuffix: "Management Company in Delhi",
                                slug: "foley-artist",
                            },
                        ]
                    },

                ]
            }
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