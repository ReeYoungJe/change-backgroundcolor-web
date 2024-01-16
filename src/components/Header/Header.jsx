import React from 'react';
import './Header.scss';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="headerInner">
					<div className="headerTitle">
						<h1>ReeYoungJe Web Portfolio</h1>
					</div>
					<div className="headerEmail">
						zofhd2@naver.com
					</div>
					<div className="headerAvaliable">
						<span className="avaliableState on">현재 사용가능</span>
					</div>
					<div className="headerSubTitle">
						하단 서브타이틀
					</div>
				</div>
			</header>



	)
	}
}

export default Header;
