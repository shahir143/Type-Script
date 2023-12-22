import express from 'express';
import bodyParser from 'body-parser';
import todosRouter from './routes/todos'
const app = express();

app.use(todosRouter)
app.use(bodyParser.json);

app.listen(3000); 