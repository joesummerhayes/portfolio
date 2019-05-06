import React from 'react';
import styled from 'styled-components';
import background from '../images/Desk.jpg'


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
justify-content: center;
min-height: ${props => props.max ? '100vh' : '60vh'};
background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${props => props.img}) center/cover no-repeat;

h1{
    position: absolute;
    top:640px;
    color: var(--mainOrange);
    transition: var(--mainTransition);
    }
h1:hover{
    cursor: pointer;
    color: var(--main2)
}
`

Hero.defaultProps = {
    img: background
}