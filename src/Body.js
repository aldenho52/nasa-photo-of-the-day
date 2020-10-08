import React, { useState, useEffect } from 'react'

export default function Image(props) {
    const { image, title, explanation, copyright, hdurl } = props

    return (
        <div>
            // <a href={hdurl}><img src={image} alt={explanation}></img></a>          
            <h2>{title}</h2>
            <h3>Image Credit & Copyright: {copyright}</h3>
            <p>{explanation}</p>
        </div>
    )
}