import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const ProjectCardStyles = styled.div`
  .card {
    margin: 20px;
    width: 350px;
    height: 250px;
    border-style: solid;
    border-radius: 5px;
    border-width: 1px;
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);
    overflow: hidden;
  }

  .card-image {
    position: relative;
    height: 250px;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-details {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 20px;
    transition: all 0.5s ease-in-out;
    transform: translateY(100%);
  }

  .card:hover .card-details {
    transform: translateY(0);
  }

  .card-details h3 {
    margin: 0 0 10px 0;
    font-size: 20px;
  }

  .card-details p {
    margin: 0 0 20px 0;
    font-size: 14px;
    line-height: 1.5;
  }

  @media only screen and (max-width: 768px) {
    .card {
      width: 100%;
    }
  }
`;
export default function ProjectCard({ project }) {
  return (
    <ProjectCardStyles>
      <div className="card">
        <div className="card-image">
          <img
            src={project.img}
            loading="lazy"
            alt={"project " + project.name}
          />
          <div className="card-details">
            <div className="flex gap-6">
              <h3>{project.name}</h3>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="bg-black h-12 w-fit p-2 rounded-full hover:scale-150 transition ease-in-out delay-150 cursor-pointer" />
              </a>
            </div>
            <p>{project.desc}</p>
          </div>
        </div>
      </div>
    </ProjectCardStyles>
  );
}
