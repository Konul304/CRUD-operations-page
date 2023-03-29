import './App.css';
import Create from './components/create'

function App() {
  return (
    <div className="container_main">
      <div className="form_container text-light text-center p-5 fs-3 fw-bold">
        <p className="mb-5">React CRUD Operations</p>
      <Create/>
      </div>
    </div>
  );
}

export default App;
