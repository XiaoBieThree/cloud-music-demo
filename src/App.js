import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import { GlobalStyle } from './style';  // 全局样式
import { IconStyle } from './assets/iconfont/iconfont'; // 字体
import { renderRoutes } from 'react-router-config'; // renderRoutes 读取路由配置转化为 Route 标签
import routes from './routes/index';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App" store={store}>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <IconStyle></IconStyle>
        {/* <i className="iconfont">&#xe62b;</i> */}
        { renderRoutes (routes) }
      </BrowserRouter>
    </div>
  );
}

export default App;
