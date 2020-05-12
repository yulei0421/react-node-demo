import React, { useState, useEffect } from 'react';
import axios from '../server'

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


  useEffect(() => {
    axios.get('/Insurance/appointEmp/get/qrCode',{}).then((res: any) => {
       
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
    obj.title
  }

  return (
    <div>
      <div onClick={click}>点击事件</div>
      <div>{title}</div>
      <input type="text" />
    </div>
  )
}

export default testHook