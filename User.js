import React from "react";

export default function User({user,setUser}){
    return(
        <>
            <div>
                <img src={user.avatar}/>
            </div>
            <div>{user.first_name} {user.last_name}</div>
            <button onClick={() => setUser(null)}>Back</button>
        </>
    );
}