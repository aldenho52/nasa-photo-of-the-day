import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div `
    text-align: center;
    font-size: 25px;
`

const StyledP = styled.p `
    width: 50%;
    margin: 0 auto;
`

const StyledDate = styled.p`
    font-style: italic;
    font-weight: bold;
`

export default function Header (props) {
    const {data} = props
    return (
        <StyledHeader>
            <h1>NASA Photo of the Day</h1>
            <StyledP>Welcome to the cosmos! Each day we'll show you a different image of our beautiful universe with a description written by a professional astronomer!</StyledP>   
            <StyledDate>Date: {data.date}</StyledDate>
        </StyledHeader>
    )
}

