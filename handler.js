'use strict';
const axios = require('axios')

module.exports.helloWorld = async (event, context) => {
  const body = {
    "steps": [
      {
        "to_time": "2019-09-17T06:00:00.000Z",
        "state": "",
        "quantity": 50,
        "postal_code": "",
        "lng": 103.84979090000002,
        "lat": 1.2804208,
        "from_time": "2019-09-17T02:00:00.000Z",
        "country": "Singapore",
        "address": "144 Robinson Road, Singapore"
      },
      {
        "to_time": "2019-09-17T10:00:00.000Z",
        "state": "",
        "quantity": 50,
        "postal_code": "068898",
        "lng": 103.84920669999997,
        "lat": 1.2800304,
        "from_time": "2019-09-17T06:00:00.000Z",
        "country": "Singapore",
        "address": "80 Robinson Road, Singapore"
      }
    ],
    "sender_type": "organisation",
    "sender_id": 1454,
    "price_currency": "SGD",
    "price_amount": "0",
    "placed_by_user_profile_id": "3",
    "items": [
      {
        "width": 1,
        "weight": 1,
        "volumetric_weight": 0.0002,
        "volume": 1,
        "service_type_id": 1,
        "service_type": "same_day",
        "price_amount": "0",
        "payload_type": "document",
        "length": 1,
        "height": 1
      }
    ],
    "item_steps": [
      {
        "type": "pickup",
        "order_step_id": 0,
        "item_id": 0
      },
      {
        "type": "dropoff",
        "order_step_id": 1,
        "item_id": 0
      }
    ],
    "external_id": "my-external-order-id"
  }
  // const axios_resp = await axios
  //   .get('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
  //   .then(({ data }) => {
  //     return data
  //   })
  const config = {
    headers: {
      'company_slug': 'yojee-interview-integrations',
      'access_token': '5foTu0R+0sPShd/8jyuYXF2UbrUle/oSX+nPYVdGq0c=',
    }
  }
  const axios_resp = await axios
    .post('https://umbrella-staging.yojee.com/api/v3/dispatcher/orders', body, config)
    .then(({ data }) => {
      return data
    })

  const body2 = JSON.stringify({
    message: 'Go Serverless v1.0! My function executed successfully!',
    input: event,
  });
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: axios_resp,
  };

  // console.log(axios_resp);
  return response;
};
