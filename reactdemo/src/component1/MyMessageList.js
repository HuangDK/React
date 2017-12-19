/**
 *
 * Created by huangdakai on 2017/12/11.
 */
import React from 'react'

export default class MyMessageList extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.messages.map((message,index)=>(
                        <li key={index} className="list-group-item">
                            {message.username}:{message.content}
                            <button className="btn btn-danger btn-xs" onClick={()=>this.props.removeMessage(index)}>删除</button>
                            <span className="pull-right">{message.createAt.toLocaleString()}</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}