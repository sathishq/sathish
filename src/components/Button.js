import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.8rem;
    background-color: ${(props) =>
      props.outline ? "transparent" : "var(--gray-1)"};
    padding: 0.7em 1.5em;
    border-radius: 8px;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? "var(--gray-1)" : "black")};
    transition: 1s ease;

    &:hover {
      background-color: ${(props) =>
        props.outline ? "var(--gray-1)" : "transparent"};
      color: ${(props) => (props.outline ? "black" : "var(--gray-1)")};
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.4rem;
    }
  }
`;

export default function Button({
  btnLink = "/",
  btnText = "Click Me",
  outline = false,
}) {
  return (
    <ButtonStyle outline={outline}>
      <Link to={btnLink} className="button">
        {btnText}
      </Link>
    </ButtonStyle>
  );
}
