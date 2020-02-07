
import React from 'react';
import firebase from 'firebase/app';


const Signin = () => {
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase
        .auth()
        .signInWithPopup(provider)
        .then(user => {
            alert("success : " + user.user.displayName + "さんでログインしました");
            //this.$router.push("/tourlist");
          })
          .catch(error => {
              alert(error.message);
          });
    }
    
    
    return (
            <div>
                <div className="login">
                    <h1>ログイン / 新規登録</h1>
                </div>
                <div className="signin_button">
                    <img src="../btn_google_signin.png" onClick={()=>signInWithGoogle()} alt="google signin"/>
                </div>
            </div>
        );
}

export default Signin