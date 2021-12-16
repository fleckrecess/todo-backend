console.log('Dont Fuck Around !');
//indeImport MongoDB module
const mongoose = require('mongoose');
// Connection String to MongoDB
const dbURI = 'mongodb+srv://fleck:bullshit123@cluster0.hhczs.mongodb.net/proj-mng?retryWrites=true&w=majority';

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Database is connected');
    })
    .catch((err) => console.log(err));

    const express = require('express');
const cors = require('cors');
const { json } = require('express');
const todoSchema = require('./routes/todosRoutes');

const app = express();
const PORT = 8080;

// Apply CORS policy
app.use(cors())

// "Hello from homepage" is shown  when visiting http://localhost:8080/
app.get('/', (req, res) => res.send('Dont Fuck Around !!!.'));

// Assign the PORT to our app
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

app.use('/todos', todoSchema);


