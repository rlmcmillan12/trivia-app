import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { advanceTurnState, advanceTurnStateTwo } from '../../../redux/multipleChoiceGame/action'
import { updateScore } from '../../../redux/players/action'

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    min-height: 400px;
    margin: 10px;
`
const Header = styled.h2`
    max-width: 700px;
    line-height: 1.4em;
    text-align: center;
`
const AnswerForm = styled.form`
    max-width: 700px;
    & fieldset {
        display: flex;
        flex-direction: column;
    }
`
const AnswerFormText = styled.legend`
    margin-bottom: 5px;
`
const Answer = styled.div`
    margin-bottom: 9px;
`
const Button = styled.button`
    margin-top: 12px;
    align-self: center;
`
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
function Question() {
    const dispatch = useDispatch()
    const [answer, setAnswer] = useState('')
    const [shuffledAnswers, setShuffledAnswers] = useState([])
    const question = useSelector(state => state.multipleChoiceSearch.results)
    
    const difficulty = useSelector(state => state.multipleChoiceSearch.searchParams.difficulty)


    useEffect(() => {
        const answers = question ? [...question.incorrectAnswers, question.correctAnswer] : []
        setShuffledAnswers(shuffle(answers))
    }, [question]) 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (answer === question.correctAnswer) {
            if (difficulty === 'easy') {
                dispatch(updateScore(100))
                dispatch(advanceTurnState())
            } 
            if (difficulty === 'medium') {
                dispatch(updateScore(300))
                dispatch(advanceTurnState())
            }
            if (difficulty === 'hard') {
                dispatch(updateScore(500))
                dispatch(advanceTurnState)
            }
        } else {
            dispatch(advanceTurnStateTwo())
        }

    }
    if(!question) return ''
    return (
        
        <QuestionContainer>
            <Header>{question.question}</Header>
            <AnswerForm onSubmit={handleSubmit}>
                <fieldset>
                    <AnswerFormText>Pick an answer:</AnswerFormText>
                    {shuffledAnswers && (shuffledAnswers.map(((answer,i) => 
                            <Answer>
                                <input type="radio" id={`answer${i}`} name='answer' 
                                value={answer}
                                onChange={e => setAnswer(e.target.value)}
                                />
                                <label htmlFor={`answer${i}`}>{answer}</label>
                            </Answer>
                        )))}
                    <Button>Final Answer</Button> 
                </fieldset>
            </AnswerForm>
        </QuestionContainer>
    )
}

export default Question