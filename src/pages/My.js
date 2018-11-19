import React, { Component } from 'react';
import ReactDOM,{ render } from 'react-dom';
import { inject, observer } from 'mobx-react';
import BottomTab from '../components/BottomTab'
import 'antd-mobile/dist/antd-mobile.css';
import '../css/index.scss'
import { List,NavBar,Icon } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

@inject('store')
@observer
class Calculator extends Component{
  constructor(...props) {
    super(...props);
  }
  goPath(path){
  	this.props.history.push(path);
  }
  render() {
    return (
      <div>
      	<NavBar mode="dark">我的</NavBar>
		<List>
	        <Item  thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"  arrow="horizontal" onClick={() =>this.goPath("/detail/5/food")}>我的订单</Item>
	        <Item  thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"  arrow="horizontal" onClick={() =>this.goPath("/about")}>我的地址</Item>
		</List>
        <BottomTab/>
      </div>
    );
  }
}

export default Calculator;
