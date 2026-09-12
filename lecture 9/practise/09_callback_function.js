// Callback function
function myFn(cb) {
  cb();
}

myFn(function () {
  console.log('Callback FN');
});
