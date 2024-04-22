function AddtoDo() {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button kg-button" class="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddtoDo;
