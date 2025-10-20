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
              A passionate developer who believes coding is the superpower that drives innovation and change.
            </h2>
            <div className="about__info">
              <PText>
                I’m Sathish Shanmugam, a Senior iOS Developer based in Chennai, 
                Tamil Nadu, with 9 years of experience in designing and building innovative mobile applications. 
                I currently work at ClearVue Solutions, Chennai, where I focus on crafting seamless,
                 high-performance iOS experiences.
                <br />
                <br />My journey into coding began with curiosity and a desire to create. 
                Over the years, that curiosity has evolved into a deep passion for building impactful 
                solutions and continuously exploring new technologies. I enjoy solving complex problems, 
                learning from challenges, and contributing to meaningful projects—whether through app development,
                 competitive programming, or open-source contributions.
              </PText>
            </div>
            <DownloadCV />
          </div>
          <div className="right">
            <img loading="lazy" src={Img} alt="src/assets/images/sathishphoto.jpeg" />
          </div>
        </div>

        <div className="about__info__items">
          <AboutItems
            heading="My Core Skills"
            entries={[
              {
                title: "Languages & Frameworks:",
                items: [
                  "Swift",
                  "SwiftUI",
                  "Objective-C",
                  "UIKit",
                   "Combine"
                ],
              },
              {
                title: "Tools & Platforms:",
                items: ["Xcode",
               "Git/GitLab",
               "Jira",
               "Trello",
               "Azure DevOps"],
              },
              {
                title: "Libraries & Services:",
                items: ["Firebase",
                       "WebRTC",
                       "RealmSwift",
                       "XMPP",
                       "CocoaPods",
                       "Socket.io",
                       "MessageKit."],
              },
              {
                title: "Testing & Best Practices:",
                items: ["XCTest", "XCUITest", "Agile/Scrum", "Code Reviews", "CI/CD pipelines", "Software Design & Architecture"],
              },
            ]}
          />
          <AboutItems
            heading="Education"
            entries={[
               {
                title: "MCA",
                items: [
                  "PR ENGINEERING COLLEGE - ANNA UNIVERSITY",
                  "PG",
                  "CGPA: 7.6",
                ],
              }
            ]}
          />
        </div>
      </div>
    </AboutStyles>
  );
}
