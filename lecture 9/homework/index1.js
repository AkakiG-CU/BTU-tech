function uniqueValues(arr) {
  let uniqueArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  
  return uniqueArr;
}
console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(uniqueValues([5, 7, 8, 5, 6, 7, 10])); // [5, 7, 8, 6, 10]