import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="app" class="box">
      <div class="health">
        <input id="left-hp" type="text" placeholder="HP" value="20" />
      </div>
      <div class="player">
        <input
          class="player__name player__name_left"
          type="text"
          placeholder="Игрок слева"
        />
        <input
          class="player__deck player__deck_left"
          type="text"
          placeholder="Дека слева"
        />
      </div>
      <div id="timer" class="timer">50:00</div>
      <div class="player">
        <input class="player__name" type="text" placeholder="Игрок справа" />
        <input class="player__deck" type="text" placeholder="Дека справа" />
      </div>
      <div class="health">
        <input id="right-hp" type="text" placeholder="HP" value="20" />
      </div>
    </div>
    );
  }
}

export default App;
