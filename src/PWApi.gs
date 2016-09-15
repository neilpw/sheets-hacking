var PWApi = (function(){
  function get(path, params) {
    params.method = 'get';

    return request(path, params);
  }

  function put(path, params) {
    params.method = 'put';

    return request(path, params); 
  }

  function post(path, params) {
    params.method = 'post';

    return request(path, params); 
  }

  function request(path, params) {
    params.headers = {};
    params.headers['X-PW-AccessToken'] = API_KEY;
    params.headers['X-PW-Application'] = 'developer_api';
    params.headers['X-PW-UserEmail'] = USER_EMAIL;

    params.method = 'get';
    params.dataType = 'json';
    params.contentType = 'application/json';

    var url = "https://" + PW_ENV + "/developer_api/v1/" + path;    

    var response = UrlFetchApp.fetch(url, params);

    Logger.log(response);

    return response;
  }

  return {
    get: get,
    put: put,
    post: post
  };

})();
