import React from 'react'
import styled, {css} from 'styled-components'
import {ReactComponent as Design} from '../assets/design.svg'
import "../App.css"

const Span = styled.span `
font-size:2rem;
color: purple;
padding: 0 1rem;
${props => props.italic && css`
font-style: italic;
color: gray;
`}
`
const FooterContainer = styled.div`
width: 80%;
background-color:white;
border: 3px solid gray;
margin: 0 auto;
padding: 0.5rem;
`

const Footer = () => {
  return (
    <FooterContainer >
    <Span italic>{"<Sinan/>"}</Span>
    <Design width="30px" height="30px"/>
    <Span>design</Span>
     </FooterContainer>
  )
}

export default Footer