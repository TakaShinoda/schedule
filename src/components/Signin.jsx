
import React, { Component } from 'react';
import firebase from 'firebase/app';


class Signin extends Component {
    constructor(props){
        super(props);
        this.signInWithGoogle = this.signInWithGoogle.bind(this);
    }

    signInWithGoogle(e) {
        alert("hoge")
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
          });
    }

    render() {
        return (
            <div>
                <div className="login">
                    <h1>ログイン / 新規登録</h1>
                </div>
                <div className="signin_button">
                    <img src="../btn_google_signin.png" onClick={()=>this.signInWithGoogle()} alt="google signin"/>
                </div>
            </div>
        );
    }

}

export default Signin