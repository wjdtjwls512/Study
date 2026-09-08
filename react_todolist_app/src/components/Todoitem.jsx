import "./Todoitem.css";

const Todoitem = ({ id, isDone, content, date, onUpdate }) => {
  const onChangeCheckbx = () => {
    onUpdate(id);
  };
  return (
    <div className="Todoitem">
      <input onChange={onChangeCheckbx} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default Todoitem;
