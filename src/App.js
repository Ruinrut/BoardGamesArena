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
    this.stateTimer = setInterval(this.stateTimerTick, 100);
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

      leftPlayerHP: localStorage.getItem('leftPlayerHP'),
      leftPlayerWin: localStorage.getItem('leftPlayerWin'),
      leftPlayerName: localStorage.getItem('leftPlayerName'),
      leftDeckName: localStorage.getItem('leftDeckName'),

      rightPlayerHP: localStorage.getItem('rightPlayerHP'),
      rightPlayerWin: localStorage.getItem('rightPlayerWin'),
      rightPlayerName: localStorage.getItem('rightPlayerName'),
      rightDeckName: localStorage.getItem('rightDeckName')
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
          <span class="player__name player__deck_left">Игрок слева</span>
          <span class="player__deck player__deck_left">Дека слева</span>
        </div>
          <span class="left">20</span>
          <span class="left left_left">0</span>
        </div>
        <Timer time={this.state.time}/>
        <div class="right-bg">
          <span class="right right-right">0</span>
          <span class="right">20</span>
        <div class="player">
          <span class="player__name">Игрок справа</span>
          <span class="player__deck">Дека справа</span>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
