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
                                id: "masquerade-ball",
                                title: "Masquerade Ball",
                                slug: "mas-ball",
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
                                id: "networking-conferences",
                                title: "Networking Conferences",
                                slug: "netw-conf",
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
                slug: "artist-mngmt",
                children: [
                    {
                        id: "performing-actors",
                        title: "Actors",
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
                        slug: "Ply-wright",
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
            // {
            //     id: "celebrity-artists",
            //     title: "Celebrity Artists",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "cele-artist",
            //     children: []
            // },
            // {
            //     id: "social-media-influencers",
            //     title: "Social Media Influencers",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "social-m-influ",
            //     children: []
            // },
            // {
            //     id: "voice-artists",
            //     title: "Voice Artists",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "voice-artist",
            //     children: []
            // },
            // {
            //     id: "photographers",
            //     title: "Photographers",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "photo-graphers",
            //     children: []
            // },
            // {
            //     id: "emcee",
            //     title: "Emcee (Master of Ceremonies)",
            //     titleSuffix: "Management Company in Delhi",
            //     slug: "emcee",
            //     children: []
            // },

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