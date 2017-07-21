import qs from 'qs';
import {demo} from '../api/demo';


export default {
  namespace: 'demo',
  state: {
    data: []
  },
  reducers: {
    queryListSuccess(state, {
      payload
    }) {
      return {
        ...state,
        data: {
          ...state.data,
          ...payload
        }
      };
    }
  },
  effects: {
    * queryList({ payload: { page, type } }, { call, put }) {
      
      const { jsonResult } = yield call(demo, { page, type });
    //  const { jsonResult } = yield call(get('/km-service/testEchartsObject.json'));
      yield put({
        type: 'queryListSuccess',
        payload: {
          data: jsonResult.data,
          success: jsonResult.http_code
        }
      });
    },
    * reload(action, { put, select }) {
      const data = yield select(state => state.data);
      yield put({
        type: 'fetch',
        payload: {
          data
        }
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/demo') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    }
  }
};
