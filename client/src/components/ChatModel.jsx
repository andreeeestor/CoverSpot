import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { PaperPlaneTilt, X } from '@phosphor-icons/react';

const ChatModal = ({ 
  isOpen, 
  onClose, 
  chatId, 
  userId, 
  userType, 
  recipientName 
}) => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Ensure connection only when modal is open and chatId exists
    if (!isOpen || !chatId) return;

    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    // Logging for debugging
    console.log('Chat Details:', { chatId, userId, userType });

    // Join specific chat room
    newSocket.emit('join_chat', { chatId, userId });

    // Listen for previous messages
    newSocket.on('previous_messages', (previousMessages) => {
      console.log('Previous Messages:', previousMessages);
      setMessages(previousMessages);
    });

    // Listen for new messages
    newSocket.on('receive_message', (message) => {
      console.log('Received Message:', message);
      setMessages(prev => [...prev, message]);
    });

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, [isOpen, chatId, userId]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
  const actualUserId = userId(); // Call the function to get the actual user ID
  if (newMessage.trim() && socket) {
    socket.emit('send_message', {
      chatId,
      userId: actualUserId, // Use the actual user ID
      message: newMessage,
      userType
    });
    setNewMessage('');
  }
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-96 h-[500px] rounded-lg shadow-xl flex flex-col">
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center rounded-t-lg">
          <h2 className="text-lg font-bold">{recipientName}</h2>
          <button onClick={onClose} className="hover:bg-blue-700 p-1 rounded">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.length === 0 ? (
            <div className="text-center text-gray-500">
              Nenhuma mensagem ainda
            </div>
          ) : (
            messages.map((msg, index) => (
              <div 
                key={index} 
                className={`max-w-[80%] p-2 rounded-lg 
                  ${msg.remetanteId === userId 
                    ? 'bg-blue-100 self-end ml-auto' 
                    : 'bg-gray-100 self-start mr-auto'}`}
              >
                {msg.conteudo}
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t flex">
          <input 
            type="text" 
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Digite sua mensagem..."
            className="flex-1 p-2 border rounded-l-lg"
          />
          <button 
            onClick={handleSendMessage} 
            className="bg-blue-600 text-white p-2 rounded-r-lg"
          >
            <PaperPlaneTilt size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;