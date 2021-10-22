import React, { Component } from 'react'
import '../styles/index.css';



export default class Caja extends Component {
    handleClick =() => { 
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
      }
      
      componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown)
        window.focus()
      }
      
       componentWillUnmount() {
         document.removeEventListener('keydown', this.handleKeydown)
      }
    
      handleKeydown= e => {
        if(e.keyCode === this.props.letra.charCodeAt()) {
          this.audio.play()
          this.audio.currentTime = 0
          this.props.handleDisplay(this.props.id)
        }
      }
    
    render() {
        return (
            <div className='drum-' id={this.props.id} onClick={this.handleClick}>
            <button className="btn btn-primary">{this.props.letra}</button>
            <audio id={this.props.letra}
                 className='clip'
                 src={this.props.src}
                 ref={ref => this.audio = ref}
            ></audio>
          </div>
        )
    }
}

