import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/message';
import MessageItem  from "./MessageItem";

class MessagesList extends Component{
    componentDidMount(){
        this.props.fetchMessages();
    }
    render(){
        const {messages, removeMessage, currentUser} = this.props;
        let messageList = messages.map((m=>
        <MessageItem 
            text={m.text}
            date={m.createAt}
            key={m._id}
            username={m.user.username}
            profileImageUrl={m.user.profileImageUrl}
            remove={removeMessage.bind(this, m.user._id, m._id)}
            button={currentUser === m.user._id}
        />));
        return (<div className="row col-sm-8">
            <div className="offset-1 col-sm-10">
                <ul className="list-group" id="message">
                    {messageList}
                </ul>
            </div>
        </div>);
    }
}

function mapstateToProps(state){
    return {
        messages: state.message,
        currentUser: state.currentUser.user.id
    };
};

export default connect(mapstateToProps, {fetchMessages, removeMessage})(MessagesList);