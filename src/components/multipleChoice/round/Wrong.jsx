import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { advanceGameState, decreaseGameState, nextRound, resetTurnState } from '../../../redux/multipleChoiceGame/action'
import { firstIsUp, nextIsUp } from '../../../redux/players/action'

const WrongContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    margin: 10px;
    & button {
        margin-top: 25px;
    }
`

function Wrong() {
    const dispatch = useDispatch()
    const correctAnswer = useSelector(state => state.multipleChoiceSearch.results.correctAnswer)
    const MCG = useSelector(state => state.multipleChoiceGame)
    // const players = useSelector(state => state.players.players)
    const isUp = useSelector(state => state.players.isUp)

    const handleClick = () => {
        if(isUp === MCG.players - 1 && MCG.currentRound === MCG.rounds){
            dispatch(advanceGameState())
        }
        else if(isUp === MCG.players - 1){
            dispatch(decreaseGameState())
            dispatch(nextRound())
            dispatch(firstIsUp())
            dispatch(resetTurnState())
        }
        else if( isUp < MCG.players - 1) {
            dispatch(resetTurnState())
            dispatch(nextIsUp())
        }
    }
    return (
        <WrongContainer>
            <h2>Wrong</h2>
            {/* <p>{`Sorry ${players[isUp].name}`}</p> */}
            <h4>The correct answer was:</h4>
            <span>{correctAnswer}</span>
            {/* <p>Score: {players[isUp].score}</p> */}
            <button onClick={handleClick}>Next</button>
        </WrongContainer>
    )
}

export default Wrong