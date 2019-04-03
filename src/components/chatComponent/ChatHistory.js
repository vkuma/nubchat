import * as React from 'react';
import PropTypes from 'prop-types'

class ChatHistory extends React.Component {

    static propTypes = {
        history: PropTypes.array
    };

    render() {
        const { props } = this; // same as `const props = this.props;`
        console.log("History: ")
        console.log(Object.keys(props.history))
        return (
            (<ul className="collection">
                { props.history.map((key, obj) => {
                    const imgURL = '//robohash.org/' + key.message.Who + '?set=set2&bgset=bg2&size=70x70';
                    const messageDate = new Date(key.message.When);
                    const messageDateTime = messageDate.toLocaleDateString() +
                        ' at ' + messageDate.toLocaleTimeString();
                    return (
                        <li className="collection-item avatar" key={ key.message.When }>
                            <img src={ imgURL } alt={ key.message.Who } className="circle" />
                            <span className="title">Anonymous robot #{ key.message.Who }</span>
                            <p>
                                <i className="prefix mdi-action-alarm" />
                                <span className="message-date">{ messageDateTime }</span>
                                <br />
                                <span>{ key.message.What }</span>
                            </p>
                        </li>
                    );
                }) }
            </ul>));
    }
}



export default ChatHistory;
