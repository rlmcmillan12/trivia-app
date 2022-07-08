import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { advanceGameState, decreaseGameState, nextRound, resetTurnState } from '../../../redux/multipleChoiceGame/action'
import { firstIsUp, nextIsUp } from '../../../redux/players/action'

const CorrectContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    margin: 10px;
    & button {
        margin-top: 25px;
    }
`

function Correct() {
    const dispatch = useDispatch()
    const MCG = useSelector(state => state.multipleChoiceGame)
    const players = useSelector(state => state.players.players)
    const isUp = useSelector(state => state.players.isUp)
    
    const handleClick = () => {
        if(isUp === MCG.players - 1 && MCG.currentRound === MCG.rounds){
            dispatch(advanceGameState())
        }
        if(isUp === MCG.players - 1){
            dispatch(decreaseGameState())
            dispatch(nextRound())
            dispatch(firstIsUp())
            dispatch(resetTurnState())
        }

        if( isUp < MCG.players - 1) {
            dispatch(resetTurnState())
            dispatch(nextIsUp())
        }
    }
    return (
        <CorrectContainer>
            <h2>CORRECT!</h2>
            <span>{`Great job ${players[isUp].name}`}</span>
            <p>Score: {players[isUp].score}</p>
            <button onClick={handleClick}>Next</button>
        </CorrectContainer>
    )
}

export default Correct