import './App.css';
import React from 'react';
import {TodoItem} from "./components/todo/TodoItem";

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
      <div className="App" style={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
        <div className={'todo'}>
          {
            this.state.items.map((item) => {
              return (
                <TodoItem title={item.title} description={item.description} />
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
