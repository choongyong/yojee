'use strict';

module.exports.helloWorld = async (event, context) => {
  const body = JSON.stringify({
    message: 'Go Serverless v1.0! My function executed successfully!',
    input: event,
  });
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: body,
  };

  console.log(body);
  return response;
};
