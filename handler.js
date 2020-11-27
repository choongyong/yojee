'use strict';
const axios = require('axios');
const moment = require('moment');
const bodyFactory = require("./body");
const itemFactory = require("./item");
const stepsFactory = require("./step");

module.exports.helloWorld = async (event, context) => {
  // console.log(event);
  const payload = JSON.parse(event.body);
  console.log(payload);

  const body = {
    ...bodyFactory({ sender_id: 1454 }),
    price_currency: payload.currency,
    price_amount: payload.total_price,
    external_id: `${payload.id}`,
  };

  const quantity = payload.line_items.reduce((acc, it) => {
    acc = acc + it.fulfillable_quantity;
    return acc;
  }, 0);

  payload.line_items.forEach((line_item) => {
    body.items.push(itemFactory(line_item));
  });
  const now = moment();

  body.steps.push(stepsFactory({
    now: now,
    quantity: quantity,
  }));

  body.steps.push({
    ...stepsFactory({
      now: now,
      quantity: quantity,
    }),
    postal_code: payload.shipping_address.zip,
    country: payload.shipping_address.country,
    address: payload.shipping_address.address1,
  });

  body.item_steps.push({
    "type": "pickup",
    "order_step_id": 0,
    "item_id": 0,
  });

  body.item_steps.push({
    "type": "dropoff",
    "order_step_id": 1,
    "item_id": 0,
  });

  console.log(body);

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
    body: 'simple return for now',
  };

  console.log(axios_resp);
  // console.log(event.email);
  // console.log(body);
  return response;
};
