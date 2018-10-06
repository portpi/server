import { FETCHING_APPS, APPS_RECEIVED } from '../actions/types';

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

    default:
      return state;
  }
};
