import React,{Component,} from "react";
import Register from './child'
import {string} from '../util'
import Example from './hook'
class Hoc extends Component {
    // @string
    render() {
        console.log(Example)
      return (
        <div>
          {/*父组件向子组件传递属性*/}
          <Register name="jack" age={18}/>
          <Example/>
        </div>
      );
    }
  }
  export default Hoc