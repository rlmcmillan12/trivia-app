import React from 'react'
import styled, { keyframes } from 'styled-components'

const CountDownContainer = styled.div`
    width: 100vw;
`
const prog = keyframes`
    from { width: 0%}
    to { width: 100%}
`
const CountDownBar = styled.div`
    height: 20px;
    background-color: black;
    animation: ${prog} 10s linear infinite;
`
function CountDown(props) {
    const progress = props.progress
    return (
        <CountDownContainer>
            <CountDownBar $progress={progress}></CountDownBar>
        </CountDownContainer>
    )
}

export default CountDown