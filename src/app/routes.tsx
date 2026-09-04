import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Leadership from "../pages/Leadership";
import LeaderProfile from "../pages/LeaderProfile";
import CommunityMembers from "../pages/CommunityMembers";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Services from "../pages/Services";
import News from "../pages/News";
import NewsArticle from "../pages/NewsArticle";
import Events from "../pages/Events";
import EventDetail from "../pages/EventDetail";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import MemberRegistration from "../pages/MemberRegistration";
import BusinessRegistration from "../pages/BusinessRegistration";
import ReportIssue from "../pages/ReportIssue";
import Documents from "../pages/Documents";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "leadership", Component: Leadership },
      { path: "leadership/:id", Component: LeaderProfile },
      { path: "community-members", Component: CommunityMembers },
      { path: "projects", Component: Projects },
      { path: "projects/:id", Component: ProjectDetail },
      { path: "services", Component: Services },
      { path: "news", Component: News },
      { path: "news/:id", Component: NewsArticle },
      { path: "events", Component: Events },
      { path: "events/:id", Component: EventDetail },
      { path: "gallery", Component: Gallery },
      { path: "contact", Component: Contact },
      { path: "member-registration", Component: MemberRegistration },
      { path: "business-registration", Component: BusinessRegistration },
      { path: "report-issue", Component: ReportIssue },
      { path: "documents", Component: Documents },
      { path: "privacy-policy", Component: PrivacyPolicy },
      { path: "terms", Component: TermsOfUse },
      { path: "*", Component: NotFound },
    ],
  },
]);
