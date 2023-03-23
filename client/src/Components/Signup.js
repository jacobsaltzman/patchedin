import React, {useState, useContext} from 'react';
import { UserContext } from "../context/user";
import { Link, useNavigate } from 'react-router-dom';


function SignUp() {

  const {setCurrentUser} = useContext(UserContext);

    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const nav = useNavigate();

    function onSubmit(e){
        e.preventDefault()

        fetch(`/signup`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
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
              r.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
       
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
      <div className='signup-form'> 
        <div id='sign-up'>
        <h4>Sign Up To Be PatchedIn</h4>
        <form id="sign-up-form" onSubmit={onSubmit}>
          <label>
          Username:
          </label>  
          <input type='text' name='username' value={formData.username} onChange={handleChange} />
       
       
        <label>
         Password:
         </label>
        <input type='password' name='password' value={formData.password} onChange={handleChange} />
        
       
        <button type='submit'>Join!</button>
      </form>
      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
      <h6>Already PatchedIn? <Link to="/login">Login</Link></h6>

        </div>
      </div>
    )
}

export default SignUp