async function pay(pays) {
  let result = {status: true};

  for(let i = 0; i < pays.length; i++){
    if (result.status) {
        try {
          result = await gPromise();
          console.log("promise" + i);
        } catch (e) {
          console.log("error" + i);
          result = { status: false, from: "catch" + i };
        }
      }
    
  }

  console.log("finally");
  return result
}

function gPromise() {
  return new Promise(function(resolve, reject) {
    let i;
    const cb = Math.random() > 0.5;
    console.log(cb)
    const a = cb && i.s;
    setTimeout(function() {
      (cb ? resolve : reject)({
        status: cb
      });
    }, 300);
  });
}

pay([0,1,2,3,4]);
