import React from "react"



const Name = ({todo}) => {
    console.log(todo)
    return (
        <div>
            <div>Bonjour <span>{todo.data.userInfos.firstName}</span></div>
        </div>
    )
}

export default Name