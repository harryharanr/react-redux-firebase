import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects && projects.length > 0 ? (
        projects.map((project) => (
          <ProjectSummary key={project.id} project={project} />
        ))
      ) : (
        <p>No projects at the moment</p>
      )}
    </div>
  );
};

export default ProjectList;
