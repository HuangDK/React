/**
 * Created by hdk on 2017/11/26.
 */
import React from 'react';
import Message from './Message';

export default class MessageList extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.messages.map((message, index) =>(
                            <Message message={message} index={index} removeMessage={()=>this.props.removeMessage(index)}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}