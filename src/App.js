import React, { Component } from 'react';
import Timer from './Timer'
import './App.css';
import { subSeconds } from 'date-fns'

const timerInterval = 1000;

class App extends Component {
  constructor(props){
    super(props);
    const initialTime = new Date();
    initialTime.setMinutes(50, 0);
    this.state = {
      time: initialTime,
      hpLeft:20,
      leftPlayerName: props.leftPlayerName,
    }
  }

  componentDidMount = () => {
    this.gameTimer = setInterval(this.gameTimerTick, timerInterval);
    // this.stateTimer = setInterval(this.stateTimerTick, 100);
  }

  gameTimerTick = () => {
    const currentState = this.state;
    const newTime = subSeconds(currentState.time, 1);
    if(newTime.getMinutes() === 0 && newTime.getSeconds() === 0) {
      this.stop();
    }
    this.setState({
      ...currentState,
      time: newTime,
    });
  }

  stateTimerTick = () => {
    this.setState({
      ...this.state,
      leftPlayerName: localStorage.getItem('leftPlayerName')
    })
  }

  stop = () =>{
    clearInterval(this.gameTimer);
  } 

  render() {
    return (
      <div id="app" className="box">
        <div className="health">
          <div className="input" id="left-hp">{this.state.hpLeft || 'HP'}</div>
        </div>
        <div className="player">
          <div
            className="player__name player__name_left input"
          >{this.state.leftPlayerName || 'Игрок слева'}</div>
          <div
            className="player__deck player__deck_left input"
          >Дека слева</div>
        </div>
        <Timer time={this.state.time}/>
        <div className="player">
          <div className="player__name input">Игрок справа</div>
          <div className="player__deck input">Дека справа</div>
        </div>
        <div className="health">
          <div className="input" id="right-hp">20</div>
        </div>
      </div>
    );
  }
}

export default App;
