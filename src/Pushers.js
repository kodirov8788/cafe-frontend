import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import axios from 'axios';
import MP3 from "./mp33.mp3"
function Pushers() {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const pusher = new Pusher('4aed833cb4657d97c07e', {
            cluster: 'ap2',
            encrypted: true,
        });

        const channel = pusher.subscribe('chat-channel');
        channel.bind('new-message', (data) => {
            setMessages([...messages, data]);
            playNotificationSound();
        });

        return () => {
            channel.unbind_all();
            channel.unsubscribe();

        };
    }, [messages]);
    const playNotificationSound = () => {
        const audio = new Audio(MP3);
        audio.play();
    }
    const sendMessage = async () => {
        if (message.trim() !== '' && user.trim() !== '') {
            await axios.post("http://localhost:8000/messages", { message, user })
                .then(res => console.log(res))
                .catch(error => console.log(error))
        } else {
            console.log("error")
        }
    }

    return (
        <div className="App">
            <div className="chat-container">
                <div className="messages">
                    {messages.map((msg, index) => (
                        <div key={index} className="message">
                            <span className="user">{msg.user}:</span> {msg.message}
                        </div>
                    ))}
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <button onClick={() => sendMessage()}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Pushers;
