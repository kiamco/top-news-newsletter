// create models.
const db = require('../../config/dbConfig');

const find = () => {
    return db('emails').select('*');
}

const findByUser = (user) => {
    return db('emails').select('*').where('username', user);
}

const addUser = (userObj) => {
    return db('emails').insert(userObj);
}

module.exports = {
    find,
    findByUser,
    addUser
}