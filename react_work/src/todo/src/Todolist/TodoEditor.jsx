import { useState, useRef } from "react";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const [isError, setIsError] = useState(false);
  const inputRef = useRef();
  const onChangeContent = (e) => {
    setContent(e.target.value);
    if (isError) {
      setIsError(false);
    }
  };
  const onSubmit = () => {
    if (!content) {
      setIsError(true);
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 </h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder={
            isError ? "빈상태에서 추가가 안됩니다." : "새로운 Todo..."
          }
          style={{ borderColor: isError ? "red" : "initial" }}
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
