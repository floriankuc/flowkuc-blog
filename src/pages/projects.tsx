/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { ReactElement } from "react";
import Loading from "../components/Loading";
import Project from "../components/Project";
import { FOOTERLINKS } from "../content/links";
import { ProjectType, useProjectsApi } from "../hooks/useProjectsApi";

const Projects = (): ReactElement => {
  const { value: projects, isSuccess, isLoading } = useProjectsApi();

  const renderProjects = (projects: ProjectType[]): ReactElement[] => {
    console.log("projects", projects);
    return projects.map(
      ({ name, id, description, topics, html_url, homepage }) => (
        <Project
          key={id}
          name={name}
          description={description}
          topics={topics}
          gh_url={html_url}
          web_url={homepage}
        />
      )
    );
  };

  if (isSuccess && projects.length) {
    return (
      <div
        css={css`
          display: grid;
          grid-template-columns: 100%;
          gap: 52px;
        `}
      >
        <p>
          These are side projects I have worked on outside work, sourced from my{" "}
          <a href={FOOTERLINKS.find(l => l.title === "Github")?.to}>
            Github profile
          </a>
          . They are generally work in progress. Some on the verge of
          completion, others I may have abandoned entirely in the light of
          something more captivating. 😇
        </p>
        {renderProjects(projects)}
      </div>
    );
  } else if (isLoading) {
    return <Loading />;
  } else if (isSuccess && !projects.length) {
    return <p>All my repos are currently private.</p>;
  } else {
    return <p>Uh oh. Something went wrong.</p>;
  }
};

export default Projects;
