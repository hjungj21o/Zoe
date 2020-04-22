const validNum = (num) => {
  return typeof num === "number" && num.toString().length > 0;
};

module.exports = validNum;
