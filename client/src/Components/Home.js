import React, {useContext} from "react";
import { UserContext } from "../context/user";
import { Link } from 'react-router-dom';


function Home({logo}){

  const {currentUser} = useContext(UserContext);
  

  return (
    <div id="home">
       <div id="background-1"></div>
      <div id="home-top-div"> 
      
      </div>

    <section id="home-middle-section">
      <div id="middle-logo-div">
      <img id="home-logo-image" alt="PatchedIn Logo" src={logo} />
      </div>
    </section>

      <div id="home-bottom-div">
      {currentUser?<h5>Howdy, {currentUser.username}! </h5>:<h5>Become a <Link to="/signup">member</Link> or <Link to="/login">login</Link> to join the growing community of people working together and get patched in!</h5>}<h5>You can browse the ongoing projects, add tasks and contributions to projects, and start building your own projects with others.</h5>
      </div>
      <div id="background-1"></div>
    </div>
  )
}

export default Home;