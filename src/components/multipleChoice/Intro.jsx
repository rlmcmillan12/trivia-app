import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPlayers, addRounds, advanceGameState } from '../../redux/multipleChoiceGame/action'

const IntroContainer = styled.div`
margin: 10px;
min-height: 400px;
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 1.5em;
    & input {
        width: 45px;
    }
`
const IntroHeader = styled.h2`
    text-align: center;
`
const IntroText = styled.p`
    align-self: center;
    max-width: 500px;
`
const IntroFormContainer = styled.p`

`
const IntroForm = styled.form`
        display: flex;
    flex-direction: column;
`
const FormDiv = styled.div`
    margin: 8px;
`
const Input = styled.input`
    box-shadow: 5px 5px 8px 3px #25272863;
    border: none;
`
const Label = styled.label`
`
const IntroFormButton = styled.button`
    width: 150px;
    align-self: center;
    margin-top: 3px;
`

function Intro() {
    const [players, setPlayers] = useState(null)
    const [rounds, setRounds] =useState(null)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPlayers(players))
        dispatch(addRounds(rounds))
        dispatch(advanceGameState())
        setPlayers(null)
        setRounds(null)
        
        
    }
    return (
        <IntroContainer>
            <IntroHeader>
                Ready for a trivia challenge?
            </IntroHeader>
            <IntroText>
                This is multiple choice trivia. Play by yourself or with up to four players. Pick the number of rounds you would like to play and start the game.
                Each player will be asked a question based on the category and difficulty they choose. The more difficult the question the greater the return for a correct answer.
                <br />Easy: 100
                <br />Medium: 300
                <br />Hard: 500
                <br />
                <br />At the end of the last round the player with the highest score WINS!!!
            </IntroText>
            <IntroFormContainer>
                <IntroForm onSubmit={handleSubmit}>
                    <FormDiv>
                    <Label htmlFor="">Number of players?: </Label>
                    <Input type="number" min='1' max='4' placeholder='1-4'
                        value={players}
                        onChange={e => setPlayers(Number(e.target.value))}
                        required
                    />
                    </FormDiv>
                    <FormDiv>
                    <Label htmlFor="">Number of rounds?: </Label>
                    <Input type="number" min='5' max='20' placeholder='5-20'
                    value={rounds}
                    onChange={e => setRounds(Number(e.target.value))}
                    required
                    />
                    </FormDiv>
                    <IntroFormButton type='submit'>LETS PLAY TRIVIA!!!</IntroFormButton>
                </IntroForm>
            </IntroFormContainer>
        </IntroContainer>
    )
}

export default Intro