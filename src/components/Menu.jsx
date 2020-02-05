import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Trello from './Trello';
import Home from './Home';





class Menu extends Component {
    constructor(props){
        super(props);
        this.state =({

        });
        //this.signInWithGoogle = this.signInWithGoogle.bind(this);
    }
    /** 

    signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
            alert("success : " + user.user.displayName + "さんでログインしました");
        })
        .catch(error => {
            alert(error.message);
        });
    }

    signOut() {
        //firebase.auth().signOut();
        alert("hege")
    }

*/

    render() {
    return (
        <div className="navbar-header">
        <Router>
                <ul className="navbar">
                    <div className="navbar-left">
                        <li><Link to='/'>ホーム</Link></li>
                        <li><Link to='./trello' /*onClick={()=>{this.signInWithGoogle()}*}*/>管理する</Link></li>
                    </div>
                    <div className="navbar-right">
                        <li>ログアウト</li>
                    </div>
                </ul>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/trello' exact component={Trello}/>
            </Switch>
        </Router>
        </div>

   
    );
}
}

export default Menu;