/**
 * 多选列表
 * 接收props:{
 * title:String 选择器标题
 * option:Array渲染选择器数组,
 *  defaultValue?: boolean //初始化选择中的
   option:[
   label?: string;
   value?: string;
   disabled?: boolean;//控制是否可以选择
   ]
 * handleEmail(e){} 每当数据变化的时候向外面抛出去选中数组
 *
 * }
*/
import React from 'react';
import { Checkbox, Row, } from 'antd';
// import styles from './index.less';

type Prpps = any
interface CheckBoxProps  {
  option: any[];
  value: string[] | number[];
  useType: string;
}

const SettingCheckbox = (props: any) => {
  return (
    <div>
      111
    </div>
  );
}

export default SettingCheckbox;
