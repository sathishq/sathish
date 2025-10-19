import React from "react";
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import ExpList from "../assets/data/experience";
import VolList from "../assets/data/volunteer";

const ExpStyles = styled.div`
  padding-top: 10rem;
  min-height: 100vh;

  .section__title {
    padding: 5rem 0;
  }

  .timeline__container {
    width: 100%;
    display: flex;
    padding: 5rem 0;

    .timeline {
      height: auto;
      margin: 0 auto;
      position: relative;

      ul {
        list-style: none;

        li {
          color: var(--white);
          background-color: var(--deep-dark);
          padding: 30px;
          border-radius: 10px;
          margin-bottom: 20px;

          &:last-child {
            margin-bottom: 0;
          }

          .timeline__content {
            .period {
              font-size: 13px;
              font-weight: 300;
              margin-bottom: 10px;
              letter-spacing: 2px;
            }

            .position {
              font-size: 25px;
              font-weight: 500;
              line-height: 30px;
              margin-bottom: 10px;
            }
            .compName {
              margin-bottom: 2rem;
              letter-spacing: 2px;
              font-size: 12px;
            }
            p {
              font-size: 16px;
              line-height: 30px;
              font-weight: 300;
            }
          }
        }
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .timeline {
      &::before {
        content: "";
        position: absolute;
        height: 100%;
        width: 2px;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--gray-1);
      }

      ul {
        li {
          width: 50%;
          margin-bottom: 50px;
          position: relative;

          &:nth-child(odd) {
            float: left;
            clear: right;
            transform: translateX(-30px);
            border-radius: 20px 0 20px 20px;

            &::after {
              right: -30px;
              transform: translate(50%, -50%);
            }
          }

          &:nth-child(even) {
            float: right;
            clear: left;
            transform: translateX(30px);
            border-radius: 0 20px 20px 20px;

            &::after {
              left: -30px;
              transform: translate(-50%, -50%);
            }
          }

          &::after {
            content: "";
            position: absolute;
            height: 20px;
            width: 20px;
            background-color: var(--gray-1);
            border-radius: 50%;
            top: 0;
          }

          &:hover:after {
            background-color: var(--deep-dark);
            border-style: solid;
            border-color: var(--gray-1);
          }

          .timeline__content {
            .period {
              top: -30px;
              position: absolute;
            }
          }
        }
      }
    }
  }
`;
export default function Experience() {
  return (
    <ExpStyles>
      <div className="section__title">
        <SectionTitle
          heading="EXPERIENCE"
          subheading="places I have worked at"
        />
      </div>
      <div className="container">
        <div className="timeline__container">
          <div className="timeline">
            <ul>
              {ExpList.map((exp) => (
                <li>
                  <div className="timeline__content">
                    <h2 className="period">{exp.duration}</h2>
                    <h1 className="position">{exp.position}</h1>
                    <h2 className="compName">{exp.name}</h2>
                    <p>{exp.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section__title">
          <SectionTitle
            heading="VOLUNTEER ROLES"
            subheading="positions I have volunteered"
          />
        </div>
        <div className="timeline__container">
          <div className="timeline">
            <ul>
              {VolList.map((vol) => (
                <li>
                  <div className="timeline__content">
                    <h2 className="period">{vol.duration}</h2>
                    <h1 className="position">{vol.position}</h1>
                    <h2 className="compName">{vol.name}</h2>
                    <p>{vol.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ExpStyles>
  );
}
