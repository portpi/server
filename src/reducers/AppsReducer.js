import { FETCHING_APPS, APPS_RECEIVED, APP_LOADING, APP_LOADED, APP_LOAD_FAILED } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCHING_APPS:
      return {
        currentApp: null,
        isLoading: true
      };

    case APPS_RECEIVED:
      return {
        currentApp: null,
        list: action.apps,
        isLoading: false
      };

    case APP_LOADING:
      return {
        currentApp: null,
        isLoading: true
      };

    case APP_LOADED:
      return {
        currentApp: {
          ...action.app,
          component: action.component
        },
        isLoading: false
      };
    
    case APP_LOAD_FAILED:
      return {
        currentApp: null,
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
};
