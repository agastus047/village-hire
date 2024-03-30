// pages/MessagingPage.js

import { useState, useRef, useEffect } from 'react';

export default function MessagingPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [contacts, setContacts] = useState(['Contact 1', 'Contact 2', 'Contact 3']); // Sample contacts
  const messageRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom when messages change
    messageRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { text: newMessage, sender: 'me' }]); // Prepend new message to the array
    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents line break in textarea
      sendMessage();
    }
  };

  const handleContactClick = (contact) => {
    console.log('Clicked on contact:', contact);
    // Implement logic to load messages with the selected contact
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-gray-200 w-1/4 p-4">
        <h2 className="text-lg font-semibold mb-4">Contacts</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index} className="cursor-pointer hover:bg-gray-300 rounded p-2" onClick={() => handleContactClick(contact)}>
              {contact}
            </li>
          ))}
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="bg-blue-100 py-2 px-4 flex-none border-b border-blue-200">
          <h1 className="text-xl font-semibold text-blue-700">Messaging Interface</h1>
        </div>
        <div className="flex-1 flex flex-col bg-blue-100 overflow-y-auto px-4 py-3">
          {messages.map((message, index) => (
            <div key={index} className={`mb-2 ${message.sender === 'me' ? 'text-right' : 'text-left'}`}>
              <div className={`bg-white rounded-lg p-3 max-w-xs ${message.sender === 'me' ? 'ml-auto' : 'mr-auto'}`}>
                {message.text}
              </div>
              <div className="text-xs text-gray-500 mt-1">{message.sender === 'me' ? 'You' : 'Other Person'}</div>
            </div>
          ))}
          <div ref={messageRef}></div>
        </div>
        <div className="bg-blue-100 py-3 px-4 flex-none border-t border-blue-200">
          <div className="flex">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-white border border-blue-200 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 resize-none"
              placeholder="Type your message..."
            />
            <button onClick={sendMessage} className="ml-3 bg-blue-500 text-white rounded-full py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}