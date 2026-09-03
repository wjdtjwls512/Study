import { use, useState } from "react";

function useInput() {
  const [input, setnput] = useState("");

  const onChange = (e) => {
    setnput(e.target.value);
  };
  return [input, onChange];
}

export default useInput;
