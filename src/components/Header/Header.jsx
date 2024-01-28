import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="headerInner">
					<div className="headerEmail">
						govlro1@naver.com
					</div>
					<div className="headerTitle">
						<h1><Link to={"/"}>ZeroJ</Link></h1>
					</div>

					<div className="headerAvaliable">
						<span className="avaliableState on">현재 사용가능</span>
					</div>
					<div className="headerSubTitle">
					</div>
				</div>
			</header>


		)
	}
}

export default Header;
