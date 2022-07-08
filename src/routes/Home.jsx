import React from 'react'
import styled from 'styled-components'

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & h1 {
        text-align: center;
        margin-top: 60px;
    }
    & p {
        max-width: 500px;
        margin-top: 60px;
        line-height: 1.5em;
        text-align: center;
        
    }
`
function Home() {
    return (
        <HomeContainer>
            <h1>Welcome to trivia!</h1>
            <p>Hello trivia fans! Come play multiple choice trivia by yourself or with friends. Or try to see how many correct answers you can get in a row with rapid-fire true or false! </p>
        </HomeContainer>
    )
}

export default Home