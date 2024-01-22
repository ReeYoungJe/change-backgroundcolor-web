import './MainPage.scss';
import React from 'react';
import { Link } from 'react-router-dom'

import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";

export default class MainPage extends React.PureComponent {
	render() {
		return (
			<div>
				<Header/>
				<h1><Link to={"/work"}>Project페이지 이동</Link></h1>

				<section className={"main"}>
					<div className="mainSlider">
						<div className="mainSliderItem">

						</div>
						<div className="mainSliderItem">

						</div>
						<div className="mainSliderItem">

						</div>
					</div>
				</section>
				<Footer/>
			</div>
		)
	}
}