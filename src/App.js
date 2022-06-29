import TodoList from './TodoList'
function App() {
  return (
  <>
  <TodoList/>
  <input type = "text"/>
  <button>
    Add Todo
  </button>
  <button>
    Clear Complete
  </button>
  <p>0 Left</p>
  </>  
  );
}

export default App;
