function calculatePeriod(radius) {
  let rad = radius + 6367.4447;
  return Math.round(2*Math.PI*Math.sqrt((rad*rad*rad)/398600.4418));
}

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var result = [];
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    result.push({name: arr[i].name, orbitalPeriod: calculatePeriod(arr[i]["avgAlt"])});
  }
  console.log(result);
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
