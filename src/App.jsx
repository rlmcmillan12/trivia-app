import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import MultipleChoice from './routes/MultipleChoice';
import SpeedQuestions from './routes/SpeedQuestions';
import NavBar from './components/NavBar'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Trispace', sans-serif;
    background-color: #c0c2c4;
    text-decoration: none;
    color: black;
    width: 100vw;
    height: 100vh;
  }
`

const Application = styled.div`
      display: flex;
      flex-direction: column;
    min-height: 100vh;
    align-items: center;
`

function App() {

  return (
    <Application>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/multiplayer' element={<MultipleChoice />} />
        <Route path='/speed' element={<SpeedQuestions />} />
      </Routes>
    </Application>
  );
}

export default App;
