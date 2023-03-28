import React, {useContext} from "react";
import { UserContext } from "../context/user";


function UserPage(){

  const {currentUser} = useContext(UserContext);

  console.log(currentUser)

  if(currentUser){

  return(
    <div id='current-user-header'>
    <h3>{currentUser.username}</h3>
    <p>Member since {currentUser.creationDate}</p>
    
    </div>
  )

  } else{
    return <p>loading...</p>
  }


}


export default UserPage;