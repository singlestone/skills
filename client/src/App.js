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
    this.cancel = this.cancel.bind(this);
    this.reset = this.reset.bind(this);
    this.focus = this.focus.bind(this);
    this.inputDom = undefined;
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }

  cancel() {
    this.setState({searchText: ''});
    this.inputDom.blur();
    this.inputDom.classList.remove("focused-input");	
  }

  reset() {
    this.setState({searchText: ''});
    this.inputDom.focus();
  }

  focus() {
    this.inputDom.classList.add("focused-input");
  }

  render() {
    const matchesSearch = caseInsensitiveIncludes(this.state.searchText);
    const employees = this.props.employees
      .filter(employee => this.state.searchText.length < 2 || matchesSearch(employee.fullName) || employee.skills.some(matchesSearch))
      .map(employee => <Employee key={employee.id} data={employee} searchText={this.state.searchText} />);

    return (
      <div>
        <div className="search-wrapper">
          <div className="search-box">
            <input
              type="text"
              value={this.state.searchText}
              onChange={this.handleChange}
              onFocus={this.focus}
              ref={(x) => { this.inputDom = x; }}
              placeholder="Search Skills and People"
            />
            <div id="reseter" className={`icon ion-close-circled ${this.state.searchText ? 'nonempty' : ''}`} onClick={this.reset}></div>
		        <div id="canceler" onClick={this.cancel}>Cancel</div>
          </div>
       </div>
        <div className="employees">{employees}</div>
      </div>
    );
  }
}

function Employee(props) {
  const skills = props.data.skills.map(skill => (
    <li key={props.data.id + skill} dangerouslySetInnerHTML={{ __html: highlightValue({ text: skill, searchText: props.searchText })}} />
  ));

  return (
    <div className={"employee-wrapper"}>
      <div className={props.data.photo ? "profile photo" : "profile"}>
        { props.data.photo 
          ? <img src={props.data.photo} alt={props.data.fullName}/> 
          : <span>{props.data.initials}</span> }
      </div>
      <div className="details">
        <h3 dangerouslySetInnerHTML={{ __html: highlightValue({ text: props.data.fullName, searchText: props.searchText })}}/>
        <ul>{skills}</ul>
      </div>
    </div>
  );
}

function highlightValue({ text, searchText }) {
  return searchText.length < 2  ? text : text.replace(new RegExp(`(${escapeForRegex(searchText)})`, 'gi'), '<mark>$1</mark>');
}

const regexEscapeRegex = /[-/\\^$*+?.()|[\]{}]/g;

function escapeForRegex(text) {
    return text.replace(regexEscapeRegex, '\\$&');
}

export default App;