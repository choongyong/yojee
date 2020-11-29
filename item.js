const itemFactory = (item) => {
  return {
    "width": 1,
    "weight": item.quantity * (item.grams / 1000),
    "volumetric_weight": 1,
    "volume": 1,
    "service_type_id": 1,
    "service_type": "same_day",
    "price_amount": (item.quantity * item.price).toFixed(2),
    "payload_type": "parcel",
    "length": 1,
    "height": 1
  };
};
module.exports = itemFactory;