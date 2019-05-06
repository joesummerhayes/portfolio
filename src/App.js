import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom'; 

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import AboutMe from './pages/AboutMePage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Sidebar />

        <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/aboutMe" component={AboutMe} />
            <Route exact path="/contact" component={Contact} />
        </Switch>

        <Footer />


        </BrowserRouter>
    </>
  );
}

export default App;
