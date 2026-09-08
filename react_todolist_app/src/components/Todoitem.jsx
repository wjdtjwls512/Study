import "./Todoitem.css";

const Todoitem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbx = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    console.log(id)
    onDelete(id);
  };
  return (
    <div className="Todoitem">
      <input onChange={onChangeCheckbx} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default Todoitem;
