function doubleNumber(num) {
  return new Promise((resolve) => {
    console.log("2. 비동기 작업을 시작합니다.");

    setTimeout(() => {
      const result = num * 2;

      console.log("5. 계산이 완료되었습니다.");
      resolve(result);
    }, 1000);
  });
}

console.log("1. doubleNumber 함수를 호출합니다.");

const promise = doubleNumber(5);

console.log("3. 함수가 반환한 값:", promise);

promise.then((result) => {
  console.log("6. then에서 받은 결과:", result);
});

console.log("4. 함수 호출 이후의 코드를 실행합니다.");

const calculateSquare = new Promise((resolve) => {
  const number = 7;

  console.log("계산을 시작합니다.");

  setTimeout(() => {
    const result = number * number;
    resolve(result);
  }, 1000);
});

calculateSquare.then((result) => {
  console.log(`계산 결과: ${result}`);
});

function getProductPrice(productName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productName === "") {
        reject(new Error("상품명을 입력하세요."));
        return;
      }
      if (productName !== "노트북") {
        reject(new Error("상품을 찾을 수 없습니다."));
        return;
      }
      resolve(1200000);
    }, 1000);
  });
}

getProductPrice("스마트폰")
  .then((price) => {
    console.log(`상품 가격: ${price}원입니다.`);
  })
  .catch((error) => {
    console.log(`오류: ${error.message}`);
  });

function getLunchMenu(day) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (day === "월요일") {
        resolve("돈가스");
      } else if (day === "화요일") {
        resolve("비빔밥");
      } else {
        reject(new Error("등록된 급식 정보가 없습니다."));
      }
    }, 1000);
  });
}

const lunch = getLunchMenu("화요일");

lunch
  .then((menu) => {
    console.log(`${menu}이 나오는 날입니다.`);
  })
  .catch((error) => {
    console.log(`조회 실패: ${error.message}`);
  });

function getGameScore() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(80);
    }, 1000);
  });
}

getGameScore()
  .then((score) => {
    console.log(`기본 점수: ${score}점`);

    const bonusScore = bonusScore + 20;
    console.log(`보너스 적용: ${bonusScore}`);

    return bonusScore;
  })
  .then((bonusScore) => {
    const finalScore = bonusScore * 2;
    return finalScore;
  })
  .then((finalScore) => {
    console.log(`최종 점수: ${finalScore}`);
  })
  .catch((error) => {
    console.log(`오류 발생: ${error.message}`);
  });

async function orderProduct() {
  try {
    const product = await checkStock("키보드");
    const paymentResult = await makePayment(product);
    const deliveryResult = await prepareDelivery(paymentResult);

    console.log(deliveryResult);
  } catch (error) {
    console.log(`주문 실패: ${error.message}`);
  }
}
orderProduct();

checkStock("키보드")
  .then((product) => {
    return makePayment(product);
  })
  .then((paymentResult) => {
    return prepareDelivery(paymentResult);
  })
  .then((deliveryResult) => {
    console.log(deliveryResult);
  })
  .catch((error) => {
    console.log(`주문 실패: ${error.message}`);
  });

const getData = new Promise((resolve) => {
  console.log("데이터를 가져오는 중...");

  setTimeout(() => {
    console.log("데이터 가져오기 성공");
  }, 2000);
});

getData.then((message) => {
  console.log("then 실행:", message);
  console.log("완료 후:", getData);
});

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("데이터 가져오기 성공");
    }, 2000);
  });
}

async function showData() {
  console.log("데이터를 가져오는 중...");
  const result = await fetchData();
  console.log(result);
}

showData();
