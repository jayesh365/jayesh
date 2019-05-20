import React from 'react'; 

function Link(props){
    return(
        <i id={props.linkId} className={props.link}></i>
    );
}

export default Link;