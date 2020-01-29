import React from 'react';
import Board from 'react-trello'
import data from "../data.json";

const Trello = () => {
    return (
        <div>
            <div>
                <h1>スケジュール管理</h1>
                <Board data={data} draggable />
            </div>
        </div>
    );
}

export default Trello;