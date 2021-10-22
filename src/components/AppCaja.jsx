import React, { Component } from 'react'
import Caja from "./Caja"

const data = [
  {
    
    letra: 'Q',
    id: 'Open-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    
    letra: 'W',
    id: 'Heater-4',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
   
    letra: 'E',
    id: 'Clap',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
   
    letra: 'A',
    id: 'Heater-2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    
  },
  {
    
    letra: 'S',
    id: 'Heater-3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    
  },
  {
    
    letra: 'D',
    id: 'Kick',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    
    letra: 'Z',
    id: "Kick-n'-Hat",
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
   
    letra: 'X',
    id: 'Heater-1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    
  },
  {
    
    letra: 'C',
    id: 'Closed-HH',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

export default class AppCaja extends Component {
  constructor(props){
    super(props)

    this.state ={
      display:'',

    }
  }

 
  handleDisplay = display => this.setState({ display })
  render() {
    return (
      <div className="container">
      <div id="drum">
      <div id="display">{this.state.display}</div>
      <div id='drum-pads'>{data.map(d => (
        <Caja
          key={d.id}
          id={d.id}
          letra={d.letra}
          src={d.src}
          handleDisplay={this.handleDisplay}
        />   
       ))}</div>
    </div>
  </div>
    )
  }
}

