import React, { Component } from 'react';

import './chat.css';

class Chat extends Component {
  render() {
    return (
      <div className="container">
        <input class="chat-box" type="text" placeholder="Type here to chat..." />
        <button>Send</button>
      </div>
    );
  }
}

export default Chat;
