function addTask(tasks, task) {
  if (typeof task !== "string" || task.trim() === "") {
    console.log("Cannot add an empty task.");
    return;
  }
  tasks.push(task.trim());
}

function listTasks(tasks) {
    console.log("Your Tasks:");
    tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
}

module.exports = { addTask, listTasks };