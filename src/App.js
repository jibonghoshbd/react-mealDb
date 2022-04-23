import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Restaurants from './components/Restaurants/Restaurants';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar></Navbar>
        <Restaurants></Restaurants>
      </div>
    </>
  );
}

export default App;
