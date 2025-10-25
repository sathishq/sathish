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
    align-items: flex-start;
    margin-top: 2rem;
    gap: 2rem;
    flex-wrap: nowrap;

    .title {
      font-size: 2.2rem;
      font-weight: 600;
      min-width: 260px; /* Keeps title column aligned */
      text-align: right; /* visually aligns titles */
      padding-top: 0.5rem; /* aligns baseline with first row of items */
    }

    .items {
      display: flex;
      flex-wrap: wrap; /* ✅ items will wrap under themselves, not under title */
      gap: 1rem;
      flex: 1;

      .item {
        background-color: var(--deep-dark);
        padding: 0.6rem 1.2rem;
        border-radius: 8px;
        border: 1px solid var(--gray-2);
        white-space: nowrap;
        transition: all 0.2s ease;

        p {
          font-size: 1.5rem;
          color: var(--gray-1);
        }

        &:hover {
          background-color: var(--gray-2);
          transform: translateY(-2px);
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

      .title {
        text-align: left;
        min-width: unset;
      }

      .items {
        margin-left: 0;
        gap: 1rem;
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
