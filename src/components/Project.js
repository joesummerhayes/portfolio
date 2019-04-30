import React from 'react';



class Project extends React.Component {
    render() {
        const {img, description, title} = this.props
        return (
            <div className="col-12" style={{padding: "1rem"}}>
            <div className="ui card">
                <div className="image">
                    <img src={img} alt={title} style={{maxHeight:"25rem"}}/>
                </div>
                <div className="content" style={{padding: "1rem"}}>
                    <span className="header">{title}</span>
                    <div className="description">{description}</div>
                </div>
            </div>
        </div>
        )
    }
}



export default Project
