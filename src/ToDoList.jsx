import { useState } from "react";
import './ToDoList.css'

function ToDoListComponent(){

    const [taskList, SetTaskList] = useState(["Default task"])
    const [newTask, SetNewTask] = useState("")

    function handleTaskInput(event){
        SetNewTask(t => event.target.value)
    }

    function addTask(){
        if(newTask.trim() !== ""){
            SetTaskList( list => [...list, newTask])
            SetNewTask( t => "")
        }
    }

    function markDone(index){
        SetTaskList( list => ( list.map( (ele, i) => (i===index && (ele.search("✅")===-1) )? ele+="✅" : ele ) ) )
    }

    function deleteTask(index){
        SetTaskList( list => (list.filter((ele, i) => (i !== index))) )
    }

    function moveTaskUp(index){
        if(index>0){
            //not adding ; will break the code here
            const updatedTaskList = [...taskList];
            [updatedTaskList[index] , updatedTaskList[index-1]] = 
            [updatedTaskList[index-1] , updatedTaskList[index]] ;
            SetTaskList(list => (updatedTaskList));
        }
    }

    function moveTaskDown(index){
        if(index<taskList.length-1){
            //not adding ; will break the code here
            const updatedTaskList = [...taskList];
            [updatedTaskList[index] , updatedTaskList[index+1]] = 
            [updatedTaskList[index+1] , updatedTaskList[index]] ;
            SetTaskList(list => (updatedTaskList));
        }
    }

    return (
        <div id="TaskBox">
            <h1>Add, delete, re-order tasks, at your leisure!</h1>
            <input id="TaskInput" type="text" value={newTask} placeholder="Enter the task and click Submit"
                    onChange={handleTaskInput}>
            </input>
            <button id="SubmitButton" onClick={addTask}>Submit</button>

            <ol>
                {taskList.map((ele, index) => 
                    <li className="li" key={index}> 
                        <span className="text">{ele}</span>
                        <button className="taskButton" onClick={() => deleteTask(index)}>
                            🗑️
                        </button>
                        <button className="taskButton" onClick={() => markDone(index)}>
                            ✅
                        </button>
                        <button className="taskButton" onClick={() => moveTaskUp(index)}>
                            ☝️
                        </button>
                        <button className="taskButton" onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoListComponent
