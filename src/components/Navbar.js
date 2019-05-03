import React from 'react';
import {MyConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Song from '../music/song.mp3';



export default function Navbar() {
    return (
        <MyConsumer>
            {value => {
                const {handleSidebar} = value;
                return (
                    <NavWrapper>
                    <div className="navbar navbar-expand-lg navbar-light bg-length" style={{background: "var(--mainDark)"}}>
                <div className="collapse navbar-collapse show ml-sm-5">
                    <ul className="navbar-nav">
                        <li className="navbar-item mx-2">
                            <Link to="" className="nav-link" onClick={handleSidebar} style={{marginRight: "3rem"}}>
                            <i className="list icon"></i>
                            </Link>
                        </li>
                        <li className="navbar-item mx-2">
                            <Link to="/" className="nav-link">Projects</Link>
                        </li>
                        <li className="navbar-item mx-2">
                            <Link to="/aboutMe" className="nav-link">About Me</Link>
                            
                        </li>
                        <li className="navbar-item mx-2">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                    </ul>

                </div>
                <audio class = "music" src={Song} controls />
            </div>
            </NavWrapper>
                )
            }}
        </MyConsumer>
    )

}

const NavWrapper = styled.nav`
   position:-webkit-sticky;
    position: sticky;
    top:0;
    width: 100%;
    z-index: 9999;
    font-size: 1.3rem

`