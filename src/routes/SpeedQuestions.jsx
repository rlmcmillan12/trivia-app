import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { decode } from 'html-entities'


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
    const [question, setQuestion] = useState(null)
    const [nextQuestion, setNextQuestion] = useState(null)
    const [streak, setStreak] = useState(0)
    const [answer, setAnswer] = useState(true)
    const [count, setCount] = useState(10);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count - 1);
        }, 1000);
        if (count <= 0) {
            setCount(10)
            setQuestion(nextQuestion)
            setAnswer(!answer)
        }
    },[count]);

    const handleSubmit = (e) => {
        setAnswer(e)
        if(e === question.correct_answer) {
            console.log('nice!')
            setStreak(streak + 1)
            setQuestion(nextQuestion)
            setCount(10)
            setAnswer(!answer)
        }
        if(e !== question.correct_answer) {
            setStreak(0)
            setQuestion(nextQuestion)
            setCount(10)
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
            <h3>Streak: {streak}</h3>
            <h3>Time: {count}</h3>
            <p>{decode(question.question)}</p>
            <Inputs>
            <input type='button' onClick={e => handleSubmit(e.target.value)} value='True'/>
            <input type='button' onClick={e => handleSubmit(e.target.value)} value='False'/>
            </Inputs>
        </SpeedQuestionsContainer>
    )
}

export default SpeedQuestions