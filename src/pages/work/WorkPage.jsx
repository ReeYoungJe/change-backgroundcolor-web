import React from 'react';
import Header from "../../components/Header/Header";
import './WorkPage.scss';


export default class MainPage extends React.PureComponent {
	render() {
		return (<div>
			<Header/>
			<section className={"workInner"}>
				<h1 className={"hidden"}>Work Project 페이지</h1>
				<div className={"workProject"}>

					<div className={"left"}>
						<div className={"projectImg"}>
							이미지
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
										<li className={"skillsItem"}>Html/Scss</li>
										<li className={"skillsItem"}>Javascript</li>
										<li className={"skillsItem"}>GULP JS</li>
										<li className={"skillsItem"}>VUE JS</li>
										<li className={"skillsItem"}>Figma</li>


									</ul>
								</div>
								{/*기술스택*/}

							</div>

							<div className={"projectDetailBottom"}>
								<p>공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던내용공영홈쇼핑 에서 했던공영홈쇼핑 에서 했던내용공영홈쇼핑
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
			</section>
		</div>)
	}
}