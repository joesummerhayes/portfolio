import React from 'react';

class AboutMe extends React.Component {
    render() {
        return (
            <>
            <div className="ui raised very padded text container segment mx-5">
                <h2 className="ui header text-capitalize">completed courses</h2>
                <ul>
                    <li>
                        <a href="https://www.udemy.com/node-with-react-fullstack-web-development/">Node with React: Fullstack web develeopmoent</a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/react-redux/">React with Redux</a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/react-tutorial-and-projects-course/">React Tutorial and Projects Course</a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/up-and-running-with-jquery/">Up and Running with Jquery</a>
                    </li>
                    <li>
                        <a href="https://www.udemy.com/the-complete-javascript-course/">The Complete Javascript Course</a>
                    </li>
                </ul>
                <h2 className="ui header text-capitalize">Technical Skills</h2>
                <div>
                Javascript, CSS/ SASS, HMTL, React, Meteor, MongoDB, Redux, JQuery  
                </div>
            </div>
            </>
        )
    }
}

export default AboutMe