import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { decode } from 'html-entities'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementMax, incrementStreak, resetCounter, resetStreak } from '../redux/trueOrFalseGame/action'


const SpeedQuestionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    & p {
        max-width: 500px;
        text-align: center;
    }
`
const Inputs = styled.div`
    display: flex;
    justify-content: space-around;
    width: 150px;
    margin-top: 8px;
`

function SpeedQuestions() {
    const dispatch = useDispatch()
    const [question, setQuestion] = useState(null)
    const [nextQuestion, setNextQuestion] = useState(null)
    const [answer, setAnswer] = useState(true)
    const counter = useSelector(state => state.trueOrFalseGame.counter)
    const streak = useSelector(state => state.trueOrFalseGame.streak)
    const max = useSelector(state => state.trueOrFalseGame.max)

    useEffect(() => {
        setTimeout(function to() {
            dispatch(decrementCounter())
            if (counter <= 0) {
                dispatch(resetCounter())
                setQuestion(nextQuestion)
                setAnswer(!answer)
            }
            if (counter > max) {
                dispatch(incrementMax())
            };
            setTimeout(to, 1000)
        }, 1000);
    },[]);

    const handleSubmit = (e) => {
        setAnswer(e)
        if(e === question.correct_answer) {
            dispatch(incrementStreak())
            setQuestion(nextQuestion)
            dispatch(resetCounter())
            setAnswer(!answer)
        }
        if(e !== question.correct_answer) {
            dispatch(resetStreak())
            setQuestion(nextQuestion)
            dispatch(resetCounter())
            setAnswer(!answer)
        }
    }

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=1&type=boolean`)
        .then(res => res.json())
        .then(data => setQuestion(data.results[0]))
    }, [])
    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=1&type=boolean`)
        .then(res => res.json())
        .then(data => setNextQuestion(data.results[0]))
    }, [])

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=1&type=boolean`)
        .then(res => res.json())
        .then(data => setNextQuestion(data.results[0]))
    }, [answer])


    if(!question) return ''
    return (
        <SpeedQuestionsContainer>
            <h1>True or False</h1>
            <h3>Time: {counter}</h3>
            <h3>Streak: {streak}</h3>
            <h3>Max: {max}</h3>
            <p>{decode(question.question)}</p>
            <Inputs>
            <input type='button' onClick={e => handleSubmit(e.target.value)} value='True'/>
            <input type='button' onClick={e => handleSubmit(e.target.value)} value='False'/>
            </Inputs>
        </SpeedQuestionsContainer>
    )
}

export default SpeedQuestions