import React, {useState, useContext} from 'react';
import { UserContext } from "../context/user";
import { Link, useNavigate } from 'react-router-dom';



function Login(){

  const {setCurrentUser} = useContext(UserContext);

  const nav = useNavigate();

  const [formData, setFormData] = useState({
    username:'',
    password:''
})
  const [errors, setErrors] = useState([])

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  }

  function handleSubmit(e){
    e.preventDefault()

    fetch(`/login`,{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then(r => {
      if(r.ok){
          r.json().then(data => {
            setCurrentUser(data)
            setErrors([])
            nav(`/users/${data.id}`)
            })
        }else {
          setErrors(r.statusText + ": Invalid Username or Password");
            console.log(r)
        }
        setFormData({
          username:'',
          password:''
        });
        
    })
   
}


  return(
    <div className="login">
      <div>
        <h4>Sign In</h4>
        {errors? <h6 className='errors'>{errors}</h6>:null}
          <form id="sign-in-form" onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type='text' id='username-input' name='username' onChange={handleChange} value={formData.username}></input>
            <label>Password:</label>
            <input type='password' id='password-input' name='password' onChange={handleChange}  value={formData.password}></input>
            <button type="submit">Submit</button>
          </form>
          <h6>Not a member? <Link to="/signup">Sign Up!</Link> </h6>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Login;