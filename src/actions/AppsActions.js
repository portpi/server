import { FETCHING_APPS, APPS_RECEIVED } from './types';
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
