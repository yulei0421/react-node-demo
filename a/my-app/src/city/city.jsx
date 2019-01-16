import './city.scss';
import React from 'react';
import { Link, Router, Route, hashHistory } from 'react-router-dom';
import {saveGeohashAction} from '../action'
import {connect} from 'react-redux';

class city extends React.Component{
    constructor (props) {
        super (props)
        this.state = {
          inputvalue : '',
          cityLink:[],
          showNone:false,
          historyTitle:true,
          Point:this.props.location.query
        }
    };
    componentDidMount() {
      
      // console.log(this.props.location.query)
      var BMap = window.BMap//百度地图绑定在window对象上面
      var map = new BMap.Map("allmap")
      // map.centerAndZoom(new BMap.Point(this.state.Point.lng, this.state.Point.lat), 11);
      // map.centerAndZoom(new BMap.Point(121.48789949, 31.24916171), 11);
    }
    serchCity(e) {
      console.log(this.props.state.saveGeohashAction.geohash.lat)
      // console.log( this.props.add("1"))
      //搜索地址方法调用百度接口返回出来数组
      e.preventDefault();//禁止点击提交刷新页面
      var BMap = window.BMap//百度地图绑定在window对象上面
      var map = new BMap.Map("allmap")
      map.centerAndZoom(new BMap.Point(this.props.state.saveGeohashAction.geohash.lng, this.props.state.saveGeohashAction.geohash.lat), 11);
      var _that = this
      var options = {
        onSearchComplete: function(results){
            var s = [];
            var obj = {}
            // console.log(local.getStatus())
            if (local.getStatus() == 0){
            for (var i = 0; i < results.getCurrentNumPois(); i ++){
              // console.log(results.getPoi(i))
              // s.push(results.getPoi(i))
              obj = {
                title:results.getPoi(i).title,
                address:results.getPoi(i).address
              }
              s.push(obj);
          }
        }
        if(s.length==0){
          _that.setState({
           showNone:true,
          })
        }else{
         _that.setState({
           showNone:false,
         })
       }
      //  console.log(_that.state.showNone)
        if(_that.state.inputvalue){
          _that.setState({
            cityLink:s,
            historyTitle:false
          })
        }
          // console.log(_that.state.cityLink)
        }
        //获取搜索的数据
      };
      var local = new BMap.LocalSearch(map, options);
      local.search(this.state.inputvalue);
    }
    inputChange(e) {
      let inputValue = e.target.value;
      e.persist()
      this.setState({
        inputvalue:inputValue
      })
    }
    render () {
      console.log(this.props.state)
      let { cityLink, historyTitle, showNone } = this.state
        return (
            <div className="city_container">
            <form action="" className="city_form">
              <div>
                <input type="search"
                 className="city_input input_style"
                 value={this.inputvalue} placeholder="输入学校、商业楼、地址"
                 onChange={this.inputChange.bind(this)}/>
              </div>
              <div>
                <input type="submit"
                className="city_submit input_style" 
                value="提交"   
                onClick={this.serchCity.bind(this)}/>
              </div>
            </form>
              {
               historyTitle ? <header className="pois_search_history">搜索历史</header>  :''
              }
            <ul className="getpois_ul">
            {
              cityLink.map((res,index)=>{
                return(
                  <li key={index}>
                  <h4 className="pois_name ellipsis">{res.title}</h4>
                  <p className="pois_address ellipsis">{res.address}</p>
                </li>
                )
              })
            }      
            </ul>
            {
              showNone ? <div className="search_none_palce">很抱歉！无搜索结果</div> :''
            }
           <div
           id='allmap'
           style={{
           width:'100vw',
           height:'100vh',
           display:"none"
           }} />
          </div>   
        )
    }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    // add:(res)=>dispatch(saveGeohashAction(res))
  }
}
// export default city
export default connect(mapStateToProps,mapDispatchToProps)(city);