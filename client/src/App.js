import React, { Component } from 'react';
import './App.css';

import data from './data';

const employees = data
  .map(employee => ({
    id: employee.username,
    firstName: employee.firstName,
    lastName: employee.lastName,
    fullName: employee.firstName + ' ' + employee.lastName,
    initials: employee.firstName.charAt(0) + employee.lastName.charAt(0),
    skills: employee.skills.sort(sortBy(x => x.toLowerCase())),
    photo : employee.photo
  }))
  .sort(sortBy(x => x.firstName.toLowerCase()));

function sortBy(key) {
    return (a,b) => {
        const aVal = key(a), bVal = key(b);

        if (aVal > bVal) { return 1; }
        if (aVal < bVal) { return -1; }
        return 0;        
    }
}

function caseInsensitiveIncludes(x) {
    return y => y.toLowerCase().includes(x.toLowerCase());
}

function App(props) {
  return (
    <div className="App">
      <SkillSearch employees={ employees }/>
    </div>
  );
}

class SkillSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { searchText: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }

  render() {
    const matchesSearch = caseInsensitiveIncludes(this.state.searchText);
    const employees = this.props.employees
      .filter(employee => matchesSearch(employee.fullName) || employee.skills.some(matchesSearch))
      .map(employee => <Employee key={employee.id} data={employee} searchText={this.state.searchText} />);

    return (
      <div>
        <div className="search-wrapper">
          <input type="text" value={this.state.searchText} onChange={this.handleChange} placeholder="Search Skills and People" />
        </div>
        <div className="employees">{employees}</div>
      </div>
    );
  }
}

function Employee(props) {
  const matchesSearch = caseInsensitiveIncludes(props.searchText);
  const skills = props.data.skills.map(skill => (
    <li key={props.data.id + skill}>
      <Skill highlighted={shouldHighlight(skill)} text={skill} />
    </li>
  ));

  return (
    <div className={"employee-wrapper"}>
      <div className={props.data.photo ? "profile photo" : "profile"}>
        { props.data.photo 
          ? <img src={props.data.photo} alt={props.data.fullName}/> 
          : <span>{props.data.initials}</span> }
      </div>
      <div className="details">
        <h3 className={shouldHighlight(props.data.fullName) && "highlighted"}>{props.data.fullName}</h3>
        <ul>{skills}</ul>
      </div>
    </div>
  );
  
  function shouldHighlight(value) {
    return props.searchText.length >= 3 && matchesSearch(value);
  }
}

function Skill(props) {
  return ( <span className={props.highlighted && "highlighted"}>{props.text}</span> );
}

export default App;