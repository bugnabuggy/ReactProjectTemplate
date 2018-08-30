import { initialState } from './initialState';
import { WISH_LIST } from '../DTO/constantsForReducer';

export function wishListReducer(state = initialState.wishList, action: any) {
  let stateObject: any = {
    [WISH_LIST.SET_VISIBILITY_FILTER]: newState(state, action),
    [WISH_LIST.GET_SPECIALTY]: getSpecialty(state, action),
    [WISH_LIST.SEND_NEW_USER]: newState(state, action),
  };
  
  return stateObject.hasOwnProperty(action.type) ? stateObject[action.type] : state;
}

function newState(state: any, action: any) {
  let tenpState = Object.assign({}, state, { users: action.users });
  return tenpState;
}

function getSpecialty(state: any, action: any) {
  let tenpState = Object.assign({}, state, { specialty: action.specialty });
  return tenpState;
}

// function sendUser(state: any, action: any) {
//   let tenpState = Object.assign({}, state, { specialty: action.users });
//   return tenpState;
// }