import React, { useState } from "react";
import arrow from "../images/arrow-6.gif";
import Logo from "../images/logo.gif";
import HomeLogo from "../images/home2.png";
import Category from "./Category";
import TodoList from "./TodoList";
import { Link } from 'react-router-dom';

const DashHolder = () => {
  return <Sidebar />;
};

const Sidebar = ({todos}) => {
  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState('all');

const statusHandler = (e) => {
   setStatus(e.target.value);
}

  return (
    <div className={`flex animate-slide xs:h-full`}>
      <div
        className={`${
          open ? "w-72" : "w-24"
        } h-screen relative p-5 pt-8 bg-dark-purple text-white duration-300`}
      >
        <img
          className={`absolute -right-3 top-10 w-8 cursor-pointer rounded-full bg-white border-2 border-light-cyan rotate-90 ${
            !open && "rotate-0"
          }`}
          src={arrow}
          alt="Sidebar Arrow"
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img src={Logo} alt="Logo" />

          <h1
            className={`xs:hidden text-white origin-left font-serif text-2xl line-through decoration-dark-green ${
              !open && "hidden"
            }`}
          >
            A g e n d a
          </h1>
        </div>

        <Link
          to="/simpletodoapp"
          className={`flex gap-x-4 p-2 mt-7 text-gray-300 text-lg  items-center  cursor-pointer  hover:bg-light-cyan hover:bg-opacity-50 active:bg-light-cyan rounded`}
        >
          <img src={HomeLogo} alt="" />
          <span className={`xs:hidden ${!open && "hidden"}`}>Home</span>
        </Link>
         <div className="mt-16">
        {Category.map((category, index) => (

          
          
          <button  key={index} className={`sideBarButton flex gap-x-4 p-2 mt-7 w-full text-gray-300 text-m items-center cursor-pointer hover:bg-light-cyan hover:bg-opacity-50 active:bg-light-cyan active:bg-opacity-50 rounded`} onClick={statusHandler} value={category.title}>
            <img src={require(`../images/${category.src}.png`)} alt="" />
             <label htmlFor="sideBarButton" className={`xs:hidden text-gray-300 text-lg cursor-pointer ${
              !open && "hidden"
            }`}>{category.title}</label>
          </button>

        ))}
      </div>
      </div>
      <TodoList setStatus={status}/>
     
    </div>
  );
};

export default DashHolder;
