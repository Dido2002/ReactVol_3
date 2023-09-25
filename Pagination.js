import React from "react";

export default function Pagination(props){
    const pages = [];
    for(let i = 1; i <= props.totalPages; i++){
        pages.push(
            <li onClick={() => props.setPage(i)} key={i}>{i}</li>
        );
    }
    return(
        <ul>
            {pages}
        </ul>
    );
}
