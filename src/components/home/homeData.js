import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ReactImage from "../../assets/images/icons/react.svg";
import Next from "../../assets/images/icons/next.svg";
import Tailwind from "../../assets/images/icons/tailwind.svg";
import Github from "../../assets/images/icons/github.svg";

export const heroStats = [
  { icon: CalendarMonthOutlinedIcon, value: "4.5+", label: "Years Experience" },
  { icon: BusinessCenterOutlinedIcon, value: "15+", label: "Projects Delivered" },
  { icon: GroupsOutlinedIcon, value: "1000+", label: "Customers Served" },
  { icon: PublicOutlinedIcon, value: "3", label: "Countries Worked" },
];

export const featuredProjects = [
  {
    title: "Ragazza Fashion",
    preview: "ragazza",
    desc: "Multi-brand e-commerce platform with modern UI and seamless shopping experience.",
    tags: ["Next.js", "TypeScript", "Openpay"],
    result: "1000+ Customers",
  },
  {
    title: "Strope AI",
    preview: "strope",
    desc: "AI-powered project estimation platform for accurate cost and timeline predictions.",
    tags: ["Next.js", "OpenAI", "TailwindCSS"],
    result: "AI Automation",
  },
  {
    title: "Sharkdom",
    preview: "sharkdom",
    desc: "Partner ecosystem and business management SaaS platform with performance optimizations.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    result: "Improved Performance",
  },
  {
    title: "Gomble",
    preview: "gomble",
    desc: "Food delivery mobile app built with React Native for iOS and Android platforms.",
    tags: ["React Native", "Redux", "Firebase"],
    result: "Mobile App",
  },
];

export const techStack = [
  { name: "React", icon: ReactImage },
  { name: "Next.js", icon: Next },
  { name: "TypeScript", text: "TS", color: "#3178C6" },
  { name: "React Native", icon: ReactImage },
  { name: "Redux", text: "R", color: "#764ABC" },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "OpenAI", text: "AI", color: "#10A37F" },
  { name: "Firebase", text: "F", color: "#FFCA28", textColor: "#080B16" },
  { name: "Git & GitHub", icon: Github },
];

export const services = [
  {
    icon: CodeOutlinedIcon,
    title: "Frontend Development",
    desc: "Building responsive, accessible and high-performance web interfaces.",
  },
  {
    icon: ShoppingCartOutlinedIcon,
    title: "E-commerce Solutions",
    desc: "Developing scalable e-commerce platforms with secure payments.",
  },
  {
    icon: AutoAwesomeOutlinedIcon,
    title: "AI Integration",
    desc: "Integrating AI capabilities to enhance user experiences.",
  },
  {
    icon: SpeedOutlinedIcon,
    title: "Performance Optimization",
    desc: "Improving speed, SEO and overall application performance.",
  },
  {
    icon: PhoneIphoneOutlinedIcon,
    title: "Mobile App Development",
    desc: "Building cross-platform mobile apps with React Native.",
  },
  {
    icon: AccountTreeOutlinedIcon,
    title: "Clean Architecture",
    desc: "Following best practices for maintainable and scalable code.",
  },
];
