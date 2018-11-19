async function f() {
  try {
    await new Promise(function(resolve, reject) {
      reject();
    });
  } catch (error) {
    console.log(error);
  }
  await 2;
  return 8;
}

f().then(function(v) {
  console.log(v);
});
