import React, {Component, PropTypes} from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
import Models from './models/index'
import Routes from './Router/Route'; //路由配置
import './Config/Config.js';//引入默认配置
import './Style/common.scss';
import './Style/head.scss';
import './Style/index.scss';
import './Style/chooseProducts.scss';
import './Style/helpCenter.less';
import './Style/saleRecord.less';
import './Style/allDeposit.less';
import './Style/applyDeposit.less';
import './Style/applyRecord.less';
import './Style/demo.less';

const ERROR_MSG_DURATION = 3; // 3 秒
// 1. Initialize
const app = dva({
  // history: browserHistory,
  onError(e) {
    console.log(e.message);
    // message.error(e.message, ERROR_MSG_DURATION);
  }
});
// 2. Plugins
app.use(createLoading());
//app.use();

// 3. Model
Object.keys(Models).forEach( item => {
    app.model(Models[item].default);
})
//app.model(Demo);
// Moved to router.js
// 4. Router
app.router(Routes);
// 5. Start
app.start('#root');