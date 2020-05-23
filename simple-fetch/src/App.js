import React, { Component } from 'react'

export class App extends Component {
  
  handleClick = () => {

  fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username: "xavier",
        password: "carty",
        bio: "xavier carty is the best for the world and he means well and want to get connected with the divine spirtually.",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/4/49/Syvia_of_Sylvia%27s_reaturant_N.Y.C_%28cropped%29.jpg"
      }
    })
  })
    .then(r => r.json())
    .then(console.log)
   
}
  
  
  
  
  render() {
    return (
      <div>
        <button onClick = {this.handleClick}/>
      </div>
    )
  }
}

export default App

