import {combineReducers} from "redux";
import {Map} from "immutable";

import actions from './actions';
// import {convertNestedByArray} from "../../helpers/utility";

/**
 * Set Initial State
 */
const initIndexState = Map({
  plan: Map(),
});

// const plan = convertNestedByArray(initIndexState.get('plan').toJS(), 'plan');

/**
 * Define Reducer
 */
export function indexReducer(state = initIndexState, action) {
  //
  switch (action.type) {
    //
    case actions.FETCH_SUCCESS:
      return applyFetchSuccess(state, action);

    default:
      return state;
  }
}

/**
 * Define Reducer Pure function
 */
function applyFetchSuccess(state, action) {
  return state.set('plan', Map().merge(action.payload));
}


export default combineReducers({
  index: indexReducer,
});