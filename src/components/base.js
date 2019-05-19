import React from 'react'; 

function Square(props){
        return (
            <div className="base">
                <div className="flex-square">
                    <div className="left-column">
                        <img className="c-image" src={props.src} alt="pic"></img>
                    </div>
                    <div className="content">
                        <h1 className="title">{props.title}</h1>
                        <p className="blurb">{props.blurb}</p>
                    </div>
                </div>
            </div>
        );
}

export default Square;