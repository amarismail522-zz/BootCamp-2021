"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Itemcollection_1 = require("./Itemcollection");
let itemCollection = new Itemcollection_1.ItemCollection();
itemCollection.addTodo("first Task");
itemCollection.addTodo('eat mango');
itemCollection.taskDone(1);
itemCollection.printAll();
