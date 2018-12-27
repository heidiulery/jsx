// import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click on me!';
}

// create a react component
const App = () => {
  return (
    <div>
      <label for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        { getButtonText() }
      </button>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);