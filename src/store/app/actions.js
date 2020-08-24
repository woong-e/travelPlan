export function getView(width) {
  let newView = 'MobileView';

  if (width > 1220) {
    newView = 'DesktopView';
  } else if (width > 767) {
    newView = 'TabView';
  }

  return newView;
}

/**
 * Define Action Type & Action Creator
 */
const scope = 'TRAVEL_PLAN';
const actions = {
  //
  TOGGLE_ALL : `${scope}_TOGGLE_ALL`,
  CLOSE_ALL  : `${scope}_CLOSE_ALL`,

  toggleAll: (width, height) => {
    const view = getView(width);
    const collapsed = view !== 'DesktopView';
    return {
      type: actions.TOGGLE_ALL,
      collapsed,
      view,
      height,
    };
  },

  closeAll: () => ({
    type: actions.CLOSE_ALL,
  }),
};

export default actions;
export {
  scope
}