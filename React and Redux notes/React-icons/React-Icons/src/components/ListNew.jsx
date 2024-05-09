import { MdDelete } from "react-icons/md";
// import styles from "./ListNew.module.css";
function ListNew({ todoName, todoDate, onDeleteClick }) {
  // let todoName = "Buy Milk";
  // let todoDate = "4/10/2023";

  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button
          type="button "
          className="btn btn-danger kg-button "
          onClick={() => onDeleteClick(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default ListNew;
