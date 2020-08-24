import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import DashBoard from '../containers/DashBoard/DashBoard';
import Plan from '../containers/Plan/Plan';
// import Page404 from '../containers/common/Page/404';

const routes = [
	{
		path: '',
		exact: true,
		component: DashBoard,
	},
	{
		path: 'mungyeong',
		exact: true,
		component: Plan,
	},
	{
		path: 'singapore',
		exact: true,
		component: Plan,
	},
	// 아래 라우터는 맨 마지막에 위치해야 함
	// {
	// 	path: '*',
	// 	component: Page404,
	// },
];

class AppRouter extends Component {

	render() {
		const {
			url,
		} = this.props;

		return (
			<Switch>
				{routes.map((singleRoute) => {
					const { path, exact, ...otherProps } = singleRoute;
					return <Route
						exact={exact}
						key={path}
						path={`${url}${path}`}
						{...otherProps} />;
				})}
			</Switch>
		);
	}
}

export default AppRouter;
