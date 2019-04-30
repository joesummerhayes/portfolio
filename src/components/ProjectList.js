import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import salahImg from '../images/salah.png';
import premImg from '../images/prem.png';

class ProjectList extends React.Component {
    render() {
        return (

            <ProjectWrapper>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto text-center text-capitalize mb-3">
                            <h2>Here are my projects</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Project
                                title="Top Trumps App"
                                img={salahImg}
                                description="this is some description about the top trumps app"
                            />
                        </div>
                        <div className="col-6">
                            <Project
                                title="Premier League App"
                                img={premImg}
                                description="this is my premier league app!"
                            />
                        </div>
                    </div>
                </div>


            </ProjectWrapper>





        )
    }
}


export default ProjectList


const ProjectWrapper = styled.div`
background: var(--main)
`