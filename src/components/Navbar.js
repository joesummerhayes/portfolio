import React from 'react';
import {MyConsumer} from '../context/context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Song from '../music/song.mp3';
import Logo from '../images/Logo_Final.png';




export default function Navbar() {
    return (
        <MyConsumer>
            {value => {
                const {handleSidebar} = value;
                return (
                    <NavWrapper>
                        <div className="nav-center" style={{maxWidth:"1500px"}}>
                            <Link to="" className="disable sidebarIcon nav-icon" onClick={handleSidebar} style={{color:"var(--mainOrange)"}}>
                            <i className="bars icon"></i>
                            </Link>
                            <div className="nav-icon">
                            <img src={Logo}/>
                            </div>
                            <Link to="/" className="disable">
                                <div className="nav-icon">projects</div>
                            </Link>
                            <Link to="/aboutMe" className="nav-link nav-icon disable">About Me</Link>
                            <Link to="/contact" className="nav-link nav-icon disable">Contact</Link>
                            <audio class = "music" src={Song} controls />
                        </div>
                    </NavWrapper>
                )
            }}
        </MyConsumer>
    )

}

const NavWrapper = styled.nav`
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-family: var(--titleFont);
    color: var(--main2);
   position:-webkit-sticky;
    position: sticky;
    z-index: 9999;
    top:0;
    width: 100%;
    padding: 1rem 1.5rem;
    border-bottom: 3px solid var(--primaryColor);
    background: white;
    .nav-center{
        display: flex;
        align-items:center;
        justify-content: space-between;
        max-width: 1170px;
        margin: 0 auto;
    }

    .nav-icon {
        font-size:1.3rem;
        cursor: pointer;
        transition: var(--mainTransition);
    }
    .nav-icon:hover{
        color: var(--mainOrange)
    }

    .disable{
        color:inherit;
        text-decoration: none;
    }
    .sidebarIcon{
        font-size: 1.5rem
    }
    .music{

    }
`