import { FETCHING_APPS, APPS_RECEIVED, APP_LOADING, APP_LOADED, APP_LOAD_FAILED } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCHING_APPS:
      return {
        isLoading: true
      };

    case APPS_RECEIVED:
      return {
        list: action.apps,
        isLoading: false
      };

    case APP_LOADING:
      return {
        isLoading: true
      };

    case APP_LOADED:
      return {
        currentApp: action.app,
        isLoading: false
      };
    
    case APP_LOAD_FAILED:
      return {
        error: action.error,
        isLoading: false
      };

    default:
      return state;
  }
};
