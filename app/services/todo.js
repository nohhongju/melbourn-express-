import db from '../models/index.js'

export default function TodoService() {
    const Todo = db.todo
    return {
        addTodo(req, _res) {
            console.log(' ### 진행 4: 노드서버에 진입함 ' + JSON.stringify(req.body))
            new Todo(req.body).save(() => {
                return 'ok'
            })
        },
        getTodo(req, res) {
            Todo
                .find()
                .exec((err, todos) => {
                    if (err) 
                        return res
                            .status(400)
                            .send(err)
                    return todos
                })
        }
    } // return
}