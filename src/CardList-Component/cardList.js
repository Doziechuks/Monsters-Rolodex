import React from "react";
import Card from "../Card-Component/card";
import './cardList.css'

function CardList (props){
  let monsters = props.monsters;
  let monsterList = monsters.map((monster) => (
    <Card key={monster.id} monsters={monster.name} monsterkey={monster.id} email={monster.email}/>
  ));

  return (
    <div className="cardList">{monsterList}</div>
  );
}

export default CardList;