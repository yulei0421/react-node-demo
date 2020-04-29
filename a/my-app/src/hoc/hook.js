import React, { useState, useEffect } from 'react';

export default function Example() {
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0);
  const [name] = useState('yulei');
  const [obj,setobj] = useState({a:1,b:2})

  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    console.log(obj)
   
  });

  return (
    <div>
      <p>{name}</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}