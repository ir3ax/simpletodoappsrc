import React, { useState } from "react";
import PositiveLogo from "../images/plus.gif";
import Category from "./Category";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const [svalue,setSvalue] = useState('');

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // })

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  
  const handleChange2 = e => {
    let selectValueHolder = e.target.value;
    if (selectValueHolder === "Category"){
      e.target.value = '';
      setSvalue(e.target.value);
    }else{
      setSvalue(e.target.value);
    }
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

  return (
      <div className="relative mt-32 ml-11 sm:ml-0 md:mt-2 sm:mt-4 xs:mt-4">
        <form onSubmit={handleSubmit}>
          <input
            className="w-1/4 h-12 px-5 pr-16 text-sm border-2 rounded-lg transition ease-in-out shadow-md shadow-slate-300  border-gray-300 bg-white focus:outline-none focus:border-light-cyan sm:w-52 lg:w-96"
            required
            type="text"
            placeholder="Input your task here...."
            value={input}
            onChange={handleChange}
            // ref={inputRef}
          ></input>
          <select
            className=" w-52 h-12 px-5 pr-16 ml-6 text-sm border-2 rounded-lg transition ease-in-out shadow-md shadow-slate-300 border-gray-300 bg-white focus:outline-none focus:border-light-cyan sm:w-52 md:ml-0 lg:w-96 xs:mt-2"
            required = "Category"
            onChange={handleChange2}
            value = {svalue}
          >
            {Category.map((category, index) => (
              <option key={index} value={category.values}>
                {category.title}
              </option>
            ))}
          </select>
          <button
            className={`absolute ml-6 bottom-0 r-0 w-12 h-12 border-4 rounded-full bg-white hover:bg-dark-purple hover:opacity-90 border-dark-green md:static xs:w-52 xs:h-auto xs:ml-0 xs:rounded-lg xs:mt-4`}
            type="submit"
          >
            <img className="m-auto" src={PositiveLogo} alt="" />
          </button>
        </form>
      </div>
  );
};

export default TodoForm;
