'use strict';

const persistenceService = require('./persistence');

module.exports = {
    getEmployees
}

async function getEmployees() {
    const employees = await persistenceService.getEmployees();
    
    return employees.map(y => ({
        username: y.username,
        firstName: y.firstName,
        lastName: y.lastName,
        skills: y.skills 
    }));
}