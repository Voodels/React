const AddTodo = () => {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Add item" />
          </div>
          <div class="col-4">
            <input type="date" placeholder="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success">
              Success
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddTodo;
