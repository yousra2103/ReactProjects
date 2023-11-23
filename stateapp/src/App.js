
import React from "react"; 

const { Component } = require("react");

class app extends Component {
  state={
    person :
    {
      name: "yacine bono",
    bio: "Morroccan Goal",
    imageUrl: "https://lareleve.ma/wp-content/uploads/2023/10/Capture-290.png",
    profession: "morrocan football player "
  },
   shows: false ,

  }
  affichage= ()=> {
          this.setState({shows:!this.state.shows})
  }


  render(){
     const {shows} = this.state
     const {name , bio , profession , imageUrl} = this.state.person
    return (
      <div>
      <button onClick={this.affichage} >SHOW</button>
      
     { shows && (
      <div>
        <h1>{name}</h1>
        <h2>{bio}</h2>
          <img src={imageUrl}/>
          <h3>{profession}</h3>
      </div>)}
      </div>)
     }}
 export default app ;
