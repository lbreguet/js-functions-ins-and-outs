'use strict';

const max = function () {
  let highNum = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (highNum < arguments[i]) {
      highNum = arguments[i];
    }
  } return highNum;
};

max(1, 2); // 2
max(2,3,4,5);

const maxOfArray = function (arr) {
  let highNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (highNum < arr[i]) {
      highNum = arr[i];
    }
  } return highNum;
};

max([1,2,3]);
max ([4,5,6,7]);

let person = {
  name: 'Louis',
  age: 20,
};

const addProperty = function (obj, prop, val) {
  // obj.prop = val;
  obj[prop] = val;
  // person['hometown'] = 'hingham';
};

addProperty(person, 'home town', 'hingham')

module.exports = max;
module.exports = maxOfArray;
module.exports = addProperty;
