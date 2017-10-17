import axios from 'axios';

export default class TaskService {

  async getTasks() {

    try {
        const result = await axios.get('http://localhost:5000/tasks');
        return result.data;
    } catch (e) {
      console.log(e);
    }
  }
}
