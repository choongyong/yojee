const body = (obj) => {
  return {
    steps: [],
    "sender_type": "organisation",
    "sender_id": obj.sender_id,
    "placed_by_user_profile_id": "3",
    items: [],
    item_steps: [],
  };
};
module.exports = body;