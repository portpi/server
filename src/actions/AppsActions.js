import { FETCHING_APPS, APPS_RECEIVED, APP_LOADING, APP_LOADED, APP_LOAD_FAILED } from './types';
import axios from 'axios';
import $script from 'scriptjs';

export const fetchApps = () => async dispatch => {
  dispatch({
    type: FETCHING_APPS
  });

  const res = await axios.get('/api/apps');
  dispatch({
    type: APPS_RECEIVED,
    apps: res.data
  });
};

export const loadApp = (appName, requireFunction) => async dispatch => {
  dispatch({
    type: APP_LOADING
  });

  const res = await axios.get(`/api/apps/${appName}`);
  const app = res.data;

  // prepare required peer dependencies
  window.require = requireFunction;
  window.module = {};

  // async load of remote cjs component
  $script(`/app/${app.name}/${app.info.main}`, () => {
    debugger;
    const target = window.module.exports;
    if (target) {
      dispatch({
        type: APP_LOADED,
        app: app,
        component: target
      });
    } else {
      dispatch({
        type: APP_LOAD_FAILED,
        error: `Cannot load app: ${app.name}`
      });
    }
  });
};

