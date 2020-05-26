import React, { useState, useEffect, Suspense } from "react";
import axios from "../../http/index";
import config from "../../api/index";
import Foo from "./child";
import "./index.scss";

interface GenericIdentityFn<T> {
  (clickNum: T): T;
}
interface Params {
  title: number;
  sex: string;
}
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const testHook = (props: any) => {
  const [num, setNum] = useState<number>(0);
  const [title, setTitle] = useState<string>("d");
  const [styleObj,setStyleObj] = useState<object>({
    fontSize:'18px',
  })
  const [fontS,setFont] = useState<number>(18)
  // const Foo = React.lazy(() => {
  //   return import("./child");
  // });

  const info = {
    name: "wangly",
    sex: "男",
    age: "18",
    phone: "13000000000",
    address: "中国......",
    duty: "总经理",
  };

  const mapKeys = ["姓名", "性别", "年龄", "电话", "家庭地址", "身份"];

  const newInfo = new Map();

  let i = 0;

  for (const key in info) {
    newInfo.set(mapKeys[i], info[key]);
    i++;
  }

  const infoMap = newInfo;
  interface People {
    age: number;
    name: string;
  }

  function interFace<T extends JJ>(params: T): T {
    return params;
  }
  interface JJ {
    jjSize: string;
    jjLength: number;
  }
  interFace({
    age: 18,
    name: "yulei",
    jjSize: "1",
    jjLength: 20,
  });
  interface iPeople {
    name: string;
    age: number;
  }

  interface iPeople {
    name: string;
    age: number;
  }

  type T = keyof iPeople;

  let a: T = "name";
  console.log(a);

  useEffect(() => {
    axios
      .get(config.INSURANCE_APPOINTEMP_GET_QRCODE, {})
      .then((res: any) => {});
    console.log(`%c${num}${Direction.Up}`, "color: red; font-size: 32px");
  }, [num]);

  const click = () => {
    let sumNum = num;
    sumNum++;
    setNum(sumNum);
    sTitle(1);
    let parmas = {
      title: 1,
      sex: "男",
    };
    fuc(parmas);
  };
  const sTitle: GenericIdentityFn<Direction.Up> = (clickNum) => clickNum;
  const fuc = (obj: Params) => {
    // obj.title
  };

  useEffect(() => {
    var fs = document.querySelectorAll('.fs')[0]
    var box = document.querySelectorAll('.box')[0]
    const fWidth = fs.clientWidth;
    const bWidth = box.clientWidth;
    let font = fontS
    if(fWidth>bWidth){
      font -= 2
      setFont(font)
      setStyleObj({
        fontSize:`${font}px`
      })
    }
    console.log(fs,fWidth,bWidth)
  }, [title]);

  const iValue = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  return (
    <div>
      <div onClick={click}>点击事件</div>
      <div>{title}</div>
      <input type="text" onChange={iValue} />
      <Foo />
      <div className="box">
        <div className="fs" style={styleObj}>{title}</div>
      </div>
    </div>
  );
};

export default testHook;
