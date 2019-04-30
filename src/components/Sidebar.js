import React from 'react';
import {MyConsumer, MyProvider} from '../context';
import styled from 'styled-components';

class Sidebar extends React.Component {
    render() {
        return (
            <MyConsumer>
                {(value) => {
                    const {sidebarOpen, handleSidebar} = value;

                    return <SideWrapper show={sidebarOpen} onClick={handleSidebar}>
                        <div>
                        <ul>
                            <li className="sidebar-link">Football App </li>
                            <li className="sidebar-link">Top Trumps Game </li>
                            <li className="sidebar-link">33333</li>
                        </ul>
                        </div>
                        </SideWrapper>
                    
                }}
            </MyConsumer>
        )
    }
}


const SideWrapper = styled.nav`
    position: fixed;
    top: 55px;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--mainDark);
    border-right: 4px solid var(--main);
    z-index: 1;
    transition: all 0.3s ease-in-out;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'};
    ul{
        list-style-type: none;
        padding: 0!important;

    }
    .sidebar-link{
        display: block;
        font-size: 1.5rem;
        text-transform:capitalize;
        padding:0.5rem 1.5rem;
        background: transparent;


    }
    @media (min-width: 576px) {
        width: 20rem;
    }
`














export default Sidebar;


