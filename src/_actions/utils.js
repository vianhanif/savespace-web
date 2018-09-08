export const requestErrorHandler = (message, history) => {
  switch (message) {
    case 'Request failed with status code 401':
      history.push('/');
      break;
    default:
      history.push('/');
  }
};
