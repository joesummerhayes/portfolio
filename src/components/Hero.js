import React from 'react';
import styled from 'styled-components';
import startup from '../images/startup.jpg';

export default function Hero({img, title, max}) {
    return (
    <HeroWrapper max={max} img={img}>
        <div>
            <h1>{title}</h1>
        </div>
    </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
text-align: center;
display: flex;
align-items: center;
min-height: ${props => props.max ? '100vh' : '60vh'};
background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${props => props.img}) center/cover
`

Hero.defaultProps = {
    img: startup
}