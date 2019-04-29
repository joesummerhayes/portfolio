import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Sidebar />

        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>

        <Footer />


        </BrowserRouter>
    </>
  );
}

export default App;
