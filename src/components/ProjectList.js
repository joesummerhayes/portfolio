import React from 'react';
import Project from './Project';
import {MyConsumer} from '../context';



import {projectData} from '../context/projectData';


export default function ProjectList() {
    return <MyConsumer>
    {value => {
        const {myProjects} = value;
        console.log(myProjects)
        return (
            <div className="container py-5">
                <div className="row">
                {!myProjects.length ? (
                    <div>Oh dear... there seems to be an error, please give Joe a nuggie</div>
                ) : (
                    myProjects.map((project) => {
                        return (
                    <div className="col-md-4 py-4">
                        <Project title={project.title} img={project.img} description={project.description} url={project.url} key={project.id}/>
                    </div>
                )}
                
                )
            )}
            </div>
        </div>
        )
    }}
</MyConsumer>
}
