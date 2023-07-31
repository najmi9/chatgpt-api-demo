import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async (event) => {
    event.preventDefault();

    setChatHistory([...chatHistory, { message, type: 'user' }]);
    setMessage('');

    const response = await axios.post('http://localhost:5000/api/chat', { message });
    setChatHistory([...chatHistory, { message, type: 'user' }, { message: response.data.message, type: 'bot' }]);
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <div>
        {chatHistory.map((chat, index) => (
          <div key={index} className={chat.type}>
            {chat.message}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
