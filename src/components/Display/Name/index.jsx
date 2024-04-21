import React from "react"



const Name = ({todo}) => {
    console.log(todo)
    return (
        <div>
            <h1>Hello Name </h1>
            <h1>{todo && todo.data.id}</h1>
            <ul>{todo.data.todayScore}</ul> 
            <ul>{todo.data.userInfos.firstName}</ul>
        </div>
    )
}

export default Name