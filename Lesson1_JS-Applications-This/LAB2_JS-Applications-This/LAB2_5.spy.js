function Spy(target, method) {
  // target = obj, method = string
  let orginialFunction = target[method];
  
  let result = {
    count: 0,
  };
  
  target[method] = function () {
    result.count++; // track function was called
    return orginialFunction.apply(this, arguments);
  };

  return result;
}

let obj = {
  method: () => "invoked",
};

let spy = Spy(obj, "method");
obj.method();
obj.method();
obj.method();
console.log(spy); // { count: 3 }

let spy2 = Spy(console, "log");
console.log(spy2); // { count: 1 }
console.log(spy2); // { count: 2 }
console.log(spy2); // { count: 3 }
