function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  else {
  	// handle false comparison 
    if (typeof a != "object" || typeof b != "object" || a == null || b == null || Object.keys(a).length != Object.keys(b).length) {
    	return false;
    }
    else {
      for (var property in a) {
         return deepEqual(a[property], b[property])
      }
    }
  }
}



var obj = {here: {is: "an"}, object: 2};
var obj2 = {here: {is: "an"}, object: 2, o: 3};
console.log(deepEqual(obj, obj2));
// ? true
console.log(deepEqual(obj, {here: 1, object: 2}));
// ? false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// ? true