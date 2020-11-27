const stepFactory = (step) => {
  return {
    "from_time": step.now.add(1, 'hours').toISOString(),
    "to_time": step.now.add(4, 'hours').toISOString(),
    "state": "",
    "quantity": step.quantity,
    "postal_code": "909123",
    "country": "Singapore",
    "address": "45 Loyang Ave 3",
    "lng": 103.84979090000002,
    "lat": 1.2804208,
  };
};
module.exports = stepFactory;