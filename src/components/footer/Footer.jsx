import React, {Component} from 'react';
import './Footer.scss';

class Footer extends Component {
	render() {
		return (
			<footer className={"footer"}>
				<div className={"footerInner"}>

					<div className={"made"}>
						<p>ZeroJ, 아무것도 없던 출발점에서 시작한 끝없는 프론트엔드 여정. 무한한 가능성에 도전하며 성장해온 프론트엔드 개발자입니다.</p>
						<p>Made By ZeroJ With 😎</p>
					</div>
					<div className={"copy"}>
						(C) 2024 ZeroJ.kr
					</div>
				</div>

			</footer>
		);
	}
}

export default Footer;