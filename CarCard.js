// 2. Създаване на CarCard
// Създайте CarCard компонент приемащ – Модел, Марка, Конски сили и изображение на
// колата. Създайте масив от елементи – {brand: “”, model: “”, image:””,horsePowers:””} и
// рендирайте няколко card

import React from "react";

export default function CarCard(props){
    return(
        <div>
            <div>
                {props.brand}
            </div>
            <div>
                <img src={props.image}/>
            </div>            
            <div>
                <p>{props.model}</p>
                <p>{props.horsePowers} HP</p>
            </div>
        </div>
    )
}