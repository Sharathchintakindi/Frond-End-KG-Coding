function List1() {
  let todoName = "Go to College";
  let todoDate = "4/10/2023";
  return (
    <div class="row kg-row">
      <div class="col-6">{todoName}</div>
      <div class="col-4">{todoDate}</div>
      <div class="col-2">
        <button type="button kg-button" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default List1;
