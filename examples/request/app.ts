import SyHealth from '../../src/index';

async function requestGet() {
  let result = await SyHealth.request({
    url: '/simple/get',
    method: 'GET'
  });

  console.log(result);
}

async function requestGetWithData() {
  let result = await SyHealth.request({
    url: '/base/get',
    method: 'GET',
    params: {
      'getParams': 1
    }
  });

  console.log(result);
}

async function requestSimple() {
  let result = await SyHealth.request({
    url: '/base/get',
    method: 'GET'
  });

  console.log(result);
}

async function requestInterceptor() {
  let result = await SyHealth.request({
    url: '/base/get',
    method: 'GET',
    params: {
      'getParams': 1
    },
    requestInterceptor: {
      onResolved: (config) => {
        console.log('request', config);
        return config;
      },
      onRejected: (error) => {
        console.log('request', error);
        // return error;
      }
    },
    responseInterceptor: {
      onResolved: (result) => {
        console.log('response', result);
        return result;
      },
      onRejected: (result) => {
        console.log('response', result);
        return result.data;
      }
    }
  });

  console.log('interceptor', result);
}


requestSimple();
requestGetWithData();
requestInterceptor();
