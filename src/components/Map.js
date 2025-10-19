import React from "react";
import styled from "styled-components";
import PText from "./PText";
import MapImg from "../assets/images/map.JPG";

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
    .map__card {
      position: absolute;
      right: 10%;
      bottom: 10%;
      padding: 2rem;
      background: var(--deep-dark);
      max-width: 300px;
      width: 100%;
      border-radius: 12px;

      .heading {
        font-size: 3rem;
        margin-bottom: 1rem;
      }

      a {
        display: inline-block;
        font-size: 1.6rem;
        margin-top: 3rem;
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .container{
        .map__card {
            left: 1rem;
            max-width: none;
            right: 2rem;
        }
    }
  } 
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="heading">Here is Me</h3>
          <PText>DY Patil College Road, Akurdi, Pune, India</PText>
          <a
            href="https://goo.gl/maps/F7UsSusfou7zyCUr5"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Map
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
