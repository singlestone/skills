'use strict';

const initialData = require('./initial-data');
const { MongoClient } = require('mongodb');

module.exports = {
    getEmployees
}

const connectionPromise = async function getMongoConnection() {
    const url = 'mongodb://localhost:27017/skills';
    const db = await MongoClient.connect(url);

    await db.collection('employee').remove({});
    await db.collection('employee').insertMany(initialData);

    return db;
}();


async function getEmployees() {
    const db = await connectionPromise;
    return await db.collection('employee').find().toArray();
}