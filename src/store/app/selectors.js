import { createSelector } from 'reselect';

const indexSelector = {
	form: createSelector(
		state => state.app.index.get('form'),
		form => ({
			collapsed: form.get('collapsed'),
			view: form.get('view'),
			height: form.get('height'),
			openDrawer: form.get('openDrawer'),
		}),
	)
};

export {
	indexSelector,
};
