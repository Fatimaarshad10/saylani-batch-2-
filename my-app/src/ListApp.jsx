import React, { useState } from "react";
import Home from './home'
function ListApp() {
  const [store, setStore] = useState("");
  const [task, setTask] = useState([]);

  function handle(e) {
    setStore(e.target.value);
  }
  const createList = () => {
    // console.log('click me ')
    setTask([...task, store]);
  };

  const handleDelete = (key) => {
    // ['first' , 'second' , 'third']
    // 'first' !== 'first' //remove //false
    // 'first' !== 'second' //true
    // 'first' !== 'third' // true
    setTask(task.filter((data, id) => key !== id));
  };
  const data = 10
  return (
    // <div>
    //   <h1 className="text-xl font-bold text-center">List App</h1>
    //   <label
    //     htmlFor="list"
    //     className="block text-sm font-medium leading-6 text-gray-900"
    //   >
    //     Input Field
    //   </label>
    //   <div className="relative mt-2 rounded-md shadow-sm">
    //     <input
    //       id="list"
    //       name="list"
    //       type="text"
    //       placeholder="To do list"
    //       className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    //       onChange={(e) => {
    //         handle(e);
    //       }}
    //     />
    //     <button onClick={createList} className="bg-green-600 p-2 border">
    //       Add list
    //     </button>
    //     {task.map((data, key) => (
    //       <div className="bg-black">
    //         <p className="text-white">{data}</p>

    //         <button
    //           className="bg-red-600 p-2 border"
    //           onClick={() => handleDelete(key)}
    //         >
    //           Delete
    //         </button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
    <h1>List App {data}</h1>
   
    </>
  );
}

export default ListApp;
