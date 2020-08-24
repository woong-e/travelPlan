import {combineReducers} from "redux";
import {Map} from "immutable";

import actions, {getView} from './actions';
import {convertNestedByArray} from "../../helpers/utility";

/**
 * Set Initial State
 */
const windowInnerWidth = window.innerWidth;
const windowInnerHeight = window.innerHeight;
const initForm = Map({
  collapsed: windowInnerWidth <= 1220,
  view: getView(windowInnerWidth),
  height: windowInnerHeight,
  openDrawer: false,
});

const initIndexState = Map({
  form: Map().merge(initForm),
});

const form = convertNestedByArray(initIndexState.get('form').toJS(), 'form');

/**
 * Define Reducer
 */
export function indexReducer(state = initIndexState, action) {
  //
  switch (action.type) {
    //
    case actions.TOGGLE_ALL:
      if (state.get('view') !== action.view || action.height !== state.get('height')) {
        return applyToggleAll(state, action);
      }
      break;

    case actions.CLOSE_ALL:
      return applyCloseAll(state);

    default:
      return state;
  }
}

/**
 * Define Reducer Pure function
 */
function applyToggleAll(state, action) {

  const height = action.height ? action.height : state.get('height');
  return state.setIn(form.collapsed, action.collapsed)
    .setIn(form.view, action.view)
    .setIn(form.height, height);
}

function applyCloseAll(state, action) {
  return state.setIn(form.current, [])
    .setIn(form.openKeys, []);
}

export default combineReducers({
  index: indexReducer,
});