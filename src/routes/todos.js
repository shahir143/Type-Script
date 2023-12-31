"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ message: "sucessfully added", todos: todos });
});
router.put('/todo/:todoId', (req, res) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todo => todo.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
        res.status(200).json({ message: "successfull " });
    }
    res.status(400).json({ message: "could not find this id" });
});
router.delete('/todo/:todoId', (req, res) => {
    const todoIndex = todos.filter(todo => todo.id === req.params.todoId);
    res.status(200).json({ message: "successfull Deleted " });
});
exports.default = router;
