import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

//render 的含义就是把一个React元素渲染到DOM容器内部
ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
