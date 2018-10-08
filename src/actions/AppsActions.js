import { FETCHING_APPS, APPS_RECEIVED, LOAD_APP } from './types';
import axios from 'axios';

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

export const loadApp = appInfo => async dispatch => {
  dispatch({
    type: LOAD_APP,
    app: appInfo
  });
};
