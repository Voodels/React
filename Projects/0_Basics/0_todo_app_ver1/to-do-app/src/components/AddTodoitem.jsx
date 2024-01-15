const AddTodo = () => {
  const task = "finish react";
  const date = "24/12/2023";
  return (
    <>
      <div class="container text-center list-container">
        <div class="row">
          <div class="col-6">{task}</div>
          <div class="col-4">{date}</div>
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
