import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const main = async () => {
  const result = await fetch('/game');
  const props = await result.json();
  ReactDOM.render(<App {...props}/>, document.getElementById('root'));
};

main();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
