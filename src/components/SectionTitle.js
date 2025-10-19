import React from 'react'
import styled from 'styled-components'

const SectionTitleStyles = styled.div`
    text-align: center;
    p {
        font-family: 'RobotoMono Regular';
        font-size: 1.8rem;
    }
    h1 {
        font-family: 'Montserrat Bold';
        font-size: 6rem;
        margin-top: 0.5rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width: 768px) {
        p {
            font-size: 1.2rem;
        }
        h1 {
            font-size: 3.6rem;
        }
    }
`;
export default function SectionTitle( { heading, subheading} ) {
    return (
        <SectionTitleStyles>
            <p>{subheading}</p>
            <h1>{heading}</h1>
        </SectionTitleStyles>
    )
}
