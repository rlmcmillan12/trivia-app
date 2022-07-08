import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import EndGame from '../components/multipleChoice/EndGame'
import Intro from '../components/multipleChoice/Intro'
import PlayerSetUp from '../components/multipleChoice/PlayerSetUp'
import Round from '../components/multipleChoice/round/Round'
import RoundStartCard from '../components/multipleChoice/RoundStartCard'

const MultipleChoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    & h1 {
        text-align: center;
    }
`

function MultipleChoice() {
    const gameState = useSelector(state => state.multipleChoiceGame.gameState)
    return (
        <MultipleChoiceContainer>
            <h1>Multiple Choice Trivia</h1>
            {gameState === 0 && (<Intro />)}
            {gameState === 1 && (<PlayerSetUp />)}
            {gameState === 2 && (<RoundStartCard />)}
            {gameState === 3 && (<Round />)}
            {gameState === 4 && (<EndGame />)}
        </MultipleChoiceContainer>
    )
}

export default MultipleChoice