// pages/MessagingPage.js

import { useState } from 'react';

export default function MessagingPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { text: newMessage, sender: 'me' }]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-200 py-2 px-4 flex-none border-b border-gray-300">
        <h1 className="text-xl font-semibold">Messaging Interface</h1>
      </div>
      <div className="flex-1 flex flex-col-reverse bg-gray-100 overflow-y-auto px-4 py-3">
        {messages.map((message, index) => (
          <div key={index} className={`flex mb-2 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`bg-white rounded-lg p-3 ${message.sender === 'me' ? 'ml-auto' : 'mr-auto'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-200 py-3 px-4 flex-none border-t border-gray-300">
        <div className="flex">
          <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)} className="flex-1 bg-white border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-300" placeholder="Type your message..." />
          <button onClick={sendMessage} className="ml-3 bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Send</button>
        </div>
      </div>
    </div>
  );
}
