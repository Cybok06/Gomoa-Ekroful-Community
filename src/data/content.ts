import { Building2, CalendarDays, Construction, FileText, HandHeart, Mail, TriangleAlert, UserRound } from "lucide-react";

export const announcements = [
  {
    id: 1,
    title: "Community Clean-Up Exercise",
    date: "May 25, 2026",
    excerpt:
      "All residents are encouraged to participate in our monthly community clean-up exercise. Bring your tools and wear appropriate clothing.",
    category: "Announcement",
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Town Hall Meeting with Assembly",
    date: "June 2, 2026",
    excerpt:
      "There will be a town hall meeting with the Assembly and community leaders to discuss the development projects and community welfare.",
    category: "Announcement",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Annual Dues Collection Notice",
    date: "June 10, 2026",
    excerpt:
      "Community members are reminded that annual dues collection begins on June 10. Please bring your receipt book and ID card to the community centre.",
    category: "Notice",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Road Construction Update",
    date: "June 15, 2026",
    excerpt:
      "The contractor for the new road construction project has been selected. Works will begin on June 20 and are expected to last 6 months.",
    category: "Update",
    image:
      "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=800&h=500&fit=crop&auto=format",
  },
];

export const events = [
  {
    id: 1,
    month: "MAY",
    day: "25",
    title: "Community Clean-Up Exercise",
    time: "7:00 AM – 12:00 PM",
    location: "Gomoa Ekroful Community Centre",
    description:
      "Monthly community-wide clean-up exercise. All residents are expected to participate and help keep our community clean.",
    category: "Community",
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 2,
    month: "JUN",
    day: "02",
    title: "Town Hall Meeting",
    time: "10:00 AM – 1:00 PM",
    location: "Ekroful Palace Forecourt",
    description:
      "A town hall meeting to discuss ongoing development projects, community welfare, and budget allocation for the next quarter.",
    category: "Governance",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 3,
    month: "JUN",
    day: "15",
    title: "Youth Development Forum",
    time: "9:00 AM – 4:00 PM",
    location: "Gomoa Ekroful Community Hall",
    description:
      "Annual youth development forum bringing together young people to discuss opportunities, challenges and future plans for Gomoa Ekroful.",
    category: "Youth",
    image:
      "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 4,
    month: "JUL",
    day: "04",
    title: "Gomoa Ekroful Cultural Festival",
    time: "8:00 AM – 6:00 PM",
    location: "Community Park & Palace Grounds",
    description:
      "Annual cultural festival celebrating the rich heritage and traditions of the Gomoa Ekroful people. Featuring traditional dances, music, food, and exhibitions.",
    category: "Culture",
    image:
      "https://images.unsplash.com/photo-1785355805907-b95663dfb621?w=800&h=500&fit=crop&auto=format",
  },
];

