//组件部分

let SettingComponents: any = {};

const context = require.context('./', true, /index\.tsx$/);
console.log(context.keys(), 'context')
context.keys().forEach((path: string) => {
    const component = context(path).default;
    const component_name = path.split('/')[1];
    SettingComponents[component_name] = component;
});
console.log(SettingComponents)

export default SettingComponents;
