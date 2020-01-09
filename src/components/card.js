import React from 'react'; 

function Card(props){
    return(
        <div id={props.cardId} className={props.card}>
            <h3>{props.cardTitle}</h3>
            <p>{props.cardContent}</p>
        </div>
    );
}

export default Card;