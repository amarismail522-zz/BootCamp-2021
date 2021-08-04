import { Item } from "./Item";
import { ItemCollection } from "./Itemcollection";

let itemCollection: ItemCollection = new ItemCollection();
itemCollection.addTodo("first Task");
itemCollection.addTodo('eat mango');
itemCollection.taskDone(1);
itemCollection.printAll();