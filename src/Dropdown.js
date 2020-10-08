import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Dropdown(props) {
    const { date } = props
    const [dateList, setDateList] = useState([])

    const createDateList = (list) => {
        for (let i = 0; i< 7; i++) {
            dateList.push('')
        }
    }

    return (
        <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
    )
}