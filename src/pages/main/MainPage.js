import './MainPage.css';
import React from 'react';
import Header from "../../components/Header/Header";

export default class MainPage extends React.PureComponent {
	render() {
		return (
			<div>
				<Header/>
				메인페이지
			</div>
		)
	}
}