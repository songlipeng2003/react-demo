import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'

axios.interceptors.request.use(function (config) {
  config.transformRequest = [function(data){
    if(!data){
      data = {};
    }
    data['params'] = {accesstoken: localStorage.getItem(['token'])};
    return data;
  }];
  return config;
}, function (error) {
  return Promise.reject(error);
});

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

class Message {
  static query(accessToken){
    return axios.get('messages', {params: {accesstoken: accessToken}});
  }
}

export {
  Topic,
  User,
  Message
}
