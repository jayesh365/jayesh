import React from 'react'; 

function Square(props){
        return (
            <div className="base">
                <div className="flex-square">
                    <div className="left-column">
                        <div className="links">
                            <div id="row-link-one">
                                {props.linksOne}
                                {props.linksTwo}
                            </div>
                            <div id="row-image">
                                <img className="c-image" src={props.src} alt="pic"></img>
                            </div>
                            <div id="row-link-two">
                                {props.linksThree}
                                {props.linksFour}
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h1 className="title">{props.title}</h1>
                        <div className="grad-line"></div>
                        <p className="blurb">{props.blurb}</p>
                    </div>
                </div>
            </div>
        );
}

export default Square;