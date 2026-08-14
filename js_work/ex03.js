console.log("김밥 주문 접수");
console.log("라면 주문 접수");

setTimeout(() => {
  console.log("김밥 조리 완료");
}, 2000);

setTimeout(() => {
  console.log("라면 조리 완료");
}, 1000);

console.log("모든 주문 접수 완료");