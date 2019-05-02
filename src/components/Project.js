import React from 'react';
import styled from 'styled-components';



class Project extends React.Component {
    render() {
        const {img, description, title} = this.props
        return (
            <ProjectWrapper>
                <div className="col-12" style={{padding: "1rem"}}>
                    <div className="ui card expandCard">
                        <div className="image" style={{maxHeight:"22rem"}}>
                            <img src={img} alt={title} style={{height:"240.82px"}}/>
                        </div>
                        <div className="content" style={{padding: "1rem"}}>
                            <span className="header">{title}</span>
                            <div className="description">{description}</div>
                        </div>
                    </div>
                </div>
            </ProjectWrapper>
        )
    }
}



export default Project

const ProjectWrapper = styled.div`
    .expandCard {
        transition: all 0.3s ease-in-out;
    }

    .expandCard:hover {
        box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.5);
    transform: scale(1.2);
    }
`