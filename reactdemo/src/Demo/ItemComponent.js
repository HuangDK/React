/**
 *
 * Created by huangdakai on 2017/12/18.
 */
import React from 'react';

export default class ItemComponent extends React.Component {
    render() {
        let {item, index} = this.props;
        return (
            <li key={index} style={{height:'114px'}}>
                <img style={{height:'114px', width:'170px', fontSize:'0'}} src={item.pic} alt="pic"/>

                <div style={{float:'right'}}>
                    <p className="art-title">{item.title}</p>
                    <div style={{marginTop:'13px', color:'#999999'}}>
                    <span style={{marginRight:'39px', fontSize:'12px'}}>
                        <img style={{width:'15px', height:'15px', borderRadius:'15px', marginRight:'6px'}} src={this.props.item.picurl} alt="pinlin"/>
                        {item.name}
                    </span>
                        <span style={{marginRight:'10px'}}>
                        <img style={{width:'12px', height:'12px', marginRight:'5px'}} src={require('../images/hl_video_pinglun.png')} alt=""/>
                            {item.num}
                    </span>
                        <span>
                        <img style={{width:'12px', height:'10px', marginRight:'5px'}} src={require('../images/hl_video_zanxin.png')} alt=""/>
                            {item.like}
                    </span>
                    </div>

                </div>
            </li>
        )
    }
}