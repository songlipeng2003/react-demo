import axios from 'axios'

var instance = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
});

instance.interceptors.request.use(function (config) {
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
    return instance.get('topics');
  }
  static get(id){
    return instance.get(`topic/${id}`);
  }
}

class User {
  static get(loginname){
    return instance.get(`user/${loginname}`);
  }

  static login(accessToken){
    return instance.post('accesstoken', {accesstoken: accessToken});
  }
}

class Message {
  static query(accessToken){
    return instance.get('messages', {params: {accesstoken: accessToken}});
  }
}

export {
  Topic,
  User,
  Message
}
