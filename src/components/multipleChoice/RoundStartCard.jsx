import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { advanceGameState } from '../../redux/multipleChoiceGame/action'
import MultipleChoiceBottomBar from './MultipleChoiceBottomBar'

const RoundStartCardContainer = styled.div`
    
`
const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    min-height: 400px;
`


function RoundStartCard() {
    const roundNumber = useSelector(state => state.multipleChoiceGame.currentRound)
    // const players = useSelector(state => state.players.players)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(advanceGameState())
    }
    return (
        <RoundStartCardContainer>
            <HeaderContainer>
                <h1>Round:</h1>
                <h1>{roundNumber}</h1>
                <button onClick={handleSubmit}>Start Round</button>
            </HeaderContainer>
            <MultipleChoiceBottomBar />
        </RoundStartCardContainer>
    )
}

export default RoundStartCard