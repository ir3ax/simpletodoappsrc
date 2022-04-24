import React, {useState, useEffect} from 'react';
import EditLogo from '../images/edit.gif';
import DeleteLogo from '../images/delete.gif';
import TodoForm2 from './TodoForm2';


const Todo = ({todos, completeTodo, removeTodo, updateTodo, setStatus, search, setSearch, searchKeyWord}) => {
    
    const [filteredTodo, setFilteredTodo] = useState([]);
    const [result, setResult] = useState([]);
     const [edit, setEdit] = useState({
        id:null,
        value:'',
        svalue:'',
    });

     const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: '',
            svalue: '',
        })
        searchKeyWord = ''
    }

 useEffect(() => {
   const filterHandler = () => {
    switch (setStatus){
         case 'Category':
            setFilteredTodo(todos);
            break;
        case 'Work':
            setFilteredTodo(todos.filter(todo => todo.stext === "Work"));
            break;
        case 'Fitness':
            setFilteredTodo(todos.filter(todo => todo.stext === "Fitness"));
            break;
        case 'School':
            setFilteredTodo(todos.filter(todo => todo.stext === "School"));
        break;
        case 'Food':
            setFilteredTodo(todos.filter(todo => todo.stext === "Food"));
        break;
        case 'Hygiene':
            setFilteredTodo(todos.filter(todo => todo.stext === "Hygiene"));
        break;
        default:
            setFilteredTodo(todos);
            break;
    }
  }


const searchHandler = () => {
   if(document.activeElement === searchKeyWord.current){
       setResult(filteredTodo)
   }
   else{

        const newCategoryList = filteredTodo.filter((e) => {
            return Object.values(e).join(" ").toLowerCase().includes(search.toLowerCase())
       })
      setResult(newCategoryList)
   }
}
         filterHandler()
        searchHandler()
    },[todos,setStatus,search,searchKeyWord]);




if(edit.id) {
        return <TodoForm2 filteredTodo={result} edit={edit} onSubmit={submitUpdate} />
    }


const Modal = ({val}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
    <img onClick={() => setShowModal(true)} className='p-1 rounded-full border-4 border-dark-green cursor-pointer' src={DeleteLogo} alt="" />
      {showModal ? (
        <>
          <div className="flex m-auto mb-11 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="p-6 pt-0 text-center">
                    <svg className="mx-auto mt-4 mb-4 w-14 h-14 text-gray-400 dark:text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this task?</h3>
                </div>
                <div className="flex items-center space-x-2 justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase text-sm px-6 py-3 rounded shadow-lg outline-none focus:outline-none mr-1 mb-1 hover:bg-red-400 hover:text-white"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-dark-green active:bg-light-cyan hover:bg-light-cyan hover:text-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => removeTodo(val)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

  return ((setStatus !== null && search === "") ? filteredTodo : todos || (setStatus === null && search !== "") ? result : todos || (setStatus !== null && search !== "") ? result : todos).map((val, index) => (
    <div className={`flex odd:bg-slate-100 even:bg-slate-200 m-auto items-center justify-evenly text-lg sm:flex-col`} key={index}>
         <div className='flex m-auto w-1/4 h-20 items-center text-gray-500 justify-center border-2 border-light-cyan sm:w-full sm:mt-4' key={val.id} onClick={() => completeTodo(val.id)}>
            {val.stext}
        </div>
        <div className='flex m-auto w-2/4 h-20 items-center text-gray-500  justify-center border-2 break-all overflow-y-auto border-light-cyan sm:w-full'>
            {val.text}   
        </div>
        <div className="flex m-auto w-1/4 h-20 items-center justify-center border-2 border-light-cyan sm:w-full">      
            <img onClick={() => setEdit({id: val.id, value: val.text, svalue: val.stext})} className='mr-4 p-1 rounded-full border-4 border-dark-green cursor-pointer' src={EditLogo} alt="" />
            <Modal val={val.id} />
        </div>
        
    </div>
  ))
  
}

export default Todo