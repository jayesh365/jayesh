import React from 'react';

function Links(props) {
    return (
        <div className='outer'>
            
            <div id="inner">

                <div className='flex-square'>

                    <div className="link">
                        <div className="l-icon">
                            <a href={props.linkURL1} target="_blank"><img className="round-pic" src={props.pic1} /></a>
                        </div>
                    </div>

                    <div className="link">
                        <div className="l-icon">
                            <a href={props.linkURL2} target="_blank"><img className="round-pic" src={props.pic2} /></a>
                        </div>
                    </div>

                    <div className="link">
                        <div className="l-icon">
                            <a href={props.linkURL3} target="_blank"><img className="round-pic" src={props.pic3} /></a>
                        </div>
                    </div>

                    <div className="link">
                        <div className="l-icon">
                            <a href={props.linkURL4} target="_blank"><img className="round-pic" src={props.pic4} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Links;