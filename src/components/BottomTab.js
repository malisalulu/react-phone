import React,{Component} from 'react'
import {Link} from  'react-router-dom'
import "../utils/rem.js"
import  "../css/bottom.scss"
import "../css/iconfont/iconfont.css"

class TabItem extends Component{
	
    render(){
        let name = this.props.name;
        let curTab = this.props.curTab;
        let fontType={
        		home:"icon-shouye",
        		buycar:"icon-gouwuche",
        		my:"icon-ziyuan"
        }
        let nameType={
        		home:"首页",
        		buycar:"购物车",
        		my:"我的"
        }
        return (
            <Link  to={"/"+name} className={`tabItem ${name == curTab ?"activeTab":"noactiveTab"} `}>
	                <i className= {`icon iconfont ${fontType[name]}`}></i>
	                <p>{nameType[name]}</p>	
            </Link>
        )
    }
}

class BottomTab extends Component{
    render(){
        let curHash = location.hash.substring(2) || "home";
        return (
            <div data-maxwidth className="bottomTab">
                <TabItem curTab={curHash} name="home" />
                <TabItem curTab={curHash} name="buycar" />
                <TabItem curTab={curHash} name="my" />
            </div>
        )
    }
}

export default BottomTab;

