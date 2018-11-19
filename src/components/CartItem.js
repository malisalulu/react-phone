import React, { Component } from 'react'
import { List,NavBar,Icon,SwipeAction,Checkbox } from 'antd-mobile';

import '../css/buycar.scss'

const { CheckboxItem } = Checkbox
export default class CartItem extends Component{
  toggleSelected = item => {
    this.props.toggleSelected(item)
  }

  onPlus = item => {
    this.props.onPlus(item)
  }

  onSubtract = item => {
    this.props.onSubtract(item)
  }
	 render() {
	 	const { item } = this.props
    		return (
			<SwipeAction
		      style={{ backgroundColor: 'gray' }}
		      autoClose
		      right={[
		        {
		          text: '取消',
		          onPress: () => console.log('cancel'),
		          style: { backgroundColor: '#ddd', color: 'white' },
		        },
		        {
		          text: '删除',
		          onPress: () => console.log('delete'),
		          style: { backgroundColor: '#F4333C', color: 'white' },
		        },
		      ]}
		      onOpen={() => console.log('global open')}
		      onClose={() => console.log('global close')}
		    >
		    		<div  className="cart-item">
			        <CheckboxItem
			          className="check-box"
			          checked={item.selected}
			          onChange={() => this.toggleSelected(item)}
			        />
			        <div className="product">
			          <img className="image" src={item.img} alt={item.title} />
			          <div className="content">
			            <p className="title">{item.title}</p>
			            <p className="desc">{item.desc}</p>
			            <p className="price">¥{item.price}</p>
			          </div>
			        </div>
			        <div className="number-box">
			          <span className="subtract" onClick={() => this.onSubtract(item)}>
			            -
			          </span>
			          <span className="num">{item.number}</span>
			          <span className="plus" onClick={() => this.onPlus(item)}>
			            +
			          </span>
			        </div>
		        </div>
	    		</SwipeAction>
    		)
	}
}