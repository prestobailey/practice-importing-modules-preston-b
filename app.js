const path = require('path');
const taskManager = require('./taskManager');
const fileHandler = require('./fileHandler');

const filePath = path.join(__dirname, 'tasks.json');

// Load existing tasks
let tasks = fileHandler.loadTasks(filePath);

// Add some new tasks
taskManager.addTask(tasks, "Wake up");
taskManager.addTask(tasks, "Brush teeth");
taskManager.addTask(tasks, "Wash Face");

// List all tasks
taskManager.listTasks(tasks);

// Save updated tasks
fileHandler.saveTasks(filePath, tasks);