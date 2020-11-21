// build your `Project` model here
const db = require('../data/dbConfig.js');

module.exports={
    getProjects,
    addProjects
}

function getProjects(){
    return db('projects');
}

function addProjects(){
    return db('projects').insert({})
}