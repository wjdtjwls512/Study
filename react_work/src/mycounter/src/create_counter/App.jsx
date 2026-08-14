import { useState } from "react";
import Viewer from "./Viewer";
import Controller from "./Controller";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };
  return (
    <div className="main">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
