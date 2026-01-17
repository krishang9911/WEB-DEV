// Create an array named tasks with initial values "Wake up" and
// "Eat breakfast".
// 1. Use push() to add the task "Go to work" to the end of the array. Log the
// array.
// 2. Use pop() to remove the last task. Log the removed task and the final state
// of the array.

// This is the task we need to perform

const tasks = ["Wake up", "Eat breakfast"]
console.log("Inital tasks:", tasks)  // Initial tasks: ['Wake up', 'Eat breakfast']

// Adding "Go to work" to the end
tasks.push("Go to work")
console.log("After push:", tasks)  // After push: ['Wake up', 'Eat breakfast', 'Go to work']

// Removing the last task
const removedTask = tasks.pop()
console.log("Removed task:", removedTask) // Removed task: Go to work
console.log("After pop:", tasks) // After pop: ['Wake up', 'Eat breakfast']