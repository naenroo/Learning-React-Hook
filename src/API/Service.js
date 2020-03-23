import axios from 'axios';

export const fetchDataSuspense = () => {
  const postsPromise = getPost();

  return {
    posts: wrapPromise(postsPromise)
  };
};

const wrapPromise = promise => {
  //Set initial Status
  let status = 'waiting';
  //Store Default
  let result;
  //Wait for Promise
  let suspender = promise.then(
    response => {
      status = 'success';
      result = response;
    },
    err => {
      status = 'error';
      result = err;
    }
  );

  return {
    read() {
      if (status === 'waiting') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
};

const getPost = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/posts?_limit=8')
    .then(response => response.data)
    .catch(error => {
      alert(error, 'Failed Fetching Data');
      console.log(error, 'Error');
    });
};
