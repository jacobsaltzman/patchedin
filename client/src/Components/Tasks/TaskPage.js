import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/user";

const ws = new WebSocket("ws://localhost:3000/cable");

function TaskPage(){

  const {taskId} = useParams();
  const { currentUser } = useContext(UserContext);
  const [messages, setMessages] = useState([]); 
  const [guid, setGuid] = useState("");
  const [inputValue, setInputValue] = useState(""); 

  ws.onopen = () => {
    console.log("Connected to websocket server");
    setGuid(Math.random().toString(36).substring(2, 15));

    ws.send(
      JSON.stringify({
        command: "subscribe",
        identifier: JSON.stringify({
          id: guid,
          channel: "MessagesChannel",
        }),
      })
    );
  };

  ws.onmessage = (e) => {
    const data = JSON.parse(e.data);
    if (data.type === "ping") return;
    if (data.type === "welcome") return;
    if (data.type === "confirm_subscription") return;

    console.log(data)
    setMessages([...messages, { report: data.message.report, username: data.message.username }]);
  };

  ws.onerror = (error) => {
    console.error("WebSocket error:", error);
  };

  useEffect(() => {
    fetch(`/tasks/${taskId}`)
      .then((r) => r.json())
      .then((data) => setMessages(data.contributions))
  }, [taskId])


  const handleSubmit = async (event) => {
    event.preventDefault();  
    if (inputValue !== "") { 
      
      const messageData = {
        user_id: currentUser.id,
        task_id: taskId,
        report: inputValue,
      };

      await fetch("/contributions", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify(messageData)
      })
          .then((r) => r.json())
          .then((data) => {
            //setMessages([...messages, { report: data.report, username: currentUser.username }]);
            setInputValue(""); 
          });
          
      };
  };



  return (
    <div className="chat-page">
      <p>Make your contribution by entering a message below. Discuss plans, helpful insights, and actions with others working on the task, too.</p>
      <div className="message-container">
      {messages.slice().reverse().map((message, index) => (
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