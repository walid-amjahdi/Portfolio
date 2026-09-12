import './Styles/App.css';
import { Header } from './Component/Header';
import { Main } from './Component/Main';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header/>
          <Main/>
        </BrowserRouter>
    </div>
  );
}

export default App;
