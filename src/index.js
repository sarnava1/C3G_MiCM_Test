//this is the meeting point of our frontend.
//the App component is rendered in the screen which is made up of 
//all the other components

//importing the dependancies
import React, { Component } from 'react';
import { render } from 'react-dom';
import Users from './components/Users';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>
          < Users />
        </p>
      </div>
    );
  }
}

//rendering the App component in the div with id root
render(<App />, document.getElementById('root'));
