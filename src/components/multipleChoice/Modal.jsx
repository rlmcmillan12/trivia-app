import React from 'react'
import styled from 'styled-components'


const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1;
`
const ContentContainer = styled.div`
    position: fixed;
    width: 250px;
    height: 450px;
    background-color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 50px;
    z-index: 2;
`

function Modal({ children }) {
    // if(!open) return null
    return (
        <ModalContainer>
            <ContentContainer>
                {children}
            </ContentContainer>
        </ModalContainer>
    )
}

export default Modal