import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Trello from './Trello';
import Home from './Home';
import Signin from './Signin';



const Menu = () => {
    return (
        <div className="navbar-header">
        <Router>
                <ul className="navbar">
                    <div className="navbar-left">
                        <li><Link to='/'>ホーム</Link></li>
                        <li><Link to='./signin'>ログイン</Link></li>
                        <li><Link to='./trello'>タスク画面</Link></li>
                    </div>
                    <div className="navbar-right">
                        <li>ログアウト</li>
                    </div>
                </ul>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signin' exact component={Signin}/>
                <Route path='/trello' exact component={Trello}/>
            </Switch>
        </Router>
        </div>
    );
}

export default Menu;