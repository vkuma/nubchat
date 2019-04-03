// import logo from '../logo.svg';
// // import '../App.css';
// import PropTypes from 'prop-types'
//
// import ChatInput from '../components/chatComponent/ChatInput';
// import ChatHistory from '../components/chatComponent/ChatHistory';
// import PubNubReact from 'pubnub-react';
import React, { Component } from 'react';
import ChatWindow from '../components/chatComponent/ChatWindow';
import Header from '../components/headerComponent/Header';
import jQuery from 'jquery'


class App extends React.Component {

  render() {
    return (
        <div className="App">
            <Header/>
            {/*<div className="container">*/}
                {/*<Header/>*/}
            {/*</div>*/}
            {/*<div className="container">*/}
                {/*<ChatWindow/>*/}
            {/*</div>*/}
        </div>
    );
  }

}

export default App;
