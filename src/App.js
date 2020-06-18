import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component'
import './App.css';

import { render } from '@testing-library/react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      contacts: [
      ]
    };
  };

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ contacts: users }));
  }


  render() {
    return (
      <div className="App">
        <CardList contacts={this.state.contacts}>
        </CardList>
      </div>
    );
  }


}


export default App;
