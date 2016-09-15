var PWApi = (function(){
  function get(path, params) {
    params.headers['X-PW-AccessToken'] = API_KEY;
    params.headers['X-PW-Application'] = 'developer_api';
    params.headers['X-PW-UserEmail'] = USER_EMAIL;

    params.method = 'get';
    params.dataType = 'json';
    params.contentType = 'application/json';

    var url = "https://" + PW_ENV + "/developer_api/v1/" + path;

    var response = UrlFetchApp.fetch(url, params);

    Logger.log(response);
  }

  return {
    get: get
  };
})();
