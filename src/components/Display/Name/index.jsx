import React from "react"
import styled from 'styled-components'

const NameSpan = styled.span`
    color: red;
    font-size: 52px;
    font-weight: bold;
`
const WelcomSpan = styled.span`
    font-size: 52px;
    font-weight: bold;
`
const NameDiv = styled.div`
    display: flex;
    flexDirection: row;
    color: black;
    font-size: 52px;
    font-weight: bold;
`

const Name = ({todo}) => {
    console.log(todo)
    return (
        <NameDiv>
           <WelcomSpan>
             Bonjour
           </WelcomSpan> 
           <NameSpan>
            {todo.data.userInfos.firstName}
           </NameSpan>
        </NameDiv>
    )
}

export default Name