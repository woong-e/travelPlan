/**
 * Define Action Type & Action Creator
 */
const scope = 'PLAN';
const actions = {
  /**
  * Define Action Types
  */
  FETCH         : `${scope}_FETCH`,
  FETCH_SUCCESS : `${scope}_FETCH_SUCCESS`,

  /**
   * Define Action Creators
   */
  fetch: (id) => ({
    type: actions.FETCH,
    id,
  }),

  fetchSuccess: (payload) => ({
    type: actions.FETCH_SUCCESS,
    payload
  })
};

export default actions;
export {
  scope
}