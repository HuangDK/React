/**
 *
 * Created by huangdakai on 2017/12/12.
 */

import React from 'react';
import './index.css';
import './ItemComponent'
import ItemComponent from "./ItemComponent";
import HeaderTabComponent from './HeaderTabComponent'

export default class TableComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            lists:[{title:'戏精的诞生 嘉宾的全部费用是这样分类的哈哈哈哈哈哈哈哈哈哈哈',pic:'http:\\/\\/static1.utan.com\\/app_toutiao\\/image\\/articlelist\\/avatar.png?t=23',picurl:'http:\\/\\/static1.utan.com\\/app_toutiao\\/image\\/articlelist\\/avatar.png?t=23',name:'某某', num:30,like:'60.2万'}]
        };
    }
    render() {
        return (
            <div style={{width:'375px'}}>
                <header style={{height:'64px', textAlign:'center', lineHeight:'64px', fontSize:'16px', color:'#333333'}}>我的收藏</header>
                <HeaderTabComponent/>
                <ul style={{listStyle:'none',position:'relative'}}>
                    {
                        this.state.lists.map((item, index)=>(
                            <ItemComponent key={index} item={item} index={index}/>
                        ))
                    }
                </ul>
            </div>
        )
    }
}