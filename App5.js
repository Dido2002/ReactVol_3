// . Fetch users
// Направете заявка към https://reqres.in/api/users/ и покажете името на потребителя,
// имейла и изображението в таблица. Добавете и параметър page, като ще имаме само
// две страници. Направете странициране.


// import React,{useRef, useEffect, useState} from "react";

// export default function App5(){

//     const [users,setUsers] = useState([]);
//     const [page, setPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(1);

//     useEffect(() => {
//         fetch('https://reqres.in/api/users?page=' + page)
//             .then(response.json())
//             .then(response =>{
//                 setTotalPages(response.total_pages);
//                 setUsers(response.data);
//             });
//     },[page])

//     function renderTr(user,index){
//         return(
//             <tr key={index}>
//                 <td>{user.id}</td>
//                 <td>{user.email}</td>
//                 <td>{user.first_name}</td>
//                 <td>{user.last_name}</td>
//                 <td>
//                     <img src={user.avatar}/>
//                 </td>
//             </tr>
//         )
//     }

//     function renderPages(){
//         const pages = [];
//         for(let i = 1; i <= totalPages ; i++){
//             pages.push(
//                 <li onClick={() => setPage(i)}>{i}</li>
//             );
//         }
//         return(
//             <ul>
//                 {pages}
//             </ul>
//         )
//     }

//     return(
//         <div>
//             <table border={1}>
//                 <thead>
//                     <tr>
//                         <td>
//                             Id
//                         </td>
//                         <td>
//                             Email
//                         </td>
//                         <td>
//                             Name
//                         </td>
//                         <td>
//                             Image
//                         </td>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map(renderTr)}
//                 </tbody>
//             </table>
//             {renderPages()}
//         </div>
//     )
// }

import { render } from "@testing-library/react";
import React,{useState,useRef,useEffect} from "react";

export default function App5(){

    const [users,setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [user,setUser] = useState(null);
    const [userInitial,setUserInitial] = useState([])

    useEffect(() =>{
        fetch('https://reqres.in/api/users?page=' + page)
            .then(response.json())
            .then(response => {
                setTotalPages(response.total_pages);
                setUsers(response.data);
                setUserInitial(response.data);
            }
            )
    },[page])

    function renderUsers(user,index){
        return(
            <tr key={index}>
                <td>
                    {user.id}
                </td>
                <td>
                    {user.email}
                </td>
                <td>
                    {user.first_name}
                </td>
                <td>
                    {user.last_name}
                </td>
                <td>
                    <img src={user.avatar}/>
                </td>
                <td>
                    <button onClick={() => {
                        fetch(`https://reqres.in/api/users/${user.id}`)
                        .then(response => response.json())
                        .then(response => {
                            setUser(response.data);
                        })
                        }}>Preview</button>
                </td>
            </tr>
        );
    }
   

    function renderPages(){
        const pages = [];
        for(let i = 1; i<=totalPages; i++){
            pages.push(<li onClick={() => setPage(i)}>{i}</li>)
        }
        return(
            <div>
                <ul>
                    {pages}
                </ul>
            </div>
        )
    }

    function renderTable(){
        return (
            <>
            <div>
                <input type="text" onInput={(e) => {
                    let input = e.target.value;
                    if(input.length > 0){
                        const filteredUsers = userInitial.filter(user => user.email.includes(input));
                        setUsers([...filteredUsers])
                    }
                    else{
                        setUsers([...userInitial]);
                    }
                }}/>
            </div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>
                            Id
                        </td>
                        <td>
                            Email
                        </td>
                        <td>
                            Name
                        </td>
                        <td>
                            Image
                        </td>
                        <td>
                            <button>Preview</button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map(renderUsers)}
                </tbody>
                {renderPages}
            </table>
            </>
        );
    }

    function renderUser(){
        return(
            <>
                <div>
                    <img src={user.avatar}/>
                </div>
                <div>{user.first_name} {user.last_name}</div>
                <button onClick={() => setUser(null)}>Back</button>
            </>
        )
    }

    return(
        <div>
            {user === null && renderTable()}
            {user !== null && renderUser()}
        </div>  
    )
}
