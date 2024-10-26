// components/ChatPopup.js
import React, { useState } from 'react';

const ChatPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<string[]>([]);
    const [inputMessage, setInputMessage] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            setMessages([...messages, inputMessage]);
            setInputMessage('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div>
            <button 
                onClick={toggleChat} 
                className="fixed bottom-5 right-5 px-6 py-3 text-lg font-bold text-white bg-gray-500 border-2 border-gray-600 rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 ease-in-out"
            >
                <span className="relative inline-block">
                    <span className="relative z-10">Chat</span>
                    <span className="absolute inset-0 bg-gray-400 opacity-50 blur-sm rounded-full"></span>
                </span>
            </button>
            {isOpen && (
                <div className="fixed bottom-20 right-5 w-80 h-96 border border-gray-300 rounded-lg shadow-lg bg-white z-50 flex flex-col">
                    <div className="flex justify-between items-center p-3 border-b border-gray-300">
                        <h2 className="text-lg font-semibold">Chat</h2>
                        <button onClick={toggleChat} className="text-gray-500 hover:text-gray-700">X</button>
                    </div>
                    <div className="flex-grow p-3 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className="mb-2">
                                <span className="bg-gray-200 rounded-lg px-3 py-2 inline-block">{message}</span>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 border-t border-gray-300 flex">
                        <input
                            type="text"
                            value={inputMessage}
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            placeholder="Digite sua mensagem..."
                            className="flex-grow border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-gray-500 text-white px-4 py-2 rounded-r-lg hover:bg-gray-600 transition-colors duration-300"
                        >
                            Enviar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatPopup;
