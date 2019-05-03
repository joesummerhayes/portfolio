import React from 'react';
import Hero from '../components/Hero';
import ProjectList from '../components/ProjectList';
import ScrollIntoView from 'react-scroll-into-view';



class Home extends React.Component {

    
    render() {
        return (
            <>
                
                <div>
                    <ScrollIntoView selector='.scrollTo'>
                        <Hero max="true" />
                    </ScrollIntoView>
                </div>
                <div className="scrollTo">
                    <ProjectList />
                </div>
            </>
        )
    }
}

export default Home;