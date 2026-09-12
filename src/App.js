import './App.css';
import { Header } from './Component/Header';
import { Main } from './Component/Main';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header/>
        </BrowserRouter>
        <Main/>
    </div>
  );
}

export default App;
