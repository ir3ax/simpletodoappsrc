import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = ({setStatus}) => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) { 
      toast("Please Put Any Text in the Field!"); 
      return;
    }
    const newTodos = [todo, ...todos];
    toast("Successfully Added!"); 
    setTodos(newTodos);
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)
    toast("Successfully Deleted!"); 
    setTodos(removeArr)
  }

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text || newValue.text === "")) {
      toast("Update Cancelled!");  
          return;
    }
    toast("Successfully Updated!"); 
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  useEffect(() => {
    getLocalTodos();
  },[]);


  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));    
  };
    saveLocalTodos();
  },[todos])

  

  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let todoLocal2 = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal2);
    }
  }


 const handleChangeSearch = (e) => {
   setSearch(e.target.value)
 }

 

 

  return (
     <div className="flex-1 h-screen p-7 text-2x1 font-semibold text-gray-400 xs:h-full">
      <div className="relative mx-auto pt-3 ml-11 text-gray-600 sm:ml-0">
        <input
          className={`w-1/3 h-12 px-5 pr-16 text-sm border-2 rounded-lg transition ease-in-out shadow-md shadow-slate-300 border-gray-300 bg-white focus:outline-none focus:border-light-cyan sm:w-52 lg:w-96`}
          type="search"
          name="search"
          placeholder="Search"
          onChange={handleChangeSearch}
          autoComplete='off'
          value={search}
        />
      </div>
   
       <TodoForm onSubmit={addTodo} /> 
       <div className="w-auto h-4/6 mt-10 ml-11 shadow-md shadow-slate-400 overflow-auto bg-light-white sm:ml-0 sm:overflow-auto xs:h-96 xs:overflow-auto">
         <Todo search={search} setSearch={setSearch} searchKeyWord={handleChangeSearch} setStatus={setStatus} todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
       </div>
       <ToastContainer className="font-light" />  
    </div>
    
  );
};

export default TodoList;
