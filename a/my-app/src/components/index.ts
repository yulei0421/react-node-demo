/*
 * @Author: your name
 * @Date: 2020-05-15 16:22:35
 * @LastEditTime: 2020-06-05 11:52:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my-app/src/components/index.ts
 */

//组件部分

let SettingComponents: any = {};

const context = require.context('./', true, /index\.tsx$/);
console.log(context.keys(), 'context');
context.keys().forEach((path: string) => {
    const component = context(path).default;
    const component_name = path.split('/')[1];
    SettingComponents[component_name] = component;
});
console.log(SettingComponents);

export default SettingComponents;
