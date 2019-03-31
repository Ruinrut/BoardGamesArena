import React, { Component } from 'react';
import Timer from './Timer'
import './app.min.css';
import { subSeconds } from 'date-fns'

const timerInterval = 1000;

class App extends Component {
  constructor(props){
    super(props);
    const initialTime = new Date();
    initialTime.setMinutes(50, 0);
    this.state = {
      time: initialTime,

      leftPlayerHP: props.leftPlayerHP,
      leftPlayerWin: props.leftPlayerWin,
      leftPlayerName: props.leftPlayerName,
      leftDeckName: props.leftDeckName,

      rightPlayerHP: props.rightPlayerHP,
      rightPlayerWin: props.rightPlayerWin,
      rightPlayerName: props.rightPlayerName,
      rightDeckName: props.rightDeckName
    }
  }

  componentDidMount = () => {
    this.gameTimer = setInterval(this.gameTimerTick, timerInterval);
    this.stateTimer = setInterval(this.stateTimerTick, 1000);
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

  stateTimerTick = async () => {
    const response = await fetch('/game');
    const game = await response.json();
    
    this.setState({
      ...this.state,

      leftPlayerHP: game['left-player-HP'],
      leftPlayerWin: game['left-player-win'],
      leftPlayerName: game['left-player-name'],
      leftDeckName: game['left-deck-name'],

      rightPlayerHP: game['right-player-HP'],
      rightPlayerWin: game['right-player-win'],
      rightPlayerName: game['right-player-name'],
      rightDeckName: game['right-deck-name']
    })
  }

  stop = () =>{
    clearInterval(this.gameTimer);
  } 

  render() {
    return (
      <div id="app" class="box">
      <div class="left-bg">
        <div class="player">
          <span class="player__name player__deck_left">{this.state.leftPlayerName}</span>
          <span class="player__deck player__deck_left">{this.state.leftDeckName}</span>
        </div>
          <span class="left">{this.state.leftPlayerHP}</span>
          <span class="left left_left">{this.state.leftPlayerWin}</span>
        </div>
        <Timer time={this.state.time}/>
        <div class="right-bg">
          <span class="right right-right">{this.state.rightPlayerWin}</span>
          <span class="right">{this.state.rightPlayerHP}</span>
        <div class="player">
          <span class="player__name">{this.state.rightPlayerName}</span>
          <span class="player__deck">{this.state.rightDeckName}</span>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
