import './home.scss';
import React from "react";
import { Link,} from 'react-router-dom';
// import Header from 'components/header/index.js';
// import {Currentcity} from '../getdate/getDate'
import { map } from 'underscore';
import axios from '../middleware/server'
import {saveGeohashAction} from '../action'
import {connect} from 'react-redux';
class Home extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            city:"北京",
            hotcity:[],
            groupcity:{},
            Point:{}
        }
    }
    Currentcity () {
        axios.get('/mongo/20/red').then(res=>{
        //   console.log(res)
         this.setState({
             hotcity:res.data
         })
        })
    }
    Groupcity () {
        //请求城市数据
        axios.get('/groupdata/group/city').then(res=>{
            console.log(res)
            this.setState({
                groupcity : res.data[0] 
            })
        })
    }
    componentDidMount () {
        this.Groupcity ()
        this.Currentcity ()
        this.setState({
            // hotcity:a
        })
        var BMap = window.BMap//百度地图绑定在window对象上面
        var map = new BMap.Map("allmap")
        // var point = new BMap.Point(116.331398,39.897445);
        // map.centerAndZoom(point,12);
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition((r)=>{
            console.log(r)
                let point = r.point
                // console.log(point)
                let city = r.address.city//获取地址
                this.props.add(point)    //插入到redux中数据
                this.setState({
                    city:city,
                    Point:point
                })
                // console.log(city)
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
            });
        // console.log(map)
        // console.log(geolocation)
    };
    cityserch (i) {       
        var BMap = window.BMap
        var map = new BMap.Map("cllmap");  // 创建Map实例
        map.centerAndZoom('合肥',15);      // 初始化地图,用城市名设置地图中心点
        console.log(i)
        var geolocation = new BMap.Geolocation();
        map.addEventListener("ondragging", function (){ // 监听地图移动事件
   
            });
        let a = map.addOverlay(geolocation)
        console.log(a)
        // geolocation((r)=>{
        //     console.log(r)
        // })
        
            // this.props.history.push('/city/'+i)
    }
    render() {
        let {city, hotcity, groupcity, Point} = this.state
        // Point = JSON.stringify(Point);
        var query = {
            pathname: '/city',
            query: Point
        }
        // console.log(Point)
        // console.log(groupcity)
        let  sortGroupCity = () => {
            let sortObj = {};
            for (let i = 65; i <= 90; i++) {
              if (groupcity[String.fromCharCode(i)]) {
                // console.log(groupcity[String.fromCharCode(i)])
                sortObj[String.fromCharCode(i)] = groupcity[String.fromCharCode(i)];
              }
            }
            return sortObj;
          };
        return (
            <div id='city'>
                <nav className="city_nav">
                    <div className="city_tip">
                    <span>当前定位城市：</span>
                    <span>定位不准时，请在城市列表中选择</span>
                    </div>
                    <Link to={query} className='guess_city'>
                        <span>{city}</span>
                        <i className="fa fa-chevron-right fa-lg"  aria-hidden="true" style={{color: '#ccc'}}></i>
                    </Link>
               </nav>
                <section id="hot_city_container">
                    <h4 className="city_title">热门城市</h4>
                    <ul className="citylistul clear">
                    { hotcity.map((i,index) => {
                        return (   
                            <li key={index} onClick={this.cityserch.bind(this,i.city)}>{i.city}</li>
                           )
                        })   
                    }
                    </ul>
                </section>
                {/* 按照字母排序 */}
                <section className="group_city_container">
                    <ul className="letter_classify">
                        {
                        map(sortGroupCity(), (value, key) => {
                            return (
                                <li className="letter_classify_li" key={key}>
                                    <h4 className="city_title">
                                        {key}
                                        {key === 'A'? <span>（按字母排序）</span>: ''}
                                    </h4>
                                    <ul className="groupcity_name_container citylistul clear">
                                        {
                                        value.map((item) => {
                                        return(
                                        <Link to={'/city/' + item.id} key={item.id}>
                                        <li>{item.name}</li>
                                        </Link>
                                        )
                                        })
                                        }
                                    </ul>
                                </li>
                            )
                        })
                        }
                    </ul>
                </section>
                    <div
                    id='allmap'
                    style={{
                    width:'100vw',
                    height:'100vh',
                    display:"none"
                    }} />
                     <div
                    id='cllmap'
                    style={{
                    width:'100vw',
                    height:'100vh',
                    // display:"none"
                    }} />
            </div>
        )
    }
}
function mapStateToProps(state,) {
    console.log(state)
    return {
      state
    }
  }
  function mapDispatchToProps(dispatch) {
    return {
      add:(res)=>dispatch(saveGeohashAction(res))
    }
  }
// export default Home
export default connect(mapStateToProps,mapDispatchToProps)(Home);