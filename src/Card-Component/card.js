import React from "react";
import "./card.css";
function Card (props){
  let monsters = props.monsters;
  let monsterKey = props.monsterkey;
  let email = props.email;
  return (
    <div className="card">
      <img
        alt="monster"
        src={`https://robohash.org/${monsterKey}?set=set2`}
      />
      <h2>{monsters}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;