import React from 'react';
import './Header.scss';

class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<div className="headerInner">
					<div className="headerEmail">
						zofhd2@naver.com
					</div>
					<div className="headerTitle">
						<h1>ZeroJ</h1>
					</div>

					<div className="headerAvaliable">
						<span className="avaliableState on">현재 사용가능</span>
					</div>
					<div className="headerSubTitle">
						ZeroJ, 아무것도 없던 출발점에서 시작한 끝없는 프론트엔드 여정. 무한한 가능성에 도전하며 성장해온 프론트엔드 개발자입니다.
					</div>
				</div>
			</header>


		)
	}
}

export default Header;
