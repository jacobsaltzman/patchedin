import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/user";


function TaskPage(){

  const {taskId} = useParams();
  const { currentUser } = useContext(UserContext);
  const [messages, setMessages] = useState([]); 
  const [inputValue, setInputValue] = useState(""); 


  useEffect(() => {
    fetch(`/tasks/${taskId}`)
      .then((r) => r.json())
      .then((data) => setMessages(data.contributions))
  }, [taskId])

  const handleSubmit = (event) => {
    event.preventDefault();  
    if (inputValue !== "") { 
      
      const messageData = {
        user_id: currentUser.id,
        task_id: taskId,
        report: inputValue,
      };

      fetch("/contributions", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify(messageData)
      })
          .then((r) => r.json())
          .then((data) => {
            setMessages([...messages, { report: data.report, username: currentUser.username }]);
            setInputValue(""); 
            console.log( data )
          });
          
      };
  };



  return (
    <div className="chat-page">
      <div className="message-container">
      {messages.slice(0, 30).reverse().map((message, index) => (
          <div className="message" key={index}>
          <span className="username">{message.username}: </span>
          <span className="text">{message.report}</span>
  </div>
))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          className="input-field"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  )
}

export default TaskPage;