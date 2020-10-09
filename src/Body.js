import React from 'react'
import styled from 'styled-components'

const Body = styled.div`
    text-align: center;
`

const ImageTag = styled.img`
    &:hover {
        transform: scale(1.2);
        transition: all 0.5s ease-in-out;
    }
`

const Title = styled.h2`
    font-weight: bold;
    font-size: 30px;
    width: 10%;
    margin: 0 auto;
`

const Explanation = styled.p`
    width: 50%;
    margin: 0 auto;
    margin-bottom: 1%;
`


export default function Image(props) {
    const { image, title, explanation, copyright, hdurl } = props

    return (
        <Body>
            <a href={hdurl}><ImageTag src={image} alt={explanation}></ImageTag></a>          
            <Title>{title}</Title>
            <h3>Image Credit & Copyright: {copyright}</h3>
            <Explanation>{explanation}</Explanation>
        </Body>
    )
}