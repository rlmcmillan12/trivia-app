import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const MCBBContainer = styled.div`
    display: flex;
    max-width: 700px;
    font-size: .8em;
`
const PlayerScoreContainer = styled.div`
  width: 100vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`
const PlayerScoreCard = styled.span`
height: 100px;
width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: 5px 5px 8px 3px #25272863;
    margin: 8px;
`
const Button = styled.button`
  
`

function MultipleChoiceBottomBar() {
    const players = useSelector(state => state.players.players)
    const round = useSelector(state => state.multipleChoiceGame.currentRound)
    return (
        <MCBBContainer>
          <PlayerScoreContainer>
            {players && (players.map((player, i) => <PlayerScoreCard key={i}>
              <span>
                {player.name} 
              </span>
              <span>
                {player.score}
              </span>
            </PlayerScoreCard> ))}
            <PlayerScoreCard>{`Round: ${round}`}<Button >Quit</Button></PlayerScoreCard>
          </PlayerScoreContainer>
        </MCBBContainer>
    )
}

export default MultipleChoiceBottomBar