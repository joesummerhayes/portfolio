import React from 'react';
import {client} from './contentful';
import {socialData} from './socialData';

//make a newq contxt
const MyContext = React.createContext();


// create a provider componenet
class MyProvider extends React.Component {
    state={
        sidebarOpen: false,
        socialData: {},
        myProjects: {}
    };

    componentDidMount() {
        client
        .getEntries({
            content_type: 'portfolioContent'
        })
        .then(response => this.setProjects(response.items))
        .catch(console.error);
    };

    setProjects = (products) => {
        let myProjects = products.map((item) => {
            const img = item.fields.img.fields.file.url;
            const project = {...item.fields, img};
            return project;
        })
        this.setState({
            myProjects
        })
    }

    handleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    render() {
        return <MyContext.Provider
                value={{
                    ...this.state,
                    handleSidebar: this.handleSidebar,
                    socialData
                }}>
                {this.props.children}
            </MyContext.Provider>
    }

}

const MyConsumer = MyContext.Consumer;

export {MyProvider, MyConsumer};