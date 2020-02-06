import React from 'react';
import Board from 'react-trello'
import data from "../data.json";

const Trello = () => {
    return (
        <div>
            <Board data={data} cardDraggable />
        </div>
    );
}

export default Trello;