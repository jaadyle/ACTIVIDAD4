import React from 'react';
import Home from './pages/home';
import './styles/styles.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Villa from './pages/villa';


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <Routes>
                <Route path='/' element= { <Home /> } />
                <Route path='/villa' element= { <Villa /> } />
                
            </Routes>
            </BrowserRouter>
           
        );
    }

}

export default App