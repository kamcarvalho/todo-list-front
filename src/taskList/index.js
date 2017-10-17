import React, { Component } from 'react';
import Task from './task';
import TaskService from './taskService';

export default class TaskList extends Component {

  constructor(props) {
    super(props);

    this.taskService = new TaskService();
    this.state = {
      tasks: [],
    };
  }

  async componentDidMount() {
    const tasks = await this.taskService.getTasks();
    console.log(tasks);
    this.setState({tasks});
  }

  render() {
    return (
      <div>
        {this.state.tasks.map(e => <Task key={e._id} value={e} />)}
      </div>
    );
  }
}