export const projects = [
  {
    id: 1,
    title: "Road Construction & Rehabilitation",
    status: "ONGOING",
    category: "Roads",
    description:
      "Construction of new roads and rehabilitation of existing roads in the community to improve connectivity and ease of movement for residents.",
    progress: 75,
    startDate: "January 2026",
    expectedCompletion: "August 2026",
    budget: "GH₵ 850,000",
    image:
      "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=800&h=500&fit=crop&auto=format",
    impact: "Improves access for 2,400+ residents and 183 businesses",
  },
  {
    id: 2,
    title: "Community Library & Digital Centre",
    status: "ONGOING",
    category: "Education",
    description:
      "A modern community library promoting reading culture, digital literacy, and lifelong learning for residents of all ages.",
    progress: 60,
    startDate: "March 2026",
    expectedCompletion: "November 2026",
    budget: "GH₵ 420,000",
    image:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=500&fit=crop&auto=format",
    impact: "Serves 1,800+ students and community members",
  },
  {
    id: 3,
    title: "Community Health Centre Expansion",
    status: "PROPOSED",
    category: "Healthcare",
    description:
      "Expansion and upgrade of the community health centre to provide better healthcare services for residents of Gomoa Ekroful and surrounding areas.",
    progress: 15,
    startDate: "September 2026",
    expectedCompletion: "March 2027",
    budget: "GH₵ 1,200,000",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop&auto=format",
    impact: "Serves over 5,000 residents in the area",
  },
  {
    id: 4,
    title: "School Improvement Project",
    status: "ONGOING",
    category: "Education",
    description:
      "Rehabilitation and improvement of basic school infrastructure including new classrooms, sanitation facilities, and educational materials.",
    progress: 45,
    startDate: "February 2026",
    expectedCompletion: "July 2026",
    budget: "GH₵ 310,000",
    image:
      "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=800&h=500&fit=crop&auto=format",
    impact: "Benefits 650+ pupils and 28 teachers",
  },
  {
    id: 5,
    title: "Drainage & Sanitation Improvement",
    status: "COMPLETED",
    category: "Sanitation",
    description:
      "Installation of proper drainage channels and sanitation facilities to prevent flooding and improve environmental hygiene in the community.",
    progress: 100,
    startDate: "October 2025",
    expectedCompletion: "January 2026",
    budget: "GH₵ 185,000",
    image:
      "https://images.unsplash.com/photo-1635073908681-3c0b71af0e29?w=800&h=500&fit=crop&auto=format",
    impact: "Protects 800+ households from flooding",
  },
  {
    id: 6,
    title: "Community ICT Centre",
    status: "PROPOSED",
    category: "Technology",
    description:
      "Establishment of a modern ICT centre to provide digital skills training, internet access, and technology education for youth and adults.",
    progress: 5,
    startDate: "December 2026",
    expectedCompletion: "June 2027",
    budget: "GH₵ 290,000",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop&auto=format",
    impact: "Expected to serve 500+ youth annually",
  },
];

export const leaders = [
  {
    id: 1,
    name: "Nana Kweku Entsie II",
    position: "Community Chief",
    category: "Traditional Leadership",
    bio: "Nana Kweku Entsie II has been the paramount chief of Gomoa Ekroful since 2015. He is deeply committed to the development and unity of the community.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 2,
    name: "Nana Akosua Mensah",
    position: "Queen Mother",
    category: "Traditional Leadership",
    bio: "As the Queen Mother, Nana Akosua Mensah plays a vital role in preserving the cultural traditions and advocating for women and children in the community.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 3,
    name: "Mr. Emmanuel Boateng",
    position: "Community Chairman",
    category: "Community Executive",
    bio: "Mr. Emmanuel Boateng oversees the day-to-day administration of the community, coordinating between government agencies and residents.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 4,
    name: "Mrs. Abena Yeboah",
    position: "Development Committee Chairperson",
    category: "Community Executive",
    bio: "Mrs. Abena Yeboah leads the development committee, overseeing all infrastructure and development projects in the community.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 5,
    name: "Mr. Kofi Asante",
    position: "Assembly Representative",
    category: "Assembly Representatives",
    bio: "Mr. Kofi Asante represents Gomoa Ekroful at the District Assembly, advocating for community interests in local governance.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&auto=format",
  },
  {
    id: 6,
    name: "Ms. Ama Quansah",
    position: "Youth Representative",
    category: "Committees",
    bio: "Ms. Ama Quansah champions youth development, education, and employment opportunities within the community.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&auto=format",
  },
];

