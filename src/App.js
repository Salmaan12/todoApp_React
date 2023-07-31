import './App.css';
import './Components/project_name/ProjectName'
import ProjectName from './Components/project_name/ProjectName';
import AddTodo from './Components/add_todo/AddTodo';
// import ListTodo from './Components/list_todo/ListTodo';

let todos = [
  {
    sno: 1,
    itemName: 'go to market',
    dueDate: '11/03/2023'
  },
  {
    sno: 2,
    itemName: 'go to office',
    dueDate: '12/05/2023'
  },
  {
    sno: 3,
    itemName: 'go to university',
    dueDate: '11/04/2023'
  }
]

function App() {
  return (
    <>
      <ProjectName />
      <AddTodo />
      {/* <ListTodo todos={todos} /> */}
    </>
  );
}

export default App;
