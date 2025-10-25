import React from "react";
import PText from "../components/PText";
import styled from "styled-components";
import AboutItems from "../components/AboutItems";
import Img from "../assets/images/sathish.jpg";
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
          max-width: 200%;
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
            <p className="about__heading ">
              Hi, I’m <span>Sathish</span>
            </p>
            <h2 className="about__subheading">
              A developer passionate about turning ideas into impactful, high-performance applications.
            </h2>
            <div className="about__info">
              <PText>
                I’m a Senior Mobile and Web Developer based in Chennai, Tamil Nadu, with over 9 years of experience building high-quality, user-centered digital solutions. Currently, I work at ClearVue Solutions, where I specialize in creating seamless, scalable, and performance-driven applications across platforms.
                <br />
                <br />
                My journey started with curiosity and a desire to bring ideas to life through technology. Over the years, that curiosity has grown into a deep passion for crafting products that combine clean design, efficient architecture, and meaningful user experiences. I enjoy solving complex challenges, exploring emerging technologies, and contributing to projects that make a real impact—whether through mobile apps, web development, or open-source collaboration.
              </PText>
            </div>
            <DownloadCV />
          </div>
          <div className="right">
            <img
              loading="lazy"
              src={Img}
              alt="Sathish portrait"
            />
          </div>
        </div>

        <div className="about__info__items">
          <AboutItems
  heading="Core Skills"
  entries={[
    {
      title: "iOS:",
      items: [
        "Swift", 
        "SwiftUI", 
        "Objective-C", 
        "UIKit", 
        "Combine", 
        "CocoaPods", 
        "RealmSwift", 
        "Firebase", 
        "WebRTC", 
        "XMPP", 
        "MessageKit"
      ],
    },
    {
      title: "Android:",
      items: [
        "Kotlin", 
        "Java", 
        "Jetpack Compose", 
        "Android SDK", 
        "Gradle", 
        "Room", 
        "Retrofit", 
        "Coroutines", 
        "Firebase", 
        "Glide"
      ],
    },
    {
      title: "Web Development:",
      items: [
        "HTML5", 
        "CSS3", 
        "JavaScript", 
        "React.js", 
        "Redux", 
        "Tailwind CSS", 
        "Axios", 
      ],
    },
    {
      title: "Server-Side:",
      items: [
        "Node.js", 
        "Express.js", 
        "MongoDB", 
        "REST APIs", 
        "Socket.io", 
        "JWT Authentication", 
        "bcrypt", 
      ],
    },
    {
      title: "Tools & Platforms:",
      items: [
        "Xcode", 
        "Android Studio", 
        "Visual Studio Code", 
        "Git/GitHub/GitLab", 
        "Postman", 
        "Docker", 
        "Azure DevOps", 
        "Jira", 
        "Trello", 
        "Firebase Console"
      ],
    }
  ]}
/>

          <AboutItems
            heading="Education"
            entries={[
              {
                title: "Master of Computer Applications (MCA)",
                items: [
                  "PR Engineering College – Anna University",
                  "Postgraduate",
                  "CGPA: 7.6",
                ],
              },
            ]}
          />
        </div>
      </div>
    </AboutStyles>
  );
}