export const news = [
  {
    id: 1,
    title: "Community Receives GH₵ 2.5M Government Grant for Infrastructure",
    date: "May 20, 2026",
    category: "Development",
    tab: "news",
    excerpt:
      "The government has approved a GH₵ 2.5 million infrastructure development grant for Gomoa Ekroful, to be used for roads, water supply, and community facilities.",
    image:
      "https://images.unsplash.com/photo-1568025848823-86404cd04ad1?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "New Water Supply System Commissioned for Gomoa Ekroful",
    date: "May 12, 2026",
    category: "Infrastructure",
    tab: "news",
    excerpt:
      "A new community water supply system has been commissioned, providing clean and reliable water access to over 2,000 residents for the first time.",
    image:
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Gomoa Ekroful Youth Excel at Regional Sports Competition",
    date: "May 5, 2026",
    category: "Sports & Youth",
    tab: "news",
    excerpt:
      "Community youth athletes brought home 12 medals from the Central Region Sports Competition, showcasing the talent and determination of Gomoa Ekroful's young people.",
    image:
      "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Community Clean-Up Exercise Scheduled for May 25",
    date: "May 18, 2026",
    category: "Announcement",
    tab: "announcements",
    excerpt:
      "All community members are encouraged to participate in the monthly clean-up exercise. Bring your tools and wear appropriate work clothing.",
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 5,
    title: "Town Hall Meeting – June 2, 2026",
    date: "May 15, 2026",
    category: "Announcement",
    tab: "announcements",
    excerpt:
      "The community chairman invites all residents to the June town hall meeting at the Ekroful Palace Forecourt to discuss development progress.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=500&fit=crop&auto=format",
  },
  {
    id: 6,
    title: "Annual Dues Collection – Important Notice",
    date: "June 1, 2026",
    category: "Notice",
    tab: "notices",
    excerpt:
      "Annual community dues collection begins June 10. All registered members are required to pay to maintain their membership status.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&auto=format",
  },
];

export const services = [
  {
    icon: UserRound,
    title: "Member Registration",
    description: "Register and become an official member of the Gomoa Ekroful community.",
    link: "/member-registration",
    color: "bg-forest",
  },
  {
    icon: Building2,
    title: "Business Registration",
    description: "Register your business with the community for official recognition and support.",
    link: "/business-registration",
    color: "bg-forest",
  },
  {
    icon: FileText,
    title: "Community Documents",
    description: "Request official community letters, certificates, and other documents.",
    link: "/documents",
    color: "bg-forest",
  },
  {
    icon: TriangleAlert,
    title: "Report an Issue",
    description: "Report community problems such as broken infrastructure, safety concerns, and more.",
    link: "/report-issue",
    color: "bg-forest",
  },
  {
    icon: Construction,
    title: "Project Request",
    description: "Submit a request for a community development project in your area.",
    link: "/services",
    color: "bg-forest",
  },
  {
    icon: HandHeart,
    title: "Community Support",
    description: "Request community support for personal emergencies and welfare needs.",
    link: "/services",
    color: "bg-forest",
  },
  {
    icon: Mail,
    title: "Contact Leadership",
    description: "Get in touch with your community leaders and assembly representatives.",
    link: "/contact",
    color: "bg-forest",
  },
  {
    icon: CalendarDays,
    title: "Events Registration",
    description: "Register for upcoming community events, festivals, and activities.",
    link: "/events",
    color: "bg-forest",
  },
];

export const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1568025848823-86404cd04ad1?w=600&h=400&fit=crop&auto=format",
    title: "Gomoa Ekroful Aerial View",
    category: "Community",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1670159269224-7b66ca9387f7?w=600&h=800&fit=crop&auto=format",
    title: "Cultural Festival",
    category: "Culture",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?w=600&h=400&fit=crop&auto=format",
    title: "Road Construction Project",
    category: "Development",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop&auto=format",
    title: "Town Hall Meeting",
    category: "Events",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1779950657706-a40aefeedabb?w=600&h=800&fit=crop&auto=format",
    title: "Traditional Leadership",
    category: "Leadership",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=600&h=400&fit=crop&auto=format",
    title: "School Children",
    category: "Community",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1785355805907-b95663dfb621?w=600&h=400&fit=crop&auto=format",
    title: "Women at Festival",
    category: "Culture",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1636783187659-3804c75da971?w=600&h=400&fit=crop&auto=format",
    title: "Community Overview",
    category: "Community",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=800&fit=crop&auto=format",
    title: "Community Library",
    category: "Development",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1785355805900-33b8297e8cbe?w=600&h=400&fit=crop&auto=format",
    title: "Traditional Dance",
    category: "Culture",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1766407354000-54a7129f7140?w=600&h=400&fit=crop&auto=format",
    title: "Community Health Outreach",
    category: "Events",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop&auto=format",
    title: "Health Centre",
    category: "Development",
  },
];
