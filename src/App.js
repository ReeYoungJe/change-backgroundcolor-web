import './App.css';
import React from 'react';
import Header from "./components/Header/Header";

/**
 * Header 오늘 날짜와 요일을 나타 남  오늘 할일은 몇개 남았는지
 * TodoTemplate 투두 리스트 레이아웃
 * TodoList 할일에 대한 정보가 들어있느곳 앞으로 해야될 일이 몇가지 있는지 나타 나는곳
 * TodoItem 각 할일에 대한 렌더링 해주는곳
 * TodoCreate 새로운 할일을 등록 할수 있는곳
 *
 * */


class App extends React.Component {

	state = {
		items: [],
	};

	componentDidMount() {
		this.fetchTodos();
	}

	fetchTodos = () => {
		setTimeout(() => {
			this.setState({
				items: [
					{
						title: '오늘 할일',
						description: '오늘 할일 설명',
					},
				]
			})
		}, 1000);

		setTimeout(() => {
			this.setState({
				items: [
					{
						title: '오늘 할일',
						description: '오늘 할일 설명',
					},
					{
						title: '내일 할일',
						description: '내일 할일 설명',
					},
				]
			})
		}, 2000);

		setTimeout(() => {
			this.setState({
				items: [
					{
						title: '오늘 할일',
						description: '오늘 할일 설명',
					},
					{
						title: '내일 할일',
						description: '내일 할일 설명',
					},
					{
						title: '모레 할일',
						description: '모레 할일 설명',
					}
				]
			})
		}, 3000);
	};


	render() {
		return (
			<div className="App">
				<Header/>
			</div>
			// <div className="App" style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
			// 	<div className={'todo'}>
			// 		{
			// 			this.state.items.map((item) => {
			// 				return (
			// 					<TodoItem title={item.title} description={item.description}/>
			// 				)
			// 			})
			// 		}
			// 	</div>
			// </div>
		);
	}
}

export default App;
