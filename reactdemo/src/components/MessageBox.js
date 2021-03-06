/**
 * Created by hdk on 2017/11/26.
 */
import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import './MessageBox.css';

export default class MessageBox extends React.Component {
    constructor(){
        super();
        //定义默认对象  message是消息数组
        this.state = {
            messages : [],
        };
    }
    addMessage = (message)=>{
        //状态对象每次都要生成一个新对象
        let messages = [...this.state.messages,message];
        this.setState({messages});
    }
    removeMessage = (index)=>{
        //先从数组中删除指定的元素
        this.state.messages.splice(index,1);
        //修改状态
        this.setState({
            messages:[...this.state.messages]
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8 col-sm-offset-2">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h2 className="text-center">欢迎来到我的留言板</h2>
                                </div>
                                <div className="panel-body">
                                    <MessageList messages={this.state.messages} removeMessage={this.removeMessage}/>
                                </div>
                                <div className="panel-footer">
                                    <MessageForm addMessage={this.addMessage}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}