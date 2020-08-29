import React from 'react';

function Square(props) {
    return (
        <div className={props.pageName}>
            <div id="content-container">
                <div className="flex-square">
                    <div className="left-column">
                        <div id="pic">
                            <img className="round-pic" src={props.pic} />
                        </div>
                    </div>
                    <div className="content">
                        <div className={props.divName}>{props.content0}
                            <h1 className="title">{props.title}</h1>
                            <p className="blurb">{props.blurb}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Square;