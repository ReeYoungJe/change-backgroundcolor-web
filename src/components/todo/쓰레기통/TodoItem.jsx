import './TodoItem.css';
import React from 'react';

export class TodoItem extends React.Component {
  render() {
    return (
      <div className={'item'}>
        <span>{this.props.title}</span>
        <span>{this.props.description}</span>
      </div>
    )
  }
}
