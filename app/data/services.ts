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
                            { id: "annual-general-meetings", title: "Annual General Meetings (AGMs)", slug: "agm", titleSuffix: "Management Company in Delhi" },
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
                            {
                                id: "board-retreats",
                                title: "Board Retreats",
                                slug: "brd-rets",
                                titleSuffix: "Management Company in Delhi"
                            },
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
                                title: "M&A (Merger and Acquisition) Board Meetings",
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
                                id: "project-kickoff-meetings",
                                title: "Project Kickoff Meetings",
                                slug: "pko-meet",
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
                            {
                                id: "investor-meetings",
                                title: "Investor Meetings",
                                slug: "inv-str-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
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
                            {
                                id: "contract-negotiation-meetings",
                                title: "Contract Negotiation Meetings",
                                slug: "ctr-neg-meet",
                                titleSuffix: "Management Company in Delhi"
                            },
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
                                id: "project-kickoff-meetings",
                                title: "Project Kickoff Meetings",
                                slug: "proj-kik-off-meet",
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
                                id: "leadership-development-workshops",
                                title: "Leadership Development Workshops",
                                slug: "ldr-shp-dev-wrks",
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
                            {
                                id: "change-management-workshops",
                                title: "Change Management Workshops",
                                slug: "chnge-man-wrks",
                                titleSuffix: "Management Company in Delhi",
                            },
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
                                id: "leadership-development-workshops",
                                title: "Leadership Development Workshops",
                                slug: "led-dev-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "team-collaboration-workshops",
                                title: "Team Collaboration Workshops",
                                slug: "tm-coll-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "time-management-workshops",
                                title: "Time Management Workshops",
                                slug: "tm-mngt-wrk",
                                titleSuffix: "Management Company in Delhi",
                            },
                            {
                                id: "conflict-resolution-workshops",
                                title: "Conflict Resolution Workshops",
                                slug: "cnf-res-wrk",
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
                                id: "virtual-press-conferences",
                                title: "Virtual Press Conferences",
                                slug: "vrt-prs-con",
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
                        children: []
                    },
                ]
            },
            // {
            //     id: "Networking Events",
            //     title: "Networking Events",
            //     slug: "net-evt",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         {
            //             id: "industry-networking-events",
            //             title: "Industry Networking Events",
            //             slug: "ind-net-evt",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "business-luncheons-or-dinners",
            //             title: "Business Luncheons or Dinners",
            //             slug: "bus-lun-din",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "professional-conferences-networking",
            //             title: "Professional Conferences Networking",
            //             slug: "pro-conf-evt",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "speed-networking",
            //             title: "Speed Networking",
            //             slug: "spd-net",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //     ]
            // },
            // {
            //     id: "Incentive Programs",
            //     title: "Incentive Programs",
            //     slug: "inc-pro",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         {
            //             id: "sales-incentive-trips",
            //             title: "Sales Incentive Trips",
            //             slug: "sal-inc-trp",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "recognition-dinners-or-galas",
            //             title: "Recognition Dinners or Galas",
            //             slug: "rec-din-gls",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "annual-awards-ceremonies",
            //             title: "Annual Awards Ceremonies",
            //             slug: "ann-awd-crt",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "client-appreciation-events",
            //             title: "Client Appreciation Events",
            //             slug: "cli-app-evt",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         }
            //     ]
            // },
            // {
            //     id: "Corporate Parties and Celebrations",
            //     title: "Corporate Parties and Celebrations",
            //     slug: "corp-prt-cel",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         {
            //             id: "holiday-parties",
            //             title: "Holiday Parties",
            //             slug: "hol-prt",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "company-anniversary-celebrations",
            //             title: "Company Anniversary Celebrations",
            //             slug: "cmp-ann-cele",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "milestone-celebrations",
            //             title: "Milestone Celebrations",
            //             slug: "mil-cele",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "themed-parties",
            //             title: "Themed Parties",
            //             slug: "thm-prt",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         }
            //     ]
            // },
            // {
            //     id: "Executive Retreats",
            //     title: "Executive Retreats",
            //     slug: "exe-ret",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         {
            //             id: "leadership-retreats",
            //             title: "Leadership Retreats",
            //             slug: "led-ret",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "board-retreats",
            //             title: "Board Retreats",
            //             slug: "brd-ret",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "team-strategy-retreats",
            //             title: "Team Strategy Retreats",
            //             slug: "tm-stra-ret",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "reflection-and-wellness-retreats",
            //             title: "Reflection and Wellness Retreats",
            //             slug: "ref-wel-ret",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         }
            //     ]
            // },
            // {
            //     id: "Webinars and Virtual Events",
            //     title: "Webinars and Virtual Events",
            //     slug: "web-vir-evt",
            //     titleSuffix: "Management Company in Delhi",
            //     children: [
            //         {
            //             id: "online-training-workshops",
            //             title: "Online Training Workshops",
            //             slug: "onl-trn-work",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "virtual-conferences",
            //             title: "Virtual Conferences",
            //             slug: "vir-conf",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         },
            //         {
            //             id: "product-webinars",
            //             title: "Product Webinars",
            //             slug: "prod-web",
            //             titleSuffix: "Management Company in Delhi",
            //             children: []
            //         }
            //     ]
            // },
        ]
    },


    // Artist Management
    {
        id: "artist",
        title: "Artist Management",
        titleSuffix: "Company in Delhi",
        slug: "art-evt",
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
                            { id: "electronic-djs", title: "Electronic/DJs:", slug: "ele-djs", titleSuffix: "Management Company in Delhi" },
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
                slug: "vis-art",
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
                            { id: "surrealist-artists", title: "Surrealist Artists", slug: "sur-pntrs", titleSuffix: "Management Company in Delhi" },
                            { id: "impressionists", title: "Impressionists", slug: "impre", titleSuffix: "Management Company in Delhi" },
                            { id: "portrait-painters", title: "Portrait Painters", slug: "port-pntrs", titleSuffix: "Management Company in Delhi" }
                        ]
                    },
                ],
            },


            //         {
            //             id: "sculptors",
            //             title: "Sculptors",
            //             slug: "sculptors",
            //             children: [
            //                 { id: "traditional-sculptors", title: "Traditional Sculptors", slug: "traditional-sculptors" },
            //                 { id: "contemporary-sculptors", title: "Contemporary Sculptors", slug: "contemporary-sculptors" },
            //                 { id: "installation-artists", title: "Installation Artists", slug: "installation-artists" },
            //                 { id: "conceptual-sculptors", title: "Conceptual Sculptors", slug: "conceptual-sculptors" }
            //             ]
            //         },
            //         {
            //             id: "photographers",
            //             title: "Photographers",
            //             slug: "photographers",
            //             children: [
            //                 { id: "fine-art-photographers", title: "Fine Art Photographers", slug: "fine-art-photographers" },
            //                 { id: "commercial-photographers", title: "Commercial Photographers", slug: "commercial-photographers" },
            //                 { id: "documentary-photographers", title: "Documentary Photographers", slug: "documentary-photographers" },
            //                 { id: "fashion-photographers", title: "Fashion Photographers", slug: "fashion-photographers" },
            //                 { id: "nature-landscape-photographers", title: "Nature and Landscape Photographers", slug: "nature-landscape-photographers" }
            //             ]
            //         },
            //         {
            //             id: "illustrators",
            //             title: "Illustrators",
            //             slug: "illustrators",
            //             children: [
            //                 { id: "book-illustrators", title: "Book Illustrators", slug: "book-illustrators" },
            //                 { id: "editorial-illustrators", title: "Editorial Illustrators", slug: "editorial-illustrators" },
            //                 { id: "graphic-designers", title: "Graphic Designers", slug: "graphic-designers" },
            //                 { id: "comic-artists", title: "Comic Artists", slug: "comic-artists" },
            //                 { id: "storyboard-artists", title: "Storyboard Artists", slug: "storyboard-artists" }
            //             ]
            //         },
            //         {
            //             id: "digital-artists",
            //             title: "Digital Artists",
            //             slug: "digital-artists",
            //             children: [
            //                 { id: "digital-painters", title: "Digital Painters", slug: "digital-painters" },
            //                 { id: "graphic-designers-digital", title: "Graphic Designers", slug: "graphic-designers-digital" },
            //                 { id: "3d-artists", title: "3D Artists", slug: "3d-artists" },
            //                 { id: "motion-graphics-artists", title: "Motion Graphics Artists", slug: "motion-graphics-artists" },
            //                 { id: "video-game-artists", title: "Video Game Artists", slug: "video-game-artists" }
            //             ]
            //         },
            //         {
            //             id: "printmakers",
            //             title: "Printmakers",
            //             slug: "printmakers",
            //             children: [
            //                 { id: "etchers-lithographers", title: "Etchers and Lithographers", slug: "etchers-lithographers" },
            //                 { id: "screen-printers", title: "Screen Printers", slug: "screen-printers" },
            //                 { id: "woodcut-linocut-artists", title: "Woodcut and Linocut Artists", slug: "woodcut-linocut-artists" },
            //                 { id: "monotype-artists", title: "Monotype Artists", slug: "monotype-artists" }
            //             ]
            //         },
            //         {
            //             id: "conceptual-artists",
            //             title: "Conceptual Artists",
            //             slug: "conceptual-artists",
            //             children: [
            //                 { id: "conceptual-painters", title: "Conceptual Painters", slug: "conceptual-painters" },
            //                 { id: "performance-installation-artists", title: "Performance and Installation Artists", slug: "performance-installation-artists" },
            //                 { id: "text-based-artists", title: "Text-Based Artists", slug: "text-based-artists" }
            //             ]
            //         },
            //         {
            //             id: "street-urban-artists",
            //             title: "Street and Urban Artists",
            //             slug: "street-urban-artists",
            //             children: [
            //                 { id: "graffiti-artists", title: "Graffiti Artists", slug: "graffiti-artists" },
            //                 { id: "muralists", title: "Muralists", slug: "muralists" },
            //                 { id: "street-installations", title: "Street Installations", slug: "street-installations" },
            //                 { id: "sticker-poster-artists", title: "Sticker and Poster Artists", slug: "sticker-poster-artists" }
            //             ]
            //         },
            //         {
            //             id: "textile-fabric-artists",
            //             title: "Textile and Fabric Artists",
            //             slug: "textile-fabric-artists",
            //             children: [
            //                 { id: "quilters", title: "Quilters", slug: "quilters" },
            //                 { id: "fashion-artists", title: "Fashion Artists", slug: "fashion-artists" },
            //                 { id: "weavers-fiber-artists", title: "Weavers and Fiber Artists", slug: "weavers-fiber-artists" },
            //                 { id: "textile-installations", title: "Textile Installations", slug: "textile-installations" }
            //             ]
            //         },
            //         {
            //             id: "glass-ceramic-artists",
            //             title: "Glass and Ceramic Artists",
            //             slug: "glass-ceramic-artists",
            //             children: [
            //                 { id: "glassblowers", title: "Glassblowers", slug: "glassblowers" },
            //                 { id: "ceramic-sculptors", title: "Ceramic Sculptors", slug: "ceramic-sculptors" },
            //                 { id: "mosaic-artists", title: "Mosaic Artists", slug: "mosaic-artists" }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "performing-artists",
            //     title: "Performing Artists",
            //     slug: "performing-artists",
            //     children: [
            //         {
            //             id: "actors",
            //             title: "Actors",
            //             slug: "actors",
            //             children: [
            //                 { id: "theatrical-actors", title: "Theatrical Actors", slug: "theatrical-actors" },
            //                 { id: "film-tv-actors", title: "Film and TV Actors", slug: "film-tv-actors" },
            //                 { id: "voice-actors", title: "Voice Actors", slug: "voice-actors" },
            //                 { id: "commercial-print-models", title: "Commercial and Commercial Print Models", slug: "commercial-print-models" }
            //             ]
            //         },
            //         {
            //             id: "musicians-singers",
            //             title: "Musicians and Singers",
            //             slug: "musicians-singers",
            //             children: [
            //                 { id: "solo-musicians", title: "Solo Musicians", slug: "solo-musicians" },
            //                 { id: "bands-ensembles", title: "Bands and Ensembles", slug: "bands-ensembles" },
            //                 { id: "opera-singers", title: "Opera Singers", slug: "opera-singers" },
            //                 { id: "theater-musicians", title: "Theater Musicians", slug: "theater-musicians" },
            //                 { id: "djs-electronic-musicians", title: "DJs and Electronic Musicians", slug: "djs-electronic-musicians" }
            //             ]
            //         },
            //         {
            //             id: "dancers",
            //             title: "Dancers",
            //             slug: "dancers",
            //             children: [
            //                 {
            //                     id: "ballet-dancers",
            //                     title: "Ballet Dancers",
            //                     slug: "ballet-dancers",
            //                     children: [
            //                         {
            //                             id: "classical-ballet-dancers",
            //                             title: "Classical Ballet Dancers",
            //                             slug: "classical-ballet-dancers",
            //                             children: [
            //                                 { id: "principals", title: "Principals", slug: "principals" },
            //                                 { id: "soloists", title: "Soloists", slug: "soloists" },
            //                                 { id: "corps-de-ballet", title: "Corps de Ballet:", slug: "corps-de-ballet" },
            //                                 { id: "coryphees", title: "Coryphées", slug: "coryphees" }
            //                             ]
            //                         },
            //                         {
            //                             id: "neoclassical-ballet-dancers",
            //                             title: "Neoclassical Ballet Dancers",
            //                             slug: "neoclassical-ballet-dancers",
            //                             children: [
            //                                 { id: "lead-dancers", title: "Lead Dancers", slug: "lead-dancers" },
            //                                 { id: "soloists-neoclassical", title: "Soloists", slug: "soloists-neoclassical" },
            //                                 { id: "corps-de-ballet-neoclassical", title: "Corps de Ballet", slug: "corps-de-ballet-neoclassical" }
            //                             ]
            //                         },
            //                         {
            //                             id: "contemporary-ballet-dancers",
            //                             title: "Contemporary Ballet Dancers",
            //                             slug: "contemporary-ballet-dancers",
            //                             children: [
            //                                 { id: "lead-contemporary-dancers", title: "Lead Contemporary Dancers", slug: "lead-contemporary-dancers" },
            //                                 { id: "soloists-contemporary", title: "Soloists", slug: "soloists-contemporary" },
            //                                 { id: "corps-de-ballet-contemporary", title: "Corps de Ballet", slug: "corps-de-ballet-contemporary" }
            //                             ]
            //                         },
            //                         {
            //                             id: "character-dancers",
            //                             title: "Character Dancers",
            //                             slug: "character-dancers",
            //                             children: [
            //                                 { id: "male-character-dancer", title: "Male Character Dancer", slug: "male-character-dancer" },
            //                                 { id: "female-character-dancer", title: "Female Character Dancer", slug: "female-character-dancer" }
            //                             ]
            //                         },
            //                         {
            //                             id: "male-ballet-dancers",
            //                             title: "Male Ballet Dancers",
            //                             slug: "male-ballet-dancers",
            //                             children: [
            //                                 { id: "principal-dancer", title: "Principal Dancer", slug: "principal-dancer" },
            //                                 { id: "soloist-male", title: "Soloist", slug: "soloist-male" },
            //                                 { id: "corps-de-ballet-male", title: "Corps de Ballet", slug: "corps-de-ballet-male" },
            //                                 { id: "pas-de-deux-partner", title: "Pas de Deux Partner", slug: "pas-de-deux-partner" }
            //                             ]
            //                         },
            //                         {
            //                             id: "female-ballet-dancers",
            //                             title: "Female Ballet Dancers",
            //                             slug: "female-ballet-dancers",
            //                             children: [
            //                                 { id: "prima-ballerina", title: "Prima Ballerina", slug: "prima-ballerina" },
            //                                 { id: "soloist-female", title: "Soloist", slug: "soloist-female" },
            //                                 { id: "corps-de-ballet-female", title: "Corps de Ballet", slug: "corps-de-ballet-female" },
            //                                 { id: "first-soloist", title: "First Soloist", slug: "first-soloist" }
            //                             ]
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     id: "contemporary-dancers",
            //                     title: "Contemporary Dancers",
            //                     slug: "contemporary-dancers",
            //                     children: [
            //                         {
            //                             id: "modern-dance",
            //                             title: "Modern Dance",
            //                             slug: "modern-dance",
            //                             children: [
            //                                 { id: "graham-technique", title: "Graham Technique", slug: "graham-technique" },
            //                                 { id: "cunningham-technique", title: "Cunningham Technique", slug: "cunningham-technique" },
            //                                 { id: "limon-technique", title: "Limon Technique", slug: "limon-technique" },
            //                                 { id: "horton-technique", title: "Horton Technique", slug: "horton-technique" }
            //                             ]
            //                         },
            //                         {
            //                             id: "improvisation",
            //                             title: "Improvisation",
            //                             slug: "improvisation",
            //                             children: [
            //                                 { id: "contact-improvisation", title: "Contact Improvisation", slug: "contact-improvisation" },
            //                                 { id: "structured-improvisation", title: "Structured Improvisation", slug: "structured-improvisation" },
            //                                 { id: "free-improvisation", title: "Free Improvisation", slug: "free-improvisation" }
            //                             ]
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     id: "hip-hop-dancers",
            //                     title: "Hip-Hop Dancers",
            //                     slug: "hip-hop-dancers",
            //                     children: [
            //                         {
            //                             id: "breaking",
            //                             title: "Breaking (B-boying/B-girling)",
            //                             slug: "breaking",
            //                             children: [
            //                                 { id: "toprock", title: "Toprock", slug: "toprock" },
            //                                 { id: "downrock", title: "Downrock", slug: "downrock" },
            //                                 { id: "power-moves", title: "Power Moves", slug: "power-moves" },
            //                                 { id: "freeze", title: "Freeze", slug: "freeze" },
            //                                 { id: "footwork", title: "Footwork", slug: "footwork" }
            //                             ]
            //                         },
            //                         {
            //                             id: "popping",
            //                             title: "Popping",
            //                             slug: "popping",
            //                             children: [
            //                                 { id: "classic-popping", title: "Classic Popping", slug: "classic-popping" },
            //                                 { id: "robot", title: "Robot", slug: "robot" },
            //                                 { id: "waving", title: "Waving", slug: "waving" },
            //                                 { id: "tutting", title: "Tutting", slug: "tutting" },
            //                                 { id: "animation", title: "Animation", slug: "animation" }
            //                             ]
            //                         },
            //                         {
            //                             id: "locking",
            //                             title: "Locking",
            //                             slug: "locking",
            //                             children: [
            //                                 { id: "lock", title: "Lock", slug: "lock" },
            //                                 { id: "points", title: "Points", slug: "points" },
            //                                 { id: "dips-leans", title: "Dips and Leans", slug: "dips-leans" },
            //                                 { id: "popping-locking", title: "Popping and Locking", slug: "popping-locking" }
            //                             ]
            //                         },
            //                         {
            //                             id: "krumping",
            //                             title: "Krumping",
            //                             slug: "krumping",
            //                             children: [
            //                                 { id: "chest-pop", title: "Chest Pop", slug: "chest-pop" },
            //                                 { id: "stomping", title: "Stomping", slug: "stomping" },
            //                                 { id: "arm-swings", title: "Arm Swings", slug: "arm-swings" },
            //                                 { id: "jabs-pokes", title: "Jabs and Pokes", slug: "jabs-pokes" }
            //                             ]
            //                         },
            //                         {
            //                             id: "house-dance",
            //                             title: "House Dance",
            //                             slug: "house-dance",
            //                             children: [
            //                                 { id: "footwork-house", title: "Footwork", slug: "footwork-house" },
            //                                 { id: "jacking", title: "Jacking", slug: "jacking" },
            //                                 { id: "lofting", title: "Lofting", slug: "lofting" },
            //                                 { id: "floor-rocking", title: "Floor Rocking", slug: "floor-rocking" }
            //                             ]
            //                         },
            //                         {
            //                             id: "waacking",
            //                             title: "Waacking",
            //                             slug: "waacking",
            //                             children: [
            //                                 { id: "arm-poses", title: "Arm Poses", slug: "arm-poses" },
            //                                 { id: "spins-turns", title: "Spins and Turns", slug: "spins-turns" },
            //                                 { id: "shading", title: "Shading", slug: "shading" },
            //                                 { id: "popping-waacking", title: "Popping Waacking", slug: "popping-waacking" }
            //                             ]
            //                         },
            //                         {
            //                             id: "hip-hop-choreography",
            //                             title: "Hip-Hop Choreography",
            //                             slug: "hip-hop-choreography",
            //                             children: [
            //                                 { id: "commercial-hip-hop", title: "Commercial Hip-Hop", slug: "commercial-hip-hop" },
            //                                 { id: "street-dance-choreography", title: "Street Dance Choreography", slug: "street-dance-choreography" },
            //                                 { id: "jazz-funk", title: "Jazz-Funk", slug: "jazz-funk" },
            //                                 { id: "popping-locking-choreography", title: "Popping and Locking Choreography", slug: "popping-locking-choreography" }
            //                             ]
            //                         },
            //                         {
            //                             id: "memphis-jookin",
            //                             title: "Memphis Jookin’",
            //                             slug: "memphis-jookin",
            //                             children: [
            //                                 { id: "jookin-walk", title: "Jookin' Walk", slug: "jookin-walk" },
            //                                 { id: "pop-lock", title: "Pop and Lock", slug: "pop-lock" },
            //                                 { id: "wave-walking", title: "Wave Walking", slug: "wave-walking" }
            //                             ]
            //                         },
            //                         {
            //                             id: "turfing",
            //                             title: "Turfing",
            //                             slug: "turfing",
            //                             children: [
            //                                 { id: "stomp", title: "Stomp", slug: "stomp" },
            //                                 { id: "floating", title: "Floating", slug: "floating" },
            //                                 { id: "turfing-poses", title: "Turfing Poses", slug: "turfing-poses" }
            //                             ]
            //                         },
            //                         {
            //                             id: "dancehall",
            //                             title: "Dancehall",
            //                             slug: "dancehall",
            //                             children: [
            //                                 { id: "wine", title: "Wine", slug: "wine" },
            //                                 { id: "bogle", title: "Bogle", slug: "bogle" },
            //                                 { id: "dutty-wine", title: "Dutty Wine", slug: "dutty-wine" },
            //                                 { id: "skank", title: "Skank", slug: "skank" }
            //                             ]
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     id: "latin-ballroom-dancers",
            //                     title: "Latin and Ballroom Dancers",
            //                     slug: "latin-ballroom-dancers",
            //                     children: [
            //                         {
            //                             id: "latin-dancers",
            //                             title: "Latin Dancers",
            //                             slug: "latin-dancers",
            //                             children: [
            //                                 { id: "salsa", title: "Salsa", slug: "salsa" },
            //                                 { id: "cha-cha", title: "Cha-Cha", slug: "cha-cha" },
            //                                 { id: "rumba", title: "Rumba", slug: "rumba" },
            //                                 { id: "samba", title: "Samba", slug: "samba" },
            //                                 { id: "paso-doble", title: "Paso Doble", slug: "paso-doble" },
            //                                 { id: "jive", title: "Jive", slug: "jive" },
            //                                 { id: "bachata", title: "Bachata", slug: "bachata" },
            //                                 { id: "merengue", title: "Merengue", slug: "merengue" }
            //                             ]
            //                         },
            //                         {
            //                             id: "ballroom-dancers",
            //                             title: "Ballroom Dancers",
            //                             slug: "ballroom-dancers",
            //                             children: [
            //                                 { id: "waltz", title: "Waltz", slug: "waltz" },
            //                                 { id: "tango", title: "Tango", slug: "tango" },
            //                                 { id: "foxtrot", title: "Foxtrot", slug: "foxtrot" },
            //                                 { id: "quickstep", title: "Quickstep", slug: "quickstep" },
            //                                 { id: "viennese-waltz", title: "Viennese Waltz", slug: "viennese-waltz" },
            //                                 { id: "modern-waltz", title: "Modern Waltz", slug: "modern-waltz" }
            //                             ]
            //                         },
            //                         {
            //                             id: "social-latin-ballroom",
            //                             title: "Social and Other Latin and Ballroom Dances",
            //                             slug: "social-latin-ballroom",
            //                             children: [
            //                                 { id: "swing-dance", title: "Swing Dance", slug: "swing-dance" },
            //                                 { id: "country-western", title: "Country and Western", slug: "country-western" },
            //                                 { id: "lindy-hop", title: "Lindy Hop", slug: "lindy-hop" },
            //                                 { id: "west-coast-swing", title: "West Coast Swing", slug: "west-coast-swing" }
            //                             ]
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     id: "folk-traditional-dancers",
            //                     title: "Folk and Traditional Dancers",
            //                     slug: "folk-traditional-dancers",
            //                     children: [
            //                         {
            //                             id: "indian-folk-traditional-dancers",
            //                             title: "Indian Folk and Traditional Dancers",
            //                             slug: "indian-folk-traditional-dancers",
            //                             children: [
            //                                 { id: "kuchipudi-andhra-pradesh", title: "Kuchipudi (Andhra Pradesh)", slug: "kuchipudi-andhra-pradesh" },
            //                                 { id: "butta-bommalu-andhra-pradesh", title: "Butta Bommalu (Andhra Pradesh)", slug: "butta-bommalu-andhra-pradesh" },
            //                                 { id: "lambadi-dance-andhra-pradesh", title: "Lambadi Dance (Andhra Pradesh)", slug: "lambadi-banjara-dance-andhra-pradesh" },
            //                                 { id: "dappu-dance-andhra-pradesh", title: "Dappu Dance (Andhra Pradesh)", slug: "dappu-dance-andhra-pradesh" },
            //                                 { id: "kolattam-andhra-pradesh", title: "Kolattam (Andhra Pradesh)", slug: "kolattam-andhra-pradesh" },
            //                                 { id: "veeragase-andhra-pradesh", title: "Veeragase (Andhra Pradesh)", slug: "veeragase-andhra-pradesh" },
            //                                 { id: "chindu-yakshaganam-andhra-pradesh", title: "Chindu Yakshaganam (Andhra Pradesh)", slug: "chindu-yakshaganam-andhra-pradesh" },
            //                                 { id: "burrakatha-andhra-pradesh", title: "Burrakatha (Andhra Pradesh)", slug: "burrakatha-andhra-pradesh" },
            //                                 { id: "nautanki-andhra-pradesh", title: "Nautanki (Andhra Pradesh)", slug: "nautanki-andhra-pradesh" },
            //                                 { id: "tappeta-gullu-andhra-pradesh", title: "Tappeta Gullu (Andhra Pradesh)", slug: "tappeta-gullu-andhra-pradesh" },
            //                                 { id: "jangam-andhra-pradesh", title: "Jangam (Andhra Pradesh)", slug: "jangam-andhra-pradesh" },
            //                                 { id: "koya-dance-andhra-pradesh", title: "Koya Dance (Andhra Pradesh)", slug: "koya-dance-andhra-pradesh" },
            //                                 { id: "rama-krishna-dance-andhra-pradesh", title: "Rama Krishna Dance (Andhra Pradesh)", slug: "rama-krishna-dance-andhra-pradesh" },
            //                                 { id: "oggu-katha-andhra-pradesh", title: "Oggu Katha (Andhra Pradesh)", slug: "oggu-katha-andhra-pradesh" },
            //                                 { id: "sankranti-dance-andhra-pradesh", title: "Sankranti Dance (Andhra Pradesh)", slug: "sankranti-dance-andhra-pradesh" },
            //                                 { id: "siddi-dance-andhra-pradesh", title: "Siddi Dance (Andhra Pradesh)", slug: "siddi-dance-andhra-pradesh" },
            //                                 { id: "kuchipudi-natya-andhra-pradesh", title: "Kuchipudi Natya (Andhra Pradesh)", slug: "kuchipudi-natya-andhra-pradesh" },
            //                                 { id: "gangireddulu-dance-andhra-pradesh", title: "Gangireddulu Dance (Andhra Pradesh)", slug: "gangireddulu-dance-andhra-pradesh" },

            //                                 { id: "buiya-arunachal-pradesh", title: "Buiya (Arunachal Pradesh)", slug: "buiya-arunachal-pradesh" },
            //                                 { id: "ponung-arunachal-pradesh", title: "Ponung (Arunachal Pradesh)", slug: "ponung-arunachal-pradesh" },
            //                                 { id: "bari-dance-arunachal-pradesh", title: "Bari Dance (Arunachal Pradesh)", slug: "bari-dance-arunachal-pradesh" },
            //                                 { id: "aji-lamu-dance-arunachal-pradesh", title: "Aji Lamu Dance (Arunachal Pradesh)", slug: "aji-lamu-dance-arunachal-pradesh" },
            //                                 { id: "lion-dance-arunachal-pradesh", title: "Lion Dance (Arunachal Pradesh)", slug: "lion-dance-arunachal-pradesh" },
            //                                 { id: "ngandam-dance-arunachal-pradesh", title: "Ngandam Dance (Arunachal Pradesh)", slug: "ngandam-dance-arunachal-pradesh" },
            //                                 { id: "mishing-bihu-dance-arunachal-pradesh", title: "Mishing Bihu Dance (Arunachal Pradesh)", slug: "mishing-bihu-dance-arunachal-pradesh" },
            //                                 { id: "popir-dance-arunachal-pradesh", title: "Popir Dance (Arunachal Pradesh)", slug: "popir-dance-arunachal-pradesh" },
            //                                 { id: "dree-dance-arunachal-pradesh", title: "Dree Dance (Arunachal Pradesh)", slug: "dree-dance-arunachal-pradesh" },
            //                                 { id: "idu-mishmi-dance-arunachal-pradesh", title: "Idu Mishmi Dance (Arunachal Pradesh)", slug: "idu-mishmi-dance-arunachal-pradesh" },
            //                                 { id: "wangla-dance-arunachal-pradesh", title: "Wangla Dance (Arunachal Pradesh)", slug: "wangla-dance-arunachal-pradesh" },
            //                                 { id: "buddhist-monpa-dance-arunachal-pradesh", title: "Buddhist Monpa Dance (Arunachal Pradesh)", slug: "buddhist-monpa-dance-arunachal-pradesh" },
            //                                 { id: "fagli-dance-arunachal-pradesh", title: "Fagli Dance (Arunachal Pradesh)", slug: "fagli-dance-arunachal-pradesh" },
            //                                 { id: "mibu-dance-arunachal-pradesh", title: "Mibu Dance (Arunachal Pradesh)", slug: "mibu-dance-arunachal-pradesh" },
            //                                 { id: "galo-dance-arunachal-pradesh", title: "Galo Dance (Arunachal Pradesh)", slug: "galo-dance-arunachal-pradesh" },
            //                                 { id: "hojagiri-dance-arunachal-pradesh", title: "Hojagiri Dance (Arunachal Pradesh)", slug: "hojagiri-dance-arunachal-pradesh" },
            //                                 { id: "rang-ghar-dance-arunachal-pradesh", title: "Rang Ghar Dance (Arunachal Pradesh)", slug: "rang-ghar-dance-arunachal-pradesh" },
            //                                 { id: "dumang-dance-arunachal-pradesh", title: "Dumang Dance (Arunachal Pradesh)", slug: "dumang-dance-arunachal-pradesh" },
            //                                 { id: "tamang-dance-arunachal-pradesh", title: "Tamang Dance (Arunachal Pradesh)", slug: "tamang-dance-arunachal-pradesh" },
            //                                 { id: "buddhist-chhewar-dance-arunachal-pradesh", title: "Buddhist Chhewar Dance (Arunachal Pradesh)", slug: "buddhist-chhewar-dance-arunachal-pradesh" },
            //                                 { id: "konyak-dance-arunachal-pradesh", title: "Konyak Dance (Arunachal Pradesh)", slug: "konyak-dance-arunachal-pradesh" },
            //                                 { id: "pasi-dance-arunachal-pradesh", title: "Pasi Dance (Arunachal Pradesh)", slug: "pasi-dance-arunachal-pradesh" },
            //                                 { id: "changlang-dance-arunachal-pradesh", title: "Changlang Dance (Arunachal Pradesh)", slug: "changlang-dance-arunachal-pradesh" },

            //                                 { id: "sattriya-assam", title: "Sattriya (Assam)", slug: "sattriya-assam" },
            //                                 { id: "jhumur-assam", title: "Jhumur (Assam)", slug: "jhumur-assam" },
            //                                 { id: "bihu-assam", title: "Bihu (Assam)", slug: "bihu-assam" },
            //                                 { id: "bagurumba-assam", title: "Bagurumba (Assam)", slug: "bagurumba-assam" },
            //                                 { id: "ali-ai-ligang-dance-assam", title: "Ali Ai Ligang Dance (Assam)", slug: "ali-ai-ligang-dance-assam" },
            //                                 { id: "deodhani-dance-assam", title: "Deodhani Dance (Assam)", slug: "deodhani-dance-assam" },
            //                                 { id: "bhortal-dance-assam", title: "Bhortal Dance (Assam)", slug: "bhortal-dance-assam" },
            //                                 { id: "ojapali-dance-assam", title: "Ojapali Dance (Assam)", slug: "ojapali-dance-assam" },
            //                                 { id: "tiwa-dance-assam", title: "Tiwa Dance (Assam)", slug: "tiwa-dance-assam" },
            //                                 { id: "rabha-dance-assam", title: "Rabha Dance (Assam)", slug: "rabha-dance-assam" },
            //                                 { id: "ka-shad-mastieh-dance-assam", title: "Ka Shad Mastieh Dance (Assam)", slug: "ka-shad-mastieh-dance-assam" },
            //                                 { id: "kushan-dance-assam", title: "Kushan Dance (Assam)", slug: "kushan-dance-assam" },
            //                                 { id: "dhol-cholom-assam", title: "Dhol Cholom (Assam)", slug: "dhol-cholom-assam" },
            //                                 { id: "mishing-bihu-dance-assam", title: "Mishing Bihu Dance (Assam)", slug: "mishing-bihu-dance-assam" },

            //                                 { id: "bidesia-bihar", title: "Bidesia (Bihar)", slug: "bidesia-bihar" },
            //                                 { id: "jhijhiya-bihar", title: "Jhijhiya (Bihar)", slug: "jhijhiya-bihar" },
            //                                 { id: "fagua-bihar", title: "Fagua (Bihar)", slug: "fagua-bihar" },
            //                                 { id: "biharian-jat-jatin-bihar", title: "Biharian Jat-Jatin (Bihar)", slug: "jat-jatin-dance-bihar" },
            //                                 { id: "lori-bihar", title: "Lori (Bihar)", slug: "lori-dance-bihar" },
            //                                 { id: "chhau-bihar", title: "Chhau Dance (Bihar)", slug: "chhau-dance-bihar" },
            //                                 { id: "jhumar-bihar", title: "Jhumar (Bihar)", slug: "jhumar-dance-bihar" },
            //                                 { id: "kachaudi-dance-bihar", title: "Kachaudi Dance (Bihar)", slug: "kachaudi-dance-bihar" },
            //                                 { id: "satnami-bihar", title: "Satnami (Bihar)", slug: "satnami-dance-bihar" },
            //                                 { id: "panchhi-dance-bihar", title: "Panchhi Dance (Bihar)", slug: "panchhi-dance-bihar" },
            //                                 { id: "nautanki-bihar", title: "Nautanki (Bihar)", slug: "nautanki-bihar" },
            //                                 { id: "dhamal-bihar", title: "Dhamal (Bihar)", slug: "dhamal-dance-bihar" },
            //                                 { id: "sama-chakeva-bihar", title: "Sama Chakeva (Bihar)", slug: "sama-chakeva-bihar" },
            //                                 { id: "madhubani-dance-bihar", title: "Madhubani Dance (Bihar)", slug: "madhubani-dance-bihar" },
            //                                 { id: "sohar-dance-bihar", title: "Sohar Dance (Bihar)", slug: "sohar-dance-bihar" },

            //                                 { id: "raut-nacha-chhattisgarh", title: "Raut Nacha (Chhattisgarh)", slug: "raut-nacha-chhattisgarh" },
            //                                 { id: "pandavani-chhattisgarh", title: "Pandavani (Chhattisgarh)", slug: "pandavani-chhattisgarh" },
            //                                 { id: "panthi-dance-chhattisgarh", title: "Panthi Dance (Chhattisgarh)", slug: "panthi-dance-chhattisgarh" },
            //                                 { id: "karma-dance-chhattisgarh", title: "Karma Dance (Chhattisgarh)", slug: "karma-dance-chhattisgarh" },
            //                                 { id: "sua-nacha-chhattisgarh", title: "Sua Nacha (Chhattisgarh)", slug: "sua-nacha-chhattisgarh" },
            //                                 { id: "gendi-dance-chhattisgarh", title: "Gendi Dance (Chhattisgarh)", slug: "gendi-dance-chhattisgarh" },
            //                                 { id: "danda-nacha-chhattisgarh", title: "Danda Nacha (Chhattisgarh)", slug: "danda-nacha-chhattisgarh" },
            //                                 { id: "bastar-bison-horn-dance-chhattisgarh", title: "Bastar Bison Horn Dance (Chhattisgarh)", slug: "bastar-bison-horn-dance-chhattisgarh" },
            //                                 { id: "mandari-dance-chhattisgarh", title: "Mandari Dance (Chhattisgarh)", slug: "mandari-dance-chhattisgarh" },
            //                                 { id: "gaur-maria-dance-chhattisgarh", title: "Gaur Maria Dance (Chhattisgarh)", slug: "gaur-maria-dance-chhattisgarh" },

            //                                 { id: "dekhni-goa", title: "Dekhni (Goa)", slug: "dekhni-goa" },
            //                                 { id: "fugdi-goa", title: "Fugdi (Goa)", slug: "fugdi-goa" },
            //                                 { id: "dhalo-goa", title: "Dhalo (Goa)", slug: "dhalo-goa" },
            //                                 { id: "corridinho-goa", title: "Corridinho (Goa)", slug: "corridinho-goa" },
            //                                 { id: "ghode-modni-goa", title: "Ghode Modni (Goa)", slug: "ghode-modni-goa" },
            //                                 { id: "lamp-dance-goa", title: "Lamp Dance (Goa)", slug: "lamp-dance-goa" },
            //                                 { id: "kunbi-dance-goa", title: "Kunbi Dance (Goa)", slug: "kunbi-dance-goa" },
            //                                 { id: "zagor-goa", title: "Zagor (Goa)", slug: "zagor-goa" },
            //                                 { id: "mando-dance-goa", title: "Mando Dance (Goa)", slug: "mando-dance-goa" },
            //                                 { id: "romat-dance-goa", title: "Romat Dance (Goa)", slug: "romat-dance-goa" },

            //                                 { id: "garba-gujarat", title: "Garba (Gujarat)", slug: "garba-gujarat" },
            //                                 { id: "dandiya-raas-gujarat", title: "Dandiya Raas (Gujarat)", slug: "dandiya-raas-gujarat" },
            //                                 { id: "tanzara-gujarat", title: "Tanzara (Gujarat)", slug: "tanzara-gujarat" },
            //                                 { id: "tippani-dance-gujarat", title: "Tippani Dance (Gujarat)", slug: "tippani-dance-gujarat" },
            //                                 { id: "bhavai-gujarat", title: "Bhavai (Gujarat)", slug: "bhavai-gujarat" },
            //                                 { id: "hudo-dance-gujarat", title: "Hudo Dance (Gujarat)", slug: "hudo-dance-gujarat" },
            //                                 { id: "padhar-dance-gujarat", title: "Padhar Dance (Gujarat)", slug: "padhar-dance-gujarat" },
            //                                 { id: "dangi-dance-gujarat", title: "Dangi Dance (Gujarat)", slug: "dangi-dance-gujarat" },
            //                                 { id: "sidi-dhamal-gujarat", title: "Sidi Dhamal (Gujarat)", slug: "sidi-dhamal-gujarat" },
            //                                 { id: "mer-ras-gujarat", title: "Mer Ras (Gujarat)", slug: "mer-ras-gujarat" },
            //                                 { id: "matukadi-dance-gujarat", title: "Matukadi Dance (Gujarat)", slug: "matukadi-dance-gujarat" },
            //                                 { id: "dhamal-haryana", title: "Dhamal (Haryana)", slug: "dhamal-haryana" },
            //                                 { id: "ghoomar-haryana", title: "Ghoomar (Haryana)", slug: "ghoomar-haryana" },
            //                                 { id: "khoria-dance-haryana", title: "Khoria Dance (Haryana)", slug: "khoria-dance-haryana" },
            //                                 { id: "daph-dance-haryana", title: "Daph Dance (Haryana)", slug: "daph-dance-haryana" },
            //                                 { id: "loor-haryana", title: "Loor (Haryana)", slug: "loor-haryana" },
            //                                 { id: "gugga-dance-haryana", title: "Gugga Dance (Haryana)", slug: "gugga-dance-haryana" },
            //                                 { id: "jhumar-haryana", title: "Jhumar (Haryana)", slug: "jhumar-haryana" },
            //                                 { id: "ras-leela-haryana", title: "Ras Leela (Haryana)", slug: "ras-leela-haryana" },
            //                                 { id: "saang-haryana", title: "Saang (Haryana)", slug: "saang-haryana" },
            //                                 { id: "teej-dance-haryana", title: "Teej Dance (Haryana)", slug: "teej-dance-haryana" },
            //                                 { id: "chhathi-dance-haryana", title: "Chhathi Dance (Haryana)", slug: "chhathi-dance-haryana" },
            //                                 { id: "phag-dance-haryana", title: "Phag Dance (Haryana)", slug: "phag-dance-haryana" },

            //                                 { id: "nati-himachal-pradesh", title: "Nati (Himachal Pradesh)", slug: "nati-himachal-pradesh" },
            //                                 { id: "kullu-nati-himachal-pradesh", title: "Kullu Nati (Himachal Pradesh)", slug: "kullu-nati-himachal-pradesh" },
            //                                 { id: "shan-himachal-pradesh", title: "Shan (Himachal Pradesh)", slug: "shan-himachal-pradesh" },
            //                                 { id: "dangi-himachal-pradesh", title: "Dangi (Himachal Pradesh)", slug: "dangi-himachal-pradesh" },
            //                                 { id: "chhambha-himachal-pradesh", title: "Chhambha (Himachal Pradesh)", slug: "chhambha-himachal-pradesh" },
            //                                 { id: "lahauli-dance-himachal-pradesh", title: "Lahauli Dance (Himachal Pradesh)", slug: "lahauli-dance-himachal-pradesh" },
            //                                 { id: "jhoori-himachal-pradesh", title: "Jhoori (Himachal Pradesh)", slug: "jhoori-himachal-pradesh" },
            //                                 { id: "rasa-dance-himachal-pradesh", title: "Rasa Dance (Himachal Pradesh)", slug: "rasa-dance-himachal-pradesh" },
            //                                 { id: "gee-dance-himachal-pradesh", title: "Gee Dance (Himachal Pradesh)", slug: "gee-dance-himachal-pradesh" },
            //                                 { id: "kharait-himachal-pradesh", title: "Kharait (Himachal Pradesh)", slug: "kharait-himachal-pradesh" },
            //                                 { id: "bakayang-himachal-pradesh", title: "Bakayang (Himachal Pradesh)", slug: "bakayang-himachal-pradesh" },
            //                                 { id: "dandras-himachal-pradesh", title: "Dandras (Himachal Pradesh)", slug: "dandras-himachal-pradesh" },
            //                                 { id: "dhurang-himachal-pradesh", title: "Dhurang (Himachal Pradesh)", slug: "dhurang-himachal-pradesh" },
            //                                 { id: "droh-himachal-pradesh", title: "Droh (Himachal Pradesh)", slug: "droh-himachal-pradesh" },
            //                                 { id: "bissu-himachal-pradesh", title: "Bissu (Himachal Pradesh)", slug: "bissu-himachal-pradesh" },

            //                                 { id: "chhau-jharkhand", title: "Chhau (Jharkhand)", slug: "chhau-jharkhand" },
            //                                 { id: "sohrai-jharkhand", title: "Sohrai (Jharkhand)", slug: "sohrai-jharkhand" },
            //                                 { id: "paitkar-jharkhand", title: "Paitkar (Jharkhand)", slug: "paitkar-jharkhand" },
            //                                 { id: "jhumar-jharkhand", title: "Jhumar (Jharkhand)", slug: "jhumar-jharkhand" },
            //                                 { id: "fagua-dance-jharkhand", title: "Fagua Dance (Jharkhand)", slug: "fagua-dance-jharkhand" },
            //                                 { id: "domkach-jharkhand", title: "Domkach (Jharkhand)", slug: "domkach-jharkhand" },
            //                                 { id: "mundari-dance-jharkhand", title: "Mundari Dance (Jharkhand)", slug: "mundari-dance-jharkhand" },
            //                                 { id: "santhali-dance-jharkhand", title: "Santhali Dance (Jharkhand)", slug: "santhali-dance-jharkhand" },
            //                                 { id: "karma-dance-jharkhand", title: "Karma Dance (Jharkhand)", slug: "karma-dance-jharkhand" },
            //                                 { id: "sarhul-dance-jharkhand", title: "Sarhul Dance (Jharkhand)", slug: "sarhul-dance-jharkhand" },
            //                                 { id: "nachni-dance-jharkhand", title: "Nachni Dance (Jharkhand)", slug: "nachni-dance-jharkhand" },
            //                                 { id: "barao-dance-jharkhand", title: "Barao Dance (Jharkhand)", slug: "barao-dance-jharkhand" },
            //                                 { id: "ghora-naach-jharkhand", title: "Ghora Naach (Jharkhand)", slug: "ghora-naach-jharkhand" },
            //                                 { id: "bans-naach-jharkhand", title: "Bans Naach (Jharkhand)", slug: "bans-naach-jharkhand" },
            //                                 { id: "phagua-dance-jharkhand", title: "Phagua Dance (Jharkhand)", slug: "phagua-dance-jharkhand" },
            //                                 { id: "bidesia-dance-jharkhand", title: "Bidesia Dance (Jharkhand)", slug: "bidesia-dance-jharkhand" },

            //                                 { id: "yakshagana-karnataka", title: "Yakshagana (Karnataka)", slug: "yakshagana-karnataka" },
            //                                 { id: "kamsale-karnataka", title: "Kamsale (Karnataka)", slug: "kamsale-karnataka" },
            //                                 { id: "veeragase-karnataka", title: "Veeragase (Karnataka)", slug: "veeragase-karnataka" },
            //                                 { id: "dollu-kunitha-karnataka", title: "Dollu Kunitha (Karnataka)", slug: "dollu-kunitha-karnataka" },
            //                                 { id: "gidda-karnataka", title: "Gidda (Karnataka)", slug: "gidda-karnataka" },
            //                                 { id: "ravana-hatha-karnataka", title: "Ravana Hatha (Karnataka)", slug: "ravana-hatha-karnataka" },
            //                                 { id: "kolata-karnataka", title: "Kolata (Karnataka)", slug: "kolata-karnataka" },
            //                                 { id: "channapatna-dance-karnataka", title: "Channapatna Dance (Karnataka)", slug: "channapatna-dance-karnataka" },
            //                                 { id: "bhavageethe-dance-karnataka", title: "Bhavageethe Dance (Karnataka)", slug: "bhavageethe-dance-karnataka" },
            //                                 { id: "melethirtha-dance-karnataka", title: "Melethirtha Dance (Karnataka)", slug: "melethirtha-dance-karnataka" },
            //                                 { id: "siddi-dance-karnataka", title: "Siddi Dance (Karnataka)", slug: "siddi-dance-karnataka" },

            //                                 { id: "ottamthullal-kerala", title: "Ottamthullal (Kerala)", slug: "ottamthullal-kerala" },
            //                                 { id: "theyyam-kerala", title: "Theyyam (Kerala)", slug: "theyyam-kerala" },
            //                                 { id: "kathakali-kerala", title: "Kathakali (Kerala)", slug: "kathakali-kerala" },
            //                                 { id: "mohiniyattam-kerala", title: "Mohiniyattam (Kerala)", slug: "mohiniyattam-kerala" },
            //                                 { id: "koodiyattam-kerala", title: "Koodiyattam (Kerala)", slug: "koodiyattam-kerala" },
            //                                 { id: "oppana-kerala", title: "Oppana (Kerala)", slug: "oppana-kerala" },
            //                                 { id: "thiruvathira-kerala", title: "Thiruvathira (Kerala)", slug: "thiruvathira-kerala" },
            //                                 { id: "chakyar-koothu-kerala", title: "Chakyar Koothu (Kerala)", slug: "chakyar-koothu-kerala" },
            //                                 { id: "margam-kali-kerala", title: "Margam Kali (Kerala)", slug: "margam-kali-kerala" },
            //                                 { id: "pulsar-kuthu-kerala", title: "Pulsar Kuthu (Kerala)", slug: "pulsar-kuthu-kerala" },
            //                                 { id: "kolkali-kerala", title: "Kolkali (Kerala)", slug: "kolkali-kerala" },
            //                                 { id: "vallamkali-kerala", title: "Vallamkali (Kerala)", slug: "vallamkali-kerala" },
            //                                 { id: "kalaripayattu-kerala", title: "Kalaripayattu (Kerala)", slug: "kalaripayattu-kerala" },
            //                                 { id: "thumbi-thullal-kerala", title: "Thumbi Thullal (Kerala)", slug: "thumbi-thullal-kerala" },
            //                                 { id: "ayyappan-thullal-kerala", title: "Ayyappan Thullal (Kerala)", slug: "ayyappan-thullal-kerala" },
            //                                 { id: "kettukazha-kerala", title: "Kettukazha (Kerala)", slug: "kettukazha-kerala" },

            //                                 { id: "chholiya-madhya-pradesh", title: "Chholiya (Madhya Pradesh)", slug: "chholiya-madhya-pradesh" },
            //                                 { id: "gondi-dance-madhya-pradesh", title: "Gondi Dance (Madhya Pradesh)", slug: "gondi-dance-madhya-pradesh" },
            //                                 { id: "padhar-madhya-pradesh", title: "Padhar (Madhya Pradesh)", slug: "padhar-madhya-pradesh" },
            //                                 { id: "ladakh-dance-madhya-pradesh", title: "Ladakh Dance (Madhya Pradesh)", slug: "ladakh-dance-madhya-pradesh" },
            //                                 { id: "badhai-madhya-pradesh", title: "Badhai (Madhya Pradesh)", slug: "badhai-madhya-pradesh" },
            //                                 { id: "gond-dance-madhya-pradesh", title: "Gond Dance (Madhya Pradesh)", slug: "gond-dance-madhya-pradesh" },
            //                                 { id: "lavani-madhya-pradesh", title: "Lavani (Madhya Pradesh)", slug: "lavani-madhya-pradesh" },
            //                                 { id: "karma-dance-madhya-pradesh", title: "Karma Dance (Madhya Pradesh)", slug: "karma-dance-madhya-pradesh" },
            //                                 { id: "dandia-madhya-pradesh", title: "Dandia (Madhya Pradesh)", slug: "dandia-madhya-pradesh" },
            //                                 { id: "matki-dance-madhya-pradesh", title: "Matki Dance (Madhya Pradesh)", slug: "matki-dance-madhya-pradesh" },
            //                                 { id: "raut-nacha-madhya-pradesh", title: "Raut Nacha (Madhya Pradesh)", slug: "raut-nacha-madhya-pradesh" },
            //                                 { id: "bhargayani-dance-madhya-pradesh", title: "Bhargayani Dance (Madhya Pradesh)", slug: "bhargayani-dance-madhya-pradesh" },
            //                                 { id: "kachhi-ghodi-madhya-pradesh", title: "Kachhi Ghodi (Madhya Pradesh)", slug: "kachhi-ghodi-madhya-pradesh" },
            //                                 { id: "saila-dance-madhya-pradesh", title: "Saila Dance (Madhya Pradesh)", slug: "saila-dance-madhya-pradesh" },
            //                                 { id: "charkula-dance-madhya-pradesh", title: "Charkula Dance (Madhya Pradesh)", slug: "charkula-dance-madhya-pradesh" },
            //                                 { id: "tertali-dance-madhya-pradesh", title: "Tertali Dance (Madhya Pradesh)", slug: "tertali-dance-madhya-pradesh" },
            //                                 { id: "gher-dance-madhya-pradesh", title: "Gher Dance (Madhya Pradesh)", slug: "gher-dance-madhya-pradesh" },
            //                                 { id: "bison-horn-dance-madhya-pradesh", title: "Bison Horn Dance (Madhya Pradesh)", slug: "bison-horn-dance-madhya-pradesh" },
            //                                 { id: "banjara-dance-madhya-pradesh", title: "Banjara Dance (Madhya Pradesh)", slug: "banjara-dance-madhya-pradesh" },
            //                                 { id: "adivasi-dance-madhya-pradesh", title: "Adivasi Dance (Madhya Pradesh)", slug: "adivasi-dance-madhya-pradesh" },
            //                                 { id: "jhumar-dance-madhya-pradesh", title: "Jhumar Dance (Madhya Pradesh)", slug: "jhumar-dance-madhya-pradesh" },
            //                                 { id: "sankheda-dance-madhya-pradesh", title: "Sankheda Dance (Madhya Pradesh)", slug: "sankheda-dance-madhya-pradesh" },

            //                                 { id: "kathyawadi-dance-maharashtra", title: "Kathyawadi Dance (Maharashtra)", slug: "kathyawadi-dance-maharashtra" },
            //                                 { id: "lavani-maharashtra", title: "Lavani (Maharashtra)", slug: "lavani-maharashtra" },
            //                                 { id: "dholki-maharashtra", title: "Dholki (Maharashtra)", slug: "dholki-maharashtra" },
            //                                 { id: "koli-maharashtra", title: "Koli (Maharashtra)", slug: "koli-maharashtra" },
            //                                 { id: "tamasha-maharashtra", title: "Tamasha (Maharashtra)", slug: "tamasha-maharashtra" },
            //                                 { id: "dhangari-gaja-maharashtra", title: "Dhangari Gaja (Maharashtra)", slug: "dhangari-gaja-maharashtra" },
            //                                 { id: "gondhal-maharashtra", title: "Gondhal (Maharashtra)", slug: "gondhal-maharashtra" },
            //                                 { id: "povada-maharashtra", title: "Povada (Maharashtra)", slug: "povada-maharashtra" },
            //                                 { id: "bharud-maharashtra", title: "Bharud (Maharashtra)", slug: "bharud-maharashtra" },
            //                                 { id: "lezim-dance-maharashtra", title: "Lezim Dance (Maharashtra)", slug: "lezim-dance-maharashtra" },
            //                                 { id: "fugdi-maharashtra", title: "Fugdi (Maharashtra)", slug: "fugdi-maharashtra" },
            //                                 { id: "kalgi-tura-maharashtra", title: "Kalgi-Tura (Maharashtra)", slug: "kalgi-tura-maharashtra" },

            //                                 { id: "manipuri-manipur", title: "Manipuri (Manipur)", slug: "manipuri-manipur" },
            //                                 { id: "pung-cholom-manipur", title: "Pung Cholom (Manipur)", slug: "pung-cholom-manipur" },
            //                                 { id: "raas-leela-manipur", title: "Raas Leela (Manipur)", slug: "raas-leela-manipur" },
            //                                 { id: "thang-ta-manipur", title: "Thang Ta (Manipur)", slug: "thang-ta-manipur" },
            //                                 { id: "maibi-jagoi-manipur", title: "Maibi Jagoi (Manipur)", slug: "maibi-jagoi-manipur" },
            //                                 { id: "lai-haraoba-dance-manipur", title: "Lai Haraoba Dance (Manipur)", slug: "lai-haraoba-dance-manipur" },
            //                                 { id: "khamba-thoibi-dance-manipur", title: "Khamba Thoibi Dance (Manipur)", slug: "khamba-thoibi-dance-manipur" },
            //                                 { id: "nupa-pala-manipur", title: "Nupa Pala (Manipur)", slug: "nupa-pala-manipur" },
            //                                 { id: "moirang-sai-manipur", title: "Moirang Sai (Manipur)", slug: "moirang-sai-manipur" },
            //                                 { id: "gouralila-manipur", title: "Gouralila (Manipur)", slug: "gouralila-manipur" },
            //                                 { id: "khousaba-dance-manipur", title: "Khousaba Dance (Manipur)", slug: "khousaba-dance-manipur" },

            //                                 { id: "shad-suk-mynsiem-meghalaya", title: "Shad Suk Mynsiem (Meghalaya)", slug: "shad-suk-mynsiem-meghalaya" },
            //                                 { id: "laho-dance-meghalaya", title: "Laho Dance (Meghalaya)", slug: "laho-dance-meghalaya" },
            //                                 { id: "wangla-dance-meghalaya", title: "Wangla Dance (Meghalaya)", slug: "wangla-dance-meghalaya" },
            //                                 { id: "bhortal-dance-meghalaya", title: "Bhortal Dance (Meghalaya)", slug: "bhortal-dance-meghalaya" },
            //                                 { id: "nongkrem-dance-meghalaya", title: "Nongkrem Dance (Meghalaya)", slug: "nongkrem-dance-meghalaya" },
            //                                 { id: "dhokna-dance-meghalaya", title: "Dhokna Dance (Meghalaya)", slug: "dhokna-dance-meghalaya" },
            //                                 { id: "chhemlap-dance-meghalaya", title: "Chhemlap Dance (Meghalaya)", slug: "chhemlap-dance-meghalaya" },
            //                                 { id: "shad-khein-phan-meghalaya", title: "Shad Khein Phan (Meghalaya)", slug: "shad-khein-phan-meghalaya" },
            //                                 { id: "pator-dance-meghalaya", title: "Pator Dance (Meghalaya)", slug: "pator-dance-meghalaya" },
            //                                 { id: "rangmang-dance-meghalaya", title: "Rangmang Dance (Meghalaya)", slug: "rangmang-dance-meghalaya" },
            //                                 { id: "jhumair-dance-meghalaya", title: "Jhumair Dance (Meghalaya)", slug: "jhumair-dance-meghalaya" },
            //                                 { id: "khadum-dance-meghalaya", title: "Khadum Dance (Meghalaya)", slug: "khadum-dance-meghalaya" },
            //                                 { id: "sokhe-dance-meghalaya", title: "Sokhe Dance (Meghalaya)", slug: "sokhe-dance-meghalaya" },
            //                                 { id: "kynthei-shad-dance-meghalaya", title: "Kynthei Shad Dance (Meghalaya)", slug: "kynthei-shad-dance-meghalaya" },
            //                                 { id: "laying-dance-meghalaya", title: "Laying Dance (Meghalaya)", slug: "laying-dance-meghalaya" },

            //                                 { id: "cheraw-dance-mizoram", title: "Cheraw Dance (Mizoram)", slug: "cheraw-dance-mizoram" },
            //                                 { id: "lai-haraoba-mizoram", title: "Lai Haraoba (Mizoram)", slug: "lai-haraoba-mizoram" },
            //                                 { id: "khuallam-mizoram", title: "Khuallam (Mizoram)", slug: "khuallam-mizoram" },
            //                                 { id: "sarlamkai-mizoram", title: "Sarlamkai (Mizoram)", slug: "sarlamkai-mizoram" },
            //                                 { id: "chheihlam-mizoram", title: "Chheihlam (Mizoram)", slug: "chheihlam-mizoram" },
            //                                 { id: "tlanglam-mizoram", title: "Tlanglam (Mizoram)", slug: "tlanglam-mizoram" },
            //                                 { id: "lai-hla-mizoram", title: "Lai Hla (Mizoram)", slug: "lai-hla-mizoram" },
            //                                 { id: "tlawng-mizoram", title: "Tlawng (Mizoram)", slug: "tlawng-mizoram" },
            //                                 { id: "pawl-kut-dance-mizoram", title: "Pawl-Kut Dance (Mizoram)", slug: "pawl-kut-dance-mizoram" },
            //                                 { id: "chawnglaizawn-mizoram", title: "Chawnglaizawn (Mizoram)", slug: "chawnglaizawn-mizoram" },
            //                                 { id: "buhchhuah-dance-mizoram", title: "Buhchhuah Dance (Mizoram)", slug: "buhchhuah-dance-mizoram" },
            //                                 { id: "zawlbuk-dance-mizoram", title: "Zawlbuk Dance (Mizoram)", slug: "zawlbuk-dance-mizoram" },
            //                                 { id: "vanchip-dance-mizoram", title: "Vanchip Dance (Mizoram)", slug: "vanchip-dance-mizoram" },

            //                                 { id: "mimkut-nagaland", title: "Mimkut (Nagaland)", slug: "mimkut-nagaland" },
            //                                 { id: "aoleang-nagaland", title: "Aoleang (Nagaland)", slug: "aoleang-nagaland" },
            //                                 { id: "bamboo-dance-nagaland", title: "Bamboo Dance (Nagaland)", slug: "bamboo-dance-nagaland" },
            //                                 { id: "naga-war-dance-nagaland", title: "Naga War Dance (Nagaland)", slug: "naga-war-dance-nagaland" },
            //                                 { id: "zeliang-dance-nagaland", title: "Zeliang Dance (Nagaland)", slug: "zeliang-dance-nagaland" },
            //                                 { id: "angami-dance-nagaland", title: "Angami Dance (Nagaland)", slug: "angami-dance-nagaland" },
            //                                 { id: "khiamniungan-dance-nagaland", title: "Khiamniungan Dance (Nagaland)", slug: "khiamniungan-dance-nagaland" },
            //                                 { id: "lotha-dance-nagaland", title: "Lotha Dance (Nagaland)", slug: "lotha-dance-nagaland" },
            //                                 { id: "sumi-dance-nagaland", title: "Sumi Dance (Nagaland)", slug: "sumi-dance-nagaland" },
            //                                 { id: "chakesang-dance-nagaland", title: "Chakesang Dance (Nagaland)", slug: "chakesang-dance-nagaland" },
            //                                 { id: "rangmawii-dance-nagaland", title: "Rangmawii Dance (Nagaland)", slug: "rangmawii-dance-nagaland" },
            //                                 { id: "pochury-dance-nagaland", title: "Pochury Dance (Nagaland)", slug: "pochury-dance-nagaland" },
            //                                 { id: "ao-dance-nagaland", title: "Ao Dance (Nagaland)", slug: "ao-dance-nagaland" },
            //                                 { id: "rengma-dance-nagaland", title: "Rengma Dance (Nagaland)", slug: "rengma-dance-nagaland" },
            //                                 { id: "konyak-dance-nagaland", title: "Konyak Dance (Nagaland)", slug: "konyak-dance-nagaland" },
            //                                 { id: "sangtam-dance-nagaland", title: "Sangtam Dance (Nagaland)", slug: "sangtam-dance-nagaland" },
            //                                 { id: "yimchungru-dance-nagaland", title: "Yimchungrü Dance (Nagaland)", slug: "yimchungru-dance-nagaland" },

            //                                 { id: "odissi-odisha", title: "Odissi (Odisha)", slug: "odissi-odisha" },
            //                                 { id: "sambalpuri-dance-odisha", title: "Sambalpuri Dance (Odisha)", slug: "sambalpuri-dance-odisha" },
            //                                 { id: "chhau-odisha", title: "Chhau (Odisha)", slug: "chhau-odisha" },
            //                                 { id: "raibenshe-odisha", title: "Raibenshe (Odisha)", slug: "raibenshe-odisha" },
            //                                 { id: "gotipua-odisha", title: "Gotipua (Odisha)", slug: "gotipua-odisha" },
            //                                 { id: "dalkhai-odisha", title: "Dalkhai (Odisha)", slug: "dalkhai-odisha" },
            //                                 { id: "rasa-lila-odisha", title: "Rasa Lila (Odisha)", slug: "rasa-lila-odisha" },
            //                                 { id: "mahari-odisha", title: "Mahari (Odisha)", slug: "mahari-odisha" },
            //                                 { id: "bihu-odisha", title: "Bihu (Odisha)", slug: "bihu-odisha" },
            //                                 { id: "karma-odisha", title: "Karma (Odisha)", slug: "karma-odisha" },
            //                                 { id: "chandan-jhulna-odisha", title: "Chandan Jhulna (Odisha)", slug: "chandan-jhulna-odisha" },
            //                                 { id: "rath-yatra-dance-odisha", title: "Rath Yatra Dance (Odisha)", slug: "rath-yatra-dance-odisha" },
            //                                 { id: "palahar-odisha", title: "Palahar (Odisha)", slug: "palahar-odisha" },

            //                                 { id: "bhangra-punjab", title: "Bhangra (Punjab)", slug: "bhangra-punjab" },
            //                                 { id: "gidda-punjab", title: "Gidda (Punjab)", slug: "gidda-punjab" },
            //                                 { id: "luddi-punjab", title: "Luddi (Punjab)", slug: "luddi-punjab" },
            //                                 { id: "jhumar-punjab", title: "Jhumar (Punjab)", slug: "jhumar-punjab" },
            //                                 { id: "dhamal-punjab", title: "Dhamal (Punjab)", slug: "dhamal-punjab" },
            //                                 { id: "dhola-punjab", title: "Dhola (Punjab)", slug: "dhola-punjab" },
            //                                 { id: "heren-punjab", title: "Heren (Punjab)", slug: "heren-punjab" },
            //                                 { id: "gatka-punjab", title: "Gatka (Punjab)", slug: "gatka-punjab" },
            //                                 { id: "teeyan-punjab", title: "Teeyan (Punjab)", slug: "teeyan-punjab" },
            //                                 { id: "dankara-punjab", title: "Dankara (Punjab)", slug: "dankara-punjab" },
            //                                 { id: "sammi-punjab", title: "Sammi (Punjab)", slug: "sammi-punjab" },
            //                                 { id: "kikli-punjab", title: "Kikli (Punjab)", slug: "kikli-punjab" },
            //                                 { id: "jaago-punjab", title: "Jaago (Punjab)", slug: "jaago-punjab" },

            //                                 { id: "ghoomar-rajasthan", title: "Ghoomar (Rajasthan)", slug: "ghoomar-rajasthan" },
            //                                 { id: "kalbeliya-rajasthan", title: "Kalbeliya (Rajasthan)", slug: "kalbeliya-rajasthan" },
            //                                 { id: "chari-rajasthan", title: "Chari (Rajasthan)", slug: "chari-rajasthan" },
            //                                 { id: "bhavai-rajasthan", title: "Bhavai (Rajasthan)", slug: "bhavai-rajasthan" },
            //                                 { id: "terah-taali-rajasthan", title: "Terah Taali (Rajasthan)", slug: "terah-taali-rajasthan" },
            //                                 { id: "kachhi-ghodi-rajasthan", title: "Kachhi Ghodi (Rajasthan)", slug: "kachhi-ghodi-rajasthan" },
            //                                 { id: "gair-rajasthan", title: "Gair (Rajasthan)", slug: "gair-rajasthan" },
            //                                 { id: "kathputli-rajasthan", title: "Kathputli (Rajasthan)", slug: "kathputli-rajasthan" },
            //                                 { id: "fire-dance-rajasthan", title: "Fire Dance (Rajasthan)", slug: "fire-dance-rajasthan" },
            //                                 { id: "banjara-dance-rajasthan", title: "Banjara Dance (Rajasthan)", slug: "banjara-dance-rajasthan" },
            //                                 { id: "maand-rajasthan", title: "Maand (Rajasthan)", slug: "maand-rajasthan" },
            //                                 { id: "rasiya-rajasthan", title: "Rasiya (Rajasthan)", slug: "rasiya-rajasthan" },
            //                                 { id: "dang-lila-rajasthan", title: "Dang Lila (Rajasthan)", slug: "dang-lila-rajasthan" },

            //                                 { id: "cheraw-dance-sikkim", title: "Cheraw Dance (Sikkim)", slug: "cheraw-dance-sikkim" },
            //                                 { id: "cham-dance-sikkim", title: "Mask Dance / Cham Dance (Sikkim)", slug: "cham-dance-sikkim" },
            //                                 { id: "dhan-naach-sikkim", title: "Dhan Naach (Sikkim)", slug: "dhan-naach-sikkim" },
            //                                 { id: "khukuri-dance-sikkim", title: "Khukuri Dance (Sikkim)", slug: "khukuri-dance-sikkim" },
            //                                 { id: "tamang-selo-dance-sikkim", title: "Tamang Selo Dance (Sikkim)", slug: "tamang-selo-dance-sikkim" },
            //                                 { id: "buddhist-monastery-dance-sikkim", title: "Buddhist Monastery Dance (Sikkim)", slug: "buddhist-monastery-dance-sikkim" },
            //                                 { id: "lho-bha-dance-sikkim", title: "Lho-Bha Dance (Sikkim)", slug: "lho-bha-dance-sikkim" },
            //                                 { id: "lepcha-bhutia-folk-dance-sikkim", title: "Sikkimese Folk Dance - Lepcha and Bhutia (Sikkim)", slug: "lepcha-bhutia-folk-dance-sikkim" },
            //                                 { id: "bheda-dance-sikkim", title: "Bheda Dance (Sikkim)", slug: "bheda-dance-sikkim" },
            //                                 { id: "puja-dance-sikkim", title: "Puja Dance (Sikkim)", slug: "puja-dance-sikkim" },
            //                                 { id: "dzumsa-dance-sikkim", title: "Dzumsa Dance (Sikkim)", slug: "dzumsa-dance-sikkim" },
            //                                 { id: "yak-dance-sikkim", title: "Yak Dance (Sikkim)", slug: "yak-dance-sikkim" },

            //                                 { id: "bharatanatyam-tamil-nadu", title: "Bharatanatyam (Tamil Nadu)", slug: "bharatanatyam-tamil-nadu" },
            //                                 { id: "kuchipudi-tamil-nadu", title: "Kuchipudi (Tamil Nadu)", slug: "kuchipudi-tamil-nadu" },
            //                                 { id: "karagattam-tamil-nadu", title: "Karagattam (Tamil Nadu)", slug: "karagattam-tamil-nadu" },
            //                                 { id: "kolattam-tamil-nadu", title: "Kolattam (Tamil Nadu)", slug: "kolattam-tamil-nadu" },
            //                                 { id: "kummi-tamil-nadu", title: "Kummi (Tamil Nadu)", slug: "kummi-tamil-nadu" },
            //                                 { id: "silambam-tamil-nadu", title: "Silambam (Tamil Nadu)", slug: "silambam-tamil-nadu" },
            //                                 { id: "aattam-tamil-nadu", title: "Aattam (Tamil Nadu)", slug: "aattam-tamil-nadu" },
            //                                 { id: "thappattam-tamil-nadu", title: "Thappattam (Tamil Nadu)", slug: "thappattam-tamil-nadu" },
            //                                 { id: "puli-kali-tamil-nadu", title: "Puli Kali (Tamil Nadu)", slug: "puli-kali-tamil-nadu" },
            //                                 { id: "mayil-attam-tamil-nadu", title: "Mayil Attam (Tamil Nadu)", slug: "mayil-attam-tamil-nadu" },
            //                                 { id: "dappan-koothu-tamil-nadu", title: "Dappan Koothu (Tamil Nadu)", slug: "dappan-koothu-tamil-nadu" },
            //                                 { id: "kaalai-attam-tamil-nadu", title: "Kaalai Attam (Tamil Nadu)", slug: "kaalai-attam-tamil-nadu" },
            //                                 { id: "poikkal-kudirai-aattam-tamil-nadu", title: "Poikkal Kudirai Aattam (Tamil Nadu)", slug: "poikkal-kudirai-aattam-tamil-nadu" },
            //                                 { id: "sera-thappattam-tamil-nadu", title: "Sera Thappattam (Tamil Nadu)", slug: "sera-thappattam-tamil-nadu" },
            //                                 { id: "puthu-vannam-tamil-nadu", title: "Puthu Vannam (Tamil Nadu)", slug: "puthu-vannam-tamil-nadu" },
            //                                 { id: "villu-paattu-dance-tamil-nadu", title: "Villu Paattu Dance (Tamil Nadu)", slug: "villu-paattu-dance-tamil-nadu" },

            //                                 { id: "bathukamma-dance-telangana", title: "Bathukamma Dance (Telangana)", slug: "bathukamma-dance-telangana" },
            //                                 { id: "lambadi-dance-telangana", title: "Lambadi Dance (Telangana)", slug: "lambadi-dance-telangana" },
            //                                 { id: "kolattam-telangana", title: "Kolattam (Telangana)", slug: "kolattam-telangana" },
            //                                 { id: "dappu-telangana", title: "Dappu (Telangana)", slug: "dappu-telangana" },
            //                                 { id: "pakala-telangana", title: "Pakala (Telangana)", slug: "pakala-telangana" },
            //                                 { id: "perini-sivatandavam-telangana", title: "Perini Sivatandavam (Telangana)", slug: "perini-sivatandavam-telangana" },
            //                                 { id: "oggu-katha-telangana", title: "Oggu Katha (Telangana)", slug: "oggu-katha-telangana" },
            //                                 { id: "gussadi-telangana", title: "Gussadi (Telangana)", slug: "gussadi-telangana" },
            //                                 { id: "bonalu-telangana", title: "Bonalu (Telangana)", slug: "bonalu-telangana" },
            //                                 { id: "chindu-bhagavatam-telangana", title: "Chindu Bhagavatam (Telangana)", slug: "chindu-bhagavatam-telangana" },
            //                                 { id: "sangini-telangana", title: "Sangini (Telangana)", slug: "sangini-telangana" },
            //                                 { id: "tolu-bommalata-telangana", title: "Tolu Bommalata (Telangana)", slug: "tolu-bommalata-telangana" },
            //                                 { id: "komuravelli-telangana", title: "Komuravelli (Telangana)", slug: "komuravelli-telangana" },
            //                                 { id: "nandi-nartana-telangana", title: "Nandi Nartana (Telangana)", slug: "nandi-nartana-telangana" },

            //                                 { id: "hojagiri-dance-tripura", title: "Hojagiri Dance (Tripura)", slug: "hojagiri-dance-tripura" },
            //                                 { id: "garia-dance-tripura", title: "Garia Dance (Tripura)", slug: "garia-dance-tripura" },
            //                                 { id: "lebang-boomani-tripura", title: "Lebang Boomani (Tripura)", slug: "lebang-boomani-tripura" },
            //                                 { id: "rong-chham-tripura", title: "Rong Chham (Tripura)", slug: "rong-chham-tripura" },
            //                                 { id: "mishmi-dance-tripura", title: "Mishmi Dance (Tripura)", slug: "mishmi-dance-tripura" },
            //                                 { id: "bijuwa-dance-tripura", title: "Bijuwa Dance (Tripura)", slug: "bijuwa-dance-tripura" },
            //                                 { id: "jhum-dance-tripura", title: "Jhum Dance (Tripura)", slug: "jhum-dance-tripura" },
            //                                 { id: "chailo-dance-tripura", title: "Chailo Dance (Tripura)", slug: "chailo-dance-tripura" },
            //                                 { id: "bamboo-dance-tripura", title: "Bamboo Dance (Tripura)", slug: "bamboo-dance-tripura" },
            //                                 { id: "chhura-dance-tripura", title: "Chhura Dance (Tripura)", slug: "chhura-dance-tripura" },
            //                                 { id: "kirtan-dance-tripura", title: "Kirtan Dance (Tripura)", slug: "kirtan-dance-tripura" },
            //                                 { id: "wanchuwa-dance-tripura", title: "Wanchuwa Dance (Tripura)", slug: "wanchuwa-dance-tripura" },
            //                                 { id: "sakta-dance-tripura", title: "Sakta Dance (Tripura)", slug: "sakta-dance-tripura" },
            //                                 { id: "khowai-dance-tripura", title: "Khowai Dance (Tripura)", slug: "khowai-dance-tripura" },

            //                                 { id: "rasiya-uttar-pradesh", title: "Rasiya (Uttar Pradesh)", slug: "rasiya-uttar-pradesh" },
            //                                 { id: "charkula-dance-uttar-pradesh", title: "Charkula Dance (Uttar Pradesh)", slug: "charkula-dance-uttar-pradesh" },
            //                                 { id: "raslila-uttar-pradesh", title: "Raslila (Uttar Pradesh)", slug: "raslila-uttar-pradesh" },
            //                                 { id: "nautanki-uttar-pradesh", title: "Nautanki (Uttar Pradesh)", slug: "nautanki-uttar-pradesh" },
            //                                 { id: "kathak-uttar-pradesh", title: "Kathak (Uttar Pradesh)", slug: "kathak-uttar-pradesh" },
            //                                 { id: "kajri-dance-uttar-pradesh", title: "Kajri Dance (Uttar Pradesh)", slug: "kajri-dance-uttar-pradesh" },
            //                                 { id: "jhora-dance-uttar-pradesh", title: "Jhora Dance (Uttar Pradesh)", slug: "jhora-dance-uttar-pradesh" },
            //                                 { id: "sawani-dance-uttar-pradesh", title: "Sawani Dance (Uttar Pradesh)", slug: "sawani-dance-uttar-pradesh" },
            //                                 { id: "dhobia-dance-uttar-pradesh", title: "Dhobia Dance (Uttar Pradesh)", slug: "dhobia-dance-uttar-pradesh" },
            //                                 { id: "braj-holi-dance-uttar-pradesh", title: "Braj Holi Dance (Uttar Pradesh)", slug: "braj-holi-dance-uttar-pradesh" },
            //                                 { id: "birha-dance-uttar-pradesh", title: "Birha Dance (Uttar Pradesh)", slug: "birha-dance-uttar-pradesh" },

            //                                 { id: "choliya-uttarakhand", title: "Choliya (Uttarakhand)", slug: "choliya-uttarakhand" },
            //                                 { id: "jhora-uttarakhand", title: "Jhora (Uttarakhand)", slug: "jhora-uttarakhand" },
            //                                 { id: "langvir-nritya-uttarakhand", title: "Langvir Nritya (Uttarakhand)", slug: "langvir-nritya-uttarakhand" },
            //                                 { id: "pandav-nritya-uttarakhand", title: "Pandav Nritya (Uttarakhand)", slug: "pandav-nritya-uttarakhand" },
            //                                 { id: "chhapeli-uttarakhand", title: "Chhapeli (Uttarakhand)", slug: "chhapeli-uttarakhand" },
            //                                 { id: "tandi-nritya-uttarakhand", title: "Tandi Nritya (Uttarakhand)", slug: "tandi-nritya-uttarakhand" },
            //                                 { id: "bhotiya-dance-uttarakhand", title: "Bhotiya Dance (Uttarakhand)", slug: "bhotiya-dance-uttarakhand" },
            //                                 { id: "barada-nati-uttarakhand", title: "Barada Nati (Uttarakhand)", slug: "barada-nati-uttarakhand" },
            //                                 { id: "ramola-dance-uttarakhand", title: "Ramola Dance (Uttarakhand)", slug: "ramola-dance-uttarakhand" },
            //                                 { id: "hurkiya-baul-uttarakhand", title: "Hurkiya Baul (Uttarakhand)", slug: "hurkiya-baul-uttarakhand" },

            //                                 { id: "raibenshe-west-bengal", title: "Raibenshe (West Bengal)", slug: "raibenshe-west-bengal" },
            //                                 { id: "baul-dance-west-bengal", title: "Baul Dance (West Bengal)", slug: "baul-dance-west-bengal" },
            //                                 { id: "chhau-west-bengal", title: "Chhau (West Bengal)", slug: "chhau-west-bengal" },
            //                                 { id: "jhumur-dance-west-bengal", title: "Jhumur Dance (West Bengal)", slug: "jhumur-dance-west-bengal" },
            //                                 { id: "tusu-dance-west-bengal", title: "Tusu Dance (West Bengal)", slug: "tusu-dance-west-bengal" },
            //                                 { id: "hulud-dance-west-bengal", title: "Hulud Dance (West Bengal)", slug: "hulud-dance-west-bengal" },
            //                                 { id: "rabindra-nritya-west-bengal", title: "Rabindra Nritya (West Bengal)", slug: "rabindra-nritya-west-bengal" },
            //                                 { id: "santal-dance-west-bengal", title: "Santal Dance (West Bengal)", slug: "santal-dance-west-bengal" },
            //                                 { id: "kherai-dance-west-bengal", title: "Kherai Dance (West Bengal)", slug: "kherai-dance-west-bengal" },
            //                                 { id: "rai-dance-west-bengal", title: "Rai Dance (West Bengal)", slug: "rai-dance-west-bengal" },
            //                                 { id: "dhamail-dance-west-bengal", title: "Dhamail Dance (West Bengal)", slug: "dhamail-dance-west-bengal" },
            //                                 { id: "gambhira-dance-west-bengal", title: "Gambhira Dance (West Bengal)", slug: "gambhira-dance-west-bengal" },
            //                                 { id: "bhawaiya-dance-west-bengal", title: "Bhawaiya Dance (West Bengal)", slug: "bhawaiya-dance-west-bengal" },
            //                                 { id: "kali-naach-west-bengal", title: "Kali Naach (West Bengal)", slug: "kali-naach-west-bengal" },
            //                                 { id: "domni-dance-west-bengal", title: "Domni Dance (West Bengal)", slug: "domni-dance-west-bengal" },
            //                                 { id: "kirtan-dance-west-bengal", title: "Kirtan Dance (West Bengal)", slug: "kirtan-dance-west-bengal" },
            //                                 { id: "lathi-dance-west-bengal", title: "Lathi Dance (West Bengal)", slug: "lathi-dance-west-bengal" },
            //                                 { id: "dhali-dance-west-bengal", title: "Dhali Dance (West Bengal)", slug: "dhali-dance-west-bengal" },

            //                                 { id: "rauf-jammu-kashmir", title: "Rauf (Jammu and Kashmir)", slug: "rauf-jammu-kashmir" },
            //                                 { id: "dogri-bhangra-jammu-kashmir", title: "Dogri Bhangra (Jammu and Kashmir)", slug: "dogri-bhangra-jammu-kashmir" },
            //                                 { id: "jagarana-jammu-kashmir", title: "Jagarana (Jammu and Kashmir)", slug: "jagarana-jammu-kashmir" },
            //                                 { id: "kud-jammu-kashmir", title: "Kud (Jammu and Kashmir)", slug: "kud-jammu-kashmir" },
            //                                 { id: "heren-jammu-kashmir", title: "Heren (Jammu and Kashmir)", slug: "heren-jammu-kashmir" },
            //                                 { id: "fumenie-jagarana-jammu-kashmir", title: "Fumenie and Jagarana (Jammu and Kashmir)", slug: "fumenie-jagarana-jammu-kashmir" },
            //                                 { id: "geetru-jammu-kashmir", title: "Geetru (Jammu and Kashmir)", slug: "geetru-jammu-kashmir" },
            //                                 { id: "bhand-pather-jammu-kashmir", title: "Bhand Pather (Jammu and Kashmir)", slug: "bhand-pather-jammu-kashmir" },
            //                                 { id: "bacha-nagma-jammu-kashmir", title: "Bacha Nagma (Jammu and Kashmir)", slug: "bacha-nagma-jammu-kashmir" },
            //                                 { id: "hafiza-dance-jammu-kashmir", title: "Hafiza Dance (Jammu and Kashmir)", slug: "hafiza-dance-jammu-kashmir" },
            //                                 { id: "dumhal-jammu-kashmir", title: "Dumhal (Jammu and Kashmir)", slug: "dumhal-jammu-kashmir" },
            //                                 { id: "bhand-jashan-jammu-kashmir", title: "Bhand Jashan (Jammu and Kashmir)", slug: "bhand-jashan-jammu-kashmir" },
            //                                 { id: "rouf-jammu-kashmir", title: "Rouf (Jammu and Kashmir)", slug: "rouf-jammu-kashmir" },

            //                                 { id: "kathak-north-india", title: "Kathak (North India)", slug: "kathak-north-india" },

            //                                 { id: "nicobarese-dance-andaman-nicobar", title: "Nicobarese Dance (Andaman and Nicobar Islands)", slug: "nicobarese-dance-andaman-nicobar" },
            //                                 { id: "great-andamanese-tribal-dance-andaman-nicobar", title: "Tribal Dance of the Great Andamanese (Andaman and Nicobar Islands)", slug: "great-andamanese-tribal-dance-andaman-nicobar" },
            //                                 { id: "jarwa-dance-andaman-nicobar", title: "Jarwa Dance (Andaman and Nicobar Islands)", slug: "jarwa-dance-andaman-nicobar" },
            //                                 { id: "sentinalese-dance-andaman-nicobar", title: "Sentinalese Dance (Andaman and Nicobar Islands)", slug: "sentinalese-dance-andaman-nicobar" },
            //                                 { id: "kala-pung-dance-andaman-nicobar", title: "Kala Pung Dance (Andaman and Nicobar Islands)", slug: "kala-pung-dance-andaman-nicobar" },
            //                                 { id: "mundu-dance-andaman-nicobar", title: "Mundu Dance (Andaman and Nicobar Islands)", slug: "mundu-dance-andaman-nicobar" },
            //                                 { id: "island-folk-dance-andaman-nicobar", title: "Island Folk Dance (Andaman and Nicobar Islands)", slug: "island-folk-dance-andaman-nicobar" },
            //                                 { id: "bamboo-dance-andaman-nicobar", title: "Bamboo Dance (Andaman and Nicobar Islands)", slug: "bamboo-dance-andaman-nicobar" },
            //                                 { id: "shompen-dance-andaman-nicobar", title: "Dance of the Shompens (Andaman and Nicobar Islands)", slug: "shompen-dance-andaman-nicobar" },
            //                                 { id: "chakma-dance-andaman-nicobar", title: "Chakma Dance (Andaman and Nicobar Islands)", slug: "chakma-dance-andaman-nicobar" },
            //                                 { id: "bangla-folk-dance-andaman-nicobar", title: "Bangla Folk Dance (Andaman and Nicobar Islands)", slug: "bangla-folk-dance-andaman-nicobar" },
            //                                 { id: "mizo-tribal-dance-andaman-nicobar", title: "Mizo Tribal Dance (Andaman and Nicobar Islands)", slug: "mizo-tribal-dance-andaman-nicobar" },

            //                                 { id: "dandiya-raas-dnh-dd", title: "Dandiya Raas (Dadra and Nagar Haveli and Daman and Diu)", slug: "dandiya-raas-dnh-dd" },
            //                                 { id: "garba-dnh-dd", title: "Garba (Dadra and Nagar Haveli and Daman and Diu)", slug: "garba-dnh-dd" },
            //                                 { id: "koli-dance-dnh-dd", title: "Koli Dance (Dadra and Nagar Haveli and Daman and Diu)", slug: "koli-dance-dnh-dd" },
            //                                 { id: "fugdi-dnh-dd", title: "Fugdi (Dadra and Nagar Haveli and Daman and Diu)", slug: "fugdi-dnh-dd" },
            //                                 { id: "bhoomiya-dance-dnh-dd", title: "Bhoomiya Dance (Dadra and Nagar Haveli and Daman and Diu)", slug: "bhoomiya-dance-dnh-dd" },
            //                                 { id: "sufi-dance-dnh-dd", title: "Sufi Dance (Dadra and Nagar Haveli and Daman and Diu)", slug: "sufi-dance-dnh-dd" },

            //                                 { id: "parichakali-lakshadweep", title: "Parichakali (Lakshadweep)", slug: "parichakali-lakshadweep" },
            //                                 { id: "kolkali-lakshadweep", title: "Folk Dance of Kolkali (Lakshadweep)", slug: "kolkali-lakshadweep" },
            //                                 { id: "mappila-paattu-lakshadweep", title: "Mappila Paattu (Lakshadweep)", slug: "mappila-paattu-lakshadweep" },
            //                                 { id: "adivasi-tribal-dance-lakshadweep", title: "Adivasi Tribal Dance (Lakshadweep)", slug: "adivasi-tribal-dance-lakshadweep" },
            //                                 { id: "tharavad-dance-lakshadweep", title: "Tharavad Dance (Lakshadweep)", slug: "tharavad-dance-lakshadweep" },

            //                                 { id: "chham-dance-ladakh", title: "Chham Dance (Ladakh)", slug: "chham-dance-ladakh" },
            //                                 { id: "shondol-dance-ladakh", title: "Shondol Dance (Ladakh)", slug: "shondol-dance-ladakh" },
            //                                 { id: "mask-dance-ladakh", title: "Mask Dance (Ladakh)", slug: "mask-dance-ladakh" },
            //                                 { id: "ladakhi-folk-dance-ladakh", title: "Ladakhi Folk Dance (Ladakh)", slug: "ladakhi-folk-dance-ladakh" },
            //                                 { id: "dumhal-dance-ladakh", title: "Dumhal Dance (Ladakh)", slug: "dumhal-dance-ladakh" },
            //                                 { id: "kesar-dance-ladakh", title: "Kesar Dance (Ladakh)", slug: "kesar-dance-ladakh" },
            //                                 { id: "tibetan-dance-ladakh", title: "Tibetan Dance (Ladakh)", slug: "tibetan-dance-ladakh" },
            //                                 { id: "buddhist-monastic-dance-ladakh", title: "Buddhist Monastic Dance (Ladakh)", slug: "buddhist-monastic-dance-ladakh" },
            //                                 { id: "phyang-monastery-dance-ladakh", title: "Phyang Monastery Dance (Ladakh)", slug: "phyang-monastery-dance-ladakh" }
            //                             ]
            //                         }
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             id: "comedians",
            //             title: "Comedians",
            //             slug: "comedians",
            //             children: [
            //                 {
            //                     id: "stand-up-comedians",
            //                     title: "Stand-Up Comedians",
            //                     slug: "stand-up-comedians",
            //                     children: [
            //                         { id: "observational-comedians", title: "Observational Comedians", slug: "observational-comedians" },
            //                         { id: "prop-comedians", title: "Prop Comedians", slug: "prop-comedians" },
            //                         { id: "satirical-comedians", title: "Satirical Comedians", slug: "satirical-comedians" },
            //                         { id: "dark-comedians", title: "Dark Comedians (Black Comedy)", slug: "dark-comedians-black-comedy" },
            //                         { id: "storytelling-comedians", title: "Storytelling Comedians", slug: "storytelling-comedians" },
            //                         { id: "one-liner-comedians", title: "One-Liner Comedians", slug: "one-liner-comedians" },
            //                         { id: "observational-satire-comedians", title: "Observational Satire Comedians", slug: "observational-satire-comedians" },
            //                         { id: "physical-comedians", title: "Physical Comedians", slug: "physical-comedians" },
            //                         { id: "surreal-comedians", title: "Surreal Comedians", slug: "surreal-comedians" },
            //                         { id: "insult-comedians", title: "Insult Comedians", slug: "insult-comedians" },
            //                         { id: "alternative-comedians", title: "Alternative Comedians", slug: "alternative-comedians" },
            //                         { id: "clean-comedians", title: "Clean Comedians", slug: "clean-comedians" },
            //                         { id: "political-comedians", title: "Political Comedians", slug: "political-comedians" },
            //                         { id: "musical-comedians", title: "Musical Comedians", slug: "musical-comedians" },
            //                         { id: "anti-comedians", title: "Anti-Comedians", slug: "anti-comedians" },
            //                         { id: "nerdy-comedians", title: "Nerdy Comedians", slug: "nerdy-comedians" }
            //                     ]
            //                 },
            //                 {
            //                     id: "sketch-comedians",
            //                     title: "Sketch Comedians",
            //                     slug: "sketch-comedians",
            //                     children: [
            //                         { id: "character-comedians", title: "Character Comedians", slug: "character-comedians" },
            //                         { id: "satirical-sketch-comedians", title: "Satirical Sketch Comedians", slug: "satirical-sketch-comedians" },
            //                         { id: "parody-comedians", title: "Parody Comedians", slug: "parody-comedians" },
            //                         { id: "physical-sketch-comedians", title: "Physical Sketch Comedians", slug: "physical-sketch-comedians" },
            //                         { id: "improvisational-sketch-comedians", title: "Improvisational Sketch Comedians", slug: "improvisational-sketch-comedians" },
            //                         { id: "absurdist-sketch-comedians", title: "Absurdist Sketch Comedians", slug: "absurdist-sketch-comedians" },
            //                         { id: "slapstick-comedians", title: "Slapstick Comedians", slug: "slapstick-comedians" },
            //                         { id: "dark-sketch-comedians", title: "Dark Sketch Comedians", slug: "dark-sketch-comedians" },
            //                         { id: "social-commentary-sketch-comedians", title: "Social Commentary Sketch Comedians", slug: "social-commentary-sketch-comedians" },
            //                         { id: "wordplay-wit-comedians", title: "Wordplay and Wit Comedians", slug: "wordplay-wit-comedians" },
            //                         { id: "satirical-news-sketch-comedians", title: "Satirical News Sketch Comedians", slug: "satirical-news-sketch-comedians" },
            //                         { id: "musical-sketch-comedians", title: "Musical Sketch Comedians", slug: "musical-sketch-comedians" },
            //                         { id: "digital-sketch-comedians", title: "Digital Sketch Comedians", slug: "digital-sketch-comedians" },
            //                         { id: "clean-sketch-comedians", title: "Clean Sketch Comedians", slug: "clean-sketch-comedians" },
            //                         { id: "surreal-sketch-comedians", title: "Surreal Sketch Comedians", slug: "surreal-sketch-comedians" },
            //                         { id: "sketch-comedy-duos-ensembles", title: "Sketch Comedy Duos or Ensembles", slug: "sketch-comedy-duos-ensembles" }
            //                     ]
            //                 },
            //                 {
            //                     id: "improv-comedians",
            //                     title: "Improvisational Comedians (Improv)",
            //                     slug: "improvisational-comedians-improv",
            //                     children: [
            //                         { id: "long-form-improv-comedians", title: "Long-Form Improv Comedians", slug: "long-form-improv-comedians" },
            //                         { id: "short-form-improv-comedians", title: "Short-Form Improv Comedians", slug: "short-form-improv-comedians" },
            //                         { id: "musical-improv-comedians", title: "Musical Improv Comedians", slug: "musical-improv-comedians" },
            //                         { id: "improvised-stand-up-comedians", title: "Improvised Stand-Up Comedians", slug: "improvised-stand-up-comedians" },
            //                         { id: "audience-participation-improv-comedians", title: "Audience Participation Improv Comedians", slug: "audience-participation-improv-comedians" },
            //                         { id: "improv-duo-trio-comedians", title: "Improv Duo/Trio Comedians", slug: "improv-duo-trio-comedians" },
            //                         { id: "narrative-improv-comedians", title: "Narrative Improv Comedians", slug: "narrative-improv-comedians" },
            //                         { id: "prop-based-improv-comedians", title: "Prop-Based Improv Comedians", slug: "prop-based-improv-comedians" },
            //                         { id: "physical-improv-comedians", title: "Physical Improv Comedians", slug: "physical-improv-comedians" },
            //                         { id: "emotional-improv-comedians", title: "Emotional Improv Comedians", slug: "emotional-improv-comedians" },
            //                         { id: "observational-improv-comedians", title: "Observational Improv Comedians", slug: "observational-improv-comedians" },
            //                         { id: "satirical-improv-comedians", title: "Satirical Improv Comedians", slug: "satirical-improv-comedians" },
            //                         { id: "improv-teams-ensembles", title: "Improv Teams or Ensembles", slug: "improv-teams-ensembles" },
            //                         { id: "improv-games-comedians", title: "Improv Games Comedians", slug: "improv-games-comedians" },
            //                         { id: "anti-comedy-improv-comedians", title: "Anti-Comedy Improv Comedians", slug: "anti-comedy-improv-comedians" },
            //                         { id: "collaborative-experimental-improv-comedians", title: "Collaborative/Experimental Improv Comedians", slug: "collaborative-experimental-improv-comedians" }
            //                     ]
            //                 },
            //                 {
            //                     id: "comedy-writers",
            //                     title: "Comedy Writers",
            //                     slug: "comedy-writers",
            //                     children: [
            //                         { id: "stand-up-comedy-writers", title: "Stand-Up Comedy Writers", slug: "stand-up-comedy-writers" },
            //                         { id: "sketch-comedy-writers", title: "Sketch Comedy Writers", slug: "sketch-comedy-writers" },
            //                         { id: "sitcom-writers", title: "Sitcom Writers", slug: "sitcom-writers" },
            //                         { id: "tv-show-comedy-writers", title: "TV Show Comedy Writers", slug: "tv-show-comedy-writers" },
            //                         { id: "movie-comedy-writers", title: "Movie Comedy Writers", slug: "movie-comedy-writers" },
            //                         { id: "parody-writers", title: "Parody Writers", slug: "parody-writers" },
            //                         { id: "satirical-comedy-writers", title: "Satirical Comedy Writers", slug: "satirical-comedy-writers" },
            //                         { id: "improv-comedy-writers", title: "Improv Comedy Writers", slug: "improv-comedy-writers" },
            //                         { id: "late-night-comedy-writers", title: "Late-Night Comedy Writers", slug: "late-night-comedy-writers" },
            //                         { id: "stand-up-comedy-special-writers", title: "Stand-Up Comedy Special Writers", slug: "stand-up-comedy-special-writers" },
            //                         { id: "web-series-comedy-writers", title: "Web Series Comedy Writers", slug: "web-series-comedy-writers" },
            //                         { id: "dark-comedy-writers", title: "Dark Comedy Writers", slug: "dark-comedy-writers" },
            //                         { id: "absurdist-comedy-writers", title: "Absurdist Comedy Writers", slug: "absurdist-comedy-writers" },
            //                         { id: "observational-comedy-writers", title: "Observational Comedy Writers", slug: "observational-comedy-writers" },
            //                         { id: "political-comedy-writers", title: "Political Comedy Writers", slug: "political-comedy-writers" },
            //                         { id: "family-friendly-comedy-writers", title: "Family-Friendly Comedy Writers", slug: "family-friendly-comedy-writers" },
            //                         { id: "stand-up-comedy-collaborators", title: "Stand-Up Comedy Collaborators", slug: "stand-up-comedy-collaborators" }
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             id: "magicians-illusionists",
            //             title: "Magicians and Illusionists",
            //             slug: "magicians-illusionists",
            //             children: [
            //                 {
            //                     id: "stage-magicians",
            //                     title: "Stage Magicians",
            //                     slug: "stage-magicians",
            //                     children: [
            //                         { id: "stage-illusionists", title: "Illusionists", slug: "illusionists-stage" },
            //                         { id: "close-up-magicians-stage", title: "Close-Up Magicians", slug: "close-up-magicians-stage" },
            //                         { id: "mentalists-stage", title: "Mentalists", slug: "mentalists-stage" },
            //                         { id: "escape-artists", title: "Escape Artists", slug: "escape-artists" },
            //                         { id: "comedy-magicians", title: "Comedy Magicians", slug: "comedy-magicians" },
            //                         { id: "sleight-of-hand-magicians", title: "Sleight of Hand Magicians", slug: "sleight-of-hand-magicians" },
            //                         { id: "illusion-designers-stage", title: "Illusion Designers", slug: "illusion-designers-stage" },
            //                         { id: "grand-illusionists-stage", title: "Grand Illusionists", slug: "grand-illusionists-stage" },
            //                         { id: "illusionist-mentalist-combos", title: "Illusionist and Mentalist Combos", slug: "illusionist-mentalist-combos" },
            //                         { id: "stage-manipulators", title: "Stage Manipulators", slug: "stage-manipulators" },
            //                         { id: "fire-magicians", title: "Fire Magicians", slug: "fire-magicians" },
            //                         { id: "card-magicians-stage", title: "Card Magicians", slug: "card-magicians-stage" },
            //                         { id: "stage-illusion-with-animals", title: "Stage Illusion Performers with Animals", slug: "stage-illusion-with-animals" },
            //                         { id: "holographic-illusionists-stage", title: "Holographic Illusionists", slug: "holographic-illusionists-stage" },
            //                         { id: "mentalism-illusion-hybrid-stage", title: "Mentalism and Illusion Hybrid Performers", slug: "mentalism-illusion-hybrid-stage" }
            //                     ]
            //                 },
            //                 {
            //                     id: "close-up-magicians",
            //                     title: "Close-Up Magicians",
            //                     slug: "close-up-magicians",
            //                     children: [
            //                         { id: "card-magicians-close-up", title: "Card Magicians", slug: "card-magicians-close-up" },
            //                         { id: "coin-magicians", title: "Coin Magicians", slug: "coin-magicians" },
            //                         { id: "street-magicians", title: "Street Magicians", slug: "street-magicians" },
            //                         { id: "mentalists-close-up", title: "Mentalists", slug: "mentalists-close-up" },
            //                         { id: "sleight-of-hand-magicians-close-up", title: "Sleight-of-Hand Magicians", slug: "sleight-of-hand-magicians-close-up" },
            //                         { id: "rope-magicians", title: "Rope Magicians", slug: "rope-magicians" },
            //                         { id: "ring-magicians", title: "Ring Magicians", slug: "ring-magicians" },
            //                         { id: "watch-jewelry-magicians", title: "Watch and Jewelry Magicians", slug: "watch-jewelry-magicians" },
            //                         { id: "restaurant-magicians", title: "Restaurant Magicians", slug: "restaurant-magicians" },
            //                         { id: "family-magicians", title: "Family Magicians", slug: "family-magicians" },
            //                         { id: "illusionists-close-up", title: "Illusionists in Close-Up Settings", slug: "illusionists-close-up" },
            //                         { id: "corporate-magicians", title: "Corporate Magicians", slug: "corporate-magicians" },
            //                         { id: "bar-pub-magicians", title: "Bar and Pub Magicians", slug: "bar-pub-magicians" },
            //                         { id: "coin-card-manipulators", title: "Coin and Card Manipulators", slug: "coin-card-manipulators" },
            //                         { id: "coin-ball-magicians", title: "Coin and Ball Magicians", slug: "coin-ball-magicians" },
            //                         { id: "close-up-mentalists", title: "Close-Up Mentalists", slug: "close-up-mentalists" }
            //                     ]
            //                 },
            //                 {
            //                     id: "illusionists",
            //                     title: "Illusionists",
            //                     slug: "illusionists",
            //                     children: [
            //                         { id: "stage-illusionists-cat", title: "Stage Illusionists", slug: "stage-illusionists" },
            //                         { id: "escape-illusionists", title: "Escape Illusionists", slug: "escape-illusionists" },
            //                         { id: "mentalist-illusionists", title: "Mentalist Illusionists", slug: "mentalist-illusionists" },
            //                         { id: "close-up-illusionists", title: "Close-Up Illusionists", slug: "close-up-illusionists" },
            //                         { id: "comedy-illusionists", title: "Comedy Illusionists", slug: "comedy-illusionists" },
            //                         { id: "grand-illusionists", title: "Grand Illusionists", slug: "grand-illusionists" },
            //                         { id: "technology-based-illusionists", title: "Technology-Based Illusionists", slug: "technology-based-illusionists" },
            //                         { id: "large-scale-illusion-performers", title: "Large-Scale Illusion Performers", slug: "large-scale-illusion-performers" },
            //                         { id: "levitation-illusionists", title: "Levitation Illusionists", slug: "levitation-illusionists" },
            //                         { id: "escape-illusion-hybrid-performers", title: "Escape and Illusion Hybrid Performers", slug: "escape-illusion-hybrid-performers" },
            //                         { id: "fire-illusionists", title: "Fire Illusionists", slug: "fire-illusionists" },
            //                         { id: "holographic-illusionists", title: "Holographic Illusionists", slug: "holographic-illusionists" },
            //                         { id: "animal-illusionists", title: "Animal Illusionists", slug: "animal-illusionists" },
            //                         { id: "illusion-mentalism-hybrid-performers", title: "Illusion and Mentalism Hybrid Performers", slug: "illusion-mentalism-hybrid-performers" },
            //                         { id: "theatrical-illusionists", title: "Theatrical Illusionists", slug: "theatrical-illusionists" },
            //                         { id: "illusion-designers", title: "Illusion Designers", slug: "illusion-designers" }
            //                     ]
            //                 },
            //                 {
            //                     id: "mentalists",
            //                     title: "Mentalists",
            //                     slug: "mentalists",
            //                     children: [
            //                         { id: "psychological-mentalists", title: "Psychological Mentalists", slug: "psychological-mentalists" },
            //                         { id: "telepathy-mentalists", title: "Telepathy Mentalists", slug: "telepathy-mentalists" },
            //                         { id: "clairvoyant-mentalists", title: "Clairvoyant Mentalists", slug: "clairvoyant-mentalists" },
            //                         { id: "prediction-mentalists", title: "Prediction Mentalists", slug: "prediction-mentalists" },
            //                         { id: "mind-control-mentalists", title: "Mind Control Mentalists", slug: "mind-control-mentalists" },
            //                         { id: "memory-mentalists", title: "Memory Mentalists", slug: "memory-mentalists" },
            //                         { id: "cold-reading-mentalists", title: "Cold Reading Mentalists", slug: "cold-reading-mentalists" },
            //                         { id: "forensic-mentalists", title: "Forensic Mentalists", slug: "forensic-mentalists" },
            //                         { id: "hypnotic-mentalists", title: "Hypnotic Mentalists", slug: "hypnotic-mentalists" },
            //                         { id: "behavioral-mentalists", title: "Behavioral Mentalists", slug: "behavioral-mentalists" },
            //                         { id: "mind-reading-mentalists", title: "Mind Reading Mentalists", slug: "mind-reading-mentalists" },
            //                         { id: "telekinesis-mentalists", title: "Telekinesis Mentalists", slug: "telekinesis-mentalists" },
            //                         { id: "intuitive-mentalists", title: "Intuitive Mentalists", slug: "intuitive-mentalists" },
            //                         { id: "prediction-choice-mentalists", title: "Prediction and Choice Mentalists", slug: "prediction-choice-mentalists" },
            //                         { id: "stage-mentalists", title: "Stage Mentalists", slug: "stage-mentalists" }
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             id: "circus-performers",
            //             title: "Circus Performers",
            //             slug: "circus-performers",
            //             children: [
            //                 {
            //                     id: "acrobats",
            //                     title: "Acrobats",
            //                     slug: "acrobats",
            //                     children: [
            //                         {
            //                             id: "aerial-acrobats",
            //                             title: "Aerial Acrobats",
            //                             slug: "aerial-acrobats",
            //                             children: [
            //                                 { id: "flying-trapeze-artists", title: "The Flying Trapeze Artists", slug: "flying-trapeze-artists" },
            //                                 { id: "cirque-du-soleil-performers", title: "Cirque du Soleil Performers", slug: "cirque-du-soleil-performers" }
            //                             ]
            //                         },
            //                         {
            //                             id: "trampoline-acrobats",
            //                             title: "Trampoline Acrobats",
            //                             slug: "trampoline-acrobats",
            //                             children: [
            //                                 { id: "flying-trampolines-act", title: "The Flying Trampolines Act", slug: "flying-trampolines-act" },
            //                                 { id: "trampoline-acts-magic-shows", title: "Trampoline Acts in Magic Shows", slug: "trampoline-acts-magic-shows" }
            //                             ]
            //                         },
            //                         {
            //                             id: "hand-to-hand-acrobats",
            //                             title: "Hand-to-Hand Acrobats",
            //                             slug: "hand-to-hand-acrobats",
            //                             children: [
            //                                 { id: "human-pyramids", title: "Human Pyramids", slug: "human-pyramids" },
            //                                 { id: "partner-hand-balancing", title: "Partner Hand Balancing", slug: "partner-hand-balancing" }
            //                             ]
            //                         },
            //                         {
            //                             id: "contortionists",
            //                             title: "Contortionists",
            //                             slug: "contortionists",
            //                             children: [
            //                                 { id: "escape-acts-contortion", title: "Escape Acts with Contortion", slug: "escape-acts-contortion" },
            //                                 { id: "contortion-magic-performances", title: "Contortion in Magic Performances", slug: "contortion-magic-performances" }
            //                             ]
            //                         },
            //                         {
            //                             id: "human-cannonball-acts",
            //                             title: "Human Cannonball Acts",
            //                             slug: "human-cannonball-acts",
            //                             children: [
            //                                 { id: "human-cannonball-circus", title: "Human Cannonball Acts in Circus Performances", slug: "human-cannonball-circus-performances" },
            //                                 { id: "magicians-illusionists-cannonball", title: "Magicians and Illusionists Incorporating the Act", slug: "magicians-illusionists-cannonball-act" }
            //                             ]
            //                         },
            //                         {
            //                             id: "juggling-acrobats",
            //                             title: "Juggling Acrobats",
            //                             slug: "juggling-acrobats",
            //                             children: [
            //                                 { id: "juggling-fire-objects", title: "Juggling with Fire or Other Objects", slug: "juggling-fire-objects" },
            //                                 { id: "multitasking-illusion-acts", title: "Multitasking Illusion Acts", slug: "multitasking-illusion-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "clown-acrobats",
            //                             title: "Clown Acrobats",
            //                             slug: "clown-acrobats",
            //                             children: [
            //                                 { id: "physical-comedy-illusions", title: "Physical Comedy in Illusions", slug: "physical-comedy-illusions" },
            //                                 { id: "humorous-aerial-hand-balance-acts", title: "Humorous Aerial or Hand Balance Acts", slug: "humorous-aerial-hand-balance-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "acrobatic-illusionists",
            //                             title: "Acrobatic Illusionists",
            //                             slug: "acrobatic-illusionists",
            //                             children: [
            //                                 { id: "copperfield-aerial-acts", title: "David Copperfield's Aerial Acts", slug: "copperfield-aerial-acts" },
            //                                 { id: "cirque-du-soleil-acrobatic", title: "Cirque du Soleil", slug: "cirque-du-soleil-acrobatic" }
            //                             ]
            //                         },
            //                         {
            //                             id: "acrobatic-escape-artists",
            //                             title: "Acrobatic Escape Artists",
            //                             slug: "acrobatic-escape-artists"
            //                         },
            //                         {
            //                             id: "flying-acts",
            //                             title: "Flying Acts",
            //                             slug: "flying-acts",
            //                             children: [
            //                                 { id: "flying-aerial-acts-magic-shows", title: "Flying Aerial Acts in Magic Shows", slug: "flying-aerial-acts-magic-shows" },
            //                                 { id: "flying-act-magical-theater", title: "The Flying Act in Magical Theater", slug: "flying-act-magical-theater" }
            //                             ]
            //                         },
            //                         {
            //                             id: "human-ladders-tower-acts",
            //                             title: "Human Ladders and Tower Acts",
            //                             slug: "human-ladders-tower-acts",
            //                             children: [
            //                                 { id: "human-tower-acts", title: "Human Tower Acts", slug: "human-tower-acts" },
            //                                 { id: "balance-acts", title: "Balance Acts", slug: "balance-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "balancing-acrobats",
            //                             title: "Balancing Acrobats",
            //                             slug: "balancing-acrobats",
            //                             children: [
            //                                 { id: "pole-balancing-acts", title: "Pole Balancing Acts", slug: "pole-balancing-acts" },
            //                                 { id: "balance-escape-acts", title: "Balance and Escape Acts", slug: "balance-escape-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "human-cannonball",
            //                             title: "Human Cannonball",
            //                             slug: "human-cannonball",
            //                             children: [
            //                                 { id: "human-cannonball-acts", title: "Human Cannonball Acts", slug: "human-cannonball-acts-sub" },
            //                                 { id: "illusion-of-disappearance", title: "Illusion of Disappearance", slug: "illusion-of-disappearance" }
            //                             ]
            //                         },
            //                         {
            //                             id: "duo-acrobatic-acts",
            //                             title: "Duo Acrobatic Acts",
            //                             slug: "duo-acrobatic-acts",
            //                             children: [
            //                                 { id: "duo-hand-balancing", title: "Duo Hand Balancing", slug: "duo-hand-balancing" },
            //                                 { id: "acrobatic-partner-acts", title: "Acrobatic Partner Acts", slug: "acrobatic-partner-acts" }
            //                             ]
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     id: "clowns",
            //                     title: "Clowns",
            //                     slug: "clowns",
            //                     children: [
            //                         {
            //                             id: "whiteface-clowns",
            //                             title: "Whiteface Clowns",
            //                             slug: "whiteface-clowns",
            //                             children: [
            //                                 { id: "classic-whiteface", title: "Classic Whiteface", slug: "classic-whiteface" },
            //                                 { id: "traditional-circus-whiteface", title: "Traditional Circus Whiteface", slug: "traditional-circus-whiteface" }
            //                             ]
            //                         },
            //                         {
            //                             id: "auguste-clowns",
            //                             title: "Auguste Clowns",
            //                             slug: "auguste-clowns",
            //                             children: [
            //                                 { id: "traditional-auguste-clown", title: "Traditional Auguste Clown", slug: "traditional-auguste-clown" },
            //                                 { id: "fool-sidekick-clown", title: "The Fool or Sidekick", slug: "fool-sidekick-clown" }
            //                             ]
            //                         },
            //                         {
            //                             id: "character-clowns",
            //                             title: "Character Clowns",
            //                             slug: "character-clowns",
            //                             children: [
            //                                 { id: "hobo-clown", title: "Hobo Clown", slug: "hobo-clown" },
            //                                 { id: "business-clown", title: "Business Clown", slug: "business-clown" },
            //                                 { id: "animal-clown", title: "Animal Clown", slug: "animal-clown" }
            //                             ]
            //                         },
            //                         {
            //                             id: "tramp-clowns",
            //                             title: "Tramp Clowns",
            //                             slug: "tramp-clowns",
            //                             children: [
            //                                 { id: "chaplin-like-clown", title: "Charlie Chaplin-like Clown", slug: "chaplin-like-clown" },
            //                                 { id: "sad-clown-tramp", title: "Sad Clown", slug: "sad-clown-tramp" }
            //                             ]
            //                         },
            //                         {
            //                             id: "slapstick-bozo-clowns",
            //                             title: "Slapstick or Bozo Clowns",
            //                             slug: "slapstick-bozo-clowns",
            //                             children: [
            //                                 { id: "bozo-the-clown", title: "Bozo the Clown", slug: "bozo-the-clown" },
            //                                 { id: "pie-in-face-clown", title: "Pie-in-the-Face Clown", slug: "pie-in-face-clown" }
            //                             ]
            //                         },
            //                         {
            //                             id: "sad-clowns",
            //                             title: "Sad Clowns",
            //                             slug: "sad-clowns",
            //                             children: [
            //                                 { id: "tragic-clown", title: "The Tragic Clown", slug: "tragic-clown" },
            //                                 { id: "sad-comic-clown", title: "Sad Comic", slug: "sad-comic-clown" }
            //                             ]
            //                         },
            //                         {
            //                             id: "ringmaster-clowns",
            //                             title: "Ringmaster Clowns",
            //                             slug: "ringmaster-clowns",
            //                             children: [
            //                                 { id: "clown-ringmaster", title: "Clown Ringmaster", slug: "clown-ringmaster" },
            //                                 { id: "comedic-mc-clown", title: "Comedic MC", slug: "comedic-mc-clown" }
            //                             ]
            //                         },
            //                         {
            //                             id: "fool-buffoon-clowns",
            //                             title: "Fool or Buffoon Clowns",
            //                             slug: "fool-buffoon-clowns",
            //                             children: [
            //                                 { id: "the-buffoon", title: "The Buffoon", slug: "the-buffoon" },
            //                                 { id: "the-jester", title: "The Jester", slug: "the-jester" }
            //                             ]
            //                         },
            //                         {
            //                             id: "acrobatic-athletic-clowns",
            //                             title: "Acrobatic or Athletic Clowns",
            //                             slug: "acrobatic-athletic-clowns",
            //                             children: [
            //                                 { id: "clown-acrobat", title: "Clown Acrobat", slug: "clown-acrobat" },
            //                                 { id: "juggling-clown", title: "Juggling Clown", slug: "juggling-clown" }
            //                             ]
            //                         },
            //                         {
            //                             id: "invisible-clowns",
            //                             title: "Invisible Clowns",
            //                             slug: "invisible-clowns",
            //                             children: [
            //                                 { id: "invisible-box-clown", title: "Invisible Box Clown", slug: "invisible-box-clown" },
            //                                 { id: "mimed-clown-acts", title: "Mimed Clown Acts", slug: "mimed-clown-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "mime-clowns",
            //                             title: "Mime Clowns",
            //                             slug: "mime-clowns",
            //                             children: [
            //                                 { id: "silent-comic-clown", title: "Silent Comic", slug: "silent-comic-clown" },
            //                                 { id: "pantomime-clown", title: "Pantomime Clown", slug: "pantomime-clown" }
            //                             ]
            //                         },
            //                         {
            //                             id: "family-clowns",
            //                             title: "Family Clowns",
            //                             slug: "family-clowns",
            //                             children: [
            //                                 { id: "birthday-party-clowns", title: "Birthday Party Clowns", slug: "birthday-party-clowns" },
            //                                 { id: "childrens-circus-clowns", title: "Children's Circus Clowns", slug: "childrens-circus-clowns" }
            //                             ]
            //                         },
            //                         {
            //                             id: "geek-clowns",
            //                             title: "Geek Clowns",
            //                             slug: "geek-clowns",
            //                             children: [
            //                                 { id: "strange-eccentric-clown", title: "Strange and Eccentric Clown", slug: "strange-eccentric-clown" },
            //                                 { id: "bizarre-act-clown", title: "Bizarre Act Clown", slug: "bizarre-act-clown" }
            //                             ]
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     id: "trapeze-artists",
            //                     title: "Trapeze Artists",
            //                     slug: "trapeze-artists",
            //                     children: [
            //                         {
            //                             id: "high-flying-trapeze-artists",
            //                             title: "High-Flying Trapeze Artists",
            //                             slug: "high-flying-trapeze-artists",
            //                             children: [
            //                                 { id: "catchers-and-flyers", title: "Catchers and Flyers", slug: "catchers-and-flyers" },
            //                                 { id: "solo-high-flying-acts", title: "Solo High-Flying Acts", slug: "solo-high-flying-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "double-trapeze-artists",
            //                             title: "Double Trapeze Artists",
            //                             slug: "double-trapeze-artists",
            //                             children: [
            //                                 { id: "aerial-duo-trapeze", title: "Aerial Duo", slug: "aerial-duo-trapeze" },
            //                                 { id: "partner-swings", title: "Partner Swings", slug: "partner-swings" }
            //                             ]
            //                         },
            //                         {
            //                             id: "flying-trapeze-artists",
            //                             title: "Flying Trapeze Artists",
            //                             slug: "flying-trapeze-artists-cat",
            //                             children: [
            //                                 { id: "flying-through-the-air", title: "Flying through the Air", slug: "flying-through-the-air" },
            //                                 { id: "single-multiple-catches", title: "Single or Multiple Catches", slug: "single-multiple-catches" }
            //                             ]
            //                         },
            //                         {
            //                             id: "swinging-trapeze-artists",
            //                             title: "Swinging Trapeze Artists",
            //                             slug: "swinging-trapeze-artists",
            //                             children: [
            //                                 { id: "solo-swinging-act", title: "Solo Swinging Act", slug: "solo-swinging-act" },
            //                                 { id: "aerial-dismounts", title: "Aerial Dismounts", slug: "aerial-dismounts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "static-trapeze-artists",
            //                             title: "Static Trapeze Artists",
            //                             slug: "static-trapeze-artists",
            //                             children: [
            //                                 { id: "aerial-silks-static-trapeze", title: "Aerial Silks and Static Trapeze", slug: "aerial-silks-static-trapeze" },
            //                                 { id: "strength-flexibility-acts", title: "Strength and Flexibility Acts", slug: "strength-flexibility-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "trapeze-contortionists",
            //                             title: "Trapeze Contortionists",
            //                             slug: "trapeze-contortionists",
            //                             children: [
            //                                 { id: "contorted-aerial-poses", title: "Contorted Aerial Poses", slug: "contorted-aerial-poses" },
            //                                 { id: "flexible-holds", title: "Flexible Holds", slug: "flexible-holds" }
            //                             ]
            //                         },
            //                         {
            //                             id: "hand-to-hand-trapeze-artists",
            //                             title: "Hand-to-Hand Trapeze Artists",
            //                             slug: "hand-to-hand-trapeze-artists",
            //                             children: [
            //                                 { id: "partner-lifts-balances", title: "Partner Lifts and Balances", slug: "partner-lifts-balances" },
            //                                 { id: "acrobatic-lifting-acts", title: "Acrobatic Lifting Acts", slug: "acrobatic-lifting-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "aerial-trapeze-with-props",
            //                             title: "Aerial Trapeze Artists with Props",
            //                             slug: "aerial-trapeze-with-props",
            //                             children: [
            //                                 { id: "fire-trapeze-acts", title: "Fire and Trapeze Acts", slug: "fire-trapeze-acts" },
            //                                 { id: "hoop-trapeze-combinations", title: "Hoop and Trapeze Combinations", slug: "hoop-trapeze-combinations" }
            //                             ]
            //                         },
            //                         {
            //                             id: "solo-trapeze-artists",
            //                             title: "Solo Trapeze Artists",
            //                             slug: "solo-trapeze-artists",
            //                             children: [
            //                                 { id: "single-performer-swings", title: "Single Performer Swings", slug: "single-performer-swings" },
            //                                 { id: "solo-flight-trapeze", title: "Solo Flight", slug: "solo-flight-trapeze" }
            //                             ]
            //                         },
            //                         {
            //                             id: "aerial-duo-trapeze-acts",
            //                             title: "Aerial Duo Acts (with Trapeze)",
            //                             slug: "aerial-duo-trapeze-acts",
            //                             children: [
            //                                 { id: "aerial-trapeze-syncing", title: "Aerial Trapeze Syncing", slug: "aerial-trapeze-syncing" },
            //                                 { id: "aerial-dismounts-partner-switches", title: "Aerial Dismounts and Partner Switches", slug: "aerial-dismounts-partner-switches" }
            //                             ]
            //                         },
            //                         {
            //                             id: "trapeze-aerialists-acrobatics",
            //                             title: "Trapeze Aerialists with Acrobatics",
            //                             slug: "trapeze-aerialists-acrobatics",
            //                             children: [
            //                                 { id: "aerial-somersaults-twists", title: "Aerial Somersaults and Twists", slug: "aerial-somersaults-twists" },
            //                                 { id: "flipping-catches", title: "Flipping Catches", slug: "flipping-catches" }
            //                             ]
            //                         },
            //                         {
            //                             id: "trapeze-with-flying-ropes",
            //                             title: "Trapeze Performers with Flying Ropes",
            //                             slug: "trapeze-with-flying-ropes",
            //                             children: [
            //                                 { id: "flying-rope-act", title: "Flying Rope Act", slug: "flying-rope-act" },
            //                                 { id: "rope-trapeze-coordination", title: "Rope and Trapeze Coordination", slug: "rope-trapeze-coordination" }
            //                             ]
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     id: "animal-trainers-performers",
            //                     title: "Animal Trainers and Performers",
            //                     slug: "animal-trainers-performers",
            //                     children: [
            //                         {
            //                             id: "big-cat-trainers",
            //                             title: "Big Cat Trainers and Performers",
            //                             slug: "big-cat-trainers",
            //                             children: [
            //                                 { id: "lion-tiger-acts", title: "Lion and Tiger Acts", slug: "lion-tiger-acts" },
            //                                 { id: "wild-cat-shows", title: "Wild Cat Shows", slug: "wild-cat-shows" }
            //                             ]
            //                         },
            //                         {
            //                             id: "elephant-trainers",
            //                             title: "Elephant Trainers and Performers",
            //                             slug: "elephant-trainers",
            //                             children: [
            //                                 { id: "elephant-acrobatics", title: "Elephant Acrobatics", slug: "elephant-acrobatics" },
            //                                 { id: "elephant-shows", title: "Elephant Shows", slug: "elephant-shows" }
            //                             ]
            //                         },
            //                         {
            //                             id: "horse-trainers",
            //                             title: "Horse Trainers and Performers",
            //                             slug: "horse-trainers",
            //                             children: [
            //                                 { id: "horseback-acrobatics", title: "Horseback Acrobatics", slug: "horseback-acrobatics" },
            //                                 { id: "liberty-horse-acts", title: "Liberty Horse Acts", slug: "liberty-horse-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "dog-trainers",
            //                             title: "Dog Trainers and Performers",
            //                             slug: "dog-trainers",
            //                             children: [
            //                                 { id: "canine-agility-routines", title: "Canine Agility Routines", slug: "canine-agility-routines" },
            //                                 { id: "dog-handler-acts", title: "Dog and Handler Acts", slug: "dog-handler-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "bird-trainers",
            //                             title: "Birds Trainers and Performers",
            //                             slug: "bird-trainers",
            //                             children: [
            //                                 { id: "falconry-acts", title: "Falconry Acts", slug: "falconry-acts" },
            //                                 { id: "parrot-exotic-bird-acts", title: "Parrot and Exotic Bird Acts", slug: "parrot-exotic-bird-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "monkey-trainers",
            //                             title: "Monkey Trainers and Performers",
            //                             slug: "monkey-trainers",
            //                             children: [
            //                                 { id: "chimpanzee-acts", title: "Chimpanzee Acts", slug: "chimpanzee-acts" },
            //                                 { id: "ape-acrobatics", title: "Ape Acrobatics", slug: "ape-acrobatics" }
            //                             ]
            //                         },
            //                         {
            //                             id: "seal-sea-lion-trainers",
            //                             title: "Seal and Sea Lion Trainers and Performers",
            //                             slug: "seal-sea-lion-trainers",
            //                             children: [
            //                                 { id: "sea-lion-acts", title: "Sea Lion Acts", slug: "sea-lion-acts" },
            //                                 { id: "seal-performances", title: "Seal Performances", slug: "seal-performances" }
            //                             ]
            //                         },
            //                         {
            //                             id: "camel-trainers",
            //                             title: "Camel Trainers and Performers",
            //                             slug: "camel-trainers",
            //                             children: [
            //                                 { id: "camel-parades", title: "Camel Parades", slug: "camel-parades" },
            //                                 { id: "camel-trick-acts", title: "Camel Trick Acts", slug: "camel-trick-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "exotic-animal-trainers",
            //                             title: "Exotic Animal Trainers and Performers",
            //                             slug: "exotic-animal-trainers",
            //                             children: [
            //                                 { id: "zebra-acts", title: "Zebra Acts", slug: "zebra-acts" },
            //                                 { id: "reptile-shows", title: "Reptile Shows", slug: "reptile-shows" }
            //                             ]
            //                         },
            //                         {
            //                             id: "trained-animal-acts",
            //                             title: "Trained Animal Acts (General Performers)",
            //                             slug: "trained-animal-acts",
            //                             children: [
            //                                 { id: "multi-animal-acts", title: "Multi-Animal Acts", slug: "multi-animal-acts" },
            //                                 { id: "animal-circus-acts", title: "Animal Circus Acts", slug: "animal-circus-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "aerial-animal-acts",
            //                             title: "Aerial Animal Acts",
            //                             slug: "aerial-animal-acts",
            //                             children: [
            //                                 { id: "aerial-bird-acts", title: "Aerial Bird Acts", slug: "aerial-bird-acts" },
            //                                 { id: "monkey-flying-acts", title: "Monkey Flying Acts", slug: "monkey-flying-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "human-animal-collaboration-acts",
            //                             title: "Human-Animal Collaboration Acts",
            //                             slug: "human-animal-collaboration-acts",
            //                             children: [
            //                                 { id: "animal-trainer-skits", title: "Animal and Trainer Skits", slug: "animal-trainer-skits" },
            //                                 { id: "animal-ballets", title: "Animal Ballets", slug: "animal-ballets" }
            //                             ]
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     id: "jugglers-fire-eaters",
            //                     title: "Jugglers and Fire-Eaters",
            //                     slug: "jugglers-fire-eaters",
            //                     children: [
            //                         {
            //                             id: "ball-jugglers",
            //                             title: "Ball Jugglers",
            //                             slug: "ball-jugglers",
            //                             children: [
            //                                 { id: "solo-ball-juggling", title: "Solo Ball Juggling", slug: "solo-ball-juggling" },
            //                                 { id: "multiple-ball-juggling", title: "Multiple Ball Juggling", slug: "multiple-ball-juggling" }
            //                             ]
            //                         },
            //                         {
            //                             id: "ring-jugglers",
            //                             title: "Ring Jugglers",
            //                             slug: "ring-jugglers",
            //                             children: [
            //                                 { id: "ring-juggling-routines", title: "Ring Juggling Routines", slug: "ring-juggling-routines" },
            //                                 { id: "double-ring-juggling", title: "Double Ring Juggling", slug: "double-ring-juggling" }
            //                             ]
            //                         },
            //                         {
            //                             id: "club-jugglers",
            //                             title: "Club Jugglers",
            //                             slug: "club-jugglers",
            //                             children: [
            //                                 { id: "solo-club-juggling", title: "Solo Club Juggling", slug: "solo-club-juggling" },
            //                                 { id: "passing-clubs", title: "Passing Clubs", slug: "passing-clubs" }
            //                             ]
            //                         },
            //                         {
            //                             id: "knife-jugglers",
            //                             title: "Knife Jugglers",
            //                             slug: "knife-jugglers",
            //                             children: [
            //                                 { id: "knife-juggling-precision", title: "Knife Juggling with Precision", slug: "knife-juggling-precision" },
            //                                 { id: "knife-passing-acts", title: "Knife Passing Acts", slug: "knife-passing-acts" }
            //                             ]
            //                         },
            //                         {
            //                             id: "fire-jugglers",
            //                             title: "Fire Jugglers",
            //                             slug: "fire-jugglers",
            //                             children: [
            //                                 { id: "flaming-torch-juggling", title: "Flaming Torch Juggling", slug: "flaming-torch-juggling" },
            //                                 { id: "multiple-fire-props", title: "Multiple Fire Props", slug: "multiple-fire-props" }
            //                             ]
            //                         },
            //                         {
            //                             id: "fire-eaters",
            //                             title: "Fire Eaters",
            //                             slug: "fire-eaters",
            //                             children: [
            //                                 { id: "traditional-fire-eating", title: "Traditional Fire Eating", slug: "traditional-fire-eating" },
            //                                 { id: "fire-breathing", title: "Fire Breathing", slug: "fire-breathing" }
            //                             ]
            //                         },
            //                         {
            //                             id: "fire-juggling",
            //                             title: "Fire Juggling",
            //                             slug: "fire-juggling",
            //                             children: [
            //                                 { id: "fire-poi-juggling", title: "Fire Poi Juggling", slug: "fire-poi-juggling" },
            //                                 { id: "flame-staff-juggling", title: "Flame Staff Juggling", slug: "flame-staff-juggling" }
            //                             ]
            //                         },
            //                         {
            //                             id: "object-manipulation-diabolo",
            //                             title: "Object Manipulation and Diabolo",
            //                             slug: "object-manipulation-diabolo",
            //                             children: [
            //                                 { id: "diabolo-chinese-yoyo", title: "Diabolo (Chinese Yo-Yo)", slug: "diabolo-chinese-yoyo" },
            //                                 { id: "hoop-manipulation", title: "Hoop Manipulation", slug: "hoop-manipulation" }
            //                             ]
            //                         },
            //                         {
            //                             id: "contact-juggling",
            //                             title: "Contact Juggling",
            //                             slug: "contact-juggling",
            //                             children: [
            //                                 { id: "crystal-ball-manipulation", title: "Crystal Ball Manipulation", slug: "crystal-ball-manipulation" },
            //                                 { id: "body-rolling", title: "Body Rolling", slug: "body-rolling" }
            //                             ]
            //                         },
            //                         {
            //                             id: "baton-twirlers",
            //                             title: "Baton Twirlers",
            //                             slug: "baton-twirlers",
            //                             children: [
            //                                 { id: "baton-spinning", title: "Baton Spinning", slug: "baton-spinning" },
            //                                 { id: "synchronized-baton-passing", title: "Synchronized Baton Passing", slug: "synchronized-baton-passing" }
            //                             ]
            //                         },
            //                         {
            //                             id: "umbrella-jugglers",
            //                             title: "Umbrella Jugglers",
            //                             slug: "umbrella-jugglers",
            //                             children: [
            //                                 { id: "umbrella-tossing", title: "Umbrella Tossing", slug: "umbrella-tossing" },
            //                                 { id: "umbrella-balance-spin", title: "Balance and Spin", slug: "umbrella-balance-spin" }
            //                             ]
            //                         },
            //                         {
            //                             id: "cigar-box-juggling",
            //                             title: "Cigar Box Juggling",
            //                             slug: "cigar-box-juggling",
            //                             children: [
            //                                 { id: "cigar-box-manipulation", title: "Cigar Box Manipulation", slug: "cigar-box-manipulation" },
            //                                 { id: "box-passing", title: "Box Passing", slug: "box-passing" }
            //                             ]
            //                         },
            //                         {
            //                             id: "spinning-twirling-performers",
            //                             title: "Spinning and Twirling Performers",
            //                             slug: "spinning-twirling-performers",
            //                             children: [
            //                                 { id: "plate-spinning", title: "Plate Spinning", slug: "plate-spinning" },
            //                                 { id: "ribbon-twirling", title: "Ribbon Twirling", slug: "ribbon-twirling" }
            //                             ]
            //                         },
            //                         {
            //                             id: "fire-poi-performers",
            //                             title: "Fire Poi Performers",
            //                             slug: "fire-poi-performers",
            //                             children: [
            //                                 { id: "fire-poi-circles", title: "Fire Poi Circles", slug: "fire-poi-circles" },
            //                                 { id: "fire-poi-weaving", title: "Fire Poi Weaving", slug: "fire-poi-weaving" }
            //                             ]
            //                         },
            //                         {
            //                             id: "contact-fire-juggling",
            //                             title: "Contact Fire Juggling",
            //                             slug: "contact-fire-juggling",
            //                             children: [
            //                                 { id: "flame-staff-manipulation", title: "Flame Staff Manipulation", slug: "flame-staff-manipulation" },
            //                                 { id: "flame-poi-contact", title: "Flame Poi Contact", slug: "flame-poi-contact" }
            //                             ]
            //                         }
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             id: "performance-artists",
            //             title: "Performance Artists",
            //             slug: "performance-artists",
            //             children: [
            //                 { id: "theater-performance-artists", title: "Theater Performance Artists", slug: "theater-performance-artists" },
            //                 { id: "live-art-performers", title: "Live Art Performers", slug: "live-art-performers" },
            //                 { id: "interdisciplinary-artists", title: "Interdisciplinary Artists", slug: "interdisciplinary-artists" }
            //             ]
            //         },
            //         {
            //             id: "speakers-hosts",
            //             title: "Speakers and Hosts",
            //             slug: "speakers-hosts",
            //             children: [
            //                 { id: "motivational-speakers", title: "Motivational Speakers", slug: "motivational-speakers" },
            //                 { id: "corporate-speakers", title: "Corporate Speakers", slug: "corporate-speakers" },
            //                 { id: "event-hosts", title: "Event Hosts", slug: "event-hosts" },
            //                 { id: "talk-show-hosts", title: "Talk Show Hosts", slug: "talk-show-hosts" }
            //             ]
            //         },
            //         {
            //             id: "opera-performers",
            //             title: "Opera Performers",
            //             slug: "opera-performers",
            //             children: [
            //                 { id: "opera-singers", title: "Opera Singers", slug: "opera-singers" },
            //                 { id: "opera-conductors", title: "Opera Conductors", slug: "opera-conductors" },
            //                 { id: "opera-orchestras", title: "Opera Orchestras", slug: "opera-orchestras" }
            //             ]
            //         },
            //         {
            //             id: "musical-theater-artists",
            //             title: "Musical Theater Artists",
            //             slug: "musical-theater-artists",
            //             children: [
            //                 { id: "broadway-performers", title: "Broadway Performers", slug: "broadway-performers" },
            //                 { id: "west-end-performers", title: "West End Performers", slug: "west-end-performers" },
            //                 { id: "touring-casts", title: "Touring Casts", slug: "touring-casts" },
            //                 { id: "choreographers", title: "Choreographers", slug: "choreographers" }
            //             ]
            //         },
            //         {
            //             id: "street-performers-buskers",
            //             title: "Street Performers (Buskers)",
            //             slug: "street-performers-buskers",
            //             children: [
            //                 { id: "musical-buskers", title: "Musical Buskers", slug: "musical-buskers" },
            //                 { id: "pantomime-artists", title: "Pantomime Artists", slug: "pantomime-artists" },
            //                 { id: "living-statues", title: "Living Statues", slug: "living-statues" },
            //                 { id: "jugglers-acrobats-buskers", title: "Jugglers and Acrobats", slug: "jugglers-acrobats-buskers" }
            //             ]
            //         },
            //         {
            //             id: "voice-performers-spoken-word-poetry",
            //             title: "Voice Performers (Spoken Word & Poetry)",
            //             slug: "voice-performers-spoken-word-poetry",
            //             children: [
            //                 { id: "spoken-word-artists", title: "Spoken Word Artists", slug: "spoken-word-artists" },
            //                 { id: "storytellers", title: "Storytellers", slug: "storytellers" },
            //                 { id: "poetry-slam-performers", title: "Poetry Slam Performers", slug: "poetry-slam-performers" }
            //             ]
            //         },
            //         {
            //             id: "novelists",
            //             title: "Novelists",
            //             slug: "novelists",
            //             children: [
            //                 { id: "literary-fiction-writers", title: "Literary Fiction Writers", slug: "literary-fiction-writers" },
            //                 { id: "genre-fiction-writers", title: "Genre Fiction Writers", slug: "genre-fiction-writers" },
            //                 { id: "historical-fiction-writers", title: "Historical Fiction Writers", slug: "historical-fiction-writers" },
            //                 { id: "young-adult-novelists", title: "Young Adult (YA) Novelists", slug: "young-adult-novelists" },
            //                 { id: "childrens-book-authors", title: "Children's Book Authors", slug: "childrens-book-authors" }
            //             ]
            //         },
            //         {
            //             id: "poets",
            //             title: "Poets",
            //             slug: "poets",
            //             children: [
            //                 { id: "contemporary-poets", title: "Contemporary Poets", slug: "contemporary-poets" },
            //                 { id: "classic-poets", title: "Classic Poets", slug: "classic-poets" },
            //                 { id: "spoken-word-poets", title: "Spoken Word Poets", slug: "spoken-word-poets" },
            //                 { id: "experimental-poets", title: "Experimental Poets", slug: "experimental-poets" },
            //                 { id: "lyric-poets", title: "Lyric Poets", slug: "lyric-poets" },
            //                 { id: "epic-poets", title: "Epic Poets", slug: "epic-poets" },
            //                 { id: "narrative-poets", title: "Narrative Poets", slug: "narrative-poets" },
            //                 { id: "dramatic-poets", title: "Dramatic Poets", slug: "dramatic-poets" },
            //                 { id: "sonnet-poets", title: "Sonnet Poets", slug: "sonnet-poets" },
            //                 { id: "confessional-poets", title: "Confessional Poets", slug: "confessional-poets" },
            //                 { id: "beat-poets", title: "Beat Poets", slug: "beat-poets" },
            //                 { id: "modernist-poets", title: "Modernist Poets", slug: "modernist-poets" },
            //                 { id: "surrealist-poets", title: "Surrealist Poets", slug: "surrealist-poets" },
            //                 { id: "haiku-poets", title: "Haiku Poets", slug: "haiku-poets" },
            //                 { id: "free-verse-poets", title: "Free Verse Poets", slug: "free-verse-poets" },
            //                 { id: "feminist-poets", title: "Feminist Poets", slug: "feminist-poets" },
            //                 { id: "political-poets", title: "Political Poets", slug: "political-poets" },
            //                 { id: "nature-poets", title: "Nature Poets", slug: "nature-poets" },
            //                 { id: "postmodern-poets", title: "Postmodern Poets", slug: "postmodern-poets" }
            //             ]
            //         },
            //         {
            //             id: "screenwriters",
            //             title: "Screenwriters",
            //             slug: "screenwriters",
            //             children: [
            //                 { id: "feature-film-screenwriters", title: "Feature Film Screenwriters", slug: "feature-film-screenwriters" },
            //                 { id: "television-screenwriters", title: "Television Screenwriters", slug: "television-screenwriters" },
            //                 { id: "adaptation-screenwriters", title: "Adaptation Screenwriters", slug: "adaptation-screenwriters" },
            //                 { id: "genre-specific-screenwriters", title: "Genre-Specific Screenwriters", slug: "genre-specific-screenwriters" },
            //                 { id: "spec-script-writers", title: "Spec Script Writers", slug: "spec-script-writers" },
            //                 { id: "script-doctors", title: "Script Doctors", slug: "script-doctors" },
            //                 { id: "dialogue-writers-screenwriting", title: "Dialogue Writers", slug: "dialogue-writers-screenwriting" },
            //                 { id: "documentary-screenwriters", title: "Documentary Screenwriters", slug: "documentary-screenwriters" },
            //                 { id: "action-screenwriters", title: "Action Screenwriters", slug: "action-screenwriters" },
            //                 { id: "comedy-screenwriters", title: "Comedy Screenwriters", slug: "comedy-screenwriters" },
            //                 { id: "romantic-comedy-screenwriters", title: "Romantic Comedy Screenwriters", slug: "romantic-comedy-screenwriters" },
            //                 { id: "animated-screenwriters", title: "Animated Screenwriters", slug: "animated-screenwriters" },
            //                 { id: "experimental-screenwriters", title: "Experimental Screenwriters", slug: "experimental-screenwriters" },
            //                 { id: "historical-screenwriters", title: "Historical Screenwriters", slug: "historical-screenwriters" },
            //                 { id: "sci-fi-fantasy-screenwriters", title: "Sci-Fi/Fantasy Screenwriters", slug: "sci-fi-fantasy-screenwriters" }
            //             ]
            //         },
            //         {
            //             id: "playwrights",
            //             title: "Playwrights",
            //             slug: "playwrights",
            //             children: [
            //                 { id: "tragedy-playwrights", title: "Tragedy Playwrights", slug: "tragedy-playwrights" },
            //                 { id: "comedy-playwrights", title: "Comedy Playwrights", slug: "comedy-playwrights" },
            //                 { id: "tragicomedy-playwrights", title: "Tragicomedy Playwrights", slug: "tragicomedy-playwrights" },
            //                 { id: "modern-playwrights", title: "Modern Playwrights", slug: "modern-playwrights" },
            //                 { id: "experimental-playwrights", title: "Experimental Playwrights", slug: "experimental-playwrights" },
            //                 { id: "musical-playwrights", title: "Musical Playwrights", slug: "musical-playwrights" },
            //                 { id: "political-playwrights", title: "Political Playwrights", slug: "political-playwrights" },
            //                 { id: "historical-playwrights", title: "Historical Playwrights", slug: "historical-playwrights" },
            //                 { id: "absurdist-playwrights", title: "Absurdist Playwrights", slug: "absurdist-playwrights" },
            //                 { id: "romantic-playwrights", title: "Romantic Playwrights", slug: "romantic-playwrights" },
            //                 { id: "farce-playwrights", title: "Farce Playwrights", slug: "farce-playwrights" },
            //                 { id: "realist-playwrights", title: "Realist Playwrights", slug: "realist-playwrights" },
            //                 { id: "family-playwrights", title: "Family Playwrights", slug: "family-playwrights" },
            //                 { id: "monologue-playwrights", title: "Monologue Playwrights", slug: "monologue-playwrights" },
            //                 { id: "childrens-playwrights", title: "Children's Playwrights", slug: "childrens-playwrights" },
            //                 { id: "improv-playwrights", title: "Improv Playwrights", slug: "improv-playwrights" },
            //                 { id: "avant-garde-playwrights", title: "Avant-Garde Playwrights", slug: "avant-garde-playwrights" }
            //             ]
            //         },
            //         {
            //             id: "journalists-columnists",
            //             title: "Journalists and Columnists",
            //             slug: "journalists-columnists",
            //             children: [
            //                 { id: "investigative-journalists", title: "Investigative Journalists", slug: "investigative-journalists" },
            //                 { id: "news-journalists", title: "News Journalists", slug: "news-journalists" },
            //                 { id: "feature-journalists", title: "Feature Journalists", slug: "feature-journalists" },
            //                 { id: "political-journalists", title: "Political Journalists", slug: "political-journalists" },
            //                 { id: "sports-journalists", title: "Sports Journalists", slug: "sports-journalists" },
            //                 { id: "business-journalists", title: "Business Journalists", slug: "business-journalists" },
            //                 { id: "environmental-journalists", title: "Environmental Journalists", slug: "environmental-journalists" },
            //                 { id: "photojournalists", title: "Photojournalists", slug: "photojournalists" },
            //                 { id: "broadcast-journalists", title: "Broadcast Journalists", slug: "broadcast-journalists" },
            //                 { id: "opinion-columnists", title: "Opinion Columnists", slug: "opinion-columnists" },
            //                 { id: "lifestyle-columnists", title: "Lifestyle Columnists", slug: "lifestyle-columnists" },
            //                 { id: "humor-columnists", title: "Humor Columnists", slug: "humor-columnists" },
            //                 { id: "technology-columnists", title: "Technology Columnists", slug: "technology-columnists" },
            //                 { id: "financial-columnists", title: "Financial Columnists", slug: "financial-columnists" },
            //                 { id: "cultural-columnists", title: "Cultural Columnists", slug: "cultural-columnists" },
            //                 { id: "health-columnists", title: "Health Columnists", slug: "health-columnists" },
            //                 { id: "travel-columnists", title: "Travel Columnists", slug: "travel-columnists" },
            //                 { id: "food-columnists", title: "Food Columnists", slug: "food-columnists" }
            //             ]
            //         },
            //         {
            //             id: "nonfiction-writers",
            //             title: "Nonfiction Writers",
            //             slug: "nonfiction-writers",
            //             children: [
            //                 { id: "journalists-nonfiction", title: "Journalists", slug: "journalists-nonfiction" },
            //                 { id: "biographers", title: "Biographers", slug: "biographers" },
            //                 { id: "memoirists", title: "Memoirists", slug: "memoirists" },
            //                 { id: "essayists", title: "Essayists", slug: "essayists" },
            //                 { id: "historians", title: "Historians", slug: "historians" },
            //                 { id: "academic-writers-nonfiction", title: "Academic Writers", slug: "academic-writers-nonfiction" },
            //                 { id: "self-help-authors", title: "Self-help Authors", slug: "self-help-authors" },
            //                 { id: "travel-writers-nonfiction", title: "Travel Writers", slug: "travel-writers-nonfiction" },
            //                 { id: "health-wellness-writers", title: "Health and Wellness Writers", slug: "health-wellness-writers" },
            //                 { id: "science-writers", title: "Science Writers", slug: "science-writers" },
            //                 { id: "cookbook-authors", title: "Cookbook Authors", slug: "cookbook-authors" },
            //                 { id: "business-writers", title: "Business Writers", slug: "business-writers" },
            //                 { id: "technical-writers-nonfiction", title: "Technical Writers", slug: "technical-writers-nonfiction" },
            //                 { id: "critics-reviewers", title: "Critics and Reviewers", slug: "critics-reviewers" }
            //             ]
            //         },
            //         {
            //             id: "copywriters",
            //             title: "Copywriters",
            //             slug: "copywriters",
            //             children: [
            //                 { id: "advertising-copywriters", title: "Advertising Copywriters", slug: "advertising-copywriters" },
            //                 { id: "seo-copywriters", title: "SEO Copywriters", slug: "seo-copywriters" },
            //                 { id: "content-copywriters", title: "Content Copywriters", slug: "content-copywriters" },
            //                 { id: "social-media-copywriters", title: "Social Media Copywriters", slug: "social-media-copywriters" },
            //                 { id: "email-copywriters", title: "Email Copywriters", slug: "email-copywriters" },
            //                 { id: "branding-copywriters", title: "Branding Copywriters", slug: "branding-copywriters" },
            //                 { id: "product-copywriters", title: "Product Copywriters", slug: "product-copywriters" },
            //                 { id: "direct-response-copywriters", title: "Direct Response Copywriters", slug: "direct-response-copywriters" },
            //                 { id: "technical-copywriters", title: "Technical Copywriters", slug: "technical-copywriters" },
            //                 { id: "creative-copywriters", title: "Creative Copywriters", slug: "creative-copywriters" },
            //                 { id: "corporate-copywriters", title: "Corporate Copywriters", slug: "corporate-copywriters" },
            //                 { id: "ux-copywriters", title: "UX Copywriters", slug: "ux-copywriters" },
            //                 { id: "pr-copywriters", title: "Public Relations (PR) Copywriters", slug: "pr-copywriters" },
            //                 { id: "video-scriptwriters-copy", title: "Video Scriptwriters", slug: "video-scriptwriters-copy" }
            //             ]
            //         },
            //         {
            //             id: "content-writers",
            //             title: "Content Writers",
            //             slug: "content-writers",
            //             children: [
            //                 { id: "blog-writers", title: "Blog Writers", slug: "blog-writers" },
            //                 { id: "seo-content-writers", title: "SEO Content Writers", slug: "seo-content-writers" },
            //                 { id: "article-writers", title: "Article Writers", slug: "article-writers" },
            //                 { id: "social-media-content-writers", title: "Social Media Content Writers", slug: "social-media-content-writers" },
            //                 { id: "copywriters-content", title: "Copywriters", slug: "copywriters-content" },
            //                 { id: "technical-writers-content", title: "Technical Writers", slug: "technical-writers-content" },
            //                 { id: "ecommerce-content-writers", title: "E-commerce Content Writers", slug: "ecommerce-content-writers" },
            //                 { id: "press-release-writers", title: "Press Release Writers", slug: "press-release-writers" },
            //                 { id: "script-writers-content", title: "Script Writers", slug: "script-writers-content" },
            //                 { id: "white-paper-writers", title: "White Paper Writers", slug: "white-paper-writers" },
            //                 { id: "case-study-writers", title: "Case Study Writers", slug: "case-study-writers" },
            //                 { id: "ghostwriters", title: "Ghostwriters", slug: "ghostwriters" },
            //                 { id: "academic-writers-content", title: "Academic Writers", slug: "academic-writers-content" },
            //                 { id: "health-medical-content-writers", title: "Health and Medical Content Writers", slug: "health-medical-content-writers" },
            //                 { id: "travel-writers-content", title: "Travel Writers", slug: "travel-writers-content" },
            //                 { id: "lifestyle-writers", title: "Lifestyle Writers", slug: "lifestyle-writers" },
            //                 { id: "financial-content-writers", title: "Financial Content Writers", slug: "financial-content-writers" },
            //                 { id: "product-review-writers", title: "Product Review Writers", slug: "product-review-writers" },
            //                 { id: "podcast-content-writers", title: "Podcast Content Writers", slug: "podcast-content-writers" },
            //                 { id: "news-writers", title: "News Writers", slug: "news-writers" }
            //             ]
            //         },
            //         {
            //             id: "technical-writers",
            //             title: "Technical Writers",
            //             slug: "technical-writers",
            //             children: [
            //                 { id: "user-manual-writers", title: "User Manual Writers", slug: "user-manual-writers" },
            //                 { id: "api-documentation-writers", title: "API Documentation Writers", slug: "api-documentation-writers" },
            //                 { id: "help-documentation-writers", title: "Help Documentation Writers", slug: "help-documentation-writers" },
            //                 { id: "instructional-designers", title: "Instructional Designers", slug: "instructional-designers" },
            //                 { id: "software-documentation-writers", title: "Software Documentation Writers", slug: "software-documentation-writers" },
            //                 { id: "process-documentation-writers", title: "Process Documentation Writers", slug: "process-documentation-writers" },
            //                 { id: "technical-editors", title: "Technical Editors", slug: "technical-editors" },
            //                 { id: "systems-documentation-writers", title: "Systems Documentation Writers", slug: "systems-documentation-writers" },
            //                 { id: "product-documentation-writers", title: "Product Documentation Writers", slug: "product-documentation-writers" },
            //                 { id: "compliance-regulatory-documentation-writers", title: "Compliance and Regulatory Documentation Writers", slug: "compliance-regulatory-documentation-writers" },
            //                 { id: "technical-copywriters-tw", title: "Technical Copywriters", slug: "technical-copywriters-tw" },
            //                 { id: "web-content-writers-technical", title: "Web Content Writers (Technical Focus)", slug: "web-content-writers-technical" },
            //                 { id: "proposal-writers", title: "Proposal Writers", slug: "proposal-writers" },
            //                 { id: "release-note-writers", title: "Release Note Writers", slug: "release-note-writers" },
            //                 { id: "knowledge-base-writers", title: "Knowledge Base Writers", slug: "knowledge-base-writers" },
            //                 { id: "test-case-writers", title: "Test Case Writers", slug: "test-case-writers" }
            //             ]
            //         },
            //         {
            //             id: "speechwriters",
            //             title: "Speechwriters",
            //             slug: "speechwriters",
            //             children: [
            //                 { id: "political-speechwriters", title: "Political Speechwriters", slug: "political-speechwriters" },
            //                 { id: "corporate-speechwriters", title: "Corporate Speechwriters", slug: "corporate-speechwriters" },
            //                 { id: "pr-speechwriters", title: "Public Relations (PR) Speechwriters", slug: "pr-speechwriters" },
            //                 { id: "motivational-speechwriters", title: "Motivational Speechwriters", slug: "motivational-speechwriters" },
            //                 { id: "wedding-speechwriters", title: "Wedding Speechwriters", slug: "wedding-speechwriters" },
            //                 { id: "eulogy-speechwriters", title: "Eulogy Speechwriters", slug: "eulogy-speechwriters" },
            //                 { id: "keynote-speechwriters", title: "Keynote Speechwriters", slug: "keynote-speechwriters" },
            //                 { id: "ceremonial-speechwriters", title: "Ceremonial Speechwriters", slug: "ceremonial-speechwriters" },
            //                 { id: "award-speechwriters", title: "Award Speechwriters", slug: "award-speechwriters" },
            //                 { id: "nonprofit-advocacy-speechwriters", title: "Speechwriters for Nonprofits and Advocacy Groups", slug: "nonprofit-advocacy-speechwriters" },
            //                 { id: "religious-speechwriters", title: "Religious Speechwriters", slug: "religious-speechwriters" },
            //                 { id: "business-presentation-speechwriters", title: "Business Presentation Speechwriters", slug: "business-presentation-speechwriters" },
            //                 { id: "comedic-speechwriters", title: "Comedic Speechwriters", slug: "comedic-speechwriters" },
            //                 { id: "legal-speechwriters", title: "Legal Speechwriters", slug: "legal-speechwriters" },
            //                 { id: "cultural-social-event-speechwriters", title: "Cultural or Social Event Speechwriters", slug: "cultural-social-event-speechwriters" },
            //                 { id: "academic-speechwriters", title: "Academic Speechwriters", slug: "academic-speechwriters" },
            //                 { id: "startup-entrepreneurial-speechwriters", title: "Startup and Entrepreneurial Speechwriters", slug: "startup-entrepreneurial-speechwriters" }
            //             ]
            //         },
            //         {
            //             id: "playwrights-interactive-video-games",
            //             title: "Playwrights for Interactive and Video Games",
            //             slug: "playwrights-interactive-video-games",
            //             children: [
            //                 { id: "narrative-designers", title: "Narrative Designers", slug: "narrative-designers" },
            //                 { id: "dialogue-writers-games", title: "Dialogue Writers", slug: "dialogue-writers-games" },
            //                 { id: "quest-designers", title: "Quest Designers", slug: "quest-designers" },
            //                 { id: "interactive-scriptwriters", title: "Interactive Scriptwriters", slug: "interactive-scriptwriters" },
            //                 { id: "worldbuilding-writers", title: "Worldbuilding Writers", slug: "worldbuilding-writers" },
            //                 { id: "cutscene-writers", title: "Cutscene Writers", slug: "cutscene-writers" },
            //                 { id: "character-writers", title: "Character Writers", slug: "character-writers" },
            //                 { id: "branching-narrative-writers", title: "Branching Narrative Writers", slug: "branching-narrative-writers" },
            //                 { id: "localization-writers", title: "Localization Writers", slug: "localization-writers" },
            //                 { id: "immersive-storytelling-game-scriptwriters", title: "Game Scriptwriters for Immersive Storytelling", slug: "immersive-storytelling-game-scriptwriters" },
            //                 { id: "level-designers-narrative", title: "Level Designers with Narrative Focus", slug: "level-designers-narrative" },
            //                 { id: "procedural-writers", title: "Procedural Writers", slug: "procedural-writers" },
            //                 { id: "interactive-drama-writers", title: "Interactive Drama Writers", slug: "interactive-drama-writers" },
            //                 { id: "game-event-writers", title: "Game Event Writers", slug: "game-event-writers" },
            //                 { id: "voiceover-scriptwriters-games", title: "Voiceover Scriptwriters", slug: "voiceover-scriptwriters-games" }
            //             ]
            //         },
            //         {
            //             id: "speech-debate-writers",
            //             title: "Speech and Debate Writers",
            //             slug: "speech-debate-writers",
            //             children: [
            //                 { id: "persuasive-speechwriters", title: "Persuasive Speechwriters", slug: "persuasive-speechwriters" },
            //                 { id: "informative-speechwriters", title: "Informative Speechwriters", slug: "informative-speechwriters" },
            //                 { id: "debate-case-writers", title: "Debate Case Writers", slug: "debate-case-writers" },
            //                 { id: "lincoln-douglas-debate-writers", title: "Lincoln-Douglas Debate Writers", slug: "lincoln-douglas-debate-writers" },
            //                 { id: "policy-debate-writers", title: "Policy Debate Writers", slug: "policy-debate-writers" },
            //                 { id: "public-forum-debate-writers", title: "Public Forum Debate Writers", slug: "public-forum-debate-writers" },
            //                 { id: "extemporaneous-speechwriters", title: "Extemporaneous Speechwriters", slug: "extemporaneous-speechwriters" },
            //                 { id: "impromptu-speechwriters", title: "Impromptu Speechwriters", slug: "impromptu-speechwriters" },
            //                 { id: "oratorical-speechwriters", title: "Oratorical Speechwriters", slug: "oratorical-speechwriters" },
            //                 { id: "value-debate-writers", title: "Value Debate Writers", slug: "value-debate-writers" },
            //                 { id: "student-congress-speechwriters", title: "Student Congress Speechwriters", slug: "student-congress-speechwriters" },
            //                 { id: "rhetorical-argument-writers", title: "Rhetorical Argument Writers", slug: "rhetorical-argument-writers" },
            //                 { id: "mock-trial-writers", title: "Mock Trial Writers", slug: "mock-trial-writers" },
            //                 { id: "campaign-speechwriters", title: "Campaign Speechwriters", slug: "campaign-speechwriters" },
            //                 { id: "debate-resolution-writers", title: "Debate Resolution Writers", slug: "debate-resolution-writers" },
            //                 { id: "keynote-speechwriters-debate", title: "Keynote Speechwriters", slug: "keynote-speechwriters-debate" },
            //                 { id: "comedy-debate-writers", title: "Comedy Debate Writers", slug: "comedy-debate-writers" },
            //                 { id: "moot-court-speechwriters", title: "Moot Court Speechwriters", slug: "moot-court-speechwriters" }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "fashion-designers",
            //     title: "Fashion Designers",
            //     slug: "fashion-designers",
            //     children: [
            //         {
            //             id: "haute-couture-designers",
            //             title: "Haute Couture Designers",
            //             slug: "haute-couture-designers",
            //             children: [
            //                 { id: "luxury-haute-couture-designers", title: "Luxury Haute Couture Designers", slug: "luxury-haute-couture-designers" },
            //                 { id: "avant-garde-haute-couture-designers", title: "Avant-Garde Haute Couture Designers", slug: "avant-garde-haute-couture-designers" },
            //                 { id: "traditional-haute-couture-designers", title: "Traditional Haute Couture Designers", slug: "traditional-haute-couture-designers" },
            //                 { id: "ready-to-wear-haute-couture-designers", title: "Ready-to-Wear Haute Couture Designers", slug: "ready-to-wear-haute-couture-designers" },
            //                 { id: "sustainable-haute-couture-designers", title: "Sustainable Haute Couture Designers", slug: "sustainable-haute-couture-designers" },
            //                 { id: "haute-couture-accessory-designers", title: "Haute Couture Accessory Designers", slug: "haute-couture-accessory-designers" },
            //                 { id: "haute-couture-fashion-houses", title: "Haute Couture Fashion Houses", slug: "haute-couture-fashion-houses" },
            //                 { id: "cultural-thematic-haute-couture-designers", title: "Cultural and Thematic Haute Couture Designers", slug: "cultural-thematic-haute-couture-designers" },
            //                 { id: "collaborative-haute-couture-designers", title: "Collaborative Haute Couture Designers", slug: "collaborative-haute-couture-designers" },
            //                 { id: "futuristic-haute-couture-designers", title: "Futuristic Haute Couture Designers", slug: "futuristic-haute-couture-designers" }
            //             ]
            //         },
            //         {
            //             id: "ready-to-wear-designers",
            //             title: "Ready-to-Wear (Pret-à-Porter) Designers",
            //             slug: "ready-to-wear-designers"
            //         },
            //         {
            //             id: "sportswear-designers",
            //             title: "Sportswear Designers",
            //             slug: "sportswear-designers",
            //             children: [
            //                 { id: "activewear-designers", title: "Activewear Designers", slug: "activewear-designers" },
            //                 { id: "casual-sportswear-designers", title: "Casual Sportswear Designers", slug: "casual-sportswear-designers" },
            //                 { id: "footwear-designers-sportswear", title: "Footwear Designers (Sportswear)", slug: "footwear-designers-sportswear" },
            //                 { id: "sports-outerwear-designers", title: "Sports Outerwear Designers", slug: "sports-outerwear-designers" },
            //                 { id: "swimwear-designers-sportswear", title: "Swimwear Designers", slug: "swimwear-designers-sportswear" },
            //                 { id: "yoga-pilates-apparel-designers", title: "Yoga and Pilates Apparel Designers", slug: "yoga-pilates-apparel-designers" },
            //                 { id: "winter-sportswear-designers", title: "Winter Sportswear Designers", slug: "winter-sportswear-designers" },
            //                 { id: "sports-uniform-designers", title: "Sports Uniform Designers", slug: "sports-uniform-designers" },
            //                 { id: "sustainable-sportswear-designers", title: "Sustainable Sportswear Designers", slug: "sustainable-sportswear-designers" },
            //                 { id: "adaptive-sportswear-designers", title: "Adaptive Sportswear Designers", slug: "adaptive-sportswear-designers" }
            //             ]
            //         },
            //         {
            //             id: "footwear-designers",
            //             title: "Footwear Designers",
            //             slug: "footwear-designers"
            //         },
            //         {
            //             id: "accessory-designers",
            //             title: "Accessory Designers",
            //             slug: "accessory-designers",
            //             children: [
            //                 { id: "jewelry-designers", title: "Jewelry Designers", slug: "jewelry-designers" },
            //                 { id: "handbag-bag-designers", title: "Handbag and Bag Designers", slug: "handbag-bag-designers" },
            //                 { id: "footwear-designers-accessory", title: "Footwear Designers", slug: "footwear-designers-accessory" },
            //                 { id: "headwear-designers", title: "Headwear Designers", slug: "headwear-designers" },
            //                 { id: "scarf-shawl-designers", title: "Scarf and Shawl Designers", slug: "scarf-shawl-designers" },
            //                 { id: "belt-buckle-designers", title: "Belt and Buckle Designers", slug: "belt-buckle-designers" },
            //                 { id: "eyewear-designers", title: "Eyewear Designers", slug: "eyewear-designers" },
            //                 { id: "glove-designers", title: "Glove Designers", slug: "glove-designers" },
            //                 { id: "tech-functional-accessory-designers", title: "Tech and Functional Accessory Designers", slug: "tech-functional-accessory-designers" },
            //                 { id: "sustainable-eco-accessory-designers", title: "Sustainable and Eco-Friendly Accessory Designers", slug: "sustainable-eco-accessory-designers" },
            //                 { id: "bridal-special-occasion-accessory-designers", title: "Bridal and Special Occasion Accessory Designers", slug: "bridal-special-occasion-accessory-designers" },
            //                 { id: "creative-experimental-accessory-designers", title: "Creative and Experimental Accessory Designers", slug: "creative-experimental-accessory-designers" }
            //             ]
            //         },
            //         { id: "textile-designers", title: "Textile Designers", slug: "textile-designers" },
            //         { id: "costume-designers-fashion", title: "Costume Designers", slug: "costume-designers-fashion" },
            //         { id: "childrens-wear-designers", title: "Children's Wear Designers", slug: "childrens-wear-designers" },
            //         { id: "sustainable-eco-fashion-designers", title: "Sustainable or Eco-Friendly Fashion Designers", slug: "sustainable-eco-fashion-designers" },
            //         { id: "bridal-evening-wear-designers", title: "Bridal and Evening Wear Designers", slug: "bridal-evening-wear-designers" },
            //         { id: "streetwear-designers", title: "Streetwear Designers", slug: "streetwear-designers" },
            //         { id: "fashion-stylists", title: "Fashion Stylists", slug: "fashion-stylists" },
            //         { id: "conceptual-fashion-designers", title: "Conceptual Fashion Designers", slug: "conceptual-fashion-designers" },
            //         { id: "virtual-fashion-designers", title: "Virtual Fashion Designers", slug: "virtual-fashion-designers" },
            //         {
            //             id: "costume-fashion-designers-theme-parks",
            //             title: "Costume and Fashion Designers for Theme Parks",
            //             slug: "costume-fashion-designers-theme-parks",
            //             children: [
            //                 { id: "character-costume-designers", title: "Character Costume Designers", slug: "character-costume-designers" },
            //                 { id: "theme-park-parade-show-costume-designers", title: "Theme Park Parade and Show Costume Designers", slug: "theme-park-parade-show-costume-designers" },
            //                 { id: "attraction-costume-designers", title: "Attraction Costume Designers", slug: "attraction-costume-designers" },
            //                 { id: "specialty-costume-designers", title: "Specialty Costume Designers", slug: "specialty-costume-designers" },
            //                 { id: "interactive-roleplay-entertainment-costume-designers", title: "Interactive Roleplay and Entertainment Costume Designers", slug: "interactive-roleplay-entertainment-costume-designers" },
            //                 { id: "employee-uniform-designers", title: "Employee Uniform Designers", slug: "employee-uniform-designers" },
            //                 { id: "high-concept-costume-designers", title: "High-Concept Costume Designers", slug: "high-concept-costume-designers" },
            //                 { id: "costume-designers-immersive-experiences", title: "Costume Designers for Immersive Experiences", slug: "costume-designers-immersive-experiences" },
            //                 { id: "costume-designers-special-effects", title: "Costume Designers for Special Effects", slug: "costume-designers-special-effects" },
            //                 { id: "luxury-vip-experience-designers", title: "Luxury and VIP Experience Designers", slug: "luxury-vip-experience-designers" },
            //                 { id: "family-kid-friendly-costume-designers", title: "Family and Kid-Friendly Costume Designers", slug: "family-kid-friendly-costume-designers" }
            //             ]
            //         },
            //         {
            //             id: "maternity-wear-designers",
            //             title: "Maternity Wear Designers",
            //             slug: "maternity-wear-designers",
            //             children: [
            //                 { id: "casual-maternity-wear-designers", title: "Casual Maternity Wear Designers", slug: "casual-maternity-wear-designers" },
            //                 { id: "professional-maternity-wear-designers", title: "Professional Maternity Wear Designers", slug: "professional-maternity-wear-designers" },
            //                 { id: "evening-formal-maternity-wear-designers", title: "Evening and Formal Maternity Wear Designers", slug: "evening-formal-maternity-wear-designers" },
            //                 { id: "luxe-couture-maternity-wear-designers", title: "Luxe and Couture Maternity Wear Designers", slug: "luxe-couture-maternity-wear-designers" },
            //                 { id: "maternity-lingerie-designers", title: "Maternity Lingerie Designers", slug: "maternity-lingerie-designers" },
            //                 { id: "maternity-swimwear-designers", title: "Maternity Swimwear Designers", slug: "maternity-swimwear-designers" },
            //                 { id: "maternity-outerwear-designers", title: "Maternity Outerwear Designers", slug: "maternity-outerwear-designers" },
            //                 { id: "maternity-bridal-wear-designers", title: "Maternity Bridal Wear Designers", slug: "maternity-bridal-wear-designers" },
            //                 { id: "sustainable-ethical-maternity-wear-designers", title: "Sustainable and Ethical Maternity Wear Designers", slug: "sustainable-ethical-maternity-wear-designers" },
            //                 { id: "maternity-wear-special-occasions-designers", title: "Maternity Wear for Special Occasions Designers", slug: "maternity-wear-special-occasions-designers" },
            //                 { id: "maternity-active-fitness-wear-designers", title: "Maternity Active and Fitness Wear Designers", slug: "maternity-active-fitness-wear-designers" },
            //                 { id: "maternity-wear-multiple-pregnancies-designers", title: "Maternity Wear for Multiple Pregnancies Designers", slug: "maternity-wear-multiple-pregnancies-designers" },
            //                 { id: "maternity-accessories-designers", title: "Maternity Accessories Designers", slug: "maternity-accessories-designers" }
            //             ]
            //         },
            //         {
            //             id: "lingerie-underwear-designers",
            //             title: "Lingerie and Underwear Designers",
            //             slug: "lingerie-underwear-designers",
            //             children: [
            //                 { id: "luxury-lingerie-designers", title: "Luxury Lingerie Designers", slug: "luxury-lingerie-designers" },
            //                 { id: "everyday-lingerie-designers", title: "Everyday Lingerie Designers", slug: "everyday-lingerie-designers" },
            //                 { id: "maternity-postpartum-lingerie-designers", title: "Maternity and Postpartum Lingerie Designers", slug: "maternity-postpartum-lingerie-designers" },
            //                 { id: "plus-size-lingerie-designers", title: "Plus-Size Lingerie Designers", slug: "plus-size-lingerie-designers" },
            //                 { id: "corsetry-designers", title: "Corsetry Designers", slug: "corsetry-designers" },
            //                 { id: "swimwear-lingerie-hybrid-designers", title: "Swimwear and Lingerie Hybrid Designers", slug: "swimwear-lingerie-hybrid-designers" },
            //                 { id: "ethical-sustainable-lingerie-designers", title: "Ethical and Sustainable Lingerie Designers", slug: "ethical-sustainable-lingerie-designers" },
            //                 { id: "fashion-forward-lingerie-designers", title: "Fashion-Forward Lingerie Designers", slug: "fashion-forward-lingerie-designers" },
            //                 { id: "lingerie-accessories-designers", title: "Lingerie Accessories Designers", slug: "lingerie-accessories-designers" },
            //                 { id: "mens-lingerie-underwear-designers", title: "Men's Lingerie and Underwear Designers", slug: "mens-lingerie-underwear-designers" },
            //                 { id: "bridal-lingerie-designers", title: "Bridal Lingerie Designers", slug: "bridal-lingerie-designers" }
            //             ]
            //         },
            //         { id: "plus-size-fashion-designers", title: "Plus-Size Fashion Designers", slug: "plus-size-fashion-designers" },
            //         { id: "runway-fashion-designers", title: "Runway Fashion Designers", slug: "runway-fashion-designers" },
            //         { id: "urban-fashion-designers", title: "Urban Fashion Designers", slug: "urban-fashion-designers" }
            //     ]
            // },
            // {
            //     id: "film-television-artists",
            //     title: "Film and Television Artists",
            //     slug: "film-television-artists",
            //     children: [
            //         {
            //             id: "actors",
            //             title: "Actors",
            //             slug: "actors",
            //             children: [
            //                 { id: "lead-actors", title: "Lead Actors", slug: "lead-actors" },
            //                 { id: "supporting-actors", title: "Supporting Actors", slug: "supporting-actors" },
            //                 { id: "character-actors", title: "Character Actors", slug: "character-actors" },
            //                 { id: "voice-actors", title: "Voice Actors", slug: "voice-actors" }
            //             ]
            //         },
            //         { id: "directors", title: "Directors", slug: "directors" },
            //         {
            //             id: "producers",
            //             title: "Producers",
            //             slug: "producers",
            //             children: [
            //                 { id: "executive-producers", title: "Executive Producers", slug: "executive-producers" },
            //                 { id: "line-producers", title: "Line Producers", slug: "line-producers" },
            //                 { id: "co-producers", title: "Co-Producers", slug: "co-producers" }
            //             ]
            //         },
            //         {
            //             id: "screenwriters-film-tv",
            //             title: "Screenwriters (Writers)",
            //             slug: "screenwriters-film-tv",
            //             children: [
            //                 { id: "original-screenwriters", title: "Original Screenwriters", slug: "original-screenwriters" },
            //                 { id: "adaptation-writers-film", title: "Adaptation Writers", slug: "adaptation-writers-film" },
            //                 { id: "television-writers", title: "Television Writers", slug: "television-writers" }
            //             ]
            //         },
            //         { id: "cinematographers", title: "Cinematographers (Directors of Photography)", slug: "cinematographers" },
            //         {
            //             id: "editors-film-tv",
            //             title: "Editors",
            //             slug: "editors-film-tv",
            //             children: [
            //                 { id: "film-editors", title: "Film Editors", slug: "film-editors" },
            //                 { id: "television-editors", title: "Television Editors", slug: "television-editors" }
            //             ]
            //         },
            //         { id: "production-designers", title: "Production Designers", slug: "production-designers" },
            //         { id: "costume-designers-film-tv", title: "Costume Designers", slug: "costume-designers-film-tv" },
            //         { id: "makeup-artists-film-tv", title: "Makeup Artists", slug: "makeup-artists-film-tv" },
            //         { id: "sound-designers", title: "Sound Designers", slug: "sound-designers" },
            //         { id: "composers-film-tv", title: "Composers (Film/TV Music)", slug: "composers-film-tv" },
            //         { id: "stunt-performers", title: "Stunt Performers", slug: "stunt-performers" },
            //         { id: "choreographers-film-tv", title: "Choreographers", slug: "choreographers-film-tv" },
            //         { id: "casting-directors", title: "Casting Directors", slug: "casting-directors" },
            //         { id: "voiceover-artists-film-tv", title: "Voiceover Artists", slug: "voiceover-artists-film-tv" },
            //         { id: "animators", title: "Animators", slug: "animators" },
            //         { id: "vfx-artists", title: "VFX Artists (Visual Effects Artists)", slug: "vfx-artists" },
            //         { id: "set-designers", title: "Set Designers", slug: "set-designers" },
            //         { id: "lighting-designers-film-tv", title: "Lighting Designers", slug: "lighting-designers-film-tv" },
            //         { id: "pr-marketing-teams-film-tv", title: "Public Relations and Marketing Teams", slug: "pr-marketing-teams-film-tv" },
            //         { id: "talent-managers", title: "Talent Managers", slug: "talent-managers" }
            //     ]
            // },
            // {
            //     id: "celebrity-artists",
            //     title: "Celebrity Artists",
            //     slug: "celebrity-artists",
            //     children: [
            //         {
            //             id: "musicians-singers-celebrity",
            //             title: "Musicians and Singers",
            //             slug: "musicians-singers-celebrity",
            //             children: [
            //                 { id: "solo-artists-celebrity", title: "Solo Artists", slug: "solo-artists-celebrity" },
            //                 { id: "bands-celebrity", title: "Bands", slug: "bands-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "actors-actresses-celebrity",
            //             title: "Actors and Actresses",
            //             slug: "actors-actresses-celebrity",
            //             children: [
            //                 { id: "lead-actors-celebrity", title: "Lead Actors", slug: "lead-actors-celebrity" },
            //                 { id: "supporting-actors-celebrity", title: "Supporting Actors", slug: "supporting-actors-celebrity" },
            //                 { id: "voice-actors-celebrity", title: "Voice Actors", slug: "voice-actors-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "comedians-celebrity",
            //             title: "Comedians",
            //             slug: "comedians-celebrity",
            //             children: [
            //                 { id: "stand-up-comedians-celebrity", title: "Stand-up Comedians", slug: "stand-up-comedians-celebrity" },
            //                 { id: "comedy-actors-celebrity", title: "Comedy Actors", slug: "comedy-actors-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "influencers-celebrity",
            //             title: "Influencers",
            //             slug: "influencers-celebrity",
            //             children: [
            //                 { id: "instagram-influencers-celebrity", title: "Instagram Influencers", slug: "instagram-influencers-celebrity" },
            //                 { id: "youtube-personalities-celebrity", title: "YouTube Personalities", slug: "youtube-personalities-celebrity" },
            //                 { id: "tiktok-stars-celebrity", title: "TikTok Stars", slug: "tiktok-stars-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "athletes-celebrity",
            //             title: "Athletes",
            //             slug: "athletes-celebrity",
            //             children: [
            //                 { id: "professional-athletes-celebrity", title: "Professional Athletes", slug: "professional-athletes-celebrity" },
            //                 { id: "olympic-athletes-celebrity", title: "Olympic Athletes", slug: "olympic-athletes-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "fashion-icons-celebrity",
            //             title: "Fashion Icons",
            //             slug: "fashion-icons-celebrity",
            //             children: [
            //                 { id: "fashion-designers-celebrity", title: "Fashion Designers", slug: "fashion-designers-celebrity" },
            //                 { id: "fashion-models-celebrity", title: "Fashion Models", slug: "fashion-models-celebrity" },
            //                 { id: "style-influencers-celebrity", title: "Style Influencers", slug: "style-influencers-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "authors-writers-celebrity",
            //             title: "Authors and Writers",
            //             slug: "authors-writers-celebrity",
            //             children: [
            //                 { id: "novelists-celebrity", title: "Novelists", slug: "novelists-celebrity" },
            //                 { id: "nonfiction-writers-celebrity", title: "Nonfiction Writers", slug: "nonfiction-writers-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "directors-producers-celebrity",
            //             title: "Directors and Producers",
            //             slug: "directors-producers-celebrity",
            //             children: [
            //                 { id: "film-directors-celebrity", title: "Film Directors", slug: "film-directors-celebrity" },
            //                 { id: "producers-celebrity", title: "Producers", slug: "producers-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "reality-tv-stars",
            //             title: "Reality TV Stars",
            //             slug: "reality-tv-stars",
            //             children: [
            //                 { id: "reality-tv-contestants", title: "Contestants", slug: "reality-tv-contestants" },
            //                 { id: "reality-tv-hosts", title: "Hosts", slug: "reality-tv-hosts" }
            //             ]
            //         },
            //         {
            //             id: "youtubers-content-creators-celebrity",
            //             title: "YouTubers/Content Creators",
            //             slug: "youtubers-content-creators-celebrity",
            //             children: [
            //                 { id: "vloggers-celebrity", title: "Vloggers", slug: "vloggers-celebrity" },
            //                 { id: "content-creators-celebrity", title: "Content Creators", slug: "content-creators-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "social-entrepreneurs-celebrity",
            //             title: "Social Entrepreneurs",
            //             slug: "social-entrepreneurs-celebrity",
            //             children: [
            //                 { id: "philanthropists-celebrity", title: "Philanthropists", slug: "philanthropists-celebrity" },
            //                 { id: "activists-celebrity", title: "Activists", slug: "activists-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "voiceover-artists-celebrity",
            //             title: "Voiceover Artists",
            //             slug: "voiceover-artists-celebrity",
            //             children: [
            //                 { id: "animated-film-voice-actors", title: "Animated Film Voice Actors", slug: "animated-film-voice-actors" },
            //                 { id: "video-game-voice-actors", title: "Video Game Voice Actors", slug: "video-game-voice-actors" },
            //                 { id: "commercial-voiceover-artists", title: "Commercial Voiceover Artists", slug: "commercial-voiceover-artists" }
            //             ]
            //         },
            //         {
            //             id: "photographers-visual-artists-celebrity",
            //             title: "Photographers and Visual Artists",
            //             slug: "photographers-visual-artists-celebrity",
            //             children: [
            //                 { id: "celebrity-photographers", title: "Celebrity Photographers", slug: "celebrity-photographers" },
            //                 { id: "visual-artists-celebrity", title: "Visual Artists", slug: "visual-artists-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "chefs-culinary-artists-celebrity",
            //             title: "Chefs and Culinary Artists",
            //             slug: "chefs-culinary-artists-celebrity",
            //             children: [
            //                 { id: "celebrity-chefs", title: "Celebrity Chefs", slug: "celebrity-chefs" },
            //                 { id: "culinary-personalities", title: "Culinary Personalities", slug: "culinary-personalities" }
            //             ]
            //         },
            //         {
            //             id: "spiritual-leaders-healers-celebrity",
            //             title: "Spiritual Leaders/Healers",
            //             slug: "spiritual-leaders-healers-celebrity",
            //             children: [
            //                 { id: "motivational-speakers-celebrity", title: "Motivational Speakers", slug: "motivational-speakers-celebrity" },
            //                 { id: "life-coaches-celebrity", title: "Life Coaches", slug: "life-coaches-celebrity" }
            //             ]
            //         },
            //         {
            //             id: "fashion-designers-entrepreneurs-celebrity",
            //             title: "Fashion Designers and Entrepreneurs",
            //             slug: "fashion-designers-entrepreneurs-celebrity",
            //             children: [
            //                 { id: "fashion-entrepreneurs-celebrity", title: "Fashion Entrepreneurs", slug: "fashion-entrepreneurs-celebrity" },
            //                 { id: "beauty-lifestyle-brand-owners", title: "Beauty and Lifestyle Brand Owners", slug: "beauty-lifestyle-brand-owners" }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "social-media-influencers",
            //     title: "Social Media Influencers",
            //     slug: "social-media-influencers",
            //     children: [
            //         {
            //             id: "instagram-influencers",
            //             title: "Instagram Influencers",
            //             slug: "instagram-influencers",
            //             children: [
            //                 { id: "macro-influencers-instagram", title: "Macro Influencers", slug: "macro-influencers-instagram" },
            //                 { id: "micro-influencers-instagram", title: "Micro-Influencers", slug: "micro-influencers-instagram" },
            //                 { id: "nano-influencers-instagram", title: "Nano-Influencers", slug: "nano-influencers-instagram" },
            //                 { id: "instagram-models", title: "Instagram Models", slug: "instagram-models" },
            //                 { id: "instagram-business-influencers", title: "Instagram Business Influencers", slug: "instagram-business-influencers" }
            //             ]
            //         },
            //         {
            //             id: "youtube-influencers",
            //             title: "YouTube Influencers",
            //             slug: "youtube-influencers",
            //             children: [
            //                 { id: "vloggers-youtube", title: "Vloggers", slug: "vloggers-youtube" },
            //                 { id: "beauty-makeup-influencers-youtube", title: "Beauty and Makeup Influencers", slug: "beauty-makeup-influencers-youtube" },
            //                 { id: "gaming-influencers-youtube", title: "Gaming Influencers", slug: "gaming-influencers-youtube" },
            //                 { id: "tech-influencers-youtube", title: "Tech Influencers", slug: "tech-influencers-youtube" },
            //                 { id: "diy-craft-influencers-youtube", title: "DIY and Craft Influencers", slug: "diy-craft-influencers-youtube" },
            //                 { id: "fitness-influencers-youtube", title: "Fitness Influencers", slug: "fitness-influencers-youtube" }
            //             ]
            //         },
            //         {
            //             id: "tiktok-influencers",
            //             title: "TikTok Influencers",
            //             slug: "tiktok-influencers",
            //             children: [
            //                 { id: "dance-influencers-tiktok", title: "Dance Influencers", slug: "dance-influencers-tiktok" },
            //                 { id: "comedy-skit-creators-tiktok", title: "Comedy and Skit Creators", slug: "comedy-skit-creators-tiktok" },
            //                 { id: "lifestyle-influencers-tiktok", title: "Lifestyle Influencers", slug: "lifestyle-influencers-tiktok" },
            //                 { id: "beauty-fashion-influencers-tiktok", title: "Beauty and Fashion Influencers", slug: "beauty-fashion-influencers-tiktok" },
            //                 { id: "educational-influencers-tiktok", title: "Educational Influencers", slug: "educational-influencers-tiktok" },
            //                 { id: "activist-influencers-tiktok", title: "Activist Influencers", slug: "activist-influencers-tiktok" }
            //             ]
            //         },
            //         {
            //             id: "twitter-influencers",
            //             title: "Twitter Influencers",
            //             slug: "twitter-influencers",
            //             children: [
            //                 { id: "political-news-influencers-twitter", title: "Political and News Influencers", slug: "political-news-influencers-twitter" },
            //                 { id: "tech-influencers-twitter", title: "Tech Influencers", slug: "tech-influencers-twitter" },
            //                 { id: "celebrity-influencers-twitter", title: "Celebrity Influencers", slug: "celebrity-influencers-twitter" }
            //             ]
            //         },
            //         {
            //             id: "facebook-influencers",
            //             title: "Facebook Influencers",
            //             slug: "facebook-influencers",
            //             children: [
            //                 { id: "community-leaders-facebook", title: "Community Leaders", slug: "community-leaders-facebook" },
            //                 { id: "brand-ambassadors-facebook", title: "Brand Ambassadors", slug: "brand-ambassadors-facebook" },
            //                 { id: "live-streamers-facebook", title: "Live Streamers", slug: "live-streamers-facebook" }
            //             ]
            //         },
            //         {
            //             id: "bloggers-vloggers",
            //             title: "Bloggers/Vloggers (Across Platforms)",
            //             slug: "bloggers-vloggers",
            //             children: [
            //                 { id: "fashion-bloggers", title: "Fashion Bloggers", slug: "fashion-bloggers" },
            //                 { id: "food-bloggers", title: "Food Bloggers", slug: "food-bloggers" },
            //                 { id: "travel-bloggers", title: "Travel Bloggers", slug: "travel-bloggers" },
            //                 { id: "health-wellness-bloggers", title: "Health and Wellness Bloggers", slug: "health-wellness-bloggers" }
            //             ]
            //         },
            //         {
            //             id: "podcasters",
            //             title: "Podcasters",
            //             slug: "podcasters",
            //             children: [
            //                 { id: "niche-podcasters", title: "Niche Podcasters", slug: "niche-podcasters" },
            //                 { id: "entertainment-podcasters", title: "Entertainment Podcasters", slug: "entertainment-podcasters" },
            //                 { id: "social-issues-podcasters", title: "Social Issues Podcasters", slug: "social-issues-podcasters" }
            //             ]
            //         },
            //         {
            //             id: "twitch-streamers",
            //             title: "Twitch Streamers",
            //             slug: "twitch-streamers",
            //             children: [
            //                 { id: "gaming-streamers-twitch", title: "Gaming Streamers", slug: "gaming-streamers-twitch" },
            //                 { id: "creative-streamers-twitch", title: "Creative Streamers", slug: "creative-streamers-twitch" },
            //                 { id: "irl-streamers-twitch", title: "IRL (In Real Life) Streamers", slug: "irl-streamers-twitch" }
            //             ]
            //         },
            //         {
            //             id: "pinterest-influencers",
            //             title: "Pinterest Influencers",
            //             slug: "pinterest-influencers",
            //             children: [
            //                 { id: "diy-craft-influencers-pinterest", title: "DIY and Craft Influencers", slug: "diy-craft-influencers-pinterest" },
            //                 { id: "wedding-event-planners-pinterest", title: "Wedding and Event Planners", slug: "wedding-event-planners-pinterest" },
            //                 { id: "food-recipe-influencers-pinterest", title: "Food and Recipe Influencers", slug: "food-recipe-influencers-pinterest" }
            //             ]
            //         },
            //         {
            //             id: "snapchat-influencers",
            //             title: "Snapchat Influencers",
            //             slug: "snapchat-influencers",
            //             children: [
            //                 { id: "story-creators-snapchat", title: "Story Creators", slug: "story-creators-snapchat" },
            //                 { id: "influencer-personalities-snapchat", title: "Influencer Personalities", slug: "influencer-personalities-snapchat" }
            //             ]
            //         },
            //         {
            //             id: "linkedin-influencers",
            //             title: "LinkedIn Influencers",
            //             slug: "linkedin-influencers",
            //             children: [
            //                 { id: "business-leaders-entrepreneurs-linkedin", title: "Business Leaders and Entrepreneurs", slug: "business-leaders-entrepreneurs-linkedin" },
            //                 { id: "industry-experts-linkedin", title: "Industry Experts", slug: "industry-experts-linkedin" }
            //             ]
            //         },
            //         {
            //             id: "clubhouse-influencers",
            //             title: "Clubhouse Influencers",
            //             slug: "clubhouse-influencers",
            //             children: [
            //                 { id: "thought-leaders-clubhouse", title: "Thought Leaders", slug: "thought-leaders-clubhouse" },
            //                 { id: "industry-experts-clubhouse", title: "Industry Experts", slug: "industry-experts-clubhouse" }
            //             ]
            //         },
            //         {
            //             id: "virtual-influencers",
            //             title: "Virtual Influencers",
            //             slug: "virtual-influencers",
            //             children: [
            //                 { id: "digital-avatars", title: "Digital Avatars", slug: "digital-avatars" },
            //                 { id: "ai-influencers", title: "AI Influencers", slug: "ai-influencers" }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "voice-artists",
            //     title: "Voice Artists",
            //     slug: "voice-artists",
            //     children: [
            //         {
            //             id: "animation-voice-artists",
            //             title: "Animation Voice Artists",
            //             slug: "animation-voice-artists",
            //             children: [
            //                 { id: "character-voice-actors", title: "Character Voice Actors", slug: "character-voice-actors" },
            //                 { id: "creature-voice-actors", title: "Creature Voice Actors", slug: "creature-voice-actors" },
            //                 { id: "video-game-voice-actors-animation", title: "Video Game Voice Actors", slug: "video-game-voice-actors-animation" }
            //             ]
            //         },
            //         {
            //             id: "voiceover-artists-commercials",
            //             title: "Voiceover Artists (Commercials)",
            //             slug: "voiceover-artists-commercials",
            //             children: [
            //                 { id: "commercial-voiceover-artists", title: "Commercial Voiceover Artists", slug: "commercial-voiceover-artists" },
            //                 { id: "infomercial-voiceover-artists", title: "Infomercial Voiceover Artists", slug: "infomercial-voiceover-artists" },
            //                 { id: "promo-voiceover-artists", title: "Promo Voiceover Artists", slug: "promo-voiceover-artists" }
            //             ]
            //         },
            //         {
            //             id: "dubbing-localization-voice-artists",
            //             title: "Dubbing and Localization Voice Artists",
            //             slug: "dubbing-localization-voice-artists",
            //             children: [
            //                 { id: "dubbing-actors", title: "Dubbing Actors", slug: "dubbing-actors" },
            //                 { id: "subtitling-narration-artists", title: "Subtitling and Narration Artists", slug: "subtitling-narration-artists" },
            //                 { id: "foreign-language-dubbing-artists", title: "Foreign Language Dubbing Artists", slug: "foreign-language-dubbing-artists" }
            //             ]
            //         },
            //         {
            //             id: "audiobook-narrators",
            //             title: "Audiobook Narrators",
            //             slug: "audiobook-narrators",
            //             children: [
            //                 { id: "narrators-audiobook", title: "Narrators", slug: "narrators-audiobook" },
            //                 { id: "character-voices-audiobook", title: "Character Voices", slug: "character-voices-audiobook" },
            //                 { id: "audio-drama-voice-actors", title: "Audio Drama Voice Actors", slug: "audio-drama-voice-actors" }
            //             ]
            //         },
            //         {
            //             id: "documentary-educational-voice-artists",
            //             title: "Documentary and Educational Voice Artists",
            //             slug: "documentary-educational-voice-artists",
            //             children: [
            //                 { id: "narrators-documentary", title: "Narrators", slug: "narrators-documentary" },
            //                 { id: "instructional-voiceover-artists", title: "Instructional Voiceover Artists", slug: "instructional-voiceover-artists" }
            //             ]
            //         },
            //         {
            //             id: "podcast-voice-artists",
            //             title: "Podcast Voice Artists",
            //             slug: "podcast-voice-artists",
            //             children: [
            //                 { id: "podcast-hosts-voice", title: "Podcast Hosts", slug: "podcast-hosts-voice" },
            //                 { id: "narrative-podcasters", title: "Narrative Podcasters", slug: "narrative-podcasters" }
            //             ]
            //         },
            //         {
            //             id: "television-film-narrators",
            //             title: "Television and Film Narrators",
            //             slug: "television-film-narrators",
            //             children: [
            //                 { id: "narrators-documentaries-series", title: "Narrators for Documentaries or Series", slug: "narrators-documentaries-series" },
            //                 { id: "tv-show-announcers", title: "TV Show Announcers", slug: "tv-show-announcers" }
            //             ]
            //         },
            //         {
            //             id: "live-event-voice-artists",
            //             title: "Live Event Voice Artists",
            //             slug: "live-event-voice-artists",
            //             children: [
            //                 { id: "event-announcers", title: "Event Announcers", slug: "event-announcers" },
            //                 { id: "stage-announcers", title: "Stage Announcers", slug: "stage-announcers" }
            //             ]
            //         },
            //         {
            //             id: "ivr-voice-artists",
            //             title: "Voice Artists for IVR (Interactive Voice Response) Systems",
            //             slug: "ivr-voice-artists",
            //             children: [
            //                 { id: "ivr-voice-artists-sub", title: "IVR Voice Artists", slug: "ivr-voice-artists-sub" }
            //             ]
            //         },
            //         {
            //             id: "video-game-voice-artists",
            //             title: "Video Game Voice Artists",
            //             slug: "video-game-voice-artists",
            //             children: [
            //                 { id: "main-character-voice-actors", title: "Main Character Voice Actors", slug: "main-character-voice-actors" },
            //                 { id: "supporting-character-voice-actors", title: "Supporting Character Voice Actors", slug: "supporting-character-voice-actors" },
            //                 { id: "npc-voice-actors", title: "Non-playable Character (NPC) Voice Actors", slug: "npc-voice-actors" }
            //             ]
            //         },
            //         {
            //             id: "impressionists-sound-alike-voice-artists",
            //             title: "Impressionists and Sound-Alike Voice Artists",
            //             slug: "impressionists-sound-alike-voice-artists",
            //             children: [
            //                 { id: "celebrity-impersonators", title: "Celebrity Impersonators", slug: "celebrity-impersonators" },
            //                 { id: "sound-alike-artists", title: "Sound-Alike Artists", slug: "sound-alike-artists" }
            //             ]
            //         },
            //         {
            //             id: "pa-voice-artists",
            //             title: "Public Announcement (PA) Voice Artists",
            //             slug: "pa-voice-artists",
            //             children: [
            //                 { id: "transportation-announcement-voices", title: "Transportation Announcement Voices", slug: "transportation-announcement-voices" },
            //                 { id: "public-event-announcers", title: "Public Event Announcers", slug: "public-event-announcers" }
            //             ]
            //         },
            //         {
            //             id: "virtual-assistant-ai-voice-artists",
            //             title: "Virtual Assistant and AI Voice Artists",
            //             slug: "virtual-assistant-ai-voice-artists",
            //             children: [
            //                 { id: "ai-voice-actors", title: "AI Voice Actors", slug: "ai-voice-actors" },
            //                 { id: "chatbot-voice-artists", title: "Chatbot Voice Artists", slug: "chatbot-voice-artists" }
            //             ]
            //         },
            //         {
            //             id: "corporate-brand-voice-artists",
            //             title: "Corporate and Brand Voice Artists",
            //             slug: "corporate-brand-voice-artists",
            //             children: [
            //                 { id: "corporate-narrators", title: "Corporate Narrators", slug: "corporate-narrators" },
            //                 { id: "brand-voice-artists", title: "Brand Voice Artists", slug: "brand-voice-artists" }
            //             ]
            //         },
            //         {
            //             id: "sound-design-foley-artists",
            //             title: "Sound Design and Foley Artists",
            //             slug: "sound-design-foley-artists",
            //             children: [
            //                 { id: "foley-artists", title: "Foley Artists", slug: "foley-artists" }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "photographers",
            //     title: "Photographers",
            //     slug: "photographers",
            //     children: [
            //         {
            //             id: "fashion-photographers",
            //             title: "Fashion Photographers",
            //             slug: "fashion-photographers",
            //             children: [
            //                 { id: "runway-fashion-photographers", title: "Runway Fashion Photographers", slug: "runway-fashion-photographers" },
            //                 { id: "commercial-fashion-photographers", title: "Commercial Fashion Photographers", slug: "commercial-fashion-photographers" },
            //                 { id: "celebrity-fashion-photographers", title: "Celebrity Fashion Photographers", slug: "celebrity-fashion-photographers" }
            //             ]
            //         },
            //         {
            //             id: "portrait-photographers",
            //             title: "Portrait Photographers",
            //             slug: "portrait-photographers",
            //             children: [
            //                 { id: "studio-portrait-photographers", title: "Studio Portrait Photographers", slug: "studio-portrait-photographers" },
            //                 { id: "environmental-portrait-photographers", title: "Environmental Portrait Photographers", slug: "environmental-portrait-photographers" },
            //                 { id: "lifestyle-portrait-photographers", title: "Lifestyle Portrait Photographers", slug: "lifestyle-portrait-photographers" },
            //                 { id: "celebrity-portrait-photographers", title: "Celebrity Portrait Photographers", slug: "celebrity-portrait-photographers" }
            //             ]
            //         },
            //         {
            //             id: "event-photographers",
            //             title: "Event Photographers",
            //             slug: "event-photographers",
            //             children: [
            //                 { id: "wedding-photographers-event", title: "Wedding Photographers", slug: "wedding-photographers-event" },
            //                 { id: "corporate-event-photographers", title: "Corporate Event Photographers", slug: "corporate-event-photographers" },
            //                 { id: "concert-music-photographers", title: "Concert and Music Photographers", slug: "concert-music-photographers" },
            //                 { id: "party-social-event-photographers", title: "Party and Social Event Photographers", slug: "party-social-event-photographers" }
            //             ]
            //         },
            //         {
            //             id: "commercial-photographers",
            //             title: "Commercial Photographers",
            //             slug: "commercial-photographers",
            //             children: [
            //                 { id: "product-photographers", title: "Product Photographers", slug: "product-photographers" },
            //                 { id: "food-photographers", title: "Food Photographers", slug: "food-photographers" },
            //                 { id: "real-estate-photographers", title: "Real Estate Photographers", slug: "real-estate-photographers" },
            //                 { id: "architectural-photographers", title: "Architectural Photographers", slug: "architectural-photographers" }
            //             ]
            //         },
            //         {
            //             id: "documentary-photojournalism-photographers",
            //             title: "Documentary and Photojournalism Photographers",
            //             slug: "documentary-photojournalism-photographers",
            //             children: [
            //                 { id: "news-photographers", title: "News Photographers", slug: "news-photographers" },
            //                 { id: "documentary-photographers", title: "Documentary Photographers", slug: "documentary-photographers" },
            //                 { id: "war-conflict-photographers", title: "War and Conflict Photographers", slug: "war-conflict-photographers" },
            //                 { id: "travel-photographers", title: "Travel Photographers", slug: "travel-photographers" }
            //             ]
            //         },
            //         {
            //             id: "fine-art-photographers",
            //             title: "Fine Art Photographers",
            //             slug: "fine-art-photographers",
            //             children: [
            //                 { id: "conceptual-photographers", title: "Conceptual Photographers", slug: "conceptual-photographers" },
            //                 { id: "landscape-photographers", title: "Landscape Photographers", slug: "landscape-photographers" },
            //                 { id: "black-white-photographers", title: "Black and White Photographers", slug: "black-white-photographers" },
            //                 { id: "abstract-photographers", title: "Abstract Photographers", slug: "abstract-photographers" }
            //             ]
            //         },
            //         {
            //             id: "sports-photographers",
            //             title: "Sports Photographers",
            //             slug: "sports-photographers",
            //             children: [
            //                 { id: "action-sports-photographers", title: "Action Sports Photographers", slug: "action-sports-photographers" },
            //                 { id: "studio-sports-photographers", title: "Studio Sports Photographers", slug: "studio-sports-photographers" },
            //                 { id: "sports-journalism-photographers", title: "Sports Journalism Photographers", slug: "sports-journalism-photographers" }
            //             ]
            //         },
            //         {
            //             id: "nature-wildlife-photographers",
            //             title: "Nature and Wildlife Photographers",
            //             slug: "nature-wildlife-photographers",
            //             children: [
            //                 { id: "wildlife-photographers", title: "Wildlife Photographers", slug: "wildlife-photographers" },
            //                 { id: "nature-photographers", title: "Nature Photographers", slug: "nature-photographers" },
            //                 { id: "underwater-photographers", title: "Underwater Photographers", slug: "underwater-photographers" }
            //             ]
            //         },
            //         {
            //             id: "photographers-social-media-influencers",
            //             title: "Photographers for Social Media and Influencers",
            //             slug: "photographers-social-media-influencers",
            //             children: [
            //                 { id: "influencer-photographers", title: "Influencer Photographers", slug: "influencer-photographers" },
            //                 { id: "lifestyle-influencer-photographers", title: "Lifestyle Influencer Photographers", slug: "lifestyle-influencer-photographers" },
            //                 { id: "product-photography-influencers", title: "Product Photography for Influencers", slug: "product-photography-influencers" }
            //             ]
            //         },
            //         {
            //             id: "commercial-fashion-advertising-photographers",
            //             title: "Commercial Fashion and Advertising Photographers",
            //             slug: "commercial-fashion-advertising-photographers",
            //             children: [
            //                 { id: "editorial-fashion-photographers", title: "Editorial Fashion Photographers", slug: "editorial-fashion-photographers" },
            //                 { id: "advertising-commercial-product-photographers", title: "Advertising and Commercial Product Photographers", slug: "advertising-commercial-product-photographers" },
            //                 { id: "cosmetic-photographers", title: "Cosmetic Photographers", slug: "cosmetic-photographers" }
            //             ]
            //         },
            //         {
            //             id: "pet-photographers",
            //             title: "Pet Photographers",
            //             slug: "pet-photographers",
            //             children: [
            //                 { id: "pet-portrait-photographers", title: "Pet Portrait Photographers", slug: "pet-portrait-photographers" },
            //                 { id: "animal-behavior-photographers", title: "Animal Behavior Photographers", slug: "animal-behavior-photographers" }
            //             ]
            //         },
            //         {
            //             id: "aerial-photographers",
            //             title: "Aerial Photographers",
            //             slug: "aerial-photographers",
            //             children: [
            //                 { id: "drone-photographers", title: "Drone Photographers", slug: "drone-photographers" },
            //                 { id: "aerial-mapping-surveying-photographers", title: "Aerial Mapping and Surveying Photographers", slug: "aerial-mapping-surveying-photographers" }
            //             ]
            //         },
            //         {
            //             id: "wedding-engagement-photographers",
            //             title: "Wedding and Engagement Photographers",
            //             slug: "wedding-engagement-photographers",
            //             children: [
            //                 { id: "wedding-photographers", title: "Wedding Photographers", slug: "wedding-photographers" },
            //                 { id: "engagement-photographers", title: "Engagement Photographers", slug: "engagement-photographers" }
            //             ]
            //         },
            //         {
            //             id: "stock-photographers",
            //             title: "Stock Photographers",
            //             slug: "stock-photographers",
            //             children: [
            //                 { id: "stock-photography-creators", title: "Stock Photography Creators", slug: "stock-photography-creators" }
            //             ]
            //         },
            //         {
            //             id: "virtual-digital-photographers",
            //             title: "Virtual and Digital Photographers",
            //             slug: "virtual-digital-photographers",
            //             children: [
            //                 { id: "3d-virtual-photographers", title: "3D and Virtual Photographers", slug: "3d-virtual-photographers" },
            //                 { id: "360-degree-photographers", title: "360-Degree Photographers", slug: "360-degree-photographers" }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "emcee-master-of-ceremonies",
            //     title: "Emcee (Master of Ceremonies)",
            //     slug: "emcee-master-of-ceremonies",
            //     children: [
            //         {
            //             id: "corporate-event-emcee",
            //             title: "Corporate Event Emcee",
            //             slug: "corporate-event-emcee",
            //             children: [
            //                 { id: "conference-emcee", title: "Conference Emcee", slug: "conference-emcee" },
            //                 { id: "award-ceremony-emcee", title: "Award Ceremony Emcee", slug: "award-ceremony-emcee" },
            //                 { id: "team-building-event-emcee", title: "Team-building Event Emcee", slug: "team-building-event-emcee" }
            //             ]
            //         },
            //         {
            //             id: "wedding-emcee",
            //             title: "Wedding Emcee",
            //             slug: "wedding-emcee",
            //             children: [
            //                 { id: "traditional-wedding-emcee", title: "Traditional Wedding Emcee", slug: "traditional-wedding-emcee" },
            //                 { id: "casual-wedding-emcee", title: "Casual Wedding Emcee", slug: "casual-wedding-emcee" },
            //                 { id: "destination-wedding-emcee", title: "Destination Wedding Emcee", slug: "destination-wedding-emcee" }
            //             ]
            //         },
            //         {
            //             id: "entertainment-event-emcee",
            //             title: "Entertainment/Event Emcee",
            //             slug: "entertainment-event-emcee",
            //             children: [
            //                 { id: "music-festival-emcee", title: "Music Festival Emcee", slug: "music-festival-emcee" },
            //                 { id: "comedy-show-emcee", title: "Comedy Show Emcee", slug: "comedy-show-emcee" },
            //                 { id: "dance-theatre-emcee", title: "Dance or Theatre Emcee", slug: "dance-theatre-emcee" }
            //             ]
            //         },
            //         {
            //             id: "charity-event-emcee",
            //             title: "Charity Event Emcee",
            //             slug: "charity-event-emcee",
            //             children: [
            //                 { id: "fundraising-gala-emcee", title: "Fundraising Gala Emcee", slug: "fundraising-gala-emcee" },
            //                 { id: "charity-auction-emcee", title: "Charity Auction Emcee", slug: "charity-auction-emcee" }
            //             ]
            //         },
            //         {
            //             id: "sports-event-emcee",
            //             title: "Sports Event Emcee",
            //             slug: "sports-event-emcee",
            //             children: [
            //                 { id: "tournament-emcee", title: "Tournament Emcee", slug: "tournament-emcee" },
            //                 { id: "award-presentation-emcee", title: "Award Presentation Emcee", slug: "award-presentation-emcee" },
            //                 { id: "marathon-race-emcee", title: "Marathon/Race Emcee", slug: "marathon-race-emcee" }
            //             ]
            //         },
            //         {
            //             id: "festival-conference-emcee",
            //             title: "Festival/Conference Emcee",
            //             slug: "festival-conference-emcee",
            //             children: [
            //                 { id: "cultural-festival-emcee", title: "Cultural Festival Emcee", slug: "cultural-festival-emcee" },
            //                 { id: "food-festival-emcee", title: "Food Festival Emcee", slug: "food-festival-emcee" },
            //                 { id: "exposition-trade-show-emcee", title: "Exposition/Trade Show Emcee", slug: "exposition-trade-show-emcee" }
            //             ]
            //         },
            //         {
            //             id: "tv-radio-host-emcee",
            //             title: "TV/Radio Host Emcee",
            //             slug: "tv-radio-host-emcee",
            //             children: [
            //                 { id: "talk-show-emcee", title: "Talk Show Emcee", slug: "talk-show-emcee" },
            //                 { id: "radio-show-emcee", title: "Radio Show Emcee", slug: "radio-show-emcee" }
            //             ]
            //         },
            //         {
            //             id: "conference-panel-discussion-emcee",
            //             title: "Conference/Panel Discussion Emcee",
            //             slug: "conference-panel-discussion-emcee",
            //             children: [
            //                 { id: "panel-moderator-emcee", title: "Panel Moderator", slug: "panel-moderator-emcee" },
            //                 { id: "workshop-emcee", title: "Workshop Emcee", slug: "workshop-emcee" }
            //             ]
            //         },
            //         {
            //             id: "interactive-workshop-emcee",
            //             title: "Interactive/Workshop Emcee",
            //             slug: "interactive-workshop-emcee",
            //             children: [
            //                 { id: "team-building-workshop-emcee", title: "Team-building Workshop Emcee", slug: "team-building-workshop-emcee" },
            //                 { id: "learning-session-emcee", title: "Learning Session Emcee", slug: "learning-session-emcee" }
            //             ]
            //         },
            //         {
            //             id: "product-launch-emcee",
            //             title: "Product Launch Emcee",
            //             slug: "product-launch-emcee",
            //             children: [
            //                 { id: "tech-product-launch-emcee", title: "Tech Product Launch Emcee", slug: "tech-product-launch-emcee" },
            //                 { id: "fashion-product-showcase-emcee", title: "Fashion/Product Showcase Emcee", slug: "fashion-product-showcase-emcee" }
            //             ]
            //         },
            //         {
            //             id: "virtual-event-emcee",
            //             title: "Virtual Event Emcee",
            //             slug: "virtual-event-emcee",
            //             children: [
            //                 { id: "webinar-emcee", title: "Webinar Emcee", slug: "webinar-emcee" },
            //                 { id: "virtual-conference-emcee", title: "Virtual Conference Emcee", slug: "virtual-conference-emcee" },
            //                 { id: "live-streaming-emcee", title: "Live Streaming Emcee", slug: "live-streaming-emcee" }
            //             ]
            //         },
            //         {
            //             id: "cultural-religious-emcee",
            //             title: "Cultural or Religious Emcee",
            //             slug: "cultural-religious-emcee",
            //             children: [
            //                 { id: "religious-ceremony-emcee", title: "Religious Ceremony Emcee", slug: "religious-ceremony-emcee" },
            //                 { id: "cultural-festival-emcee-religious", title: "Cultural Festival Emcee", slug: "cultural-festival-emcee-religious" }
            //             ]
            //         },
            //         {
            //             id: "celebrity-entertainment-emcee",
            //             title: "Celebrity/Entertainment Emcee",
            //             slug: "celebrity-entertainment-emcee",
            //             children: [
            //                 { id: "award-show-emcee", title: "Award Show Emcee", slug: "award-show-emcee" },
            //                 { id: "celebrity-gala-emcee", title: "Celebrity Gala Emcee", slug: "celebrity-gala-emcee" }
            //             ]
            //         },
            //         {
            //             id: "community-event-emcee",
            //             title: "Community Event Emcee",
            //             slug: "community-event-emcee",
            //             children: [
            //                 { id: "charity-run-emcee", title: "Charity Run Emcee", slug: "charity-run-emcee" },
            //                 { id: "community-festival-emcee", title: "Community Festival Emcee", slug: "community-festival-emcee" }
            //             ]
            //         },
            //         {
            //             id: "humorous-emcee",
            //             title: "Humorous Emcee",
            //             slug: "humorous-emcee",
            //             children: [
            //                 { id: "comedy-emcee", title: "Comedy Emcee", slug: "comedy-emcee" },
            //                 { id: "lighthearted-wedding-emcee", title: "Lighthearted Wedding Emcee", slug: "lighthearted-wedding-emcee" }
            //             ]
            //         }
            //     ]
            // }
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

            //         {
            //             id: "historical-cultural-destination-weddings",
            //             title: "Destination Weddings in Historical or Cultural Locations",
            //             slug: "historical-cultural-destination-weddings",
            //             children: [
            //                 { id: "florence-italy", title: "Florence (Italy)", slug: "florence-italy" },
            //                 { id: "kyoto-japan", title: "Kyoto (Japan)", slug: "kyoto-japan" },
            //                 { id: "paris-france", title: "Paris (France)", slug: "paris-france" },
            //                 { id: "istanbul-turkey", title: "Istanbul (Turkey)", slug: "istanbul-turkey" },
            //                 { id: "machu-picchu-peru", title: "Machu Picchu (Peru)", slug: "machu-picchu-peru" },
            //                 { id: "cairo-egypt", title: "Cairo (Egypt)", slug: "cairo-egypt" },
            //                 { id: "venice-italy", title: "Venice (Italy)", slug: "venice-italy" },
            //                 { id: "rome-italy", title: "Rome (Italy)", slug: "rome-italy" },
            //                 { id: "petra-jordan", title: "Petra (Jordan)", slug: "petra-jordan" },
            //                 { id: "athens-greece", title: "Athens (Greece)", slug: "athens-greece" },
            //                 { id: "dubrovnik-croatia", title: "Dubrovnik (Croatia)", slug: "dubrovnik-croatia" },
            //                 { id: "seville-spain", title: "Seville (Spain)", slug: "seville-spain" },
            //                 { id: "lisbon-portugal", title: "Lisbon (Portugal)", slug: "lisbon-portugal" },
            //                 { id: "cartagena-colombia", title: "Cartagena (Colombia)", slug: "cartagena-colombia" },
            //                 { id: "luxor-egypt", title: "Luxor (Egypt)", slug: "luxor-egypt" },
            //                 { id: "rajasthan-india", title: "Rajasthan (India)", slug: "rajasthan-india" },
            //                 { id: "st-petersburg-russia", title: "St. Petersburg (Russia)", slug: "st-petersburg-russia" },
            //                 { id: "cinque-terre-italy", title: "Cinque Terre (Italy)", slug: "cinque-terre-italy" },
            //                 { id: "kyiv-ukraine", title: "Kyiv (Ukraine)", slug: "kyiv-ukraine" },
            //                 { id: "edinburgh-scotland", title: "Edinburgh (Scotland)", slug: "edinburgh-scotland" }
            //             ]
            //         },
            //         {
            //             id: "desert-weddings",
            //             title: "Desert Weddings",
            //             slug: "desert-weddings",
            //             children: [
            //                 { id: "dubai-uae-desert", title: "Dubai (UAE)", slug: "dubai-uae-desert" },
            //                 { id: "marrakech-morocco", title: "Marrakech (Morocco)", slug: "marrakech-morocco" },
            //                 { id: "wadi-rum-jordan", title: "Wadi Rum (Jordan)", slug: "wadi-rum-jordan" },
            //                 { id: "monument-valley-usa", title: "Monument Valley (USA)", slug: "monument-valley-usa" },
            //                 { id: "sahara-desert", title: "Sahara Desert (Tunisia, Algeria, Morocco)", slug: "sahara-desert" },
            //                 { id: "atacama-desert-chile", title: "Atacama Desert (Chile)", slug: "atacama-desert-chile" },
            //                 { id: "death-valley-usa", title: "Death Valley (USA)", slug: "death-valley-usa" },
            //                 { id: "joshua-tree-usa", title: "Joshua Tree National Park (USA)", slug: "joshua-tree-usa" },
            //                 { id: "cabo-san-lucas-mexico-desert", title: "Cabo San Lucas (Mexico)", slug: "cabo-san-lucas-mexico-desert" },
            //                 { id: "namib-desert-namibia", title: "Namib Desert (Namibia)", slug: "namib-desert-namibia" },
            //                 { id: "sedona-usa", title: "Sedona (USA)", slug: "sedona-usa" },
            //                 { id: "cairo-giza-egypt-desert", title: "Cairo & The Giza Pyramids (Egypt)", slug: "cairo-giza-egypt-desert" },
            //                 { id: "rajasthan-desert-india", title: "Rajasthan Desert (India)", slug: "rajasthan-desert-india" },
            //                 { id: "albuquerque-usa", title: "Albuquerque (New Mexico, USA)", slug: "albuquerque-usa" },
            //                 { id: "oman-middle-east", title: "Oman (Middle East)", slug: "oman-middle-east" },
            //                 { id: "bardenas-reales-spain", title: "Bardenas Reales (Spain)", slug: "bardenas-reales-spain" },
            //                 { id: "taklamakan-china", title: "Taklamakan Desert (China)", slug: "taklamakan-china" },
            //                 { id: "karakum-turkmenistan", title: "Karakum Desert (Turkmenistan)", slug: "karakum-turkmenistan" },
            //                 { id: "white-sands-usa", title: "White Sands National Park (USA)", slug: "white-sands-usa" },
            //                 { id: "dubai-desert-reserve", title: "Dubai Desert Conservation Reserve (UAE)", slug: "dubai-desert-reserve" },
            //                 { id: "salar-de-uyuni-bolivia", title: "Salar de Uyuni (Bolivia)", slug: "salar-de-uyuni-bolivia" },
            //                 { id: "sonoran-desert", title: "Sonoran Desert (USA & Mexico)", slug: "sonoran-desert" }
            //             ]
            //         },
            //         {
            //             id: "cultural-religious-weddings",
            //             title: "Cultural and Religious Destination Weddings",
            //             slug: "cultural-religious-weddings",
            //             children: [
            //                 { id: "jerusalem-israel", title: "Jerusalem (Israel)", slug: "jerusalem-israel" },
            //                 { id: "varanasi-india", title: "Varanasi (India)", slug: "varanasi-india" },
            //                 { id: "rome-italy-cultural", title: "Rome (Italy)", slug: "rome-italy-cultural" },
            //                 { id: "kyoto-japan-cultural", title: "Kyoto (Japan)", slug: "kyoto-japan-cultural" },
            //                 { id: "bali-indonesia-cultural", title: "Bali (Indonesia)", slug: "bali-indonesia-cultural" },
            //                 { id: "machu-picchu-peru-cultural", title: "Machu Picchu (Peru)", slug: "machu-picchu-peru-cultural" },
            //                 { id: "buda-castle-hungary", title: "Buda Castle (Budapest, Hungary)", slug: "buda-castle-hungary" },
            //                 { id: "kyiv-ukraine-cultural", title: "Kyiv (Ukraine)", slug: "kyiv-ukraine-cultural" },
            //                 { id: "mecca-saudi-arabia", title: "Mecca (Saudi Arabia)", slug: "mecca-saudi-arabia" },
            //                 { id: "giza-egypt", title: "Giza (Egypt)", slug: "giza-egypt" },
            //                 { id: "rajasthan-india-cultural", title: "Rajasthan (India)", slug: "rajasthan-india-cultural" },
            //                 { id: "santorini-greece-cultural", title: "Santorini (Greece)", slug: "santorini-greece-cultural" },
            //                 { id: "athens-greece-cultural", title: "Athens (Greece)", slug: "athens-greece-cultural" },
            //                 { id: "jericoacoara-brazil", title: "Jericoacoara (Brazil)", slug: "jericoacoara-brazil" },
            //                 { id: "mysore-india", title: "Mysore (India)", slug: "mysore-india" },
            //                 { id: "paris-france-cultural", title: "Paris (France)", slug: "paris-france-cultural" },
            //                 { id: "cordoba-argentina", title: "Córdoba (Argentina)", slug: "cordoba-argentina" },
            //                 { id: "bologna-italy", title: "Bologna (Italy)", slug: "bologna-italy" },
            //                 { id: "santiago-de-compostela", title: "Santiago de Compostela (Spain)", slug: "santiago-de-compostela" },
            //                 { id: "angkor-wat-cambodia", title: "Angkor Wat (Cambodia)", slug: "angkor-wat-cambodia" },
            //                 { id: "istanbul-turkey-cultural", title: "Istanbul (Turkey)", slug: "istanbul-turkey-cultural" },
            //                 { id: "montecassino-abbey", title: "Benedictine Abbey of Montecassino (Italy)", slug: "montecassino-abbey" },
            //                 { id: "ubud-bali", title: "Ubud (Bali, Indonesia)", slug: "ubud-bali" },
            //                 { id: "cairo-giza-egypt-cultural", title: "Cairo & The Giza Pyramids (Egypt)", slug: "cairo-giza-egypt-cultural" },
            //                 { id: "moscow-russia", title: "Moscow (Russia)", slug: "moscow-russia" }
            //             ]
            //         },
            //         {
            //             id: "cruise-ship-weddings",
            //             title: "Cruise Ship Weddings",
            //             slug: "cruise-ship-weddings",
            //             children: [
            //                 { id: "caribbean-cruises", title: "Caribbean Cruises", slug: "caribbean-cruises" },
            //                 { id: "mediterranean-cruises", title: "Mediterranean Cruises", slug: "mediterranean-cruises" },
            //                 { id: "alaskan-cruises", title: "Alaskan Cruises", slug: "alaskan-cruises" },
            //                 { id: "hawaiian-cruises", title: "Hawaiian Cruises", slug: "hawaiian-cruises" },
            //                 { id: "alaska-bc-cruises", title: "Alaska & British Columbia (Pacific Northwest)", slug: "alaska-bc-cruises" },
            //                 { id: "norwegian-fjord-cruises", title: "Norwegian Fjord Cruises", slug: "norwegian-fjord-cruises" },
            //                 { id: "south-pacific-cruises", title: "South Pacific Cruises", slug: "south-pacific-cruises" },
            //                 { id: "bermuda-cruises", title: "Bermuda Cruises", slug: "bermuda-cruises" },
            //                 { id: "australia-nz-cruises", title: "Australia & New Zealand Cruises", slug: "australia-nz-cruises" },
            //                 { id: "mexican-riviera-cruises", title: "Mexican Riviera Cruises", slug: "mexican-riviera-cruises" },
            //                 { id: "new-england-canada-cruises", title: "New England & Canada Cruises", slug: "new-england-canada-cruises" },
            //                 { id: "panama-canal-cruises", title: "Panama Canal Cruises", slug: "panama-canal-cruises" },
            //                 { id: "asian-cruises", title: "Asian Cruises (Southeast Asia)", slug: "asian-cruises" },
            //                 { id: "antarctic-cruises", title: "Antarctic Cruises", slug: "antarctic-cruises" },
            //                 { id: "transatlantic-cruises", title: "Transatlantic Cruises", slug: "transatlantic-cruises" },
            //                 { id: "french-riviera-cruises", title: "French Riviera & Mediterranean Cruises", slug: "french-riviera-cruises" },
            //                 { id: "hawaiian-pacific-cruises", title: "Hawaiian Islands & Pacific Cruises", slug: "hawaiian-pacific-cruises" },
            //                 { id: "south-american-cruises", title: "South American Cruises", slug: "south-american-cruises" }
            //             ]
            //         },
            //         {
            //             id: "vineyard-weddings",
            //             title: "Vineyard Weddings",
            //             slug: "vineyard-weddings",
            //             children: [
            //                 { id: "napa-valley-usa", title: "Napa Valley (California, USA)", slug: "napa-valley-usa" },
            //                 { id: "sonoma-valley-usa", title: "Sonoma Valley (California, USA)", slug: "sonoma-valley-usa" },
            //                 { id: "tuscany-italy", title: "Tuscany (Italy)", slug: "tuscany-italy" },
            //                 { id: "bordeaux-france", title: "Bordeaux (France)", slug: "bordeaux-france" },
            //                 { id: "champagne-france", title: "Champagne (France)", slug: "champagne-france" },
            //                 { id: "mendoza-argentina", title: "Mendoza (Argentina)", slug: "mendoza-argentina" },
            //                 { id: "stellenbosch-south-africa", title: "Stellenbosch (South Africa)", slug: "stellenbosch-south-africa" },
            //                 { id: "la-rioja-spain", title: "La Rioja (Spain)", slug: "la-rioja-spain" },
            //                 { id: "willamette-valley-usa", title: "Willamette Valley (Oregon, USA)", slug: "willamette-valley-usa" },
            //                 { id: "alto-adige-italy", title: "Alto Adige (Italy)", slug: "alto-adige-italy" },
            //                 { id: "paso-robles-usa", title: "Paso Robles (California, USA)", slug: "paso-robles-usa" },
            //                 { id: "piedmont-italy", title: "Piedmont (Italy)", slug: "piedmont-italy" },
            //                 { id: "cote-de-beaune-france", title: "Côte de Beaune (Burgundy, France)", slug: "cote-de-beaune-france" },
            //                 { id: "hawkes-bay-nz", title: "Hawke's Bay (New Zealand)", slug: "hawkes-bay-nz" },
            //                 { id: "washington-state-usa", title: "Washington State (USA)", slug: "washington-state-usa" },
            //                 { id: "marlborough-nz", title: "Marlborough (New Zealand)", slug: "marlborough-nz" },
            //                 { id: "barossa-valley-australia", title: "Barossa Valley (Australia)", slug: "barossa-valley-australia" },
            //                 { id: "mclaren-vale-australia", title: "McLaren Vale (Australia)", slug: "mclaren-vale-australia" },
            //                 { id: "tokaj-hungary", title: "Tokaj (Hungary)", slug: "tokaj-hungary" },
            //                 { id: "finger-lakes-usa", title: "Finger Lakes (New York, USA)", slug: "finger-lakes-usa" },
            //                 { id: "ahr-valley-germany", title: "Ahr Valley (Germany)", slug: "ahr-valley-germany" },
            //                 { id: "swartland-south-africa", title: "Swartland (South Africa)", slug: "swartland-south-africa" },
            //                 { id: "languedoc-roussillon-france", title: "Languedoc-Roussillon (France)", slug: "languedoc-roussillon-france" },
            //                 { id: "coonawarra-australia", title: "Coonawarra (Australia)", slug: "coonawarra-australia" }
            //             ]
            //         },
            //         {
            //             id: "urban-destination-weddings",
            //             title: "Urban Destination Weddings",
            //             slug: "urban-destination-weddings",
            //             children: [
            //                 { id: "new-york-city-usa", title: "New York City (USA)", slug: "new-york-city-usa" },
            //                 { id: "paris-france-urban", title: "Paris (France)", slug: "paris-france-urban" },
            //                 { id: "london-uk", title: "London (United Kingdom)", slug: "london-uk" },
            //                 { id: "tokyo-japan-urban", title: "Tokyo (Japan)", slug: "tokyo-japan-urban" },
            //                 { id: "barcelona-spain", title: "Barcelona (Spain)", slug: "barcelona-spain" },
            //                 { id: "las-vegas-usa", title: "Las Vegas (USA)", slug: "las-vegas-usa" },
            //                 { id: "dubai-uae-urban", title: "Dubai (United Arab Emirates)", slug: "dubai-uae-urban" },
            //                 { id: "rome-italy-urban", title: "Rome (Italy)", slug: "rome-italy-urban" },
            //                 { id: "sydney-australia", title: "Sydney (Australia)", slug: "sydney-australia" },
            //                 { id: "los-angeles-usa", title: "Los Angeles (USA)", slug: "los-angeles-usa" },
            //                 { id: "chicago-usa", title: "Chicago (USA)", slug: "chicago-usa" },
            //                 { id: "berlin-germany", title: "Berlin (Germany)", slug: "berlin-germany" },
            //                 { id: "san-francisco-usa", title: "San Francisco (USA)", slug: "san-francisco-usa" },
            //                 { id: "mexico-city-mexico", title: "Mexico City (Mexico)", slug: "mexico-city-mexico" },
            //                 { id: "amsterdam-netherlands", title: "Amsterdam (Netherlands)", slug: "amsterdam-netherlands" },
            //                 { id: "hong-kong-china", title: "Hong Kong (China)", slug: "hong-kong-china" },
            //                 { id: "seoul-south-korea", title: "Seoul (South Korea)", slug: "seoul-south-korea" },
            //                 { id: "miami-usa", title: "Miami (USA)", slug: "miami-usa" },
            //                 { id: "copenhagen-denmark", title: "Copenhagen (Denmark)", slug: "copenhagen-denmark" },
            //                 { id: "vancouver-canada", title: "Vancouver (Canada)", slug: "vancouver-canada" },
            //                 { id: "lisbon-portugal-urban", title: "Lisbon (Portugal)", slug: "lisbon-portugal-urban" },
            //                 { id: "buenos-aires-argentina", title: "Buenos Aires (Argentina)", slug: "buenos-aires-argentina" },
            //                 { id: "bangkok-thailand", title: "Bangkok (Thailand)", slug: "bangkok-thailand" }
            //             ]
            //         },
            //         {
            //             id: "special-wedding-types",
            //             title: "Special Wedding Types",
            //             slug: "special-wedding-types",
            //             children: [
            //                 {
            //                     id: "adventure-unique-weddings",
            //                     title: "Adventure or Unique Weddings",
            //                     slug: "adventure-unique-weddings",
            //                     children: [
            //                         { id: "iceland-adventure", title: "Iceland", slug: "iceland-adventure" },
            //                         { id: "new-zealand-adventure", title: "New Zealand", slug: "new-zealand-adventure" },
            //                         { id: "swiss-alps-adventure", title: "Swiss Alps (Switzerland)", slug: "swiss-alps-adventure" },
            //                         { id: "costa-rica-adventure", title: "Costa Rica", slug: "costa-rica-adventure" },
            //                         { id: "antarctica", title: "Antarctica", slug: "antarctica" },
            //                         { id: "great-barrier-reef-australia", title: "Australia (Great Barrier Reef)", slug: "great-barrier-reef-australia" },
            //                         { id: "las-vegas-nevada", title: "Las Vegas, Nevada (USA)", slug: "las-vegas-nevada" },
            //                         { id: "machu-picchu-adventure", title: "Machu Picchu (Peru)", slug: "machu-picchu-adventure" },
            //                         { id: "hawaii-adventure", title: "Hawaii (USA)", slug: "hawaii-adventure" },
            //                         { id: "bora-bora-adventure", title: "Bora Bora (French Polynesia)", slug: "bora-bora-adventure" },
            //                         { id: "grand-canyon", title: "Grand Canyon (USA)", slug: "grand-canyon" },
            //                         { id: "kilimanjaro", title: "Kilimanjaro (Tanzania)", slug: "kilimanjaro" },
            //                         { id: "zanzibar-adventure", title: "Zanzibar (Tanzania)", slug: "zanzibar-adventure" },
            //                         { id: "venice-adventure", title: "Venice (Italy)", slug: "venice-adventure" },
            //                         { id: "banff-adventure", title: "Banff National Park (Canada)", slug: "banff-adventure" },
            //                         { id: "south-africa-safari", title: "South Africa (Safari Weddings)", slug: "south-africa-safari" },
            //                         { id: "galapagos", title: "Galápagos Islands (Ecuador)", slug: "galapagos" },
            //                         { id: "norway-northern-lights", title: "Norway (Northern Lights)", slug: "norway-northern-lights" },
            //                         { id: "patagonia", title: "Patagonia (Argentina/Chile)", slug: "patagonia" },
            //                         { id: "scotland-highlands", title: "Scotland (Highland Weddings)", slug: "scotland-highlands" },
            //                         { id: "cappadocia", title: "Cappadocia (Turkey)", slug: "cappadocia" },
            //                         { id: "arizona-usa", title: "Arizona (USA)", slug: "arizona-usa" }
            //                     ]
            //                 },
            //                 {
            //                     id: "private-villa-estate-weddings",
            //                     title: "Private Villa or Estate Weddings",
            //                     slug: "private-villa-estate-weddings",
            //                     children: [
            //                         { id: "tuscany-italy-villa", title: "Tuscany, Italy", slug: "tuscany-italy-villa" },
            //                         { id: "provence-france", title: "Provence, France", slug: "provence-france" },
            //                         { id: "amalfi-coast-villa", title: "Amalfi Coast, Italy", slug: "amalfi-coast-villa" },
            //                         { id: "bali-villa", title: "Bali, Indonesia", slug: "bali-villa" },
            //                         { id: "santorini-villa", title: "Santorini, Greece", slug: "santorini-villa" },
            //                         { id: "bahamas-private-islands", title: "The Bahamas (Private Islands)", slug: "bahamas-private-islands" },
            //                         { id: "maui-hawaii", title: "Maui, Hawaii (USA)", slug: "maui-hawaii" },
            //                         { id: "cote-dazur", title: "Côte d'Azur, France (French Riviera)", slug: "cote-dazur" },
            //                         { id: "lake-como", title: "Lake Como, Italy", slug: "lake-como" },
            //                         { id: "maldives-villa", title: "Maldives", slug: "maldives-villa" },
            //                         { id: "tuscan-countryside", title: "Tuscan Countryside, Italy", slug: "tuscan-countryside" },
            //                         { id: "puglia-italy", title: "Puglia, Italy", slug: "puglia-italy" },
            //                         { id: "palm-springs", title: "Palm Springs, California (USA)", slug: "palm-springs" },
            //                         { id: "ibiza-spain", title: "Ibiza, Spain", slug: "ibiza-spain" },
            //                         { id: "kyoto-villa", title: "Kyoto, Japan", slug: "kyoto-villa" },
            //                         { id: "tulum-villa", title: "Tulum, Mexico", slug: "tulum-villa" },
            //                         { id: "newport-usa", title: "Newport, Rhode Island (USA)", slug: "newport-usa" },
            //                         { id: "sicily-italy", title: "Sicily, Italy", slug: "sicily-italy" },
            //                         { id: "fiji-villa", title: "Fiji", slug: "fiji-villa" },
            //                         { id: "saint-tropez", title: "Saint-Tropez, France", slug: "saint-tropez" },
            //                         { id: "bora-bora-villa", title: "Bora Bora, French Polynesia", slug: "bora-bora-villa" },
            //                         { id: "dubai-villa", title: "Dubai, United Arab Emirates", slug: "dubai-villa" },
            //                         { id: "vancouver-canada", title: "Vancouver, British Columbia (Canada)", slug: "vancouver-canada" },
            //                         { id: "punta-mita", title: "Punta Mita, Mexico", slug: "punta-mita" },
            //                         { id: "cabo-san-lucas-villa", title: "Cabo San Lucas, Mexico", slug: "cabo-san-lucas-villa" }
            //                     ]
            //                 },
            //                 {
            //                     id: "snow-winter-weddings",
            //                     title: "Snow and Winter Weddings",
            //                     slug: "snow-winter-weddings",
            //                     children: [
            //                         { id: "switzerland-winter", title: "Switzerland", slug: "switzerland-winter" },
            //                         { id: "banff-winter", title: "Banff National Park, Canada", slug: "banff-winter" },
            //                         { id: "lapland-finland", title: "Lapland, Finland", slug: "lapland-finland" },
            //                         { id: "iceland-winter", title: "Iceland", slug: "iceland-winter" },
            //                         { id: "colorado-usa", title: "Colorado, USA", slug: "colorado-usa" },
            //                         { id: "norway-winter", title: "Norway", slug: "norway-winter" },
            //                         { id: "whistler-canada", title: "Whistler, Canada", slug: "whistler-canada" },
            //                         { id: "lake-tahoe", title: "Lake Tahoe, USA", slug: "lake-tahoe" },
            //                         { id: "tyrol-austria", title: "Austria (Tyrol)", slug: "tyrol-austria" },
            //                         { id: "new-york-upstate", title: "New York, USA (Upstate and Catskills)", slug: "new-york-upstate" },
            //                         { id: "quebec-canada", title: "Quebec, Canada", slug: "quebec-canada" },
            //                         { id: "sapporo-japan", title: "Sapporo, Japan", slug: "sapporo-japan" },
            //                         { id: "prague-czech", title: "Czech Republic (Prague)", slug: "prague-czech" },
            //                         { id: "rovaniemi-finland", title: "Finland (Rovaniemi)", slug: "rovaniemi-finland" },
            //                         { id: "levi-finland", title: "Finland (Levi)", slug: "levi-finland" }
            //                     ]
            //                 },
            //                 {
            //                     id: "elopement-weddings",
            //                     title: "Elopement Weddings",
            //                     slug: "elopement-weddings",
            //                     children: [
            //                         { id: "iceland-elopement", title: "Iceland", slug: "iceland-elopement" },
            //                         { id: "hawaii-elopement", title: "Hawaii, USA", slug: "hawaii-elopement" },
            //                         { id: "santorini-elopement", title: "Santorini, Greece", slug: "santorini-elopement" },
            //                         { id: "paris-elopement", title: "Paris, France", slug: "paris-elopement" },
            //                         { id: "venice-elopement", title: "Venice, Italy", slug: "venice-elopement" },
            //                         { id: "lake-como-elopement", title: "Lake Como, Italy", slug: "lake-como-elopement" },
            //                         { id: "tulum-elopement", title: "Tulum, Mexico", slug: "tulum-elopement" },
            //                         { id: "swiss-alps-elopement", title: "Swiss Alps, Switzerland", slug: "swiss-alps-elopement" },
            //                         { id: "new-york-city-elopement", title: "New York City, USA", slug: "new-york-city-elopement" },
            //                         { id: "bora-bora-elopement", title: "Bora Bora, French Polynesia", slug: "bora-bora-elopement" }
            //                     ]
            //                 }
            //             ]
            //         },
            //         {
            //             id: "special-wedding-types",
            //             title: "Special Wedding Types",
            //             slug: "special-wedding-types",
            //             children: [
            //                 {
            //                     id: "adventure-unique-weddings",
            //                     title: "Adventure or Unique Weddings",
            //                     slug: "adventure-unique-weddings",
            //                     children: [
            //                         { id: "iceland-adventure", title: "Iceland", slug: "iceland-adventure" },
            //                         { id: "new-zealand-adventure", title: "New Zealand", slug: "new-zealand-adventure" },
            //                         { id: "swiss-alps-adventure", title: "Swiss Alps (Switzerland)", slug: "swiss-alps-adventure" },
            //                         { id: "costa-rica-adventure", title: "Costa Rica", slug: "costa-rica-adventure" },
            //                         { id: "antarctica", title: "Antarctica", slug: "antarctica" },
            //                         { id: "great-barrier-reef-australia", title: "Australia (Great Barrier Reef)", slug: "great-barrier-reef-australia" },
            //                         { id: "las-vegas-nevada", title: "Las Vegas, Nevada (USA)", slug: "las-vegas-nevada" },
            //                         { id: "machu-picchu-adventure", title: "Machu Picchu (Peru)", slug: "machu-picchu-adventure" },
            //                         { id: "hawaii-adventure", title: "Hawaii (USA)", slug: "hawaii-adventure" },
            //                         { id: "bora-bora-adventure", title: "Bora Bora (French Polynesia)", slug: "bora-bora-adventure" },
            //                         { id: "grand-canyon", title: "Grand Canyon (USA)", slug: "grand-canyon" },
            //                         { id: "kilimanjaro", title: "Kilimanjaro (Tanzania)", slug: "kilimanjaro" },
            //                         { id: "zanzibar-adventure", title: "Zanzibar (Tanzania)", slug: "zanzibar-adventure" },
            //                         { id: "venice-adventure", title: "Venice (Italy)", slug: "venice-adventure" },
            //                         { id: "banff-adventure", title: "Banff National Park (Canada)", slug: "banff-adventure" },
            //                         { id: "south-africa-safari", title: "South Africa (Safari Weddings)", slug: "south-africa-safari" },
            //                         { id: "galapagos", title: "Galápagos Islands (Ecuador)", slug: "galapagos" },
            //                         { id: "norway-northern-lights", title: "Norway (Northern Lights)", slug: "norway-northern-lights" },
            //                         { id: "patagonia", title: "Patagonia (Argentina/Chile)", slug: "patagonia" },
            //                         { id: "scotland-highlands", title: "Scotland (Highland Weddings)", slug: "scotland-highlands" },
            //                         { id: "cappadocia", title: "Cappadocia (Turkey)", slug: "cappadocia" },
            //                         { id: "arizona-usa", title: "Arizona (USA)", slug: "arizona-usa" }
            //                     ]
            //                 },
            //                 {
            //                     id: "private-villa-estate-weddings",
            //                     title: "Private Villa or Estate Weddings",
            //                     slug: "private-villa-estate-weddings",
            //                     children: [
            //                         { id: "tuscany-italy-villa", title: "Tuscany, Italy", slug: "tuscany-italy-villa" },
            //                         { id: "provence-france", title: "Provence, France", slug: "provence-france" },
            //                         { id: "amalfi-coast-villa", title: "Amalfi Coast, Italy", slug: "amalfi-coast-villa" },
            //                         { id: "bali-villa", title: "Bali, Indonesia", slug: "bali-villa" },
            //                         { id: "santorini-villa", title: "Santorini, Greece", slug: "santorini-villa" },
            //                         { id: "bahamas-private-islands", title: "The Bahamas (Private Islands)", slug: "bahamas-private-islands" },
            //                         { id: "maui-hawaii", title: "Maui, Hawaii (USA)", slug: "maui-hawaii" },
            //                         { id: "cote-dazur", title: "Côte d'Azur, France (French Riviera)", slug: "cote-dazur" },
            //                         { id: "lake-como", title: "Lake Como, Italy", slug: "lake-como" },
            //                         { id: "maldives-villa", title: "Maldives", slug: "maldives-villa" },
            //                         { id: "tuscan-countryside", title: "Tuscan Countryside, Italy", slug: "tuscan-countryside" },
            //                         { id: "puglia-italy", title: "Puglia, Italy", slug: "puglia-italy" },
            //                         { id: "palm-springs", title: "Palm Springs, California (USA)", slug: "palm-springs" },
            //                         { id: "ibiza-spain", title: "Ibiza, Spain", slug: "ibiza-spain" },
            //                         { id: "kyoto-villa", title: "Kyoto, Japan", slug: "kyoto-villa" },
            //                         { id: "tulum-villa", title: "Tulum, Mexico", slug: "tulum-villa" },
            //                         { id: "newport-usa", title: "Newport, Rhode Island (USA)", slug: "newport-usa" },
            //                         { id: "sicily-italy", title: "Sicily, Italy", slug: "sicily-italy" },
            //                         { id: "fiji-villa", title: "Fiji", slug: "fiji-villa" },
            //                         { id: "saint-tropez", title: "Saint-Tropez, France", slug: "saint-tropez" },
            //                         { id: "bora-bora-villa", title: "Bora Bora, French Polynesia", slug: "bora-bora-villa" },
            //                         { id: "dubai-villa", title: "Dubai, United Arab Emirates", slug: "dubai-villa" },
            //                         { id: "vancouver-canada", title: "Vancouver, British Columbia (Canada)", slug: "vancouver-canada" },
            //                         { id: "punta-mita", title: "Punta Mita, Mexico", slug: "punta-mita" },
            //                         { id: "cabo-san-lucas-villa", title: "Cabo San Lucas, Mexico", slug: "cabo-san-lucas-villa" }
            //                     ]
            //                 },
            //                 {
            //                     id: "snow-winter-weddings",
            //                     title: "Snow and Winter Weddings",
            //                     slug: "snow-winter-weddings",
            //                     children: [
            //                         { id: "switzerland-winter", title: "Switzerland", slug: "switzerland-winter" },
            //                         { id: "banff-winter", title: "Banff National Park, Canada", slug: "banff-winter" },
            //                         { id: "lapland-finland", title: "Lapland, Finland", slug: "lapland-finland" },
            //                         { id: "iceland-winter", title: "Iceland", slug: "iceland-winter" },
            //                         { id: "colorado-usa", title: "Colorado, USA", slug: "colorado-usa" },
            //                         { id: "norway-winter", title: "Norway", slug: "norway-winter" },
            //                         { id: "whistler-canada", title: "Whistler, Canada", slug: "whistler-canada" },
            //                         { id: "lake-tahoe", title: "Lake Tahoe, USA", slug: "lake-tahoe" },
            //                         { id: "tyrol-austria", title: "Austria (Tyrol)", slug: "tyrol-austria" },
            //                         { id: "new-york-upstate", title: "New York, USA (Upstate and Catskills)", slug: "new-york-upstate" },
            //                         { id: "quebec-canada", title: "Quebec, Canada", slug: "quebec-canada" },
            //                         { id: "sapporo-japan", title: "Sapporo, Japan", slug: "sapporo-japan" },
            //                         { id: "prague-czech", title: "Czech Republic (Prague)", slug: "prague-czech" },
            //                         { id: "rovaniemi-finland", title: "Finland (Rovaniemi)", slug: "rovaniemi-finland" },
            //                         { id: "levi-finland", title: "Finland (Levi)", slug: "levi-finland" }
            //                     ]
            //                 },
            //                 {
            //                     id: "elopement-weddings",
            //                     title: "Elopement Weddings",
            //                     slug: "elopement-weddings",
            //                     children: [
            //                         { id: "iceland-elopement", title: "Iceland", slug: "iceland-elopement" },
            //                         { id: "hawaii-elopement", title: "Hawaii, USA", slug: "hawaii-elopement" },
            //                         { id: "santorini-elopement", title: "Santorini, Greece", slug: "santorini-elopement" },
            //                         { id: "paris-elopement", title: "Paris, France", slug: "paris-elopement" },
            //                         { id: "venice-elopement", title: "Venice, Italy", slug: "venice-elopement" },
            //                         { id: "lake-como-elopement", title: "Lake Como, Italy", slug: "lake-como-elopement" },
            //                         { id: "tulum-elopement", title: "Tulum, Mexico", slug: "tulum-elopement" },
            //                         { id: "swiss-alps-elopement", title: "Swiss Alps, Switzerland", slug: "swiss-alps-elopement" },
            //                         { id: "new-york-city-elopement", title: "New York City, USA", slug: "new-york-city-elopement" },
            //                         { id: "bora-bora-elopement", title: "Bora Bora, French Polynesia", slug: "bora-bora-elopement" }
            //                     ]
            //                 }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "wedding-styles",
            //     title: "Wedding Styles",
            //     slug: "wedding-styles",
            //     children: [
            //         {
            //             id: "themed-weddings",
            //             title: "Themed Weddings",
            //             slug: "themed-weddings",
            //             children: [
            //                 { id: "fairytale-weddings-themed", title: "Fairytale Weddings", slug: "fairytale-weddings-themed" },
            //                 { id: "vintage-weddings", title: "Vintage Weddings", slug: "vintage-weddings" },
            //                 { id: "seasonal-weddings", title: "Seasonal Weddings", slug: "seasonal-weddings" },
            //                 { id: "beach-nautical-weddings", title: "Beach or Nautical Weddings", slug: "beach-nautical-weddings" },
            //                 { id: "rustic-weddings", title: "Rustic Weddings", slug: "rustic-weddings" },
            //                 { id: "fantasy-fairytale-weddings", title: "Fantasy and Fairytale Weddings", slug: "fantasy-fairytale-weddings" },
            //                 { id: "cultural-themed-weddings", title: "Cultural and Traditional Themed Weddings", slug: "cultural-themed-weddings" },
            //                 { id: "travel-adventure-weddings", title: "Travel and Adventure Weddings", slug: "travel-adventure-weddings" },
            //                 { id: "music-themed-weddings", title: "Music-Themed Weddings", slug: "music-themed-weddings" },
            //                 { id: "sports-themed-weddings", title: "Sports-Themed Weddings", slug: "sports-themed-weddings" },
            //                 { id: "gothic-dark-weddings", title: "Gothic or Dark-Themed Weddings", slug: "gothic-dark-weddings" },
            //                 { id: "steampunk-weddings", title: "Steampunk Weddings", slug: "steampunk-weddings" }
            //             ]
            //         },
            //         {
            //             id: "modern-weddings",
            //             title: "Modern Weddings",
            //             slug: "modern-weddings",
            //             children: [
            //                 { id: "minimalist-weddings", title: "Minimalist Weddings", slug: "minimalist-weddings" },
            //                 { id: "urban-weddings-modern", title: "Urban Weddings", slug: "urban-weddings-modern" },
            //                 { id: "contemporary-luxury-weddings", title: "Contemporary Luxury Weddings", slug: "contemporary-luxury-weddings" },
            //                 { id: "bohemian-weddings", title: "Bohemian Weddings", slug: "bohemian-weddings" },
            //                 { id: "destination-modern-weddings", title: "Destination Weddings (Modern Style)", slug: "destination-modern-weddings" },
            //                 { id: "intimate-micro-modern", title: "Intimate Micro Weddings", slug: "intimate-micro-modern" },
            //                 { id: "themed-modern-weddings", title: "Themed Modern Weddings", slug: "themed-modern-weddings" },
            //                 { id: "outdoor-modern-weddings", title: "Outdoor Modern Weddings", slug: "outdoor-modern-weddings" },
            //                 { id: "tech-savvy-virtual-weddings", title: "Tech-Savvy and Virtual Weddings", slug: "tech-savvy-virtual-weddings" },
            //                 { id: "modern-rustic-weddings", title: "Modern Rustic Weddings", slug: "modern-rustic-weddings" },
            //                 { id: "cultural-artistic-modern", title: "Cultural and Artistic Modern Weddings", slug: "cultural-artistic-modern" },
            //                 { id: "green-sustainable-modern", title: "Green and Sustainable Modern Weddings", slug: "green-sustainable-modern" }
            //             ]
            //         },
            //         {
            //             id: "small-intimate-weddings",
            //             title: "Small or Intimate Weddings",
            //             slug: "small-intimate-weddings",
            //             children: [
            //                 { id: "micro-weddings-small", title: "Micro Weddings", slug: "micro-weddings-small" },
            //                 { id: "elopement-weddings-small", title: "Elopement Weddings", slug: "elopement-weddings-small" },
            //                 { id: "destination-small-scale", title: "Destination Weddings (Small-Scale)", slug: "destination-small-scale" },
            //                 { id: "intimate-garden-weddings", title: "Intimate Garden Weddings", slug: "intimate-garden-weddings" },
            //                 { id: "home-weddings", title: "Home Weddings", slug: "home-weddings" },
            //                 { id: "rooftop-weddings", title: "Rooftop Weddings", slug: "rooftop-weddings" },
            //                 { id: "vow-renewal-weddings", title: "Vow Renewal Weddings", slug: "vow-renewal-weddings" },
            //                 { id: "backyard-weddings", title: "Backyard Weddings", slug: "backyard-weddings" },
            //                 { id: "court-house-weddings", title: "Court House Weddings", slug: "court-house-weddings" },
            //                 { id: "boutique-weddings", title: "Boutique Weddings", slug: "boutique-weddings" },
            //                 { id: "private-venue-weddings", title: "Private Venue Weddings", slug: "private-venue-weddings" },
            //                 { id: "elopement-close-family", title: "Elopement with Close Family & Friends", slug: "elopement-close-family" }
            //             ]
            //         },
            //         {
            //             id: "celebrity-weddings",
            //             title: "Celebrity and High-Profile Weddings",
            //             slug: "celebrity-weddings",
            //             children: [
            //                 { id: "extravagant-luxury-weddings", title: "Extravagant Luxury Weddings", slug: "extravagant-luxury-weddings" },
            //                 { id: "destination-celebrity-weddings", title: "Destination Celebrity Weddings", slug: "destination-celebrity-weddings" },
            //                 { id: "royal-weddings", title: "Royal Weddings", slug: "royal-weddings" },
            //                 { id: "fairytale-celebrity", title: "Fairytale Weddings", slug: "fairytale-celebrity" },
            //                 { id: "intimate-celebrity-weddings", title: "Intimate Celebrity Weddings", slug: "intimate-celebrity-weddings" },
            //                 { id: "themed-celebrity-weddings", title: "Themed Celebrity Weddings", slug: "themed-celebrity-weddings" },
            //                 { id: "charity-celebrity-weddings", title: "Celebrity Weddings with Charity Elements", slug: "charity-celebrity-weddings" },
            //                 { id: "hollywood-glamorous-weddings", title: "Glamorous Hollywood Weddings", slug: "hollywood-glamorous-weddings" },
            //                 { id: "cultural-celebrity-weddings", title: "Cultural and Traditional Celebrity Weddings", slug: "cultural-celebrity-weddings" },
            //                 { id: "hollywood-destination-weddings", title: "Hollywood Destination Weddings", slug: "hollywood-destination-weddings" },
            //                 { id: "private-island-weddings", title: "Private Island Weddings", slug: "private-island-weddings" },
            //                 { id: "exclusive-guest-list-weddings", title: "Celebrity Wedding with Exclusive Guest List", slug: "exclusive-guest-list-weddings" },
            //                 { id: "celebrity-vow-renewal", title: "Vow Renewal Ceremonies for Celebrities", slug: "celebrity-vow-renewal" }
            //             ]
            //         },
            //         {
            //             id: "civil-weddings",
            //             title: "Civil Weddings",
            //             slug: "civil-weddings",
            //             children: [
            //                 { id: "courtroom-weddings", title: "Courtroom Weddings", slug: "courtroom-weddings" },
            //                 { id: "registry-office-weddings", title: "Registry Office Weddings", slug: "registry-office-weddings" },
            //                 { id: "outdoor-civil-weddings", title: "Outdoor Civil Weddings", slug: "outdoor-civil-weddings" },
            //                 { id: "destination-civil-weddings", title: "Destination Civil Weddings", slug: "destination-civil-weddings" },
            //                 { id: "elopement-civil", title: "Elopement Weddings", slug: "elopement-civil" },
            //                 { id: "private-civil-weddings", title: "Private Civil Weddings", slug: "private-civil-weddings" },
            //                 { id: "civil-partnership-weddings", title: "Civil Partnership Weddings", slug: "civil-partnership-weddings" },
            //                 { id: "civil-personal-vows", title: "Civil Ceremony with Personal Vows", slug: "civil-personal-vows" },
            //                 { id: "civil-reception-weddings", title: "Civil Weddings with a Reception", slug: "civil-reception-weddings" }
            //             ]
            //         },
            //         {
            //             id: "surprise-weddings",
            //             title: "Surprise Weddings",
            //             slug: "surprise-weddings",
            //             children: [
            //                 { id: "surprise-announcement", title: "Surprise Wedding Announcement at a Party", slug: "surprise-announcement" },
            //                 { id: "surprise-destination", title: "Surprise Wedding During a Vacation or Destination", slug: "surprise-destination" },
            //                 { id: "mock-event-wedding", title: "Surprise Wedding with a \"Mock\" Event", slug: "mock-event-wedding" },
            //                 { id: "proposal-to-wedding", title: "Surprise Proposal that Turns into a Wedding", slug: "proposal-to-wedding" },
            //                 { id: "family-celebration-surprise", title: "Surprise Wedding at a Family Celebration", slug: "family-celebration-surprise" },
            //                 { id: "special-announcement-wedding", title: "Surprise Wedding with a \"Special Announcement\"", slug: "special-announcement-wedding" },
            //                 { id: "social-media-wedding", title: "Surprise Wedding via Social Media or Live Stream", slug: "social-media-wedding" },
            //                 { id: "flash-wedding", title: "Flash Wedding", slug: "flash-wedding" },
            //                 { id: "hidden-ceremony-wedding", title: "Surprise Wedding with a Hidden Ceremony and Reception", slug: "hidden-ceremony-wedding" },
            //                 { id: "surprise-elopement", title: "Surprise Elopement Wedding", slug: "surprise-elopement" }
            //             ]
            //         },
            //         {
            //             id: "second-weddings",
            //             title: "Second Weddings",
            //             slug: "second-weddings",
            //             children: [
            //                 { id: "intimate-second-weddings", title: "Intimate or Private Second Weddings", slug: "intimate-second-weddings" },
            //                 { id: "destination-second-weddings", title: "Destination Second Weddings", slug: "destination-second-weddings" },
            //                 { id: "elopement-second-weddings", title: "Elopement or Courthouse Second Weddings", slug: "elopement-second-weddings" },
            //                 { id: "themed-second-weddings", title: "Themed Second Weddings", slug: "themed-second-weddings" },
            //                 { id: "family-focus-second", title: "Second Weddings with Family Focus", slug: "family-focus-second" },
            //                 { id: "casual-second-weddings", title: "Casual or Low-Key Second Weddings", slug: "casual-second-weddings" },
            //                 { id: "renewal-second-weddings", title: "Renewal of Vows (Second Wedding Style)", slug: "renewal-second-weddings" },
            //                 { id: "traditional-second-weddings", title: "Traditional Second Weddings", slug: "traditional-second-weddings" },
            //                 { id: "blended-family-weddings", title: "Blended Family Second Weddings", slug: "blended-family-weddings" },
            //                 { id: "celebration-style-second", title: "Celebration-Style Second Weddings", slug: "celebration-style-second" },
            //                 { id: "large-scale-second-weddings", title: "Larger-Scale Second Weddings", slug: "large-scale-second-weddings" }
            //             ]
            //         },
            //         {
            //             id: "lgbtq-weddings",
            //             title: "LGBTQ+ Weddings",
            //             slug: "lgbtq-weddings",
            //             children: [
            //                 { id: "traditional-lgbtq", title: "Traditional LGBTQ+ Weddings", slug: "traditional-lgbtq" },
            //                 { id: "same-sex-weddings", title: "Same-Sex Weddings", slug: "same-sex-weddings" },
            //                 { id: "non-binary-weddings", title: "Non-Binary or Gender-Neutral Weddings", slug: "non-binary-weddings" },
            //                 { id: "destination-lgbtq", title: "Destination LGBTQ+ Weddings", slug: "destination-lgbtq" },
            //                 { id: "elopement-lgbtq", title: "Elopement Weddings for LGBTQ+ Couples", slug: "elopement-lgbtq" },
            //                 { id: "cultural-lgbtq", title: "Cultural LGBTQ+ Weddings", slug: "cultural-lgbtq" },
            //                 { id: "themed-lgbtq", title: "Themed LGBTQ+ Weddings", slug: "themed-lgbtq" },
            //                 { id: "vow-renewal-lgbtq", title: "Vow Renewals for LGBTQ+ Couples", slug: "vow-renewal-lgbtq" },
            //                 { id: "transgender-weddings", title: "Transgender Weddings", slug: "transgender-weddings" },
            //                 { id: "family-lgbtq-weddings", title: "LGBTQ+ Weddings with Family and Children", slug: "family-lgbtq-weddings" },
            //                 { id: "community-lgbtq", title: "Community-Oriented LGBTQ+ Weddings", slug: "community-lgbtq" },
            //                 { id: "pride-inspired-weddings", title: "Pride-Inspired LGBTQ+ Weddings", slug: "pride-inspired-weddings" }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "creative-wedding-styles",
            //     title: "Creative Wedding Styles",
            //     slug: "creative-wedding-styles",
            //     children: [
            //         {
            //             id: "alternative-weddings",
            //             title: "Alternative Weddings",
            //             slug: "alternative-weddings",
            //             children: [
            //                 { id: "bohemian-alternative", title: "Bohemian Weddings", slug: "bohemian-alternative" },
            //                 { id: "eco-friendly-green", title: "Eco-Friendly or Green Weddings", slug: "eco-friendly-green" },
            //                 { id: "elopement-alternative", title: "Elopement Weddings", slug: "elopement-alternative" },
            //                 { id: "adventure-alternative", title: "Adventure Weddings", slug: "adventure-alternative" },
            //                 { id: "alternative-ceremony", title: "Alternative Ceremony Weddings", slug: "alternative-ceremony" },
            //                 { id: "gothic-alternative", title: "Gothic Weddings", slug: "gothic-alternative" },
            //                 { id: "retro-vintage-alternative", title: "Retro or Vintage Weddings", slug: "retro-vintage-alternative" },
            //                 { id: "themed-alternative", title: "Themed Weddings", slug: "themed-alternative" },
            //                 { id: "circus-carnival", title: "Circus or Carnival Weddings", slug: "circus-carnival" },
            //                 { id: "alternative-religious", title: "Alternative Religious Weddings", slug: "alternative-religious" },
            //                 { id: "minimalist-alternative", title: "Minimalist Weddings", slug: "minimalist-alternative" },
            //                 { id: "fantasy-fairytale-alternative", title: "Fantasy or Fairytale Weddings", slug: "fantasy-fairytale-alternative" },
            //                 { id: "renaissance-medieval", title: "Renaissance or Medieval Weddings", slug: "renaissance-medieval" },
            //                 { id: "hippie-weddings", title: "Hippie Weddings", slug: "hippie-weddings" },
            //                 { id: "costume-weddings", title: "Costume Weddings", slug: "costume-weddings" },
            //                 { id: "food-centered-weddings", title: "Food-Centered Weddings", slug: "food-centered-weddings" }
            //             ]
            //         },
            //         {
            //             id: "theatrical-performing-weddings",
            //             title: "Theatrical or Performing Arts Weddings",
            //             slug: "theatrical-performing-weddings",
            //             children: [
            //                 { id: "musical-broadway-weddings", title: "Musical or Broadway-Inspired Weddings", slug: "musical-broadway-weddings" },
            //                 { id: "opera-inspired-weddings", title: "Opera-Inspired Weddings", slug: "opera-inspired-weddings" },
            //                 { id: "circus-cabaret-weddings", title: "Circus or Cabaret Weddings", slug: "circus-cabaret-weddings" },
            //                 { id: "masquerade-ball-weddings", title: "Masquerade Ball Weddings", slug: "masquerade-ball-weddings" },
            //                 { id: "dance-themed-weddings", title: "Dance-Themed Weddings", slug: "dance-themed-weddings" },
            //                 { id: "film-inspired-weddings", title: "Film-Inspired Weddings", slug: "film-inspired-weddings" },
            //                 { id: "fairytale-fantasy-performing", title: "Fairytale or Fantasy Weddings", slug: "fairytale-fantasy-performing" },
            //                 { id: "avant-garde-weddings", title: "Avant-Garde Weddings", slug: "avant-garde-weddings" },
            //                 { id: "poetry-spoken-word", title: "Poetry or Spoken Word Weddings", slug: "poetry-spoken-word" },
            //                 { id: "theatrical-costume-weddings", title: "Theatrical Costume Weddings", slug: "theatrical-costume-weddings" },
            //                 { id: "comedy-improv-weddings", title: "Comedy and Improv Weddings", slug: "comedy-improv-weddings" },
            //                 { id: "interactive-theater-weddings", title: "Interactive Theater Weddings", slug: "interactive-theater-weddings" }
            //             ]
            //         }
            //     ]
            // }
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
            // {
            //     id: "consumer-exhibitions",
            //     title: "Consumer Exhibitions",
            //     slug: "consumer-exhibitions",
            //     children: [
            //         { id: "home-garden-exhibitions", title: "Home and Garden Exhibitions", slug: "home-garden-exhibitions" },
            //         { id: "fashion-exhibitions", title: "Fashion Exhibitions", slug: "fashion-exhibitions" },
            //         { id: "trade-shows-expos", title: "Trade Shows and Expos", slug: "trade-shows-expos" },
            //         { id: "product-launch-events", title: "Product Launch Events", slug: "product-launch-events" },
            //         { id: "retail-exhibitions", title: "Retail Exhibitions", slug: "retail-exhibitions" },
            //         { id: "lifestyle-leisure-exhibitions", title: "Lifestyle and Leisure Exhibitions", slug: "lifestyle-leisure-exhibitions" },
            //         { id: "consumer-electronics-exhibitions", title: "Consumer Electronics Exhibitions", slug: "consumer-electronics-exhibitions" },
            //         { id: "food-beverage-exhibitions", title: "Food and Beverage Exhibitions", slug: "food-beverage-exhibitions" },
            //         { id: "health-wellness-exhibitions", title: "Health and Wellness Exhibitions", slug: "health-wellness-exhibitions" },
            //         { id: "arts-crafts-fairs", title: "Arts and Crafts Fairs", slug: "arts-crafts-fairs" },
            //         { id: "wedding-expos", title: "Wedding Expos", slug: "wedding-expos" },
            //         { id: "automotive-exhibitions-consumer", title: "Automotive Exhibitions", slug: "automotive-exhibitions-consumer" },
            //         { id: "fashion-apparel-exhibitions", title: "Fashion and Apparel Exhibitions", slug: "fashion-apparel-exhibitions" }
            //     ]
            // },
            // {
            //     id: "art-exhibitions",
            //     title: "Art Exhibitions",
            //     slug: "art-exhibitions",
            //     children: [
            //         { id: "solo-exhibitions", title: "Solo Exhibitions", slug: "solo-exhibitions" },
            //         { id: "group-exhibitions", title: "Group Exhibitions", slug: "group-exhibitions" },
            //         { id: "themed-art-exhibitions", title: "Themed Exhibitions", slug: "themed-art-exhibitions" },
            //         { id: "juried-exhibitions", title: "Juried Exhibitions", slug: "juried-exhibitions" },
            //         { id: "retrospective-exhibitions", title: "Retrospective Exhibitions", slug: "retrospective-exhibitions" },
            //         { id: "traveling-exhibitions", title: "Traveling Exhibitions", slug: "traveling-exhibitions" },
            //         { id: "popup-exhibitions", title: "Pop-Up Exhibitions", slug: "popup-exhibitions" },
            //         { id: "museum-exhibitions", title: "Museum Exhibitions", slug: "museum-exhibitions" },
            //         { id: "biennales", title: "Biennales", slug: "biennales" },
            //         { id: "art-fairs", title: "Art Fairs", slug: "art-fairs" },
            //         { id: "interactive-installation-exhibitions", title: "Interactive or Installation Exhibitions", slug: "interactive-installation-exhibitions" },
            //         { id: "virtual-art-exhibitions", title: "Virtual Art Exhibitions", slug: "virtual-art-exhibitions" },
            //         { id: "photographic-exhibitions", title: "Photographic Exhibitions", slug: "photographic-exhibitions" },
            //         { id: "street-art-exhibitions", title: "Street Art Exhibitions", slug: "street-art-exhibitions" },
            //         { id: "charity-art-exhibitions", title: "Fundraising or Charity Exhibitions", slug: "charity-art-exhibitions" },
            //         { id: "student-emerging-artists", title: "Student and Emerging Artist Exhibitions", slug: "student-emerging-artists" },
            //         { id: "vr-ar-exhibitions", title: "Virtual or Augmented Reality (VR/AR) Exhibitions", slug: "vr-ar-exhibitions" },
            //         { id: "historical-art-exhibitions", title: "Historical Art Exhibitions", slug: "historical-art-exhibitions" }
            //     ]
            // },
            // {
            //     id: "educational-exhibitions",
            //     title: "Educational Exhibitions",
            //     slug: "educational-exhibitions",
            //     children: [
            //         { id: "science-tech-exhibitions", title: "Science and Technology Exhibitions", slug: "science-tech-exhibitions" },
            //         { id: "history-cultural-exhibitions", title: "History and Cultural Exhibitions", slug: "history-cultural-exhibitions" },
            //         { id: "environmental-sustainability-exhibitions", title: "Environmental and Sustainability Exhibitions", slug: "environmental-sustainability-exhibitions" },
            //         { id: "art-creative-education", title: "Art and Creative Education Exhibitions", slug: "art-creative-education" },
            //         { id: "literature-book-fairs", title: "Literature and Book Fairs", slug: "literature-book-fairs" },
            //         { id: "health-medical-education", title: "Health and Medical Education Exhibitions", slug: "health-medical-education" },
            //         { id: "educational-technology", title: "Educational Technology Exhibitions", slug: "educational-technology" },
            //         { id: "stem-exhibitions", title: "STEM (Science, Technology, Engineering, and Math) Exhibitions", slug: "stem-exhibitions" },
            //         { id: "career-vocational-exhibitions", title: "Career and Vocational Education Exhibitions", slug: "career-vocational-exhibitions" },
            //         { id: "educational-travel-exhibitions", title: "Educational Travel Exhibitions", slug: "educational-travel-exhibitions" },
            //         { id: "children-education-exhibitions", title: "Children's Educational Exhibitions", slug: "children-education-exhibitions" },
            //         { id: "literacy-language-exhibitions", title: "Literacy and Language Learning Exhibitions", slug: "literacy-language-exhibitions" },
            //         { id: "agriculture-farming-education", title: "Agricultural and Farming Education Exhibitions", slug: "agriculture-farming-education" },
            //         { id: "civic-social-education", title: "Civic and Social Education Exhibitions", slug: "civic-social-education" },
            //         { id: "space-astronomy-exhibitions", title: "Space and Astronomy Exhibitions", slug: "space-astronomy-exhibitions" },
            //         { id: "museum-heritage-exhibitions", title: "Museum and Heritage Exhibitions", slug: "museum-heritage-exhibitions" },
            //         { id: "financial-literacy-exhibitions", title: "Financial Literacy and Education Exhibitions", slug: "financial-literacy-exhibitions" },
            //         { id: "innovative-learning-exhibitions", title: "Innovative Learning Methods Exhibitions", slug: "innovative-learning-exhibitions" },
            //         { id: "sdg-education-exhibitions", title: "Sustainable Development Goals (SDG) Education Exhibitions", slug: "sdg-education-exhibitions" }
            //     ]
            // },
            // {
            //     id: "trade-fairs",
            //     title: "Trade Fairs",
            //     slug: "trade-fairs",
            //     children: [
            //         { id: "industry-specific-trade-fairs", title: "Industry-Specific Trade Fairs", slug: "industry-specific-trade-fairs" },
            //         { id: "technology-electronics-trade-fairs", title: "Technology and Electronics Trade Fairs", slug: "technology-electronics-trade-fairs" },
            //         { id: "agricultural-trade-fairs", title: "Agricultural Trade Fairs", slug: "agricultural-trade-fairs" },
            //         { id: "food-beverage-trade-fairs", title: "Food and Beverage Trade Fairs", slug: "food-beverage-trade-fairs" },
            //         { id: "medical-healthcare-trade-fairs", title: "Medical and Healthcare Trade Fairs", slug: "medical-healthcare-trade-fairs" },
            //         { id: "textile-fashion-trade-fairs", title: "Textile and Fashion Trade Fairs", slug: "textile-fashion-trade-fairs" },
            //         { id: "furniture-interior-trade-fairs", title: "Furniture and Interior Design Trade Fairs", slug: "furniture-interior-trade-fairs" },
            //         { id: "automotive-trade-fairs", title: "Automotive Trade Fairs", slug: "automotive-trade-fairs" },
            //         { id: "publishing-printing-trade-fairs", title: "Publishing and Printing Trade Fairs", slug: "publishing-printing-trade-fairs" },
            //         { id: "luxury-goods-trade-fairs", title: "Luxury Goods Trade Fairs", slug: "luxury-goods-trade-fairs" },
            //         { id: "sports-leisure-trade-fairs", title: "Sports and Leisure Trade Fairs", slug: "sports-leisure-trade-fairs" },
            //         { id: "travel-tourism-trade-fairs", title: "Travel and Tourism Trade Fairs", slug: "travel-tourism-trade-fairs" },
            //         { id: "environmental-green-trade-fairs", title: "Environmental and Green Trade Fairs", slug: "environmental-green-trade-fairs" },
            //         { id: "jewelry-gemstone-trade-fairs", title: "Jewelry and Gemstone Trade Fairs", slug: "jewelry-gemstone-trade-fairs" },
            //         { id: "education-training-trade-fairs", title: "Education and Training Trade Fairs", slug: "education-training-trade-fairs" },
            //         { id: "construction-infrastructure-trade-fairs", title: "Construction and Infrastructure Trade Fairs", slug: "construction-infrastructure-trade-fairs" },
            //         { id: "marine-shipbuilding-trade-fairs", title: "Marine and Shipbuilding Trade Fairs", slug: "marine-shipbuilding-trade-fairs" },
            //         { id: "consumer-goods-trade-fairs", title: "Consumer Goods Trade Fairs", slug: "consumer-goods-trade-fairs" },
            //         { id: "renewable-energy-trade-fairs", title: "Renewable Energy and Sustainability Trade Fairs", slug: "renewable-energy-trade-fairs" },
            //         { id: "furniture-home-decoration-fairs", title: "Furniture and Home Decoration Trade Fairs", slug: "furniture-home-decoration-fairs" }
            //     ]
            // },
            // {
            //     id: "technology-exhibitions",
            //     title: "Technology Exhibitions",
            //     slug: "technology-exhibitions",
            //     children: [
            //         { id: "consumer-electronics-exhibitions", title: "Consumer Electronics Exhibitions", slug: "consumer-electronics-exhibitions" },
            //         { id: "information-technology-exhibitions", title: "Information Technology (IT) Exhibitions", slug: "information-technology-it-exhibitions" },
            //         { id: "ai-ml-exhibitions", title: "Artificial Intelligence (AI) and Machine Learning Exhibitions", slug: "ai-machine-learning-exhibitions" },
            //         { id: "vr-ar-exhibitions-tech", title: "Virtual and Augmented Reality (VR/AR) Exhibitions", slug: "vr-ar-exhibitions" },
            //         { id: "cybersecurity-exhibitions", title: "Cybersecurity Exhibitions", slug: "cybersecurity-exhibitions" },
            //         { id: "robotics-automation-exhibitions", title: "Robotics and Automation Exhibitions", slug: "robotics-automation-exhibitions" },
            //         { id: "blockchain-crypto-exhibitions", title: "Blockchain and Cryptocurrency Exhibitions", slug: "blockchain-cryptocurrency-exhibitions" },
            //         { id: "green-tech-energy-exhibitions", title: "Green Technology and Clean Energy Exhibitions", slug: "green-tech-clean-energy-exhibitions" },
            //         { id: "iot-exhibitions", title: "Internet of Things (IoT) Exhibitions", slug: "iot-exhibitions" },
            //         { id: "5g-technology-exhibitions", title: "5G Technology Exhibitions", slug: "5g-technology-exhibitions" },
            //         { id: "biotech-healthtech-exhibitions", title: "Biotechnology and Health Tech Exhibitions", slug: "biotech-healthtech-exhibitions" },
            //         { id: "gaming-esports-exhibitions", title: "Gaming and eSports Exhibitions", slug: "gaming-esports-exhibitions" },
            //         { id: "3d-printing-exhibitions", title: "3D Printing and Additive Manufacturing Exhibitions", slug: "3d-printing-additive-manufacturing-exhibitions" },
            //         { id: "smart-cities-exhibitions", title: "Smart Cities and Urban Technology Exhibitions", slug: "smart-cities-urban-tech-exhibitions" },
            //         { id: "space-aerospace-exhibitions", title: "Space and Aerospace Technology Exhibitions", slug: "space-aerospace-tech-exhibitions" },
            //         { id: "edtech-exhibitions", title: "EdTech (Educational Technology) Exhibitions", slug: "edtech-exhibitions" },
            //         { id: "fintech-exhibitions", title: "FinTech and Digital Finance Exhibitions", slug: "fintech-digital-finance-exhibitions" },
            //         { id: "ev-automotive-tech-exhibitions", title: "Automotive Tech and Electric Vehicle Exhibitions", slug: "automotive-tech-ev-exhibitions" }
            //     ]
            // },
            // {
            //     id: "product-launch-exhibitions",
            //     title: "Product Launch Exhibitions",
            //     slug: "product-launch-exhibitions",
            //     children: [
            //         { id: "consumer-electronics-launches", title: "Consumer Electronics Product Launches", slug: "consumer-electronics-product-launches" },
            //         { id: "automotive-product-launches", title: "Automotive Product Launch Exhibitions", slug: "automotive-product-launch-exhibitions" },
            //         { id: "fashion-product-launches", title: "Fashion and Apparel Product Launches", slug: "fashion-apparel-product-launches" },
            //         { id: "beauty-product-launches", title: "Beauty and Cosmetics Product Launches", slug: "beauty-cosmetics-product-launches" },
            //         { id: "food-product-launches", title: "Food and Beverage Product Launch Exhibitions", slug: "food-beverage-product-launch-exhibitions" },
            //         { id: "health-product-launches", title: "Health and Wellness Product Launches", slug: "health-wellness-product-launches" },
            //         { id: "sports-product-launches", title: "Sports and Fitness Product Launches", slug: "sports-fitness-product-launches" },
            //         { id: "home-living-launches", title: "Home and Living Product Launch Exhibitions", slug: "home-living-product-launch-exhibitions" },
            //         { id: "tech-software-launches", title: "Tech and Software Product Launches", slug: "tech-software-product-launches" },
            //         { id: "luxury-product-launches", title: "Luxury Goods and Watches Product Launches", slug: "luxury-goods-watches-launches" },
            //         { id: "gaming-product-launches", title: "Gaming and Entertainment Product Launches", slug: "gaming-entertainment-product-launches" },
            //         { id: "green-tech-launches", title: "Green Technology and Sustainability Product Launches", slug: "green-tech-sustainability-launches" },
            //         { id: "fashion-tech-launches", title: "Fashion Tech Product Launches", slug: "fashion-tech-product-launches" },
            //         { id: "industrial-tech-launches", title: "Automated and Industrial Technology Product Launches", slug: "industrial-technology-product-launches" },
            //         { id: "luxury-auto-launches", title: "Luxury Automobile Product Launches", slug: "luxury-automobile-product-launches" }
            //     ]
            // },
            // {
            //     id: "job-fairs",
            //     title: "Job Fairs / Career Exhibitions",
            //     slug: "job-fairs-career-exhibitions",
            //     children: [
            //         { id: "industry-job-fairs", title: "Industry-Specific Job Fairs", slug: "industry-specific-job-fairs" },
            //         { id: "general-job-fairs", title: "General Job Fairs", slug: "general-job-fairs" },
            //         { id: "university-career-fairs", title: "University and College Career Fairs", slug: "university-college-career-fairs" },
            //         { id: "virtual-job-fairs", title: "Virtual Job Fairs", slug: "virtual-job-fairs" },
            //         { id: "diversity-job-fairs", title: "Diversity and Inclusion Job Fairs", slug: "diversity-inclusion-job-fairs" },
            //         { id: "internship-job-fairs", title: "Internship and Summer Job Fairs", slug: "internship-summer-job-fairs" },
            //         { id: "executive-career-fairs", title: "Executive and Professional Career Fairs", slug: "executive-professional-career-fairs" },
            //         { id: "government-job-fairs", title: "Government Job Fairs", slug: "government-job-fairs" },
            //         { id: "local-job-fairs", title: "Local Community Job Fairs", slug: "local-community-job-fairs" },
            //         { id: "international-job-fairs", title: "International Job Fairs", slug: "international-job-fairs" },
            //         { id: "startup-job-fairs", title: "Startup Job Fairs", slug: "startup-job-fairs" },
            //         { id: "freelance-remote-job-fairs", title: "Freelancer and Remote Work Job Fairs", slug: "freelancer-remote-job-fairs" },
            //         { id: "tech-job-fairs", title: "Tech Job Fairs", slug: "tech-job-fairs" },
            //         { id: "retail-hospitality-job-fairs", title: "Retail and Hospitality Job Fairs", slug: "retail-hospitality-job-fairs" },
            //         { id: "trade-skill-job-fairs", title: "Trade Skill Job Fairs", slug: "trade-skill-job-fairs" }
            //     ]
            // },
            // {
            //     id: "industry-specific-exhibitions",
            //     title: "Industry-Specific Exhibitions",
            //     slug: "industry-specific-exhibitions",
            //     children: [
            //         { id: "technology-exhibitions-industry", title: "Technology Exhibitions", slug: "technology-exhibitions-industry" },
            //         { id: "automotive-exhibitions-industry", title: "Automotive Exhibitions", slug: "automotive-exhibitions-industry" },
            //         { id: "healthcare-exhibitions-industry", title: "Healthcare and Medical Exhibitions", slug: "healthcare-medical-exhibitions" },
            //         { id: "fashion-exhibitions-industry", title: "Fashion Exhibitions", slug: "fashion-exhibitions-industry" },
            //         { id: "food-exhibitions-industry", title: "Food and Beverage Exhibitions", slug: "food-beverage-exhibitions-industry" },
            //         { id: "construction-exhibitions", title: "Construction and Building Exhibitions", slug: "construction-building-exhibitions" },
            //         { id: "energy-exhibitions", title: "Energy and Sustainability Exhibitions", slug: "energy-sustainability-exhibitions" },
            //         { id: "real-estate-exhibitions-industry", title: "Real Estate Exhibitions", slug: "real-estate-exhibitions-industry" },
            //         { id: "media-entertainment-exhibitions", title: "Entertainment and Media Exhibitions", slug: "entertainment-media-exhibitions" },
            //         { id: "agriculture-exhibitions", title: "Agriculture Exhibitions", slug: "agriculture-exhibitions" },
            //         { id: "logistics-exhibitions", title: "Logistics and Supply Chain Exhibitions", slug: "logistics-supply-chain-exhibitions" },
            //         { id: "tourism-exhibitions", title: "Tourism and Travel Exhibitions", slug: "tourism-travel-exhibitions" },
            //         { id: "telecom-exhibitions", title: "Telecommunications Exhibitions", slug: "telecommunications-exhibitions" },
            //         { id: "jewelry-exhibitions", title: "Jewelry and Luxury Goods Exhibitions", slug: "jewelry-luxury-goods-exhibitions" },
            //         { id: "education-exhibitions", title: "Education and EdTech Exhibitions", slug: "education-edtech-exhibitions" },
            //         { id: "pharma-biotech-exhibitions", title: "Pharmaceutical and Biotechnology Exhibitions", slug: "pharmaceutical-biotech-exhibitions" },
            //         { id: "mining-exhibitions", title: "Mining and Minerals Exhibitions", slug: "mining-minerals-exhibitions" },
            //         { id: "textile-exhibitions", title: "Fashion and Textile Exhibitions", slug: "fashion-textile-exhibitions" },
            //         { id: "aerospace-exhibitions", title: "Aerospace and Aviation Exhibitions", slug: "aerospace-aviation-exhibitions" },
            //         { id: "packaging-exhibitions", title: "Packaging Exhibitions", slug: "packaging-exhibitions" }
            //     ]
            // },
            // {
            //     id: "cultural-exhibitions",
            //     title: "Cultural Exhibitions",
            //     slug: "cultural-exhibitions",
            //     children: [
            //         { id: "art-cultural-exhibitions", title: "Art Exhibitions", slug: "art-cultural-exhibitions" },
            //         { id: "heritage-exhibitions", title: "Historical and Heritage Exhibitions", slug: "historical-heritage-exhibitions" },
            //         { id: "craft-exhibitions", title: "Traditional Craft Exhibitions", slug: "traditional-craft-exhibitions" },
            //         { id: "cultural-festivals", title: "Cultural Festivals and Events", slug: "cultural-festivals-events" },
            //         { id: "performing-arts-exhibitions", title: "Music and Performing Arts Exhibitions", slug: "music-performing-arts-exhibitions" },
            //         { id: "cultural-exchange", title: "Cultural Exchange Exhibitions", slug: "cultural-exchange-exhibitions" },
            //         { id: "indigenous-culture", title: "Indigenous Culture Exhibitions", slug: "indigenous-culture-exhibitions" },
            //         { id: "culinary-exhibitions", title: "Culinary and Food Culture Exhibitions", slug: "culinary-food-culture-exhibitions" },
            //         { id: "fashion-cultural-exhibitions", title: "Fashion and Textile Cultural Exhibitions", slug: "fashion-textile-cultural-exhibitions" },
            //         { id: "film-media-exhibitions", title: "Film and Media Exhibitions", slug: "film-media-exhibitions" },
            //         { id: "religious-cultural-exhibitions", title: "Religious and Spiritual Culture Exhibitions", slug: "religious-spiritual-culture-exhibitions" },
            //         { id: "photography-cultural-exhibitions", title: "Photography and Visual Arts Cultural Exhibitions", slug: "photography-visual-arts-cultural-exhibitions" },
            //         { id: "fashion-costume-exhibitions", title: "Fashion and Costume Exhibitions", slug: "fashion-costume-exhibitions" },
            //         { id: "literary-exhibitions", title: "Literary and Book Exhibitions", slug: "literary-book-exhibitions" },
            //         { id: "architecture-exhibitions", title: "Architecture and Urban Culture Exhibitions", slug: "architecture-urban-culture-exhibitions" },
            //         { id: "animation-exhibitions", title: "Film and Animation Exhibitions", slug: "film-animation-exhibitions" }
            //     ]
            // },
            // {
            //     id: "antique-collectibles-exhibitions",
            //     title: "Antique and Collectibles Exhibitions",
            //     slug: "antique-collectibles-exhibitions",
            //     children: [
            //         { id: "antique-furniture-exhibitions", title: "Antique Furniture Exhibitions", slug: "antique-furniture-exhibitions" },
            //         { id: "vintage-textile-exhibitions", title: "Vintage Clothing and Textile Exhibitions", slug: "vintage-clothing-textile-exhibitions" },
            //         { id: "collectible-art-exhibitions", title: "Collectible Art and Paintings Exhibitions", slug: "collectible-art-paintings-exhibitions" },
            //         { id: "antique-jewelry-exhibitions", title: "Antique Jewelry Exhibitions", slug: "antique-jewelry-exhibitions" },
            //         { id: "coin-currency-exhibitions", title: "Coin and Currency Exhibitions", slug: "coin-currency-exhibitions" },
            //         { id: "antique-books-exhibitions", title: "Antique Book and Manuscript Exhibitions", slug: "antique-book-manuscript-exhibitions" },
            //         { id: "vintage-car-exhibitions", title: "Vintage Car and Automobile Exhibitions", slug: "vintage-car-automobile-exhibitions" },
            //         { id: "antique-toy-exhibitions", title: "Antique and Vintage Toy Exhibitions", slug: "antique-vintage-toy-exhibitions" },
            //         { id: "antique-watch-exhibitions", title: "Antique Watches and Clocks Exhibitions", slug: "antique-watches-clocks-exhibitions" },
            //         { id: "military-memorabilia-exhibitions", title: "Military and War Memorabilia Exhibitions", slug: "military-war-memorabilia-exhibitions" },
            //         { id: "sports-memorabilia-exhibitions", title: "Sports Memorabilia Exhibitions", slug: "sports-memorabilia-exhibitions" },
            //         { id: "antique-musical-exhibitions", title: "Antique Musical Instruments Exhibitions", slug: "antique-musical-instruments-exhibitions" },
            //         { id: "antique-home-decor-exhibitions", title: "Antique and Vintage Home Decor Exhibitions", slug: "antique-vintage-home-decor-exhibitions" },
            //         { id: "rare-artifacts-exhibitions", title: "Rare and Collectible Artifacts Exhibitions", slug: "rare-collectible-artifacts-exhibitions" },
            //         { id: "fine-china-exhibitions", title: "Antique Fine China and Porcelain Exhibitions", slug: "antique-fine-china-porcelain-exhibitions" }
            //     ]
            // },
            // {
            //     id: "food-beverage-exhibitions",
            //     title: "Food and Beverage Exhibitions",
            //     slug: "food-beverage-exhibitions",
            //     children: [
            //         { id: "food-trade-shows", title: "Food Trade Shows", slug: "food-trade-shows" },
            //         { id: "beverage-trade-shows", title: "Beverage Trade Shows", slug: "beverage-trade-shows" },
            //         { id: "culinary-exhibitions", title: "Culinary and Gourmet Exhibitions", slug: "culinary-gourmet-exhibitions" },
            //         { id: "organic-food-exhibitions", title: "Health and Organic Food Exhibitions", slug: "health-organic-food-exhibitions" },
            //         { id: "food-tech-exhibitions", title: "Food Processing and Technology Exhibitions", slug: "food-processing-technology-exhibitions" },
            //         { id: "catering-exhibitions", title: "Catering and Hospitality Exhibitions", slug: "catering-hospitality-exhibitions" },
            //         { id: "specialty-food-exhibitions", title: "Specialty Food Exhibitions", slug: "specialty-food-exhibitions" },
            //         { id: "wine-spirits-exhibitions", title: "Wine and Spirits Exhibitions", slug: "wine-spirits-exhibitions" },
            //         { id: "coffee-tea-exhibitions", title: "Coffee and Tea Exhibitions", slug: "coffee-tea-exhibitions" },
            //         { id: "chocolate-exhibitions", title: "Chocolate and Confectionery Exhibitions", slug: "chocolate-confectionery-exhibitions" },
            //         { id: "frozen-food-exhibitions", title: "Frozen Food Exhibitions", slug: "frozen-food-exhibitions" },
            //         { id: "street-food-exhibitions", title: "Street Food and Food Truck Exhibitions", slug: "street-food-food-truck-exhibitions" },
            //         { id: "eco-food-exhibitions", title: "Sustainability and Eco-Friendly Food Exhibitions", slug: "eco-friendly-food-exhibitions" },
            //         { id: "food-safety-exhibitions", title: "Food Safety and Quality Exhibitions", slug: "food-safety-quality-exhibitions" }
            //     ]
            // },
            // {
            //     id: "fashion-exhibitions",
            //     title: "Fashion Exhibitions",
            //     slug: "fashion-exhibitions",
            //     children: [
            //         { id: "fashion-trade-shows", title: "Fashion Trade Shows", slug: "fashion-trade-shows" },
            //         { id: "haute-couture-exhibitions", title: "Haute Couture Exhibitions", slug: "haute-couture-exhibitions" },
            //         { id: "fashion-week-exhibitions", title: "Fashion Week Exhibitions", slug: "fashion-week-exhibitions" },
            //         { id: "sustainable-fashion-exhibitions", title: "Sustainable Fashion Exhibitions", slug: "sustainable-fashion-exhibitions" },
            //         { id: "vintage-fashion-exhibitions", title: "Vintage and Retro Fashion Exhibitions", slug: "vintage-retro-fashion-exhibitions" },
            //         { id: "textiles-exhibitions", title: "Textiles and Fabrics Exhibitions", slug: "textiles-fabrics-exhibitions" },
            //         { id: "fashion-accessories-exhibitions", title: "Accessories and Jewelry Fashion Exhibitions", slug: "accessories-jewelry-fashion-exhibitions" },
            //         { id: "fashion-design-exhibitions", title: "Fashion Design and Innovation Exhibitions", slug: "fashion-design-innovation-exhibitions" },
            //         { id: "luxury-fashion-exhibitions", title: "Luxury and High-End Fashion Exhibitions", slug: "luxury-high-end-fashion-exhibitions" },
            //         { id: "footwear-exhibitions", title: "Footwear and Shoe Exhibitions", slug: "footwear-shoe-exhibitions" }
            //     ]
            // },
            // {
            //     id: "health-wellness-exhibitions",
            //     title: "Health and Wellness Exhibitions",
            //     slug: "health-wellness-exhibitions",
            //     children: [
            //         { id: "fitness-exhibitions", title: "Fitness and Exercise Exhibitions", slug: "fitness-exercise-exhibitions" },
            //         { id: "nutrition-exhibitions", title: "Nutrition and Healthy Eating Exhibitions", slug: "nutrition-healthy-eating-exhibitions" },
            //         { id: "mental-health-exhibitions", title: "Mental Health and Well-Being Exhibitions", slug: "mental-health-wellbeing-exhibitions" },
            //         { id: "alternative-medicine-exhibitions", title: "Alternative Medicine and Therapies Exhibitions", slug: "alternative-medicine-therapies-exhibitions" },
            //         { id: "beauty-skincare-exhibitions", title: "Beauty and Skincare Exhibitions", slug: "beauty-skincare-exhibitions" },
            //         { id: "medical-exhibitions", title: "Medical and Healthcare Exhibitions", slug: "medical-healthcare-exhibitions" },
            //         { id: "yoga-exhibitions", title: "Yoga and Meditation Exhibitions", slug: "yoga-meditation-exhibitions" },
            //         { id: "sleep-exhibitions", title: "Sleep and Recovery Exhibitions", slug: "sleep-recovery-exhibitions" },
            //         { id: "wellness-tourism-exhibitions", title: "Health and Wellness Tourism Exhibitions", slug: "health-wellness-tourism-exhibitions" },
            //         { id: "rehabilitation-exhibitions", title: "Sports and Rehabilitation Exhibitions", slug: "sports-rehabilitation-exhibitions" }
            //     ]
            // },
            // {
            //     id: "wedding-bridal-exhibitions",
            //     title: "Wedding and Bridal Exhibitions",
            //     slug: "wedding-bridal-exhibitions",
            //     children: [
            //         { id: "bridal-fashion-exhibitions", title: "Bridal Fashion and Apparel Exhibitions", slug: "bridal-fashion-apparel-exhibitions" },
            //         { id: "wedding-vendors-exhibitions", title: "Wedding Vendors and Services Exhibitions", slug: "wedding-vendors-services-exhibitions" },
            //         { id: "destination-wedding-exhibitions", title: "Destination Wedding Exhibitions", slug: "destination-wedding-exhibitions" },
            //         { id: "wedding-photography-exhibitions", title: "Wedding Photography and Videography Exhibitions", slug: "wedding-photography-videography-exhibitions" },
            //         { id: "wedding-catering-exhibitions", title: "Wedding Cakes and Catering Exhibitions", slug: "wedding-cakes-catering-exhibitions" },
            //         { id: "bridal-beauty-exhibitions", title: "Bridal Beauty and Spa Exhibitions", slug: "bridal-beauty-spa-exhibitions" },
            //         { id: "wedding-decor-exhibitions", title: "Wedding Decorations and Floral Exhibitions", slug: "wedding-decor-floral-exhibitions" },
            //         { id: "wedding-jewelry-exhibitions", title: "Wedding Jewelry and Accessories Exhibitions", slug: "wedding-jewelry-accessories-exhibitions" },
            //         { id: "wedding-planning-exhibitions", title: "Wedding Planning and Coordination Exhibitions", slug: "wedding-planning-coordination-exhibitions" },
            //         { id: "bridal-gifts-exhibitions", title: "Bridal Accessories and Gifts Exhibitions", slug: "bridal-accessories-gifts-exhibitions" }
            //     ]
            // },
            // {
            //     id: "virtual-exhibitions",
            //     title: "Virtual Exhibitions",
            //     slug: "virtual-exhibitions",
            //     children: [
            //         { id: "virtual-product-launch", title: "Product Launch Virtual Exhibitions", slug: "product-launch-virtual-exhibitions" },
            //         { id: "virtual-trade-shows", title: "Trade Shows and Industry-Specific Virtual Exhibitions", slug: "trade-shows-virtual-exhibitions" },
            //         { id: "virtual-job-fairs", title: "Job Fairs and Career Virtual Exhibitions", slug: "job-fairs-career-virtual-exhibitions" },
            //         { id: "virtual-education", title: "Education and Learning Virtual Exhibitions", slug: "education-learning-virtual-exhibitions" },
            //         { id: "virtual-art", title: "Art and Cultural Virtual Exhibitions", slug: "art-cultural-virtual-exhibitions" },
            //         { id: "virtual-business", title: "Trade and Business Networking Virtual Exhibitions", slug: "business-networking-virtual-exhibitions" },
            //         { id: "virtual-tech", title: "Technology and Innovation Virtual Exhibitions", slug: "technology-innovation-virtual-exhibitions" },
            //         { id: "virtual-consumer", title: "Consumer Virtual Exhibitions", slug: "consumer-virtual-exhibitions" },
            //         { id: "virtual-health", title: "Health and Wellness Virtual Exhibitions", slug: "health-wellness-virtual-exhibitions" },
            //         { id: "virtual-electronics", title: "Consumer Electronics Virtual Exhibitions", slug: "consumer-electronics-virtual-exhibitions" }
            //     ]
            // },
            // {
            //     id: "charity-exhibitions",
            //     title: "Charity and Nonprofit Exhibitions",
            //     slug: "charity-nonprofit-exhibitions",
            //     children: [
            //         { id: "fundraising-exhibitions", title: "Fundraising Exhibitions", slug: "fundraising-exhibitions" },
            //         { id: "awareness-exhibitions", title: "Awareness-Raising Exhibitions", slug: "awareness-raising-exhibitions" },
            //         { id: "volunteer-exhibitions", title: "Volunteer Recruitment Exhibitions", slug: "volunteer-recruitment-exhibitions" },
            //         { id: "charity-product-exhibitions", title: "Charity Product and Service Exhibitions", slug: "charity-product-service-exhibitions" },
            //         { id: "csr-exhibitions", title: "Corporate Social Responsibility (CSR) Exhibitions", slug: "csr-exhibitions" },
            //         { id: "disaster-relief-exhibitions", title: "Disaster Relief Exhibitions", slug: "disaster-relief-exhibitions" },
            //         { id: "global-health-charity", title: "Global Health and Wellness Charity Exhibitions", slug: "global-health-wellness-charity-exhibitions" },
            //         { id: "youth-education-charity", title: "Youth and Education Charity Exhibitions", slug: "youth-education-charity-exhibitions" },
            //         { id: "heritage-charity", title: "Cultural and Heritage Preservation Charity Exhibitions", slug: "heritage-preservation-charity-exhibitions" },
            //         { id: "animal-welfare-charity", title: "Animal Welfare Charity Exhibitions", slug: "animal-welfare-charity-exhibitions" }
            //     ]
            // },
            // {
            //     id: "green-technology-exhibitions",
            //     title: "Sustainability and Green Technology Exhibitions",
            //     slug: "sustainability-green-technology-exhibitions"
            // },
            // {
            //     id: "climate-change-exhibitions",
            //     title: "Climate Change and Global Warming Exhibitions",
            //     slug: "climate-change-global-warming-exhibitions"
            // },
            // {
            //     id: "waste-management-exhibitions",
            //     title: "Waste Management and Recycling Exhibitions",
            //     slug: "waste-management-recycling-exhibitions"
            // },
            // {
            //     id: "environmental-education-exhibitions",
            //     title: "Environmental Education and Advocacy Exhibitions",
            //     slug: "environmental-education-advocacy-exhibitions"
            // },
            // {
            //     id: "biodiversity-exhibitions",
            //     title: "Biodiversity and Conservation Exhibitions",
            //     slug: "biodiversity-conservation-exhibitions"
            // },
            // {
            //     id: "water-conservation-exhibitions",
            //     title: "Water Conservation and Management Exhibitions",
            //     slug: "water-conservation-management-exhibitions"
            // },
            // {
            //     id: "green-architecture-exhibitions",
            //     title: "Eco-Friendly Building and Green Architecture Exhibitions",
            //     slug: "eco-friendly-building-green-architecture-exhibitions"
            // },
            // {
            //     id: "environmental-policy-exhibitions",
            //     title: "Environmental Policy and Advocacy Exhibitions",
            //     slug: "environmental-policy-advocacy-exhibitions"
            // },
            // {
            //     id: "sustainable-agriculture-exhibitions",
            //     title: "Sustainable Agriculture and Food Systems Exhibitions",
            //     slug: "sustainable-agriculture-food-systems-exhibitions"
            // },
            // {
            //     id: "green-transportation-exhibitions",
            //     title: "Green Transportation and Sustainable Mobility Exhibitions",
            //     slug: "green-transportation-sustainable-mobility-exhibitions"
            // }
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
                    { id: "annual-conferences-academic", title: "Annual Conferences", slug: "aca", titleSuffix: "Management Company in Delhi" },
                    { id: "professional-development-academic", title: "Professional Development Conferences", slug: "pdc-aca", titleSuffix: "Management Company in Delhi" },
                    { id: "research-conferences", title: "Research Conferences", slug: "res-con", titleSuffix: "Management Company in Delhi" },
                    { id: "graduate-conferences", title: "Graduate and Postgraduate Conferences", slug: "grp-con", titleSuffix: "Management Company in Delhi" },
                    { id: "academic-networking", title: "Academic Networking Conferences", slug: "anc", titleSuffix: "Management Company in Delhi" }
                ]
            },
            // {
            //     id: "corporate-conferences",
            //     title: "Corporate Conferences",
            //     slug: "corporate-conferences",
            //     children: [
            //         {
            //             id: "internal-corporate",
            //             title: "Internal Corporate Conferences",
            //             slug: "internal-corporate-conferences",
            //             children: [
            //                 { id: "internal-1", title: "", slug: "internal-1" },
            //                 { id: "internal-2", title: "", slug: "internal-2" },
            //                 { id: "internal-3", title: "", slug: "internal-3" }
            //             ]
            //         },
            //         {
            //             id: "external-corporate",
            //             title: "External Corporate Conferences",
            //             slug: "external-corporate-conferences",
            //             children: [
            //                 { id: "external-1", title: "", slug: "external-1" },
            //                 { id: "external-2", title: "", slug: "external-2" },
            //                 { id: "external-3", title: "", slug: "external-3" }
            //             ]
            //         },
            //         {
            //             id: "product-innovation",
            //             title: "Product and Innovation Conferences",
            //             slug: "product-innovation-conferences",
            //             children: [
            //                 { id: "product-1", title: "", slug: "product-1" },
            //                 { id: "product-2", title: "", slug: "product-2" }
            //             ]
            //         },
            //         {
            //             id: "leadership-executive",
            //             title: "Leadership and Executive Conferences",
            //             slug: "leadership-executive-conferences",
            //             children: [
            //                 { id: "leader-1", title: "", slug: "leader-1" },
            //                 { id: "leader-2", title: "", slug: "leader-2" }
            //             ]
            //         },
            //         {
            //             id: "industry-corporate",
            //             title: "Industry-Specific Corporate Conferences",
            //             slug: "industry-specific-corporate-conferences",
            //             children: [
            //                 { id: "industry-1", title: "", slug: "industry-1" },
            //                 { id: "industry-2", title: "", slug: "industry-2" }
            //             ]
            //         },
            //         {
            //             id: "training-corporate",
            //             title: "Training and Educational Conferences",
            //             slug: "training-educational-conferences",
            //             children: [
            //                 { id: "training-1", title: "", slug: "training-1" },
            //                 { id: "training-2", title: "", slug: "training-2" }
            //             ]
            //         },
            //         {
            //             id: "corporate-retreats",
            //             title: "Corporate Retreats",
            //             slug: "corporate-retreats",
            //             children: [
            //                 { id: "retreat-1", title: "", slug: "retreat-1" },
            //                 { id: "retreat-2", title: "", slug: "retreat-2" }
            //             ]
            //         },
            //         {
            //             id: "annual-corporate",
            //             title: "Annual Corporate Conferences",
            //             slug: "annual-corporate-conferences",
            //             children: [
            //                 { id: "annual-1", title: "", slug: "annual-1" },
            //                 { id: "annual-2", title: "", slug: "annual-2" }
            //             ]
            //         },
            //         {
            //             id: "virtual-corporate",
            //             title: "Virtual or Hybrid Corporate Conferences",
            //             slug: "virtual-hybrid-corporate-conferences",
            //             children: [
            //                 { id: "virtual-1", title: "", slug: "virtual-1" },
            //                 { id: "virtual-2", title: "", slug: "virtual-2" }
            //             ]
            //         },
            //         {
            //             id: "csr-conferences",
            //             title: "Corporate Social Responsibility (CSR) Conferences",
            //             slug: "csr-conferences",
            //             children: [
            //                 { id: "csr-1", title: "", slug: "csr-1" },
            //                 { id: "csr-2", title: "", slug: "csr-2" }
            //             ]
            //         }
            //     ]
            // },
            // {
            //     id: "industry-conferences",
            //     title: "Industry Conferences",
            //     slug: "industry-conferences",
            //     children: [
            //         { id: "trade-conferences", title: "Trade Conferences", slug: "trade-conferences" },
            //         { id: "professional-dev-industry", title: "Professional Development Conferences", slug: "professional-development-conferences-industry" },
            //         { id: "academic-research-industry", title: "Academic/Research Conferences", slug: "academic-research-conferences" },
            //         { id: "networking-conferences", title: "Networking Conferences", slug: "networking-conferences" },
            //         { id: "technology-conferences", title: "Technology Conferences", slug: "technology-conferences" },
            //         { id: "leadership-conferences", title: "Leadership Conferences", slug: "leadership-conferences" },
            //         { id: "customer-focused", title: "Customer-Focused Conferences", slug: "customer-focused-conferences" },
            //         { id: "annual-industry", title: "Annual Conferences", slug: "annual-industry-conferences" },
            //         { id: "product-specific", title: "Product-Specific Conferences", slug: "product-specific-conferences" },
            //         { id: "investor-conferences", title: "Investor Conferences", slug: "investor-conferences" },
            //         { id: "government-policy", title: "Government & Policy Conferences", slug: "government-policy-conferences" }
            //     ]
            // },
            // {
            //     id: "professional-development",
            //     title: "Professional Development Conferences",
            //     slug: "professional-development-conferences",
            //     children: [
            //         { id: "industry-specific-pd", title: "Industry-Specific Professional Development Conferences", slug: "industry-specific-professional-development-conferences" },
            //         { id: "leadership-management", title: "Leadership and Management Development Conferences", slug: "leadership-management-development-conferences" },
            //         { id: "skill-training", title: "Skill-Based Training Conferences", slug: "skill-based-training-conferences" },
            //         { id: "startup-conferences", title: "Entrepreneurship and Start-Up Conferences", slug: "entrepreneurship-startup-conferences" },
            //         { id: "tech-innovation", title: "Technology and Innovation Conferences", slug: "technology-innovation-conferences" },
            //         { id: "career-transition", title: "Career Transition and Job Search Conferences", slug: "career-transition-job-search-conferences" },
            //         { id: "women-leadership", title: "Women in Leadership and Diversity Conferences", slug: "women-leadership-diversity-conferences" },
            //         { id: "networking-collab", title: "Networking and Collaboration Conferences", slug: "networking-collaboration-conferences" },
            //         { id: "academic-dev", title: "Academic and Research Development Conferences", slug: "academic-research-development-conferences" },
            //         { id: "personal-branding", title: "Personal Branding and Career Development Conferences", slug: "personal-branding-career-development-conferences" },
            //         { id: "health-wellness-pd", title: "Health and Wellness Professional Development Conferences", slug: "health-wellness-professional-development-conferences" },
            //         { id: "public-speaking", title: "Public Speaking and Communication Conferences", slug: "public-speaking-communication-conferences" }
            //     ]
            // },
            // {
            //     id: "trade-conferences",
            //     title: "Trade Conferences",
            //     slug: "trade-conferences",
            //     children: [
            //         { id: "industry-specific-trade", title: "Industry-Specific Trade Conferences", slug: "industry-specific-trade-conferences" },
            //         { id: "b2b-trade", title: "Business-to-Business (B2B) Trade Conferences", slug: "b2b-trade-conferences" },
            //         { id: "product-specific-trade", title: "Product-Specific Trade Conferences", slug: "product-specific-trade-conferences" },
            //         { id: "export-import-trade", title: "Export and Import Trade Conferences", slug: "export-import-trade-conferences" },
            //         { id: "supply-chain-trade", title: "Supply Chain and Logistics Trade Conferences", slug: "supply-chain-logistics-trade-conferences" },
            //         { id: "tech-innovation-trade", title: "Technology and Innovation Trade Conferences", slug: "technology-innovation-trade-conferences" },
            //         { id: "environmental-trade", title: "Environmental and Sustainability Trade Conferences", slug: "environmental-sustainability-trade-conferences" },
            //         { id: "healthcare-trade", title: "Healthcare and Medical Trade Conferences", slug: "healthcare-medical-trade-conferences" },
            //         { id: "retail-consumer-trade", title: "Retail and Consumer Goods Trade Conferences", slug: "retail-consumer-goods-trade-conferences" },
            //         { id: "food-beverage-trade", title: "Food and Beverage Trade Conferences", slug: "food-beverage-trade-conferences" },
            //         { id: "construction-realestate-trade", title: "Construction and Real Estate Trade Conferences", slug: "construction-real-estate-trade-conferences" },
            //         { id: "fashion-apparel-trade", title: "Fashion and Apparel Trade Conferences", slug: "fashion-apparel-trade-conferences" }
            //     ]
            // },
            // {
            //     id: "technology-conferences",
            //     title: "Technology Conferences",
            //     slug: "technology-conferences",
            //     children: [
            //         { id: "software-dev", title: "Software Development Conferences", slug: "software-development-conferences" },
            //         { id: "ai-ml", title: "Artificial Intelligence (AI) and Machine Learning (ML) Conferences", slug: "ai-ml-conferences" },
            //         { id: "cybersecurity", title: "Cybersecurity Conferences", slug: "cybersecurity-conferences" },
            //         { id: "cloud-computing", title: "Cloud Computing Conferences", slug: "cloud-computing-conferences" },
            //         { id: "blockchain", title: "Blockchain and Cryptocurrency Conferences", slug: "blockchain-cryptocurrency-conferences" },
            //         { id: "iot", title: "Internet of Things (IoT) Conferences", slug: "iot-conferences" },
            //         { id: "big-data", title: "Big Data and Data Science Conferences", slug: "big-data-data-science-conferences" },
            //         { id: "ar-vr", title: "Augmented Reality (AR) and Virtual Reality (VR) Conferences", slug: "ar-vr-conferences" },
            //         { id: "networking-telecom", title: "Networking and Telecommunications Conferences", slug: "networking-telecommunications-conferences" },
            //         { id: "tech-entrepreneurship", title: "Tech Entrepreneurship Conferences", slug: "tech-entrepreneurship-conferences" },
            //         { id: "game-dev", title: "Game Development Conferences", slug: "game-development-conferences" },
            //         { id: "startup-tech", title: "Tech Innovation and Startup Conferences", slug: "tech-innovation-startup-conferences" },
            //         { id: "robotics", title: "Robotics and Automation Conferences", slug: "robotics-automation-conferences" }
            //     ]
            // },
            // {
            //     id: "scientific-conferences",
            //     title: "Scientific Conferences",
            //     slug: "scientific-conferences",
            //     children: [
            //         { id: "biological-sciences", title: "Biological Sciences Conferences", slug: "biological-sciences-conferences" },
            //         { id: "physics", title: "Physics Conferences", slug: "physics-conferences" },
            //         { id: "chemistry", title: "Chemistry Conferences", slug: "chemistry-conferences" },
            //         { id: "medical", title: "Medical and Healthcare Conferences", slug: "medical-healthcare-conferences" },
            //         { id: "environmental-science", title: "Environmental Science Conferences", slug: "environmental-science-conferences" },
            //         { id: "engineering", title: "Engineering Conferences", slug: "engineering-conferences" },
            //         { id: "mathematics", title: "Mathematics Conferences", slug: "mathematics-conferences" },
            //         { id: "social-sciences", title: "Social Sciences Conferences", slug: "social-sciences-conferences" },
            //         { id: "astronomy", title: "Astronomy and Astrophysics Conferences", slug: "astronomy-astrophysics-conferences" },
            //         { id: "genetics", title: "Genetics and Genomics Conferences", slug: "genetics-genomics-conferences" },
            //         { id: "neuroscience", title: "Neuroscience Conferences", slug: "neuroscience-conferences" },
            //         { id: "agriculture", title: "Agricultural Science Conferences", slug: "agricultural-science-conferences" },
            //         { id: "materials-science", title: "Materials Science Conferences", slug: "materials-science-conferences" }
            //     ]
            // },
            // {
            //     id: "government-conferences",
            //     title: "Government Conferences",
            //     slug: "government-conferences",
            //     children: [
            //         { id: "public-policy", title: "Public Policy Conferences", slug: "public-policy-conferences" },
            //         { id: "international-relations", title: "International Relations and Diplomacy Conferences", slug: "international-relations-diplomacy-conferences" },
            //         { id: "local-government", title: "Local Government and Municipal Governance Conferences", slug: "local-government-municipal-governance-conferences" },
            //         { id: "e-governance", title: "E-Government and Digital Governance Conferences", slug: "e-government-digital-governance-conferences" },
            //         { id: "legislative", title: "Legislative Conferences", slug: "legislative-conferences" },
            //         { id: "public-admin", title: "Public Administration Conferences", slug: "public-administration-conferences" },
            //         { id: "human-rights", title: "Human Rights and Social Justice Conferences", slug: "human-rights-social-justice-conferences" },
            //         { id: "security-defense", title: "Security and Defense Conferences", slug: "security-defense-conferences" },
            //         { id: "sustainable-policy", title: "Sustainable Development and Environmental Policy Conferences", slug: "sustainable-development-environmental-policy-conferences" },
            //         { id: "economic-growth", title: "Economic Development and Growth Conferences", slug: "economic-development-growth-conferences" },
            //         { id: "health-policy", title: "Health Policy and Public Health Conferences", slug: "health-policy-public-health-conferences" }
            //     ]
            // },
            // {
            //     id: "nonprofit-conferences",
            //     title: "Nonprofit and Charity Conferences",
            //     slug: "nonprofit-charity-conferences",
            //     children: [
            //         { id: "fundraising", title: "Fundraising Conferences", slug: "fundraising-conferences" },
            //         { id: "volunteer-management", title: "Volunteer Management Conferences", slug: "volunteer-management-conferences" },
            //         { id: "nonprofit-leadership", title: "Nonprofit Leadership and Management Conferences", slug: "nonprofit-leadership-management-conferences" },
            //         { id: "social-impact", title: "Social Impact and Advocacy Conferences", slug: "social-impact-advocacy-conferences" },
            //         { id: "nonprofit-marketing", title: "Nonprofit Marketing and Communications Conferences", slug: "nonprofit-marketing-communications-conferences" },
            //         { id: "nonprofit-tech", title: "Nonprofit Technology and Innovation Conferences", slug: "nonprofit-technology-innovation-conferences" },
            //         { id: "csr", title: "Corporate Social Responsibility (CSR) Conferences", slug: "csr-conferences-nonprofit" },
            //         { id: "grantmaking", title: "Grantmaking and Philanthropy Conferences", slug: "grantmaking-philanthropy-conferences" },
            //         { id: "nonprofit-law", title: "Nonprofit Law and Compliance Conferences", slug: "nonprofit-law-compliance-conferences" },
            //         { id: "youth-services", title: "Youth and Family Services Conferences", slug: "youth-family-services-conferences" }
            //     ]
            // },
            // {
            //     id: "political-conferences",
            //     title: "Political Conferences",
            //     slug: "political-conferences",
            //     children: [
            //         { id: "party", title: "Party Conferences", slug: "party-conferences" },
            //         { id: "electoral-strategy", title: "Electoral Strategy Conferences", slug: "electoral-strategy-conferences" },
            //         { id: "international-politics", title: "International Politics and Diplomacy Conferences", slug: "international-politics-diplomacy-conferences" },
            //         { id: "political-theory", title: "Political Theory and Philosophy Conferences", slug: "political-theory-philosophy-conferences" },
            //         { id: "public-policy-gov", title: "Public Policy and Governance Conferences", slug: "public-policy-governance-conferences" },
            //         { id: "campaign-training", title: "Political Campaign Training and Development Conferences", slug: "political-campaign-training-conferences" },
            //         { id: "activism", title: "Activism and Social Justice Conferences", slug: "activism-social-justice-conferences" },
            //         { id: "political-economy", title: "Political Economy and Development Conferences", slug: "political-economy-development-conferences" },
            //         { id: "government-admin", title: "Government and Public Administration Conferences", slug: "government-public-administration-conferences" },
            //         { id: "election-observation", title: "Election Observation and Democracy Conferences", slug: "election-observation-democracy-conferences" },
            //         { id: "youth-political", title: "Political Activism for Youth and Student Conferences", slug: "political-activism-youth-student-conferences" }
            //     ]
            // },
            // {
            //     id: "cultural-arts-conferences",
            //     title: "Cultural and Arts Conferences",
            //     slug: "cultural-arts-conferences",
            //     children: [
            //         { id: "visual-arts", title: "Visual Arts Conferences", slug: "visual-arts-conferences" },
            //         { id: "performing-arts", title: "Performing Arts Conferences", slug: "performing-arts-conferences" },
            //         { id: "film-media", title: "Film and Media Arts Conferences", slug: "film-media-arts-conferences" },
            //         { id: "literature-writing", title: "Literature and Writing Conferences", slug: "literature-writing-conferences" },
            //         { id: "heritage", title: "Cultural Heritage and Preservation Conferences", slug: "cultural-heritage-preservation-conferences" },
            //         { id: "music-sound", title: "Music and Sound Arts Conferences", slug: "music-sound-arts-conferences" },
            //         { id: "cultural-policy", title: "Cultural Policy and Management Conferences", slug: "cultural-policy-management-conferences" },
            //         { id: "fashion-design", title: "Fashion and Design Conferences", slug: "fashion-design-conferences" },
            //         { id: "architecture", title: "Architecture and Urban Design Conferences", slug: "architecture-urban-design-conferences" },
            //         { id: "cultural-diplomacy", title: "Cultural Diplomacy and Global Arts Conferences", slug: "cultural-diplomacy-global-arts-conferences" },
            //         { id: "community-arts", title: "Community Arts and Social Change Conferences", slug: "community-arts-social-change-conferences" },
            //         { id: "theater-education", title: "Theater and Performing Arts Education Conferences", slug: "theater-performing-arts-education-conferences" },
            //         { id: "indigenous-arts", title: "Indigenous Arts and Culture Conferences", slug: "indigenous-arts-culture-conferences" },
            //         { id: "art-therapy", title: "Art Therapy and Creative Arts Conferences", slug: "art-therapy-creative-arts-conferences" }
            //     ]
            // },
            // {
            //     id: "environmental-sustainability-conferences",
            //     title: "Environmental and Sustainability Conferences",
            //     slug: "environmental-sustainability-conferences",
            //     children: [
            //         { id: "climate-change", title: "Climate Change Conferences", slug: "climate-change-conferences" },
            //         { id: "sdg", title: "Sustainable Development Goals (SDGs) Conferences", slug: "sustainable-development-goals-sdgs-conferences" },
            //         { id: "green-tech", title: "Green Technology and Innovation Conferences", slug: "green-technology-innovation-conferences" },
            //         { id: "environmental-policy", title: "Environmental Policy and Governance Conferences", slug: "environmental-policy-governance-conferences" },
            //         { id: "sustainable-business", title: "Sustainable Business and Corporate Responsibility Conferences", slug: "sustainable-business-corporate-responsibility-conferences" },
            //         { id: "environmental-research", title: "Environmental Science and Research Conferences", slug: "environmental-science-research-conferences" },
            //         { id: "renewable-energy", title: "Renewable Energy and Clean Tech Conferences", slug: "renewable-energy-clean-tech-conferences" },
            //         { id: "waste-management", title: "Waste Management and Circular Economy Conferences", slug: "waste-management-circular-economy-conferences" },
            //         { id: "water-conservation", title: "Water Conservation and Management Conferences", slug: "water-conservation-management-conferences" },
            //         { id: "biodiversity", title: "Biodiversity and Conservation Conferences", slug: "biodiversity-conservation-conferences" },
            //         { id: "sustainable-agriculture", title: "Sustainable Agriculture and Food Security Conferences", slug: "sustainable-agriculture-food-security-conferences" },
            //         { id: "urban-sustainability", title: "Urban Sustainability and Green Cities Conferences", slug: "urban-sustainability-green-cities-conferences" }
            //     ]
            // },
            // {
            //     id: "medical-healthcare-conferences",
            //     title: "Medical and Healthcare Conferences",
            //     slug: "medical-healthcare-conferences",
            //     children: [
            //         { id: "medical-research", title: "Medical Research and Scientific Conferences", slug: "medical-research-scientific-conferences" },
            //         { id: "public-health", title: "Public Health and Epidemiology Conferences", slug: "public-health-epidemiology-conferences" },
            //         { id: "clinical-medicine", title: "Clinical Medicine and Specialty Conferences", slug: "clinical-medicine-specialty-conferences" },
            //         { id: "medical-education", title: "Medical Education and Training Conferences", slug: "medical-education-training-conferences" },
            //         { id: "healthcare-tech", title: "Healthcare Technology and Innovation Conferences", slug: "healthcare-technology-innovation-conferences" },
            //         { id: "global-health", title: "Global Health and International Healthcare Conferences", slug: "global-health-international-healthcare-conferences" },
            //         { id: "medical-ethics", title: "Medical Ethics and Healthcare Policy Conferences", slug: "medical-ethics-healthcare-policy-conferences" },
            //         { id: "pharma", title: "Pharmaceutical and Drug Development Conferences", slug: "pharmaceutical-drug-development-conferences" },
            //         { id: "mental-health", title: "Mental Health and Behavioral Healthcare Conferences", slug: "mental-health-behavioral-healthcare-conferences" },
            //         { id: "nursing", title: "Nursing and Healthcare Workforce Conferences", slug: "nursing-healthcare-workforce-conferences" }
            //     ]
            // },
            // {
            //     id: "virtual-conferences",
            //     title: "Virtual Conferences",
            //     slug: "virtual-conferences",
            //     children: [
            //         { id: "webinars", title: "Webinars", slug: "webinars" },
            //         { id: "virtual-trade-shows", title: "Virtual Trade Shows", slug: "virtual-trade-shows" },
            //         { id: "online-panels", title: "Online Panel Discussions", slug: "online-panel-discussions" },
            //         { id: "virtual-workshops", title: "Virtual Workshops", slug: "virtual-workshops" },
            //         { id: "online-summits", title: "Online Summits", slug: "online-summits" },
            //         { id: "virtual-networking", title: "Virtual Networking Events", slug: "virtual-networking-events" },
            //         { id: "hybrid-conferences", title: "Hybrid Virtual Conferences", slug: "hybrid-virtual-conferences" },
            //         { id: "virtual-job-fairs", title: "Virtual Job Fairs", slug: "virtual-job-fairs" },
            //         { id: "virtual-hackathons", title: "Virtual Hackathons", slug: "virtual-hackathons" },
            //         { id: "virtual-education", title: "Virtual Educational Conferences", slug: "virtual-educational-conferences" }
            //     ]
            // },
            // {
            //     id: "investor-financial-conferences",
            //     title: "Investor and Financial Conferences",
            //     slug: "investor-financial-conferences",
            //     children: [
            //         { id: "investment", title: "Investment Conferences", slug: "investment-conferences" },
            //         { id: "private-equity", title: "Private Equity and Venture Capital Conferences", slug: "private-equity-venture-capital-conferences" },
            //         { id: "hedge-fund", title: "Hedge Fund Conferences", slug: "hedge-fund-conferences" },
            //         { id: "real-estate-investment", title: "Real Estate Investment Conferences", slug: "real-estate-investment-conferences" },
            //         { id: "fintech", title: "Financial Technology (FinTech) Conferences", slug: "fintech-conferences" },
            //         { id: "corporate-finance", title: "Corporate Finance and Mergers & Acquisitions (M&A) Conferences", slug: "corporate-finance-ma-conferences" },
            //         { id: "wealth-management", title: "Wealth Management and Financial Planning Conferences", slug: "wealth-management-financial-planning-conferences" },
            //         { id: "sustainable-finance", title: "Sustainable Finance and Impact Investing Conferences", slug: "sustainable-finance-impact-investing-conferences" },
            //         { id: "macro-economics", title: "Macro and Global Economics Conferences", slug: "macro-global-economics-conferences" },
            //         { id: "debt-markets", title: "Debt Markets and Fixed Income Conferences", slug: "debt-markets-fixed-income-conferences" }
            //     ]
            // },
            // {
            //     id: "networking-conferences",
            //     title: "Networking Conferences",
            //     slug: "networking-conferences",
            //     children: [
            //         { id: "industry-networking", title: "Industry-Specific Networking Conferences", slug: "industry-specific-networking-conferences" },
            //         { id: "business-networking", title: "Business Networking Conferences", slug: "business-networking-conferences" },
            //         { id: "startup-networking", title: "Startup and Entrepreneur Networking Conferences", slug: "startup-entrepreneur-networking-conferences" },
            //         { id: "career-networking", title: "Career and Job-Seeking Networking Conferences", slug: "career-job-networking-conferences" },
            //         { id: "professional-association", title: "Professional Association Networking Conferences", slug: "professional-association-networking-conferences" },
            //         { id: "academic-networking", title: "Educational and Academic Networking Conferences", slug: "educational-academic-networking-conferences" },
            //         { id: "tech-networking", title: "Tech and Innovation Networking Conferences", slug: "tech-innovation-networking-conferences" },
            //         { id: "digital-marketing-networking", title: "Social Media and Digital Marketing Networking Conferences", slug: "social-media-digital-marketing-networking-conferences" },
            //         { id: "women-networking", title: "Women’s Networking Conferences", slug: "womens-networking-conferences" },
            //         { id: "diversity-networking", title: "Diversity and Inclusion Networking Conferences", slug: "diversity-inclusion-networking-conferences" },
            //         { id: "global-networking", title: "Global and International Networking Conferences", slug: "global-international-networking-conferences" }
            //     ]
            // }
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
            // {
            //     id: "sampling-events",
            //     title: "Sampling Events",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "sampling-events",
            //     children: [
            //         { id: "in-store-sampling", title: "In-Store Sampling", slug: "in-store-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "street-sampling", title: "Street Sampling", slug: "street-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "event-based-sampling", title: "Event-Based Sampling", slug: "event-based-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "direct-mail-sampling", title: "Sampling via Direct Mail", slug: "direct-mail-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "trade-show-sampling", title: "Sampling at Trade Shows or Expos", slug: "trade-show-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "popup-sampling", title: "Sampling at Pop-Up Events", slug: "popup-event-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "online-sampling", title: "Sampling via Online Campaigns", slug: "online-campaign-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "influencer-sampling", title: "Sampling via Influencers", slug: "influencer-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "kiosk-sampling", title: "Sampling at Sampling Kiosks", slug: "sampling-kiosk-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "corporate-sampling", title: "Corporate or Office Sampling", slug: "corporate-office-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "loyalty-sampling", title: "Sampling Through Loyalty Programs", slug: "loyalty-program-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "door-to-door-sampling", title: "Door-to-Door Sampling", slug: "door-to-door-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "subscription-box-sampling", title: "Sampling Through Subscription Boxes", slug: "subscription-box-sampling", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "trade-shows-exhibitions",
            //     title: "Trade Shows and Exhibitions",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "trade-shows-exhibitions",
            //     children: [
            //         { id: "industry-trade-shows", title: "Industry-Specific Trade Shows", slug: "industry-specific-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "international-trade-shows", title: "International Trade Shows", slug: "international-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "b2b-trade-shows", title: "B2B (Business-to-Business) Trade Shows", slug: "b2b-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "b2c-trade-shows", title: "B2C (Business-to-Consumer) Trade Shows", slug: "b2c-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "product-trade-shows", title: "Product-Specific Trade Shows", slug: "product-specific-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "virtual-trade-shows", title: "Virtual Trade Shows", slug: "virtual-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "popup-trade-shows", title: "Pop-Up Trade Shows", slug: "popup-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "expos", title: "Expos and Expositions", slug: "expos-expositions", titleSuffix: "Management Company in Delhi" },
            //         { id: "trade-fairs", title: "Trade Fairs", slug: "trade-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "networking-trade-shows", title: "Networking and Professional Development Trade Shows", slug: "networking-professional-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "hybrid-trade-shows", title: "Hybrid Trade Shows", slug: "hybrid-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "eco-trade-shows", title: "Sustainability and Eco-Friendly Trade Shows", slug: "eco-friendly-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "government-trade-shows", title: "Government and Public Sector Trade Shows", slug: "government-public-sector-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "influencer-trade-shows", title: "Celebrity or Influencer-Based Trade Shows", slug: "influencer-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "specialty-trade-shows", title: "Specialty Trade Shows", slug: "specialty-trade-shows", titleSuffix: "Management Company in Delhi" },
            //         { id: "consumer-goods-exhibitions", title: "Consumer Goods Exhibitions", slug: "consumer-goods-exhibitions", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "experiential-marketing",
            //     title: "Experiential Marketing Events",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "experiential-marketing-events",
            //     children: [
            //         { id: "popup-events", title: "Pop-Up Events", slug: "experiential-popup-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "brand-activations", title: "Brand Activations", slug: "brand-activations", titleSuffix: "Management Company in Delhi" },
            //         { id: "sampling-experiential", title: "Sampling Events", slug: "experiential-sampling-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "branded-experiences", title: "Branded Experiences", slug: "branded-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "live-sponsorships", title: "Sponsorships of Live Events", slug: "live-event-sponsorships", titleSuffix: "Management Company in Delhi" },
            //         { id: "interactive-workshops", title: "Interactive Workshops and Classes", slug: "interactive-workshops-classes", titleSuffix: "Management Company in Delhi" },
            //         { id: "mobile-marketing", title: "Mobile Experiential Marketing (Mobile Tours)", slug: "mobile-experiential-marketing", titleSuffix: "Management Company in Delhi" },
            //         { id: "social-activations", title: "Influencer and Social Media Activations", slug: "social-media-activations", titleSuffix: "Management Company in Delhi" },
            //         { id: "vr-ar-experiences", title: "Virtual Reality (VR) or Augmented Reality (AR) Experiences", slug: "vr-ar-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "customer-appreciation", title: "Customer Appreciation Events", slug: "customer-appreciation-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "flash-mobs", title: "Flash Mobs or Surprise Experiences", slug: "flash-mob-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "charity-experiential", title: "Cause-Related or Charity Experiential Events", slug: "charity-experiential-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "digital-experiences", title: "Interactive Digital Experiences", slug: "interactive-digital-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "brand-competitions", title: "Branded Competitions or Challenges", slug: "branded-competitions-challenges", titleSuffix: "Management Company in Delhi" },
            //         { id: "experiential-launch", title: "Experiential Launch Events", slug: "experiential-launch-events", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "sponsorship-partnership",
            //     title: "Sponsorship and Partnership Events",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "sponsorship-partnership-events",
            //     children: [
            //         { id: "event-sponsorship", title: "Event Sponsorship", slug: "event-sponsorship", titleSuffix: "Management Company in Delhi" },
            //         { id: "co-branding", title: "Co-Branding Partnerships", slug: "co-branding-partnerships", titleSuffix: "Management Company in Delhi" },
            //         { id: "event-activation", title: "Event Activation", slug: "event-activation", titleSuffix: "Management Company in Delhi" },
            //         { id: "content-partnership", title: "Content Partnership Events", slug: "content-partnership-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "cause-marketing", title: "Cause-Related Marketing", slug: "cause-related-marketing", titleSuffix: "Management Company in Delhi" },
            //         { id: "exclusive-partnerships", title: "Exclusive Partnerships", slug: "exclusive-partnerships", titleSuffix: "Management Company in Delhi" },
            //         { id: "experiential-partnerships", title: "Experiential Marketing Partnerships", slug: "experiential-marketing-partnerships", titleSuffix: "Management Company in Delhi" },
            //         { id: "digital-sponsorship", title: "Digital and Virtual Event Sponsorship", slug: "digital-event-sponsorship", titleSuffix: "Management Company in Delhi" },
            //         { id: "retail-partnerships", title: "Retail Partnerships", slug: "retail-partnerships", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "social-media-campaigns",
            //     title: "Social Media Campaign Events",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "social-media-campaign-events",
            //     children: [
            //         { id: "hashtag-campaigns", title: "Hashtag Campaigns", slug: "hashtag-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "influencer-campaigns", title: "Influencer Campaigns", slug: "influencer-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "contests", title: "Contests and Giveaways", slug: "contests-giveaways", titleSuffix: "Management Company in Delhi" },
            //         { id: "live-streaming", title: "Live Streaming Campaigns", slug: "live-streaming-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "trends", title: "Challenges and Trends", slug: "social-media-trends", titleSuffix: "Management Company in Delhi" },
            //         { id: "paid-ads", title: "Paid Advertising Campaigns", slug: "paid-advertising-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "collaboration", title: "Collaborations and Co-Branding", slug: "collaborations-co-branding", titleSuffix: "Management Company in Delhi" },
            //         { id: "ugc", title: "User-Generated Content Campaigns", slug: "ugc-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "seasonal", title: "Seasonal or Event-Driven Campaigns", slug: "seasonal-event-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "interactive", title: "Interactive Campaigns", slug: "interactive-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "storytelling", title: "Storytelling Campaigns", slug: "storytelling-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "educational", title: "Educational Campaigns", slug: "educational-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "ambassador", title: "Ambassador Programs", slug: "brand-ambassador-programs", titleSuffix: "Management Company in Delhi" },
            //         { id: "story-ads", title: "Story Ads and Sponsored Stories", slug: "story-ads-sponsored-stories", titleSuffix: "Management Company in Delhi" },
            //         { id: "geo-targeted", title: "Geo-Targeted Campaigns", slug: "geo-targeted-campaigns", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "contests-giveaways",
            //     title: "Contests and Giveaways",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "contests-giveaways",
            //     children: [
            //         { id: "sweepstakes", title: "Sweepstakes (Random Draw Giveaways)", slug: "sweepstakes-giveaways", titleSuffix: "Management Company in Delhi" },
            //         { id: "photo-video-contests", title: "Photo/Video Contests", slug: "photo-video-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "caption-contests", title: "Caption Contests", slug: "caption-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "hashtag-contests", title: "Hashtag Contests", slug: "hashtag-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "trivia-quiz", title: "Trivia and Quiz Contests", slug: "trivia-quiz-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "referral-contests", title: "Referral Contests", slug: "referral-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "comment-win", title: "Comment to Win Contests", slug: "comment-to-win-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "share-win", title: "Share and Win Contests", slug: "share-and-win-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "like-win", title: "Like to Win Contests", slug: "like-to-win-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "skills-based", title: "Skills-Based Contests", slug: "skills-based-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "ugc-contests", title: "User-Generated Content (UGC) Contests", slug: "ugc-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "instant-win", title: "Instant Win Contests", slug: "instant-win-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "treasure-hunt", title: "Treasure Hunt or Scavenger Hunt Contests", slug: "treasure-hunt-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-giveaways", title: "Exclusive VIP Giveaways", slug: "vip-giveaways", titleSuffix: "Management Company in Delhi" },
            //         { id: "seasonal-contests", title: "Seasonal or Holiday-Themed Contests", slug: "seasonal-holiday-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "story-contests", title: "Social Media Story Contests", slug: "social-media-story-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "crowdsourcing", title: "Crowdsourcing Contests", slug: "crowdsourcing-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "countdown", title: "Countdown Contests", slug: "countdown-contests", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "celebrity-influencer",
            //     title: "Celebrity and Influencer Endorsement Events",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "celebrity-influencer-endorsement-events",
            //     children: [
            //         { id: "product-endorsement", title: "Product Endorsement Campaigns", slug: "product-endorsement-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "social-takeovers", title: "Social Media Takeovers", slug: "social-media-takeovers", titleSuffix: "Management Company in Delhi" },
            //         { id: "brand-ambassadors", title: "Brand Ambassadorships", slug: "brand-ambassadorships", titleSuffix: "Management Company in Delhi" },
            //         { id: "red-carpet", title: "Event Appearances or Red-Carpet Endorsements", slug: "red-carpet-endorsements", titleSuffix: "Management Company in Delhi" },
            //         { id: "collab-launch", title: "Collaborative Product Launches", slug: "collaborative-product-launches", titleSuffix: "Management Company in Delhi" },
            //         { id: "influencer-giveaways", title: "Influencer-Hosted Giveaways and Contests", slug: "influencer-giveaways-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "sponsored-content", title: "Influencer Collaborations on Sponsored Content", slug: "influencer-sponsored-content", titleSuffix: "Management Company in Delhi" },
            //         { id: "webinars-live", title: "Influencer or Celebrity-Led Webinars/Live Streams", slug: "influencer-live-webinars", titleSuffix: "Management Company in Delhi" },
            //         { id: "popup-events", title: "Influencer/Brand Pop-Up Events", slug: "influencer-popup-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "ads-commercials", title: "Celebrity-Endorsed Commercials and Advertisements", slug: "celebrity-commercial-ads", titleSuffix: "Management Company in Delhi" },
            //         { id: "affiliate-programs", title: "Influencer Affiliate Programs", slug: "influencer-affiliate-programs", titleSuffix: "Management Company in Delhi" },
            //         { id: "experience-events", title: "Influencer Endorsed Experience Events", slug: "influencer-experience-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "charity-hosted", title: "Influencer and Celebrity-Hosted Charity Events", slug: "celebrity-charity-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "unboxing", title: "Unboxing Events", slug: "unboxing-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "curated-lists", title: "Celebrity or Influencer-Curated Lists", slug: "curated-influencer-lists", titleSuffix: "Management Company in Delhi" },
            //         { id: "inspired-campaigns", title: "Celebrity or Influencer-Inspired Campaigns", slug: "influencer-inspired-campaigns", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "charity-marketing",
            //     title: "Charity and Cause-Related Marketing Events",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "charity-cause-marketing-events",
            //     children: [
            //         { id: "product-partnerships", title: "Cause-Related Product Partnerships", slug: "cause-product-partnerships", titleSuffix: "Management Company in Delhi" },
            //         { id: "charity-galas", title: "Charity Galas or Fundraising Events", slug: "charity-galas-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "csr-campaigns", title: "Corporate Social Responsibility (CSR) Campaigns", slug: "csr-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "walks-runs", title: "Charity Walks/Runs", slug: "charity-walks-runs", titleSuffix: "Management Company in Delhi" },
            //         { id: "volunteer-programs", title: "Volunteer Programs", slug: "volunteer-programs", titleSuffix: "Management Company in Delhi" },
            //         { id: "donation-matching", title: "Donation Matching Campaigns", slug: "donation-matching-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "awareness", title: "Awareness Campaigns", slug: "awareness-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "charity-auctions", title: "Charity Auctions", slug: "charity-auctions", titleSuffix: "Management Company in Delhi" },
            //         { id: "donation-drives", title: "Product Donation Drives", slug: "product-donation-drives", titleSuffix: "Management Company in Delhi" },
            //         { id: "charity-concerts", title: "Charity Events or Concerts", slug: "charity-concert-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "social-charity", title: "Social Media Charity Campaigns", slug: "social-media-charity-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "pro-bono", title: "Pro Bono Services or Skills-Based Volunteering", slug: "pro-bono-volunteering", titleSuffix: "Management Company in Delhi" },
            //         { id: "sporting-events", title: "Charity Sporting Events", slug: "charity-sporting-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "tournaments", title: "Fundraising Tournaments", slug: "fundraising-tournaments", titleSuffix: "Management Company in Delhi" },
            //         { id: "limited-products", title: "Limited-Edition Charity Products", slug: "limited-edition-charity-products", titleSuffix: "Management Company in Delhi" },
            //         { id: "influencer-charity", title: "Charity Partnerships with Influencers", slug: "influencer-charity-partnerships", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "vip-exclusive",
            //     title: "VIP and Exclusive Brand Promotion Events",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "vip-exclusive-brand-events",
            //     children: [
            //         { id: "invitation-only", title: "Invitation-Only Events", slug: "invitation-only-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "private-previews", title: "Private Previews", slug: "private-previews", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-shopping", title: "VIP Shopping Events", slug: "vip-shopping-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "private-dinners", title: "Private Dinners or Cocktail Parties", slug: "private-dinners-cocktail-parties", titleSuffix: "Management Company in Delhi" },
            //         { id: "exclusive-launches", title: "Exclusive Product Launches", slug: "exclusive-product-launches", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-lounges", title: "VIP Access at Major Events (VIP Lounges)", slug: "vip-event-lounges", titleSuffix: "Management Company in Delhi" },
            //         { id: "meet-greets", title: "Celebrity or Influencer Meet-and-Greets", slug: "celebrity-meet-and-greet", titleSuffix: "Management Company in Delhi" },
            //         { id: "retreats", title: "Exclusive Retreats or Getaways", slug: "exclusive-retreats-getaways", titleSuffix: "Management Company in Delhi" },
            //         { id: "members-only", title: "Members-Only Events", slug: "members-only-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-social", title: "Influencer-Only or VIP Social Media Events", slug: "vip-social-media-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-experiences", title: "VIP Brand Experiences (Personalized Experiences)", slug: "vip-brand-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "masterclasses", title: "Private Workshops or Masterclasses", slug: "private-masterclasses", titleSuffix: "Management Company in Delhi" },
            //         { id: "exclusive-sponsorship", title: "Exclusive Sponsorship of High-Profile Events", slug: "exclusive-event-sponsorship", titleSuffix: "Management Company in Delhi" },
            //         { id: "luxury-travel", title: "Luxury Travel Experiences", slug: "luxury-travel-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "limited-access", title: "VIP Access to Limited-Edition or Custom Products", slug: "vip-limited-products", titleSuffix: "Management Company in Delhi" },
            //         { id: "vip-charity", title: "Charity or Philanthropic VIP Events", slug: "vip-charity-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "exclusive-digital", title: "Exclusive Digital Events", slug: "exclusive-digital-events", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "seasonal-promotions",
            //     title: "Seasonal or Holiday Promotions",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "seasonal-holiday-promotions",
            //     children: [
            //         { id: "holiday-sales", title: "Holiday Sales and Discounts", slug: "holiday-sales-discounts", titleSuffix: "Management Company in Delhi" },
            //         { id: "holiday-products", title: "Limited-Edition Holiday Products", slug: "holiday-limited-products", titleSuffix: "Management Company in Delhi" },
            //         { id: "gift-purchase", title: "Gift with Purchase Promotions", slug: "gift-with-purchase", titleSuffix: "Management Company in Delhi" },
            //         { id: "loyalty-rewards", title: "Seasonal Loyalty Rewards or Points", slug: "seasonal-loyalty-rewards", titleSuffix: "Management Company in Delhi" },
            //         { id: "flash-sales", title: "Flash Sales and Time-Limited Offers", slug: "flash-sales-offers", titleSuffix: "Management Company in Delhi" },
            //         { id: "bundle-offers", title: "Holiday-Themed Bundle Offers", slug: "holiday-bundle-offers", titleSuffix: "Management Company in Delhi" },
            //         { id: "seasonal-contests", title: "Seasonal Sweepstakes or Contests", slug: "seasonal-sweepstakes-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "holiday-social", title: "Holiday-Themed Social Media Campaigns", slug: "holiday-social-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "email-campaigns", title: "Email Campaigns with Holiday Offers", slug: "holiday-email-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "popup-shops", title: "Seasonal Pop-Up Shops", slug: "seasonal-popup-shops", titleSuffix: "Management Company in Delhi" },
            //         { id: "holiday-events", title: "Holiday-Themed Events and Experiences", slug: "holiday-events-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "subscription-boxes", title: "Seasonal Subscription Boxes", slug: "seasonal-subscription-boxes", titleSuffix: "Management Company in Delhi" },
            //         { id: "charity-giving", title: "Charity and Giving Campaigns", slug: "charity-giving-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "free-shipping", title: "Free Shipping or Delivery Promotions", slug: "free-shipping-promotions", titleSuffix: "Management Company in Delhi" },
            //         { id: "seasonal-ads", title: "Seasonal Advertising Campaigns", slug: "seasonal-advertising-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "influencer-seasonal", title: "Seasonal Influencer Collaborations", slug: "seasonal-influencer-collaborations", titleSuffix: "Management Company in Delhi" },
            //         { id: "customer-appreciation", title: "Holiday-Themed Customer Appreciation Events", slug: "holiday-customer-appreciation", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "consumer-conferences",
            //     title: "Consumer-Facing Conferences and Seminars",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "consumer-facing-conferences-seminars",
            //     children: [
            //         { id: "product-launch-seminars", title: "Product Launch Seminars", slug: "product-launch-seminars", titleSuffix: "Management Company in Delhi" },
            //         { id: "industry-conferences", title: "Industry-Specific Conferences", slug: "industry-specific-conferences", titleSuffix: "Management Company in Delhi" },
            //         { id: "educational-seminars", title: "Educational Seminars or Workshops", slug: "educational-seminars-workshops", titleSuffix: "Management Company in Delhi" },
            //         { id: "influencer-seminars", title: "Influencer-Led Seminars", slug: "influencer-led-seminars", titleSuffix: "Management Company in Delhi" },
            //         { id: "consumer-experience", title: "Consumer Experience Events", slug: "consumer-experience-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "networking", title: "Networking Conferences", slug: "networking-conferences", titleSuffix: "Management Company in Delhi" },
            //         { id: "customer-seminars", title: "Customer Appreciation Seminars", slug: "customer-appreciation-seminars", titleSuffix: "Management Company in Delhi" },
            //         { id: "brand-ambassadors", title: "Brand Ambassador Programs", slug: "brand-ambassador-programs", titleSuffix: "Management Company in Delhi" },
            //         { id: "feedback-seminars", title: "Consumer Feedback and Idea Generation Seminars", slug: "consumer-feedback-seminars", titleSuffix: "Management Company in Delhi" },
            //         { id: "csr-seminars", title: "Sustainability and CSR Seminars", slug: "csr-sustainability-seminars", titleSuffix: "Management Company in Delhi" },
            //         { id: "health-conferences", title: "Consumer Health and Wellness Conferences", slug: "consumer-health-conferences", titleSuffix: "Management Company in Delhi" },
            //         { id: "startup-seminars", title: "Startup or Entrepreneur Seminars", slug: "startup-entrepreneur-seminars", titleSuffix: "Management Company in Delhi" },
            //         { id: "trends-conferences", title: "Consumer Trends and Innovations Conferences", slug: "consumer-trends-conferences", titleSuffix: "Management Company in Delhi" },
            //         { id: "demo-seminars", title: "Interactive Product Demonstration Seminars", slug: "product-demo-seminars", titleSuffix: "Management Company in Delhi" },
            //         { id: "popup-seminars", title: "Pop-Up Conferences and Seminars", slug: "popup-conferences-seminars", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "customer-appreciation",
            //     title: "Customer Appreciation Events",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "customer-appreciation-events",
            //     children: [
            //         { id: "vip-events", title: "VIP Customer Events", slug: "vip-customer-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "appreciation-parties", title: "Customer Appreciation Parties", slug: "customer-appreciation-parties", titleSuffix: "Management Company in Delhi" },
            //         { id: "gift-events", title: "Thank You Gift Events", slug: "thank-you-gift-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "early-access", title: "Exclusive Access or Early-Bird Events", slug: "exclusive-early-access-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "loyalty-celebrations", title: "Loyalty Program Celebrations", slug: "loyalty-program-celebrations", titleSuffix: "Management Company in Delhi" },
            //         { id: "private-shopping", title: "Private Shopping Events", slug: "private-shopping-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "appreciation-day", title: "Customer Appreciation Day", slug: "customer-appreciation-day", titleSuffix: "Management Company in Delhi" },
            //         { id: "personal-messages", title: "Thank You Letters or Personalized Messages", slug: "thank-you-messages", titleSuffix: "Management Company in Delhi" },
            //         { id: "interactive-experience", title: "Interactive Customer Experience Events", slug: "interactive-customer-experience", titleSuffix: "Management Company in Delhi" },
            //         { id: "csr-events", title: "Charity Events and Social Responsibility Initiatives", slug: "csr-charity-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "recognition-events", title: "Customer Recognition Events (Awards or Recognition Ceremonies)", slug: "customer-recognition-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "anniversary", title: "Anniversary Celebrations", slug: "anniversary-celebrations", titleSuffix: "Management Company in Delhi" },
            //         { id: "customer-webinars", title: "Customer-Only Webinars or Educational Sessions", slug: "customer-only-webinars", titleSuffix: "Management Company in Delhi" },
            //         { id: "seasonal-events", title: "Holiday or Seasonal Customer Appreciation Events", slug: "seasonal-customer-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "lunch-dinner", title: "Customer Appreciation Lunches/Dinners", slug: "customer-lunch-dinner-events", titleSuffix: "Management Company in Delhi" },
            //         { id: "exclusive-contests", title: "Customer-Exclusive Sweepstakes or Contests", slug: "customer-exclusive-contests", titleSuffix: "Management Company in Delhi" },
            //         { id: "preview-events", title: "Exclusive Preview Events", slug: "exclusive-preview-events", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "interactive-brand",
            //     title: "Interactive Brand Experiences",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "interactive-brand-experiences",
            //     children: [
            //         { id: "product-trials", title: "Product Demonstrations and Trials", slug: "product-demo-trials", titleSuffix: "Management Company in Delhi" },
            //         { id: "popup-shops", title: "Pop-Up Shops", slug: "popup-shops", titleSuffix: "Management Company in Delhi" },
            //         { id: "vr", title: "Virtual Reality (VR) Experiences", slug: "virtual-reality-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "ar", title: "Augmented Reality (AR) Experiences", slug: "augmented-reality-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "kiosks", title: "Interactive Kiosks and Digital Displays", slug: "interactive-kiosks-displays", titleSuffix: "Management Company in Delhi" },
            //         { id: "gamified", title: "Gamified Experiences", slug: "gamified-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "workshops", title: "Hands-On Workshops and Classes", slug: "hands-on-workshops", titleSuffix: "Management Company in Delhi" },
            //         { id: "activations", title: "Interactive Events or Activations", slug: "interactive-activations", titleSuffix: "Management Company in Delhi" },
            //         { id: "influencer-experiences", title: "Influencer-Led Experiences", slug: "influencer-led-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "brand-games", title: "Brand-Themed Interactive Games", slug: "brand-interactive-games", titleSuffix: "Management Company in Delhi" },
            //         { id: "sampling", title: "Experiential Product Sampling", slug: "experiential-product-sampling", titleSuffix: "Management Company in Delhi" },
            //         { id: "social-campaigns", title: "Interactive Social Media Campaigns", slug: "interactive-social-campaigns", titleSuffix: "Management Company in Delhi" },
            //         { id: "live-stream", title: "Interactive Live Streaming", slug: "interactive-live-streaming", titleSuffix: "Management Company in Delhi" },
            //         { id: "sensory", title: "Sensory Brand Experiences", slug: "sensory-brand-experiences", titleSuffix: "Management Company in Delhi" },
            //         { id: "co-creation", title: "Customer Co-Creation Experiences", slug: "customer-co-creation", titleSuffix: "Management Company in Delhi" },
            //         { id: "storytelling", title: "Interactive Storytelling Experiences", slug: "interactive-storytelling", titleSuffix: "Management Company in Delhi" },
            //         { id: "feedback", title: "Interactive Feedback Sessions", slug: "interactive-feedback-sessions", titleSuffix: "Management Company in Delhi" }
            //     ]
            // },
            // {
            //     id: "festivals-trade-fairs",
            //     title: "Festivals and Trade Fairs",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "festivals-trade-fairs",
            //     children: [
            //         { id: "industry-fairs", title: "Industry-Specific Trade Fairs", slug: "industry-trade-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "product-fairs", title: "Product-Specific Trade Fairs", slug: "product-trade-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "international-fairs", title: "International Trade Fairs", slug: "international-trade-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "consumer-fairs", title: "Consumer Fairs", slug: "consumer-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "local-festivals", title: "Local or Regional Festivals", slug: "local-regional-festivals", titleSuffix: "Management Company in Delhi" },
            //         { id: "startup-fairs", title: "Trade Fairs for Startups and Entrepreneurs", slug: "startup-trade-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "cultural-festivals", title: "Cultural and Arts Festivals", slug: "cultural-arts-festivals", titleSuffix: "Management Company in Delhi" },
            //         { id: "green-fairs", title: "Sustainability and Green Fairs", slug: "sustainability-green-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "wellness-fairs", title: "Health and Wellness Fairs", slug: "health-wellness-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "food-fairs", title: "Food and Beverage Fairs", slug: "food-beverage-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "luxury-fairs", title: "Luxury and High-End Product Fairs", slug: "luxury-product-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "tech-fairs", title: "Tech and Innovation Fairs", slug: "tech-innovation-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "fashion-fairs", title: "Fashion and Apparel Trade Fairs", slug: "fashion-apparel-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "travel-fairs", title: "Travel and Tourism Fairs", slug: "travel-tourism-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "sports-fairs", title: "Sports and Recreation Fairs", slug: "sports-recreation-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "holiday-festivals", title: "Holiday or Seasonal Festivals", slug: "holiday-seasonal-festivals", titleSuffix: "Management Company in Delhi" },
            //         { id: "environmental-fairs", title: "Environmental and Nature Fairs", slug: "environmental-nature-fairs", titleSuffix: "Management Company in Delhi" },
            //         { id: "music-festivals", title: "Music and Entertainment Festivals", slug: "music-entertainment-festivals", titleSuffix: "Management Company in Delhi" }
            //     ]
            // }
        ]
    }

];