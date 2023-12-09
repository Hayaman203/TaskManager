const getAllTasks = (req, res) => {
    res.send('get all tasks');
}

const createTask = (req, res) => {
    res.json(req.body);
}

const getTasks = (req, res) => {
    res.json({id:req.params.id});
}

const updateTasks = (req, res) => {
    res.send('update tasks');
}

const deleteTasks = (req, res) => {
    res.send('delete tasks');
}

module.exports = {
    getAllTasks,
    createTask,
    getTasks,
    updateTasks,
    deleteTasks,
}