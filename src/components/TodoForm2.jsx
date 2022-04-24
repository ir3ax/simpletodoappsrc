import React, { useState, useEffect, useRef } from "react";
import Category from "./Category";
import EditLogo from '../images/edit.gif';
import BackLogo from '../images/back.gif';


const TodoForm2 = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [svalue,setSvalue] = useState(props.edit ? props.edit.svalue : '');

   const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  
  const handleChange2 = e => {
    setSvalue(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      stext: svalue
    });
    setInput("");
    setSvalue('');
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: props.text,
      stext: props.stext,
    });
    setInput("");
    setSvalue('');
  }

  return (
    <div className="relative m-4 sm:ml-0 md:mt-2 sm:mt-4 xs:mt-4">
      <form onSubmit={handleSubmit2}>
        <button
            className={` mb-4 rounded-full border-4 border-dark-green cursor-pointer rotate-180 hover:bg-dark-purple hover:opacity-90 border-dark-green md:static xs:w-52 xs:h-auto xs:ml-0 xs:rounded-lg xs:mt-4`}
            type="submit"
          >
            <img className="m-auto" src={BackLogo} alt="" />
          </button>
      </form>
        <form onSubmit={handleSubmit} className="ml-106" >
           
          <input
           className="w-1/4 h-12 px-5 pr-16 text-sm border-2 rounded-lg transition ease-in-out shadow-md shadow-slate-300  border-gray-300 bg-white focus:outline-none focus:border-light-cyan sm:w-52 lg:w-96"
            required
            type="text"
            placeholder="Type your task here...."
            value={input}
            onChange={handleChange}
             ref={inputRef}
          ></input>
          <select
            className=" w-52 h-12 px-5 pr-16 ml-6 text-sm border-2 rounded-lg transition ease-in-out shadow-md shadow-slate-300 border-gray-300 bg-white focus:outline-none focus:border-light-cyan sm:w-52 md:ml-0 lg:w-96 xs:mt-2"
            required
            onChange={handleChange2}
            value = {svalue}
          >
            {Category.map((category, index2) => (
              <option key={index2} value={category.values}>
                {category.title}
              </option>
            ))}
          </select>
          <button
            className={`absolute ml-6 bottom-0 r-0 w-12 h-12 border-4 rounded-full bg-white hover:bg-dark-purple hover:opacity-90 border-dark-green md:static xs:w-52 xs:h-auto xs:ml-0 xs:rounded-lg xs:mt-4`}
            type="submit"
          >
            <img className="m-auto" src={EditLogo} alt="" />
          </button>
        </form>
      </div>
  )
}

export default TodoForm2