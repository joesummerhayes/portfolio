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
                        <Hero
                        max="true"
                        title={<i
                            className="chevron down icon"
                            style={{fontSize:"4rem"}}
                            ></i>}/>
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