import React from 'react';
import {MyConsumer} from '../context';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default function Navbar() {
    return (
        <MyConsumer>
            {value => {
                const {handleSidebar} = value;
                return (
                    <NavWrapper>
                    <div className="navbar navbar-expand-lg navbar-light bg-length" style={{background: "var(--mainDark)"}}>
                <div className="collapse navbar-collapse show ml-sm-5">
                    <ul className="navbar-nav text-right">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link" onClick={handleSidebar}>Projects</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/recipes" className="nav-link">About Me</Link>
                            
                        </li>
                        <li className="navbar-item">
                            <Link to="/recipes" className="nav-link">About Me</Link>
                        </li>
                    </ul>

                </div>
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