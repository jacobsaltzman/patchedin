import React, {useState} from 'react';


function TaskCreate({id, onAddTask}){

  const[formData, setFormData] = useState({
    difficulty: "",
    completed: null,
    description: "",
    project_id: id
  })



  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/tasks', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(r => {
    if(r.ok){
        r.json().then(data => {
          onAddTask(data)
          setFormData({
            difficulty: "",
            completed: null,
            description: "",
            project_id: id
          })
        })
    }else {
      alert(r.statusText)
    }
    })
  };


  return(
    <div id='create-task'>
      
    <form className="new-task-form" onSubmit={handleSubmit}>
      
        <h4>Task to be completed</h4>

        <label>Describe the Task</label>
        <input type="text" id="description" name="description" onChange={handleChange} value={formData.description}></input>

        
        <label>How difficult is the Task?</label>
        <select name="difficulty" id="difficulty" onChange={handleChange} value={formData.difficulty}>
          <option>Select One</option>
          <option value="na">N/A</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button type="submit">Post Task</button>
      </form>
    </div>
  )


}

export default TaskCreate;