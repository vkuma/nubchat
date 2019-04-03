import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';
import PropTypes from 'prop-types'

import ChatInput from './ChatInput';
import ChatHistory from './ChatHistory';
import PubNubReact from 'pubnub-react';

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.pubnub = new PubNubReact({
            subscribeKey: "sub-c-fa0632e2-807f-11e8-b5c5-52ab1fb946f2",
            publishKey: "pub-c-7f537b3b-b8c4-43fd-ab54-4bb342f1bdef",
            secret_key: "sec-c-YzNlZTBmYjMtZjcwYy00YjRlLThlNmQtZGI2MmYxODI0MDlh",
            ssl: true,
            logVerbosity: true
        });
        this.pubnub.init(this);
        this.fetchHistory();
    }

    state = {
        userID: Math.round(Math.random() * 1000000).toString(),
        history: [],
        pubnub: undefined
    };

    componentWillMount() {
        this.pubnub.subscribe({
            channels: ['ReactChat']
        });

        // this.pubnub.getMessage('ReactChat', (message) => {
        //   console.log(message);
        //
        // });

    }

    componentDidMount() {
        this.pubnub.getMessage('ReactChat', (message) => {
            this.setState({history: this.state.history.concat(message)})
        });

    }

    render() {
        const { sendMessage, state } = this;
        return (
            <div className="ChatWindow">
                <ChatHistory history={ state.history } />
                <ChatInput userID={ state.userID } sendMessage={ this.sendMessage } />
            </div>
        );
    }

    sendMessage = (message) => {
        this.pubnub.publish({
            channel: 'ReactChat',
            message: message,
        });
        // console.log('sendMessage', message);
    }

    fetchHistory = () => {
        const { props } = this;
        this.pubnub.history({
            channel: 'ReactChat',
            count: 15,
            start: props.lastMessageTimestamp,
            callback: (data) => {
                //  data is Array(3), where index 0 is an array of messages
                // and index 1 and 2 are start and end dates of the messages
                props.addHistory(data[0], data[1]);
            },
        });
    }

    addHistory(){

    }
}

export default ChatWindow;
