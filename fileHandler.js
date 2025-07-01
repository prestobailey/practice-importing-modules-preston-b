const fs = require('fs');

function saveTasks(filePath, tasks) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
    console.log("Tasks saved successfully.");
  } catch (err) {
    console.error("Failed to save tasks:", err.message);
  }
}

function loadTasks(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    } else {
      return [];
    }
  } catch (err) {
    console.error("Failed to load tasks:", err.message);
    return [];
  }
}

module.exports = { saveTasks, loadTasks };