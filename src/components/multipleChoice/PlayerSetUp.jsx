import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { advanceGameState, nextRound } from '../../redux/multipleChoiceGame/action'
import { addPlayer } from '../../redux/players/action'

const PlayerSignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    min-height: 400px;
`
const SignUpHeader = styled.h2`
    
`
const SignUpText = styled.span`
    
`
const SignUpForm = styled.form`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`
const SignUpInput = styled.input`
    border: none;
`
const SignUpButton = styled.button`
    margin-top: 10px;
    width: 50px;
    align-self: center;
`

function PlayerSetUp() {
    const [playerNumber, setPlayerNumber] = useState(1)
    const [playerName, setPlayerName] = useState('')
    const dispatch = useDispatch()
    const players = useSelector(state => state.multipleChoiceGame.players)
    const handleSubmit = (e) => {
        e.preventDefault()
        setPlayerNumber(playerNumber + 1)
        dispatch(addPlayer({
            name: playerName,
            score: 0
        }))
        setPlayerName('')
        if (playerNumber >= players) {
            setPlayerNumber(1)
            dispatch(advanceGameState())
            dispatch(nextRound())
        }
    }

    return (
        <PlayerSignUpContainer>
            <SignUpHeader>Player Set Up</SignUpHeader>
            <SignUpText>{`Enter player ${playerNumber}'s name:`}</SignUpText>
            <SignUpForm type='submit' onSubmit={handleSubmit}>
                <SignUpInput type="text" placeholder='Players Name'
                value={playerName}
                onChange={e => setPlayerName(e.target.value)}/>
                <SignUpButton>Next</SignUpButton>
            </SignUpForm>

        </PlayerSignUpContainer>
    )
}

export default PlayerSetUp