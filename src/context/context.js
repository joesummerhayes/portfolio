import React from 'react';
import {socialData} from './socialData';

//make a newq contxt
const MyContext = React.createContext();


// create a provider componenet
class MyProvider extends React.Component {
    state={
        sidebarOpen: false,
        socialData
    }

    handleSidebar = () => {
        console.log('handle sidebar')
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    render() {
        return <MyContext.Provider
                value={{
                    ...this.state,
                    handleSidebar: this.handleSidebar
                }}>
                {this.props.children}
            </MyContext.Provider>
    }

}

const MyConsumer = MyContext.Consumer;

export {MyProvider, MyConsumer};