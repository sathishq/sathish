
import React, { useState } from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import projectList from "../assets/data/projects";
import { useNavigate } from "react-router-dom";


const ProjectStyles = styled.div`
  padding-top: 10rem;
  min-height: 100vh;

  .carousel {
    width: min(100%, 1100px);
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 20px;
  }

  .carousel__viewport {
    position: relative;
    perspective: 1200px;
    padding: 20px 0 48px;
    outline: none;
  }

  .carousel__track {
    position: relative;
    height: 400px;
    transform-style: preserve-3d;
    display: grid;
    place-items: center;
  }

  .card {
    position: absolute;
    width: 300px;
    height: 360px;
    border-radius: 16px;
    background: #111827;
    border: 1px solid rgba(255, 255, 255, 0.06);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4), 0 2px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transition: transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1),
      opacity 0.45s cubic-bezier(0.22, 0.61, 0.36, 1);
    cursor: pointer;
  }

  .card img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }

  .card__body {
    padding: 12px;
    color: #e5e7eb;
  }

  .card--dim {
    filter: saturate(0.8) brightness(0.9);
    opacity: 0.9;
  }

  .card--far {
    filter: saturate(0.6) brightness(0.75);
    opacity: 0.75;
  }

  .card--hidden {
    opacity: 0;
    pointer-events: none;
  }

  .controls {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    pointer-events: none;
  }

  .btn {
    pointer-events: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(17, 24, 39, 0.7);
    color: #e5e7eb;
    cursor: pointer;
    transition: background 160ms ease, transform 160ms ease;
  }

  .btn:hover {
    background: rgba(17, 24, 39, 0.9);
    transform: translateZ(0) scale(1.04);
  }

  .dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 8px;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transition: transform 160ms ease, background 160ms ease;
  }

  .dot[aria-current="true"] {
    background: #22d3ee;
    transform: scale(1.25);
  }

  .content {
    display: grid;
    gap: 6px;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    background: #111827;
    border-radius: 18px;
    width: 500px;
    margin: 0 auto;
    color: #e5e7eb;
    text-align: center;
  }

  .content.is-fading-out {
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 220ms ease, transform 220ms ease;
  }

  .content.is-fading-in {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 220ms ease, transform 220ms ease;
  }
    .card__body button {
    margin-top: 12px;
    padding: 6px 12px;
    background: #22d3ee;
    color: #111827;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: transform 0.2s ease;
  }
  .card__body button:hover {
    transform: scale(1.05);
  }

`;

const Projects = () => {
  const [projects] = useState(projectList);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const goTo = (idx) => {
    const n = Math.max(0, Math.min(idx, projects.length - 1));
    if (n === current || isAnimating) return;
    setCurrent(n);
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 380);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const viewDetails = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  return (
    <ProjectStyles>
      <SectionTitle heading="PROJECTS" subheading="some of my works" />
      <div className="carousel">
        <div
          className="carousel__viewport"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
          }}
        >
          <div className="carousel__track">
            {projects.map((project, i) => {
              const d = i - current;
              let x = 0,
                z = 0,
                ry = 0,
                s = 1,
                classes = "";
              if (d === 0) {
                x = 0;
                z = 80;
              } else if (Math.abs(d) === 1) {
                x = d < 0 ? -220 : 220;
                z = 0;
                ry = d < 0 ? 18 : -18;
                s = 0.92;
                classes = "card--dim";
              } else if (Math.abs(d) === 2) {
                x = d < 0 ? -360 : 360;
                z = -200;
                ry = d < 0 ? 32 : -32;
                s = 0.84;
                classes = "card--far";
              } else {
                x = d < 0 ? -520 : 520;
                z = -420;
                ry = d < 0 ? 32 : -32;
                s = 0.76;
                classes = "card--hidden";
              }

              return (
                <div
                  key={i}
                  className={`card ${classes}`}
                  style={{
                    transform: `translateX(${x}px) translateZ(${z}px) rotateY(${ry}deg) scale(${s})`,
                    zIndex: 1000 - Math.abs(d),
                  }}
                  onClick={() => goTo(i)}
                >
                  <img src={project.img} alt={project.name} />
                  <div className="card__body">
                    <h3>{project.name}</h3>
                    <p>{project.tech.join(", ")}</p>
                    {d === 0 && (
                      <button onClick={() => viewDetails(project)}>
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="controls">
            <button className="btn" onClick={prev}>
              &#10094;
            </button>
            <button className="btn" onClick={next}>
              &#10095;
            </button>
          </div>
        </div>

        <div className="dots">
          {projects.map((_, i) => (
            <button
              key={i}
              className="dot"
              aria-current={i === current ? "true" : "false"}
              onClick={() => goTo(i)}
            ></button>
          ))}
        </div>

        <div className="content">
          <h3>{projects[current].name}</h3>
          <p>{projects[current].tech.join(", ")}</p>
          <p>{projects[current].desc}</p>
        </div>
      </div>
    </ProjectStyles>
  );
};

export default Projects;


