import React from 'react';
import MediaQuery from "react-responsive";


const Home = () => {
    return (
        <div>
            <div className="title">
                {/**PC画面サイズ */}
                <MediaQuery query="(min-width: 768px)">
                  <div className="max-width">
                    <h1>Schedule</h1>
                </div>
                </MediaQuery>
                {/**スマホ画面サイズ */}
                <MediaQuery query="(max-width: 767px)">
                    <div className="min-width">
                        <h1>Schedule</h1>
                    </div>
                </MediaQuery>
            </div>
        </div>
    );
}

export default Home;