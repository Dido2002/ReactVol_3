// 2. Създаване на CarCard
// Създайте CarCard компонент приемащ – Модел, Марка, Конски сили и изображение на
// колата. Създайте масив от елементи – {brand: “”, model: “”, image:””,horsePowers:””} и
// рендирайте няколко card

import React from "react";
import CarCard from "./card/CarCard";

export default function App02(){
     const cars = [
          {brand:"mercedes" , model:"mercedes63", image:"/images/mercedes.jpg", horsePower: 400},
          {brand:"bmw" , model:"bmwm4", image:"/images/bmwm4.jpg", horsePower: 420},
          {brand:"audi" , model:"audirs7", image:"/images/audirs7.jpg", horsePower: 480},
          {brand:"bmw" , model:"bmwm5", image:"/images/bmwm5.jpg", horsePower: 440},
     ]

     return(
          <div>
               {cars.map(c => <CarCard {...c}/>)}
          </div>
     )
}