import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { resetCurrentRound, resetGameState, resetPlayers, resetRounds, resetTurnState } from '../../redux/multipleChoiceGame/action'
import { clearPlayers, resetIsUp } from '../../redux/players/action'

const EndGameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    margin: 10px;
`

const WinnerCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;
    padding: 10px;
`

function EndGame() {
    const dispatch = useDispatch()
    const [winnerArray, setWinnerArray] = useState(null)
    const players = useSelector(state => state.players.players)
    
useEffect(() => {
let maxScore = players.sort((a,b) => b.score - a.score)
let winners = maxScore.filter(player => player.score === maxScore[0].score)
setWinnerArray(winners)
}, [players])

const handleClick = () => {
    dispatch(clearPlayers())
    dispatch(resetIsUp())
    dispatch(resetGameState())
    dispatch(resetTurnState())
    dispatch(resetPlayers())
    dispatch(resetRounds())
    dispatch(resetCurrentRound())
}

    if (!winnerArray) return ''
    return (

        <EndGameContainer>
                    {winnerArray.map((winner, i) =>  
                        <WinnerCard key={i}>
                            <h2>{`Great Job ${winner.name}!`}</h2>
                            <p>{`Score: ${winner.score}`}</p>
                        </WinnerCard>)}
            <button onClick={handleClick}>End Game</button>
        </EndGameContainer>
    )
}

export default EndGame