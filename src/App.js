import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './views/Main';
import { Routes, Route } from 'react-router-dom';
import AdoptView from './views/AdoptView'
import AdoptEdit from './views/AdoptEdit'
import AdoptCreate from './views/AdoptCreate'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<AdoptView />} path="/adopt/view/:id" />
        <Route element={<AdoptEdit />} path="/adopt/edit/:id" />
        <Route element={<AdoptCreate />} path="/adopt/create" />
      </Routes>
    </div>
  );
}
export default App;