import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";
import ServicesSectionItem from "../components/ServicesSectionItem";
import { MdDeveloperMode, MdCode } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
import DownloadCV from "../components/DownloadCV";
import { FaGlobeAmericas } from "react-icons/fa";
// import TestimonialsSection from "../components/TestimonialsSection";
import Typewriter from "../components/Typewriter";
import { useEffect, useState } from "react";

const HomeStyles = styled.div`
  .hero {
    min-height: 500px;
    height: 100vh;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: "Montserrat SemiBold";
      color: var(--white);
      text-shadow: 2px 2px #00000094;
    }
  }

  .hero__info {
    margin-top: 5rem;
    p {
      text-shadow: 1.5px 1.5px #00000094;
      margin-bottom: 5rem;
    }
    .buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      a {
        margin: 1rem;
      }
    }
  }

  .scroll__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -8rem;
    svg {
      width: 5rem;
    }
  }

  .services__section {
    padding: 10rem 0;
    .services__items {
      display: flex;
      gap: 10rem;
      justify-content: space-between;
      margin-top: 5rem;
    }
  }

  .contact__banner {
    padding: 10rem 0;
    .contact__wrapper {
      background-color: var(--deep-dark);
      border-radius: 12px;
      padding: 5rem 0rem;
      text-align: center;
      p {
        font-size: 1.8rem;
      }
      .contact__heading {
        font-size: 4rem;
        margin-bottom: 5rem;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero__heading {
      font-size: 1.5rem;
      .hero__name {
        font-size: 4rem;
      }
    }
    .hero__info {
      .buttons {
        a {
          margin: 0.5rem;
        }
      }
    }

    .scroll__icon {
      margin-top: 0;
    }

    .services__section {
      .services__items {
        flex-direction: column;
        max-width: 350px;
        margin: 0 auto;
        margin-top: 5rem;
        gap: 5rem;
      }
    }

    .contact__heading {
      font-size: 1.8rem;
    }
  }
`;

export default function Home() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDiv(true);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
  return (
    <HomeStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>
              <Typewriter text="Hello, This is" speed={100} />
            </span>
            {showDiv && (
              <span className="hero__name animate-fade-in">
                SATHISH
              </span>
            )}
          </h1>
          {showDiv && (
            <div className="hero__info animate-fade-in">
              <PText>
                {
                  "I’m a Senior iOS Developer with 9 years of experience creating high-quality, user-focused mobile applications. I’m passionate about transforming ideas into elegant, performant, and scalable solutions. I thrive on tackling complex challenges, exploring emerging technologies, and continuously refining my craft to deliver exceptional user experiences."
                }
              </PText>
              <div className="buttons">
                <DownloadCV />
                <Button btnLink="/contact" btnText="Contact" outline={true} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="scroll__icon">
        <BsArrowDown />
      </div>

      <div className="services__section">
        <div className="container">
          <SectionTitle
            heading="Services"
            subheading="things I can do for you..."
          ></SectionTitle>
          <div className="services__items">
            <ServicesSectionItem
              icon={<FaGlobeAmericas />}
              title="Web Development"
              desc="I build responsive, high-performance websites using Node, React, and HTML,LESS & Tailwind, tailored to your requirements."
            />
            <ServicesSectionItem
              icon={<MdDeveloperMode />}
              title="Mobile App Dev"
              desc="I design and develop custom mobile applications tailored to your needs, delivering high-quality native apps for both iOS and Android platforms."
            />
            <ServicesSectionItem
              icon={<MdCode />}
              title="Code Support"
              desc="I specialize in a wide range of scripting solutions, from efficient web scraping to developing advanced AIML models, tailored to your needs."
            />
          </div>
        </div>
      </div>

      {/* this may added in future */}

      {/* <TestimonialsSection /> */}
      
      <div className="contact__banner">
        <div className="container">
          <div className="contact__wrapper">
            <PText>Have a project in mind ?</PText>
            <h3 className="contact__heading">Let me help you</h3>
            <Button btnText="Contact Now" btnLink="/contact"></Button>
          </div>
        </div>
      </div>
    </HomeStyles>
  );
}
