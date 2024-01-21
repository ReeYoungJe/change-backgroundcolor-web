import './App.css';
import React from 'react';
import Router from "./routes";

/**
 * Header 오늘 날짜와 요일을 나타 남  오늘 할일은 몇개 남았는지
 * TodoTemplate 투두 리스트 레이아웃
 * TodoList 할일에 대한 정보가 들어있느곳 앞으로 해야될 일이 몇가지 있는지 나타 나는곳
 * TodoItem 각 할일에 대한 렌더링 해주는곳
 * TodoCreate 새로운 할일을 등록 할수 있는곳
 *
 * */


class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Router/>
			</div>

		);
	}
}

export default App;
