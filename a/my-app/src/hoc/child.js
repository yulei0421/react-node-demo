import React,{Component} from "react";
import withHoc from './child1'

class Register extends Component {
    render () {
      const { handleSubmit, composeChange, username, password, rePassword, name, age } = this.props;
    //   console.log(title)
      return (
        <div>
        <p>姓名:{name}</p>
        <p>年龄:{age}</p>
            <form onSubmit={handleSubmit}>
            用户名: <input type="text" name="username" value={username} onChange={composeChange('username')}/> <br/>
            密码: <input type="password" name="password" value={password} onChange={composeChange('password')}/> <br/>
            确认密码: <input type="password" name="rePassword" value={rePassword} onChange={composeChange('rePassword')}/> <br/>
            <input type="submit" value="登录"/>
            </form>
        </div>
      )
    }
}
  // 向外暴露的是高阶组件的返回值~包装了 Register 组件返回了一个新组件
  export default withHoc('登录')(Register);
  