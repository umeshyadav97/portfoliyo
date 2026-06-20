import React from "react";
import Head from "next/head";
import { Box, Button, Chip, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";
import ReactImage from "../../assets/images/icons/react.svg";
import Next from "../../assets/images/icons/next.svg";
import JS from "../../assets/images/icons/js.svg";
import Tailwind from "../../assets/images/icons/tailwind.svg";
import Github from "../../assets/images/icons/github.svg";
import ProfileImage from "../../assets/images/backgrounds/profile-1.png";
import StropeAI from "../../assets/images/backgrounds/strope.jpg";
import Customer from "../../assets/images/backgrounds/customer.jpg";
import Simplee from "../../assets/images/backgrounds/simplee.jpg";
import Seller from "../../assets/images/backgrounds/seller.jpg";

const purple = "#5B2EFF";
const ink = "#080B16";
const body = "#42506B";

const stats = [
  { icon: CalendarMonthOutlinedIcon, value: "4.5+", label: "Years Experience" },
  { icon: BusinessCenterOutlinedIcon, value: "15+", label: "Projects Delivered" },
  { icon: GroupsOutlinedIcon, value: "1000+", label: "Customers Served" },
  { icon: PublicOutlinedIcon, value: "3", label: "Countries Worked" },
];

const featuredProjects = [
  {
    title: "Ragazza Fashion",
    image: Customer,
    desc: "Multi-brand e-commerce platform with modern UI and seamless shopping experience.",
    tags: ["Next.js", "TypeScript", "Openpay"],
    result: "1000+ Customers",
  },
  {
    title: "Strope AI",
    image: StropeAI,
    desc: "AI-powered project estimation platform for accurate cost and timeline predictions.",
    tags: ["Next.js", "OpenAI", "TailwindCSS"],
    result: "AI Automation",
  },
  {
    title: "Sharkdom",
    image: Simplee,
    desc: "Partner ecosystem and business management SaaS platform with performance optimizations.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    result: "Improved Performance",
  },
  {
    title: "Gomble",
    image: Seller,
    desc: "Food delivery mobile app built with React Native for iOS and Android platforms.",
    tags: ["React Native", "Redux", "Firebase"],
    result: "Mobile App",
  },
];

const techStack = [
  { name: "React", icon: ReactImage },
  { name: "Next.js", icon: Next },
  { name: "TypeScript", text: "TS", color: "#3178C6" },
  { name: "React Native", icon: ReactImage },
  { name: "Redux", text: "R", color: "#764ABC" },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "OpenAI", text: "AI", color: "#10A37F" },
  { name: "Firebase", text: "F", color: "#FFCA28" },
  { name: "Git & GitHub", icon: Github },
];

