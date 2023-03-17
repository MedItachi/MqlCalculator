const randomId = () => {
  return Math.random().toString(36).substring(2, 10);
};

//export { randomId };
module.exports = { randomId };
