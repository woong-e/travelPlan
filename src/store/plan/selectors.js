import { createSelector } from 'reselect';

const indexSelector = {
	plan: createSelector(
		state => state.plan.index.get('plan'),
		form => ({
			title: form.get('title'),
			period: form.get('period'),
			destination: form.get('destination'),
			lodging: form.get('lodging'),
			schedule: form.get('schedule'),
			supplies: form.get('supplies'),
			place: form.get('place'),
			expense: form.get('expense'),
		}),
	)
};

export {
	indexSelector,
};
