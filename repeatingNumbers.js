const repeatNumbers = function (data) {

  const result = data.map(x => {
    return x[0].toString().repeat(x[1]);
  })

  return result;

}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));