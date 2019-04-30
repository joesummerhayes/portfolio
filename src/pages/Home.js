import React from 'react';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';

class Home extends React.Component {
    render() {
        return (
            <>
                <Hero title="My Projects" />
                <ProjectList />
            </>
        )
    }
}

export default Home;