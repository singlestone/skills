'use strict';

const persistenceService = require('./persistence');

module.exports = {
    getEmployees
}

function getEmployees() {
    return persistenceService.getEmployees();
}