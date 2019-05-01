import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import salahImg from '../images/salah.png';
import premImg from '../images/prem.png';
import teaAtOakimg from '../images/teaAtOak.png';

class ProjectList extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                    <Project title="prem app" img={premImg} description="hello from prem"/>
                    </div>
                    <div className="col-md-4">
                    <Project title="prem app" img={teaAtOakimg} description="hello from prem" />
                    </div>
                    <div className="col-md-4">
                    <Project title="prem app" img={premImg} description="hello from prem" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    <Project title="prem app" img={premImg} description="hello from prem" />
                    </div>
                    <div className="col-md-4">
                    <Project title="prem app" img={premImg} description="hello from prem" />
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