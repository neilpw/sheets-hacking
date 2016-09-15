var PWApi = (function(){
  function get(path) {
    params.method = 'get';

    return request(path, {});
  }

  function put(path, payload) {
    var params = {};

    params.method = 'put';
    params.payload = JSON.stringify(payload);

    return request(path, params); 
  }

  function post(path, payload) {
    var params = {};

    params.method = 'post';
    params.payload = JSON.stringify(payload);

    return request(path, params); 
  }

  function request(path, params) {
    params.headers = {};
    params.headers['X-PW-AccessToken'] = API_KEY;
    params.headers['X-PW-Application'] = 'developer_api';
    params.headers['X-PW-UserEmail'] = USER_EMAIL;

    params.dataType = 'json';
    params.contentType = 'application/json';

    var url = "https://" + PW_ENV + "/developer_api/v1/" + path;    

    var response = UrlFetchApp.fetch(url, params);

    Logger.log(response);

    return JSON.parse(response.getContentText());
  }

  return {
    get: get,
    put: put,
    post: post
  };

})();
