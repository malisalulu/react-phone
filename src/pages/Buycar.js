import React, { Component } from 'react'
import ReactDOM,{ render } from 'react-dom'
import { List,NavBar,Icon,SwipeAction,Checkbox,PullToRefresh } from 'antd-mobile';

import AppNavBar from '../components/AppNavBar'
import CarItem from '../components/CartItem'
import cartItems from '../utils/buy_car.json'
import '../css/buycar.scss'
import BottomTab from '../components/BottomTab'

const { CheckboxItem } = Checkbox

export default class Cart extends Component {
  state = {
  	refreshing: false,
    down: false,
    height: document.documentElement.clientHeight,
    data: [],
    totalMoney: 0,
    cartItems:cartItems
  }

  componentDidMount() {
    this.calcTotalMoney();
    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
    setTimeout(() => this.setState({
      height: hei
    }), 0);
  }

  calcTotalMoney = () => {//计算总价
    let totalMoney = 0
    const { cartItems } = this.state
    const selectedItems = cartItems.filter(c => c.selected)
    selectedItems.forEach(c => (totalMoney += c.price * c.number))
    this.setState({ totalMoney })
  }

  toggleSelectAll = event => {//全部选中或取消
    const checked = event.target.checked
    const { cartItems } = this.state
    const newCartItems = cartItems.map(c => {
      c.selected = checked
      return c
    })
    this.setState({ cartItems: newCartItems })
    this.calcTotalMoney()
  }

  toggleItemSelected = item => {//单个选中或取消
    const { cartItems } = this.state
    const index = cartItems.findIndex(c => c === item)
    cartItems[index].selected = !cartItems[index].selected
    this.setState({ cartItems })
    this.calcTotalMoney()
  }

  onPlus = item => {//数量增加
    const { cartItems } = this.state
    const index = cartItems.findIndex(c => c === item)
    cartItems[index].number += 1
    this.setState({ cartItems })
    this.calcTotalMoney()
  }

  onSubtract = item => {//数量减少
    const { cartItems } = this.state
    const index = cartItems.findIndex(c => c === item)
    if (cartItems[index].number <= 1) {
      return
    }
    cartItems[index].number -= 1
    this.setState({ cartItems })
    this.calcTotalMoney()
  }

  render() {
    const { totalMoney, cartItems } = this.state

    return (
	    	<div>
	      <section className="app-cart">
	        <AppNavBar rightIcon="ellipsis">购物车</AppNavBar>
			<PullToRefresh
		        damping={60}
		        ref={el => this.ptr = el}
		        style={{
		          height: this.state.height,
		          overflow: 'auto',
		        }}
		        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
		        direction={this.state.down ? 'down' : 'up'}
		        refreshing={this.state.refreshing}
		        onRefresh={() => {
		          this.setState({ refreshing: true });
		          setTimeout(() => {
		            this.setState({ refreshing: false });
		          }, 1000);
		        }}
		      >
		        <div className="app-cart__items">
		          {cartItems.map((item, index) => (
		            <CarItem key={index} item={item}
	              onPlus={this.onPlus}
	              onSubtract={this.onSubtract}
	              toggleSelected={this.toggleItemSelected}/>
		          ))}
		        </div>
			</PullToRefresh>
	        <div className="app-cart__checkout">
	          <CheckboxItem className="check-all" key="all" onChange={this.toggleSelectAll}>
	            <span style={{ fontSize: 14, color: '#999' }}>全选</span>
	          </CheckboxItem>
	          <div className="checkout-total">
	            合计: <span className="total-money">￥{totalMoney.toFixed(2)}</span>
	          </div>
	          <div className="checkout-button">去结算</div>
	        </div>
	      </section>
	      <BottomTab/>
      </div>
    )
  }
}
