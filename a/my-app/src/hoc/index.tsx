import React, { useState, useEffect } from 'react';
import axios from '../http/index'
import config from '../api/index'

interface GenericIdentityFn<T> {
  (clickNum: T): T;
}
interface Params {
  title: number,
  sex: string
}
enum Direction {
  Up,
  Down,
  Left,
  Right
}

const testHook = (props: any) => {
  const [num, setNum] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const info = {
    name: 'wangly',
    sex: '男',
    age: '18',
    phone: '13000000000',
    address: '中国......',
    duty: '总经理'
  }
  const mapKeys = ['姓名', '性别', '年龄', '电话', '家庭地址', '身份']

  const newInfo = new Map()

  let i = 0

  for (const key in info) {
    newInfo.set(mapKeys[i], info[key])
    i++
  }

  const infoMap = newInfo

  console.log(infoMap, '====>')
   
  useEffect(() => {
    axios.get(config.INSURANCE_APPOINTEMP_GET_QRCODE, {}).then((res: any) => {
    })
    console.log(`%c${num}${Direction.Up}`, 'color: red; font-size: 32px')
  }, [num])

  const click = () => {
    let sumNum = num
    sumNum++
    setNum(sumNum)
    sTitle(1);
    let parmas = {
      title: 1,
      sex: '男',
    }
    fuc(parmas)
  }
  const sTitle: GenericIdentityFn<Direction.Up> = (clickNum) => clickNum
  const fuc = (obj: Params) => {
    // obj.title
  }

  return (
    <div>
      <div onClick={click}>点击事件</div>
      <div>{title}</div>
      <input type="text" />
      {
      // infoMap.map(v=>(
      //   <div>
      //     {v.key}
      //   </div>
      // ))
      }
    </div>
  )
}

export default testHook