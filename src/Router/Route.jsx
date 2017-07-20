import React, {Component, PropTypes} from 'react';
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'dva/router';

import index from '../Component/index'; //销售录入
import demo from '../Component/demo'; //销售录入
const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


function router({ history }) {
  return (
    <Router history={history}>
        <Route path="/" component={demo}>
            <Route path="index" component={index} />
            <Route path="demo" component={demo} />
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
  );
}
router.propTypes = {
  history: PropTypes.any // eslint-disable-line
};

export default router;