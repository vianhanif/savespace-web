let variableConstants = {
  URL: '',
  SessionId: 'SessionId'
};

if (
  process.env.EBABA_ENV == 'development' ||
  process.env.EBABA_ENV == 'staging'
) {
  variableConstants.URL = "http://api.omaoppa.com:3000"; // dev base api
  // variableConstants.URL = 'https://api.ebaba.com'; // dev base api
} else {
  variableConstants.URL = 'https://api.ebaba.com'; // prod base api
}

export default variableConstants;
