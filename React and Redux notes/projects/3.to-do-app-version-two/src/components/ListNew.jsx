function ListNew({ todoName, todoDate }) {
  // let todoName = "Buy Milk";
  // let todoDate = "4/10/2023";

  return (
    <div className="row kg-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2">
        <button type="button kg-button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ListNew;
