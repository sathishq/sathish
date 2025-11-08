import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import projectList from "../assets/data/projects";

const ProjectStyles = styled.div`
  padding-top: 12rem;
  min-height: 100vh;
  color: #f1f5f9;

  .section-group {
    margin-bottom: 6rem;
    text-align: center;
  }

  .category-title {
    font-size: 6rem;
    font-weight: 800;
    color: var(--white);
    letter-spacing: 2px;
    margin-bottom: 4rem;
    text-align: center;
    text-transform: uppercase;
  }

  .projects-grid {
    width: min(100%, 1100px);
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    gap: 40px;
    padding: 2rem 1rem;
  }

  .project-card {
    background: #1e293b;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .project-image img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  .project-content {
    padding: 20px;
    text-align: left;
  }

  .project-content h3 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #e2e8f0;
    margin-bottom: 10px;
  }

  .project-tech {
    color: #94a3b8;
    font-size: 1rem;
    margin-bottom: 12px;
  }

  .project-desc {
    color: #cbd5e1;
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 16px;
  }

  .tag {
    background: #334155;
    color: #38bdf8;
    padding: 4px 10px;
    border-radius: 999px;
    font-size: 0.85rem;
  }

  .view-btn {
    padding: 10px 20px;
    background: #22d3ee;
    color: #0f172a;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .view-btn:hover {
    background: #67e8f9;
  }

  @media (max-width: 768px) {
    .category-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Projects() {

  const grouped = projectList.reduce((acc, p) => {
    (acc[p.category] = acc[p.category] || []).push(p);
    return acc;
  }, {});



  const getCategoryTitle = (category) => {
    switch (category) {
      case "iOS":
        return "iOS APPS";
      case "Android":
        return "ANDROID APPS";
      default:
        return "WEBSITES";
    }
  };

  return (
    <ProjectStyles>
      <SectionTitle heading="SOME OF MY WORKS" subheading="" />

      {Object.entries(grouped).map(([category, projects]) => (
        <div className="section-group" key={category}>
          <h2 className="category-title">{getCategoryTitle(category)}</h2>

          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project-card" key={p.id}>
                <div className="project-image">
                  <img src={p.img} alt={p.name} />
                </div>

                <div className="project-content">
                  <h3>{p.name}</h3>
                  <p className="project-tech">{p.tech.join(", ")}</p>
                  <p className="project-desc">{p.desc}</p>

                  {p.liveLink && (
                    <button
                      className="view-btn"
                      onClick={() => window.open(p.liveLink, "_blank")}
                    >
                      View App
                    </button>
                  )}
                  {p.githubLink && (
                    <button
                      className="view-btn"
                      style={{ marginLeft: "10px" }}
                      onClick={() => window.open(p.githubLink, "_blank")}
                    >
                      View App
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </ProjectStyles>
  );
}
