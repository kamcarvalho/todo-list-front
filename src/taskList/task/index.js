import React, { Component } from 'react';
import './styles.css';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div title={this.props.value.description} className='task'>
        <span className='title'>{this.props.value.title}</span>
        <span className='status'>{this.props.value.status}</span>
      </div>
    );
  }
}
