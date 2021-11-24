import React from 'react';
import './App.css';
import {RoutesComponent} from "./routes/router";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import {useSelector} from "react-redux";

const App: React.FC = () :JSX.Element => {

const state = useSelector(state => state)

  return (
    <div className={'s12'}>
       <Navbar/>
        <div className={'container'}>
            <RoutesComponent/>
        </div>
       <Footer/>
    </div>
  );
}

export default App;
