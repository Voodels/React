import AddTodo from "./components/AddTodo";
import Appname from "./components/Appname";
import AddTodoitem from "./components/AddTodoitem";
import "./App.css";
function App() {
  const task = "finish react";
  const date = "24/12/2023";
  return (
    <>
      <Appname />
      <AddTodo />
      <AddTodoitem task={task} date={date} />
      <AddTodoitem task={task} date={date} />
    </>
  );
}

export default App;
