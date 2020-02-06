
import React, {Component} from 'react';
import firebase from '../firebase';

class Signin extends Component {
    constructor(props){
        super(props);
        this.state =({

        });
        this.signInWithGoogle = this.signInWithGoogle.bind(this);
    }

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

    render() {
        return (
            <div>
                <h1>ログイン画面</h1>
            </div>
        );
    }

}

export default Signin