import React from "react";

export default function Filters(props){
    return(
        <div>
                <input type="text" onInput={(e) =>  props.onInput(e)
                    //IF THE LENGTH OF THE ENTERED TEXT IS BIGGER THAN 0 WE HAVE TO FILTER THE ELEMENTS
                }/>
            </div>
    )
}