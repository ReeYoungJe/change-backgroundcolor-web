import React from 'react';
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import './WorkPage.scss';
import gongyoungLogo from '../../asset/work/gongyoung/gongyoungLogo.jpg';
import {Link} from 'react-router-dom'

export default class MainPage extends React.PureComponent {
	render() {
		return (<div>
			<Header/>
			<section className={"workInner"}>
				<h1 className={"hidden"}>Work Project 페이지</h1>
				<div className={"workProject"}>

					<div className={"left"}>
						<div className={"projectImg"}>
							<img src={require('../../asset/work/gongyoung/gongyoungLogo.jpg')}/>
						</div>
					</div>


					<div className={"right"}>

						<div className={"projectDetail"}>

							<div className={"projectDetailHeader"}>

								{/*제목 */}
								<strong className={"subTitle"}>PROJECT DETAIL</strong>
								<h2 className={"title"}>공영홈쇼핑 Event Part</h2>
								{/*제목 */}

								{/*기술스택*/}
								<div className={"skills"}>
									<ul className={"skillsInner"}>
										<li className={"skillsItem"}>HTML/SCSS</li>
										<li className={"skillsItem"}>JAVASCRIPT</li>
										<li className={"skillsItem"}>GULP JS</li>
										<li className={"skillsItem"}>VUE JS</li>
										<li className={"skillsItem"}>Figma</li>


									</ul>
								</div>
								{/*기술스택*/}

							</div>

							<div className={"projectDetailBottom"}>
								<p>공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던공영홈쇼핑 에서 했던내용공영홈쇼핑 에서
									했던내용공영홈쇼핑 에공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던공영홈쇼핑 에서 했던내용공영홈쇼핑
									에서 했던내용공공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에
									서 했던공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영공영홈쇼핑 에서
									했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했
									던내용공영홈쇼핑 에서공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑홈쇼핑 에서 했던내용공
									영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했
									던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용</p>
							</div>


						</div>

					</div>

				</div>
				<div class={"workContents"}>
					<div className={"nt1"}>
						{/*<img src={require('../../asset/work/gongyoung/content_01.jpg')}/>*/}
					</div>
					<div className={"nt2"}>
						<p>구축부터 유지보수까지 지속적으로 참여한 프로젝트에요. 기획, 개발, 테스트에 이르기까지 모든 실무자가 함께 공통의 과제를 바라보는 스프린트 방식으로 작업했습니다. 초기부터 함께 했기에 더욱
							애정이 담긴 프로젝트입니다.</p>
						<p>구축부터 유지보수까지 지속적으로 참여한 프로젝트에요. 기획, 개발, 테스트에 이르기까지 모든 실무자가 함께 공통의 과제를 바라보는 스프린트 방식으로 작업했습니다. 초기부터 함께 했기에 더욱
							애정이 담긴 프로젝트입니다.</p>
					</div>
					<div className={"nt3"}>
						<ul>
							<li>
								{/*<img src={require('../../asset/work/gongyoung/content_02.jpg')}/>*/}
								모바일
							</li>
							{/*<li><img src={require('../../asset/work/gongyoung/content_03.jpg')}/></li>*/}
							{/*<li><img src={require('../../asset/work/gongyoung/content_03.jpg')}/></li>*/}
						</ul>
					</div>
					<div className={"nt4"}>
						내가 했던 작업물이다 음하하내가 했던 작업물이다 음하하내가 했던 작업물이다 음하하내가 했던 작업물이다 음하하내가 했던 작업물이다 음하하내가 했던 작업물이다 음하하내가 했던 작업물이다 음하하내가
						했던 작업물이다 음하하내가 했던 작업물이다 음하하
					</div>
				</div>

			</section>

			<div className={"workMore"}>
				<ul>

					<li className={"workMoreItem"}>
						<div className={"workMoreItemImg"}>
							<Link to={"/"}><img src={require('../../asset/work/gongyoung/gongyoungLogo.jpg')}/></Link>

						</div>
						<div className={"workMoreItemContent"}>
							<Link to={"/"}>
								<h2>타이틀</h2>
								<p>내용 </p>
								<div className={"dateTime"}>2024년 10월 11일</div>
								<div className="sumIcon">공영홈쇼핑</div>
							</Link>
						</div>
					</li>

					<li className={"workMoreItem"}>

						<Link to={"/"}>
							<div className={"workMoreItemImg"}>
								<img src={require('../../asset/work/gongyoung/gongyoungLogo.jpg')}/>

							</div>
						</Link>
						<div className={"workMoreItemContent"}>
							<Link to={"/"}>
								<h2>타이틀</h2>
								<p>내용 </p>
								<div className={"dateTime"}>2024년 10월 11일</div>
								<div className="sumIcon">공영홈쇼핑</div>
							</Link>
						</div>
					</li>


				</ul>
			</div>


			<Footer/>
		</div>)
	}
}