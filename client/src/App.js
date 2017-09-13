import React, { Component } from 'react';
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

    handleError(event) {
        console.log('didnt load');
        this.setState({errored: true});
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
                  skills: employee.skills,
                  photo : employee.photo
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
              let employeeProfile = null;
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
                      <div className={employee.photo ? "profile photo" : "profile"}>
                          {employee.photo ? <img src={employee.photo} alt={employee.fullName}/> : <span>{employee.initials}</span>}
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
        <div>
            <div className="search-wrapper">
                <input type="text" value={this.state.searchText} onChange={this.handleChange} placeholder="Search Skills and People"></input>
            </div>
            <div className="employees">
                {employees}
            </div>
        </div>
    );
  }
}


export default App;
