const temperature = [18, 25, 31, 22];

function printTemperature() {
  temperature.forEach((temp) => {
    console.log(`현재 온도 ${temp}도`);
  });
}

function newTemperature() {
  const newTemp = temperature.map((temp) => {
    return temp + 2;
  });
  console.log(newTemp);
}

function hotTemperature() {
  const hotTemp = temperature.filter((temp) => {
    return temp >= 25;
  });
  console.log(hotTemp);
}

printTemperature();
newTemperature();
hotTemperature();

const students = [
  { name: "민수", score: 75 },
  { name: "지우", score: 92 },
  { name: "현우", score: 84 },
  { name: "서연", score: 68 },
];

function getStudents() {
  const result = students
    .filter((student) => student.score >= 80)
    .map((student) => student.name);
  console.log(result);
}

getStudents();
