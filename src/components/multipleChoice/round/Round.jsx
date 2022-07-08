import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Correct from './Correct'
import IsUp from './IsUp'
import Question from './Question'
import QuestionPicker from './QuestionPicker'
import Wrong from './Wrong'
import MultipleChoiceBottomBar from '../MultipleChoiceBottomBar'
const RoundContainer = styled.div`
    
`

function Round() {
    const turnState = useSelector(state => state.multipleChoiceGame.turnState)
    return (
        <RoundContainer>
            
            {turnState === 0 && (<IsUp />)}
            {turnState === 1 && (<QuestionPicker />)}
            {turnState === 2 && (<Question />)}
            {turnState === 3 && (<Correct />)}
            {turnState === 4 && (<Wrong />)}
            <MultipleChoiceBottomBar />
        </RoundContainer>
    )
}

export default Round