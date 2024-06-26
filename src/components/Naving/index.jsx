import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    width: 25%;
    height: 100%;
    display: flex;
    color: white;
    text-decoration: none;
    font-size: 30px;
    border: 3px solid black;
`
const StyledNav = styled.nav`
    width: 75vw;
    height: auto;
    display: flex;
    flex-direction: row;
    `

function Naving() {

    return (
        <StyledNav>
                 <StyledLink to="/home">Accueil</StyledLink>
                 <StyledLink to="/user/12">Profil</StyledLink>
                 <StyledLink to="/reglage">Réglage</StyledLink>
                 <StyledLink to="/objectifChart">Communauté</StyledLink>
        </StyledNav>
    )
}

export default Naving;


