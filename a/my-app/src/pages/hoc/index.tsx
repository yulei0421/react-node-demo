import React, { useState, useEffect } from 'react';
import axios from '../../http/index'
import config from '../../api/index'

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

  // type Cb = () => void
  // function sum(params: {}, cb: Function) {

  // }
  // enum Status {
  //   Draft = 'Draft1',
  //   Published = 'Published'
  // }

  // function itself<T>(a: T): T {
  //   return a
  // }

  // // console.log(itself<boolean>(true)) // true
  // // console.log(itself<number>(1))   // 1
  // // console.log(itself<string>('1')) // '1'
  // // console.log(itself<Array<number>>([1, 2, 3])) // [1, 2, 3

  // function typeT <T>(a:T):T{
  //    return a
  // }
  // typeT(1)

  // const str = 'Draft';
  // const status: Status = Status[str];
  // console.log(status, '===>{}')
  // // sum()
  // console.log(infoMap, '====>')
  interface People {
    age: number,
    name: string
  }

  function interFace<T extends JJ>(params: T): T {
    return params
  }
  interface JJ {
    jjSize: string
    jjLength: number
}
  interFace({
    age: 18,
    name: 'yulei',
    jjSize:'1',
    jjLength: 20
  })
  interface iPeople {
    name: string;
    age: number
  }
  
  interface iPeople {
    name: string;
    age: number
  }
  
  type T = keyof iPeople

  let a : T = 'name'
  console.log(a)

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