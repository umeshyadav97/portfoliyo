import React from "react";
import Head from "next/head";
import { Box, Container } from "@mui/material";
import OtherProjects from "../../components/projects/OtherProjects";
import ProjectCTA from "../../components/projects/ProjectCTA";
import ProjectDetails from "../../components/projects/ProjectDetails";
import ProjectHero from "../../components/projects/ProjectHero";
import ProjectSidebar from "../../components/projects/ProjectSidebar";
import ProjectTechStack from "../../components/projects/ProjectTechStack";
import { projects } from "../../components/projects/projectData";
import { projectTheme } from "../../components/projects/projectTheme";

function Projects({ initialProjectId }) {
  const selectedId = initialProjectId || projects[0].id;
  const selectedProject = React.useMemo(
    () => projects.find((project) => project.id === selectedId) || projects[0],
    [selectedId],
  );

  const otherProjects = React.useMemo(
    () => projects.filter((project) => project.id !== selectedProject.id),
    [selectedProject.id],
  );

  const handleSelectProject = React.useCallback(
    (projectId) => {
      if (projectId !== selectedId) {
        window.location.assign(`/projects?project=${encodeURIComponent(projectId)}`);
      }
    },
    [selectedId],
  );

  return (
    <React.Fragment>
      <Head>
        <title>Projects | Umesh Yadav</title>
      </Head>

      <Box
        sx={{
          bgcolor: "#FFFFFF",
          color: projectTheme.ink,
          minHeight: "100vh",
          pb: { xs: 6, md: 10 },
        }}
      >
        <Container
          maxWidth="xl"
          className="page-animate"
          sx={{ pt: { xs: 5, md: 7 } }}
        >
          <ProjectHero />

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "292px 1fr" },
              border: `1px solid ${projectTheme.border}`,
              borderRadius: 2.5,
              overflow: "hidden",
              bgcolor: "#fff",
              boxShadow: "0 22px 70px rgba(35, 24, 92, 0.08)",
            }}
          >
            <ProjectSidebar
              projects={projects}
              selectedId={selectedProject.id}
              onSelect={handleSelectProject}
            />
            <ProjectDetails project={selectedProject} />
          </Box>

          <ProjectTechStack project={selectedProject} />
          <OtherProjects
            projects={otherProjects}
            onSelect={handleSelectProject}
          />
          <ProjectCTA />
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Projects;

export function getServerSideProps(context) {
  const projectId = context.query.project;
  const initialProjectId =
    typeof projectId === "string" && projects.some((project) => project.id === projectId)
      ? projectId
      : projects[0].id;

  return {
    props: {
      initialProjectId,
    },
  };
}