const services = [
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

function MiniChart({ tone = "purple" }) {
  return (
    <Box sx={{ display: "flex", gap: 0.5, alignItems: "end", height: 30, mt: 1 }}>
      {[9, 13, 12, 18, 15, 24, 10].map((height, index) => (
        <Box
          key={index}
          sx={{
            width: 18,
            height,
            borderRadius: 999,
            bgcolor: tone === "purple" ? "rgba(91, 46, 255, 0.32)" : "rgba(44, 197, 224, 0.34)",
          }}
        />
      ))}
    </Box>
  );
}

function SectionHeader({ title, action }) {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      sx={{ mb: 2.5 }}
    >
      <Typography sx={{ color: ink, fontSize: { xs: 22, md: 28 }, fontWeight: 800 }}>
        {title}
      </Typography>
      {action && (
        <Button href={action.href} endIcon={<ArrowForwardIcon />} sx={{ color: purple, fontWeight: 700 }}>
          {action.label}
        </Button>
      )}
    </Stack>
  );
}

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Umesh Yadav | Frontend Engineer</title>
      </Head>

      <Box sx={{ bgcolor: "#FFFFFF", color: ink, minHeight: "100vh", pb: { xs: 6, md: 10 } }}>
        <Container maxWidth="xl" className="page-animate" sx={{ pt: { xs: 6, md: 8 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "0.92fr 1.08fr" },
              gap: { xs: 6, lg: 8 },
              alignItems: "center",
            }}
          >
            <Stack spacing={3} className="page-animate stagger-1">
              <Chip
                icon={<CodeOutlinedIcon sx={{ color: `${purple} !important` }} />}
                label="Frontend Engineer"
                sx={{
                  width: "fit-content",
                  borderRadius: 2,
                  bgcolor: "rgba(91, 46, 255, 0.1)",
                  color: purple,
                  fontWeight: 800,
                  px: 1,
                }}
              />

              <Typography
                component="h1"
                sx={{
                  maxWidth: 650,
                  color: ink,
                  fontSize: { xs: 42, sm: 58, lg: 68 },
                  lineHeight: 1.08,
                  fontWeight: 900,
                }}
              >
                Building scalable{" "}
                <Box component="span" sx={{ color: purple }}>
                  e-commerce, SaaS &
                </Box>{" "}
                AI products that users love.
              </Typography>

              <Typography
                sx={{
                  maxWidth: 620,
                  color: body,
                  fontSize: { xs: 16, sm: 18 },
                  lineHeight: 1.75,
                }}
              >
                4.5+ years of experience building high-performance web and mobile
                applications with React, Next.js and modern technologies. I help
                businesses build products that scale and create impact.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                <Button
                  href="/projects"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    bgcolor: purple,
                    borderRadius: 2,
                    px: 3,
                    py: 1.35,
                    fontWeight: 800,
                    boxShadow: "0 16px 34px rgba(91, 46, 255, 0.28)",
                    "&:hover": { bgcolor: "#4A20E8" },
                  }}
                >
                  View My Projects
                </Button>
                <Button
                  href="/contact"
                  variant="outlined"
                  startIcon={<MailOutlineIcon />}
                  sx={{
                    borderColor: purple,
                    color: purple,
                    borderRadius: 2,
                    px: 3,
                    py: 1.35,
                    fontWeight: 800,
                    "&:hover": { borderColor: "#4A20E8", bgcolor: "rgba(91, 46, 255, 0.06)" },
                  }}
                >
                  Contact Me
                </Button>
              </Stack>
            </Stack>

            <Box
              className="page-animate stagger-2"
              sx={{
                position: "relative",
                minHeight: { xs: 420, sm: 520, lg: 560 },
                display: { xs: "block", md: "grid" },
                placeItems: "center",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  inset: "8% 10% 0",
                  borderRadius: "50%",
                  background:
                    "repeating-radial-gradient(circle, rgba(91,46,255,.16) 0 1px, transparent 1px 28px)",
                  opacity: 0.75,
                },
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: "100%", md: "78%" },
                  ml: { lg: 4 },
                  borderRadius: 3,
                  bgcolor: "#fff",
                  boxShadow: "0 38px 90px rgba(35, 24, 92, 0.2)",
                  border: "1px solid #E8EAF3",
                  overflow: "hidden",
                }}
              >
                <Box sx={{ height: 34, display: "flex", alignItems: "center", px: 2, gap: 0.8 }}>
                  {["#FF6B6B", "#FFB84D", "#31C48D"].map((color) => (
                    <Box key={color} sx={{ width: 9, height: 9, borderRadius: "50%", bgcolor: color }} />
                  ))}
                </Box>
                <Box sx={{ position: "relative", aspectRatio: "16 / 9" }}>
                  <Image src={Customer} alt="E-commerce website preview" fill priority style={{ objectFit: "cover" }} />
                </Box>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  right: { xs: 8, sm: 20, lg: 4 },
                  bottom: { xs: 8, sm: 30, lg: 34 },
                  width: { xs: 118, sm: 150 },
                  border: "7px solid #15151D",
                  borderRadius: 5,
                  overflow: "hidden",
                  bgcolor: "#fff",
                  boxShadow: "0 20px 45px rgba(8, 11, 22, 0.22)",
                }}
              >
                <Box sx={{ position: "relative", aspectRatio: "9 / 16" }}>
                  <Image src={Seller} alt="Mobile app preview" fill style={{ objectFit: "cover" }} />
                </Box>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  right: { xs: 20, md: 34, lg: 42 },
                  top: { xs: 4, sm: 26 },
                  width: { xs: 176, sm: 210 },
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "#fff",
                  border: "1px solid #E8EAF3",
                  boxShadow: "0 24px 58px rgba(35, 24, 92, 0.14)",
                }}
              >
                <Typography sx={{ fontWeight: 900, fontSize: 15, color: ink }}>
                  <Box component="span" sx={{ color: purple, mr: 1 }}>S</Box>
                  Strope AI
                </Typography>
                <Typography sx={{ color: body, fontSize: 13, lineHeight: 1.5, mt: 0.6 }}>
                  AI-Powered Project Estimation Platform
                </Typography>
                <MiniChart />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  left: { xs: 6, sm: 18, lg: 52 },
                  bottom: { xs: 66, sm: 82, lg: 96 },
                  width: { xs: 180, sm: 220 },
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "#fff",
                  border: "1px solid #E8EAF3",
                  boxShadow: "0 24px 58px rgba(35, 24, 92, 0.14)",
                }}
              >
                <Typography sx={{ fontWeight: 900, fontSize: 15, color: ink }}>
                  <Box component="span" sx={{ color: "#2F80ED", mr: 1 }}>$</Box>
                  Sharkdom
                </Typography>
                <Typography sx={{ color: body, fontSize: 13, lineHeight: 1.5, mt: 0.6 }}>
                  Partner Ecosystem & Business Management
                </Typography>
                <MiniChart tone="blue" />
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              mt: { xs: 5, md: 8 },
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
              bgcolor: "#fff",
              border: "1px solid #E8EAF3",
              borderRadius: 2,
              boxShadow: "0 26px 70px rgba(35, 24, 92, 0.1)",
            }}
          >
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <Stack
                  key={item.label}
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{
                    p: { xs: 2.5, md: 3.5 },
                    borderRight: { lg: index !== stats.length - 1 ? "1px solid #E8EAF3" : "none" },
                    borderBottom: { xs: index < 3 ? "1px solid #E8EAF3" : "none", sm: "none" },
                  }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "50%",
                      bgcolor: "rgba(91, 46, 255, 0.08)",
                      color: purple,
                    }}
                  >
                    <Icon />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: 24, fontWeight: 900 }}>{item.value}</Typography>
                    <Typography sx={{ color: body }}>{item.label}</Typography>
                  </Box>
                </Stack>
              );
            })}
          </Box>

          <Stack alignItems="center" spacing={3} sx={{ py: { xs: 5, md: 7 } }}>
            <Typography sx={{ color: ink, fontSize: 18 }}>Trusted by innovative companies</Typography>
            <Stack direction="row" spacing={{ xs: 3, sm: 6 }} flexWrap="wrap" useFlexGap justifyContent="center">
              <Typography sx={{ fontSize: 20, fontWeight: 900 }}>
                <Box component="span" sx={{ color: "#FF6A00", mr: 1 }}>N</Box>
                NICKELFOX
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 900, letterSpacing: 3 }}>
                <Box component="span" sx={{ color: "#38CBD0", mr: 1 }}>◇</Box>
                MARTISAN
              </Typography>
              <Typography sx={{ fontSize: 20, color: purple, display: "flex", alignItems: "center", gap: 1 }}>
                <Box sx={{ width: 34, height: 34, borderRadius: "50%", bgcolor: purple, color: "#fff", display: "grid", placeItems: "center", fontWeight: 900 }}>
                  S
                </Box>
                Strope AI
              </Typography>
            </Stack>
          </Stack>

          <Box component="section" sx={{ mb: { xs: 5, md: 7 } }}>
            <SectionHeader title="Featured Projects" action={{ label: "View all projects", href: "/projects" }} />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" },
                gap: 3,
              }}
            >
              {featuredProjects.map((project) => (
                <Box
                  key={project.title}
                  sx={{
                    border: "1px solid #E8EAF3",
                    borderRadius: 2,
                    overflow: "hidden",
                    bgcolor: "#fff",
                    boxShadow: "0 18px 45px rgba(35, 24, 92, 0.08)",
                    transition: "transform 220ms ease, box-shadow 220ms ease",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 28px 65px rgba(35, 24, 92, 0.14)",
                    },
                  }}
                >
                  <Box sx={{ position: "relative", aspectRatio: "16 / 10", m: 1, borderRadius: 1.5, overflow: "hidden" }}>
                    <Image src={project.image} alt={`${project.title} preview`} fill style={{ objectFit: "cover" }} />
                  </Box>
                  <Stack spacing={1.5} sx={{ p: 2 }}>
                    <Typography sx={{ fontSize: 18, fontWeight: 900 }}>{project.title}</Typography>
                    <Typography sx={{ color: body, fontSize: 14, lineHeight: 1.65 }}>{project.desc}</Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                      {project.tags.map((tag) => (
                        <Box key={tag} sx={{ px: 1.1, py: 0.45, border: "1px solid #DDE1EA", borderRadius: 1, fontSize: 12 }}>
                          {tag}
                        </Box>
                      ))}
                    </Stack>
                    <Typography sx={{ color: purple, fontWeight: 800, display: "flex", alignItems: "center", gap: 0.8 }}>
                      <WorkspacesOutlinedIcon fontSize="small" />
                      {project.result}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Box>

          <Box component="section" sx={{ mb: { xs: 5, md: 7 } }}>
            <SectionHeader title="Tech Stack" action={{ label: "View all skills", href: "/about" }} />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(3, 1fr)", md: "repeat(5, 1fr)", lg: "repeat(9, 1fr)" },
                border: "1px solid #E8EAF3",
                borderRadius: 2,
                bgcolor: "#fff",
                overflow: "hidden",
              }}
            >
              {techStack.map((tech) => (
                <Stack
                  key={tech.name}
                  spacing={1.25}
                  alignItems="center"
                  sx={{
                    minHeight: 102,
                    justifyContent: "center",
                    borderRight: "1px solid #EEF1F7",
                    borderBottom: { xs: "1px solid #EEF1F7", lg: "none" },
                    transition: "background 180ms ease, transform 180ms ease",
                    "&:hover": { bgcolor: "rgba(91, 46, 255, 0.04)", transform: "translateY(-3px)" },
                  }}
                >
                  {tech.icon ? (
                    <Image src={tech.icon} width={34} height={34} alt={tech.name} />
                  ) : (
                    <Box sx={{ width: 34, height: 34, borderRadius: 1, bgcolor: tech.color, color: "#fff", display: "grid", placeItems: "center", fontWeight: 900 }}>
                      {tech.text}
                    </Box>
                  )}
                  <Typography sx={{ fontSize: 13, fontWeight: 800, textAlign: "center" }}>{tech.name}</Typography>
                </Stack>
              ))}
            </Box>
          </Box>

          <Box
            component="section"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1.9fr 0.9fr" },
              gap: { xs: 4, lg: 7 },
              alignItems: "start",
            }}
          >
            <Box>
              <Typography sx={{ color: ink, fontSize: { xs: 24, md: 30 }, fontWeight: 900, mb: 1.5 }}>
                What I Do
              </Typography>
              <Typography sx={{ color: body, maxWidth: 620, lineHeight: 1.7, mb: 4 }}>
                I build end-to-end solutions with a focus on performance, scalability
                and great user experience.
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                  gap: 3,
                }}
              >
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Stack key={service.title} direction="row" spacing={2.2} alignItems="flex-start">
                      <Box sx={{ width: 46, height: 46, borderRadius: 2, bgcolor: "rgba(91, 46, 255, 0.08)", color: purple, display: "grid", placeItems: "center", flex: "0 0 auto" }}>
                        <Icon />
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 900, mb: 0.6 }}>{service.title}</Typography>
                        <Typography sx={{ color: body, lineHeight: 1.6, fontSize: 13.5 }}>{service.desc}</Typography>
                      </Box>
                    </Stack>
                  );
                })}
              </Box>
            </Box>

            <Box
              sx={{
                borderRadius: 3,
                p: { xs: 3, sm: 4 },
                bgcolor: "linear-gradient(135deg, #F7F3FF, #FFFFFF)",
                background: "linear-gradient(135deg, #F8F4FF 0%, #FFFFFF 100%)",
                border: "1px solid #ECE6FF",
                boxShadow: "0 24px 64px rgba(35, 24, 92, 0.1)",
              }}
            >
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
                <Box sx={{ position: "relative", width: 92, height: 92, borderRadius: "50%", overflow: "hidden", bgcolor: "#EEF1F7" }}>
                  <Image src={ProfileImage} alt="Umesh Yadav" fill style={{ objectFit: "cover" }} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: 20, fontWeight: 900 }}>Hi, I&apos;m Umesh Yadav</Typography>
                  <Typography sx={{ color: purple, fontWeight: 800, mt: 0.5 }}>Frontend Developer</Typography>
                </Box>
              </Stack>
              <Stack spacing={2.2}>
                <Typography sx={{ color: body, display: "flex", alignItems: "center", gap: 1.5 }}>
                  <LocationOnOutlinedIcon sx={{ color: purple }} fontSize="small" />
                  Varanasi, India
                </Typography>
                <Typography sx={{ color: body, display: "flex", alignItems: "center", gap: 1.5, overflowWrap: "anywhere" }}>
                  <MailOutlineIcon sx={{ color: purple }} fontSize="small" />
                  umeshyadavdev@gmail.com
                </Typography>
                <Typography sx={{ color: ink, pt: 1 }}>Let&apos;s build something amazing together!</Typography>
                <Stack direction="row" spacing={1.5}>
                  <Button href="https://www.linkedin.com/in/umeshyadav97" target="_blank" aria-label="LinkedIn" sx={{ minWidth: 0, width: 38, height: 38, bgcolor: "#0A66C2", color: "#fff", borderRadius: 1.2, "&:hover": { bgcolor: "#07549F" } }}>
                    <LinkedInIcon />
                  </Button>
                  <Button href="https://github.com/umeshyadav97" target="_blank" aria-label="GitHub" sx={{ minWidth: 0, width: 38, height: 38, bgcolor: "#080B16", color: "#fff", borderRadius: 1.2, "&:hover": { bgcolor: "#22283A" } }}>
                    <GitHubIcon />
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Home;
