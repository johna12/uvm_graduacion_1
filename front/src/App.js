import { React, useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";

import Login from "./pages/Login";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Graduados from "./pages/Graduados";
import Calendario from "./pages/Calendario";
import About from "./pages/About";
import Mesas from "./pages/Mesas";
import Footer from "./components/Footer";


const App = () =>
{
    const [log, setLog] = useState(false)

    useEffect(() => {
        axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:4000/user",
          }).then((res) => {
            //setData(res.data);
            const { username } = res.data;
            if(username) setLog(true);
          });
    }, [log])

    if(log){
        return(
            <div className="App">
                <Router>
                    <Nav/>
                    {console.log(log)}
                        <Switch>
                            <div className="container">
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route exact path="/lista-de-graduados">
                                    <Graduados/>
                                </Route>
                                <Route exact path="/calendario">
                                    <Calendario/>
                                </Route>
                                <Route exact path="/mesa-y-lugares">
                                    <Mesas/>
                                </Route>
                                <Route exact path="/about">
                                    <About/>
                                </Route>
                            </div>
                        </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
    else{
        return <Login getUser={setLog}/>
    }

    
};

export default App;

/*
    useEffect(() => {
        for(let i = 0;i<100;i++)
        {
            render(
                <p className="frame">{i}</p>
            )
        }
    });
    */