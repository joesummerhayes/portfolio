import React from 'react';
import {MyConsumer} from '../context';
import styled from 'styled-components';
import {projectData} from '../context/projectData';

class Sidebar extends React.Component {
    render() {
        return (
            <MyConsumer>
                {(value) => {
                    const {sidebarOpen, handleSidebar} = value;

                    return <SideWrapper show={sidebarOpen} onClick={handleSidebar}>
                        <div>
                        <ul>
                            {projectData.map((project) => {
                                return (
                                    <a className="sidebar-link"
                                    key={project.id}
                                    style={{textDecoration: "none", color:"black"}}
                                    target="_blank" rel="noopener noreferrer"
                                    href={project.url}>
                                    {project.title}
                                    </a>
                                )
                            })}                            
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
        padding:1.2rem 1.5rem;
        background: transparent;
        transition: var(--mainTransition);
    }

    .sidebar-link:hover {
        background: var(--sidebarHover);


    }
    @media (min-width: 576px) {
        width: 20rem;
    }
`














export default Sidebar;


