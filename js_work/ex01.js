function runGreeting(name, run) {
  sayHello(name);
}

function sayHello(name) {
  console.log(`안녕하세요, ${name}님`);
}

runGreeting("민수", sayHello);

function checkScore(score, onPass, onFail) {
  if (score >= 60) {
    onPass(score);
  } else {
    onFail();
  }
}

function onPass(score) {
  console.log(`합격`);
}

function onFail(score) {
  console.log("불합격");
}

checkScore(70, onPass, onFail);

function repeat(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

function printNumber(num) {
  console.log(`${num}번째 실행`);
}

repeat(3, printNumber);

function calculate(a, b, callback) {
  console.log(callback(a, b));
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

calculate(10, 3, add);
calculate(10, 3, multiply);