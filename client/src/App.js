import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import data from './data';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SkillSearch data={ data }/>
      </div>
    );
  }
}

class SkillSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
      this.state = {
          searchText: '',
          employees: this.props.data
      };

    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event) {
        this.setState({searchText: event.target.value});
    }

  render() {
      let searchText = this.state.searchText;
      let employees = this.state.employees
          .map(function(employee) {
              return {
                  id: employee.username,
                  firstName: employee.firstName,
                  lastName: employee.lastName,
                  fullName: employee.firstName + ' ' + employee.lastName,
                  initials: employee.firstName.charAt(0) + employee.lastName.charAt(0),
                  skills: employee.skills
              }
          })
          .filter(function(employee) {
              return employee.fullName.toLowerCase().includes(searchText.toLowerCase())
                  || employee.skills.some(function(skill) {
                      return skill.toLowerCase().includes(searchText.toLowerCase());
                  });
          })
          .sort(function (a,b) {
              if (a.fullName.toLowerCase() > b.fullName.toLowerCase()) {
                  return 1;
              }
              if (a.fullName.toLowerCase() < b.fullName.toLowerCase()) {
                  return -1;
              }
              return 0;
          })
          .map(function(employee) {
              let skills = employee.skills
                  .sort(function (a,b) {
                      if (a.toLowerCase() > b.toLowerCase()) {
                          return 1;
                      }
                      if(a.toLowerCase() < b.toLowerCase()) {
                          return -1;
                      }
                      return 0;
                  })
                  .map(function(skill) {
                      return (
                          <li key={employee.id + skill}>
                              {skill}
                          </li>
                      )
                  });

              return (
                  <div className="employee-wrapper" key={employee.id}>
                      <div className="profile">
                        <img src={`photos/profile_${employee.lastName}_${employee.firstName}.jpg`} alt={employee.fullName}/>
                          <span>{employee.initials}</span>
                      </div>
                      <div className="details">
                      <h3>{employee.fullName}</h3>
                          <ul>
                              {skills}
                          </ul>
                      </div>
                  </div>
              );
          });

    return (
        <div className="employees">
            <div className="search-wrapper">
                <input type="text" value={this.state.searchText} onChange={this.handleChange} placeholder="Search Skills and People"></input>
            </div>
            {employees}
        </div>
    );
  }
}


export default App;
