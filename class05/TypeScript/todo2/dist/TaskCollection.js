"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task_1 = require("./Task");
class TaskCollection {
    constructor(tasks = []) {
        this.tasks = tasks;
        this.nextId = 1;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new Task_1.Task(this.nextId, task, false);
        this.nextId++;
        this.tasks.push(item);
        this.itemMap.set(this.nextId, new Task_1.Task(this.nextId, task));
    }
    printAll() {
        this.tasks;
    }
}
exports.TaskCollection = TaskCollection;
