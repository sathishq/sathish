import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = styled.section`
  background-color: #f9fafb;
  padding: 80px 0;

  .container {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 50px;
  }

  .section-header h2 {
    font-size: 2rem;
    color: #222;
    margin-bottom: 10px;
  }

  .section-header p {
    color: #666;
    font-size: 1rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 25px;
  }

  .project-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  .project-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .project-content {
    padding: 20px;
  }

  .project-content h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #111;
  }

  .project-content p {
    color: #555;
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .project-links {
    display: flex;
    gap: 15px;
  }

  .project-links a {
    color: #333;
    font-size: 1.3rem;
    transition: color 0.3s ease, transform 0.3s ease;
  }

  .project-links a:hover {
    color: #000;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .section-header h2 {
      font-size: 1.8rem;
    }
  }
`;

export default function Projects({ projects }) {
  return (
    <ProjectsSection>
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Some of the web and mobile applications I’ve built and contributed to.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.img} alt={project.name} loading="lazy" />
              </div>
              <div className="project-content">
                <h3>{project.name}</h3>
                <p>{project.desc}</p>
                <div className="project-links">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectsSection>
  );
}
