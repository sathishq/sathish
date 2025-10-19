import React from "react";
import styled from "styled-components";
import PText from "./PText";

const AboutItemsStyles = styled.div`
  margin-bottom: 8rem;

  .heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
    text-transform: uppercase;
  }
  .entries {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    .title {
      font-size: 2.4rem;
    }
    .items {
      display: flex;
      gap: 1.5rem;
      margin-left: 3rem;
      .item {
        background-color: var(--deep-dark);
        padding: 0.5rem 1rem;
        border-radius: 8px;

        p {
          font-size: 1.6rem;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .heading {
      font-size: 3rem;
    }
    .entries {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      .items {
        position: initial;
        gap: 1rem;
        margin-left: 0;
      }
      .title {
        font-size: 2rem;
      }
    }
  }
`;
export default function AboutItems({
  heading = "Heading",
  entries = {
    title: "Title",
    items: ["HTML", "CSS"],
  },
}) {
  return (
    <AboutItemsStyles>
      <h1 className="heading">{heading}</h1>
      {entries.map((entry, idx) => (
        <div className="entries" key={idx}>
          <h1 className="title">{entry.title}</h1>
          <div className="items">
            {entry.items.map((item, index) => (
              <div className="item" key={index}>
                <PText>{item}</PText>
              </div>
            ))}
          </div>
        </div>
      ))}
    </AboutItemsStyles>
  );
}
