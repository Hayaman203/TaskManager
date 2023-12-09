const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

//router
app.get('/hello', (req, res) => {
    res.send('task manager');
});

app.use('/api/v1/tasks',tasks);

const port = 3000;
app.listen(port, console.log(`server dang chay tren port ${port}...`));