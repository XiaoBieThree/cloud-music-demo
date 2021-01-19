import React from 'react';
import { GlobalStyle } from './style';  // 全局样式
import { IconStyle } from './assets/iconfont/iconfont'; // 字体

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <IconStyle />
      <i className="iconfont">&#xe62b;</i>
    </div>
  );
}

export default App;
