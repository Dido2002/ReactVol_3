import React from "react";

export default function Table(props){
    function renderTr(user,index){
        return(
            <tr key={index}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name} {user.last_name}</td>
                <td>
                    <img src={user.avatar}/>
                </td>
                <td>
                    <button onClick={()=>   props.handlePreview(user.id)}>Preview</button>
                </td>
            </tr>
        );
    }

    return(
        <>
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
                            preview
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {props.users.map(renderTr)}
                </tbody>
            </table>
            {props.children}
        </>
    );
}