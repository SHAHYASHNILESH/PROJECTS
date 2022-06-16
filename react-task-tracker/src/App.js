import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [show,setShow]=useState(false)
  const [task, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 4th at 12.00pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 5th at 1.30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 6th at 2.30",
      reminder: false,
    },
  ]);
  const [searchTerm,setSearchTerm]=useState("");
  const [searchResults,SetSearchResults]=useState([]);

  //addTask
  const addTask = (tasks) => {
    // console.log(task)
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...tasks};
    setTasks([...task, newTask]);
  };

  const searchHandler=(searchTerm)=>{
    setSearchTerm(searchTerm);
    if(searchTerm!=""){
      const newTask=task.filter((task)=>{
        return Object.values(task).join(" ").toLowerCase().includes(searchTerm.toLowerCase());

      });
      SetSearchResults(newTask);
    }
    else{
      SetSearchResults(task);
    }
    // console.log(searchTerm);
  };
  //Delete Task
  const delTask = (id) => {
    // console.log('delete',id)
    setTasks(task.filter((task) => task.id !== id));
  };

  //Toggle reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(
      task.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" color="red" onAdd={()=>setShow(!show)} showAdd={show} task={searchTerm.length< 1? task : searchResults} term={searchTerm} searchKeyword={searchHandler}/>
      {show && <AddTask onAdd={addTask} />}
      {task.length > 0 ? (
        <Tasks task={task} onDelete={delTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to show"
      )}

    </div>
  );
}

export default App;

//Every JSX Component requires one parent
//Just think your user interface as a bunch of components
