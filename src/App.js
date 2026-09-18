import './Styles/App.css';
import { Header } from './Component/Header';
import { Main } from './Component/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
        <BrowserRouter basename='/Portfolio'>
          <Header/>
          <Main/>
        </BrowserRouter>
    </div>
  );
}

export default App;
