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
                <h2 className="ui header text-capitalize">my story</h2>
                In the Summer of 2018, after being inspired by a friend, I started to teach myself to
code from scratch! I instantly fell in love with it and found myself coding at every given
opportunity; on my lunch breaks at work, in the evenings, on the train. Being completely
new to it all I had to start right from the beginning, learning basic HTML and CSS on
Code Academy. I found Code Academy frustrating to use at times so moved to
Udemy (which I’d heard great things about). I completed a fantastic extensive course on
vanilla javascript that took me a couple of months to get through. After I had the basics down,
I immediately looked to frameworks and decided Jquery would probably be a good stepping stone
between vanilla JS and some of the larger frameworks. It was around this time I read an inspiring
blog about an aspiring developer who decided to take on the ‘100 Day Coding Challenge’ - coding
at least one hour, for a hundred days straight. Sounded like my cup of tea! I wanted to develop
faster and this seemed like the perfect motivation! I started my first React course on day 1 and it’s
safe to say the next 3 months was the best period of development, probably in my life. I’ve now
completed two courses on React, made several great web apps, assisted the engineers at work
with smaller sprint tickets and bugs, and started to dabble in my first experience of back end
developing now! I’ve started a new, full-stack, course on Udemy, that focuses on creating a
feedback management system. The plan for the next few months is to continue to learn more
backend developing skills and to keep pushing myself in learning and practising React JS.

            </div>
            </>
        )
    }
}

export default AboutMe