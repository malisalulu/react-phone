import React, { Component } from 'react';
import { Link,BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import axios from 'axios'
axios.defaults.withCredentials = true

import BottomTab from '../components/BottomTab'
import HeaderInput from '../components/HeaderInput.js'
import "../css/App.scss"
import "../css/home.scss"


@inject('store','store2')
@observer
class App extends Component {
	constructor(...props) {
		super(...props);
		this.state = {
		    data: ['1', '2', '3'],
		    imgHeight: 176,
		    scrollTop:0,
		    banners:[{"businessId":4036,"dateAdd":"2017-09-15 08:29:50","dateUpdate":"2017-09-20 21:14:36","id":1148,"linkUrl":"","paixu":0,"picUrl":"https://cdn.it120.cc/apifactory/2017/09/15/145c582252a7a20f21ad9a025ae8c9be.png","remark":"","status":0,"statusStr":"显示","title":"1","type":"1","userId":951},{"businessId":0,"dateAdd":"2017-09-15 08:37:04","dateUpdate":"2017-09-15 08:37:25","id":1150,"linkUrl":"","paixu":2,"picUrl":"https://cdn.it120.cc/apifactory/2017/09/15/73560c511f554eb4afd1dcade9d8ef67.png","remark":"","status":0,"statusStr":"显示","title":"3","type":"1","userId":951},{"businessId":3776,"dateAdd":"2017-09-15 08:34:33","dateUpdate":"2017-09-20 21:15:54","id":1149,"linkUrl":"","paixu":3,"picUrl":"https://cdn.it120.cc/apifactory/2017/09/15/5acdd8f65ec85b413ee642dda795d835.png","remark":"","status":0,"statusStr":"显示","title":"2","type":"1","userId":951}]
		}
		this.handleScroll = this.handleScroll.bind(this);
  	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
    }
   	
  	handleScroll(event){ //滚动条距离页面的高度
	    let scrollTop = event.srcElement.body.scrollTop; 
	    this.setState({scrollTop:scrollTop});     
  	}
 	register(){
		 axios.post('/users/register', {
		      username: 'admin1',
		      password: '1234561'
		  }).then((res => {
		
		  }))
	}
	render() {
	    return (
	      <div className="App">
	      	<HeaderInput scrollTop={this.state.scrollTop}/>
	        <WingBlank>
		        <Carousel autoplay={false} infinite beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)} afterChange={index => console.log('slide to', index)} >
		          {this.state.banners.map(item => (
		            <Link key={item} to="/detail/5/food" style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}>
		              <img src={item.picUrl}
		                alt=""
		                style={{ width: '100%', verticalAlign: 'top' }}
		                onLoad={() => {
		                  // fire window resize event to change height
		                  window.dispatchEvent(new Event('resize'));
		                  this.setState({ imgHeight: 'auto' });
		                }}
		              />
		            </Link>
		          ))}
		        </Carousel>
		      </WingBlank>
		      <div className="bigheight"><p>dfdsf</p></div>
	        <BottomTab />
	      </div>
	    );
	}
}

export default App;
