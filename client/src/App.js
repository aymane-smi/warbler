import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="onboarding">
          <Navbar />
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
