import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
function Navigation(){
        return(
            <BrowserRouter>
            <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">

            <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-left">
                <li class="nav-item left"><a href="#">SUMEDHA SOOD</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-center">
                <li class="center nav-item"><a href="#">ABOUT</a></li>
                <li class="center nav-item"><a href="#">RESUME</a></li>
                <li class="center nav-item"><a href="#">PROJECTS</a></li>
            </ul>
    </div>
    </div>
        </nav>

            {/* <Switch>
             <Route path="/" component={Home} />
            </Switch> */}
            </BrowserRouter>
        );
}
export default Navigation;
