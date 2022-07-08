import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    margin-top: 30px;
    & h4 {
        padding-left: 15px;
    }
    & a {
        text-decoration: inherit;
        color: inherit;
    }
    & a:hover {
        text-shadow: 2px 2px 2px #25272863;
    }
`

function NavBar() {
    return (
        <NavBarContainer>
            <h4><Link to='/'>Home</Link></h4>
            <h4><Link to='/multiplayer'>Multiple Choice</Link></h4>
            <h4><Link to='/speed'>True or False</Link></h4>
        </NavBarContainer>
    )
}

export default NavBar