import axios from 'axios'

axios.defaults.baseURL = ' https://cnodejs.org/api/v1';

class Topic {
  static query(){
    return axios.get('topics');
  }
  static get(id){
    return axios.get(`topic/${id}`);
  }
}

class User {
  static get(loginname){
    return axios.get(`user/${loginname}`);
  }

  static login(accessToken){
    return axios.post('accesstoken', {accesstoken: accessToken});
  }
}

export {
  Topic,
  User
}
