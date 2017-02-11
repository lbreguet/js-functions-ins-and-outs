'use strict';

const arrayFactory = function () {
  let array = [];
  return function (num) {
    array.push(num);
    return array;
  };
};

let mikeAdds = arrayFactory();
let benAdds = arrayFactory();


module.exports = mikeAdds;
module.exports = benAdds;
