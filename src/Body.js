import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Image(props) {
    const { image, title, explanation, copyright } = props

    return (
        <div>
            <img src={image} onclick={}></img>            
            <h2>{title}</h2>
            <h3>Copyright: {copyright}</h3>
            <p>{explanation}</p>
        </div>
    )
}