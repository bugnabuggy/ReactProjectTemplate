import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { appReducer } from './appReducer';
import { wishListReducer } from './wishListReduser';

const rootReducers = combineReducers({
  wishList: wishListReducer,
  appUser: appReducer,
  router: routerReducer
});

export { rootReducers };