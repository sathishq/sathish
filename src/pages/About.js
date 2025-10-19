import React from "react";
import PText from "../components/PText";
import styled from "styled-components";
import AboutItems from "../components/AboutItems";
import Img from "../assets/images/img.jpeg";
import DownloadCV from "../components/DownloadCV";

const AboutStyles = styled.div`
  padding: 16rem 0 10rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    .left {
      flex: 3;
      .about__subheading {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        span {
          background-color: var(--deep-dark);
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }
      }
      .about__heading {
        font-size: 3.6rem;
        margin-bottom: 3rem;
      }
      .about__info {
        margin-bottom: 5rem;
        padding-right: 5rem;
        p {
          max-width: 100%;
          font-size: 1.5rem;
        }
      }
    }
    .right {
      margin-right: 20px;
      flex: 1.5;
      img {
        border: 2px solid var(--gray-1);
      }
    }
  }

  .about__info__items {
    margin-top: 15rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 10rem, 2rem;
    .top-section {
      flex-direction: column;
      gap: 7rem;
      .left {
        flex: 3;
        .about__subheading {
          font-size: 1.8rem;
        }
        .about__heading {
          font-size: 3rem;
        }
        .about__info {
          margin-bottom: 3rem;
        }
      }
    }
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Sathish Shanmugam </span>
            </p>
            <h2 className="about__heading">
              A Geek who thinks Coding is a Superpower
            </h2>
            <div className="about__info">
              <PText>
                I am from Mount Abu, a hill station in the Aravalli range of
                Rajasthan, and am currently based in Mumbai, working as a
                Software Development Engineer at Juspay for the past two years.
                <br />
                <br />I developed interest in coding because I was pretty
                average in other subjects during my schooling. Back then, to
                start coding was my only option and now - not getting to explore
                this field is my greatest fear. I love learning & working with
                new technologies, and possess interest in Competetive
                Programming as well as contributing to Open Source.
              </PText>
            </div>
            <DownloadCV />
          </div>
          <div className="right">
            <img loading="lazy" src={Img} alt="My Img" />
          </div>
        </div>

        <div className="about__info__items">
          <AboutItems
            heading="My Skills"
            entries={[
              {
                title: "FrontEnd",
                items: [
                  "HTML",
                  "CSS",
                  "SCSS",
                  "React JS",
                  "Rescript",
                  "Tailwind",
                ],
              },
              {
                title: "Databases",
                items: ["MySQL", "MongoDB"],
              },
              {
                title: "BackEnd",
                items: ["Django", "Node"],
              },
              {
                title: "App Development",
                items: ["Flutter", "Dart", "Firebase", "Android Native"],
              },
              {
                title: "Languages",
                items: ["Python", "C++", "JavaScript", "Haskell", "Java"],
              },
            ]}
          />
          <AboutItems
            heading="Education"
            entries={[
              {
                title: "B.Tech - CSE",
                items: [
                  "D.Y. Patil International University, Akurdi, Pune",
                  "UGC",
                  "CGPA: 8.9",
                ],
              },
              {
                title: "HSC",
                items: [
                  "S.T. John's Senior Secondary School, Aburoad, Rajasthan",
                  "CBSE",
                  "CGPA: 7.2",
                ],
              },
            ]}
          />
        </div>
      </div>
    </AboutStyles>
  );
}
