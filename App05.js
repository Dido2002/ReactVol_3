// 5. Fetch users
// Направете заявка към https://reqres.in/api/users/ и покажете името на потребителя,
// имейла и изображението в таблица. Добавете и параметър page, като ще имаме само
// две страници. Направете странициране



// 6. Fetch users + preview
// Разширете задача номер 5, като добавите бутон preview. При превю трябва да прави
// заявка към https://reqres.in/api/users/{id} и да се показва информация за потребителя



// 7. Filter users
// Разширете задача номер 6 като добавете и текстово поле за филтър по имейл
// филтрира резултатите от страницата.



// 8.Refactoring
// Рефакторирайте кода от задача 7, като го разделите в отделни компоненти.

import React,{useEffect,useState} from "react";
import Table from "./Table";
import Pagination from "./Pagination";
import Filters from "./Filters";
import User from "./User";

export default function App05(){
    const [users,setUsers] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(1);
    const [user,setUser] = useState(null);
    const [usersInitial,setUsersInitial] = useState([]);
   

    //STEP BY STEP 
    //1. FIRST WE INVOQUE ONCE THE USEEFFECT METHOD
    //2.THIS METHOD SENDS REQUEST TO THE POINTED URL
    //3. THEN SET THE NUMBER OF THE PAGES AND THE USERS
    //4. IN THE PROCESS OF ALL OF THIS ACTION WE RENDER A TABLE

    //Request to the server...
    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + page)
            .then(response=>response.json())
            .then(response => {
                setTotalPages(response.total_pages);
                setUsers(response.data);
                setUsersInitial(response.data);
            });
    //If we change the page then send request again...
    },[page])
    function handlePreview(userId){
        fetch(`https://reqres.in/api/users/${userId}`).then(response => response.json())
        .then(response =>{
            setUser(response.data);
        })
    }

  
    function onInput(e){
        let input = e.target.value;

                    if(input.length> 0){
                        const filteredUsers = usersInitial.filter(user => user.email.includes(input));
                        setUsers([...filteredUsers])
                    }

                    //OTHERWISE IF THERE IS NOTHING ENTER WE MUST SET THESE ELEMENTS/USERS TO THEIR INITIALLY INITIALIZED
                    else{
                        setUsers([...usersInitial]);
                    }
    }
    return(
        <div>
            {user === null && 
            <>
            
            <Filters onInput={(e)=>onInput(e)} />
            <Table 
            users={users} handlePreview={(userId) => handlePreview(userId)}>
                <Pagination totalPages={totalPages} setPage={(i) => setPage(i)}/>
                </Table>
            </>}
            {user !== null && <User user= {user} setUser={() => setUser(null)}/>}
            </div>
    );
}