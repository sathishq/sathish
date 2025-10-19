import React from 'react'
import styled from 'styled-components';

const PStyle = styled.div`
    color: var(--white);
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    font-size: 2rem;
    line-height: 1.3em;
    @media only screen and (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export default function PText( props ) {
    return (
        <PStyle>
            <p>{props.children}</p>
        </PStyle>
    )
}
