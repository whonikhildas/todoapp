import { useState } from 'react';
import './App.css';

function App() {
  
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [maintask, setMaintask] = useState([]);

  const submitHandler=(e)=>{
    e.preventDefault()
    setMaintask([...maintask, {title,desc}]);


    setTitle("");
    setDesc("");
  }
  
  const deleteHandler = (i)=> {
    let copytask = [...maintask]
    copytask.splice(i,1)
    setMaintask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>
  
  if (maintask.length>0) {
    renderTask =  maintask.map((t,i)=> {
      return (
      <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex justify-evenly  w-2/3'>
        <h2 className='text-2xl font-semibold'>{t.title}</h2>
        <p className='text-lg font-medium'>{t.desc}</p>
      </div>
      <button className='bg-red-400 text-white px-4 py-2 rounded font-bold' 
      onClick={()=>{
        deleteHandler(i)}}
      >Delete</button>
      </li>
      );
    });
  }

  return (
    <>
    <h1 className='bg-black text-white text-3xl text-center font-bold'>Todo List</h1>
    <form className='text-center ' onSubmit={submitHandler}>
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Task Here'
      value={title}
      onChange= {(e)=>
        setTitle(e.target.value)}
      />
      <input type="text" className='text-2xl border-zinc-800 border-2 m-5 px-4 py-2' placeholder='Enter Description Here'
      value={desc}
      onChange= {(e)=>
        setDesc(e.target.value)}
      />
      <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded '>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-gray-200'>
        <ul>
          {renderTask}
        </ul>
    </div>
    </>
  );
}

export default App;

