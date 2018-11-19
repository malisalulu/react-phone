import React, { Component } from 'react'
import ReactDOM,{ render} from 'react-dom'
import { Icon,SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

import "../utils/rem.js"
class HeaderInput extends Component{
  state = {
    value: '美食',
  };
  componentDidMount() {
  	
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  render(){
  	const {scrollTop} = this.props; 
    return (
	    <div className="search-view" style={ scrollTop === 0 ?{ background:'-webkit-linear-gradient(top, rgba(105,195,170, 1), rgba(105,195,170, 0.3))'} :( scrollTop<200 ? {background:`rgba(105,195,170,${scrollTop/400+0.3})`}: {background:'rgba(105,195,170,1)'} ) }>
	    		<div className="search-content">
	    			<SearchBar  value={this.state.value}  placeholder="搜索"  onSubmit={value => console.log(value, 'onSubmit')}  onClear={value => console.log(value, 'onClear')} onCancel={() => console.log('onCancel')} showCancelButton  onChange={this.onChange}/>
	    		</div>
	    </div>
    )
  }
}

export default HeaderInput;
