import axios from 'axios'

axios.defaults.baseURL = ' https://cnodejs.org/api/v1';

class Topic {
  static query(){
    return axios.get('topics');
  }
  static get(id){
    return axios.get('toplic/' + id);
  }
}

export {
  Topic
}
