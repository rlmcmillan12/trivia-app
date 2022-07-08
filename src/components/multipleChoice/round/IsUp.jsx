import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { advanceTurnState } from '../../../redux/multipleChoiceGame/action'

const IsUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    margin: 10px;
`
const Header = styled.h2`
    
`
const Button = styled.button`
    margin-top: 10px;
`

function IsUp() {
    const players = useSelector(state => state.players.players)
    const isUp = useSelector(state => state.players.isUp)
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(advanceTurnState())
    }
    if (!players) return ''
    return (
        <IsUpContainer>
            <Header>{`${players[isUp].name} is up!`}</Header>
            <Button onClick={handleClick}>Start Turn</Button>
        </IsUpContainer>
    )
}

export default IsUp