/**
 * Created by hdk on 2017/11/26.
 */
import React from 'react';

export default class Message extends React.Component {
    render() {
        let {message,index} = this.props;
        return (
            <li className="list-group-item" key={index}>
                {message.username}:{message.content}
                <button onClick={()=>this.props.removeMessage(index)} className="btn btn-danger btn-xs">删除</button>
                <span className="pull-right">{message.createAt.toLocaleString()}</span>
            </li>
        )
    }
}