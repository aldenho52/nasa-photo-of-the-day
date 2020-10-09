import React, { useState, useEffect } from "react";
import "./App.css";
import Body from './Body'
import axios from 'axios'
import Dropdown from './Dropdown'
import Header from './header'
import styled from 'styled-components'

const StyledApp = styled.div`
  /* background: ${pr=> pr.theme.background}; */
`

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=S1uJsFVGc3nmjwnYYmeDyBsT71z766uujo3H1pQe')
      .then(res => {
        setData(res.data)
        // console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  
}, [])

  return (
    <StyledApp className="App">
      <Header data={data}/>
      <Body title={data.title} image={data.url} explanation={data.explanation} copyright={data.copyright} hdurl={data.hdurl} />
      <Dropdown date={data.date}/>  
    </StyledApp>
  );
}

export default App;
