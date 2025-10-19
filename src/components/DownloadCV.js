import React from 'react'
import styled from 'styled-components';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 1.8rem;
    background-color: var(--gray-1);
    padding: 0.7em 1.5em;
    border-radius: 8px;
    border: 2px solid var(--gray-1);
    color: black;
    transition: 1s ease;

    &:hover {
      background-color: transparent;
      color: var(--gray-1);
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.4rem;
    }
  }
`;

export default function DownloadCV() {
    return (
        <ButtonStyle>
            <a className="button" href={"https://tinyurl.com/sakshams-resume"} download="Sathish's Resume" target='_blank' rel="noreferrer">
                Download CV
            </a>
        </ButtonStyle>
    )
}
