getAllUser = async () => {
  let data = await {
    msn: "All  data information on services",
    code: 202,
  };
  return data;
};
Another = async () => {
  let data = await {
    msn: "Another Information",
    code: 202,
  };
  return data;
};

module.exports = {
  getAllUser,
  Another,
};
