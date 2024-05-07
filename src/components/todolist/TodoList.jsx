import React, { useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import '../../assets/styles/TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleUpdateTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditedTask('');
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    setEditIndex(null); 
  };

  return (
    <>
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <h1 className='head2'>Todo List</h1>
      <input
        className='input_text'
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter New Task"
      />
      <button onClick={handleAddTask} style={{background: "#673ab7", 
      padding: "6px 20px", color: "#ffffff", fontWeight: "600", 
      fontSize: "16px", border: "2px solid #ffffff"}}><FaRegEdit /> Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  className='input_text'
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  placeholder='Update Task'
                />
                <button onClick={() => handleUpdateTask(index)} style={{background: "red", 
                padding: "6px 10px", color: "#ffffff", fontWeight: "600", fontSize: "16px", 
                border: "2px solid #ffffff"}}><MdOutlineSystemUpdateAlt /> Update</button>
              </>
            ) : (
              <>
                <span style={{padding: "0px 10px 0px 10px"}}>{task}</span>
                <span style={{margin: "0px 10px"}}>
                <button onClick={() => handleEditTask(index)} style={{background: "#673ab7", 
                padding: "5px 20px", color: "#ffffff", fontWeight: "600", fontSize: "16px", 
                border: "2px solid #ffffff"}}><FaRegEdit /> Edit</button>
                &nbsp;&nbsp;
                <button onClick={() => handleDeleteTask(index)} style={{background: "#673ab7", 
                padding: "5px 20px", color: "#ffffff", fontWeight: "600", fontSize: "16px", 
                border: "2px solid #ffffff"}}><RiDeleteBinLine /> Delete</button>
                </span>               
              </>
            )}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}

export default TodoList;
