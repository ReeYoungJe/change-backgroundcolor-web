import React from 'react';
import './Header.scss';

class Header extends React.Component {
	render() {
		return (
			<div className="headerWarp">
				<h1 className="dateTime">2024년 01월 16일</h1>
				<div className="dateDay">수요일</div>
				<div className="task">할일 <span>0</span> 남음</div>
			</div>
		)
	}
}

export default Header;
