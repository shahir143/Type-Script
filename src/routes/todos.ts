import {Router} from 'express';
import {Todo} from '../../models/todo';

type RequestBody ={ text:string}
type RequestParams={ todoId:string}
let todos:Todo[]=[];

const router=Router();

router.get('/', (req, res) => {
res.status(200).json({todos:todos});
})
router.post('/todo',(req, res) => {
    const body =req.body as RequestBody
    const newTodo:Todo={
        id:new Date().toISOString(),
        text:body.text
    }
    todos.push(newTodo);
    res.status(200).json({message:"sucessfully added",todos:todos});

});
router.put('/todo/:todoId',(req, res) => {
    const tid=req.params as RequestParams;
    const body =req.body as RequestBody
    const todoIndex=todos.findIndex(todoitem =>todoitem.id === tid.todoId);
    if(todoIndex>=0){
        todos[todoIndex]={ id:todos[todoIndex].id,text:req.body.text}
        res.status(200).json({message:"successfull "});

    }
        res.status(400).json({message:"could not find this id"});
});
router.delete('/todo/:todoId',(req, res) => {
    const params=req.params as RequestParams;
    const todoIndex=todos.filter(todo =>todo.id! === params.todoId);
    res.status(200).json({message:"successfull Deleted "});
});

export default router;