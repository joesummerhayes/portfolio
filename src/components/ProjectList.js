import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import salahImg from '../images/salah.png';
import premImg from '../images/prem.png';
import teaAtOakimg from '../images/teaAtOak.png';
import todolist from '../images/todolist.png';
import recipe from '../images/recipe.png';
import tech from '../images/tech.png';

class ProjectList extends React.Component {
    render() {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 py-4">
                    <Project title="prem app" img={premImg} description="he's our center half he's our number four"/>
                    </div>
                    <div className="col-md-4">
                    <Project title="prem app" img={teaAtOakimg} description="Anyone hungry?!" />
                    </div>
                    <div className="col-md-4">
                    <Project title="to-do list" img={todolist} description="This was a todolist app I made YO" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <Project title="recipe app" img={recipe} description="what do I want to cook...." />
                    </div>
                    <div className="col-md-4">
                    <Project title="tech app" img={tech} description="This is my tech app" />
                    </div>
                    <div className="col-md-4">
                    <Project title="prem app" img={premImg} description="hello from prem" />
                    </div>
                </div>
            </div>
        )
    }
}


export default ProjectList