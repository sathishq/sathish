import React from "react";
import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = styled.section`
  background: #f9fafb;
  padding: 80px 0;

  .container {
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-header {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-header h2 {
    font-size: 2.2rem;
    color: #111;
    font-weight: 700;
    margin-bottom: 10px;
  }

  .section-header p {
    color: #666;
    font-size: 1rem;
  }

  .project-card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 18px;
    padding: 30px;
    margin-bottom: 40px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
  }

  .project-header {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .project-image {
    width: 160px;
    height: 100px;
    overflow: hidden;
    border-radius: 10px;
    flex-shrink: 0;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-title h3 {
    font-size: 1.6rem;
    color: #111;
    font-weight: 700;
  }

  .project-content p {
    color: #444;
    font-size: 1rem;
    line-height: 1.8;
    margin-bottom: 15px;
  }

  .details {
    background: #f3f4f6;
    padding: 15px;
    border-radius: 10px;
    font-size: 0.95rem;
    color: #333;
    margin-bottom: 15px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
  }

  .tag {
    background: #e0f2fe;
    color: #0369a1;
    padding: 6px 14px;
    border-radius: 999px;
    font-weight: 500;
    font-size: 0.9rem;
  }

  .links {
    display: flex;
    gap: 15px;
  }

  .links a {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    text-decoration: none;
    font-weight: 600;
    color: #2563eb;
    background: #eef2ff;
    padding: 10px 18px;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .links a:hover {
    background: #dbeafe;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .project-header {
      flex-direction: column;
      align-items: flex-start;
    }

    .project-image {
      width: 100%;
      height: auto;
    }

    .project-title h3 {
      font-size: 1.4rem;
    }
  }
`;

export default function Projects({ projects }) {
  return (
    <ProjectsSection>
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Detailed overview of some projects I’ve worked on.</p>
        </div>

        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              {project.img && (
                <div className="project-image">
                  <img src={project.img} alt={project.name} loading="lazy" />
                </div>
              )}
              <div className="project-title">
                <h3>{project.name}</h3>
              </div>
            </div>

            <div className="project-content">
              <p>{project.desc}</p>

              {project.details && (
                <div className="details">
                  <strong>Key Features:</strong> {project.details}
                </div>
              )}

              {project.tags && (
                <div className="tags">
                  {project.tags.map((tag, i) => (
                    <span className="tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </ProjectsSection>
  );
}
