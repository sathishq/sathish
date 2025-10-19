import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ColStyles = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  ul {
    li {
      margin-bottom: 1rem;
      a {
        font-size: 1.8rem;
        letter-spacing: 2px;
        &:hover {
          color: var(--white);
        }
      }
    }
  }
`;

export default function FooterColumns({
  heading = "col heading",
  links = [
    {
      type: "Link",
      title: "Home",
      path: "/home",
    },
    {
      type: "Link",
      title: "About",
      path: "/about",
    },
  ],
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li className="hover:scale-110 transition ease-in-out delay-150" key={index}>
            {item.type === "Link" ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrar noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}
