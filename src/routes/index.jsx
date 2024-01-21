import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "../pages/main/MainPage";
import React from "react";
import ContactPage from "../pages/contact/ContactPage";
import NotFoundPage from "../pages/not-found/NotFoundPage";
import WorkPage from "../pages/work/WorkPage";

export default class Router extends React.PureComponent {

	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path={'/'} Component={MainPage}/>
					<Route path={'/contact'} Component={ContactPage}/>
					<Route path={'/work'} Component={WorkPage}/>
					<Route path={'*'} Component={NotFoundPage}/>
				</Routes>
			</BrowserRouter>
		)
	}
}