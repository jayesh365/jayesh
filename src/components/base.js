import React from 'react'; 

function Square(props){
        return (
            <div id="main">
                <div className="square">
                <p>{props.content}</p>
                </div>
            </div>
        );
}

export default Square;