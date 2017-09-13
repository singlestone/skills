import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Skills</h2>
        </div>
        <SkillSearch data={ data }/>
      </div>
    );
  }
}

class SkillSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value });
  }

  render() {
    const items = this.props.data.map(x => (
      <div>
        <img src={`photos/profile_${x.lastName}_${x.firstName}.jpg`}/>
        {x.firstName + ' ' + x.lastName}
      </div>
    ));

    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <div>{items}</div>
      </div>
    );
  }
}


export default App;
