import Todo from "../model/Todo";

const todoController={
    getAllTodos:async(req,res)=>{
        try {
            const todos = await Todo.find();
            return res.status(200).json(todos);

        } catch (error) {
           return res.status(500).send('internal server error')
        }

    },
    createTodo:async(req,res)=>{
        try{
            const newTodo = new Todo(req.body);
            const todos = await newTodo.save();
            return res.status(200).json(todos);

        }catch(error)
        {
            return res.status(500).send('internal server error');
        }
    },
    getTodo:async(req,res)=>{
        try{
        const id = req.params.id;
        const todo = await Todo.findById(id);
        if(todo)
        {
            return res.status(200).json(todo);
        }
        return res.status(404).send("No Todo Found!")
    }catch(e){
        return res.status(500).send('Internal Server Error!');
    }
    },
    updateTodo:async(req,res)=>
    {
        try{
            const id = req.params.id;
            
            const updatedTodo = await Todo.findByIdAndUpdate(id,req.body);
            return res.status(200).json(updatedTodo);

        }catch(e){
            return res.status(500).send('Internal Server Error');
        }
    },
    deleteTodo:async(req,res)=>{
        try{
            const id = req.params.id;
            const deletedTodo= await Todo.findByIdAndDelete(id);
            if(deletedTodo)
            {
                return res.status(204).json({status:"deleted Successfully",todo:deletedTodo});
            }
            return res.status(404).send('No such Todo Found')
        }catch(e){
            return res.status(500).send('Internal Server Error')
        }
    }

}

export default todoController;