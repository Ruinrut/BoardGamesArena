import React, { Component } from 'react';
import Timer from './Timer'
import './app.min.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ...props,
    }
  }

  componentDidMount = () => {
    this.stateTimer = setInterval(this.stateTimerTick, 1000);
  }

  stateTimerTick = async () => {
    const response = await fetch('/game');
    const game = await response.json();
    
    this.setState({
      ...this.state,
      ...game,
    })
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
        <Timer time={this.state.endTime}/>
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
