import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { advanceTurnState } from '../../../redux/multipleChoiceGame/action'
import { startSearch } from '../../../redux/multipleChoiceSearch/action'

const QuestionPickerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    margin: 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FormDiv = styled.div`
    margin: 8px;
`
const Button = styled.button`
    margin-top: 15px;
`

function QuestionPicker() {
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('easy')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(startSearch({
            category: category,
            difficulty: difficulty
        }))
        dispatch(advanceTurnState())
        setCategory('')
        setDifficulty('easy')


    }
    return (
        <QuestionPickerContainer>
            <h2>Choose a question!</h2>
            <Form onSubmit={handleSubmit}>
                <FormDiv>
                    <label htmlFor="category">Choose a category:</label>
                    <select 
                        name="category" id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                        <option value="">Any</option>
                        <option value="categories=arts_and_literature">{`Arts & Literature`}</option>
                        <option value="categories=film_and_tv">{`Film & TV`}</option>
                        <option value="categories=food_and_drink">{`Food & Drink`}</option>
                        <option value="categories=general_knowledge">General Knowledge</option>
                        <option value="categories=geography">Geography</option>
                        <option value="categories=history">History</option>
                        <option value="categories=music">Music</option>
                        <option value="categories=science">Science</option>
                        <option value="categories=society_and_culture">{`Society & Culture`}</option>
                        <option value="categories=sports_and_leisure">{`Sports & Leisure`}</option>
                    </select>
                </FormDiv>
                <FormDiv>
                    <label htmlFor="difficulty">Choose a difficulty:</label>
                    <select 
                    name="difficulty" id="difficulty" required
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </FormDiv>
                <Button type='submit'>Submit</Button>
            </Form>
        </QuestionPickerContainer>
    )
}

export default QuestionPicker