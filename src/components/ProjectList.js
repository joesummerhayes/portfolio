import React from 'react';
import styled from 'styled-components';
import Project from './Project';


import {projectData} from '../context/projectData';

class ProjectList extends React.Component {
    render() {
        console.log(projectData[0].title)
        return (
            <div className="container py-5">
                <div className="row">
                    {projectData.map((project) => {
                        return (
                            <div className="col-md-4 py-4">
                                 <Project title={project.title} img={project.img} description={project.description} url={project.url} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}


export default ProjectList




                    // <div className="col-md-4">
                    // <Project title="prem app" img={premImg} description="hello from prem" />
                    // </div>