const itemFactory = (item) => {
  return {
    "width": 1,
    "weight": item.grams / 1000,
    "volumetric_weight": 0.0002,
    "volume": 1,
    "service_type_id": 1,
    "service_type": "same_day",
    "price_amount": item.price,
    "payload_type": "parcel",
    "length": 1,
    "height": 1
  };
};
module.exports = itemFactory;