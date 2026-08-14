import { userState } from "react";

function App() {
  const [students] = userState([
    { id: 1, name: "김민수" },
    { id: 2, name: "이지우" },
    { id: 3, name: "박서준" },
  ]);

  return (
    <div>
      <h1>학생 명단</h1>
      <ul>
        {students.map((students) => {
          <li>{students.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App