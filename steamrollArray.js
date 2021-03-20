function steamrollArray(arr) {
  let resultArray = []; 
  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      resultArray = resultArray.concat(steamrollArray(arr[i]));
    } else {
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}

steamrollArray([1, [2], [3, [[4]]]]);