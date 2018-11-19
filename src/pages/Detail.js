import React, { Component } from 'react'
import ReactDOM,{ render } from 'react-dom'
import { List,NavBar,Icon,SwipeAction,Button } from 'antd-mobile';

import '../css/detail.scss'
import goodsDetail from '../utils/detail.json'

class Detail extends Component{
  constructor(...props) {
    super(...props);
    this.state = {
	    goodsDetail:goodsDetail,
	    hasMoreSelect:false,
	    selectSize:"选择：",
	    selectSizePrice:0,
	    totalScoreToPay: 0,
	    shopNum:0,
	    hideShopPopup:true,
	    buyNumber:0,
	    buyNumMin:1,
	    buyNumMax:0,
	    propertyChildIds:"",
	    propertyChildNames:"",
	    canSubmit:false, //  选中规格尺寸时候是否允许加入购物车
	    shopCarInfo:{},
	    shopType: "addShopCar",//购物类型，加入购物车或立即购买，默认为加入购物车
	}
  }
  add(){//返回上一页
	this.props.history.goBack()
  }
  toAddShopCar(){
    this.setState({
      shopType: "addShopCar"
    })
    this.bindGuiGeTap();
  }
  tobuy(){
    this.setState({
      shopType: "tobuy"
    });
    this.bindGuiGeTap();
  }
  bindGuiGeTap() {//规格选择弹出框
     this.setState({  
        hideShopPopup: false 
    }) 
    console.log(this.state.hideShopPopup)
  }
  closePopupTap(){//关闭弹出框
	this.setState({  
        hideShopPopup: true
    }) 
  }
  labelItemTap(){
  	
  }
  numJianTap(){//数量减少
  	
  }
  numJiaTap(){//数量增加
  	
  }
  addShopCar(){//加入购物车
  	
  }
  buyNow(){//立即购买
  	
  }
  componentDidMount() {
    var id=this.props.match.params.id;
    var type=this.props.match.params.type;
    console.log(id,type)
  }
  render() {
    return (
    		<div>
	    		<NavBar mode="dark"  icon={<Icon type="left" />} rightContent={[  <Icon key="0" type="search" style={{ marginRight: '16px' }} />,<Icon key="1" type="ellipsis" />,]}	 onLeftClick={()=>this.props.history.goBack()}>详情</NavBar>
		    
		    <div className="show-popup" style={this.state.hideShopPopup?{display:"none"}:{display:"block"}} >
		        <div className="popup-mask" onClick={this.closePopupTap.bind(this)}></div>
		        
		        <div className="popup-contents">
		             <div className="pop-goods-info">
		                <div className="pop-img-box">
		                    <img src="{this.state.goodsDetail.basicInfo.pic}" className="goods-thumbnail"/>
		                </div>
		                <div className="pop-goods-des">
		                    <div className="pop-goods-title">{this.state.goodsDetail.basicInfo.name}</div>
		                    <div className="pop-goods-price">¥ {this.state.selectSizePrice}</div>
		                </div>
		                <div className="pop-goods-close" onClick={this.closePopupTap.bind(this)}>x</div>
		             </div>
		             <div className="size-label-box">
		             	{this.state.goodsDetail.properties.map((property, index) => (
			                <div key={index}>
				                <div className="label">{property.name}</div> 
				                <div className="label-item-box">
				                		{property.childsCurGoods.map((item, index2) => (
					                    <div className={`label-item ${item.active ? 'active' : '' }`} key={index2} onClick={() => this.labelItemTap} data-propertyindex="{index}" data-propertyid="{property.id}" data-propertyname="{property.name}" data-propertychildindex="{index2}" data-propertychildid="{item.id}" data-propertychildname="{item.name}">
					                        {item.name}
					                    </div> 
				                    ))}
				                </div>
			                </div>
		                ))}
		             </div> 
		             
		             <div className="buy-num-box">
		                <div className="num-label">购买数量</div>
		                <div className="num-box">
		                    <div className={`num-jian ${this.state.buyNumber == this.state.buyNumMin ? 'hui': ''}`} onClick={() => this.numJianTap}>-</div>
		                    <div className="num-input">
		                      	<input  type="text" value={this.state.buyNumber} onChange={()=>{}}/>
		                    </div>
		                    <div className={`num-jia {this.state.buyNumber== this.state.buyNumMax ? 'hui': ''}`} onClick={() => this.numJiaTap}>+</div>
		                </div>
		             </div>  
		             {this.state.shopType =='addShopCar' &&
			             <div className="popup-join-btn" onClick={() => this.addShopCar}>
			                加入购物车
			             </div>
		             }
		             {(this.state.shopTyp =='tobuy' || this.state.shopTyp =='toPingtuan' )&&
			             <div className="popup-join-btn" data-shopType="{this.shopType}"  onClick={() => this.buyNow}>
			                立即购买
		             	</div>   
		             }
		        </div>
		       
		    </div>
		    <div className="footer">
		    		<Button type="primary" size="small" inline onClick={this.toAddShopCar.bind(this) }>加入购物车</Button>
		    		<Button type="primary" size="small" inline onClick={() => this.tobuy }>立即购买</Button>
		    </div>
	    </div>
    )
  }
}

export default Detail
