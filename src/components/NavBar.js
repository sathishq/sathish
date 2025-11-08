import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdMenu, MdClose } from "react-icons/md";
import Logo from "../assets/images/logo.png";
const NavBarStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  background: var(--dark-bg);

  .navIcon {
    display: none;
    outline: none;
    position: absolute;
    margin: 3rem;
    top: 0;
    right: 0;
    height: 4rem;
    cursor: pointer;
    transition: 0.5s ease;
    z-index: 10;
    * {
      pointer-events: none;
    }
    &:hover {
      background-color: var(--deep-dark);
    }
  }

  .wrapper {
    position: absolute;
    padding: 2rem 2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: var(--dark-bg);

    .logo {
      p {
        font-size: 1.8rem;
        letter-spacing: 2px;
        font-family: "LilitaOne Regular";
      }
    }

    .menu ul {
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;

      li {
        display: inline-block;
        border-radius: 8px;
        transition: 0.5s ease background-color;

        &:hover {
          background-color: var(--deep-dark);
        }

        a {
          display: inline-block;
          font-family: "RobotoMono Regular";
          margin: 0 0.5em;
          padding: 1rem 1rem;
          font-size: 1.8rem;
          letter-spacing: 2px;
          color: var(--gray-1);
          outline: none;
          transition: color 0.3s ease, background 0.3s ease;
          border-radius: 8px;
        }

        a.active {
          color: var(--white);
          background-color: var(--deep-dark);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0;

    .navIcon {
      display: block;
    }

    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }

    .wrapper {
      position: absolute;
      background-color: var(--deep-dark);
      flex-direction: column;
      height: 97.5vh;
      width: 100vw;
      justify-content: space-evenly;
      --top: 1rem;
      transition: 0.3s ease transform;
      top: var(--top);

      .logo p {
        font-size: 3rem;
      }

      .menu ul li {
        display: block;
        margin-bottom: 2rem;

        a {
          font-size: 3rem;
        }

        a.active {
          background-color: var(--dark-bg);
          color: var(--white);
        }
      }
    }
  }
`;


export default function NavBar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavBarStyles>
      <div className="navIcon"
        onClick={() => setShowNav(!showNav)}
        role="button">
        {
          !showNav
            ? <MdMenu />
            : <MdClose />
        }
      </div>
      <div className={!showNav ? 'wrapper hide-item' : 'wrapper'}>
        <div className="logo">
          <NavLink to="/">
            <img
              src={Logo}
              alt="Sathish Logo"
              className="mx-auto w-24 h-auto"
            />
            {/* <p className="font-semibold">SATHISH SHANMUGAM</p> */}
          </NavLink>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/"
                onClick={() => setShowNav(!showNav)}
                role="button">
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about"
                onClick={() => setShowNav(!showNav)}
                role="button">
                ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/projects"
                onClick={() => setShowNav(!showNav)}
                role="button">
                PROJECTS</NavLink>
            </li>
            <li>
              <NavLink to="/experience"
                onClick={() => setShowNav(!showNav)}
                role="button">
                EXPERIENCE</NavLink>
            </li>
            {/* <li>
              <NavLink to="/certifications"
                onClick={() => setShowNav(!showNav)}
                role="button">
                CERTIFICATIONS</NavLink>
            </li> */}
            <li>
              <NavLink to="/contact"
                onClick={() => setShowNav(!showNav)}
                role="button">
                CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </NavBarStyles>
  );
}
