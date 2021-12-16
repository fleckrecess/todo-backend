const { todos } = require('../models/todos');
const { todos } = require('../models/todos');
const todos_get_all = (req, res) => {
    todos.find().sort({ createdAt: -1 })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.send(`There is an error in the server while loading projects`);
        });
        res.send('Get all todos');
}

module.exports = { todos_get_all }

