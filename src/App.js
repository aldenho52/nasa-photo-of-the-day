import React, { useState, useEffect } from "react";
import "./App.css";

import axios from 'axios'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    // const fetchFriends = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=S1uJsFVGc3nmjwnYYmeDyBsT71z766uujo3H1pQe')
      .then(res => {
        setData(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    // fetchFriends()
  }, [])

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <p>Welcome to the cosmos! Each day we'll show you a different image of our beautiful universe with a description written by a professional astronomer!</p>
      <p></p>  
      <div>
      </div>
    </div>
  );
}

export default App;
