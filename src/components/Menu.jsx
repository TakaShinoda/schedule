import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Trello from './Trello';
import Home from './Home';

const Menu = () => {
    return (
        <div className="navbar-header">
        <Router>
                <ul className="navbar">
                    <li><Link to='/'>ホーム</Link></li>
                    <li><Link to='./trello'>管理</Link></li>
                </ul>
                
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/trello' exact component={Trello}/>
            </Switch>
        </Router>
        </div>

   
    );
}

export default Menu;