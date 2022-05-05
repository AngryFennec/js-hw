const area = (radius) => {
  return Math.PI * radius * radius;
}

const circumference = (radius) => {
  return 2 * Math.PI * radius;
}

module.exports.area = area;
module.exports.circumference = circumference;
