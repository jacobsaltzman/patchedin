import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user';




function ProjectCreate({onAddProject, setErrors}){

  const {currentUser} = useContext(UserContext);
  let id = null;
  if(currentUser){
    id = currentUser.id
  }
  const nav = useNavigate();
  const[formData, setFormData] = useState({
    title: "",
    progress: 0,
    category: "",
    description: "",
    user_id: id
  })

  console.log(id)

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch('/projects', {
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
          onAddProject(data)
          setErrors([])
          setFormData({
            title: "",
            progress: 0,
            category: "",
            description: "",
            user_id: currentUser.id
          })
          nav(`/projects/${data.id}`)
        })
    }else {
      r.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
    }
    })
  };


  return(
    <div id='create-project'>
      
    <form classtitle="new-project-form" onSubmit={handleSubmit}>
      
        <h4>Create A New Project</h4>

        <label> Give A Title To The Project</label>
        <input type="text" id="title" name="title" onChange={handleChange} value={formData.title}/>

        <label>What Type Of Project Is It?</label>
        <select name="category" id="category" onChange={handleChange} value={formData.category}>
          <option>Select One</option>
          <option value="tech">Tech</option>
          <option value="creative">Creative</option>
          <option value="app">App Build</option>
          <option value="general">General</option>
          <option value="career">Career</option>
          <option value="social">Social</option>
          <option value="other">Other</option>
        </select>

        <label>Write A Description Of The Concept</label>
        <input type="text" id="description" name="description" onChange={handleChange} value={formData.description}></input>

        <label>What Percentage Of The Project Is Already Complete?</label>
        <input type="number" id="progress" name="progress" onChange={handleChange} value={formData.progress}/>

        <button type="submit">Start Project</button>
      </form>
    </div>
  )


}

export default ProjectCreate;