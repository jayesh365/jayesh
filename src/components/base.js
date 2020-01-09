import React from 'react'; 

function Square(props){
        return (
            <div id={props.pageName} className="base">
                <div className="flex-square">
                    <div className="left-column">
                            <div id="row-link-one">
                                {props.linksOne}
                                {props.linksTwo}
                            </div>
                            <div id="row-link-two">
                                {props.linksThree}
                                {props.linksFour}
                            </div>
                    </div>
                    <div className="content">
                        <div className={props.divName}>{props.content0}
                            <h1 className="title">{props.title}</h1>
                            <div className="grad-line"></div>
                            <p className="blurb">{props.blurb}</p>
                        </div>                        
                        <div className={props.divName}>{props.content1}</div>
                        <div className={props.divName}>{props.content2}</div>
                    </div>
                </div>
            </div>
        );
}

export default Square;